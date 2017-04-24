# UdemyEnglish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

#Notes about developer
using bootstrap 4 
visual code with plugins for angular and typescript
Using angular CLi with angular-cli.json modify to override default options

#Notes about components
- Input For comunication between components you can use @Input('Alias outside con').
- Output is to eject events, this event can be listener for any component
- Local References #idvalue only work in template, you an't reference this in .ts
- ViewChild you can get acces to a element in your component.html and get dom value

//viewchild and ng-content need learn

lifecicle of angular
- ngOnChanges
- ngOnInit after the constructor
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
