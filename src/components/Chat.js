import './Chat.css'
import { useState } from 'react';
import { useEffect, useRef } from 'react';

export const Chat = () => {
    const [usernames, setUsernames] = useState([]);
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("ゲスト");
    const [message, setMessage] = useState("");
    const [funcswitch,setFuncswitch] = useState("chat");
    const [isShowModal,setIsShowModal] = useState(false);
    const [quiztext,setQuizText] = useState("");
    const [quizanswer,setQuizAnswer] = useState("");
    const [quizoutput,setQuizOutput] = useState("");
    const [quizsubmit,setQuizSubmit] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    let scrollerInner;

    const onChangeName = (event) => setUsername(event.target.value);
    const onChangeMessage = (event) => setMessage(event.target.value);
    const onChangeSwitch = (event) => setFuncswitch(event.target.value);
    const onChangeText = (event) => setQuizText(event.target.value);
    const onChangeAnswer = (event) => setQuizAnswer(event.target.value);
    const onChangeOutput = (event) => setQuizOutput(event.target.value);
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
        
    }

    const onClickCreateQuiz = () => {
        setIsShowModal(true)
        setElapsedTime(Date.now());
    }

    const onClickSubmit = () => {
        setQuizSubmit(true)
        setElapsedTime(Date.now() - elapsedTime)
    }

    const onClickBack = () => {
        setIsShowModal(false)
        setQuizSubmit(false)
        setQuizAnswer("")
        setQuizOutput("")
        setQuizSubmit("")
        setQuizText("")
    }

    useEffect(() => {
        scrollerInner = document.getElementById("message-list");
        if(scrollerInner === null) return;
        scrollerInner.scrollTop = scrollerInner.scrollHeight;
    });     
    
    
    
    return(
    <>

    {isShowModal && (
        <div id="overlay">
            <div id="content">
                <div className='quiz-output'>
                    <p>問題</p>
                    <p id='text-left'>{quiztext}</p>
                </div>
                <br></br>
                {quizsubmit && (
                <>
                    <p>あなたの回答：{quizoutput}</p>
                    <p>解答例：{quizanswer}</p>
                    <p>回答時間：{elapsedTime / 1000}秒</p>
                    <div id="text-right">
                        <button className='create-button' onClick={onClickBack}>戻る</button>
                    </div>
                </>
                )}
                {!quizsubmit && (
                <>
                    <div>
                        <p>回答</p>
                        <input className='quiz-answer' onChange={onChangeOutput}/>
                    </div>

                    <p><button className='create-button' onClick={onClickSubmit}>提出</button></p>
                </>
                )}
            </div>
        </div>
    )}

    {/* メッセージブロック */}
    {funcswitch === "chat" && (
    <div  className='message-list' id="message-list">
        {messages.map((mes,index) => (
            <div className='message-block'>
                <p className='user-name'>{usernames[index]}</p>
                <p className='message'>{mes}</p>
            </div>
        ))}
    </div>
    )}

    {funcswitch === "quiz" && (
    <div  className='quiz-create' id="quiz-create">
        <h3>クイズ作成</h3>
        <div>
            <p className='quiz-text'>問題</p>
            <textarea rows="15" cols="30" onChange={onChangeText} value={quiztext}
                placeholder="問題を作って相手の人に出題してみましょう"
            ></textarea>
        </div>
        <div>
            <p className='quiz-text'>解答</p>
            <input className='answer-input' value={quizanswer} onChange={onChangeAnswer} 
            placeholder="解答例を入力" />
        </div>
        <br></br>
        <br></br>
        <button className='create-button' onClick={onClickCreateQuiz}>作成</button>
    </div>
    )}
    

    {/* メッセージ入力ブロック */}
    <div className='input-block'>
        {/* ユーザー名入力フォーム */}
        <div>
            <input type='radio' name='switch' value="chat" onChange={onChangeSwitch} checked={funcswitch==="chat"}/>チャット
            <input type='radio' name='switch' value="quiz" onChange={onChangeSwitch} checked={funcswitch==="quiz"}/>クイズ作成
            <br></br>
            <input className='user-input' value={username} name='name'
                onChange={onChangeName} disabled={funcswitch==="quiz"}/>
        </div>
        {/* メッセージ入力フォーム */}
        <div>
            <div>
                <input className='message-input' placeholder="メッセージを入力" value={message} name='message' 
                    onChange={onChangeMessage} onKeyDown={onKeyPress} disabled={funcswitch==="quiz"}/>
                <button onClick={onClickButton} disabled={funcswitch==="quiz"}>送信</button>
            </div>
        </div>
        



    </div>

    </>
    );
};
