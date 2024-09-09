import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    return (
      <WrappedComponent
        {...props}
        match={{ params }}
        location={location}
        navigate={navigate}
      />
    );
  };
};

export default withRouter;