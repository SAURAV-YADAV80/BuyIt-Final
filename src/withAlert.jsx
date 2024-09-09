import {UserContext}  from './Contexts';
import {useContext} from 'react';

function withAlert(IncomingComponent){
  function OutgoingComponent(props){
    const obj = useContext(UserContext);
    return <IncomingComponent {...props} {...obj} />
  }
  return OutgoingComponent;
}

export default withAlert;