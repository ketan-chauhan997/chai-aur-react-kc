import './App.css'

function App() {

  //Most of the time access is done this way (When created using create react-app)

  //console.log(process.env.REACT_APP_APPWRITE_URL);

  // For vite 

  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
