import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB3j0h4hw4v3Rqcj9aKSXyt03c-fIrVl_0",
      authDomain: "ng-recipe-book-59abd.firebaseapp.com",
    });
  }

  // getIdToken()
  // IndexedDB
}
