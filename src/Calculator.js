import React from 'react'
import './Calculator.css'



function Calculator() {
  return (
    <div className='calculator'>
        <div className='result'> 
            <div className='prev-ans'> </div>
            <div className='current-ans'> </div>
        </div>
        <button className='two-rows'>AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='two-rows'>=</button>
        
      

    </div>
  )
}

export default Calculator