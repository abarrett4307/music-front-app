import React from 'react';
import "../styles/Basics.css";
import "../styles/TierList.css";
import { useParams } from 'react-router-dom';

function TierList() {
    const { id } = useParams();

    function fetchList(listid : number) {
        return listid;
    }
    
    return (
        <div className="background">
            <div id='list-container'>
                
            </div>

        </div>
    );
}


export default TierList;