import React from "react";
import s from './Project.module.scss';
import sc from '../../../common/styles/common.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";

type PropsType = {
    title: string
    description: string
    background: string
    link: string
}

export const Project = ({title, description, background, link}: PropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.photo} style={{backgroundImage:`url('${background}')`}}>
                <div className={`${sc.btn} ${s.watchBtn}`}>
                    <div className={`${sc.iconBtn} ${s.iconBtn}`}>
                        <FontAwesomeIcon icon={faEye}/>
                    </div>
                    <a className={`${sc.link} ${s.link}`} rel={'noreferrer'} href={link} target={'_blank'}>Watch</a>
                </div>
            </div>
            <div className={s.textWrapper}>
                <span className={s.title}>{title}</span>
                <div className={s.description}>{description}</div>
            </div>
        </div>
    );
}