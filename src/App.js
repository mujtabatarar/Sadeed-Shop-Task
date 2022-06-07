import './CSS/App.css';
import Header from './components/Header';
import Home from './components/Home.js';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import SearchCharacter from './components/SearchCharacter';

function App() {
  return (
    <Provider store={store}>
      <div>
      <Header/>
      <Home/>
      </div>
    </Provider>
  );
}

export default App;
