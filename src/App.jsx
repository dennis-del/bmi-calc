import { useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [height , setHeight] = useState(0)
  const [weight , setWeight] = useState(0)
  const [bmi , setBMI] = useState(0)
  const [result , setResult] = useState("")

  const [isHeight , setIsHeight] = useState(true)
  const [isWeight , setIsWeight] = useState(true)

  const validate = (e)=>{
    /* console.log(e.target.value);
    console.log(e.target.name); */

    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));

    if(!!value.match(/^[0-9]*$/)){
      if(name=='height'){
        setHeight(value)
        setIsHeight(true)
      }
      else{
        setWeight(value)
        setIsWeight(true)
      }
    }
    else{
      if(name=='height'){
        setHeight(value)
        setIsHeight(false)
      }
      else{
        setWeight(value)
        setIsWeight(false)
      }
    }
  }

  const handleReset = ()=>{
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
    setBMI(0)
  }

  const calculate = ()=>{
    
    let str = ""
    let heightmtr = height/100;
    let bmimass = (weight/(heightmtr*heightmtr)).toFixed(2);
    setBMI(bmimass)

    if(bmimass>=30){
      str = "Obese"
      setResult(str)
    }
    else if(bmimass>=25){ 
      str = "Overweight"
      setResult(str)
    }
    else if(bmimass>=18.5){
      str = "Normalweight"
      setResult(str)
    }
    else{
      str = "Underweight"
      setResult(str)
    }
    console.log(str);
  }

  /* console.log('height',height);
  console.log('weight',weight); */

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{width:'100',height:'100vh'}}>
        <div className='bg-transparent p-5 rounded shadow' style={{width:'500px',backdropFilter:'blur(10px)',color:'yellow'}}>
          <h1 className='d-flex justify-content-center'>BMI CALCULATOR</h1>
          <div className='mt-5 flex-column d-flex justify-content-center align-items-center p-3 rounded w-100'>
            <h2 className='fs-1 fw-bolder'>{bmi}</h2>
            <h2>{result}</h2>
            <p>Body Mass Index</p>
            <div className='mt-5 mb-3'>
              <h5>Height</h5>
              <input className='mt-3 w-100' type="text" placeholder='cm' value={height || ""} name='height' onChange={(e)=>validate(e)} />
              {!isHeight &&
                <p className='text-danger'>*Invalid Input</p>
              }
              <h5 className='mt-5'>Weight</h5>
              <input className='mt-3 w-100' type="text" placeholder='kg' value={weight || ""} name='weight' onChange={(e)=>validate(e)} />
              {!isWeight &&
                <p className='text-danger'>*Invalid Input</p>
              }
              <div className='d-flex mt-5'>
                <Button id='calc' variant="contained" disabled={isHeight && isWeight ?false:true} onClick={calculate}>Calculate</Button>
                <Button id='reset' variant="outlined" onClick={handleReset}>Reset</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
