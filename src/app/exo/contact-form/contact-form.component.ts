import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
	contactForm: FormGroup = this._fb.group({
		'firstName': ['', Validators.required],
		'lastName' : ['', Validators.required],
		'message' : ['', [Validators.required, Validators.maxLength(155)]],
		'gender' : ['x', Validators.required],
		'service': ['', Validators.required],
		'address': this._fb.group({
			'street': ['', Validators.required],
			'city': ['', Validators.required],
			'number': ['', Validators.required],
			'box': ['']
		}),
	})


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
