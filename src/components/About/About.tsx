import React from "react";
import s from './About.module.scss';
import sc from '../../common/styles/common.module.css';
import donwloadIcon from '../../common/images/downloadIcon.png'
import {ExperienceElement} from "./Experience/ExperienceElement";
import {data} from '../../common/data/data';

export const About = () => {
    return (
        <div className={sc.container}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <h1 className={s.title}>
                        ABOUT <span className={s.specialText}>ME</span>
                    </h1>
                    <span className={s.titleText}>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</span>
                </div>

                <div className={s.main}>
                    <div className={s.myPhoto}/>

                    <div className={s.aboutMe}>
                        <div className={s.list}>
                            <div className={s.block}>
                                <div>
                                    <span className={s.listName}>First Name: </span>
                                    <span className={s.listValue}>Stanislav</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Last Name: </span>
                                    <span className={s.listValue}>Tsarkov</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Birthdate: </span>
                                    <span className={s.listValue}>17 august 1993</span>
                                </div>

                                <div>
                                    <span className={s.listName}>Address: </span>
                                    <span className={s.listValue}>Saint-Petersburg</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Phone: </span>
                                    <span className={s.listValue}>+7 999 999 99 99</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Email: </span>
                                    <span className={s.listValue}>valariot@gmail.com</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Telegram: </span>
                                    <span className={s.listValue}>
                                        <a rel={'noreferrer'} href="https://t.me/GrindezeR" target={'_blank'}>
                                            GrindezeR
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className={s.block}>
                                <div>
                                    <span className={s.listName}>Freelance: </span>
                                    <span className={s.listValue}>Not available</span>
                                </div>

                                <div>
                                    <span className={s.listName}>Language: </span>
                                    <span className={s.listValue}>Russian, English</span>
                                </div>
                                <div>
                                    <span className={s.listValue}>(pre-intermediate in progress)</span>
                                </div>
                                <div>
                                    <span className={s.listName}>CodeWars: </span>
                                    <span className={s.listValue}>
                                        <a rel={'noreferrer'}
                                           href="https://www.codewars.com/users/GrindezeR"
                                           target={'_blank'}>
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span className={s.listName}>LinkedIn: </span>
                                    <span className={s.listValue}>
                                        <a href="https://www.linkedin.com/in/stanislav-tsarkov-b9a0b3218/">
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span className={s.listName}>GitHub: </span>
                                    <span className={s.listValue}>
                                        <a rel={'noreferrer'} href='https://github.com/GrindezeR'
                                           target={'_blank'}>
                                            Repositories
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={s.downloadButton}>
                            <div className={s.iconBtn}>
                                <img src={donwloadIcon} width={'18px'} alt={'icon'}/>
                            </div>
                            <a className={s.link} rel={'noreferrer'} href="/">Download my CV</a>
                        </div>
                    </div>

                </div>

                <hr className={s.lineDelimiter}/>

                <div className={s.experience}>
                    <div className={s.blockExp}>
                        <h2>EXPERIENCE</h2>
                        <div className={s.works}>
                            <ExperienceElement work={data.works.work1}/>
                            <ExperienceElement work={data.works.work2}/>
                            <ExperienceElement work={data.works.work3}/>
                        </div>
                    </div>

                    <div className={s.blockExp}>
                        <h2>EDUCATION</h2>
                        <div className={s.works}>
                            <ExperienceElement educations={data.education.edu1}/>
                            <ExperienceElement educations={data.education.edu2}/>
                            <ExperienceElement educations={data.education.edu3}/>
                        </div>
                    </div>
                </div>

                {/*<div className={s.skills}>*/}
                {/*</div>*/}

            </div>
        </div>
    );
}