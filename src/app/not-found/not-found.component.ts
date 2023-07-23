/*
============================================
; Title: Assignment 9.2 - Capstone (Delivery)
; Author: Professor Krasso
; Date: 07/23/2023
; Modified By: Brooks
; Description: Page 404
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  title: string = "Page 404";

  constructor() { }

  ngOnInit(): void {
  }

}
