import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { UserRole } from "../../constant/role.constant";
import { Router } from "@angular/router";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    fullName!: string

    constructor(private authService: AuthService,
        private router: Router) {

    }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        if (profile) {
            this.fullName = profile.userName
        }
        if (profile && profile.roleCode == UserRole.CANDIDATE) {
            this.router.navigateByUrl('/candidateinformations')
        }
    }

}