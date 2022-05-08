import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice'
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';
import { auth } from './Components/Firebase/firebase';
import Widgets from './Components/Widgets/Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
        })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
    <Header />

    {!user ? <Login /> : (
      <div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>      
    )}
  </div>
  );
}

export default App;
