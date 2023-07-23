/*
============================================
; Title: Assignment 9.2 - Capstone (Delivery)
; Author: Professor Krasso
; Date: 07/23/2023
; Modified By: Brooks
; Description: about component
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string = 'Welcome to the About Us page!';


  constructor() { }

  ngOnInit(): void {
  }

}
