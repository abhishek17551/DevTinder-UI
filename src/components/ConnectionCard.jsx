import React from 'react'

const ConnectionCard = ({user}) => {
  const {firstName,lastName,age,gender,about,photoUrl} = user
  return (
  <div className="card bg-base-300 w-2/5 shadow-xl m-5 p-2 flex-row">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="Profile photo"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {(age && gender) && <h2 className="card-title text-slate-500 font-semibold">{age + "," + gender}</h2>}
    <p>{about}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
  )
}

export default ConnectionCard