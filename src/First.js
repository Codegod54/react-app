import React from "react";

function First(){
    var name = "Basant";
    var age = 22;
    var address = "Lalitpur, Imadol";
    var gender = "Male";
    var weight = 75;
    var hobby = "Skeching"

    var data = <h2> Name: {name}, Age: {age}, Address:{address}, Gender: {gender}, Weight: {weight}, Hobby: {hobby}</h2>
    
return (
    <div>
        <p>First component: {data}</p>
    </div>
)

}

export default First;