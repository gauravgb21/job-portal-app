import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './candidate_card.scss';

const CandidateCard = props => {
    const match = useRouteMatch();
    const { id = '' , userName = '' , imgUrl = '' ,action  } = props;

    return(
        <Link to={`/${id}`} style={{textDecoration : 'none'}}>
            <div className={'profile-card'} onClick={() => action({ type : 'PROFILE_CLICKED' , payload : { clickedId : id } })}>
                <div className={'profile-card__img'}>
                    <img src={imgUrl} alt='profile image' width={'100%'} height={'100%'}/>
                </div>
                <div className={'profile-card__name'}>
                    {userName}
                </div>   
            </div>
        </Link>
    );
}

export default CandidateCard;