import './Chat.css'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom';

export const Chat = () => {
    const [usernames, setUsernames] = useState([]);
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("ゲスト");
    const [message, setMessage] = useState("");

    const scrollerInner = document.getElementById("message-list");

    const onChangeName = (event) => setUsername(event.target.value);
    const onChangeMessage = (event) => setMessage(event.target.value);
    const onKeyPress = (event) => {
        if(event.key === "Enter") onClickButton()
    }
    const onClickButton = () => {
        if (message==="") return 
        if (username===""){
            setUsernames([...usernames,"ゲスト"])
        }else{
            const newUsernames = [...usernames,username]
            setUsernames((newUsernames))
        }
        //const newUsernames = [...usernames,username]
        const newMessages = [...messages,message]
        //setUsernames((newUsernames))
        setMessages((newMessages))
        setMessage("")
        scrollerInner.scrollTop = scrollerInner.scrollHeight;
        
    }

    const createMessageBlock = (name,mes) =>{
        return (
            <div className='message-block'>
                <p className='user-name'>{name}</p>
                <p className='message'>{mes}</p>
            </div>
        )
    }

    // const Checkbox = () => {
    //     // useStateフックを使用してチェックボックスの状態を管理
    //     const [isChecked, setIsChecked] = useState(false);

    //     const handleCheckboxChange = (event) => {
    //         setIsChecked(event.target.checked);
    //       };      
    
    
    
    return(
    <>
    {/* メッセージブロック */}
    <div  className='message-list' id="message-list">
        <div className='message-block'>
            <p className='user-name'>ゲスト</p>
            <p className='message'>Hello（メッセージ）</p>
        </div>
        <div className='message-block'>
            <p className='user-name'>ゲスト2</p>
            <p className='message'>Hello2（メッセージ）</p>
        </div>
        {messages.map((mes,index) => (
            <div className='message-block'>
                <p className='user-name'>{usernames[index]}</p>
                <p className='message'>{mes}</p>
            </div>
        ))}
    </div>
    

    {/* メッセージ入力ブロック */}
    <div className='input-block'>
        {/* ユーザー名入力フォーム */}
        <div>
            <input className='user-input' value={username} name='name'
                onChange={onChangeName}/>
        </div>
        {/* メッセージ入力フォーム */}
        <div>
            <div>
                <input className='message-input' placeholder="メッセージを入力" value={message} name='message' 
                    onChange={onChangeMessage} onKeyDown={onKeyPress}/>
                <button onClick={onClickButton}>送信</button>
            </div>
        </div>

        {/* <div>
            <label>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            />
            チェックボックス
            </label>
            <p>{isChecked ? 'チェックされています' : 'チェックされていません'}</p>
        </div>
        ); */}

    </div>

    </>
    );
};
