import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleTestsComponent } from './simple-tests/simple-tests.component';
import { AsynchronousTestsComponent } from './asynchronous-tests/asynchronous-tests.component';
import { GetAllPeople } from './asynchronous-tests/get-all-people';
import { PersonWebService } from './asynchronous-tests/person.web-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SimpleTestsComponent,
        AsynchronousTestsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        { provide: GetAllPeople, useClass: PersonWebService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
