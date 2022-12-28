// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Mainsection/Main';
import NewForm from './Components/NewForm/NewForm';
import Giveaway from './Components/Giveaway/Giveaway';
import NewForm2 from './Components/NewForm2/NewForm';


function App() {
  return (
  <div>
   
    {/* <Main/> */}
     <Header/>
    <Routes>
   
    <Route path="NewForm" element={<NewForm />} />
          <Route path="Giveaway" element={<Giveaway />} />
          <Route path="/" element={<Main />} />
          <Route path="NewForm2" element={<NewForm2/>} />

          
      </Routes>
          <Footer/>

  </div>
     
   
  );
}

export default App;
