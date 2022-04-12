import React from 'react'
import {ACTIONS} from './Calculator'

function NumButton({dispatch, digit}) {
  return (
      <button onClick={()=> dispatch({type:ACTIONS.ADDITION, payload: {digit}})}>{digit}</button>
  )
}

export default NumButton