import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import PageComponent from './Home';

function Home() {
  const location = useLocation();
  const history = useHistory();

  const navigate = (option) => {
    history.push(`/contacts/${option}`, { background: location })
  }
  return (
    <PageComponent navigate={navigate} />
  );
}

export default Home;
