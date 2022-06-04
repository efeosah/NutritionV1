import React, {useState} from 'react'



export const Form = (data) => {

    const updateItem = data.update
    const [item, setItem] = useState("");
    // const [next, setNext] = useState(!data.last());
    // const [last, setLast] = useState(data.next());


    // const searchItem = (e) => {
    //     // e.preventDefault()
    //     // updateItem(e.target.value)
    //     console.log(e.target)
    // }

    const handleInput = (e) => {

        setItem(e.target.value)

    }

    return (

        <>

            <input type='text' placeholder='Food item' name='nutritionform' onChange={(e) => handleInput(e)}>
            </input>        
            <button type="button" onClick={() => updateItem(item)}>Submit</button>
            {/* {!data.next() && <button type="button" onClick={() => data.updateNext(10)}>Next</button>} */}
            {/* {data.last() && <button type="button" onClick={() => data.updateNext(-10)}>Last</button>} */}
            {/* <form action={searchItem()}> 
               
            </form> */}
        
        </>
    )
}