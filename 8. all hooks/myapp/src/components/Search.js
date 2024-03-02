import React from 'react'
import { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm]=useState('');


    const searchHandler=(event)=>{
        setSearchTerm(event.target.value);
    }


    const filteredButtons=[
        "Sehjot", "Aman", "Anil", "Vicky", "Raman", "Baljeet", "Param", 
        "Ravi", "Harkiran", "Himansuh", "Kamraan", "Mohan", "Varun", 
        "Yvraaj", "Taran", "Ankit", "Dhanwant", "Tarun", "Sarita", "Ravneet",
        "Navdeep", "Suraj"
    ].filter(button=>button.toLowerCase().includes(searchTerm.toLowerCase()));
   
  return (
    <>
      <h1>this is a search task</h1>
<div className="container">

    <div className="row  py-5">
      <div className="col-md-12 text-center">
         <form className="d-flex  centered-form" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={searchHandler}

            />
         </form>
      </div>
    </div>

    <hr />

    <div className="row">
        <div className="show">
           { filteredButtons.map((button, index)=>(
                <div className='col p-2' key={index}>
                    <button type="button" class="btn btn-primary">{button}</button>
                </div>  
            ))}
        </div> 
    </div>
</div>
    </>
  )
}

export default Search
