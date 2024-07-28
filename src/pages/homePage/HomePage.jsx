import React from 'react'
import NavLogin from '../../components/navLogin/NavLogin'
import './HomePage.css'
import { IoIosArrowForward } from "react-icons/io";
import BoxInfo from '../../components/BoxInfo/BoxInfo';
import { NavLink, useNavigate } from 'react-router-dom';
import TVBG from '../../img/TVBG.png'
import MBG from '../../img/mobileBG.jpg'


const HomePage = () => {



  const d1 = 'Netflix is a streaming service that offers a wide variety of award winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices There`s always something new to discover, and new TV shows and movies are added every week!'
  const d2 = 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
  const d3 = 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles'
  const d4 = 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees start or stop your account anytime.'
  const d5 = 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
  const d6 = 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family friendly TV shows and films in their own space Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you dont want kds to see.'

  const go = useNavigate()

  function handelClick(){
    go('/LoginSignin')
  }

  return (
    <div className='HomePage-cont'>

      <NavLogin />

      <div className=' homeContent'>
        <div className='homegradient'>
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='user-intraction'>
            <button onClick={handelClick} className='GSBTN oldbtn'>
              <h1>Get Started</h1>
              <IoIosArrowForward className='arrow' />
            </button>
          </div>
        </div>
      </div>

      <div className='Part-2'>
        <div className='part2-inner' >
          <div className='inner-1' >
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className='inner-2'>
            <video className='video' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay muted loop playsInline></video>
            <img className='tvimg' src={TVBG} alt="" />
          </div>
        </div>
      </div>

      <div className='Part-3'>
        <div className='innerDiv3'>
          <div className='d1'>
            <img src={MBG} alt="" />
          </div>
          <div className='d2'>
            <h1>Download your shows to watch offline</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
      
      <div className='boxCont'>
        <h1 className='text-title'>Frequently Asked Questions</h1>
        <BoxInfo title={'What is Netflix?'} desc={d1} />
        <BoxInfo title={'How Much does Netflix cost?'} desc={d2} />
        <BoxInfo title={'Where can i watch?'} desc={d3} />
        <BoxInfo title={'How do i cancel?'} desc={d4} />
        <BoxInfo title={'What can i watch on Netflix?'} desc={d5} />
        <BoxInfo title={'Is Netflix good for kids?'} desc={d6} />
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <button onClick={handelClick} className='GSBTN oldbtn'>
          <h1>Get Started</h1>
          <IoIosArrowForward className='arrow' />
        </button>
      </div>

      <div className='footer'>
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div>
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Netflix</p>
        </div>
        <div>
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage