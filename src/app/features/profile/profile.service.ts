import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private delay = 1000;
    private contacts = [     // this is an static data
        {
        id: 1,
        name: 'Ashfaq',
        phone: +3492390420394,
        email: 'some@yopmail.com',
        },
        {
        id: 2,
        name: 'Ahmed',
        phone: +3492390420394,
        email: 'some@yopmail.com',
        },
        {
        id: 3,
        name: 'Osama',
        phone: +3492390420394,
        email: 'some@yopmail.com',
        },
        {
        id: 4,
        name: 'Naseem',
        phone: +3492390420394,
        email: 'some@yopmail.com',
        }
    ];

    async getContacts(): Promise<any> {
        await this.simulateDelay()
        return [...this.contacts]
    }

    async delete(id: number): Promise<any> {
        await this.simulateDelay()
        this.contacts = this.contacts.filter(x => x.id != id)
    }

    private simulateDelay(): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, this.delay))
    }

}