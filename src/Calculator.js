import React from 'react'
import './Calculator.css'
import NumButton from './NumButton'
import CalButton from './CalButton'




export const ACTIONS ={
    ADDITION : 'addition',
    CALCULATION: 'calculation',
    CLEAR: 'clear',
    DELETE: 'delete',
    EVALUATE: 'evaluate'
}




function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADDITION:
            if (state.overwrite){
                return{
                    ...state,
                    currentAns: payload.digit,
                    overwrite: false
                }
            }
            if (payload.digit === '0' && state.currentAns === "0") {return state}
            if (payload.digit === '.' && state.currentAns.includes(".")) {return state}
             return{
                ...state, 
                                currentAns: `${state.currentAns || "" }${payload.digit}`
                           }
                           case ACTIONS.CALCULATION:
                                        if(state.currentAns == null && state.prevAns == null) {return state}
                                        if(state.currentAns === null){
                                            return{
                                                ...state,
                                                operation: payload.operation
                                            }
                                        }
                                       if (state.prevAns == null){
                                            return{
                                                ...state,
                                                operation: payload.operation,
                                                prevAns: state.currentAns,
                                               currentAns: null
                                           }
                            
                                        }
                                        return {
                                            ...state,
                                            prevAns: evaluate(state),
                                            operation: payload.operation,
                                            currentAns: null
                                        }
                                     case ACTIONS.CLEAR:
                                       return{}
                                       case  ACTIONS.DELETE:
                                           if (state.overwrite){
                                               return {
                                                   ...state,
                                                   overwrite:false,
                                                   currentAns: null
                                               }
                                           }
                                           if (state.currentAns == null) return state
                                           if (state.currentAns.length === 1) {
                                               return {
                                                   ...state, currentAns: null
                                               }
                                            }
                                               return {
                                                   ...state,
                                                   currentAns: state.currentAns.slice(0,-1)
                                               }
                                          
                                       case ACTIONS.EVALUATE:
                                           if (state.operation == null || state.currentAns== null ||
                                            state.prevAns == null
                                            ) {
                                                return state
                                            }

                                            return {
                                                ...state,
                                                overwrite : true,
                                                prevAns: null,
                                                operation: null,
                                                currentAns: evaluate(state)
                                                
                                            }
      
            default:
    }
    }


function evaluate({currentAns, prevAns, operation}){
    const previous = parseFloat(prevAns)
    const current = parseFloat(currentAns)
    if (isNaN(previous) || isNaN(current)) return ""
    let computation = ""
    switch(operation){
        case "+":
            computation = previous + current
            break
            case "-":
                computation = previous - current
                break
                case "*":
                    computation = previous * current
                    break
                    case "/":
                        computation = previous/current
                        break
    }
    return computation.toString()

}



function Calculator() {
    const [{currentAns, prevAns, operation}, dispatch]= React.useReducer(reducer, {}) 
  return (
    <div className='calculator'>
        <div className='result'> 
        <div className='prev-ans'>{prevAns} {operation}</div>
            <div className='current-ans'>{currentAns} </div>
        </div>
        <button className='two-rows' onClick={()=> dispatch({type:ACTIONS.CLEAR})}>AC</button>
        <button onClick={()=> dispatch({ type: ACTIONS.DELETE})}>DEL</button>
        <CalButton operation="/" dispatch ={dispatch}/>
        <NumButton digit='1' dispatch={dispatch}/>
        <NumButton digit='2' dispatch={dispatch}/>
        <NumButton digit='3' dispatch={dispatch}/>
        <CalButton operation="*" dispatch ={dispatch}/>
        <NumButton digit='4' dispatch={dispatch}/>
        <NumButton digit='5' dispatch={dispatch}/>
        <NumButton digit='6' dispatch={dispatch}/>
        <CalButton operation="+" dispatch ={dispatch}/>
        <NumButton digit='7' dispatch={dispatch}/>
        <NumButton digit='8' dispatch={dispatch}/>
        <NumButton digit='9' dispatch={dispatch}/>
        <CalButton operation="-" dispatch ={dispatch}/>
        <NumButton digit='.' dispatch={dispatch}/>
        <NumButton digit='0' dispatch={dispatch}/>
        <button onClick={()=> dispatch({ type: ACTIONS.EVALUATE})} className='two-rows'>= </button>
        
      

    </div>
  )
}

export default Calculator