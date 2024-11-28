import './SideMenu.css';
import {useState} from "react";

export const SideMenu = (props) => {
    const {setPageName} = props;
    const onClickTitle = () => {
        setPageName("Top");
    }

    return(
        <>
            <button className="top-button" onClick={onClickTitle}>図書システム</button>
        </>
    );
};