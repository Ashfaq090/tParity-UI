import { BaseService } from "./baseService";

export class AuthService extends BaseService {
    async login(credentials: object): Promise<any> {
        return this.post('/auth/login', credentials);
    }
    async googleLogin(credentials: object): Promise<any> {
        return this.post('/auth/google-login', credentials);
    }

    async logout(): Promise<any> {
        return this.post('/auth/logout', {});
    }

    async register(userData: object): Promise<any> {
        return this.post('/auth/register', userData);
    }
}

export default AuthService;