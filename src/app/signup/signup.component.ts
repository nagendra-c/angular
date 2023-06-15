import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  states = [
    {Andhrapradesh: "Amaravathi"},
    {Telangana: "Hyderabad"},
    {Karnataka: "Banglore"},
    {Tamilnadu: "Chennai"},
    {Jarkhand: "Ranchi"}
  ]
}
