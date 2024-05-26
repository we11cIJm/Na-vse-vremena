import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';

function Menu({assistant_global}) {

    const navigate = useNavigate();

    function toStartQuiz(type) {
        assistant_global(type, "choose_theme")
    }

    function showTheory(type) {
        assistant_global(type, "choose_theory")
    }

    return (
        <div className="Menu">
            <h1 className="quiz-text">Выбери время:</h1>
            <div className="types">
                {/*<Button text="Past" size="l" onClick={() => toStartQuiz(1)} className="menu-btn"/>*/}
                {/*<Button text="Present" size="l" onClick={() => toStartQuiz(2)} className="menu-btn"/>*/}
                {/*<Button text="Future" size="l" onClick={() => toStartQuiz(3)} className="menu-btn"/>*/}

                {/*<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>*/}
                {/*    <Button text="Past" size="s" onClick={() => toStartQuiz(1)} className="menu-btn"/>*/}
                {/*    <Button text="Theory" size="s" view="secondary" onClick={() => navigate('/theory/past')} className="theory-button"/>*/}
                {/*</div>*/}
                {/*<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>*/}
                {/*    <Button text="Present" size="s" onClick={() => toStartQuiz(2)} className="menu-btn"/>*/}
                {/*    <Button text="Theory" size="s" view="secondary" onClick={() => navigate('/theory/present')}  className="theory-button"/>*/}
                {/*</div>*/}
                {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
                {/*    <Button text="Future" size="s" onClick={() => toStartQuiz(3)} className="menu-btn"/>*/}
                {/*    <Button text="Theory" size="s" view="secondary" onClick={() => navigate('/theory/future')}  className="theory-button"/>*/}
                {/*</div>*/}

                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    // TODO: make phrases instead of nums
                    <Button text="Past" size="s" onClick={() => toStartQuiz(1)} className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory(1)}
                            className="theory-button"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <Button text="Present" size="s" onClick={() => toStartQuiz(2)}
                            className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory(2)}
                            className="theory-button"/>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button text="Future" size="s" onClick={() => toStartQuiz(3)} className="menu-btn"/>
                    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory(3)}
                            className="theory-button"/>
                </div>
            </div>
        </div>
    )
}

export default Menu
