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
---
## You're now ready to write tests !

---

## 5. Create your first tests

### Jest basics
Jest tests are divided into 2 main parts : 
- Test suites are included in "describe" functions.
- Tests are included in "it" or "test" functions.

Test suites and tests functions have 3 parameters : 
- a string that describe what the test or test suite does
- a callback function that contains the test

Usually, in the callback function, there should be at least one call of an expect function which is paired with comparison functions :
- toBe
- toStrictEquals
- toBeTruthy
- toBeFalse
- toContain
- ...

Setup and teardown of the tests can be done with the following functions :
- beforeEach
- beforeAll
- afterEach 
- afterAll

These all take a callback function, doing the setup or the teardown.
These functions can be put directly on top of the file, or inside a describe function in order to be applied only in the scope of the test suite.

---

### Basic Angular example
You can now check the app.component.spec.ts file. This file is prefixed with .spec.ts, which allow the framework to detect the test file in order to run it.

This file includes basic tests Angular provides when you create an application on the AppComponent.

Since we are testing a component, we create a test suite for the component, using the describe function.

We give it a description, 'AppComponent' and an arrow function, in which we will include the setup and teardown for the suite,  and some test suites and tests.

For the setup, we use the beforeEach function. In this function, we setup a simple TestingModule and compile its components, only the AppComponent as of this first test.

By doing so, before every 'it' or 'test' function, we will do this testing module setup and compiling action, allowing us to have a fresh component before each test.

### 6. Simple tests
#### The simple tests component
Let's create a simple component, called SimpleTestsComponent.
SimpleTestsComponent will display a simple title, and a button changing it.

We will remove everything in the AppComponent in order to only include our new component.
The template of AppComponent now just contains the following : 
```html
<baj-simple-tests></baj-simple-tests>
```
When doing so, we must remove the tests relative to it. Since we added SimpleTestComponent into AppComponent, it needs to be added to the declarations of the module inside the method TestBed.configureTestingModule, so our tests works again :
```typescript
await TestBed.configureTestingModule({
    declarations: [
        AppComponent,
        SimpleTestsComponent
    ],
}).compileComponents();
```

#### The tests for this simple tests component
Now we create a test suite using describe in the spec file of our new component.
This test suite include 2 setups, in 2 differents beforeEach.
The first beforeEach helps us setting up a module for our tests :
```typescript
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTestsComponent ]
    })
    .compileComponents();
  });
```
The second beforeEach create our component and start a change detection cycle :
```typescript
  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
```
Then, we will create a first test, to check that our component is correctly created : 
```typescript
  it('should create', () => {
    expect(component).toBeTruthy();
  });
```
We create a second test where we are simply checking the title is well set for our component :
```typescript
  it('should display \'A simple title\'', () => {
    expect(component.title).toBe('A simple title');
  });
```
Finally, we will create a test validation the title is correctly changed when we call the function the button is bound to :
```typescript
  it('should display \'Another simple title\' when button is clicked', () => {
    component.changeTitle();
    expect(component.title).toBe('Another simple title');
  })
```
Make tests for everything that is public in your component like the method called when clicking the button. We could use the same kind of tests that were used in the generated tests using html to get the button to click on it to call the changeTitle method, but it tightly couples tests to the html, and the html could change while the functionality shouldn't.

#### test.each : how to regroup multiple test cases
As of now, we made some very simple tests with a single test case each time.
With the following, we will see a use case where we have to test multiple cases within the same test.

##### The component
To begin with, we will add to our component 2 buttons that toggles 2 components booleans, isFirstSwitchOn and isSecondSwitchOn. We add a getter, isReadyToGo, to check when both switch are on in which case we should write 'Ready to go !', otherwise the text 'Waiting for all switch to be on...' should be displayed.

##### The tests
Jest gives us a method, test.each, existing in 2 forms :
- One using an array
- One using a template literal string

For the array version, we define our test cases using the following :
```typescript
test.each<[boolean, boolean, boolean]>([
        [true, true, true],
        [false, true, false],
        [true, false, false],
        [false, false, false]
    ])(...)
```
We pass an array of tuples of 3 boolean as parameter of the function test.each, each tuple is one test case.

This function return a function, which works as the regular test or it function :
```typescript
test.each<[boolean, boolean, boolean]>(...)(
        'Array : When isFirstSwitchOn is %p and isSecondSwitch is %p, expectedIsReadyToGo should be %p',
        (isFirstSwitchOn: boolean, isSecondSwitch: boolean, expectedIsReadyToGo: boolean) => {
            component.isFirstSwitchOn = isFirstSwitchOn;
            component.isSecondSwitchOn = isSecondSwitch;
            expect(component.isReadyToGo).toBe(expectedIsReadyToGo);
        }
    );
```
Here, the first parameter is the name of the test. It follows the printf formating so we can print the value of each element of the tuple for the current test case.

The second parameter is our usual test callback function, but this time, parameters of the callback function are elements of the current test case tuple.

For the template literal string version, we do not type the test.each function and the test cases are in a template literal string instead of being parameter of the function
```typescript
test.each`
    isFirstSwitchOn | isSecondSwitch  | expectedIsReadyToGo
    ${true}         | ${true}         | ${true}
    ${false}        | ${true}         | ${false}
    ${true}         | ${false}        | ${false}
    ${false}        | ${false}        | ${false}
    `(...)
```
The string includes a header allowing us to use it later.
```typescript
test.each`...`(
        `Template Literal : When isFirstSwitchOn is $isFirstSwitchOn and isSecondSwitch is $isSecondSwitch, expectedIsReadyToGo should be $expectedIsReadyToGo`,
        (
            { isFirstSwitchOn, isSecondSwitch, expectedIsReadyToGo }:
                { isFirstSwitchOn: boolean, isSecondSwitch: boolean, expectedIsReadyToGo: boolean }
        ) => {
            component.isFirstSwitchOn = isFirstSwitchOn;
            component.isSecondSwitchOn = isSecondSwitch;
            expect(component.isReadyToGo).toBe(expectedIsReadyToGo);
        }
    );
```
The test.each\`...\`() function has 2 parameters, as usual.

This time, instead of a printf formating, elements of the tuple can be used using the name defined in the header of the test cases prefixed with $ in the test name.

The second parameter is a callback function, with one parameter : an object with each element of the tuples as its attributes.

## 7. Asynchronous tests
When building Angular application, we more than often have to deal with asynchronous calls of our API.
To do so, we usually define a service file including every calls we need.

As we want to be able to test our component while isolating it from the real API call, we are going to use abstract classes which will be used in order to inject a stub version of our service in our test.

For this example, we will create a simple component displaying a table, in which each line is going to display each element from an array received from our service. Then, we will test that the component correctly calls the service (actually a stub of it) and fills a component property with the received data.

### The component and service
The first thing we're going to do is creating an abstract class which will be used as an interface, GetAllPersons. We use abstract class because dependency injection cannot work with interface, more on this later.

Here is the abstract class : 
```typescript
export abstract class GetAllPersons {
    abstract getAll(): Observable<Person[]>;
}
```
It is very simple and only has one abstract method, allowing us to stub only this method when testing our component.

On the component side, we will inject this abstract class the same way we do it for a regular Angular service, and in the ngOnInit() method, we subscribe it and fill with a property of the component, *people*, with the return of the call :
```typescript
@Component({
    selector: 'baj-asynchronous-tests',
    templateUrl: 'asynchronous-tests.component.html'
})
export class AsynchronousTestsComponent implements OnInit{
    people: Person[] = [];

    constructor(
        private getAll: GetAllPeople
    ) {}

    ngOnInit() {
        this.getAll.getAll().subscribe((people: Person[]) => {
            this.people = people;
        })
    }
}
```

Back to the service side, we have to implement the abstract class into a class. To do so, we will create a regular Angular service, PersonWebService.

This service will be responsible to make the real http call as we usually do, using HttpClient.
It will implement GetAllPeople, and, because of it, must implement the getAll method :

```typescript
@Injectable()
export class PersonWebService implements GetAllPeople {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Person[]> {
        return this.http.get<Person[]>('https://my-json-server.typicode.com/fredjammes/angular-formation-api/trainees');
    }

}
```

If you're familiar with Angular, you must think, and you'll be right, that Angular will tell us the error "NullInjectorError: No provider for GetAllPeople!".
We must tell Angular that he has a GetAllPeople service : 
```typescript
@NgModule({
    ...
    providers: [
        { provide: GetAllPeople, useClass: PersonWebService }
    ],
    ...
})
export class AppModule { }
```
In our module, we define a new provider, in the *providers* section. This provider "provide" GetAllPeople, and "useClass" PersonWebService.
It means that when we inject GetAllPeople, what actually use PersonWebService.

### The tests
For the test part, we want to test the component, but without the real HTTP call.

To do so, we have to define our provider in our testing module :
```typescript
beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [AsynchronousTestsComponent],
        providers: [
            {
                provide: GetAllPeople,
                useFactory: (): GetAllPeople => ({
                    getAll(): Observable<Person[]> {
                        return of(expectedPersons).pipe(delay(10));
                    }
                })
            }
        ]

    }).compileComponents();
});
```
It works the same way as in a real module, but this time, when we provide the GetAllPeople abstract class, we use *useFactory* to give a function returning an object with the getAll method stub implementation.

The tests itself is the following : 
```typescript
    it('should fill the persons array', fakeAsync(
        () => {
            fixture.detectChanges();
            tick(11);
            expect(component.people).toStrictEqual(expectedPersons);
        })
    );
```
The first thing is the fixture.detectChanges(). It says Angular to enter a change detection cycle, which launch the ngOnInit method.
When using Angular life cycle hooks, we want to make sure Angular runs it to test our component.
We don't want to manually call ngOnInit, because it would represent that the method is called twice, which won't happen in a real scenario.

the second part is the callback function of the function *it*.
Instead of using a simple arrow function, we're going to use fakeAsync, which allows us to virtually control time.

To do so, we can now use the tick method to simulate some time has passed. Here, we simulate a delay for our getAll method of 10ms, and in our test, we simulate 11ms to have passed before checking the value of the property people of the component.
