import { Component } from '@angular/core';

@Component({
  selector: 'app-json-editor-demo',
  templateUrl: './json-editor-demo.component.html',
  styleUrls: ['./json-editor-demo.component.scss'],
})
export class JsonEditorDemoComponent {
  public activeLanguage = 'en';
  public jsonEditorTemplate: string = '<lib-json-editor [data]="rowData" [expandAll]="true" [language]="activeLanguage" [mode]="view"></lib-json-editor>';
  public data: any = {
    userId: '6323025828c0de6a1162a8fb',
    title: 'test',
    startDate: '2023-01-02T19:00:00.000Z',
    endDate: '2023-01-03T19:00:00.000Z',
    startTime: '12:00 am',
    endTime: '11:59 pm',
    startHour: 0,
    startMinute: 0,
    endHour: 23,
    endMinute: 59,
    dayOfWeek: 6,
    address: {
      house: '37',
      street: '7',
      sector: 'B',
      city: 'Lahore',
    },
  };
}
