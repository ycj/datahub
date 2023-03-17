import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchComponent } from './pages/batch/batch.component';
import { DataSourceComponent } from './pages/datasource/datasource.component';
import { StreamComponent } from './pages/stream/stream.component';
import { UdfComponent } from './pages/udf/udf.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'stream', component: StreamComponent },
  { path: 'batch', component: BatchComponent },
  { path: 'datasource', component: DataSourceComponent },
  { path: 'udf', component: UdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
