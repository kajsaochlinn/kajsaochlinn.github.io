import React, { Component } from 'react';
import './hero.scss';
import HeroImg from './images/heroimg.jpg';

class Hero extends Component {
    render() {

        return (
            <div className='hero'>
                <div className='hero__media-wrapper'>
                </div>
                <div className='hero__content-wrapper'>
                    <h1 className='hero__title'>{this.props.title}</h1>
                    <p className='hero__content'>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Hero;