 import React from 'react'
 import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
 import TagsList from './TagsList';
 import './Tags.css'
 
 const Tags = () => {

    const tagsList = [{
        id:1,
        tagName: "javascript",
        tagDesc: "For question regarding javascript and its various implementations and dialects"
    },
    {
        id:2,
        tagName: "DSA",
        tagDesc: "For questions regarding Data structures and algorithms"
    },
    {
        id:3,
        tagName: "C++",
        tagDesc: "For questions regarding Cpp language and OOPs concepts in cpp"
    },
    {
        id:4,
        tagName: "Java",
        tagDesc: "Iske questions bilkul bhi pasand nhi h yar"
    },
    {
        id:5,
        tagName: "Network Security",
        tagDesc: "Questions about network security"
    },
]

   return (
     <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <div className="main-bar">
                <div className='main-bar-header'>
                    <h1 className='tags-h1'>Tags</h1>
                </div>
                
                <p className='tags-p'>A tag is a keyword or label that categorizes your question with other, similar questions. <br></br><br></br>Using the right tags make it easier for others to find and answer your question.</p>
                <div className='tags-list-container'>
                    {
                        tagsList.map((tag) => (
                            <TagsList tag={tag} key={tagsList.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default Tags