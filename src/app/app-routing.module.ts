import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from './pages/batch/batch.component';
import { DataSourceComponent } from './pages/datasource/datasource.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { InfoComponent } from './pages/info/info.component';
import { StreamComponent } from './pages/stream/stream.component';
import { UdfComponent } from './pages/udf/udf.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'batch', component: BatchComponent },
  { path: 'datasource', component: DataSourceComponent },
  { path: 'udf', component: UdfComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
