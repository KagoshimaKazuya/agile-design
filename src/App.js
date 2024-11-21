
import {Top} from './Top';
import {Content} from './Content';
import {useState} from "react";

function App() {
  const [pageName, setPageName] = useState("Top");

  return (
    <>
      {pageName === "Top" && 
        <Top 
          setPageName = {setPageName}
        />
      }
      {pageName === "Content" &&
        <Content />
      }
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
