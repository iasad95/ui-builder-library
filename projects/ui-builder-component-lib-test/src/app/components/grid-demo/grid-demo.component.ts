import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { FilterDataRequest, FilterDefinition, GridColumn, GridDataRequest, GridFilterService, GridMiscellaneousData, GridRow, GridSortDirection } from 'ui-builder-component-lib';
import { MenuItem } from 'primeng/api';
import { CommonOperations } from 'projects/ui-builder-component-lib/src/lib/operations/operations';
import { demoFilterDefinitions } from './grid-demo-filters';
import { Customer, GridDemoService, customerCountryNames, customerStatuses } from './grid-demo.service';

@Component({
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.scss'],
})
export class GridDemoComponent implements OnInit {
  public gridMiscellaneousData: GridMiscellaneousData;
  data: GridRow<Customer>[];
  isLoading: boolean = true;
  totalRecords = 200;
  rowsPerPageOptions: number[] = [5, 25, 50, 100];
  rowsPerPage = 5;
  sortField: string = 'name';
  sortOrder: GridSortDirection = 'Ascending';
  groupByField: GridColumn = null;
  loadEvent: GridDataRequest = null;
  columns: GridColumn[] = [
    { name: 'id', label: 'ID', visible: true, sortable: true, groupName: 'Basic Data', editable: true, controlType: 'Number' },
    { name: 'name', requiredForEdit: true, label: 'Name', visible: true, sortable: true, groupName: 'Basic Data', editable: true, controlType: 'Text' },
    { name: 'company', label: 'Company', visible: true, sortable: false, groupName: 'Extended Data', editable: true, controlType: 'Text' },
    { name: 'currency', label: 'Currency', visible: true, sortable: false, groupName: 'Basic Data', editable: true, controlType: 'Currency' },
    { name: 'boolean', label: 'Boolean', visible: true, sortable: false, groupName: 'Basic Data', editable: true, controlType: 'Boolean' },
    { name: 'status', label: 'Status', visible: true, sortable: true, groupName: 'Extended Data', editable: true, controlType: 'MultiSelect', values: customerStatuses },
    { name: 'countryId', label: 'Country', visible: true, sortable: true, groupName: 'Extended Data', editable: true, controlType: 'SingleSelect', values: customerCountryNames },
    { name: 'countryCode', label: 'Country Code', visible: true, sortable: true, groupName: 'Extended Data', editable: false, controlType: 'Text' },
    { name: 'date', label: 'Date', visible: true, sortable: true, groupName: 'Extended Data', controlType: 'Date', editable: true },
    { name: 'activity', label: 'Activity', visible: true, sortable: true, groupName: 'Extended Data', controlType: 'Percent', editable: true },
    { name: 'representativeName', label: 'Representative', visible: true, sortable: true, groupName: 'Extended Data', controlType: 'Text' },
    { name: 'representativeImage', label: 'Avatar', visible: true, sortable: true, groupName: 'Extended Data', editable: true, controlType: 'Text' },
    { name: 'client', label: 'Client', visible: true, sortable: true, groupName: 'Basic Data', editable: true, controlType: 'AutoComplete' },
    { name: 'clientMulti', label: 'ClientMulti', visible: true, sortable: false, groupName: 'Basic Data', editable: false, controlType: 'AutoCompleteMulti' },
  ];
  selectedCurrencyCode = 'USD';
  demoCountryCodes = [
    // currency code abbreviations were sourced via EMarket201.MC.Currencies table
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTC',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLF',
    'CLP',
    'CNH',
    'CNY',
    'COP',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GGP',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JEP',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STD',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'YER',
    'ZAR',
    'ZMW',
    'ZWL',
  ];
  userFiltersList: FilterDataRequest[] = [
    {
      name: 'Custom Filter 1',
      projectGridFilterId: CommonOperations.randomString(),
      userFilters: [
        {
          publicFieldName: 'TotalProjectFinalCost',
          operatorType: 'Between',
          values: ['7765', '7765445'],
        },
        {
          publicFieldName: 'FirmOrgDivision',
          operatorType: 'AnyOf',
          values: ['7765', '54979', '43166'],
        },
      ],
      order: 0,
    },
    {
      name: 'Custom Filter 2',
      projectGridFilterId: CommonOperations.randomString(),
      userFilters: [
        {
          publicFieldName: 'TotalProjectFinalCost',
          operatorType: 'Between',
          values: ['7765', '7765445'],
        },
        {
          publicFieldName: 'FirmOrgDivision',
          operatorType: 'AnyOf',
          values: ['7765', '54979', '43166'],
        },
      ],
      order: 1,
    },
  ];
  filterDefinitions: FilterDefinition[] = demoFilterDefinitions;
  standardFilters: FilterDataRequest[] = [
    {
      name: 'All Projects',
      projectGridFilterId: '-1',
      userFilters: [],
      sort: {
        field: 'ProjectNumber',
        direction: 'Ascending',
      },
    },
    {
      name: 'Recently Created (within last 7 days)',
      projectGridFilterId: '-2',
      userFilters: [
        {
          publicFieldName: 'DateCreated',
          operatorType: 'Between',
          values: [moment().format('YYYY-MM-DD HH:mm:ss'), moment().subtract(7, 'd').format('YYYY-MM-DD HH:mm:ss')],
        },
      ],
    },
  ];
  dateFormat = 'mm/dd/yyyy';

  constructor(
    private demoService: GridDemoService,
    private gridFilterService: GridFilterService,
  ) {
    this.gridFilterService.standardFilters = this.standardFilters;
  }

  onLazyLoad(event: GridDataRequest) {
    this.isLoading = true;
    this.demoService.getCustomersLarge(event).subscribe((response) => {
      this.data = response.data.map((customer) => {
        const mapped: GridRow<Customer> = {
          id: customer.id,
          data: customer,
          rowMenuItems: this.createMenuItemsForRow(customer),
          hasEditPermissions: true,
          hasDeletePermissions: false,
        };
        return mapped;
      });
      this.totalRecords = response.count;
      this.sortField = event.sortField;
      this.sortOrder = event.sortDirection;
      this.loadEvent = event;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.gridMiscellaneousData = {
      gridFiltersModal: {
        selectFilter: {
          downChevron: {
            icon: 'assets/icons/grid/down-chevron.svg', // This icon can be changed according to theme
          },
        },
      },
      manageFiltersModal: {
        dragHandles: {
          icon: 'assets/icons/grid/drag-handles.svg', // This icon can be changed according to theme
        },
      },
    };
  }

  private createMenuItemsForRow(customer: Customer): MenuItem[] {
    const menuItems: MenuItem[] = [];
    menuItems.push({
      label: 'Alert',
      icon: 'icon-gen3-personnel',
      command: () => alert('test'),
    });
    // example below of content-aware, conditional menu items
    if (['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].includes(customer.name[0])) {
      menuItems.push({
        label: 'Display first letter of name',
        icon: 'icon-gen3-projects',
        command: () => alert('First letter of ' + customer.name + ' is ' + customer.name[0]),
      });
    }
    return menuItems;
  }
}
