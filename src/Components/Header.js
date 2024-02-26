import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, displayName, email, photoURL } = user

        dispatch(addUser({
          email: email,
          displayName: displayName,
          photoURL: photoURL,
          uid: uid
        }));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    })

  }, [])

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //disptach and make user null and navigate to the home page
      
      
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className='absolute w-full py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44 mx-4 py-2" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' />
      {
        (user && <div className='flex p-4 justify-between'>
          <img className='w-20 p-2' src={user?.photoURL} alt="userphoto" />
          <button className="text-xl font-bold text-white p-3" onClick={handleClick}>
            (Sign Out)
          </button>
        </div>)
      }

    </div>

  )
}

export default Header