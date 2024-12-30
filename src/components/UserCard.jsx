import React from 'react'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const UserCard = ({user}) => {
    const {firstName,lastName,age,gender,about,photoUrl,skills} = user
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
            <FaChevronCircleLeft className='text-red-600 text-6xl'/>
            <FaChevronCircleRight className='text-green-600 text-6xl'/>
        </div>
    </div>
  </div>
</div>
  )
}

export default UserCard