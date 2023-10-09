import React from 'react'

const ProfileBio = ({currentProfile}) => {
        console.log(currentProfile);
  return (
    <div>
        <div>
        {
            currentProfile?.tags ?(
                <>
                    <h4>Tags watched</h4>
                    {
                        currentProfile?.tags.map((tag) => (<p key={tag}>{tag}</p>))
                    }
                </> 
            ):(
                <p>0 tags watched</p>
            )
        }
        </div>
        <div>
            {
                currentProfile?.users?(
                    <>
                        <h4>About</h4>
                        <p>{currentProfile?.users}</p>
                    </>
                ):(
                    <p>No bio found</p>
                )
            }
        </div>
        
    </div>
  )
}

export default ProfileBio