import { Injectable, signal } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises = signal<Exercise[]>([
    {
      name: 'Jog',
      duration: 30,
    },
    {
      name: 'Push-ups',
      duration: 1
    }
  ]);

  getExercises() {
    return this.exercises.asReadonly()
  }

  addExercise(n: string, d: number) {
    this.exercises.update(e => [...e, {name: n, duration: d}])
  }

  removeExercise(n: string) {
    this.exercises.update(l => l.filter(e => e.name !== n))
  }
}
