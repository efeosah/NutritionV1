import React, { useState, useEffect } from "react";

import { Fact } from "../components/fact";
import { Form } from "../components/form";
import { Display } from "../components/display";

import "../assets/styles.css";


export const Main = () => {
    const [result, setResult] = useState(false);
    //number of hits from query
    const [item, setItem] = useState("");

    const [selected, setSelected] = useState({})

    

    // useEffect(() => {
    //     setminQuery(minQuery)
    //     setmaxQuery(maxQuery)
        
    // }, [minQuery, maxQuery]);

    // const updateQueryLast = () => {
    //     setminQuery(minQuery-10)
    //     setmaxQuery(maxQuery-10)
    // }

    

    useEffect(() => {
        // console.log("item changed")
    }, [item]);

    return (
        <>
            <div className="leftdiv">
                <h1>Nutrition Facts</h1>
                <Form update={(_item) => setItem(_item)} />
                
                <Fact item={item}  select={(_item) => setSelected(_item)}/> 
            </div>

            <div className="rightdiv">
                {/* <p>{result ? rightDivTemp : ''}</p> */}
                <Display item={selected}/>
            </div>
        </>
    );
};
