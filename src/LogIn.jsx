import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import axios from 'axios';
import { withUser } from './withProvider';
import { toast } from 'react-toastify';

function LogIn({setUser}) {
  const navigate = useNavigate();
  const callLoginApi = (values) => {
    axios.post('https://myeasykart.codeyogi.io/login', {
      email: values.email,
      password: values.password
    })
    .then(response => {
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      toast.success('login success');
      navigate('/');
    })
    .catch(() => {
      toast.error("invalid credential");
    });
  };

  // Yup for validation
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required')
  });

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className='flex items-center justify-center w-full bg-gray-200 p-4'>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 sm:p-8 md:p-10 rounded-md shadow-lg border border-red-200">
        <Formik initialValues={initialValues} onSubmit={callLoginApi} validationSchema={schema}>
          <Form className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <Input
                label="Email"
                id="email"
                placeholder="Enter Email"
                type="email"
                name="email"
                required
              />
              <Input
                label="Password"
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition-colors"
            >
              Log in
            </button>
            <div className="text-center mt-4 text-sm">
              Don't have an account? <Link to={`/SignUp`} className="text-red-500 hover:underline">Sign up.</Link>
            </div>
            <div className="text-center mt-2 text-sm">
              Forgot Password? <Link to={`/Forgot-Password`} className="text-red-500 hover:underline">Reset here.</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default withUser(LogIn);