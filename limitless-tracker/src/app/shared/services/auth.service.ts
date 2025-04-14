import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private username: string | null = null;

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'password') {
      this.isAuthenticated.next(true);
      this.username = username
      return this.isAuthenticated.asObservable()
    }
    this.isAuthenticated.next(false)
    return this.isAuthenticated.asObservable()
  }

  logout() {
    this.isAuthenticated.next(false)
    this.username = null
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated.asObservable()
  }

  getUsername(): string | null {
    return this.username
  }
}
