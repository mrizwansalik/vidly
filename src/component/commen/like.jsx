import React from 'react'

function like({liked, onLike}) {
    let classes = !liked ? "far fa-heart" : 'fas fa-heart'
    return (
        <>
            <i className={classes} aria-hidden='true' onClick={onLike} style={{cursor:'pointer'}}></i>
        </>
    )
}

export default like
