import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Places } from './places.modal';
import { PlacesService } from './places.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class PlacesPage implements OnInit {
  
  places!: Places[];
  
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.places = this.placeService.getAllPlaces();
  }

}

