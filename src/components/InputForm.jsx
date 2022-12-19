import React from 'react'

const InputForm = (props) => {

  const {label, errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className='inputform flex flex-col w-96'>
      <label className='text-2xs text-gray-600'>{label}</label>
      <input className='p-3 m-2 rounded-lg border-solid border-2 border-gray-300 ' {...inputProps} onChange={onChange} />
      <span className='text-xs p-3 text-red-600 hidden'>{errorMessage}</span>
    </div>
  )
}

export default InputForm;