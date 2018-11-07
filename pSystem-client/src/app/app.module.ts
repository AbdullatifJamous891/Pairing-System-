import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { PairingComponent } from './pairing/pairing.component';
import { HistoryComponent } from './history/history.component';
import { StudentService } from './shared/student.service';

const appRoutes: Routes = [
  { path: '',
    component: MainComponent
  },
  { path: 'AddStudent',
    component: AddStudentComponent
  },
  { path: 'Pairing',
    component: PairingComponent
  },
  { path: 'History',
    component: HistoryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddStudentComponent,
    PairingComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
