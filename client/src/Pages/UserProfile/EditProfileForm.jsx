import React, { useState } from 'react'

const EditProfileForm = ({currentUser, setSwitch}) => {

    const [name, setName] = useState(currentUser?.result.name)
    const [about, setAbout] = useState(currentUser?.result.about)
    const [tags, setTags] = useState(currentUser?.tags)

  return (
    <div>
        <h1 className='edit-profile-title'>
            Edit your Profile
        </h1>
        <h2 className='edit-profile-title-2'>
            Public information
        </h2>
        <form action="" className="edit-profile-form">
            <label htmlFor="name">
                <h3>Display name</h3>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label htmlFor="about">
                <h3>About me</h3>
                <textarea rows="10" id="about" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Interested tags/topics</h3>
                <p>Add tags separated by 1 space</p>
                <input type="text" name="" id="tags" onChange={(e)=> setTags(e.target.tags)} />
            </label><br /> 
            <input type="submit" value="Save profile" className='user-submit-btn inner-grad-btn' />
            <button className='user-cancel-btn grad-btn' onClick={()=>setSwitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm