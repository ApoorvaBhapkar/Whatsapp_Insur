import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'
import PaperClipIcon from '@heroicons/react/24/outline/PaperClipIcon'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }
    const [file,setFile]= useState()

    function handleFile(event){
        setFile(event.target.files[0])
        //console.log(event.target.files[0])
    }
    function handleUpload(){
        const formData=new FormData()
        formData.append('file',file)
        fetch(
            'url',
            {
                method:"POST",
                body: formData
            }
        ).then((response) => response.json()).then(
            (result) =>{
                console.log('success',result)
            }
        ).catch(error=>{
            console.log('Error',error)
        })
    }
    return(
        <>
        <div className="flex x-space-6">
            <div className="mx-auto w-full px-2 py-2">
                <div className="pb-2">
                    <TitleCard topMargin="mt-2">
                        <div className="flex items-center flex-col space-y-6">
                            <div className=" avatar">
                                <div className=" mask mask-circle w-40 h-40">
                                    <img src="https://reqres.in/img/faces/6-image.jpg" alt="Avatar" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold">John Doe</div>
                                <div className="text-base opacity-50">JohnDoe</div>
                                <div className="text-sm opacity-50">JohnDoe@gmail.com</div>
                                <div className="text-sm opacity-50">+1-(908)-000-0001</div>
                            </div>
                            <div className="mt-1"><button className="btn border-solid border-logo-color-light-green text-white bg-logo-color-light-green float-right">Send Message</button></div>
                        </div>
                    </TitleCard>
                </div>   
                <div className="flex flex-col space-y-6">
                    <TitleCard title="Select Profile Photo" topMargin="mt-2">
                        {/* <div className="main"><p >Upload your file here</p></div> */}
                        <form onSubmit={handleUpload}>
                            <div class="input-container flex x-space-2">
                                <PaperClipIcon className="upload-input h-7 w-7"/>
                                <input className="upload-input" type="file" name="file" onChange={handleFile}></input>
                            </div> {/* <button className="upload-button mt-2 w-full shadow-lg">Choose Image</button>   */}
                        </form>
                        <div className="pl-8">
                            <p className="text-sm">Supported files</p>
                            <p className="text-sm">PDF, JPG, PNG</p>
                        </div>
                    </TitleCard>
                </div>
            </div> 
            <div className="mx-auto w-full px-2 py-2 ">
                <TitleCard title="Profile Information" topMargin="mt-2">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputText labelTitle="First Name"  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Last Name"  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Email Id"  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Contact No."  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Address" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="State"  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="City"  updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Zip Code"  updateFormValue={updateFormValue}/>
                        {/* <TextAreaInput labelTitle=""  updateFormValue={updateFormValue}/> */}
                    </div>
                    <div className="divider" ></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue}/>
                        <InputText labelTitle="Timezone" defaultValue="EST" updateFormValue={updateFormValue}/>
                        <ToogleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue}/>
                    </div>
                    <div className="mt-1"><button className="btn border-solid border-logo-color-light-green text-white bg-logo-color-light-green float-right" onClick={() => updateProfile()}>Update</button></div>
                </TitleCard>
            </div>   
        </div>
        </>
    )
}


export default ProfileSettings