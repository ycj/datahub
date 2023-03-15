import { Component, inject, OnInit } from '@angular/core';
import { DemoService } from 'src/app/demo.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  
  doProcess() {
    this.demo.log()
  }

  value?: string;

  demo = inject(DemoService)

  constructor() { }

  ngOnInit() {
  }

}
