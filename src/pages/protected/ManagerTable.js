import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ManagerTable from '../../features/managerTable'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Manager Table"}))
      }, [])


    return(
        <ManagerTable />
    )
}

export default InternalPage