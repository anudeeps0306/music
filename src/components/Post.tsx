import React from 'react'
import Posts from './Posts'

type Props = {}

const Post = (props: Props) => {
  return (
    <div style={{display:"flex",columnGap:"2rem"}}>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
    </div>
  )
}

export default Post