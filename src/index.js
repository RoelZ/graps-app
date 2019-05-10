import 'jquery';
import 'bootstrap';
import 'angular';
import 'angular-route';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-drag-and-drop-lists';

import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgXzXnEZuM4BLModNTGez1JKZH2A7h61I",
  authDomain: "gotvotes-71a47.firebaseapp.com",
  databaseURL: "https://gotvotes-71a47.firebaseio.com",
  projectId: "gotvotes-71a47",
  storageBucket: "gotvotes-71a47.appspot.com",
  messagingSenderId: "76906364581"
};

firebase.initializeApp(firebaseConfig);

import './main.scss';

import './app.routes';
import './app.core';
import './app.services';
import './app.config';
import './app.js';

import './services/cast.fct';

import './sections/home/home.ctrl';

import './components/cast-member/cast-member.drct'
