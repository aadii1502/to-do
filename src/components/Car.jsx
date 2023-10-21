import React from "react";

function Car(props) { 
return (
<div
style={{
position: "fixed", top: "50%",
left: "50%",
transform: "translate(-50%)", fontSize: "3em",
}}>
This is a {props.car} car component
</div>
);
}

export default Car;
