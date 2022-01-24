import { Injectable } from '@angular/core';
import {IUser} from "../components/users/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'Tiep',
      email: 'tiep@gmail.com',
      password: "123123",
      image: "https://thiepnhanai.com/wp-content/uploads/2021/05/hinh-anh-dai-dien-dep-1.jpg"
    },
    {
      id: 2,
      name: 'Nam',
      email: 'nam@gmail.com',
      password: "123123",
      image: "https://thuthuatnhanh.com/wp-content/uploads/2019/12/avatar-deo-khau-trang.jpg"
    },
    {
      id: 3,
      name: 'My',
      email: 'my@gmail.com',
      password: "123123",
      image: "https://haycafe.vn/wp-content/uploads/2021/12/anh-dai-dien-con-gai-view-cuc-chill.jpg"
    },
    {
      id: 4,
      name: 'Tuan Anh',
      email: 'tuananh@gmail.com',
      password: "123123",
      image: "https://upanh123.com/wp-content/uploads/2021/04/anh-dai-dien-buon-cho-nam16.jpg"
    },
    {
      id: 5,
      name: 'Ha',
      email: 'ha@gmail.com',
      password: "123123",
      image: 'https://verbalearn.com/wp-content/uploads/2021/01/2-anh-avatar-co-y-nghia-nhu-the-nao.png'
    }
  ];

  constructor() { }

  getAll(){
    return this.users;
  }

  getUserById(id: number) {
    for (const user of this.users) {
      if (user.id == id) {
        return user;
      }
    }

    return null;
  }

}
