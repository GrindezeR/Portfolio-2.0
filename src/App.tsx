import React, { useState } from 'react';
import s from './App.module.scss';
import { Home } from "./components/Home/Home";
import { Menu } from './components/Menu/Menu';
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
    let [about, setAbout] = useState('')
    let [contacts, setContacts] = useState('')
    let [portfolio, setPortfolio] = useState('')

    const onClickHomeHandler = () => {
        if (contacts || about || portfolio === s.show) {
            setContacts('');
            setAbout('');
            setPortfolio('');
        }
    }
    const onClickAboutHandler = () => {
        setAbout(s.show);
        setContacts('');
        setPortfolio('');
    }
    const onClickContactsHandler = () => {
        setContacts(s.show);
        setAbout('');
        setPortfolio('');
    }
    const onClickPortfolioHandler = () => {
        setPortfolio(s.show);
        setAbout('');
        setContacts('');
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={s.menuWrapper}>
                    <Menu homeCallback={onClickHomeHandler}
                        aboutCallback={onClickAboutHandler}
                        contactsCallback={onClickContactsHandler}
                        portfolioCallback={onClickPortfolioHandler} />
                </div>

                <Home aboutCallback={onClickAboutHandler} />

                <div className={`${s.page} ${about}`}>
                    <About homeCallback={onClickHomeHandler} />
                </div>
                <div className={`${s.page} ${contacts}`}>
                    <Contacts homeCallback={onClickHomeHandler} />
                </div>
                <div className={`${s.page} ${portfolio}`}>
                    <Portfolio homeCallback={onClickHomeHandler} />
                </div>
            </div>
        </div>
    );
}

export default App;
