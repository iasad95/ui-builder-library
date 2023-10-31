import { Injectable } from '@angular/core';
import { GridMiscellaneousData } from './interfaces/grid-miscellaneous-data.interface';
@Injectable({
  providedIn: 'root',
})
export class GridService {
  public gridMiscellaneousData: GridMiscellaneousData;
  public setGridMiscellaneousData(gridMiscellaneousData: GridMiscellaneousData): void {
    this.gridMiscellaneousData = gridMiscellaneousData;
  }
}
