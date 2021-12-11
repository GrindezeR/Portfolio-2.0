import s from './Form.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import React, {ChangeEvent, useState} from "react";
import emailjs from 'emailjs-com';
import {MyButton} from "../../MyButton/MyButton";
import {faDove} from "@fortawesome/free-solid-svg-icons/faDove";

export const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(false);
        setError(false);
        setName(e.currentTarget.value);
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(false);
        setError(false);
        setEmail(e.currentTarget.value);
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setSuccess(false);
        setError(false);
        setMessage(e.currentTarget.value);
    }

    const sendEmail = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send("service_ekulwai", "template_2evg773", {
            to_name: 'Stanislav',
            name: name,
            email: email,
            message: message,
        }, 'user_7x9LryUfxCyxmPayXPUZg')
            .then((result) => {
                setName('');
                setEmail('');
                setMessage('');
                setSuccess(true);
            })
            .catch((error) => {
                setSuccess(false);
                setError(true);
            });
    };

    return (
        <form onSubmit={sendEmail} className={s.contactForm}>
            <div className={s.inputsWrapper}>
                <div className={s.inputContainer}>
                    <FontAwesomeIcon className={s.inputsIcons} icon={faUser} color={'gray'}/>
                    <input value={name} onChange={onChangeNameHandler}
                           className={`${s.name} ${s.inputs}`} placeholder={'YOUR NAME'} type="text"/>
                </div>
                <div className={s.inputContainer}>
                    <FontAwesomeIcon className={s.inputsIcons} icon={faEnvelope} color={'gray'}/>
                    <input value={email} onChange={onChangeEmailHandler}
                           className={`${s.email} ${s.inputs}`} placeholder={'YOUR EMAIL'} type="email"/>
                </div>
            </div>

            <div className={s.textAreaWrapper}>
                <FontAwesomeIcon className={s.textAreaIcon} icon={faComments} color={'gray'}/>
                <textarea value={message}
                          onChange={onChangeMessageHandler}
                          className={s.textArea}
                          placeholder={'YOUR MESSAGE'}
                          required/>
            </div>
            <div className={s.messageContainer}>
                {error && <div className={s.error}>Some error occurred, please try again later!</div>}
                {success && <div className={s.success}>Your letter has been sent, I will contact you shortly!</div>}
            </div>
            <div className={s.btnWrapper}>
                <MyButton title={'Send Message'} icon={faDove} disable={(name && email && message) === ''}/>
            </div>

        </form>
    );
}