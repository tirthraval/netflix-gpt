import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firbase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constant';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector(store => store?.gpt.showGptSearch)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {


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
    return () => unsubscribe();

  }, [])

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //disptach and make user null and navigate to the home page


    }).catch((error) => {
      // An error happened.
    });

  }
  const toggleGptSearchButton = () => {
    dispatch(toggleGptSearch())
  }
  const handleLanguageChange = (e) => {


    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute w-full py-2  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44 mx-4 py-2" src={LOGO} alt='logo' />
      {
        (user && <div className='flex p-4 justify-between'>
          {
            showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
              {
                SUPPORTED_LANG.map((lang) => <option key={lang.identifire} value={lang.identifire} >{lang.name}</option>)
              }
            </select>)
          }
          <button className='m-2 p-3 bg-purple-500 text-white rounded-lg' onClick={toggleGptSearchButton}>{showGptSearch ? "Home Page" : "Gpt Search"}</button>
          <img className='w-14 p-2' src={user?.photoURL} alt="userphoto" />
          <button className="text-xl font-bold text-white p-3" onClick={handleClick}>
            (Sign Out)
          </button>
        </div>)
      }

    </div>

  )
}

export default Header