import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import {Link} from 'react-router-dom'
import TemplatePointers from '../../features/user/components/TemplatePointers'
import TitleCard from "../../components/Cards/TitleCard"

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : ""}))
      }, [])

    return(
      <TitleCard title="Your Documents" topMargin="mt-2">
        {/* <div className="hero h-4/5"> hero-content*/}
          <div className=" flex flex-col space-y-4">
          {/* <div><p className="text-4xl text-bold">Your Documents</p></div> */}
            <div className="font-bold flex flex-col space-y-2">
              <div><p>Action Required on New Document:</p></div>
              <div><p>Waiting for others:</p></div>
              <div><p>Expiring soon:</p></div>
              <div><p>Completed Document</p></div>
            </div>
            {/* <div className=" mx-auto w-full max-w-5xl"><hr style={{ flex: 1, backgroundColor: "#cbd5e0", height: "3px", }} /></div>   */}
            <div className="">
                {/* <TemplatePointers /> max-w-md */}
              <div className="flex flex-row space-y-4 file-card card shadow-xl"> 
                <div className="font-bold"><p >Upload your file here</p></div>
                <div>
                  <Link to="/app/dashboard"><button className="btn bg-logo-color-light-green  border-logo-color-light-green text-white">Get Started</button></Link>
                  </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </TitleCard>
    )
}

export default InternalPage