import React, { useState } from 'react'
import { generateStyle } from './style'
import PropTypes from 'prop-types';


export function SegmentedControl({segments, onChange, style}) {
    const s = generateStyle(style, segments.length)
    const [selected, select] = useState(0)
    
    const internalOnChange = (i) => {
        onChange(i)
        select(i)
    }

    let options = segments.map((data, i) => (
        <div key={i+'-item'} style={s.item}>
            <label style={s.label}>
                <p style={s.text}>{data.title}</p>
                <input type='radio'
                    value = {data.title}
                    checked = {i == selected}
                    onChange = {e => internalOnChange(i)}
                    style = {{display:'none'}}
                />
            </label>
        </div>
    ))


    for(let i=1; i<options.length; i += 2) {
        options.splice(i, 0, <div key={i+'-sep'} id={i+'-sep'} style={s.separator}/>)
    }

    return (
        <div style={s.container}>
            {options}
            <div style={{transform: `translateX(${100*selected}%)`, ...s.thumb}}>
                <div style={s.thumbVisible}/>
            </div>
        </div>
    )
}



SegmentedControl.propTypes = {
    segments: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ),
    onChange: PropTypes.func,
    style: PropTypes.shape({
        container: PropTypes.object,
        item: PropTypes.object,
        separator: PropTypes.object,
        text: PropTypes.object,
        thumb: PropTypes.object,
        thumbVisible: PropTypes.object,
    })
}

SegmentedControl.defaultProps = {
    values: [],
    onChange: (value)=>{},
    style: {}
}