import React from 'react';

import './secondary_header.scss';

const SecondaryHeader = props => {
    const { action } = props;

    return(
        <div className={'search-bar'}>
            <div className={'search-bar-wrap'}>
                <span className={'search-icon'}></span>
                <input className={'input-element'} type="text" placeholder={'Search candidate...'} onChange={(e) => action({ type : 'INPUT_CHANGED' , payload : { value : e.target.value } })}/>
            </div>
        </div>
    );
}

export default SecondaryHeader;