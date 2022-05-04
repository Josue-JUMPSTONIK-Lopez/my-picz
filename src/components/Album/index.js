import React from 'react'
import './styles.css'
export const Album = (props) => {
    return (
        <div class='container'>
            <div class="container-box">
                <div class="first-box"></div>
                <div class="second-box"></div>
                <div class="third-box"></div>
            </div>
            <p className='album-name'>{props.name}</p>
        </div>
    )
}
