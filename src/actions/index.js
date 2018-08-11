import { postsRef, authRef } from "../config/firebase";
import { FETCH_POSTS, FETCH_USER } from "./types";

export const addPost = (newPost, uid) => async dispatch => {
  postsRef
    .child(uid)
    .push()
    .set(newPost);
};

export const fetchPosts = uid => async dispatch => {
  postsRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_POSTS,
      payload: snapshot.val()
    });
  });
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = (email, password) => dispatch => {
  authRef
    .signInWithEmailAndPassword(email, password)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signUp = (email, password) => dispatch => {
  authRef
    .createUserWithEmailAndPassword(email, password)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
