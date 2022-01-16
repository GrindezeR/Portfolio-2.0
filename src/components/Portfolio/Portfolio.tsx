import React from "react";
import s from './Portfolio.module.scss';
import sc from '../../common/styles/Common.module.scss';
import {Title} from "../Title/Title";
import {HomeButton} from "../Home/HomeMobileButton/HomeButton";
import {Project} from "./Project/Project";
import socialBack from '../../common/images/socialNetwork.jpg';
import todolistBack from '../../common/images/todolist.jpg';
import cardsBack from '../../common/images/cards.jpg'

type PropsType = {
    homeCallback: () => void
}

export const Portfolio = ({homeCallback}: PropsType) => {
    return (
        <div className={sc.container}>
            <HomeButton onClickHomeHandler={homeCallback}/>
            <div className={s.wrapper}>
                <Title title={'MY'}
                       specialText={'PORTFOLIO'}
                       aboutText={'A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.'}/>

                <div className={s.projectsWrapper}>
                    <Project
                        title={'Social Network'}
                        links={{
                            demo: 'https://grindezer.github.io/SocialNetwork/',
                            source: 'https://github.com/GrindezeR/SocialNetwork'
                        }}
                        technologies={'React, Redux, React-redux, TypeScript, Thunk, Axios, Rest API, Reselect, Formik, React-router-dom, SCSS, HTML, Git'}
                        background={socialBack}
                        description={'A project to build a social network with the ability to log in, search for users, create posts on the wall and much more (in progress)'}/>
                    <Project
                        title={'Todolist'}
                        links={{
                            demo: 'https://grindezer.github.io/todoList/',
                            source: 'https://github.com/GrindezeR/todoList'
                        }}
                        technologies={'React, Redux, React-redux, TypeScript, Thunk, Axios, Rest API, Formik, React-router-dom, Storybook, SCSS, HTML, Git'}
                        background={todolistBack}
                        description={'A project that allows you to maintain a to-do list and edit them, create independent lists under a connected account (in progress)'}/>
                    <Project title={'Cards'}
                             description={'Application for learning something from cards and decks that you can create and replace. You can register, log in, restore password and etc.'}
                             background={cardsBack}
                             links={{
                                 demo: 'https://grindezer.github.io/card-project',
                                 source: 'https://github.com/GrindezeR/card-project',
                             }}
                             technologies={'React, Redux, React-redux, TypeScript, Thunk, Axios, Rest API, React-router-dom'}/>
                </div>
            </div>
        </div>
    );
}