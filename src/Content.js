import page01 from './img/01.png';
import './Content.css'

export const Content = (props) => {
    const { setPageName } = props;
    const returnTop = () => {
        setPageName("Top");
    }
    return(
        <>
            <div className="main">
                <div className="leftNavigation">
                    <p>サブメニュー</p>

                </div>
                <div className="content">


                    <div className="contentheader">
                        <button onClick={() => returnTop()}><font size="7">×</font></button>
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