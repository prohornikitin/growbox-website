import React, { useState } from 'react'
import s from './SegmentedControl.scss'
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames';

const defaultStyle = {
    container: {
        fontSize: '0.5rem',
    },
    item: {
        padding: '8px 0px'
    },
    separator: {
        margin: '8px'
    },
    thumb: {
        padding: '4px 4px'
    },
    thumb_visible: {
        background: '#FFF'
    }
}

export function SegmentedControl({segments, onChange, style}) {
    style = {...defaultStyle, ...style}
    const [selected, select] = useState(0)

    const itemWidth = `${100 / segments.length}%`;
    
    const internalOnChange = (i) => {
        onChange(i)
        select(i)
    }

    const options = segments.map((data, i) => (
        <div key={i}>
            {(i==0) ? '' :
                <div
                    className={s.separator}
                    style={{
                        ...style.separator,
                        height:`calc(100% - 2*${style.separatorMargin})`, 
                        margin: `${style.separator.margin} 0`}}
                />
            }
            <div
                className={s.item} 
                style={{
                    width: `calc(${itemWidth} - ${(segments.length-1)/segments.length}px )`,
                    ...style.item,
                }}
            >
                <label className={s.item_label} >
                    {data.title}
                    <input type='radio'
                        value = {data.title}
                        checked = {i == selected}
                        onChange = {e => internalOnChange(i)}
                        style = {{display:'none'}}
                    />
                </label>
            </div>
        </div>
    ))

    console.log(options)

    return (
        <div className={s.container} 
            style={style.container}
        >
            {options}
            <div className={s.thumb}
                style={{
                    width: `${itemWidth}`,
                    transform: `translateX(${100*selected}%)`, 
                    ...style.thumb
                }}>
                    <div className={s.thumb_visible} style={style.thumb_visible}></div>
            </div>
        </div>
    )
}


SegmentedControl.defaultProps = {
    values: [],
    onChange: (value)=>{},
    style: {}
}
