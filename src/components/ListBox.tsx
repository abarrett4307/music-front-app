import React from 'react';
import { ReactNode } from 'react';
import '../styles/ListBox.css'

interface ListBoxProps {
    title : string;
    type : string;
    children : ReactNode | ReactNode[];
}

function ListBox(props : ListBoxProps) {
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


export default ListBox;