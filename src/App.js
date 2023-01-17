import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return(
    <div className='app'>
      <Card title = "Article 1" body ="this is Article 1"/>
      <Card title = "Article 2" body ="this is Article 2"/>
      <Card title = "Article 3" body ="this is Article 3"/>

    </div>
  )
}
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

export default App;
