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
    <TitleCard title="Invoice Generation" topMargin="mt-2">
    <div class=" file-form ">
        {/* <div><p className=" text-4xl text-bold"></p></div>  mx-auto w-full max-w-5xl */}
        <form>
            <div class=" flex flex-col space-y-6">
                <div class="flex flex-col space-y-8">
                    <div class="flex flex-col space-y-4">
                        <div><p className=" text-xl text-bold">Customer Details</p></div>
                        <InputText type="name"  updateType="name" labelTitle="Customer Name" />
                        <InputText type="text"  updateType="text" labelTitle="Customer Address" />
                        <InputText type="text"  updateType="text" labelTitle="Customer Phone" />
                    </div>
                    <div className=" "><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    {/* mx-auto w-full max-w-5xl */}
                    <div class="flex flex-col space-y-4"> 
                        <div><p className=" text-xl text-bold">Invoice Details</p></div>
                        <InputText type="text"  updateType="text" labelTitle="Invoice Number" />
                        <div class="flex flex-row space-x-20">
                            <div class="flex flex-row space-x-4">
                                <div class="text-sm">
                                    <label for="startDate">Invoice Start Date</label>
                                </div>
                                <div>
                                    <input type="date" id="startDate" name="startDate" labelTitle="Invoice Start Date" ></input>
                                </div>
                            </div>
                            <div class="flex flex-row space-x-4">
                                <div class="text-sm">
                                    <label for="endDate">Invoice End Date</label>
                                </div>
                                <div>
                                    <input type="date" id="endDate" name="endDate" labelTitle="Invoice End Date" ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" "><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    
                    <div class="flex flex-col space-y-4">
                        <div><p className=" text-xl text-bold">Service Details</p></div>
                        <InputText type="name"  updateType="name" labelTitle="Service" />
                        <div class="flex flex-row space-x-20">
                            <div class="flex flex-row space-x-4">
                                <div class="text-sm">
                                    <label for="startDate">Service Start Date</label>
                                </div>
                                <div>
                                    <input type="date" id="startDate" name="startDate" labelTitle="Service Start Date" ></input>
                                </div>
                            </div>
                            <div class="flex flex-row space-x-4">
                                <div class="text-sm">
                                    <label for="endDate">Service End Date</label>
                                </div>
                                <div>
                                    <input type="date" id="endDate" name="endDate" labelTitle="Service End Date" ></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div >
                        <button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Add Service</button>
                    </div>
                    <div className=""><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    
                    <div class="flex flex-col space-y-4">
                        <div><p className=" text-xl text-bold">Product Details</p></div>
                        <InputText type="name"  updateType="name" labelTitle="Product Name" />
                        <InputText type="text"  updateType="text" labelTitle="Price per product" />
                        <InputText type="text"  updateType="text" labelTitle="Number of products" />
                        <InputText type="text"  updateType="text" labelTitle="Total products price" />
                    </div> 
                    <div >
                        <button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Add Product</button>
                    </div>
                    <div className=""><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    
                    <div class="flex flex-col space-y-4">
                    <div><p className=" text-xl text-bold">Taxes</p></div>
                        <InputText type="text"  updateType="text" labelTitle="State Tax" />
                        <InputText type="text"  updateType="text" labelTitle="Federal Tax" />
                        <InputText type="text"  updateType="text" labelTitle="GST" />
                    </div>
                    <div className=""><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    
                    <div class=" flex flex-col space-y-4">
                        <div><p className=" text-xl text-bold">Shipping Details</p></div>
                        <InputText type="text"  updateType="text" labelTitle="Shipping Via" />
                        <div class="flex flex-row space-x-4">
                            <div class="text-sm">
                                <label for="startDate">Shipping Date</label>
                            </div>
                            <div >
                                <input type="date" id="startDate" name="startDate" labelTitle="Shipping Date" ></input>
                            </div>
                        </div>
                        <InputText type="text"  updateType="text" labelTitle="Shipping and Handling Charges" />
                    </div>
                    <div className=""><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                    <div class=" flex flex-col space-y-4">
                        <div><p className=" text-xl text-bold">Billing Method</p></div>
                        <div class="flex flex-col space-y-2">
                            <div class="flex flex-row space-x-4">
                                <div>
                                    <input type="radio" id="billingMethod" name="billingMethod" value="Hourly Rate"></input>
                                </div>
                                <div>
                                    <label for="startDate">Hourly Rate</label>
                                </div>
                            </div>
                            <div class="flex flex-row space-x-4">
                                <div>
                                    <input type="radio" id="billingMethod" name="billingMethod" value="Fixed Amount"></input>
                                </div>
                                <div>
                                    <label for="startDate">Fixed Amount</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>  
                </div>
                <div><p className=" text-xl text-bold">Attachment</p></div>
                <div className="file-card card shadow-xl "> 
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
                <div class="flex flex-row space-x-4">
                    <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Download</button></div>
                    <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Cancel</button></div>
                    <div><button className="btn mt-4 border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Generate Invoice</button></div>
                </div>
                {/* <div className=" mx-auto w-full max-w-5xl"><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>   */}
            </div>
        </form>
    </div>
    </TitleCard>
    // 545454 cbd5e0
    )
}

export default InternalPage