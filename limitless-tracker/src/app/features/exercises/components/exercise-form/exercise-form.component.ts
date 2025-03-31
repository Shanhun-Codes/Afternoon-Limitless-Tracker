import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../../../shared/services/exercise.service';

@Component({
  selector: 'app-exercise-form',
  imports: [FormsModule],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.css'
})
export class ExerciseFormComponent {
  private exerciseService = inject(ExerciseService)
  name = ''
  duration = 0

  addExerciseHandler() {
    this.exerciseService.addExercise(this.name, this.duration)
    this.resetFormHandler()
  }

  resetFormHandler() {
    this.name = ''
    this.duration = 0
  }
}
