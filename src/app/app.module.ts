import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

//ng-zorro-antd
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

//页面组件
import { StreamComponent } from './pages/stream/stream.component';
import { BatchComponent } from './pages/batch/batch.component';
import { DataSourceComponent } from './pages/datasource/datasource.component';
import { UdfComponent } from './pages/udf/udf.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { InfoComponent } from './pages/info/info.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    StreamComponent,
    BatchComponent,
    DataSourceComponent,
    UdfComponent,
    WelcomeComponent,
    DriversComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzSpaceModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzDividerModule,
    NzTableModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
    NzDropDownModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
