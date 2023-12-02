import React from 'react'
import UseStateNum from './UseStateNum';
import USeStateSingleString from './USeStateSingleString';
import UseStateMultiValue from './UseStateMultiValue';
import UseBoolean from './UseBoolean';
import UseArray from './UseArray';
import UseObject from './UseObject';

const StafUseState = () => {
    
    return (
    <>
    {/* call use state component with number */}
      <UseStateNum/>
      <hr/>

    {/* call use state component with single string */}
      <USeStateSingleString/>
      <hr/>
      
    {/* call use state component with single string */}
        <UseStateMultiValue/>
        <hr/>

    {/* call use state component with single string */}
        <UseBoolean/>
        <hr/>

    {/* call use state component with Array */}
        <UseArray/>
        <hr/>

    {/* call use state component with Array */}
        <UseObject/>

    </>
  )
}

export default StafUseState
