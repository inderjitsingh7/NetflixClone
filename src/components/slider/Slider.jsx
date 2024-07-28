import React, { useEffect, useRef, useState } from 'react'
import './slider.css'
import { Link } from 'react-router-dom'

const Slider = ({title , srch}) => {

    const [movieData, SetMovieData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQ2YmQ5ZGJhYzQ2NDZmZWY1YjIzYjBkZDdmZjcxOCIsIm5iZiI6MTcxOTc5NDc2MC45ODI3MTUsInN1YiI6IjY2ODFmYWMwNTRiNjE2ZGQ5YmMzZDU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jz10eUhrP_g15roMhy58Z7vZxUQCH0FQjSCWNZDJewg'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${srch}?language=en-US&page=2`, options)
            .then(response => response.json())
            .then(response => SetMovieData(response.results))
            .catch(err => console.error(err));

    }, [])

    console.log(movieData)

    const innerRef = useRef()


    useEffect(() => {
        innerRef.current.addEventListener('wheel', (event) => {
            event.preventDefault();
            innerRef.current.scrollLeft += event.deltaY;
        })
    }, [])
    

    return (
        <>

            <p className='p-title'>{title}</p>
            <div className='slider' ref={innerRef}>

                <div className='inner-slide' >
                    {
                        movieData.map((MData, index) => {
                            return (
                                <>

                                    <Link to={`/Player/${MData.id}`} className='moviediv' key={index}>
                                        <img src={`https://image.tmdb.org/t/p/w500` + MData.backdrop_path} alt="" />

                                        <div className='m-title'>
                                            {MData.original_title}
                                        </div>
                                    </Link>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Slider