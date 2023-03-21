import db from "../../fBase/fBase";
import { GET_ARTICLES } from "./actionType";

const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

function getArticlesApi() {
  return (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      });
  };
}

export default getArticlesApi;
