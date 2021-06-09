import React, { useState } from 'react'
import SingleColor from './SingleColor'


import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [list, setList] = useState(new Values('#f15025').all(10))
  const [error, setError] = useState(false)
  console.log(list);
  

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setList(new Values(color).all(10))
    } catch (error) {
      setError(true)
    }
    
  }
  return(
    <>
    <section className='container'>
      <h3>Color Gradient Generator</h3>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={color}
        onChange={(e)=> {
          setColor(e.target.value)
        }}
        placeholder='#f15025'
        className={error? 'error':null }
        />
        <button type='submit' className='btn' >Submit</button>
      </form>
      </section>
      <section className='colors'>
        {list.map((color, index)=> {
        const {rgb} = color;
        
        return (
        <SingleColor index={index} key={index} color={color} rgb={rgb}/>
        )
        })}
      </section>
    </>
  ) 
}

export default App
