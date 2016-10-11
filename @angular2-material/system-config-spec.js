/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
var components = [
    'all',
    'button',
    'card',
    'checkbox',
    'dialog',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'select',
    'sidenav',
    'slider',
    'slide-toggle',
    'button-toggle',
    'tabs',
    'toolbar',
    'tooltip',
];
/** User packages configuration. */
var packages = {
    '@angular2-material/core': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index'
    },
    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
        defaultExtension: 'js'
    }
};
components.forEach(function (name) {
    packages[("@angular2-material/" + name)] = {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index'
    };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var angularPackages = {
    // Angular specific barrels.
    '@angular/core': { main: 'bundles/core.umd.js' },
    '@angular/core/testing': { main: '../bundles/core-testing.umd.js' },
    '@angular/common': { main: 'bundles/common.umd.js' },
    '@angular/compiler': { main: 'bundles/compiler.umd.js' },
    '@angular/compiler/testing': { main: '../bundles/compiler-testing.umd.js' },
    '@angular/http': { main: 'bundles/http.umd.js' },
    '@angular/http/testing': { main: '../bundles/http-testing.umd.js' },
    '@angular/forms': { main: 'bundles/forms.umd.js' },
    '@angular/router': { main: 'bundles/router.umd.js' },
    '@angular/platform-browser': { main: 'bundles/platform-browser.umd.js' },
    '@angular/platform-browser/testing': { main: '../bundles/platform-browser-testing.umd.js' },
    '@angular/platform-browser-dynamic': { main: 'bundles/platform-browser-dynamic.umd.js' },
    '@angular/platform-browser-dynamic/testing': {
        main: '../bundles/platform-browser-dynamic-testing.umd.js'
    },
};
var barrels = [
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'demo-app',
    'button-toggle',
    'gestures',
    'live-announcer',
    'portal',
    'overlay'
].concat(components);
var _cliSystemConfig = angularPackages;
barrels.forEach(function (barrelName) {
    _cliSystemConfig[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: _cliSystemConfig
});
// Apply the user's configuration.
System.config({ packages: packages });

//# sourceMappingURL=system-config-spec.js.map
