/*
============================================
; Title: Assignment 8.3 - Capstone (Build)
; Author: Professor Krasso
; Date: 07/16/2023
; Modified By: Brooks
; Description: contact us component
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title: string = "Welcome to the Contact Us page!";

  constructor() { }

  ngOnInit(): void {
  }

}
