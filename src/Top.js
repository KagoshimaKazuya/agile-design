import icon from './img/book.jpg';
import './Top.css';
import {useState} from "react";

export const Top = (props) => {
    const { setPageName } = props;
    const [books, setBooks] = useState(["本1", "本2", "本3", "本4", "本5", "本6"])

    const onClickIcon = (pageName) => {
        setPageName(pageName)
    };

    return(
        <>
            <div className="main">

                <div className="leftNavigation">
                    <p>サブメニュー</p>

                </div>

                <div className="content">


                    <div className="search-area">
                        <input className="form"
                            placeholder="タイトルを入力"
                        />
                        <button className="search-button" onClick={() => alert("検索は未実装です")}>🔍</button>

                    </div>

                    <div className="grid">

                        {books.map((title) => (
                            <div key={title}>
                                <button onClick={() => onClickIcon("Content")}>
                                    <img src={icon} alt="img"/>
                                </button>
                                <p>{title}</p>
                            </div>
                        ))}


                    </div>

                </div>
            </div>
        </>
    );
};