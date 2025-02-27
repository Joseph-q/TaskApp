import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/Home/home-page/home-page.component';

export const routes: Routes = [
    {
        path:"",
        component : HomePageComponent
    },

    {
        path: "tasks",
        loadChildren:()=> import("./modules/Tasks/tasks.routes").then(
            m=> m.TASKS_ROUTES
        ),
    },

    {
        path:"auth",
        loadChildren:()=> import("./modules/Auth/auth.routes").then(
            m=> m.AUTH_ROUTES
        ),
    }
];
