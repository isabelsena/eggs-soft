import { NgModule } from "@angular/core";

// Services
import { LocalStorageService } from "./localStorage.service";

// Guards
import { AuthGuardService } from "./auth";
import { AuthService } from "./auth";


@NgModule({
    providers: [
        AuthGuardService, 
        LocalStorageService,
        AuthService
    ]
})
export class ServiceModule {}
