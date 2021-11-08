import React from 'react';
import { render } from 'react-dom';
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
// import { SegmentedControl } from 'segmented-control-react';
import './index.scss'


function Index() {

    const segments = [
        // { name: 'MANUAL' },
        // { name: 'AS LIGHT' },
        // { name: 'OFF' },
        { name: 'manual' },
        { name: 'as light' },
        { name: 'off' },
    ];
    const style = {
        fontSize: "1rem"
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: "10px auto", width: "280px"}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
        </div>
    )
}


render(<Index/>, document.querySelector('#root'));