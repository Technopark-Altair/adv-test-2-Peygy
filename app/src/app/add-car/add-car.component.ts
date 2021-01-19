import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/models/car.module';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car: Car;
  @Output() addNewCar = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void 
  {
    this.car = new Car();
  }

  AddCarInArray()
  {
    this.addNewCar.emit(this.car);
    this.car = new Car();
  }
}
