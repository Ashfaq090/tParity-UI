import { Component, computed, inject, resource, signal } from '@angular/core';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  profileService = inject(ProfileService)

  deleting = signal(false);

  // computed is also a signal but it is read only
  loading = computed(() => this.contactsResource.isLoading() || this.deleting())

  //Mainly started to work on Signals
  //Signal is a wrapper around a value
  // contacts: any = []; // simple input declaration
  // with Signals it will be
  // contacts = signal<any[]>([     // this is an static data
  //   {
  //     id: 1,
  //     name: 'Ashfaq',
  //     phone: +3492390420394,
  //     email: 'some@yopmail.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'Ahmed',
  //     phone: +3492390420394,
  //     email: 'some@yopmail.com',
  //   },
  //   {
  //     id: 3,
  //     name: 'Osama',
  //     phone: +3492390420394,
  //     email: 'some@yopmail.com',
  //   },
  //   {
  //     id: 4,
  //     name: 'Naseem',
  //     phone: +3492390420394,
  //     email: 'some@yopmail.com',
  //   }
  // ]);

  //with dynamic data which is being fetched from API 
  contactsResource = resource({
    loader: () => this.profileService.getContacts()
  });

  async deleteContact(id: number){
    console.log('delete')
    this.deleting.set(true);
    await this.profileService.delete(id);
    this.deleting.set(false);
    this.contactsResource.reload();
  }


}
