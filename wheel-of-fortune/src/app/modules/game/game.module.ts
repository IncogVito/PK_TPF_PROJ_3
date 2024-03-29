import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameResultComponent} from './pages/game-result/game-result.component';
import {WheelComponent} from './wheel/wheel.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ChangeQuestionModalComponent } from './pages/change-question-modal/change-question-modal.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { VacuumPageComponent } from './pages/vacuum-page/vacuum-page.component';
import { Router, RouterOutlet } from '@angular/router';
import { DrawingInProgressComponent } from './pages/drawing-in-progress/drawing-in-progress.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { MatIconModule } from '@angular/material/icon';
import { FinishedGameResultComponent } from './pages/finished-game-result/finished-game-result.component';

@NgModule({
  declarations: [
    GameResultComponent,
    WheelComponent,
    ChangeQuestionModalComponent,
    VacuumPageComponent,
    DrawingInProgressComponent,
    FinishedGameResultComponent
  ],
  exports: [
    WheelComponent
  ],
  imports: [
    CommonModule,
    SweetAlert2Module,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
    RouterOutlet,
    BreadcrumbModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class GameModule {
}
