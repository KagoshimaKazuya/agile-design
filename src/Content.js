import page01 from './img/01.png';
import './Content.css'

export const Content = () => {
    return(
        <>
            <div className="main">
                <div className="leftNavigation">
                    <p>サブメニュー</p>

                </div>
                <div className="content">


                    <div className="contentheader">
                        <button><font size="7">×</font></button>
                    </div>

                    <div className="reader">
                        <img src={page01} alt="img"/>
                    </div>
                    <footer>
                        <div className="arrowgramleft">
                            <button><font size="5">◀</font></button>
                        </div>

                        <div className="pages">
                            <p>ページ数</p>
                        </div>

                        <div className="arrowgramright">
                            <button><font size="5">▶</font></button>   
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};