import { Routes } from "@angular/router";

export const TASKS_ROUTES : Routes =[

    {
        path: '',
        loadComponent: () => import('./pages/dash-board-tasks/dash-board-tasks.component').then(m => m.DashBoardTasksComponent)
    }
]