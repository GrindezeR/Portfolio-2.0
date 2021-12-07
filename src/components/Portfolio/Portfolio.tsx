import React from "react";
import s from './Portfolio.module.scss';
import sc from '../../common/styles/common.module.css';
import {Title} from "../Title/Title";

export const Portfolio = () => {
    return (
        <div className={sc.container}>
            <div className={s.wrapper}>
                <Title title={'MY'}
                       specialText={'PORTFOLIO'}
                       aboutText={'A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.'}/>

                <div className={s.projectsWrapper}>
                    <div className={s.projects}>
                    </div>
                    <div className={s.projects}>
                    </div>
                </div>
            </div>
        </div>
    );
}