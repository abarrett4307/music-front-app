import React, { ReactNode } from "react";
import '../styles/TierList.css'


interface ItemlistProps {
    tiername: string;
    children: ReactNode | ReactNode[];
}


function Tier(props : ItemlistProps) {
    return(
        <div id='tier'>
            <div className='tiertitle'>
                <text>{props.tiername}</text>
            </div>
            <div className='tieritems'>
                {props.children}
            </div>
        </div>
    );
}