import api from "../../utility/api";
import {
  GET_COMMENTS,
  GET_CONSTRUCTIONS,
  GET_NAVIGATIONS,
  GET_CONTACTS,
  GET_HISTORY,
  GET_NEWS,
} from "./types";

export const getAction = (path, actionType) => async (dispatch) => {
  try {
    const res = await api.get(path);
    dispatch({
      type: actionType,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getConstructions = () => async (dispatch) => {
  try {
    const res = await api.get("construction");
    dispatch({
      type: GET_CONSTRUCTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNavigations = () => async (dispatch) => {
  try {
    const res = await api.get("navigation");
    dispatch({
      type: GET_NAVIGATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getHistory = () => async (dispatch) => {
  try {
    const res = await api.get("history");
    dispatch({
      type: GET_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getNews = () => async (dispatch) => {
  try {
    const res = await api.get("news");
    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getContacts = () => async (dispatch) => {
  try {
    const res = await api.get("contact");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = () => async (dispatch) => {
  try {
    const res = await api.get("recentComment");
    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
