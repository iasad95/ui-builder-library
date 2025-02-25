export const demoFilterDefinitions = [
  {
    publicFieldName: 'ClientCompanyId',
    label: 'Client Company',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'ClientCompanyName',
    label: 'Client Company',
    displayedToUser: false,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'CompletionDate',
    label: 'Completion Date',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Today',
          value: 'Today',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Yesterday',
          value: 'Yesterday',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Tomorrow',
          value: 'Tomorrow',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Week',
          value: 'ThisWeek',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Month',
          value: 'ThisMonth',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Quarter',
          value: 'ThisQuarter',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Year',
          value: 'ThisYear',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Between',
          value: 'Between',
        },
        filterParameters: [
          {
            label: 'Begin',
            initialValue: '',
            controlType: 'Date',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
          {
            label: 'End',
            initialValue: '',
            controlType: 'Date',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'Country',
    label: 'Country Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'DateCreated',
    label: 'Date Created',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Today',
          value: 'Today',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Yesterday',
          value: 'Yesterday',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Tomorrow',
          value: 'Tomorrow',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Week',
          value: 'ThisWeek',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Month',
          value: 'ThisMonth',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Quarter',
          value: 'ThisQuarter',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'This Year',
          value: 'ThisYear',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Between',
          value: 'Between',
        },
        filterParameters: [
          {
            label: 'Begin',
            initialValue: '',
            controlType: 'Date',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
          {
            label: 'End',
            initialValue: '',
            controlType: 'Date',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'FirmOrgDivision',
    label: 'Divisions Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 7765,
                value: 'Commercial',
              },
              {
                key: 54979,
                value: 'Education',
              },
              {
                key: 43174,
                value: 'Environmental',
              },
              {
                key: 43166,
                value: 'Geotechnical',
              },
              {
                key: 54580,
                value: 'Municipal',
              },
              {
                key: 54581,
                value: 'Residential',
              },
              {
                key: 7764,
                value: 'Transportation',
              },
              {
                key: 776576,
                value: 'Commercial 2',
              },
              {
                key: 54975,
                value: 'Education 2',
              },
              {
                key: 431741,
                value: 'Environmental 2',
              },
              {
                key: 431661,
                value: 'Geotechnical 2',
              },
              {
                key: 545801,
                value: 'Municipal 2',
              },
              {
                key: 545811,
                value: 'Residential 2',
              },
              {
                key: 77641,
                value: 'Transportation 2',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 7765,
                value: 'Commercial',
              },
              {
                key: 54979,
                value: 'Education',
              },
              {
                key: 43174,
                value: 'Environmental',
              },
              {
                key: 43166,
                value: 'Geotechnical',
              },
              {
                key: 54580,
                value: 'Municipal',
              },
              {
                key: 54581,
                value: 'Residential',
              },
              {
                key: 7764,
                value: 'Transportation',
              },
              {
                key: 776576,
                value: 'Commercial 2',
              },
              {
                key: 54975,
                value: 'Education 2',
              },
              {
                key: 431741,
                value: 'Environmental 2',
              },
              {
                key: 431661,
                value: 'Geotechnical 2',
              },
              {
                key: 545801,
                value: 'Municipal 2',
              },
              {
                key: 545811,
                value: 'Residential 2',
              },
              {
                key: 77641,
                value: 'Transportation 2',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'FinancialStatus',
    label: 'Financial Status Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'SingleSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 710,
                value: 'Profitable',
              },
              {
                key: 716,
                value: 'Not Profitable',
              },
              {
                key: 717,
                value: 'This was a terrible idea',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'SingleSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 710,
                value: 'Profitable',
              },
              {
                key: 716,
                value: 'Not Profitable',
              },
              {
                key: 717,
                value: 'This was a terrible idea',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'FirmOrgOffice',
    label: 'Offices Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 49867,
                value: 'Boston',
              },
              {
                key: 6025,
                value: 'Orlando (702)',
              },
              {
                key: 49872,
                value: 'Portland (403)',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 49867,
                value: 'Boston',
              },
              {
                key: 6025,
                value: 'Orlando (702)',
              },
              {
                key: 49872,
                value: 'Portland (403)',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'OwnerCompanyId',
    label: 'Owner Company',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'OwnerCompanyName',
    label: 'Owner Company',
    displayedToUser: false,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'PercentComplete',
    label: 'Percent Complete cust',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Percent',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Percent',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'FirmOrgPracticeArea',
    label: 'Practice Areas Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 2593,
                value: 'Courthouse',
              },
              {
                key: 2658,
                value: 'Healthcare',
              },
              {
                key: 2562,
                value: 'High-Tech',
              },
              {
                key: 2594,
                value: 'Higher Ed',
              },
              {
                key: 158184,
                value: 'Hotel',
              },
              {
                key: 128814,
                value: 'Industrial',
              },
              {
                key: 158185,
                value: 'Mixed-use',
              },
              {
                key: 129086,
                value: 'Multi Family',
              },
              {
                key: 2561,
                value: 'Office Building',
              },
              {
                key: 2563,
                value: 'Retail',
              },
              {
                key: 129085,
                value: 'Senior Living',
              },
              {
                key: 2564,
                value: 'Sports',
              },
              {
                key: 128816,
                value: 'Transportation',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 2593,
                value: 'Courthouse',
              },
              {
                key: 2658,
                value: 'Healthcare',
              },
              {
                key: 2562,
                value: 'High-Tech',
              },
              {
                key: 2594,
                value: 'Higher Ed',
              },
              {
                key: 158184,
                value: 'Hotel',
              },
              {
                key: 128814,
                value: 'Industrial',
              },
              {
                key: 158185,
                value: 'Mixed-use',
              },
              {
                key: 129086,
                value: 'Multi Family',
              },
              {
                key: 2561,
                value: 'Office Building',
              },
              {
                key: 2563,
                value: 'Retail',
              },
              {
                key: 129085,
                value: 'Senior Living',
              },
              {
                key: 2564,
                value: 'Sports',
              },
              {
                key: 128816,
                value: 'Transportation',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'ProjectNumber',
    label: 'Proj num cust',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'City',
    label: 'Project city',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'ProjectId',
    label: 'Project Id',
    displayedToUser: false,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Number',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Number',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'ProjectName',
    label: 'Project Name',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'ProjectStatus',
    label: 'Project Status Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'SingleSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 1,
                value: 'Completed',
              },
              {
                key: 5,
                value: 'Dead',
              },
              {
                key: 2,
                value: 'In Progress',
              },
              {
                key: 2554,
                value: 'MG',
              },
              {
                key: 3,
                value: 'Not Started',
              },
              {
                key: 4,
                value: 'On Hold',
              },
              {
                key: 2378,
                value: 'On-Going',
              },
              {
                key: 7,
                value: 'Pending Accounting',
              },
              {
                key: 6,
                value: 'Pending Project Manager',
              },
              {
                key: 8,
                value: 'Project Closed',
              },
              {
                key: 2555,
                value: 'SW New Project Status',
              },
              {
                key: 2556,
                value: 'test1',
              },
              {
                key: 2557,
                value: 'test2',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'SingleSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 1,
                value: 'Completed',
              },
              {
                key: 5,
                value: 'Dead',
              },
              {
                key: 2,
                value: 'In Progress',
              },
              {
                key: 2554,
                value: 'MG',
              },
              {
                key: 3,
                value: 'Not Started',
              },
              {
                key: 4,
                value: 'On Hold',
              },
              {
                key: 2378,
                value: 'On-Going',
              },
              {
                key: 7,
                value: 'Pending Accounting',
              },
              {
                key: 6,
                value: 'Pending Project Manager',
              },
              {
                key: 8,
                value: 'Project Closed',
              },
              {
                key: 2555,
                value: 'SW New Project Status',
              },
              {
                key: 2556,
                value: 'test1',
              },
              {
                key: 2557,
                value: 'test2',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'PublishedProjectName',
    label: 'Published Project Name',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Text',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'PrimaryCategory',
    label: 'Renamed Primary Category',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 66,
                value: 'Academic Facilities',
              },
              {
                key: 2,
                value: 'Airport',
              },
              {
                key: 3,
                value: 'Aquarium',
              },
              {
                key: 5,
                value: 'Architecture School',
              },
              {
                key: 7,
                value: 'Broadcast Media Center',
              },
              {
                key: 8,
                value: 'Brownfields Redevelopment',
              },
              {
                key: 9,
                value: 'Business School',
              },
              {
                key: 12,
                value: 'Community Center',
              },
              {
                key: 13,
                value: 'Computer Center',
              },
              {
                key: 11,
                value: 'Conference Center',
              },
              {
                key: 14,
                value: 'Convention Center',
              },
              {
                key: 15,
                value: 'Correctional Facility',
              },
              {
                key: 16,
                value: 'Courthouse',
              },
              {
                key: 18,
                value: 'Dormitory',
              },
              {
                key: 9104,
                value: 'Education',
              },
              {
                key: 19,
                value: 'Elementary School',
              },
              {
                key: 69,
                value: 'Government',
              },
              {
                key: 22,
                value: 'Headquarters',
              },
              {
                key: 23,
                value: 'High School',
              },
              {
                key: 24,
                value: 'Hospital',
              },
              {
                key: 25,
                value: 'Hotel',
              },
              {
                key: 26,
                value: 'Industrial',
              },
              {
                key: 27,
                value: 'Intermodal Facility',
              },
              {
                key: 28,
                value: 'Laboratory',
              },
              {
                key: 29,
                value: 'Library',
              },
              {
                key: 30,
                value: 'Manufacturing Facility',
              },
              {
                key: 31,
                value: 'Medical Center',
              },
              {
                key: 32,
                value: 'Middle School',
              },
              {
                key: 108303,
                value: "Mike's Awesome Category",
              },
              {
                key: 33,
                value: 'Mission-Critical Facility',
              },
              {
                key: 35,
                value: 'Mixed-Use Facility',
              },
              {
                key: 36,
                value: 'Motel',
              },
              {
                key: 37,
                value: 'Multi-Family Housing',
              },
              {
                key: 38,
                value: 'Museum',
              },
              {
                key: 39,
                value: 'Natatorium',
              },
              {
                key: 40,
                value: 'Office Building',
              },
              {
                key: 41,
                value: 'Office Interiors',
              },
              {
                key: 42,
                value: 'Park',
              },
              {
                key: 44,
                value: 'Pediatric Hospital',
              },
              {
                key: 45,
                value: 'Performing Arts',
              },
              {
                key: 80,
                value: 'Post Office',
              },
              {
                key: 46,
                value: 'Private School',
              },
              {
                key: 47,
                value: 'Rail Station',
              },
              {
                key: 48,
                value: 'Recreational Facility',
              },
              {
                key: 34,
                value: 'Religious Facility',
              },
              {
                key: 85,
                value: 'Reroof',
              },
              {
                key: 49,
                value: 'Research Facility',
              },
              {
                key: 52,
                value: 'Restaurant',
              },
              {
                key: 64,
                value: 'Retail',
              },
              {
                key: 54,
                value: 'Shopping Center',
              },
              {
                key: 55,
                value: 'Single-Family Housing',
              },
              {
                key: 65,
                value: 'Specialty',
              },
              {
                key: 56,
                value: 'Stadium',
              },
              {
                key: 57,
                value: 'Store',
              },
              {
                key: 58,
                value: 'Student Center',
              },
              {
                key: 59,
                value: 'Theater',
              },
              {
                key: 56275,
                value: 'Topeka',
              },
              {
                key: 121193,
                value: 'Travis T Category',
              },
              {
                key: 62,
                value: 'Vehicle Maintenance Facility , Garage',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 66,
                value: 'Academic Facilities',
              },
              {
                key: 2,
                value: 'Airport',
              },
              {
                key: 3,
                value: 'Aquarium',
              },
              {
                key: 5,
                value: 'Architecture School',
              },
              {
                key: 7,
                value: 'Broadcast Media Center',
              },
              {
                key: 8,
                value: 'Brownfields Redevelopment',
              },
              {
                key: 9,
                value: 'Business School',
              },
              {
                key: 12,
                value: 'Community Center',
              },
              {
                key: 13,
                value: 'Computer Center',
              },
              {
                key: 11,
                value: 'Conference Center',
              },
              {
                key: 14,
                value: 'Convention Center',
              },
              {
                key: 15,
                value: 'Correctional Facility',
              },
              {
                key: 16,
                value: 'Courthouse',
              },
              {
                key: 18,
                value: 'Dormitory',
              },
              {
                key: 9104,
                value: 'Education',
              },
              {
                key: 19,
                value: 'Elementary School',
              },
              {
                key: 69,
                value: 'Government',
              },
              {
                key: 22,
                value: 'Headquarters',
              },
              {
                key: 23,
                value: 'High School',
              },
              {
                key: 24,
                value: 'Hospital',
              },
              {
                key: 25,
                value: 'Hotel',
              },
              {
                key: 26,
                value: 'Industrial',
              },
              {
                key: 27,
                value: 'Intermodal Facility',
              },
              {
                key: 28,
                value: 'Laboratory',
              },
              {
                key: 29,
                value: 'Library',
              },
              {
                key: 30,
                value: 'Manufacturing Facility',
              },
              {
                key: 31,
                value: 'Medical Center',
              },
              {
                key: 32,
                value: 'Middle School',
              },
              {
                key: 108303,
                value: "Mike's Awesome Category",
              },
              {
                key: 33,
                value: 'Mission-Critical Facility',
              },
              {
                key: 35,
                value: 'Mixed-Use Facility',
              },
              {
                key: 36,
                value: 'Motel',
              },
              {
                key: 37,
                value: 'Multi-Family Housing',
              },
              {
                key: 38,
                value: 'Museum',
              },
              {
                key: 39,
                value: 'Natatorium',
              },
              {
                key: 40,
                value: 'Office Building',
              },
              {
                key: 41,
                value: 'Office Interiors',
              },
              {
                key: 42,
                value: 'Park',
              },
              {
                key: 44,
                value: 'Pediatric Hospital',
              },
              {
                key: 45,
                value: 'Performing Arts',
              },
              {
                key: 80,
                value: 'Post Office',
              },
              {
                key: 46,
                value: 'Private School',
              },
              {
                key: 47,
                value: 'Rail Station',
              },
              {
                key: 48,
                value: 'Recreational Facility',
              },
              {
                key: 34,
                value: 'Religious Facility',
              },
              {
                key: 85,
                value: 'Reroof',
              },
              {
                key: 49,
                value: 'Research Facility',
              },
              {
                key: 52,
                value: 'Restaurant',
              },
              {
                key: 64,
                value: 'Retail',
              },
              {
                key: 54,
                value: 'Shopping Center',
              },
              {
                key: 55,
                value: 'Single-Family Housing',
              },
              {
                key: 65,
                value: 'Specialty',
              },
              {
                key: 56,
                value: 'Stadium',
              },
              {
                key: 57,
                value: 'Store',
              },
              {
                key: 58,
                value: 'Student Center',
              },
              {
                key: 59,
                value: 'Theater',
              },
              {
                key: 56275,
                value: 'Topeka',
              },
              {
                key: 121193,
                value: 'Travis T Category',
              },
              {
                key: 62,
                value: 'Vehicle Maintenance Facility , Garage',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'StaffRole',
    label: 'Staff Role',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'StaffTeam',
    label: 'Staff Team',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoCompleteMulti',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'StateProvince',
    label: 'State/Prov',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Equals',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Starts With',
          value: 'StartsWith',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Contains',
          value: 'Contains',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'AutoComplete',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
    ],
  },
  {
    publicFieldName: 'FirmOrgStudio',
    label: 'Studios Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 68623,
                value: 'Studio 1',
              },
              {
                key: 70477,
                value: 'Studio 2',
              },
              {
                key: 70478,
                value: 'Studio 3',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 68623,
                value: 'Studio 1',
              },
              {
                key: 70477,
                value: 'Studio 2',
              },
              {
                key: 70478,
                value: 'Studio 3',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'FirmOrgTerritory',
    label: 'Territories Custom',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Any Of',
          value: 'AnyOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 56640,
                value: 'Mid-West',
              },
              {
                key: 56641,
                value: 'Northeast',
              },
              {
                key: 56643,
                value: 'Southeast',
              },
              {
                key: 56642,
                value: 'Southwest',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'All Of',
          value: 'AllOf',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'MultiSelect',
            apiQueryUrl: '',
            separator: 'Or',
            values: [
              {
                key: 56640,
                value: 'Mid-West',
              },
              {
                key: 56641,
                value: 'Northeast',
              },
              {
                key: 56643,
                value: 'Southeast',
              },
              {
                key: 56642,
                value: 'Southwest',
              },
            ],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
    ],
  },
  {
    publicFieldName: 'TotalProjectFinalCost',
    label: 'Total Project Costs: Final Cost',
    displayedToUser: true,
    filterCriterias: [
      {
        operator: {
          label: 'Is',
          value: 'Equals',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Unknown',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Less Than',
          value: 'LessThan',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Less Than Or Equal To',
          value: 'LessThanOrEqualTo',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Greater Than',
          value: 'GreaterThan',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Greater Than Or Equal To',
          value: 'GreaterThanOrEqualTo',
        },
        filterParameters: [
          {
            label: '',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Or',
            values: [],
          },
        ],
      },
      {
        operator: {
          label: 'Is Empty',
          value: 'IsEmpty',
        },
        filterParameters: [],
      },
      {
        operator: {
          label: 'Between',
          value: 'Between',
        },
        filterParameters: [
          {
            label: 'Begin',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Unknown',
            values: [],
          },
          {
            label: 'End',
            initialValue: '',
            controlType: 'Currency',
            apiQueryUrl: '',
            separator: 'Unknown',
            values: [],
          },
        ],
      },
    ],
  },
];
