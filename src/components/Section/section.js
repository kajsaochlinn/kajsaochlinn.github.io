import React, { Component } from 'react';
import './section.scss';
import cx from 'classnames';

class Section extends Component {
    render() {
        const {color, title, content} = this.props;
        const classNames = cx('section',color && 'section--' + color);

        return (
            <div className={classNames}>
                <div className='section__inner'>
                    <h2 className='section__title'>{title}</h2>
                    <p className='section__content'>{content}</p>
                </div>
            </div>
        )
    }
}

export default Section;