import axios from 'axios';
import React from 'react'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {BASE_URL} from '../utils/constants.'
import { removeUserFromFeed } from '../utils/store/feedSlice';

const UserCard = ({user}) => {
    const {_id,firstName,lastName,age,gender,about,photoUrl,skills} = user
    const dispatch = useDispatch()

    const handleRequestAction = async (status, userId) => {
      try {
        const res = await axios.post(
          BASE_URL + "/request/send/" + status + "/" + userId,
          {}, 
          {withCredentials : true})
        dispatch(removeUserFromFeed(userId))
      }
      catch (err) {
        console.error(err)
      }
    }
  return (
<div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {firstName + " " + lastName}
      {(age && gender) && <div className="badge badge-secondary">{age + "," + gender}</div>}
    </h2>
    <p>{about}</p>
    <div className="card-actions justify-center">
        {
            skills && (
                skills.map((skill) => (
                    <div className="badge badge-outline">{skill}</div>
                ))
            ) 
        }
        <div className='flex  gap-7 p-5'>
            <FaChevronCircleLeft className='text-red-600 text-6xl' onClick={() => handleRequestAction("ignored" ,_id)}/>
            <FaChevronCircleRight className='text-green-600 text-6xl' onClick={() => handleRequestAction("interested" , _id)}/>
        </div>
    </div>
  </div>
</div>
  )
}

export default UserCard