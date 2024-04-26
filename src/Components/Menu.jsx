import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';

function Menu({assistant_global}) {

    const navigate = useNavigate();

    function toStartQuiz(type) {
        assistant_global(type, "choose_theme")
        //navigate('/game', { state: { Type: type } });
    }

    return (
        <div className="Menu">
            <h1 className="quiz-text">Для начала игры нужно выбрать интересующую вас мифологию:</h1>
            <div className="types">
            <Button text="Тема 1: скандинавская" size="l" onClick={() => toStartQuiz(1)} className="menu-btn"/>
            <Button text="Тема 2: греческая" size="l" onClick={() => toStartQuiz(2)} className="menu-btn"/>
            <Button text="Тема 3: египетская" size="l" onClick={() => toStartQuiz(3)} className="menu-btn"/>

            </div>
        </div>
    )
}

export default Menu