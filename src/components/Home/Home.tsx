import React from "react";
import s from './Home.module.scss';

export const Home = () => {
    return (
        <div className={s.about_wrapper}>
            <div className={s.wrapper}>
                <div className={s.photoContainer}>
                    <div className={s.photo}/>
                </div>
                <div className={s.textContainer}>
                    <h3 className={s.greetings}>HI THERE!</h3>
                    <h3 className={s.nameContainer}>
                        I'm <span className={s.myName}>Tsarkov Stanislav</span>
                    </h3>
                    <span className={s.aboutText}>
                        Front-end developer who creating
                        Simple page applications using React, Redux, TypeScript
                    </span>
                </div>
            </div>
        </div>
    );
}