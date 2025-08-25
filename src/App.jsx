import React from 'react'
import axios from 'axios'

function App() {

  axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      console.log(response.data)
    })

    .catch((error) => {
      console.log(`Error -> ${error}`)
    })

  return (
    <>
      <h1>Hello from Axios</h1>
    </>
  )
}

export default App