import React from 'react';

const Loading = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div class="load-spinner">
        <div class="spinner-border" role="status" />
      </div>
    )
  }
  return null;
};

export default Loading;
