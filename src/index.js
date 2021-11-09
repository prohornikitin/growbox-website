import React from 'react';
import { render } from 'react-dom';
import { Seekbar } from './components/Seekbar/Seekbar';
import { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
import './index.scss'


function Index() {

    const segments = [
        { title: 'manual' },
        { title: 'as light' },
        { title: 'off' },
    ];
    const style = {
        container: {
            fontSize: '1rem'
        }
    }

    return (
        <>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
            <div style={{margin: '10px auto', width: '280px'}}>
                <SegmentedControl segments={segments} style={style}/>
            </div>
        </div>
        </>
    )
}


render(<Index/>, document.querySelector('#root'));