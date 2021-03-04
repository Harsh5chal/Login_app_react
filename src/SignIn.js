import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function SignIn(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/signin');
  }

  return (
    <div>
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="signout" />
    </div>
  );
}

export default SignIn;
