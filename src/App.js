
import {Top} from './Top';
import {Content} from './Content';
import {useState} from "react";
import "./App.css";
import { SideMenu } from './SideMenu';

function App() {
  const [pageName, setPageName] = useState("Top");

  return (
    <>
      <div className='whole'>
        <div className="leftNavigation">
          <SideMenu
          
          />
        </div>
      
        <div className="content">

          {pageName === "Top" && 
            <Top 
              setPageName = {setPageName}
            />
          }
          {pageName === "Content" &&
            <Content
              setPageName = {setPageName}
            />
          }

        </div>

      </div>
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
