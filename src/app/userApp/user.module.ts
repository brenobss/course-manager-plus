import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CourseListComponent } from '../courses/course-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        UserComponent,
        CourseListComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule { 

}