# BasicAngularJest

## Introduction
This project introduce how to use Jest in an Angular project.
The repository is made of branches that shows the state at each step.
Every branch has an updated README.md describing each new step. Do not hesitate to read it !

Here is the content and the git command to go to a specific step : 
- Creating an empty application without testing included
```bash
git checkout 1-application-creation
```
- Add Jest packages and dependencies
```bash
git checkout 2-jest-packages-and-dependencies
```
- Configure jest and typescript to make Jest work
```bash
git checkout 3-tsconfig-and-jest.config
```
- Configure Angular CLI to use jest when using ng test
```bash
git checkout 4-configure-angular-cli-to-use-jest
```
- Find out what a generated test from Angular CLI looks like and Jest basics
```bash
git checkout 5-Angular-first-test
```
- Create our own simple tests
```bash
git checkout 6-simple-tests
```
- Create asynchronous tests
```bash
git checkout 7-asynchronous-tests
```

## 1. Create an application with Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2 using the following command :

```bash
ng new BasicAngularJest --minimal --package-manager yarn --prefix baj --strict --style scss
```

This command creates a new Angular Application with the following flags :
- --minimal : This indicates we want to have a very minimal application, meaning :
    - No testing framework are added to the application
    - Template and style of the main component are generated inline (you would erase the style and template anyway)
    - No tslint.json (you should use eslint nowadays)
- --package-manager yarn : This tells CLI to use Yarn to install npm packages
- --prefix baj : specify the prefix of the application (notably for selectors), you should use your own
- --strict : set some config, so the code must be of better quality, typescript-wise
- --style scss : set scss instead of css
---
## 2. Add Jest packages and dependencies
In order to install Jest, you must install the following dependencies :
- jest : the testing framework itself
- jest-preset-angular : A preset of Jest configuration for Angular projects.
- @types/jest : the Typescript types of Jest
- @angular-builders/jest : a builder needed to be able to use angular CLI to run tests

The following can be installed using the following command :

```bash
yarn add jest jest-preset-angular @types/jest @angular-builders/jest --dev
```

---
## 3. Configure Jest
You must configure Jest itself :
- Create a jest.config.js file.
  - This file contains the preset we installed previously, so it can work with angular.
  - It tells us where we should look for files to test, and the file name of our tests files
  - It sets up the test coverage of our project
- Create a tsconfig.spec.ts file.
  - this is a specific typescript config file for our tests. Notice the "jest" value in the "types" array.
---
## 4. Configure Angular CLI to use Jest
We want to be able to use Angular CLI, so it uses Jest when running ng test.
In order to make this work, we need to change angular.json :
- add the following section in the architect object :

```json
"architect": {
  "build": { ... },
  "serve": { ... },
  "test": { // This is the section to add
    "builder": "@angular-builders/jest:run"
  },
  "extract-i18n": { ... }
}
```

Now you can change your package.json, adding scripts to run tests :
```json
{
  ...
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test", // this runs the tests
    "test:watch": "ng test --watch", // this runs the tests watching any change
    "test:ci": "ng test --run-in-band", // this improves performances for the CI
    "test:coverage": "ng test --coverage" // this runs the tests and generate test coverage
  },
  ...
}
```

## You're now ready to write tests !

You can now go to the next section : git checkout 5-Angular-first-test
