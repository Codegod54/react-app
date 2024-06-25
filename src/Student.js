import React from "react";
import Address from "./Address";
import Book from "./Book";
function Student(props){

    var name = "Himal";
    var faculty = "MERN";
    var rollno = 1;
    var section = "B";

    var city = "Kathmandu";
    var publication = "Ekta";


    var data = <p>
        Name: {name}<br/>
        Faculty: {faculty}<br/>
        RollNo: {rollno}<br/>
        Section: {section}
        </p>

        return (
            <div>
                <p>Student detail: {data}</p>
                <div></div>
                <h2>
                    Name: 
                    {props.nm}<br/>
                    Age:
                    {props.ag}<br/>
                    Cast:
                    {props.cs}
                </h2>
                <Address ct={city} />
                <Book pub={publication}/>
            </div>
            
        )
}

export default Student;