import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { UserRole } from "../../constant/role.constant"
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    items: MenuItem[] | undefined
    items2: MenuItem[] | undefined

    imgUrl!: string
    private roleCode!: string

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        if (profile) {
            this.imgUrl = `${profile.photoId}`
            this.roleCode = profile.roleCode
        }

        this.items = [
            {
                label: 'Bootcamp Test',
                routerLink: '/dashboard'
            }
            ,
            {
                label: 'Master Data',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: '/users',
                        visible: this.isAdmin || this.isHR
                    },
                    {
                        label: 'Question Package',
                        icon: 'pi pi-fw pi-trash',
                        routerLink: "/questionpackages",
                        visible: this.isHR
                    },
                    {
                        label: 'Question Topic',
                        icon: 'pi pi-fw pi-trash',
                        routerLink: '/questiontopics',
                        visible: this.isReviewer
                    }, {
                        label: 'Question',
                        icon: 'pi pi-fw pi-trash',
                        routerLink: '/questions',
                        visible: this.isReviewer
                    },
                ]
            },
            {
                label: 'Candidate Assign',
                routerLink: "/candidateassigns",
                visible: this.isHR
            },
            {
                label: 'Review',
                routerLink: "/reviews",
                visible: this.isReviewer
            },
            {
                label: 'Candidate Information',
                routerLink: "/candidateinformations",
                visible: this.isCandidate
            },

        ];

        this.items2 = [

            {
                label: 'Profile',
                routerLink: '/users/profile'
            },
            {
                label: 'Change Password',
                routerLink: '/users/change-password'
            },
            {
                label: 'Logout',
                command: () => this.logout()
            },
        ]



    }

    logout() {
        localStorage.clear()
        this.router.navigateByUrl("/")
    }


    get isAdmin(): boolean {
        return this.roleCode == UserRole.SUPERADMIN
    }


    get isHR() {
        return this.roleCode == UserRole.HUMANRESOURCE
    }

    get isReviewer() {
        return this.roleCode == UserRole.REVIEWER
    }

    get isCandidate() {
        return this.roleCode == UserRole.CANDIDATE
    }
}