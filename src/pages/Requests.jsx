import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants.'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/store/requestSlice'
import RequestCard from '../components/RequestCard'

const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector(store => store.request)

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/received", {withCredentials : true})
            dispatch(addRequest(res?.data?.data))
            
        }
        catch(err) {
            console.error(err)
        }
    }

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, 
                {}, 
                {withCredentials : true}
            )
            dispatch(removeRequest(_id))
        }
        catch(err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchRequests()
    }, [])

   if(!requests) return;
   if(requests.length === 0) return <h1 className="font-bold text-center text-3xl m-5"> No Requests Found</h1>;
  return (
    <>
        <h1 className="font-bold text-center text-3xl m-5">Requests</h1>
        <div className="flex flex-wrap justify-center m-5">
        {
            requests.map((request,index) => (
                <RequestCard user={request.fromUserId} id={request._id} key={index} reviewRequest={reviewRequest}/>
            ))
        }
        </div>
    </>
  )
}

export default Requests