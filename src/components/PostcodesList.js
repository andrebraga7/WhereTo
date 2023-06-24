import React from 'react'
import Postcode from './Postcode'

function PostcodesList({setPostcodes, postcodes}) {
  return (
    <div>
      <Postcode postcodes={postcodes} />
    </div>
  )
}

export default PostcodesList