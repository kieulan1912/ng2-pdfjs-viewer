// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SERVER_URL: './',
  BASE_API_URL: 'http://localhost:8200/',
  APPLICATION_ID: 'f6982879-8b0f-4005-ae2f-71a033cfa9c2', // This is crm application id.
  // APPLICATION_ID: '532d4552-5053-616d-706c-65436f646500', // This is pim application id.
  API_VERSION: '1',
  APP_VERSION: '2.11.2',
  useHash: true,
  hmr: false,
  cryptoKey: '7bwt+n638BNuTFEY',
  BASE_API_URI: {
    FILE_SERVICE_API: 'http://210.211.101.84:2245/',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
