import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router , RouterModule , Routes} from '@angular/router';
import { FormBuilder, FormGroup, Validators , AbstractControl , FormControl } from '@angular/forms';
import { URLValidator } from './_helpers/url.validator';


@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  finalForm : FormGroup;
  submitted :  false;

  constructor(public dialog: MatDialog,private formBuilder:FormBuilder ,private router : Router,)
  {
    this.finalForm = new FormGroup({
      marketing : new FormControl()
   });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit() {
    this.finalForm = this.formBuilder.group ({
      mart : new FormControl() ,
      age : ['', [Validators.required]],
      c : ['', [Validators.required]],
      url: ['', [Validators.required]],
      link : ['', [Validators.required]],
    }, {
      validators: [
       URLValidator('url') , //  http://www.example.com/index.html - baisc format of url
        URLValidator('link')
      ]
  }

 );

}

  get f(): { [key: string]: AbstractControl } {

    return this.finalForm.controls;
  }

  oncancel(){

    if(this.finalForm.valid){
    this.router.navigate(['/final']);
        }
     }

}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,private formBuilder:FormBuilder, private router : Router) {}

  onClick(){
    this.router.navigate(['/info']);
    this.dialogRef.close();
  }
}
