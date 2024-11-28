import icon1 from './img/book1.jpg';
import icon2 from './img/book2.jpg';
import icon3 from './img/book3.jpg';
import icon4 from './img/book4.jpg';
import icon5 from './img/book5.jpg';
import icon6 from './img/book6.jpg';
import icon7 from './img/book7.jpg';
import icon8 from './img/book8.jpg';
import {Top} from './Top';
import {Content} from './Content';
import {useState} from "react";
import "./App.css";
import { SideMenu } from './SideMenu';
import { List } from './List';

function App() {
  const [pageName, setPageName] = useState("Top");
  const [books, setBooks] = useState([
    { index:1, title: 'なるほどデザイン', author:"筒井美希", icon: icon1 },
    { index:2, title: 'はじめてのUXデザイン図鑑', author:"荻原昴彦", icon: icon2 },
    { index:3, title: 'マーケットデザイン総論', author:"栗野盛光", icon: icon3 },
    { index:4, title: '究極のロゴデザイン', author:"佐藤可士和", icon: icon4 },
    { index:5, title: 'WebデザインプロセスBook', author:"加藤千歳", icon: icon5 },
    { index:6, title: 'コンセプトが伝わるデザインのロジック', author:"佐藤卓", icon: icon6 },
    { index:7, title: 'ケアする人のためのプロジェクトデザイン', author:"西上ありさ", icon: icon7 },
    { index:8, title: 'イメージをパッと形に変えるデザイン大全', author:"尾沢早飛", icon: icon8 },
]);
  const [bookmarks, setBookmarks] = useState([false, false, false, false, false, false, false, false]);

  return (
    <>
      <div className='whole'>
        <div className="leftNavigation">
          <SideMenu
            setPageName = {setPageName}
          />
        </div>
      
        <div className="content">

          {pageName === "Top" && 
            <Top 
              setPageName = {setPageName}
              books = {books}
              bookmarks = {bookmarks}
              setBookmarks = {setBookmarks}
            />
          }
          {pageName === "Content" &&
            <Content
              setPageName = {setPageName}
            />
          }
          {pageName === "List" && 
            <List
              books = {books}
              bookmarks = {bookmarks}
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