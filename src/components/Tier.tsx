import React, { ReactNode } from "react";
import '../styles/TierList.css'


interface ListBoxProps {
    tiername: string;
    children: ReactNode | ReactNode[];
}


function Tier(props : ListBoxProps) {
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