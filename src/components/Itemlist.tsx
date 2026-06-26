import React from 'react';
import { ReactNode } from 'react';
import '../styles/Itemlist.css'

interface ItemlistProps {
    title: string;
    children: ReactNode | ReactNode[];
}

function Itemlist(props : ItemlistProps) {
    return (
        <div className="Item-list">
            <text className='Box-title'> {props.title}</text>
            <div style={{height:2,backgroundColor:'black',marginBottom:3}} />
                <div>
                    {props.children}
                </div>

        </div>
    );
}


export default Itemlist;