import React, { useState } from 'react'
import s from './SegmentedControl.scss'
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames';

const defaultStyle = {
    fontSize: '0.5rem',
    paddingOutV: '8px',
    paddingOutH: '4px',
    paddingInV: '8px',
    paddingThumb: '4px 4px',
    separatorMargin: '8px'
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
        <>
            {(i==0) ? '' :
                <div key={`${i}sep`} 
                    className={s.separator}
                    style={{height:`calc(100% - 2*${style.separatorMargin})`, margin: `${style.separatorMargin} 0`}}
                />
                
            }
            <div key={i} 
                className={s.item} 
                style={{
                    padding: `${style.paddingInV} 0px`,
                    width: `calc(${itemWidth} - ${(segments.length-1)/segments.length}px )`,
                    fontSize: `${style.fontSize}`
                }}
            >
                <label className={s.item_label} >
                    {data.name}
                    <input type='radio'
                        value = {data.name}
                        checked = {i == selected}
                        onChange = {e => internalOnChange(i)}
                        style = {{display:'none'}}
                    />
                </label>
            </div>
        </>
    ))

    console.log(options)

    return (
        <div className={s.container} 
            style={{
                height: `calc(${style.fontSize}*1.15 + 2*${style.paddingOutV})`,
            }}
        >
            {options}
            <div className={s.thumb}
                style={{
                    width: `${itemWidth}`,
                    fontSize: `${style.fontSize}`,
                    transform: `translateX(${100*selected}%)`, 
                    padding: style.paddingThumb,
                }}>
                    <div className={s.thumb_visible}></div>
            </div>
        </div>
    )
}


SegmentedControl.defaultProps = {
    values: [],
    onChange: (value)=>{},
    style: {}
}
