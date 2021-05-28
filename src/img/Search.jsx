import React,{useState,useEffect} from 'react'





const Search = ({getQuery}) => {

    const [text, setText] = useState("");

    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form style={{margin:'5%'}}> 
                <input 
                    type='text'
                    placeholder='Search here'
                    onChange={(e)=>onChange(e.target.value)}
                    value={text}
                    autoFocus
                    style={{width:'40%',height:'30px',textAlign:'center'}}
                />
            </form>
        </section>
    )
}

export default Search
