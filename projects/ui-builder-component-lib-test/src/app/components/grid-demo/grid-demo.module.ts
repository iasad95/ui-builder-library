import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { GridModule } from 'ui-builder-component-lib';
import { GridDemoComponent } from './grid-demo.component';
import { GridDemoService } from './grid-demo.service';

const routes: Route[] = [{ path: '', component: GridDemoComponent }];

@NgModule({
  declarations: [GridDemoComponent],
  imports: [CommonModule, FormsModule, GridModule, HttpClientModule, RouterModule.forChild(routes)],
  providers: [GridDemoService],
})
export class GridDemoModule {}
