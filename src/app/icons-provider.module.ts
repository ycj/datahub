import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  BuildOutline,
  NodeExpandOutline,
  ApiOutline,
  SettingOutline,
  AppstoreOutline,
  InfoCircleOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  DashboardOutline, 
  FormOutline,
  BuildOutline,
  NodeExpandOutline,
  ApiOutline,
  SettingOutline,
  AppstoreOutline,
  InfoCircleOutline,
  UserOutline,
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
