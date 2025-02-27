import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user.model";




@Injectable()
export class AuthService {

    constructor(private http:HttpClient) {
        console.log('AuthService Constructor...')
    }

    login(email:string, password:string): Observable<User> {
        console.log('AuthService:login(..) ...')
        return this.http.post<User>('/api/login', {email,password});
    }

}
