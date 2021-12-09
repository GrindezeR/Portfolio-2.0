import React from "react";
import s from './HomeButton.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons/faReply";

type PropsType = {
    // position: 'absolute' | 'fixed'
    onClickHomeHandler: () => void
}

export const HomeButton = ({onClickHomeHandler}: PropsType) => {
    return (
        <div className={s.homeBtn}>
            <FontAwesomeIcon onClick={onClickHomeHandler}
                             className={s.homeIconMobile}
                             icon={faReply}
                             color={'#2196F3'}/>
        </div>
    );
}