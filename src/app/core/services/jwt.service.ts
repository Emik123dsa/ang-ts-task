import { Injectable } from "@angular/core";

@Injectable()
export class JwtSevice {

  getToken(): string {
    return window.localStorage.getItem("jwtToken");
  }

  setToken(name: string): void {
    window.localStorage.setItem("jwtToken", name);
  }

  removeToken(): void {
    window.localStorage.removeItem("jwtToken");
  }
}