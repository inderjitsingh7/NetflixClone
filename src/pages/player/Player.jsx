import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import './Player.css'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Player = () => {

    const go = useNavigate()

    const {id} = useParams();

    const [apiValue, SetApiValue] = useState({
        name:'',
        key:'',
        published_at:'',
        type:''
    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQ2YmQ5ZGJhYzQ2NDZmZWY1YjIzYjBkZDdmZjcxOCIsIm5iZiI6MTcxOTc5NDc2MC45ODI3MTUsInN1YiI6IjY2ODFmYWMwNTRiNjE2ZGQ5YmMzZDU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jz10eUhrP_g15roMhy58Z7vZxUQCH0FQjSCWNZDJewg'
        }
    };


    function backGo(){
        go('/Dashboard')
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => SetApiValue(response.results[0]))
            .catch(err => console.error(err));

    }, [])

    return (
        <div className='Player-cont'>
            <IoArrowBackCircleOutline onClick={backGo} className='back-i' />
            <iframe className='ifrm' src={`https://www.youtube.com/embed/${apiValue.key}`}
                title='Trailer' frameborder="0" allowFullScreen></iframe>

            <div className='player-info'>
                <p>Name : {apiValue.name}</p>
                <p>type : {apiValue.type}</p>
            </div>
        </div>
    )
}

export default Player