import {UserContext}  from './Contexts';
import {useContext} from 'react';

function withUser(IncomingComponent){
  function OutgoingComponent(props){
    const {user,setUser} = useContext(UserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />
  }
  return OutgoingComponent;
}

export default withUser;