import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import CustomerData from '../../features/customerData'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Customer Data"}))
      }, [])


    return(
        <CustomerData />
    )
}

export default InternalPage