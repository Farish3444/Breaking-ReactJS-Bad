import React from 'react'
import './Characters.css';
import CharacterItem from './CharacterItem';

const CharactersGrid = ({ items,isLoading }) => {
    return (
            isLoading ? (<h1 style={{color:'whitesmoke'}}>Loading Please wait</h1>):( <section className='cards'>
            {items.map((item) => (
              <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
          </section>)
        
    )
}

export default CharactersGrid
