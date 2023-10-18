import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Dashboard from '../../features/dashboard/index'
import './fileUpload.css'
import InputText from '../../components/Input/InputText'
import TextAreaInput from '../../components/Input/TextAreaInput'
import TitleCard from "../../components/Cards/TitleCard"

function InternalPage(){
    const dispatch = useDispatch()
    const [file,setFile]= useState()
    
    useEffect(() => {
        dispatch(setPageTitle({ title : "File Upload"}))
      }, [])

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
    //    <Dashboard />upload-button upload-input
    <TitleCard title="File Upload" topMargin="mt-2">
        <div class=" flex flex-col space-y-10 ">
            <div className="flex flex-col space-y-10">
                <div><p className=" text-2xl text-bold">Add Document</p></div>
                <div className="file-card card  shadow-xl"> 
                    <div className="main"><p >Upload your file here</p></div>
                    <div className="file-form">
                        <form onSubmit={handleUpload}>
                            <input className="upload-input" type="file" name="file" onChange={handleFile}/>
                            <button className="upload-button mt-2 w-full shadow-lg">Upload</button>  
                        </form>
                    </div>
                    <p className="main">Supported files</p>
                    <p className="info">PDF, JPG, PNG</p>
                </div>
                {/* <div className=" mx-auto w-full max-w-5xl"><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>   */}
            </div>
            <div className="flex flex-row space-x-10">
                <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Save Customer Data</button></div>
                <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Send Notification</button></div>
            </div>
            
            {/* <div className="flex flex-col space-y-10">
                <div><p className=" text-2xl text-bold">Add Recipients</p></div>
                <div className="file-form">
                    <form>
                        <div>
                        <InputText type="name"  updateType="name" labelTitle="Name" />
                        <InputText type="emailId"  updateType="emailId" labelTitle="Email" /> 
                        </div>
                        <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Add recipient</button></div>
                    </form>
                </div>
                {/* <div className=" mx-auto w-full max-w-5xl"><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>   */}
            {/* </div> */}
            {/* <div className="flex flex-col space-y-10">
                <div><p className=" text-2xl text-bold">Add Message</p></div>
                <div className="file-form ">
                    <form>
                        <div>
                            <InputText type="emailId"  updateType="emailId" labelTitle="Email Subject" />
                            <TextAreaInput multiline={true} placeholder='Email Message' value=''/>
                        </div>
                    </form>
                </div>
                {/* <div className=" mx-auto w-full max-w-5xl"><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
            </div> */}
        </div>
    </TitleCard>
    // 545454 cbd5e0
    )
}

export default InternalPage