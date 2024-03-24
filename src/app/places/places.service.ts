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
        imageUrl: 'https://img.freepik.com/free-photo/deep-fried-wonton-dark-surface_1150-43553.jpg?size=626&ext=jpg',
        ingredients: ['Chicken Meat', ' Oil', ' Wonton Wrapper']
    },
    {
        id: 'p2',
        title: 'Tutong',
        imageUrl: 'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?size=626&ext=jpg',
        ingredients: ['Chicken Wing', ' Oil', ' Tomato Sauce']
    },
];
}
