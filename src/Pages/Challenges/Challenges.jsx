import React, { useEffect, useState } from 'react';

import useAxios from '../../Hooks/useAxios';
import AllChallenges from '../../Components/AllChallenges/AllChallenges';

const Challenges = () => {
   const axios=useAxios()
 const [challenge,setChallenge]=useState([])
       useEffect(()=>{
           axios('/challenges').then(data=>{
               setChallenge(data.data)
           })
       },[axios])
    return (
        <div>
           <AllChallenges AllChallenges={challenge}></AllChallenges>
        </div>
    );
};

export default Challenges;