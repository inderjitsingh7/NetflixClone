import React, { useEffect, useState } from 'react'
import './Dash.css'
import { IoMdArrowDropdown } from "react-icons/io";
import Slider from '../../components/slider/Slider';
import {  useNavigate } from 'react-router-dom';
import NL from '../../img/Netflix_Logo.png' 


const Dashboard = () => {

    const go = useNavigate()

    function backHome() {
        go('/')
    }


    const [signot, Setsignot] = useState(false);

    function changeSignot() {
        if (signot == true) {
            Setsignot(false)
        }
        else {
            Setsignot(true)
        }
    }

    const [ApiMovie, SetApiMovie] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQ2YmQ5ZGJhYzQ2NDZmZWY1YjIzYjBkZDdmZjcxOCIsIm5iZiI6MTcxOTc5NDc2MC45ODI3MTUsInN1YiI6IjY2ODFmYWMwNTRiNjE2ZGQ5YmMzZDU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jz10eUhrP_g15roMhy58Z7vZxUQCH0FQjSCWNZDJewg'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => SetApiMovie(response.results[0]))
            .catch(err => console.error(err));
    }, [])



    return (
        <div className='Dash-Board'>
            <div className='Nav-dash'>
                <div className='ddiv1'>
                    <img className='dash-logo' src={NL} alt="" />
                        <p className='pppp'>Home</p>
                </div>

                <div onClick={changeSignot} className='add-btn'>
                    <img src="https://occ-0-6503-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />
                    <IoMdArrowDropdown className='dropDown' />
                </div>
                {signot == true &&
                    <button onClick={backHome} className='signOut'>Sign Out</button>
                }
            </div>
             
            <div className='hero'>
                <img className='heroimg' src={`https://image.tmdb.org/t/p/w500` + ApiMovie.backdrop_path} alt="" />

                <div className='info-hero'>
                    <h1>{ApiMovie.original_title}</h1>
                    <p>{ApiMovie.release_date}</p>
                </div>
            </div>

            <Slider title={'Now Playing'} srch={'now_playing'} />
            <Slider title={'Top Rated'} srch={'top_rated'} />
            <Slider title={'Upcoming'} srch={'upcoming'} />
            <Slider title={'Popular'} srch={"popular"} />

        </div>
    )
}

export default Dashboard