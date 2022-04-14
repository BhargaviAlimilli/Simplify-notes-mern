import './App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/Nav';
import Entry from './Pages/Entry/EntryPage';
import SignIn from './Pages/Signin/Signin';
import SignUp from './Pages/Signup/Signup';
import MyNotes from './Pages/MyNotes/MyNotes'
import CreateNote from './Pages/CreateNote';
import EditNote from './Pages/EditNote';
import Profile from './Pages/Profile/ProfilePage';
import Home from './Pages/Entry/Home'

function App() {
  const [search, setSearch] = useState("");
  const {userInfo}= useSelector (state=> state.userLogin)
  // console.log(userInfo.token)

  return (
    <div className="App">
    <Router>
     <NavBar setSearch={(s) => setSearch(s)} />
      <Routes>
        {userInfo== null && 
          <Route exact path='/' element={<Entry />} />
        }
        {userInfo !== null &&
         <Route exact path='/' element={<Home />} /> 
         }
        <Route  exact path='/signin' element={<SignIn />} />
        <Route  path='/signup' element={<SignUp />} />
        <Route  path='/mynotes' element={<MyNotes search={search}/>} />
        <Route  path='/createnote' element ={<CreateNote />} />
        <Route  path='/edit/:id' element ={<EditNote />} />
        <Route  path="/profile" element={<Profile />} />
      </Routes>
      
    </Router>      
    </div>
  );
}

export default App;


