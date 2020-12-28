import React from 'react';
import { Link } from 'react-router-dom';

import './profile_details.scss';

const ProfileDetails = props => {
    const { id = '' , imgUrl = '' , userName = '' } = props;

    return(
        <div className={'jp-profile-details'}>
            <div className={'profile-img-cont'}>
                <img src={imgUrl} width={'100%'} height={'100%'} />
            </div>
            <div className={'profile-name-cont'}>
                <span>{userName}</span>
            </div>
            <div className={'profile-btn-cont'}>
                <Link to={'/'} style={{textDecoration : 'none'}}>
                    <div className={'reject-btn'}>
                        Reject
                    </div>
                </Link>
                <Link to={'/'} style={{textDecoration : 'none'}}>
                    <div className={'shortlist-btn'}>
                        Shortlist
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProfileDetails;