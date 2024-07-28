import React, { useState } from 'react'
import './BoxInfo.css'
import { IoAdd } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const BoxInfo = ({title , desc}) => {

    const [Click, setClick] = useState(true)

    function handelclick() {
        if (Click == true) {
            setClick(false)
        }
        else (
            setClick(true)
        )
    }

    return (
        <>

            <div className='box-info'>
                <div className='Bi'>
                    <h2>{title}</h2>

                    {Click == true ?
                        (<IoAdd className='click' onClick={handelclick} />) : (<IoClose className='click' onClick={handelclick} />)
                    }
                </div>


            </div>
            {Click == false &&
                <div className='addBox'>
                    {desc}
                </div>
            }

        </>
    )
}

export default BoxInfo