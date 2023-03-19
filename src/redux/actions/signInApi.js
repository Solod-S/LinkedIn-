import { auth, provider } from "../../fBase/fBase";
import { setUser } from "./setUser";
// import { SET_USER } from "./actionType";

// export const setUser = (payload) => ({
//   type: SET_USER,
//   user: payload,
// });

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
