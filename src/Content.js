import page01 from './img/01.png';
import './Content.css'
import { useState } from 'react';

export const Content = (props) => {
    const { setPageName} = props;
    const returnTop = () => {
        setPageName("Top");
    }
    const [pagenum, setPagenum] = useState(0);
    
    const onClickCountUp = () => {
        setPagenum((prev) => prev + 1); 
    }
    
    const onClickCountDawn = () => {
        setPagenum((prev) => prev - 1);
    };

    const isMaxLimitPages = pagenum >= 2;
    const isMinLimitPages = pagenum <= 0;
    
    return(
        <

                    <div className="contentheader">
                        <button onClick={() => returnTop()}><font size="7">×</font></button>
                    </div>

                    <div className="reader">
                        <div id="page-1" class="page active">
                            <img src={page01} alt="img"/>
                        </div>

                        <div id="page-2" class="page">
                            <h1>page 2</h1>
                        </div>

                        <div id="page-2" class="page">
                            <h1>page 3</h1> 
                        </div>

                        
                    </div>

                    <footer>
                        <div className="arrowgramleft">
                            <button disabled={isMinLimitPages} onClick={onClickCountDawn}><font size="5">
                                ◀
                            </font></button>
                        </div>

                        <div className="pages">
                            <p>{pagenum*2+1}{", "}{pagenum*2+2}</p>
                        </div>

                        <div className="arrowgramright">
                            <button disabled={isMaxLimitPages} onClick={onClickCountUp}><font size="5">
                                ▶
                            </font></button>   

                        </div>
                    </footer>
            
            
        </>
    );
};

