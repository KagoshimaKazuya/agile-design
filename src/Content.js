import page01 from './img/01.png';
import './Content.css'
import { useState } from 'react';

export const Content = (props) => {
    const { setPageName } = props;
    const returnTop = () => {
        setPageName("Top");
    }
    return(
        <>
            
                



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
                            <button id ="prevPageBtn"><font size="5">◀</font></button>
                        </div>

                        <div className="pages">
                            <p>p<span id="currentPageDisplay">1</span> </p>
                        </div>

                        <div className="arrowgramright">
                            <button id ="nextPageBtn"><font size="5">▶</font></button>   
                        </div>
                    </footer>
            
            
        </>
    );
};

