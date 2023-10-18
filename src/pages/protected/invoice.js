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
        dispatch(setPageTitle({ title : "Invoice"}))
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
    <TitleCard title="Email Form" topMargin="mt-2">
    {/* <div class="mx-auto w-full max-w-5xl "> */}
        <div className="file-form  flex flex-col space-y-6">
            {/* <div><p className=" text-4xl text-bold"></p></div> */}
            <form>
                <div class="space-y-10">
                    <div>
                        <InputText type="emailId"  updateType="emailId" labelTitle="To:" />
                        <InputText type="emailId"  updateType="emailId" labelTitle="CC:" />
                        <InputText type="emailId"  updateType="emailId" labelTitle="From:" />
                        <InputText type="emailId"  updateType="emailId" labelTitle="Subject:" />
                        <TextAreaInput labelTitle="Body:" multiline={true} placeholder='Email Message' value=''/>
                    </div>
                    <div className="file-card card shadow-xl"> 
                        <div className="font-bold"><p >Upload your file here</p></div>
                            <div className="file-form">
                                <form onSubmit={handleUpload}>
                                    <input className="upload-input" type="file" name="file" onChange={handleFile}/>
                                    <button className="upload-button mt-2 w-full shadow-lg">Upload</button>  
                                </form>
                            </div>
                            <p className="font-bold">Supported files</p>
                            <p className="info">PDF, JPG, PNG</p>
                    </div>
                    <div>
                        <InputText labelTitle="Meeting Invite Link:" />
                        <button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Send Email</button>
                    </div>
                </div>
            </form>
        </div>
    {/* </div> */}
    </TitleCard>
    // 545454 cbd5e0
    )
}

export default InternalPage