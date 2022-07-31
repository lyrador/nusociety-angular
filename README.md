# NUSociety

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

![nusociety banner](https://user-images.githubusercontent.com/65401176/182033255-6cb3a016-6827-4caa-85e7-67bb148b91aa.png)


NUSociety is an all-in-one co-curricular activities (Society) portal for NUS students. It provides a one-stop platform for NUS students to find information about student societies and events, sign up for them, network and communicate within and across organisations and keep track of their involvement. It also has the ability to allow student leaders and staff to check for their members’ attendance and manage the activities and events.

Backend development is done with Jakarta EE. Front-end development is done with Jakarta Server Faces (JSF) for Server-side processing (Java stack) and Angular for Client-side processing (JavaScript/TypeScript stack). GlassFish for Jakarta EE is used for the application server.

For the front-end applications, the MVVM software architectural setup is used, while the common backend adopts component-based architecture and Service-oriented Architecture (SOA). The overall enterprise software system exhibits a multitier architecture with thin clients. A relational database is used to store data processed by the project permanently through the use of Jakarta Persistence API object/relational mapping (ORM) technology.

NOTE: This repository contains the Jakarta Servlet Faces (JSF) Web Application portion of the project. Look at the JSF portion in this other repository: https://github.com/lyrador/nusociety

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
