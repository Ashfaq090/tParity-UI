export class BaseService {
    private readonly baseURL: string = 'http://localhost:3000';
    async get(url: string, params?: object): Promise<any> {
        const response = await fetch(this.baseURL + url + this._serializeParams(params), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return this._handleResponse(response);
    }

    async post(url: string, body: object): Promise<any> {
        const response = await fetch(this.baseURL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return this._handleResponse(response);
    }

    async put(url: string, body: object): Promise<any> {
        const response = await fetch(this.baseURL + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return this._handleResponse(response);
    }

    async delete(url: string): Promise<any> {
        const response = await fetch(this.baseURL + url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return this._handleResponse(response);
    }

    private async _handleResponse(response: Response): Promise<any> {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    private _serializeParams(params?: object): string {
        if (!params) return '';
        const queryString = new URLSearchParams(params as any).toString();
        return queryString ? `?${queryString}` : '';
    }
}