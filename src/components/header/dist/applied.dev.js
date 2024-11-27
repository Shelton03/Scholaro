"use strict";

var _react = _interopRequireDefault(require("react"));

var _firebase = require("../../firebase/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Applied = function Applied() {
  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  var email = currentUser.email;
  var data;

  var createList = function createList() {
    return regeneratorRuntime.async(function createList$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(getDocs(collection(_firebase.db, "users")));

          case 2:
            docs.forEach(function (doc) {
              if (doc.data().email === email) {
                data = doc.data().list_of_applied;
              }
            });
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  useEffect(function () {
    updateList();
  }, []);
  var applied = data.map();
};