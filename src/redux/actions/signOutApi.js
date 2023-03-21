import { auth } from "../../fBase/fBase";
import { setUser } from "./setUser";

function signOutApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then((payload) => {
        dispatch(setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}

export default signOutApi;
