import React, { useEffect, useState } from 'react';

import useAxios from '../../Hooks/useAxios';
import AllChallenges from '../../Components/AllChallenges/AllChallenges';
import { Link } from 'react-router';

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
           <div className='flex justify-center items-center my-4'>
            <Link to={'/createChallenge'} className='btn btn-primary text-center'>Create a New Challenge</Link>
           </div>
        
        </div>
    );
};

export default Challenges;