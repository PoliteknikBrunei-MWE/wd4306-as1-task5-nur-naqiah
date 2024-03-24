import { Injectable } from '@angular/core';
import { Places } from './places.modal';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

constructor() { }

getAllPlaces() {
    return [...this.places];
}

getPlaces(placesId: string) {
    return {
        ...this.places.find(places => {
            return places.id === placesId;
        })
    };
}

  deletePlaces(placesId: string){
    this.places = this.places.filter(places => {
      return places.id !== placesId
    })
  }

private places: Places[] = [
    {
        id: 'p1',
        title: 'Brunei Muara',
        imageUrl: 'assets/BM.jpg',
        location: ['SOAS Mosque']
    },
    {
        id: 'p2',
        title: 'Tutong',
        imageUrl: 'assets/TTG.jpg',
        location: ['Mercu Tanda Kenangan']
    },
    {
        id: 'p3',
        title: 'Kuala Belait',
        imageUrl: 'assets/KB.jpg',
        location: ['Teko']
    },
    {
        id: 'p4',
        title: 'Temburong',
        imageUrl: 'assets/TBG.jpg',
        location: ['Honeycomb']
    },
];
}
