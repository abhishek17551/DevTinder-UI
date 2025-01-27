import React from 'react'
import { Link } from 'react-router-dom'

const ConnectionCard = ({user}) => {
  const {_id,firstName,lastName,age,gender,about,photoUrl} = user
  return (
  <div className="card bg-base-300 w-2/3 h-1/6 shadow-xl m-3 p-3 flex-row items-center justify-evenly">
  <figure>
    <img
      src={photoUrl}
      alt="Profile photo"
      className="rounded-xl h-1/2 w-1/2"
      />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {(age && gender) && <h2 className="card-title text-slate-500 font-semibold">{age + "," + gender}</h2>}
    <p>{about}</p>
  </div>
  <Link to={"/chat/"+_id}><button className="btn btn-outline items-center text-center m-2">Chat</button></Link>
</div>
  )
}

export default ConnectionCard