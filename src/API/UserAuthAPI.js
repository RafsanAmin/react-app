import $ from 'jquery';

class LoginAPI {
  Authen = () =>
    new Promise((reslv) => {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3300/auth/authen',
        xhrFields: {
          withCredentials: true,
        },
        success(res) {
          if (res.exists) {
            reslv(true);
          } else {
            reslv(false);
          }
        },
      });
    });

  Login = (send) =>
    new Promise((res) => {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3300/auth/login',
        data: send,
        xhrFields: {
          withCredentials: true,
        },
        success(resp) {
          if (resp.done) {
            res(true);
          } else {
            res(false);
          }
        },
      });
    });

  Logout = () =>
    new Promise((resolve) => {
      $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3300/auth/logout',
        xhrFields: {
          withCredentials: true,
        },
        success(res) {
          if (res.done) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
      });
    });
}
const newLoginAPI = new LoginAPI();
export default newLoginAPI;
