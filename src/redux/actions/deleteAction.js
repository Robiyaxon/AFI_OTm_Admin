import api from "../../utility/api";
import { getAction } from "./readAction";
import { GET_APPLICATION, GET_ASSESSMENT, GET_NEWS } from "./types";

export const deleteAction = (path, actionType, id) => async (dispatch) => {
  try {
    const res = await api.delete(`${path}/${id}/`);
    dispatch({
      type: actionType,
      payload: res.data,
    });
    if (path === "api/ariza/") {
      dispatch(getAction("api/ariza/", GET_APPLICATION));
    }
    if (path === "api/baholash/") {
      dispatch(getAction("api/baholash/", GET_ASSESSMENT));
    }
    if (path === "api/news/") {
      dispatch(getAction("api/news/", GET_NEWS));
    }
    if (path === "api/ariza/") {
      dispatch(getAction("api/ariza/", GET_APPLICATION));
    }
  } catch (err) {
    console.log(err);
  }
};
