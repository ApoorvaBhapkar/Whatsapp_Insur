import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavgation
import LandingIntro from './LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';

function Register() {
  const navigate = useNavigate(); // Initialize useNavgation

  const INITIAL_REGISTER_OBJ = {
    fname: '',
    lname: '',
    password: '',
    cpassword: '',
    emailId: '',
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (registerObj.fname.trim() === '') return setErrorMessage('First name is required! (use any value)');
    if (registerObj.lname.trim() === '') return setErrorMessage('Last name is required! (use any value)');
    if (registerObj.emailId.trim() === '') return setErrorMessage('Email Id is required! (use any value)');
    if (registerObj.password.trim() === '') return setErrorMessage('Password is required! (use any value)');
    if (registerObj.cpassword.trim() === '') return setErrorMessage('Confirm Password is required! (use any value)');

    // Create a JSON object containing registration data
    const registrationData = {
      fname: registerObj.fname,
      lname: registerObj.lname,
      password: registerObj.password,
      cpassword: registerObj.cpassword,
      emailId: registerObj.emailId,
    };

    // Make the API request
    fetch('https://techdeal.today/docusign/user_reg.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(registrationData), // Send the registration data as JSON
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // Handle the API response here, including error checking
        if (response.success) {
          // Registration was successful, handle accordingly
          //navigate('/user/Login'); // Redirect to the login page upon successful registration
          window.location.href = '/app/welcome'
        } else {
          // Handle any registration errors
          setErrorMessage(response.message); // Set an error message if needed
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle any errors that occur during the API request
      });

    setLoading(false);
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage('');
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Register</h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  defaultValue={registerObj.fname}
                  updateType="fname"
                  containerStyle="mt-4"
                  labelTitle="First Name"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.lname}
                  updateType="lname"
                  containerStyle="mt-4"
                  labelTitle="Last Name"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.cpassword}
                  type="password"
                  updateType="cpassword"
                  containerStyle="mt-4"
                  labelTitle="Confirm Password"
                  updateFormValue={updateFormValue}
                />
              </div>
              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={"btn mt-2 w-full bg-logo-color-dark-green" + (loading ? " loading" : "")}
              >
                Register
              </button>
              <div className="text-center mt-4">
                Already have an account? <Link to="/login"><span className="text-blue inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Login</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
