"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.auth = exports.app = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _app2 = _interopRequireDefault(require("firebase/compat/app"));

var _firestore = require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyDBOfC6EnOZJKNk12Ww0PiO9jDWywqmdC8",
  authDomain: "scholaro-98956.firebaseapp.com",
  projectId: "scholaro-98956",
  storageBucket: "scholaro-98956.firebasestorage.app",
  messagingSenderId: "914548270307",
  appId: "1:914548270307:web:d8528636a9f6d7770c51d6",
  measurementId: "G-52P14B7RPK"
};
var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var db = (0, _firestore.getFirestore)(app);
exports.db = db;