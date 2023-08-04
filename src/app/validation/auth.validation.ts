import { inject } from "@angular/core";
import { Route, Router, UrlSegment } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserRole } from "../constant/role.constant";

export const authValidation = (route: Route, segments: UrlSegment[]) => {
    const auth = inject(AuthService)
    const router = inject(Router)

    const profile = auth.getProfile()
    if (profile && profile.roleCode != UserRole.CANDIDATE) {
        router.navigateByUrl('/dashboard')
    }
    else if (profile && profile.roleCode == UserRole.CANDIDATE) {
        router.navigateByUrl('/candidateinformations')
    }
    return true

    // console.log('route=>', route)
}

export const authValidationNonlogin = (route: Route, segments: UrlSegment[]) => {
    const auth = inject(AuthService)
    const router = inject(Router)

    const profile = auth.getProfile()
    if (!profile) {
        router.navigateByUrl(`/login`)
    }
    return true
}