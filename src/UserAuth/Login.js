import { useState } from 'react';
import UserAuthAPI from '../API/UserAuthAPI';
/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login(props) {
  const { logIn } = props;
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState(null);
  const login = async () => {
    let loggedIn = await UserAuthAPI.Login({ username: user, password: pass });
    if (loggedIn) {
      logIn(loggedIn);
    } else {
      setStatus('Not Logged In');
    }
  };
  const handle = (e) => {
    const { name } = e.target;
    if (name === 'user') {
      setUser(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };
  return (
    <div className="form_con">
      <div className="form">
        <h1>Login {status}</h1>
        <div className="forma">
          <label> Username </label>
          <input name="user" type="text" placeholder="" value={user} onChange={handle} />
        </div>
        <div className="forma">
          <label> Password </label>
          <input name="pass" type="password" placeholder="" value={pass} onChange={handle} />
        </div>

        <div className="con">
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
