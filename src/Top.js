import icon1   from './img/book1.jpg';
import icon2   from './img/book2.jpg';
import icon3   from './img/book3.jpg';
import icon4   from './img/book4.jpg';
import icon5   from './img/book5.jpg';
import icon6   from './img/book6.jpg';
import icon7   from './img/book7.jpg';
import icon8   from './img/book8.jpg';
import iconbmw from './img/bkmk_white.png';
import iconbmc from './img/bkmk_colored.png';
import './Top.css';
import {useState} from "react";



  
export const Top = (props) => {
    const { setPageName } = props;

    const [books, setBooks] = useState([
        {title: 'なるほどデザイン', icon: icon1},
        {title: '初めてのUXデザイン図鑑', icon: icon2},
        {title: 'マーケットデザイン総論', icon: icon3},
        {title: '究極のロゴデザイン', icon: icon4},
        {title: 'WebデザインプロセスBook', icon: icon5},
        {title: 'コンセプトが伝わるデザインのロジック', icon: icon6},
        {title: 'ケアする人のためのプロジェクトデザイン', icon: icon7},
        {title: 'イメージをパッと形に変えるデザイン大全', icon: icon8},
    ]);

    // 検索バーの入力内容を管理するためのstate
    const [searchTerm, setSearchTerm] = useState('');

    const [bookmarks, setBookmarks] = useState([false, false, false, false, false, false, false, false]);

    const onClickIcon = (pageName) => {
        setPageName(pageName)
    };

    const onClickBkmk = (index) => {
        let new_bookmarks = [...bookmarks]
        new_bookmarks[index] = !new_bookmarks[index]
        setBookmarks(new_bookmarks);
    };

    // 検索バーの入力内容を変更する関数
    const handleSearchChange = (event) => {
        if(event.key === "Enter") setSearchTerm(event.target.value);
    };
 
    // 入力された文字列に基づいて本のタイトルをフィルタリング
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>

            <div className="search-area">
                <input
                    className="form"
                    placeholder="タイトルを入力"
                    // value={searchTerm}
                    // onChange={handleSearchChange}
                    onKeyDown={handleSearchChange}
                />
            </div>

            <div className="grid-books">

                {filteredBooks.map((item, index) => (
                    <div key={index} className="bookitem">
                        <div className="icons">
                            <button className="bookbutton" onClick={() => onClickIcon("Content")}>
                                <img className="bookimg" src={item.icon} alt="img"/>
                            </button>

                            {bookmarks[index] && (
                            <button className="bkmkicon" onClick={() => onClickBkmk(index)}>
                                <img className="bkmkimg" src={iconbmc} alt="img"/>
                            </button>
                            )}

                            {!bookmarks[index] && (
                            <button className="bkmkicon" onClick={() => onClickBkmk(index)}>
                                <img className="bkmkimg" src={iconbmw} alt="img"/>
                            </button>
                            )}
                        </div>
                        <div className="booktitle"> 
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
};