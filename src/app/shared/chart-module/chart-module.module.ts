import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModuleComponent } from './chart-module.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [ChartModuleComponent]
})
export class ChartModuleModule {

}
