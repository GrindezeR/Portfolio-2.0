import React, {useState} from "react";
import s from './Menu.module.scss'
import homeIcon from '../../common/images/homeIcon.png';
import skillsIcon from '../../common/images/skillsIcon.png';
import contactsIcon from '../../common/images/contactsIcon.png';

type MenuPropsType = {
    homeCallback: () => void
    aboutCallback: () => void
    contactsCallback: () => void
}

export const Menu = ({homeCallback, aboutCallback, contactsCallback}: MenuPropsType) => {
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
            // openContainer();
        }
    }

    return (
        <div className={`${s.container} ${change}`}
             onClick={openContainer}
             onBlur={onBlurContainer}
             tabIndex={0}>

            <div className={s.line1}/>
            <div className={s.line2}/>
            <div className={s.line3}/>

            <ul className={`${s.menuWrapper} ${show}`}>

                <span onClick={homeCallback} className={`${s.home} ${showNav}`}>Home</span>
                <span onClick={aboutCallback} className={`${s.skills} ${showNav}`}>About</span>
                <span onClick={contactsCallback} className={`${s.contacts} ${showNav}`}>Contacts</span>

                <li className={s.homeIconWrapper}><img src={homeIcon} width={'25px'} alt='home'/></li>
                <li className={s.skillsIconWrapper}><img src={skillsIcon} width={'25px'} alt='skills'/></li>
                <li className={s.contactsIconWrapper}><img src={contactsIcon} width={'25px'} alt='contacts'/></li>

            </ul>

        </div>
    );
}