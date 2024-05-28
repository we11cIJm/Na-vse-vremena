import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';

function Menu({assistant_global}) {

    const navigate = useNavigate();

    function toStartQuiz(type) {
        assistant_global(type, 'choose_theme')
    }

    function showTheory(type) {
        assistant_global(type, 'choose_theory')
    }

    return (
        <div className="Menu">
            <h1 className="quiz-text">Выбери время:</h1>
            <div className="types">
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <Button text="Past" size="s" onClick={() => toStartQuiz('прошедшее')} className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('прошедшее')}
                            className="theory-button"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <Button text="Present" size="s" onClick={() => toStartQuiz('настоящее')}
                            className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('настоящее')}
                            className="theory-button"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button text="Future" size="s" onClick={() => toStartQuiz('будущее')} className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('будущее')}
                            className="theory-button"/>
                </div>
            </div>
        </div>
    )
}

export default Menu
