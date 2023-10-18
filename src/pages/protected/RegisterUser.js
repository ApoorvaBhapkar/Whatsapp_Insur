import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavgation
import LandingIntro from '../../features/user/LandingIntro';
import ErrorText from '../../components/Typography/ErrorText';
import InputText from '../../components/Input/InputText';
import TitleCard from '../../components/Cards/TitleCard';

function Register() {
  const navigate = useNavigate(); // Initialize useNavgation

  const INITIAL_REGISTER_OBJ = {
    role: '',
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

    if (registerObj.role.trim() === '') return setErrorMessage('Role is required! (use any value)');
    if (registerObj.fname.trim() === '') return setErrorMessage('First name is required! (use any value)');
    if (registerObj.lname.trim() === '') return setErrorMessage('Last name is required! (use any value)');
    if (registerObj.emailId.trim() === '') return setErrorMessage('Email Id is required! (use any value)');
    if (registerObj.password.trim() === '') return setErrorMessage('Password is required! (use any value)');
    if (registerObj.cpassword.trim() === '') return setErrorMessage('Confirm Password is required! (use any value)');

    // Create a JSON object containing registration data
    const registrationData = {
      role: registerObj.role,  
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
          window.location.href = '/app/file-upload'
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
    <TitleCard title="Register New User" topMargin="mt-2">
    <div className="mx-auto w-full max-w-xl">
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <div defaultValue={registerObj.role} updateType="role" className="form-group mt-3" >
                    <label>Select Role for the user</label>
                    <select className="form-control mt-1" >
                    {/* onChange={(e) => {setRole(e.target.value); }} */}
                    <option value="">Select an option</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Executive">Executive</option>
                    {/* Add more options as needed */}
                    </select>
                </div>
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
              <div className="d-grid gap-2 mt-3" style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className={"btn border-solid border-logo-color-light-green mt-2 bg-logo-color-light-green" + (loading ? " loading" : "")}>
                Register
              </button>
              </div>
            </form>
    </div>
    </TitleCard>
  );
}
export default Register;
