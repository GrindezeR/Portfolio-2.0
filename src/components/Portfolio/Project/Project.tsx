import React from "react";
import s from './Project.module.scss';

type PropsType = {
    title: string
    description: string
    background: string
    links: {
        demo: string
        source: string
    }
    technologies: string
}

export const Project = ({title, description, background, links, technologies}: PropsType) => {
    return (
        <div className={s.project} style={{backgroundImage: `url('${background}')`}}>
            <div className={s.information}>
                <span className={s.title}>{title}</span>
                <div className={s.dataBlock}>
                    <div>
                        <span className={s.dataTitle}>Link:</span>
                        <a className={s.links} rel={'noreferrer'} href={links.demo} target={'_blank'}>Demo</a>
                    </div>
                    <div>
                        <span className={s.dataTitle}>Source:</span>
                        <a className={s.links} rel={'noreferrer'} href={links.source} target={'_blank'}>gitHub.com</a>
                    </div>
                    <div>
                        <span className={s.dataTitle}>About:</span>
                        <span className={s.dataValue}>{description}</span>
                    </div>
                    <div>
                        <span className={s.dataTitle}>Technologies:</span>
                        <span className={s.dataValue}>{technologies}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}