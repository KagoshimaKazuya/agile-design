import './List.css'
import icon from './img/book1.jpg';
import book from './img//button-book.jpg'
import chat from './img/button-chat.jpg'
import notice from './img/notice.jpg'
import {GChat} from './components/Gchat'
import { useState } from 'react';

export const List = (props) => {
    const [bookIndex, setBookIndex] = useState(0);
    const {books, bookmarks, setPageName, messages, setMessages, usernames, setUsernames, readflag, setReadflag} = props;
    const filteredBooks = books.filter((book, index) =>
        bookmarks[index]
    );

    const onClickBook = () => {
        setPageName("Content");
        return;
    }

    const onClickMes = (index) => {
        setBookIndex(index);
        let newReadflag = [...readflag];
        newReadflag[index-1] = true;
        setReadflag(newReadflag);
        return;
    }
    return(
    <>
    <div className='box-list'>
        <div className='box-group'>
            {/* <p className='head'>グループ</p> */}
                {filteredBooks.map((item, index) => (
                        <div className='item-book'>
                            <div className='icon-book'>
                                <img className='book-icon' src={item.icon}></img>
                            </div>
                            <div　className='title-book'>
                                <div className='text-booktitle'>{item.title}</div>
                                <div className='text-author'>{item.author}</div>
                            </div>
                            <div className='icon-group'>
                                {!readflag[item.index-1] && 
                                    <div className='alert-icon'>
                                        <img className="notice-img" src={notice}></img>
                                    </div>
                                }
                                <div className='book-emoji'>
                                    <button className="icon-button" onClick={onClickBook}><img className="icon-img" src={book}></img></button>
                                </div>
                                <div className='mes-emoji'>
                                    <button className="icon-button" onClick={() => onClickMes(item.index)}><img className="icon-img" src={chat}></img></button>
                                </div>
                            </div>
                        </div>
                ))}

        </div>

        <div className='box-chat'>
            {bookIndex != 0 &&
            <h2>{books[bookIndex-1].title}</h2>
            }
            <GChat 
                bookIndex = {bookIndex}
                messages = {messages}
                setMessages = {setMessages}
                usernames = {usernames}
                setUsernames = {setUsernames}
            />
        </div>
    </div>

    </>
    );
};