import React from "react";
import s from "./MyButton.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type PropsType = {
    icon: IconProp
    title: string
    disable?: boolean
    onClick?: () => void
}

export const MyButton = ({icon, title, disable, onClick}: PropsType) => {
    const btnClass = `${disable ? s.disabled : s.send}`

    return (
        <div className={s.btn}>
            <div className={s.iconBtn}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <button onClick={onClick} disabled={disable} className={btnClass}>
                {title}
            </button>
        </div>
    );
}