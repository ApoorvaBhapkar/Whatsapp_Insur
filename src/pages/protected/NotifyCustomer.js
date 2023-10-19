import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import NotifyCustomer from '../../features/notifyCustomer'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Notify Customer"}))
      }, [])


    return(
        <NotifyCustomer />
    )
}

export default InternalPage