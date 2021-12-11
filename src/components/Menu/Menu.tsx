import React, {useState} from "react";
import s from './Menu.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faComment} from "@fortawesome/free-solid-svg-icons/faComment";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons/faSuitcase";

type MenuPropsType = {
    homeCallback: () => void
    aboutCallback: () => void
    contactsCallback: () => void
    portfolioCallback: () => void
}

export const Menu = ({homeCallback, aboutCallback, contactsCallback, portfolioCallback}: MenuPropsType) => {
    const [change, setChange] = useState('')
    const [show, setShow] = useState('')
    const [showNav, setShowNav] = useState('')

    const openContainer = () => {
        if (change === s.change) {
            setChange('');
            setShow('');
            setShowNav('');

        } else {
            setChange(s.change);
            setShow(s.show);
            setShowNav(s.showNav);
        }
    }

    const onBlurContainer = () => {
        if (change === s.change) {
            openContainer();
        }
    }

    return (
        <>
            <div className={`${s.container} ${change}`}
                 onClick={openContainer}
                 onBlur={onBlurContainer}
                 tabIndex={0}>

                <div className={s.line1}/>
                <div className={s.line2}/>
                <div className={s.line3}/>

                <ul className={`${s.menuWrapper} ${show}`}>
                    <span onClick={homeCallback} className={`${s.home} ${showNav}`}>Home</span>
                    <span onClick={aboutCallback} className={`${s.about} ${showNav}`}>About</span>
                    <span onClick={contactsCallback} className={`${s.contacts} ${showNav}`}>Contacts</span>
                    <span onClick={portfolioCallback} className={`${s.portfolio} ${showNav}`}>Portfolio</span>

                    <li className={s.homeIconWrapper}>
                        <FontAwesomeIcon onClick={homeCallback}
                                         className={s.menuIcon}
                                         icon={faHome}
                                         color={'darkgray'}/>
                    </li>
                    <li className={s.skillsIconWrapper}>
                        <FontAwesomeIcon onClick={aboutCallback}
                                         className={s.menuIcon}
                                         icon={faUser}
                                         color={'darkgray'}/>
                    </li>
                    <li className={s.contactsIconWrapper}>
                        <FontAwesomeIcon onClick={contactsCallback}
                                         className={s.menuIcon}
                                         icon={faComment}
                                         color={'darkgray'}/>
                    </li>
                    <li className={s.portfolioIconWrapper}>
                        <FontAwesomeIcon onClick={portfolioCallback}
                                         className={s.menuIcon}
                                         icon={faSuitcase}
                                         color={'darkgray'}/>
                    </li>
                </ul>
            </div>

            <div className={s.mobileMenu}>
                <div className={s.menuItems} onClick={aboutCallback}>
                    <FontAwesomeIcon className={s.menuItemIconMobile}
                                     icon={faUser}
                                     color={'#2196F3'}/>
                    <span className={s.title}>About</span>
                </div>
                <div className={s.menuItems} onClick={contactsCallback}>
                    <FontAwesomeIcon className={s.menuItemIconMobile}
                                     icon={faComment}
                                     color={'#2196F3'}/>
                    <span className={s.title}>Contacts</span>
                </div>
                <div className={s.menuItems} onClick={portfolioCallback}>
                    <FontAwesomeIcon className={s.menuItemIconMobile}
                                     icon={faSuitcase}
                                     color={'#2196F3'}/>
                    <span className={s.title}>Portfolio</span>
                </div>
            </div>
        </>
    );
}