import React from 'react'
import Blog1 from '../../assets/Blog/Blog.png'
import classes from './Blog.module.css'

function Blog() {
  return (
    <div className={classes.blog}>
    <img src={Blog1} alt="Blog" />
  </div>
)
  
}

export default Blog
