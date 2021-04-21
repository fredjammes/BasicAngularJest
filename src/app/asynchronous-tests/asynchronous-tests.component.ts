import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { GetAllPeople } from './get-all-people';

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

