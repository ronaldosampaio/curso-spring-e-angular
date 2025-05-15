import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'projeto-cursos',
        pathMatch: 'full'
    },
    {
        path: 'projeto-cursos',
        component: CoursesComponent
    },
    {
        /** 
         * Exemplo: loadComponent: () => import('./components/courses/courses.component').then((c) => c.CoursesComponent)
         * Essa rota é acessada apenas quando for acessada e não mais na inicialização da aplicação
         * Reduz o tempo de inicialização
         * Economiza recursos
         * Carrega apenas o essencial no momento
         * 
        **/
        
        path: 'tutorial-angular',
        loadComponent: () => import('./components/tutorial-angular/tutorial-angular.component').then((c) => c.TutorialAngularComponent)
    },
    { 
        path: '**', 
        loadComponent: () => import('./page/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent)
    }
];
