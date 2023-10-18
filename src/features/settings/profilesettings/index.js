import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../../components/Cards/TitleCard"
import { showNotification } from '../../common/headerSlice'
import InputText from '../../../components/Input/InputText'
import TextAreaInput from '../../../components/Input/TextAreaInput'
import ToogleInput from '../../../components/Input/ToogleInput'

function ProfileSettings(){


    const dispatch = useDispatch()

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({message : "Profile Updated", status : 1}))    
    }

    const updateFormValue = ({updateType, value}) => {
        console.log(updateType)
    }

    return(
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">

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

                <div className="mt-16"><button className="btn border-solid border-logo-color-light-green text-white bg-logo-color-light-green float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings