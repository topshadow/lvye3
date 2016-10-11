"use strict";
var sign_in_1 = require('./sign-in');
var page_1 = require('./page');
exports.BS_APP_ROUTES = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: sign_in_1.SignIn },
    { path: ':path', component: page_1.EveryPage, pathMatch: 'full' }
];

//# sourceMappingURL=routes.js.map
