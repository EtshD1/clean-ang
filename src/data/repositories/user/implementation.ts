import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserImplementationRepositoryMapper();

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) {
    super();
  }

  login(params: { username: string; password: string }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('http://localhost:3000/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: {
    phoneNum: string;
    password: string;
  }): Observable<UserModel> {
    return this.http
      .post<UserEntity>('https://example.com/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserModel> {
    return this.http
      .get<UserEntity>('https://example.com/user')
      .pipe(map(this.userMapper.mapFrom));
  }
}
