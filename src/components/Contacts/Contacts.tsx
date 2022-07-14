import React from "react";
import s from './Contacts.module.scss';
import { data } from '../../common/data/data';
import sc from '../../common/styles/Common.module.scss';
import { Title } from "../Title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons/faTelegramPlane";
import { faVk } from "@fortawesome/free-brands-svg-icons/faVk";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { HomeButton } from "../Home/HomeMobileButton/HomeButton";
import { Form } from "./Form/Form";

type PropsType = {
    homeCallback: () => void
}


export const Contacts = ({ homeCallback }: PropsType) => {
    return (
        <div className={sc.container}>
            <HomeButton onClickHomeHandler={homeCallback} />
            <div className={s.wrapper}>
                <Title title={'GET'}
                    specialText={'IN TOUCH'}
                    aboutText={'I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.'} />
                <div className={s.main}>
                    <div className={s.leftBlock}>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Phone</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faPhoneAlt} color={'#2196F3'} />
                                <a href={`tel:${data.about.phone}`}>{data.about.phone}</a>
                            </div>
                        </div>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Email</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faEnvelope} color={'#2196F3'} />
                                <a href={`mailto:${data.about.email}`}>{data.about.email}</a>
                            </div>
                        </div>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Telegram</div>
                            <div className={s.data}>
                                <FontAwesomeIcon className={s.dataIcon} icon={faTelegramPlane} color={'#2196F3'} />
                                <a href={data.about.telegram} rel={'noreferrer'} target={'_blank'}>GrindezeR</a>
                            </div>
                        </div>
                        <div className={s.dataContainer}>
                            <div className={s.titleText}>Social Profiles</div>
                            <div className={s.socialIconsWrapper}>
                                <a href={data.about.vk} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faVk} />
                                </a>
                                <a href={data.about.linkedIn} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faLinkedinIn} />
                                </a>
                                <a href={data.about.gitHub} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faGithub} />
                                </a>
                                <a href={data.about.discord} target={'_blank'} rel={'noreferrer'}>
                                    <FontAwesomeIcon className={s.socialIcon} icon={faDiscord} />
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
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}