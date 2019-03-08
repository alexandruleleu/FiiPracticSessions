import React from "react";

export default function ListItem(props) {
    return (
        <li className="list-item">{props.name.concat(" aged ", props.age)}</li>
    );
}
