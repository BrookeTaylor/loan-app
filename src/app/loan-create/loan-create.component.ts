/*
============================================
; Title: Assignment 9.2 - Capstone (Delivery)
; Author: Professor Krasso
; Date: 07/23/2023
; Modified By: Brooks
; Description: loan create component
============================================
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.css']
})
export class LoanCreateComponent implements OnInit {

  loanForm: FormGroup;
  principle: number;
  ratePerPeriod: number;
  numberOfYears: number;
  monthlyPayment: number;
  totalInterestPaid: number;


  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {

    this.buildLoanForm();

  }


  buildLoanForm() {

    this.loanForm = this.formBuilder.group({

      principle: ['', Validators.required],
      ratePerPeriod: ['', Validators.required],
      numberOfYears: ['', Validators.required]

    });

  }

  calculate() {

    if (this.loanForm.valid) {

      this.principle = this.loanForm.value.principle;
      this.ratePerPeriod = this.loanForm.value.ratePerPeriod / 100;
      this.numberOfYears = this.loanForm.value.numberOfYears;

      const numberOfPayments = this.numberOfYears * 12;
      const monthlyInterestRate = this.ratePerPeriod / 12;
      const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

      this.monthlyPayment = (this.principle * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / denominator;
      this.totalInterestPaid = this.monthlyPayment * numberOfPayments - this.principle;

    }

  }


}
