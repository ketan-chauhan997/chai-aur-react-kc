import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux' 
import authService from './appwrite/auth.js';
import {login,logout} from './store/authSlice';
import {Header, Footer} from './components/index.js'

function App() {

  //Most of the time access is done this way (When created using create react-app)

  //console.log(process.env.REACT_APP_APPWRITE_URL);

  // For vite 

  //console.log(import.meta.env.VITE_APPWRITE_URL)

  //-----------Vedio - 21 ----------------------

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((data) => {
      if(data){
        dispatch(login({data}));
      }else{
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
  },[])

  //Conditional Rendering
  //Assignment how to render 

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App
