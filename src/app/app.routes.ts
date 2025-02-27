import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        component : AppComponent
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
