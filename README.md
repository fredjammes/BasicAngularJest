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

`ng new BasicAngularJest --minimal --package-manager yarn --prefix baj --strict --style scss`

This command create a new Angular Application with the following flags :
- --minimal : This indicates we want to have a very minimal application, meaning :
    - No testing framework are added to the application
    - Template and style of the main component are generated inline (you would erase the style and template anyway)
    - No tslint.json (you should use eslint nowadays)
- --package-manager yarn : This tells CLI to use Yarn to install npm packages
- --prefix baj : specify the prefix of the application (notably for selectors), you should use your own
- --strict : set some config so the code must be of better quality, typescript-wise
- --style scss : set scss instead of css
---
## 2. Add Jest packages and dependencies
In order to install jest, you must install the following dependencies :
- jest : the testing framework itself
- jest-preset-angular : A preset of Jest configuration for Angular projects.
- @types/jest : the Typescript types of Jest
- @angular-builders/jest : a builder needed to be able to use angular CLI to run tests

The following can be installed using the following command :

`yarn add jest jest-preset-angular @types/jest @angular-builders/jest --dev`

---

You can now go to the next section : git checkout 3-tsconfig-and-jest.config
