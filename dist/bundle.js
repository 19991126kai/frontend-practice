/******/ (function () {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/css/style.css":
      /*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/js/todo.js":
      /*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ appendTodoListElem: function () {
            return /* binding */ _appendTodoListElem;
          },
          /* harmony export */ data: function () {
            return /* binding */ data;
          },
          /* harmony export */ registerNewTodo: function () {
            return /* binding */ registerNewTodo;
          },
          /* harmony export */
        });
        var data = {
          todoList: [],
          filterWord: "",
        };

        // 入力された新しいTODOの値を取得し、todoList変数に代入する関数
        var registerNewTodo = function registerNewTodo() {
          var newTodoName = document.getElementById("new-todo-name");
          var newPerson = document.getElementById("new-person");
          var newDeadline = document.getElementById("new-deadline");
          data.todoList.push({
            id: Date.now(),
            todoName: newTodoName.value,
            person: newPerson.value,
            deadline: newDeadline.value,
          });
        };

        // TODO一覧を全て削除する関数
        var removeTodoListElem = function removeTodoListElem() {
          var tbodyElem = document.getElementById("todo-list");
          while (tbodyElem.firstChild) {
            tbodyElem.firstChild.remove();
          }
        };

        // 引数にidを受け取り、todoListの中から該当するtodoを削除する関数
        var removeTodoById = function removeTodoById(id) {
          return (data.todoList = data.todoList.filter(function (todo) {
            return todo.id !== id;
          }));
        };

        // TODO一覧を表示する関数
        var _appendTodoListElem = function appendTodoListElem() {
          // TODO一覧を全て削除
          removeTodoListElem();
          data.todoList
            .filter(function (todo) {
              return (
                todo.todoName.includes(data.filterWord) ||
                todo.person.includes(data.filterWord)
              );
            })
            .forEach(function (todo) {
              // todoNameのtd要素を生成
              var todoNameTdElem = document.createElement("td");
              todoNameTdElem.textContent = todo.todoName;
              // personのtd要素を生成
              var personTdElem = document.createElement("td");
              personTdElem.textContent = todo.person;
              // deadlineのtd要素を生成
              var deadlineTdElem = document.createElement("td");
              deadlineTdElem.textContent = todo.deadline;

              // 削除のbutton要素を生成
              var removeButtonElem = document.createElement("button");
              removeButtonElem.textContent = "削除";
              removeButtonElem.addEventListener("click", function () {
                // 削除ボタンがクリックされたときに該当のtodoを削除する
                removeTodoById(todo.id);
                _appendTodoListElem();
              });

              // 削除ボタンのtd要素を生成
              var buttonTdElem = document.createElement("td");
              buttonTdElem.appendChild(removeButtonElem);

              // tr要素を生成し、td要素を挿入する
              var trElem = document.createElement("tr");
              trElem.appendChild(todoNameTdElem);
              trElem.appendChild(personTdElem);
              trElem.appendChild(deadlineTdElem);
              trElem.appendChild(buttonTdElem);

              // tdody要素の中に、tr要素を挿入する
              var tbodyElem = document.getElementById("todo-list");
              tbodyElem.appendChild(trElem);
            });
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
  !(function () {
    /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./todo */ "./src/js/todo.js");
    /* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

    document.addEventListener("DOMContentLoaded", function () {
      var registerButtonElem = document.getElementById("register");
      registerButtonElem.addEventListener("click", function () {
        // 入力されたTODOの値を取得しtodoList変数に代入
        (0, _todo__WEBPACK_IMPORTED_MODULE_0__.registerNewTodo)();
        // TODO一覧を表示
        (0, _todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
      });
      console.log("Hello, World!");
      console.log("Hello, World2!");
      console.log("Hello, World3!");

      // 絞り込みに入力された場合のイベント定義
      var filterInputElem = document.getElementById("filter");
      filterInputElem.addEventListener("input", function () {
        _todo__WEBPACK_IMPORTED_MODULE_0__.data.filterWord =
          filterInputElem.value;
        (0, _todo__WEBPACK_IMPORTED_MODULE_0__.appendTodoListElem)();
      });
    });
  })();
  /******/
})();
//# sourceMappingURL=bundle.js.map
