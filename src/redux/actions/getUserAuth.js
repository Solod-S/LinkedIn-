import { auth } from "../../fBase/fBase";
import { setUser } from "./setUser";

function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export default getUserAuth;
