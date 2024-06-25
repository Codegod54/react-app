import React from "react";

function Cars(){
    var name = 'Audi';
    var lot = 45;
    var origin = 'Germany';
    var price = 8000000;

    var data = <p>
        Name: {name}<br/>
        Lot: {lot}<br/>
        Origin: {origin}<br/>
        Price NRS: {price}|-
    </p>

    return  <div>


        <p>
            Car detail: {data}
        </p>
    </div>
}

export default Cars