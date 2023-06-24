import React from 'react'

function PostcodesList({setPostcodes, postcodes}) {
  return (
    <div>
      {postcodes.map((postcode, index) => (
        <p key={index} >[{index}] - {postcode}</p>
      ))}
    </div>
  )
}

export default PostcodesList