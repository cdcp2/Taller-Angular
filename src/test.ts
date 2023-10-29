// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// Imports related to testing setup
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Declare 'require' for Webpack's special require function.
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// Initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Discover and load all the test spec files.
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
