import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants.'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/store/connectionSlice'
import ConnectionCard from '../components/ConnectionCard'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store => store.connection)
    const fetchConnections = async () => {
        try {
            const res  = await axios.get(BASE_URL + '/user/connections', {withCredentials : true})
            dispatch(addConnection(res?.data?.data))
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchConnections()
    }, [])

    if(!connections) return;
    if(connections.length === 0) return <h1 className="font-bold text-center text-3xl m-5"> No Connections Found</h1>;
  return (
    <>
        <h1 className="font-bold text-center text-3xl m-5">Connections</h1>
        <div className="flex flex-wrap justify-center m-5">
        
        {
            connections.map((connection,index) => {
                const {_id} = connection
                return (
                    <ConnectionCard user={connection} key={_id} />
                )
            }
                
               
            )
        }
        </div>
    </>

  )
}

export default Connections