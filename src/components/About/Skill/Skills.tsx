import React from "react";
import s from './Skill.module.scss';

type PropsType = {
    skills: string[]
}

export const Skills = ({skills}: PropsType) => {
    const skillList = skills.map(skill => {
        return (
            <div className={s.skill}>{skill}</div>
        );
    })

    return (
        <div className={s.skillBar}>
            {skillList}
        </div>
    );
}