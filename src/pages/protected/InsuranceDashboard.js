import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPageTitle } from '../../features/common/headerSlice'
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"
import ArrowUturnLeftIcon from '@heroicons/react/24/outline/ArrowUturnLeftIcon'
import HandThumbUpIcon from '@heroicons/react/24/outline/HandThumbUpIcon'
import MessageIcon from '@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon'


import './fileUpload.css'

const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if(searchText == ""){
            removeAppliedFilter()
        }else{
            applySearch(searchText)
        }
    }, [searchText])

    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
            {filterParam != "" && <button onClick={() => removeAppliedFilter()} className="btn btn-xs mr-2 btn-active btn-ghost normal-case">{filterParam}<XMarkIcon className="w-4 ml-2"/></button>}
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline"><FunnelIcon className="w-5 mr-2"/>Filter</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
                    {
                        locationFilters.map((l, k) => {
                            return  <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>
            </div>
        </div>
    )
}

const NotifyAll = () => {

    useEffect(() => {
    }, [])

    return(
        <div className="flex x-space-6">
            <div className="text-center pr-2 pt-4">
                <span className="text-blue text-sm inline-block">*If you click send All button the message will send to all the users</span>
            </div>
            <div>
                <button className="float-left btn border-logo-color-light-green bg-logo-color-light-green text-white shadow-lg">Notify All</button>
            </div>
            
        </div>
    )
}

function Transactions(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Dashboard"}))
      }, [])

    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.location == params})
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    return(
        <>
            {/* <TitleCard title="Recent Transactions" topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}> */}
        <div className="mx-auto w-full" >    
            <div className="flex space-x-2">
                <div className=" mx-auto w-full pb-1 pr-4">
                    <TitleCard title="Total Yes Response" topMargin="mt-2">
                        <div className="flex items-center flex-col space-y-6">
                            <div className="text-center">
                                <ArrowUturnLeftIcon className="h-20 w-20"/>
                            </div>
                            <div className=" text-center">0</div>
                        </div>
                    </TitleCard>
                </div>   
                <div className="mx-auto w-full pb-1 pr-4">
                    <TitleCard title="Completed" topMargin="mt-2">
                        <div className="flex items-center flex-col space-y-6">
                            <div className="flex space-x-2">
                                <div><HandThumbUpIcon className="h-20 w-20"/></div>
                            </div>
                            <div className=" text-center">0</div>
                        </div>
                    </TitleCard>
                </div> 
                <div className="mx-auto w-full pb-1">
                    <TitleCard title="Total Messages" topMargin="mt-2">
                        <div className="flex items-center flex-col space-y-6">
                            <div className="text-center">
                                <MessageIcon className="h-20 w-20"/>
                            </div>
                            <div className=" text-center">0</div>
                        </div>
                    </TitleCard>
                </div> 
            </div> 
            <div>
                <TitleCard topMargin="mt-2">
                    {/* Team Member list in table format loaded constant */}
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Insured Name</th>
                                <th>Mobile Number</th>
                                <th>Policy Number</th>
                                <th>NRMR Name</th>
                                <th>SM Name</th>
                                <th>Executive Name</th>
                                <th>Executive Number</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    trans.map((l, k) => {
                                        return(
                                            <tr key={k}>
                                            <td></td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-circle w-12 h-12">
                                                            <img src={l.avatar} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                            <td>{l.location}</td>
                                            <td>${l.amount}</td>
                                            <td>{moment(l.date).format("D MMM")}</td>
                                            <td>${l.amount}</td>
                                            <td>${l.amount}</td>
                                            
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </TitleCard>
            </div>
        </div>
        </>
    )
}


export default Transactions