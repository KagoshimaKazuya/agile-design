import page01 from './img/01.png';
import page02 from './img/02.png';
import page03 from './img/03.png';
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
        <>

                    {/* <div className="contentheader">
                        <button onClick={() => returnTop()}><font size="7">×</font></button>
                    </div> */}
            {/* <div className="content"> */}
                <div className='mid'>
                    <div className="reader">
                     
                        <div id="page-1" class="page active">
                        {pagenum === 0 &&
                            <img className="contentimg" src={page01} alt="img"/>
                        }
                        </div>

                        <div id="page-2" class="page">
                        {pagenum === 1 &&
                            <img className="contentimg" src={page02} alt="img"/>
                        }
                        </div>

                        <div id="page-3" class="page">
                        {pagenum === 2 &&
                            <img className="contentimg" src={page03} alt="img"/>
                        }
                        </div> 
                    </div>

                    <div className="footer">
                        <div className="arrowgramleft">
                            <button disabled={isMinLimitPages} onClick={onClickCountDawn}><font className="arrowchar">
                                ◀
                            </font></button>
                        </div>

                        <div className="pages">
                            <p className="pagebox">{pagenum*2+1}{", "}{pagenum*2+2}</p>
                        </div>

                        <div className="arrowgramright">
                            <button disabled={isMaxLimitPages} onClick={onClickCountUp}><font className="arrowchar">
                                ▶
                            </font></button>   

                        </div>
                    </div>

                    


                </div>


                <div className='right'>
                    <p>right</p>
                </div>
                        
            
            
        </>
    );
};

