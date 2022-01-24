import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "Danh sách người dùng";
  backgroundColor = "#3EC158";
  users: IUser[] = [];

  sizeImage = 100;

  userFilter: IUser[] = [];

  constructor(private userService: UserService) {
    this.userService.getAll();
  }

  ngOnInit(): void {
    this.userFilter = this.userService.getAll()
  }


  changeSizeImage(event:any){
    this.sizeImage = event.target.value;
  }

  changeColor(event:any){
    this.backgroundColor = event.target.value;
  }

  deleteUser(index: number){
    if(confirm('Are you sure?')){
      this.userService.getAll().splice(index,1)
    }
  }

  search(event: any){
    let name = event.target.value;
    this.userFilter = (name)? this.getUserByName(name) : this.userService.getAll();
  }

  getUserByName(name: string){
    return this.userService.getAll().filter(user=>{
      return user.name == name;
    })
  }


}
