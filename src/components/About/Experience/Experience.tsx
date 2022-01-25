import React from "react";
import s from './Experience.module.scss';
import icon from '../../../common/images/calendarIcon.webp'

type PropsType = {
    work?: {
        years: string
        position: string
        company: string
        about: string
    }
    educations?: {
        years: string
        qualification: string
        placeOfStudy: string
        about: string
    }
}

export const Experience = ({work, educations}: PropsType) => {

    return (
        <div className={s.block}>
            <span className={s.bullet}/>
            <div className={s.years}>
                <img className={s.iconYear} src={icon} alt="icons"/>
                {work && work.years}
                {educations && educations.years}
            </div>
            <div className={s.title}>
                <span>
                    {work && work.position}
                    {educations && educations.qualification}
                </span>
                <span className={s.separator}/>
                <span className={s.name}>
                    {work && work.company}
                    {educations && educations.placeOfStudy}
                </span>
            </div>
            <div className={s.textWrapper}>
                <p className={s.text}>
                    {work && work.about}
                    {educations && educations.about}
                </p>
            </div>
        </div>
    );
}