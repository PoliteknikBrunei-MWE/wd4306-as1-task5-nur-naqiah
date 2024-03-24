import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Places } from '../places.modal';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlaceDetailPage implements OnInit {

  loadedPlaces: Places | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private placesService: PlacesService,
    private router: Router,
    private alertController: AlertController
    ) { 
      addIcons({trash});
    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placesId')){
        // redirect
        this.router.navigate(['/places']);
        return;
      } 
      const placesId = paramMap.get('placesId');
      // fetch recipe
      this.loadedPlaces = this.placesService.getPlaces(placesId!) as Places | undefined;
      if (this.loadedPlaces === undefined || Object.keys(this.loadedPlaces).length === 0) {
        // handle undefined case
        this.alertController.create({
          header: 'Recipe not found',
          message: 'Seems like the place has been removed or does not exist.',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
              this.router.navigate(['/places']);
              }
            }
          ]
        }).then(alertEl => {
          alertEl.present();
        });
        return;
      }
    });
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the places?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesService.deletePlaces(this.loadedPlaces!.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
