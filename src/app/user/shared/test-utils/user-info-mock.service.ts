import {UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {Gender} from '../enums/gender';

export class MockUserModelInfoService {
  getAll(): UserModel[] {
    throw new Error('Method not implemented.');
  }

  getAllWithPromise(): Promise<UserModel[]> {
    throw new Error('Method not implemented.');
  }

  getAllWithObservable(): Observable<UserModel[]> {
    throw new Error('Method not implemented.');
  }

  getMaxUserModelId(): number {
    throw new Error('Method not implemented.');
  }

  get(id: number): UserModel {
    throw new Error('Method not implemented.');
  }

  addUserModelInfo(UserModel: UserModel): void {
    throw new Error('Method not implemented.');
  }

  handleErrors(error: any): Observable<never> {
    throw new Error('Method not implemented.');
  }

  getBy(status: boolean): Observable<any> {
    return of([
      new UserModel({'id': 1, 'firstName': 'John', 'lastName': 'Bravo', type: Gender.Male, status: true}),
      new UserModel({'id': 2, 'firstName': 'Jacquelyn', 'lastName': 'Beeck', birthday: new Date(1990, 3, 7), type: Gender.Female})]);
  }
}
