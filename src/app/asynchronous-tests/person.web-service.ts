import { GetAllPeople } from './get-all-people';
import { Observable } from 'rxjs';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonWebService implements GetAllPeople {
    constructor(
        private http: HttpClient
    ) { }

    getAll(): Observable<Person[]> {
        return this.http.get<Person[]>('https://my-json-server.typicode.com/fredjammes/angular-formation-api/trainees');
    }

}
