import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ExecutiveTable from '../../features/executiveTable'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Executive Table"}))
      }, [])


    return(
        <ExecutiveTable />
    )
}

export default InternalPage