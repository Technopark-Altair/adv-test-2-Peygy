import { Component, OnInit } from '@angular/core';
import { CarServiceService } from 'src/services/car-service.service';
import { Car } from 'src/models/car.module';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<Car>;
  constructor(private carsService: CarServiceService) { }

  ngOnInit(): void 
  {
    this.cars = this.carsService.getCars();
  }

  addingNewCar(newCar: Car)
  {
    this.carsService.addCar(newCar);
  }
}
