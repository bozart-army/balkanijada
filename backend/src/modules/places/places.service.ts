import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  findAll() {
    // Platzhalter – später holen wir echte Daten aus der Datenbank
    return [{ message: 'Places API placeholder working' }];
  }
}
