import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AboutStorageService {

  // Storage reference
  storage = firebase.storage().ref();

  // Paths
  ABOUT = 'about/';
  PROFILE_PIC = 'profile/';
  ME = 'me';

  constructor() { }

  addMyProfilePic(file: File, onResolve: any) {
    this.storage.child(this.ABOUT + this.PROFILE_PIC + this.ME).put(file).then((snapshot) => {
      onResolve(snapshot);
    });
  }

  getProfilePic(path: string, onResolve: any) {
    this.storage.child(path).getDownloadURL().then((url) => {
      onResolve(url);
    });
  }

}
