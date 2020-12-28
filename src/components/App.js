import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch,Route,Link, useRouteMatch } from 'react-router-dom';

import CandidateCard from './CandidateCard/CandidateCard';
import SecondaryHeader from './SecondaryHeader/SecondaryHeader';
import ProfileDetails from './ProfileDetails/ProfileDetails';

import AppHeader from './AppHeader/AppHeader';

import { CANDIDATE_API } from '../service_urls';
import './app.scss';

const App = props => {
    const [candidateData,setCandidateData] = useState([]);
    const [searchedCandidate,setSearchedCandidate] = useState([]);
    const [clickedUserId,setClickedUserId] = useState('-1');
    const match = useRouteMatch();

    const handleSecondaryHeaderActions = data => {
        const { type = '' , payload = {} } = data;
        switch(type){
            case 'INPUT_CHANGED':
                const sanitizedInput = payload.value.toLowerCase().trim(); 
                setSearchedCandidate(sanitizedInput);
                break;
            default:
                console.log('No matching action found !');
                break;
        } 
    }

    const handleProfileCardActions = data => {
        const { type = '' , payload = {} } = data;
        switch(type){
            case 'PROFILE_CLICKED':
                console.log('Profile clicked with this ',payload.clickedId);
                setClickedUserId(payload.clickedId);
                break;
            default:
                console.log('No matching action found !');
                break;
        } 
    }

    useEffect(() => {
        //fetch candidate details
        axios.get(CANDIDATE_API)
             .then(res => res.data)
             .then(result => setCandidateData(result))
             .catch(err => {
                 console.log('Error while fetching candidate data !');
             });
    },[]);

    const candidateList = candidateData.filter(item => item["name"].toLowerCase().indexOf(searchedCandidate) > -1).map(item => <CandidateCard key={'profile-card-list'+item["id"]} id={item["id"]} imgUrl={item["Image"]} userName={item["name"]} action={handleProfileCardActions}/>);
    const profileDetailsData = candidateData.filter(item => item['id'] === clickedUserId);

    console.log('Details data is ',profileDetailsData);

    return(
        <main className={'jp-app-cont'}>
            <AppHeader />
            <switch>
                <Route path={`/${clickedUserId}`}>
                    {
                        (profileDetailsData.length > 0) && (
                            <ProfileDetails id={profileDetailsData[0]['id']} imgUrl={profileDetailsData[0]['Image']} userName={profileDetailsData[0]['name']} /> 
                        )
                    }
                </Route>
                <Route exact path={'/'}>
                    <SecondaryHeader action={handleSecondaryHeaderActions}/>
                    <div className={'jp-profiles-cont'}>
                        {candidateList}
                    </div>
                </Route>
            </switch>
        </main>
    );
}

export default App;