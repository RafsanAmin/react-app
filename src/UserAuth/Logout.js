import UserAuthAPI from '../API/UserAuthAPI';

function Logout(props) {
  const { sln } = props;
  const logout = async () => {
    const loggedOut = await UserAuthAPI.Logout();
    if (loggedOut) {
      sln(false);
    }
  };
  return (
    <button type="button" onClick={logout}>
      LogOut
    </button>
  );
}
export default Logout;
