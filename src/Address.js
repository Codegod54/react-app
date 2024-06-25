import React from "react";

function Address(props){
    var ad = "imadol";
    var rn = "404";
    
    var addressdata = <p>
        Adress: {ad}<br/>
        RoomNo: {rn}<br/>
        </p>

    return <div>
        <h1>This is Address</h1><br/>
        <p>{addressdata}</p>
        <p>City is : {props.ct}</p>
    </div>
}
export default Address;                                                             