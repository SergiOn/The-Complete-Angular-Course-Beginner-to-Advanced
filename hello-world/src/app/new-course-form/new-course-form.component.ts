import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(index);
  }

/*
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contacts: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      contacts: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
*/

}
