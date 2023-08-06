import { Component, OnInit } from "@angular/core";
import { UsersResDto } from "@dto/user/users-res.dto";
import { UserService } from "@services/user.service";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})

export class UserListComponent implements OnInit {
    visible: boolean = false;
    users!: UsersResDto[]

    constructor(private userService: UserService) {

    }
    ngOnInit(): void {
        this.getUsers()
    }
    getUsers() {
        this.userService.getUsers().subscribe(result => {
            this.users = result
        })
    }

    updateIsActive(userId: number, isActive: boolean) {

        const data = {
            id: userId,
            isActive
        }
        this.userService.updateIsActive(data).subscribe(result => {

        })
    }

    showDialog() {
        this.visible = true;
    }


}