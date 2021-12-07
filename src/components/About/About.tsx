import React from "react";
import s from './About.module.scss';
import sc from '../../common/styles/common.module.css';
import downloadIcon from '../../common/images/downloadIcon.png'
import {ExperienceElement} from "./Experience/ExperienceElement";
import {data} from '../../common/data/data';
import {Title} from "../Title/Title";
import {Skills} from "./Skill/Skills";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons/faTelegramPlane";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";

export const About = () => {
    return (
        <div className={sc.container}>
            <div className={s.wrapper}>
                <Title title={'ABOUT'}
                       specialText={'ME'}
                       aboutText={'I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.'}/>

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
                                    <span className={s.listValue}>{data.about.birthdate}</span>
                                </div>

                                <div>
                                    <span className={s.listName}>Address: </span>
                                    <span className={s.listValue}>{data.about.city}</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Phone: </span>
                                    <span className={s.listValue}>{data.about.phone}</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Email: </span>
                                    <span className={s.listValue}>{data.about.email}</span>
                                </div>
                                <div>
                                    <span className={s.listName}>Telegram: </span>
                                    <span className={s.listValue}>
                                        <a rel={'noreferrer'} href={data.about.telegram} target={'_blank'}>
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
                                           href={data.about.codewars}
                                           target={'_blank'}>
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span className={s.listName}>LinkedIn: </span>
                                    <span className={s.listValue}>
                                        <a href={data.about.linkedIn}>
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <span className={s.listName}>GitHub: </span>
                                    <span className={s.listValue}>
                                        <a rel={'noreferrer'} href={data.about.gitHub}
                                           target={'_blank'}>
                                            Repositories
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={s.downloadButton}>
                            <div className={s.iconBtn}>
                                {/*<img src={downloadIcon} width={'18px'} alt={'icon'}/>*/}
                                <FontAwesomeIcon icon={faDownload}/>
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

                <div className={s.skills}>
                    <h2>SKILLS</h2>
                    <div className={s.skillsWrapper}>
                        <Skills skills={data.skills}/>
                    </div>
                </div>

            </div>
        </div>
    );
}