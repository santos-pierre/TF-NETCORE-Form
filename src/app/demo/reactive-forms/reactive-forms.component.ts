import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
	// Simple Input
	newsletter: FormControl = new FormControl('');

	// FormGroup
	subscriptionForm: FormGroup = new FormGroup({
		firstName: new FormControl('', Validators.required),
		birthDate: new FormControl(''),
		address: new FormGroup({
			street: new FormControl(''),
			codePostal: new FormControl('')
		})
	});

	// FormGroup Builder
	artistProfile = this._fb.group({
		name: ['', [
			Validators.required,
			Validators.minLength(3)
		]],
		genres: this._fb.array([
			this._fb.control('', Validators.required)
		], [Validators.required])
	})

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

	handleSubmit() {
		console.log(this.subscriptionForm.value);
		this.subscriptionForm.reset();
	}

	get genres() {
		return this.artistProfile.get('genres') as FormArray;
	}

	addGenres() {
		this.genres.push(this._fb.control('', Validators.required));
	}

	removeGenre(index: number) {
		this.genres.removeAt(index);
	}

	handleSubmitArtist(){
		console.log(this.artistProfile.value);
	}
}
