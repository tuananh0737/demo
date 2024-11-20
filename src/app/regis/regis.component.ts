import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageLoaderService } from '../image-loader.service';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {
  regisForm: FormGroup;
  logoUrl: string = '';

  constructor(private formBuilder: FormBuilder, private imageLoader: ImageLoaderService) {
    this.regisForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.loadLogo();
  }
  loadLogo() {
    const logoUrl = '';
    this.imageLoader.loadImage(logoUrl).subscribe((blob: Blob) => {
      this.logoUrl = URL.createObjectURL(blob);
    });
  }

  onSubmit(): void {
    if (this.regisForm.valid) {
      console.log('Regis form submitted');
    } else {
      return;
    }
  }
}
