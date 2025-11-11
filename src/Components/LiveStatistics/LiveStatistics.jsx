import React from 'react';

const LiveStatistics = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-6 p-5'>
       

            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className=" text-xl card-title text-secondary">Community Members</h2>
    <p className='text-4xl text-primary font-bold'>0</p>
    <p className='text-xl text-secondary'>and growing</p>
  </div>
</div>

                 <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className=" text-xl card-title text-secondary">CO₂ Saved</h2>
    <p className='text-4xl text-primary font-bold'>0 kg</p>
    <p className='text-xl text-secondary'>through sustainable actions</p>
  </div>
</div>

          <div className="card bg-base-100 w-96 shadow-xl">
  <div className=" card-body items-center text-center">
    <h2 className="text-xl card-title text-secondary">Plastic Reduced</h2>
    <p className='text-4xl text-primary font-bold'>0 kg</p>
    <p className='text-xl text-secondary'>kept out of landfills</p>
  </div>
</div>



        </div>

        
    );
};

export default LiveStatistics;