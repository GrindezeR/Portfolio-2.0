import React from "react";
import s from './Title.module.scss';

type PropsType = {
    title: string
    specialText: string
    aboutText: string
}

export const Title = ({title, specialText, aboutText}: PropsType) => {
    return (
        <div className={s.header}>
            <h1 className={s.title}>
                {title} <span className={s.specialText}>{specialText}</span>
            </h1>
            <span className={s.titleText}>{aboutText}</span>
        </div>
    );
}