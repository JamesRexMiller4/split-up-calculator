import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [ numPeople, setNumPeople ] = useState('');
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState('');
  const [ total, setTotal ] = useState('');
  const [ perPerson, setPerPerson ] = useState('');
  const [ showPerPerson, setShowPerPerson ] = useState(false);
  const [ disableBtn, setDisableBtn ] = useState(true);
  

  const addTipTotal = () => {
    let tipNum = (parseFloat(bill) * .25).toFixed(2);
    let totalNum = parseFloat(bill) + parseFloat(tipNum);
    setTip(tipNum);
    setTotal(parseFloat(parseFloat(totalNum).toFixed(2)));
  }

  const calculatePerPerson = () => {
    setShowPerPerson(true);
    setPerPerson((total / numPeople).toFixed(2));
  }
    
  const handleChange = (e) => {
    if (e.target.id === 'numPeople') {
      setNumPeople(e.target.value)
    }
    if (e.target.id === 'bill') {
      setBill(e.target.value)
    }
    if (bill > 0 && numPeople > 0) {
      addTipTotal();
      setDisableBtn(false);
    }
  }


  return ( 
    <section className='calculator-section'>
      <form>
        <label htmlFor='numPeople'>Number of People</label>
        <input id='numPeople' type='number' value={numPeople} 
        onChange={handleChange} placeholder='4'></input>
        <label htmlFor='bill'>Bill</label>
        <input id='bill' type='number' value={bill}
        placeholder='$150.00'onChange={handleChange}></input>
        <label htmlFor='tip'>Tip</label>
        <input id='tip' type='number' placeholder='25%' value={tip}></input>
        <label htmlFor='total'>Total</label>
        <input id='total' type='text' placeholder='$750.00'value={total}></input>
        <button disabled={disableBtn} type='button' onClick={calculatePerPerson}>Calculate</button>
      </form>
      { showPerPerson && <h3>Each person pays: $<span>{perPerson}</span></h3>}
    </section>
  );
}

export default Calculator;