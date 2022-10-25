import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , AbstractControl , FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private router : Router) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        Birthday : [
          '' ,
          [
            Validators.required
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        cemail: ['', [Validators.required, Validators.email]],
      }
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onaddDetails(){

    if(this.form.valid){
    this.router.navigate(['/marketing']);
        }
     }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private router : Router) {}

  onClick(){
    this.router.navigate(['/info']);
    this.dialogRef.close();
  }


}

