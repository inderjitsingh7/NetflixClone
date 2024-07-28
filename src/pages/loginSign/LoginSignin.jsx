import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../Fire';
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const LoginSignin = () => {

  const app = initializeApp(firebaseConfig);
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  const [Name , SetName] = useState('')

  console.log(Email)
  console.log(Password)

  function seteml(e) {
    SetEmail(e.target.value)
  }

  function setpass(e) {
    SetPassword(e.target.value)
  }




  const auth = getAuth();


  const go = useNavigate()

  function clickHandel() {
    go('/')
  }

  const [sign, Setsign] = useState(false)

  function ChangeSign() {
    if (sign == false) {
      Setsign(true)
    }
    else {
      Setsign(false)
    }
  }

  function nameSet(e){
    SetName(e.target.value)
  }


  function goDashBoard() {
    if (sign == false) {
      signInWithEmailAndPassword(auth,Email, Password)
        .then(auth => {
          if (auth) {
            go('/Dashboard')
          }
        })
        .catch(error => alert(error.message))
    }
    else{
      createUserWithEmailAndPassword(auth,Email ,Password)
      .then(
        auth => {
          if(auth){
            go('/Dashboard')
          }
        }
      )
      .catch(error => alert(error.message))
    }
  }


  return (
    <div className='login_page'>
      <div className='inner_login'>

        <div className='nav'>
          <img onClick={clickHandel} className='NetFlix_Logo' src="././src/img/Netflix_Logo.png" alt="" />
        </div>

        <div className='inner2div'>
          <div className='inner-box'>
            <h1>{sign == false ? ('Sign In') : (' Sign Up')}</h1>

            {sign == true &&
              <input onChange={nameSet} className='w-input' type="text" placeholder='Enter Name' />
            }
            <input className='w-input' onChange={seteml} value={Email} type="email" placeholder='Enter Email' />
            <input className='w-input' onChange={setpass} value={Password} type="text" placeholder='Enter Password' />

            {/* Btn */}
            <div onClick={goDashBoard} className='signinBtn'>
              {sign == false ? ('Sign In') : (' Sign Up')}
            </div>

            <hr />

            {sign == false ?
              (<p onClick={ChangeSign} className="p">New to Netflix? <span className='span'> Sign up now.</span></p>)
              :
              (<p onClick={ChangeSign} className="p">Already in Netflix? <span className='span'> Sign In now.</span></p>)
            }

            <p className='p2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='blue'> Learn more.</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginSignin