# BehaviorSubject

As we know multiple components share the common data and always need updated shared data. In such scenarios most of the time BehaviorSubject is used which acts as a single store to hold updated shared data.

BehaviorSubject is both observer and type of observable.
BehaviorSubject always needs an initial/default value.
Every observer on subscribe gets the current value.
The current value is either the latest value emitted by the source observable using the next() method or the initial/default value.
Let’s implement BehaviorSubject to understand a concept better!

For e.g In the order tracking app, display the total items in the cart and total items in the wish list on the UI in the header and dashboard section based on user action.

# MyCrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 4242424242424242, 5555555555554444
