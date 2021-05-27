/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import $ from 'jquery';

class TodoAPI {
  getAllTodo = () =>
    new Promise((resolve, rej) => {
      let response;
      $.ajax({
        type: 'GET',
        xhrFields: {
          withCredentials: true,
        },
        url: 'http://localhost:3300/todo/alltd',
        success(res) {
          response = res.todoid;
          resolve(response);
        },
      });
    });

  addTodo = (send) =>
    new Promise((resolve, rej) => {
      console.log(send);
      let response;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3300/todo/add',
        xhrFields: {
          withCredentials: true,
        },
        contentType: 'application/json',
        data: JSON.stringify(send),
        success(res) {
          if (res.added) {
            console.log(res);
            resolve(res);
          } else {
            console.log(res);
          }
        },
      });
    });

  delTodo = (send) =>
    new Promise((resolve, rej) => {
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3300/todo/del',
        xhrFields: {
          withCredentials: true,
        },
        contentType: 'application/json',
        data: JSON.stringify(send),
        success(res) {
          if (res.done) {
            resolve(res);
          } else {
            rej('lol');
          }
        },
      });
    });
}

const myTodoAPI = new TodoAPI();

export default myTodoAPI;
