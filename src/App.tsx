import React, {useState} from 'react';
import s from './App.module.scss';
import {Home} from "./components/Home/Home";
import {Menu} from './components/Menu/Menu';
import {About} from "./components/About/About";

function App() {
    let [home, setHome] = useState('')
    let [contacts, setContacts] = useState('')
    let [about, setAbout] = useState('')


    const onClickHomeHandler = () => {
        if (contacts || about === s.show) {
            setContacts('');
            setAbout('');
            setHome('');
        }
    }

    const onClickContactsHandler = () => {
        setContacts(s.show);
        setAbout('');
    }
    const onClickAboutHandler = () => {
        setAbout(s.show);
        setContacts('');
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={s.menuWrapper}>
                    <Menu homeCallback={onClickHomeHandler}
                          aboutCallback={onClickAboutHandler}
                          contactsCallback={onClickContactsHandler}/>
                </div>

                <Home/>
                <div className={`${s.page} ${about}`}>
                    <About/>
                </div>
                {/*<div className={`${s.page} ${contacts}`}>*/}
                {/*<Contacts/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
