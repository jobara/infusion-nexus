/*
Copyright 2015, 2016, 2017 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/fluid-project/infusion-nexus/master/LICENSE.txt
*/

/* eslint-env node */

"use strict";

var fluid = require("infusion");

var tests = [
    "./BindModelHappyPathTests.js",
    "./BindModelErrorHandlingTests.js",
    "./ConstructAndDestroyComponentTests.js",
    "./NexusUtilsTests.js",
    "./ReadDefaultsTests.js",
    "./WriteDefaultsTests.js"
];

fluid.each(tests, function (path) {
    require(path);
});
