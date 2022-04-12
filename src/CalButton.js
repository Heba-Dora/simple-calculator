import React from 'react'
import {ACTIONS} from './Calculator'

function CalButton({dispatch, operation}) {
  return (
      <button onClick={()=> dispatch({type:ACTIONS.CALCULATION, payload: {operation}})}>{operation}</button>
  )
}

export default CalButton