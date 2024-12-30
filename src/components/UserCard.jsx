import React from 'react'

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
    <div className="card-actions justify-end">
        {
            skills && (
                skills.map((skill) => (
                    <div className="badge badge-outline">{skill}</div>
                ))
            ) 
        }
    </div>
  </div>
</div>
  )
}

export default UserCard