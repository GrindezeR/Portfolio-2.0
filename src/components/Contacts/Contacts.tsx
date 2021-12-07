import React from "react";
import s from './Contacts.module.scss';
import {data} from '../../common/data/data';
import sc from '../../common/styles/common.module.css';
import {Title} from "../Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons/faTelegramPlane";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faDove} from "@fortawesome/free-solid-svg-icons/faDove";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

export const Contacts = () => {
    return (
        <div className={sc.container}>
            <div className={s.wrapper}>
                <Title title={'GET'}
                       specialText={'IN TOUCH'}
                       aboutText={'I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.'}/>
                <div className={s.main}>
                    <div className={s.leftBlock}>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Phone</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faPhoneAlt} color={'#2196F3'}/>
                                {data.about.phone}
                            </div>
                        </div>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Email</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faEnvelope} color={'#2196F3'}/>
                                {data.about.email}
                            </div>
                        </div>

                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Telegram</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faTelegramPlane} color={'#2196F3'}/>
                                <a href={data.about.telegram} rel={'noreferrer'} target={'_blank'}>GrindezeR</a>
                            </div>
                        </div>

                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Social Profiles</div>
                            <div className={s.socialIconsWrapper}>
                                <a href={data.about.vk} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faVk}/>
                                </a>
                                <a href={data.about.linkedIn} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faLinkedinIn}/>
                                </a>
                                <a href={data.about.gitHub} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faGithub}/>
                                </a>
                                <a href={data.about.discord} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faDiscord}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={s.rightBlock}>
                        <div className={s.information}>
                            <p>
                                If you have any suggestion,
                                project or even you want to say Hello..
                                please fill out the form below and I will reply you shortly.
                            </p>
                        </div>
                        <form className={s.contactForm}>
                            <div className={s.inputsWrapper}>
                                <FontAwesomeIcon className={s.inputNameIcon} icon={faUser} color={'gray'}/>
                                <input className={`${s.name} ${s.inputs}`} placeholder={'YOUR NAME'} type="text"/>
                                <FontAwesomeIcon className={s.inputEmailIcon} icon={faEnvelope} color={'gray'}/>
                                <input className={`${s.email} ${s.inputs}`} placeholder={'YOUR EMAIL'} type="text"/>
                            </div>

                            <div className={s.textAreaWrapper}>
                                <FontAwesomeIcon className={s.textAreaIcon} icon={faComments} color={'gray'}/>
                                <textarea className={s.textArea} placeholder={'YOUR MESSAGE'} required/>
                            </div>

                            <div className={s.btnWrapper}>
                                <div className={s.btn}>
                                    <div className={s.iconBtn}>
                                        <FontAwesomeIcon icon={faDove}/>
                                    </div>
                                    <a className={s.link} rel={'noreferrer'} href="/">Send message</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}