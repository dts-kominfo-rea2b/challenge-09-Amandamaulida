import './App.css';
import Header from "./components/Header"
import Contact from './components/Contact';
import contacts from "./data/contacts.json"
// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header/>
     
      <center>
      <Contact data ={contacts[0]}/>
      <Contact data ={contacts[1]}/>
      <Contact data ={contacts[2]}/>
      <Contact data ={contacts[3]}/>
      <Contact data ={contacts[4]}/>
      <Contact data ={contacts[5]}/>
      </center>
    </div>
  );
}

export default App;
