import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/header';
import Form from './components/Form/Form';

function App(){
  return(
    <div>
       <Navigation/>
       <main>
       <Header/>
       <Form/>
       </main>
    </div>
  );
}

export default App
