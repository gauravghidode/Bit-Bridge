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
        tagDesc: "It contains questions jo ki prateek sir class mai padhate hai "
    },
]

   return (
     <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum accusamus illum assumenda facere nemo eaque recusandae ab? Sint, sed animi quisquam corrupti iusto nam, iste mollitia, pariatur doloribus commodi quos.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag) => (
                        <TagsList tag={tag} key={tagsList.id}/>
                    ))
                }
            </div>
        </div>
     </div>
   )
 }
 
 export default Tags