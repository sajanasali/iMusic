import React from 'react'
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';
const songcard = ({ album }) => {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  )
}

export default songcard
