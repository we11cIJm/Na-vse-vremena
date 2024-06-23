import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';
import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';

function Menu({assistant_global}) {

    const navigate = useNavigate();
    const [menuProps] = useSection('menu');

    function toStartQuiz(type) {
        assistant_global(type, "choose_theme")
    }

    function showTheory(type) {
        assistant_global(type, "choose_theory")
    }

    useDefaultSectionFocus('menu');

    return (
        <div className="Menu">
            <h1 className="quiz-text">Выбери время:</h1>
            <div {...menuProps}>
                <div className="types">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <span className="button-text"
                              style={{marginRight: '10px', minWidth: '100px'}}>Past tense:</span>
                        <Button text="Тема 1" size="s" onClick={() => toStartQuiz(1)}
                                className="sn-section-item menu-btn" tabIndex={-1} style={{flexShrink: 0}}/>
                        <Button text="Теория 1" size="s" view="secondary" onClick={() => showTheory(1)}
                                className="sn-section-item theory-button" tabIndex={-1}
                                style={{marginLeft: '10px', flexShrink: 0}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <span className="button-text"
                              style={{marginRight: '10px', minWidth: '100px'}}>Present tense:</span>
                        <Button text="Тема 2" size="s" onClick={() => toStartQuiz(2)}
                                className="sn-section-item menu-btn" tabIndex={-1} style={{flexShrink: 0}}/>
                        <Button text="Теория 2" size="s" view="secondary" onClick={() => showTheory(2)}
                                className="sn-section-item theory-button" tabIndex={-1}
                                style={{marginLeft: '10px', flexShrink: 0}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <span className="button-text"
                              style={{marginRight: '10px', minWidth: '100px', padding: '0 12px'}}>Future tense: </span>
                        <Button text="Тема 3" size="s" onClick={() => toStartQuiz(3)}
                                className="sn-section-item menu-btn" tabIndex={-1} style={{flexShrink: 0}}/>
                        <Button text="Теория 3" size="s" view="secondary" onClick={() => showTheory(3)}
                                className="sn-section-item theory-button" tabIndex={-1}
                                style={{marginLeft: '10px', flexShrink: 0}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
