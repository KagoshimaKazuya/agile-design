import './Chat.css'
import { useState } from 'react';
import { useEffect, useRef } from 'react';

export const GChat = (props) => {
    const {bookIndex} = props;
    const [usernames, setUsernames] = useState([
        [],[],[],[],[],[],[],[],[]
    ]
    );
    const [messages, setMessages] = useState([
        [],[],[],[],[],[],[],[],[]
    ]);
    const [username, setUsername] = useState("ゲスト");
    const [message, setMessage] = useState("");

    let scrollerInner;

    const onChangeName = (event) => setUsername(event.target.value);
    const onChangeMessage = (event) => setMessage(event.target.value);
    const onKeyPress = (event) => {
        if(event.key === "Enter") onClickButton()
    }
    const onClickButton = () => {
        if (message==="") return 
        if (username===""){
            let newUsernames = [...usernames]
            newUsernames[bookIndex] = [...newUsernames[bookIndex], "ゲスト"]
            setUsernames(newUsernames)
        }else{
            let newUsernames = [...usernames]
            newUsernames[bookIndex] = [...newUsernames[bookIndex], username]
            setUsernames((newUsernames))
        }
        //const newUsernames = [...usernames,username]
        let newMessages = [...messages];
        newMessages[bookIndex] = [...newMessages[bookIndex], message]
        //setUsernames((newUsernames))
        setMessages((newMessages))
        setMessage("")
        
    }

    useEffect(() => {
        scrollerInner = document.getElementById("message-list");
        if(scrollerInner === null) return;
        scrollerInner.scrollTop = scrollerInner.scrollHeight;
    });     
    
    
    
    return(
    <>

    {/* メッセージブロック */}
    <div  className='message-list' id="message-list">
        {bookIndex!=0 &&
            <div className='message-block'>
                <p className='user-name'>運営</p>
                <p className='message-admin'>場所や時間を決めたり、興味を持った理由など自由に話し合ってみましょう！</p>
            </div>
        }
        {messages[bookIndex].map((mes,index) => (
            <div className='message-block'>
                <p className='user-name'>{usernames[bookIndex][index]}</p>
                <p className='message'>{mes}</p>
            </div>
        ))}
    
    </div>

    

    {/* メッセージ入力ブロック */}
    <div className='input-block'>
        {/* ユーザー名入力フォーム */}
        <div>
            <input className='user-input' value={username} name='name'
                onChange={onChangeName} disabled={bookIndex===0}/>
        </div>
        {/* メッセージ入力フォーム */}
        <div>
            <div>
                <input className='message-input' placeholder="メッセージを入力" value={message} name='message' 
                    onChange={onChangeMessage} onKeyDown={onKeyPress} disabled={bookIndex===0}/>
                <button onClick={onClickButton} disabled={bookIndex===0}>送信</button>
            </div>
        </div>
        



    </div>

    </>
    );
};
