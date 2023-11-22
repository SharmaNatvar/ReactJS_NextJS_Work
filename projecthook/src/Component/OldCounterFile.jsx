import React ,{useState} from 'react'

const OldCounterFile = () => {

    const [counter , setCounter] = useState(0);
  const [history , setHistory] = useState([]);
  const [undoHistory , setUndoHistory] = useState([]);


  const OPERATION_LABELS = {
    '/2':{type:'divide',number:2},
    '-1':{type:'decrement',number:1},
    '+1':{type:'increment',number:1},
    '*2':{type:'multiply',number:2}
  }

  const performOperation = (counter,operationLabel) =>{
    const operation = OPERATION_LABELS[operationLabel]
    switch(operation.type){
      case'increment':
        return counter + operation.number;
      
      case'decrement':
        return counter - operation.number;
      
      case'multiply':
        return counter * operation.number;
      
      case'divide':
        return counter / operation.number;

      default:
        return counter;
    }
  }

  const onClickOperation = (operation) =>{
    const oldCounter = counter;
    const newCounOld = performOperation(counter,operation);
    setCounter(newCounOld)
    setHistory([{operation,oldCounter,newCounOld},...history]);
    setUndoHistory([]);
  };

  const onReset = () =>{
    setCounter(0);
    setHistory([]);
    setUndoHistory([]);
  }

  const onUndo = () =>{
    const [latest, ...earlierHistory] = history;
    setCounter(latest.oldCounter);
    setUndoHistory([latest,...undoHistory]);
    setHistory(earlierHistory);
  }
  
  const onRedo = () =>{
    const [latest, ...earlierHistory] = undoHistory;
    setCounter(latest.newCounOld);
    setUndoHistory(earlierHistory);
    setHistory([latest,...history]);
  }


  return (
    <>
      <div className="row">
        <button disabled={history.length === 0} onClick={onUndo}>Undo</button>
        <button disabled={undoHistory.length === 0} onClick={onRedo}>Redo</button>
        <button onClick={onReset}>Reset</button>
      </div>
      <hr/>
      <div className="row">
        <button onClick={()=> onClickOperation('/2')}>/2</button>
        <button onClick={()=> onClickOperation('-1')}>-1</button>
        <h2>{counter}</h2>
        <button onClick={()=> onClickOperation('+1')}>+1</button>
        <button onClick={()=> onClickOperation('*2')}>x2</button>
      </div>
      <hr/>
      <div className="row">
      <table>
          <thead>
            <tr>
              <th>Operation</th>
              <th>old Counter</th>
              <th>New Counter</th>
            </tr>
          </thead>
          <tbody>
            {
                history.map((item)=>(
              <tr>
                <td>{item.operation}</td>
                <td>{item.oldCounter}</td>
                <td>{item.newCounOld}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OldCounterFile
