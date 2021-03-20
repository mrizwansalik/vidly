import React from 'react'

const MovieForm = ({match, history})=> {
    return (
        <div>
            <h1> ID of current Movie is <br /> {match.params.id}</h1>
            <button className='btn btn-primary' onClick={()=>history.push('/')}>Save</button>
        </div>
    )
}

export default MovieForm