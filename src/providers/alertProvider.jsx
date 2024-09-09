import {useState} from 'react';
import {AlertContext} from '../Contexts';

function AlterProvider({children}){
  const [alert, setAlert] = useState();
  const removeAlert = () => {
    setAlert(undefined);
  };
  return (
    <AlertContext.Provider value={{ alert,setAlert,removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlterProvider;