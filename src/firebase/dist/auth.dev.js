"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSendEmailVerification = exports.doPasswordChange = exports.doPasswordReset = exports.doSignOut = exports.doSignInWithGoogle = exports.doSignInWithEmailAndPassword = exports.doCreateUserWithEmailAndPassword = void 0;

var _firebase = require("./firebase");

var _auth = require("firebase/auth");

var _firestore = require("firebase/firestore");

var doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {
  var user;
  return regeneratorRuntime.async(function doCreateUserWithEmailAndPassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          user = {
            "email": email,
            'password': password,
            'list_of_applied': []
          };
          (0, _firestore.addDoc)((0, _firestore.collection)(_firebase.db, "users"), user);
          return _context.abrupt("return", (0, _auth.createUserWithEmailAndPassword)(_firebase.auth, email, password));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.doCreateUserWithEmailAndPassword = doCreateUserWithEmailAndPassword;

var doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {
  return (0, _auth.signInWithEmailAndPassword)(_firebase.auth, email, password);
};

exports.doSignInWithEmailAndPassword = doSignInWithEmailAndPassword;

var doSignInWithGoogle = function doSignInWithGoogle() {
  var provider, result, user;
  return regeneratorRuntime.async(function doSignInWithGoogle$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          provider = new _auth.GoogleAuthProvider();
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _auth.signInWithPopup)(_firebase.auth, provider));

        case 3:
          result = _context2.sent;
          user = result.user;
          (0, _firestore.addDoc)((0, _firestore.collection)(_firebase.db, "users"), user);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.doSignInWithGoogle = doSignInWithGoogle;

var doSignOut = function doSignOut() {
  return _firebase.auth.signOut();
};

exports.doSignOut = doSignOut;

var doPasswordReset = function doPasswordReset(email) {
  return (0, _auth.sendPasswordResetEmail)(_firebase.auth, email);
};

exports.doPasswordReset = doPasswordReset;

var doPasswordChange = function doPasswordChange(password) {
  return (0, _auth.updatePassword)(_firebase.auth.currentUser, password);
};

exports.doPasswordChange = doPasswordChange;

var doSendEmailVerification = function doSendEmailVerification() {
  return (0, _auth.sendEmailVerification)(_firebase.auth.currentUser, {
    url: "".concat(window.location.origin, "/home")
  });
};

exports.doSendEmailVerification = doSendEmailVerification;