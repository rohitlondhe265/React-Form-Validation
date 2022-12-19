import { useState } from "react";
import InputForm from "./components/InputForm";


function App() {
  const [values, setValues] = useState({
    Username: '',
    Email: '',
    BirthDay: "",
    Password: '',
    ConfirmPassword: ""
  })

  const inputs = [
    {
      id: '1',
      name: 'Username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username should be between 3 to 16 charecters and should not include any special charecter",
      label: 'Username',
      require: 'true'
    },
    {
      id: '2',
      name: 'Email',
      type: 'text',
      placeholder: 'Email',
      errorMessage: "Please provide a valid email address",
      label: 'Email',
      require: 'true'
    },
    {
      id: '3',
      name: 'BirthDay',
      type: 'date',
      placeholder: 'BirthDay',
      label: 'BirthDay',
      require: 'true'
    },
    {
      id: '4',
      name: 'Password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: "Password should be between 8 to 20 characters with atleast 1 Uppercase letter and one special character",
      label: 'Password'
    },
    {
      id: '5',
      name: 'ConfirmPassword',
      type: 'password',
      placeholder: 'ConfirmPassword',
      errorMessage: "Password don't match",
      label: 'ConfirmPassword',
      require: 'true'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)

  return (
    <div className="App flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">

      <form className="bg-white p-3 my-12 rounded-lg flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-indigo-600 font-extrabold">Register</h1>
        {inputs.map((input) => (
          <InputForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        <button
          class="py-2 my-6 px-4 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >Register</button>
      </form>

    </div>
  );
}

export default App;
