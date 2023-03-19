import { auth } from "../../fBase/fBase";
import { setUser } from "./setUser";
// import { SET_USER } from "./actionType";

// export const setUser = (payload) => ({
//   type: SET_USER,
//   user: payload,
// });

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
