import { Routes } from '@angular/router';
import { TodayListTasksComponent } from './pages/today-list-tasks/today-list-tasks.component';
import { AllListTasksComponent } from './pages/all-list-tasks/all-list-tasks.component';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dash-board-tasks/dash-board-tasks.component').then(
        (m) => m.DashBoardTasksComponent
      ),

    children: [
        {
            path:"today",
            component: TodayListTasksComponent
        },
        {
            path:"all",
            component: AllListTasksComponent
        }
    ],
  },
];
