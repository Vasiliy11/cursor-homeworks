import React from 'react';
import './Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)


export const Post = (props) => {
    return(
        <div className='post'>
            <div className='img__wrapper'>
                <img src={props.author.photo} alt={props.author.photo}/>
            </div>
            <div className='content__wrapper'>
                <div className='content__header'>
                    <div className='header__top'>
                        <h2>{props.author.name}</h2>
                        <FontAwesomeIcon icon={["fas", "check-circle"]} />
                        <p>{props.author.nickname}</p>
                        &#183;
                        <p>{props.date}</p>
                    </div>
                    <div className='header__bottom'>
                        <p>{props.content}</p>
                    </div>
                </div>
                <img src={props.image} alt={props.image} className='content__img' />
                <ul>
                    <li><FontAwesomeIcon icon={["far", "comment"]} /> 123</li>
                    <li><FontAwesomeIcon icon={["fas", "retweet"]} /> 123</li>
                    <li><FontAwesomeIcon icon={["far", "heart"]} /> 234</li>
                    <li><FontAwesomeIcon icon={["fas", "upload"]} /></li>
                </ul>
            </div>
        </div>
    )
}