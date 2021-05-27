/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import UserAuthAPI from './API/UserAuthAPI';
import './scss/a.css';
import TodoApp from './TodoApp/TodoApp';
import LoginForm from './UserAuth/Login';
import LogoutBTN from './UserAuth/Logout';

function App() {
  const [loggedIn, setLogin] = useState(false);
  useEffect(() => {
    const func = async () => {
      const auth = await UserAuthAPI.Authen();
      if (auth) {
        setLogin(true);
      }
    };
    func();
  });

  return (
    <>
      {loggedIn ? (
        <>
          <LogoutBTN sln={setLogin} />
          <TodoApp />
        </>
      ) : (
        <LoginForm logIn={setLogin} />
      )}
    </>
  );
}

export default App;
