import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  imports: [
    WelcomeRoutingModule, 
    NzButtonModule,
    NzInputModule,
    FormsModule,
    NzSpaceModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
