import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';

import AuthContext from '../../store/auth-context';

const Home = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <Card className={classes.home}>
      <h1>
        Welcome{' '}
        {authCtx.userEmail ? (
          <>{authCtx.userEmail.substring(0, authCtx.userEmail.indexOf('@'))}</>
        ) : (
          <>Back</>
        )}
      </h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
