import { Component, OnInit , Input, Output } from '@angular/core';
import { Router , RouterModule , Routes} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators , AbstractControl , FormControl } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  percentage : FormGroup;
  submitted : false;

  amount : number = 20;
  grow: number = 30;
  agg: number = 40;

  constructor(public dialog: MatDialog,public formBuilder:FormBuilder ,private router : Router){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit() {
    this.percentage = this.formBuilder.group({
     amount : ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
     grow : ['', [Validators.required, Validators.pattern(/^[.\d]+$/)]] ,
     agg : ['', [Validators.required, Validators.pattern(/^[.\d]+$/)]],
    }, {validator: this.myValidator})
  }

  myValidator(group: FormGroup) {
    let sum = 0;
    for(let a in group.controls) {
      sum += group.get([a]).value;
    }
    console.log(sum > 100)
    return sum !== 100 ? { notValid: true} : null
  }

  get f(): { [key: string]: AbstractControl } {
    return this.percentage.controls;
  }

  onaddDetails(){

    if(this.percentage.valid){
    this.router.navigate(['/socialmedia']);
        }
     }

     public doughnutChartLabels:string[] = ['Moderate', 'Growth', 'Aggressive Growth'];
     public demodoughnutChartData:number[] = [this.amount , this.grow, this.agg]; // this.f.amount.value
     public doughnutChartType: ChartType = 'doughnut';

      // events
      public chartClicked(e:any):void {
        console.log(e);
      }

      public chartHovered(e:any):void {
        console.log(e);
      }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animation-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private router : Router) {}

  onClick(){
    this.router.navigate(['/info']);
    this.dialogRef.close();
  }

}
