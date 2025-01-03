import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants.'
import { addFeed } from '../utils/store/feedSlice'
import UserCard from '../components/UserCard'

const Feed = () => {
    const feed = useSelector(store => store.feed)
    const dispatch = useDispatch()
    const fetchFeed = async () => {
        if(feed) return;
        try {
            const res = await axios.get(BASE_URL + "/feed", {withCredentials : true})
            dispatch(addFeed(res?.data?.data))
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchFeed()
    },[])

  return (
    feed && (
        <div className="flex justify-center my-10">
            <UserCard user={feed[0]}/>
        </div>
    )
    
  )
}

export default Feed