import React, { useState } from 'react'

const Counter = () => {

    let [counter, setCounter] = useState(0);
    let [history, setHistory] = useState([]);
    let [undoHistory, setUndoHistory] = useState([]);


    let reset = ()=>{
        setCounter(0)
        setHistory([])
    }

    const doCalc = (ope) =>{
      if(ope === 'divide'){
        // let lastHistory = history
        // let updateHistory = lastHistory.push([...history,['/2',counter,counter/2]])
        setHistory([...history,{oper:'/2',newValue:counter,result:counter/2}])
        setCounter(counter/2);
      }

      else if(ope === 'sub'){
        setHistory([...history,{oper:'-1',newValue:counter,result:counter-1}])
        setCounter(counter-1)
      }

      else if(ope === 'add'){
        setHistory([...history,{oper:'+1',newValue:counter,result:counter+1}])
        setCounter(counter+1)
      }

      else if(ope === 'multi'){
        setHistory([...history,{oper:'*2',newValue:counter,result:counter*2}])
        setCounter(counter*2)
      }
    }


    const undo = () =>{
      const [lastUpdate , ...restHistory] = history;
      setUndoHistory(lastUpdate,...undoHistory)
      setHistory(restHistory)
    }

    // const redo = () =>{
    //   const [lastUpdate , ...restHistory] = undoHistory;
    //   setHistory(lastUpdate,...undoHistory)
    //   setUndoHistory(restHistory)
    //   console.log(lastUpdate,'lastupdate');
    //   console.log(restHistory,'restHistory');
    // }


  return (
    <>
      <div className='row'>
        <button disabled = {history.length === 0 } onClick={undo}>Undo</button>
        <button disabled = {undoHistory.length === 0} >Redo</button>
        <button onClick={reset}>Reset</button>
      </div>
      <hr/>
      <div className='row'>
        <button onClick={()=>doCalc('divide') } >/2</button>
        <button onClick={()=>doCalc('sub')}>-1</button>
        <h2>{counter}</h2>
        <button onClick={()=>doCalc('add')}>+1</button>
        <button onClick={()=>doCalc('multi')}>x2</button>
      </div>
      <hr/>
      <div className='row'>
        <table >
        <thead>
        <tr>
            <th>ope</th>
            <th>counter</th>
            <th>ans</th>
          </tr>
        </thead>
          <tbody>
          {
            history.map((event)=>(
              <tr>
                <td>{event.oper}</td>
                <td>{event.newValue}</td>
                <td>{event.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Counter
