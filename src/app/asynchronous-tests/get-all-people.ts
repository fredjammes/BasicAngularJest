import { Observable } from 'rxjs';
import { Person } from './person';

export abstract class GetAllPeople {
    abstract getAll(): Observable<Person[]>;
}
