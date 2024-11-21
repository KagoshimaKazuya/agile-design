import icon from './img/book.jpg';
import './Top.css';

export const Top = () => {
    return(
        <>
            <div className="main">

                <div className="leftNavigation">
                    <p>サブメニュー</p>

                </div>

                <div className="content">


                    <div>
                        <input
                            placeholder="タイトルを入力"
                        />
                    </div>

                    <div className="grid">

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル1</p>
                        </div>

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル2</p>
                        </div>

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル3</p>
                        </div>

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル4</p>
                        </div>

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル5</p>
                        </div>

                        <div>
                            <img src={icon} alt="img"/>
                            <p>タイトル6</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};