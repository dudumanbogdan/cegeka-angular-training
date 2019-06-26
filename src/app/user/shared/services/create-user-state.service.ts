import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserStateService {

  private createUserSource: Subject<any> = new Subject<any>();

  public onCreateUser(data: any): void {
    this.createUserSource.next(data);
  }

  public createUserSource$(): Observable<any> {
    return this.createUserSource.asObservable();
  }
}
