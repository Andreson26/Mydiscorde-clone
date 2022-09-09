import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default App;
