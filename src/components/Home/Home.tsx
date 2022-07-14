import React from "react";
import s from './Home.module.scss';
import { MyButton } from "../MyButton/MyButton";
import { faUserTie } from "@fortawesome/free-solid-svg-icons/faUserTie";
import { data } from '../../common/data/data';

type PropsType = {
    aboutCallback: () => void
}

export const Home = ({ aboutCallback }: PropsType) => {
    return (
        <div className={s.about_wrapper}>
            <div className={s.wrapper}>
                <div className={s.photoContainer}>
                    <img className={s.photo} src={data.about.photo} alt={'myPhoto'} />
                </div>
                <div className={s.textContainer}>
                    <div className={s.textWrapper}>
                        <h3 className={s.greetings}>HI THERE!</h3>
                        <h3 className={s.nameContainer}>
                            I'm <span className={s.myName}>Tsarkov Stanislav</span>
                        </h3>
                        <span className={s.aboutText}>
                            Front-end developer who creating
                            Simple page applications using React, Redux, TypeScript
                        </span>
                    </div>
                    <div className={s.btnWrapper}>
                        <MyButton onClick={aboutCallback} icon={faUserTie} title={'About me'} />
                    </div>
                </div>
            </div>
        </div>
    );
}