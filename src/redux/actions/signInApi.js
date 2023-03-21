import { auth, provider } from "../../fBase/fBase";
import { setUser } from "./setUser";

function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export default signInApi;
