import './SideMenu.css';
import {useState} from "react";

export const SideMenu = (props) => {
    const {setPageName} = props;
    const onClickTitle = () => {
        setPageName("Top");
    }

    const onClickList = () => {
        setPageName("List");
    }

    return(
        <>
            <button className="top-button" onClick={onClickTitle}>Read Mates</button>
            <div className="menu">
                <button className="pagename" onClick={onClickTitle}>トップページ</button>
                <button className="pagename" onClick={onClickList}>グループ一覧</button>
            </div>
        </>
    );
};