import React from 'react';

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="load-spinner">
        <div className="spinner-border" role="status" />
      </div>
    )
  }
  return null;
};

export default Loading;
