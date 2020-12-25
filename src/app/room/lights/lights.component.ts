import { Component, OnInit } from '@angular/core';
import { faLightbulb, faPlus, faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.sass']
})
export class LightsComponent implements OnInit {

  faLightbulb = faLightbulb;
  faSlidersH = faSlidersH;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
