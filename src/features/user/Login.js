import {useState ,useRef} from 'react' //useRef
import {Link} from 'react-router-dom'
import LandingIntro from './LandingIntro'
import ErrorText from  '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

function Login(){

    const INITIAL_LOGIN_OBJ = {
        password : "",
        emailId : ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) =>{
        e.preventDefault()
        setErrorMessage("")

        if(loginObj.emailId.trim() === "")return setErrorMessage("Email Id is required!")
        if(loginObj.password.trim() === "")return setErrorMessage("Password is required!")
        else{
            // const loginData = {
            //     password: loginObj.password,
            //     emailId: loginObj.emailId,
            //   };
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            // fetch('https://techdeal.today/docusign/user_login.php', {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     Accept: 'application/json',
            // },
            // body: JSON.stringify(loginData), // Send the registration data as JSON
            // })
            // .then((response) => response.json())
            // .then((response) => {
            //     console.log(response);
            //     // Handle the API response here, including error checking
            //     if (response.success) {
            //     // Registration was successful, handle accordingly
            //     //navigate('/user/Login'); // Redirect to the login page upon successful registration
            //     window.location.href = '/app/welcome'
            //     } else {
            //     // Handle any registration errors
            //     setErrorMessage(response.message); // Set an error message if needed
            //     }
            // })
            // .catch((err) => {
            //     console.log(err);
            //     // Handle any errors that occur during the API request
            // });
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/file-upload'
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLoginObj({...loginObj, [updateType] : value})
    }

    return(
        <div className="min-h-screen flex items-center">
            <div className="card mx-auto w-full max-w-5xl  shadow-xl">  
                <div className="grid  md:grid-cols-2 grid-cols-1 rounded-xl">
                <div className=''>
                        <LandingIntro />
                </div>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Login</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className="mb-4">

                            <InputText  type="emailId" defaultValue={loginObj.emailId} updateType="emailId" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue}/>

                            <InputText  defaultValue={loginObj.password} type="password" updateType="password" containerStyle="mt-4" labelTitle="Password" updateFormValue={updateFormValue}/>

                        </div>

                        <div className='text-blue text-right text-primary'><Link to="/forgot-password"><span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Forgot Password?</span></Link>
                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full  bg-logo-color-dark-green" + (loading ? " loading" : "")}>Login</button>

                        <div className=' text-center mt-4'>Don't have an account yet? <Link to="/register"><span className="text-blue  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Register</span></Link></div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login