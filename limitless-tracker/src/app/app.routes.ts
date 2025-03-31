import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import { ExerciseListComponent } from './features/exercises/components/exercise-list/exercise-list.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    }

];
