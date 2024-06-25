import React from "react";
function Book(props){
    var bn = "React";
    var bp = "18000";

    var bookdata = <p>
        BookName: {bn}<br/>
        
        BookPrice: {bp}<br/>
        </p>

    return(
        <div>
            <h1>
                This is books list.
            </h1>
            <p>
                Book price: {bookdata}

            </p>
            <p>
                Publication is : {props.pub}
            </p>
        </div>
    )
}
export default Book;