import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user?: IUser | null
  constructor(private userService: UserService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(id);
  }


}
