import { useState } from "react";


function Detalis() {
    const getdatainlocal = localStorage.getItem("useryoutube")
    const data=JSON.parse(getdatainlocal)
        console.log(data);
      
    return (
        <>
            <h1>Detalis show</h1>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Dob</th>

                    </tr>
                </thead>
                <tbody>
                  {
                     data
                     .map((value,index)=>{
                        return(
                            <tr key={index}>
                        <th scope="row">{value.name}</th>
                        <td>{value.email}</td>
                        <td>{value.date}</td>

                    </tr>
                        )
                    })
                  }

                </tbody>
            </table>
        </>
    );
}

export default Detalis;