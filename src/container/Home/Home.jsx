import React from 'react';

const HomeComponent = ({ navigate }) => {
  return (
    <div className="d-flex justify-content-center w-100 p-5">
      <button className="btn btn-a btn-primary btn-sm mx-4 rounded-0 px-5" onClick={() => navigate('all')}>Modal A</button>
      <button className="btn btn-b btn-primary btn-sm mx-4 rounded-0 px-5" onClick={() => navigate('us')}>Modal B</button>
    </div>
  );
}

export default HomeComponent;
