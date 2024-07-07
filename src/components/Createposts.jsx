import React from 'react'

const Createposts = () => {
  return (
    <div>
        <form>
            <textarea 
                value=''
                onChange={(e) => setContent(e.target.value)} 
                placeholder="What's on your mind?" 
                required 
            />
            <button type="submit">Post</button>
        </form>
      
    </div>
  )
}

export default Createposts
