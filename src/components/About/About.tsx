import React from "react";
import s from './About.module.scss';
import sc from '../../common/styles/Common.module.scss';
import {Experience} from "./Experience/Experience";
import {data} from '../../common/data/data';
import {Title} from "../Title/Title";
import {Skills} from "./Skill/Skills";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {HomeButton} from "../Home/HomeMobileButton/HomeButton";
import {MyButton} from "../MyButton/MyButton";

type PropsType = {
    homeCallback: () => void
}

export const About = ({homeCallback}: PropsType) => {
    return (
        <div className={sc.container}>
            <HomeButton onClickHomeHandler={homeCallback}/>
            <div className={s.wrapper}>
                <Title title={'ABOUT'}
                       specialText={'ME'}
                       aboutText={'I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.'}/>

                <div className={s.main}>
                    <div className={s.myPhoto}/>
                    <div className={s.aboutMe}>
                        <div className={s.dataList}>
                            <div className={s.dataBlock}>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>First Name:</span>
                                    <span className={s.dataValue}>Stanislav</span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Last Name:</span>
                                    <span className={s.dataValue}>Tsarkov</span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Birthdate:</span>
                                    <span className={s.dataValue}>{data.about.birthdate}</span>
                                </div>

                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Address:</span>
                                    <span className={s.dataValue}>{data.about.city}</span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Phone:</span>
                                    <span className={s.dataValue}>{data.about.phone}</span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Email:</span>
                                    <span className={s.dataValue}>{data.about.email}</span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Freelance: </span>
                                    <span className={s.dataValue}>Not available</span>
                                </div>
                            </div>
                            <div className={s.dataBlock}>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Telegram:</span>
                                    <span className={s.dataValue}>
                                        <a rel={'noreferrer'} href={data.about.telegram} target={'_blank'}>
                                            GrindezeR
                                        </a>
                                    </span>
                                </div>

                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>CodeWars:</span>
                                    <span className={s.dataValue}>
                                        <a rel={'noreferrer'} href={data.about.codewars} target={'_blank'}>
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>LinkedIn:</span>
                                    <span className={s.dataValue}>
                                        <a rel={'noreferrer'} href={data.about.linkedIn} target={'_blank'}>
                                            Profile
                                        </a>
                                    </span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>GitHub:</span>
                                    <span className={s.dataValue}>
                                        <a rel={'noreferrer'} href={data.about.gitHub} target={'_blank'}>
                                            Repositories
                                        </a>
                                    </span>
                                </div>
                                <div className={s.dataContainer}>
                                    <span className={s.dataName}>Languages:</span>
                                    <span className={s.dataValue}>
                                        Russian, English (pre-intermediate in progress)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={s.btnWrapper}>
                            <a href={'/Portfolio-2.0/CV_English.pdf'} download={'CV_English.pdf'}>
                                <MyButton icon={faDownload} title={'Download CV'}/>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className={s.lineDelimiter}/>

                <div className={s.experience}>
                    <div className={s.blockExp}>
                        <h2 className={s.chapterTitle}>EXPERIENCE</h2>
                        <div className={s.works}>
                            <Experience work={data.works.work1}/>
                            <Experience work={data.works.work2}/>
                            <Experience work={data.works.work3}/>
                            <Experience work={data.works.work4}/>
                        </div>
                    </div>

                    <div className={s.blockExp}>
                        <h2 className={s.chapterTitle}>EDUCATION</h2>
                        <div className={s.works}>
                            <Experience educations={data.education.edu1}/>
                            <Experience educations={data.education.edu2}/>
                            <Experience educations={data.education.edu3}/>
                        </div>
                    </div>
                </div>

                <div className={s.skills}>
                    <h2 className={s.chapterTitle}>SKILLS</h2>
                    <Skills skills={data.skills}/>
                </div>

            </div>
        </div>
    );
}