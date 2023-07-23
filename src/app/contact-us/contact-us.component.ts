/*
============================================
; Title: Assignment 9.2 - Capstone (Delivery)
; Author: Professor Krasso
; Date: 07/23/2023
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
