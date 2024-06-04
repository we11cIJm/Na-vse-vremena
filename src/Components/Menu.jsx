import React from "react"
import { useNavigate } from 'react-router-dom';
import { Button } from "@salutejs/plasma-ui";
import { BodyL, bodyL } from '@salutejs/plasma-ui';
import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';


function Menu({assistant_global}) {

    const navigate = useNavigate();
    const [menuProps] = useSection('menu');

    function toStartQuiz(type) {
        assistant_global(type, 'choose_theme')
    }

    function showTheory(type) {
        assistant_global(type, 'choose_theory')
    }

    useDefaultSectionFocus('menu');

    return (
        <div className="Menu">
            <h1 className="quiz-text">Выбери время:</h1>
            <div {...menuProps}>
                <div className="types">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <Button text="Past" size="s" onClick={() => toStartQuiz('прошедшее')}
                                className="sn-section-item menu-btn" tabIndex={-1}/>
                        <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('прошедшее')}
                                className="sn-section-item theory-button" tabIndex={-1}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <Button text="Present" size="s" onClick={() => toStartQuiz('настоящее')}
                                className="sn-section-item menu-btn" tabIndex={-1}/>
                        <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('настоящее')}
                                className="sn-section-item theory-button" tabIndex={-1}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <Button text="Future" size="s" onClick={() => toStartQuiz('будущее')} className="sn-section-item menu-btn" tabIndex={-1}/>
                        <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('будущее')}
                                className="sn-section-item theory-button" tabIndex={-1}/>
                    </div>
                    {/*8888888888888888888888888*/}
                    {/*<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>*/}
                    {/*    <Button text="Past" size="s" onClick={() => toStartQuiz('прошедшее')}*/}
                    {/*            className="sn-section-item menu-btn" tabIndex={-1}/>*/}
                    {/*    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('прошедшее')}*/}
                    {/*            className="sn-section-item theory-button" tabIndex={-1}/>*/}
                    {/*</div>*/}
                    {/*<div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>*/}
                    {/*    <Button text="Present" size="s" onClick={() => toStartQuiz('настоящее')}*/}
                    {/*            className="sn-section-item menu-btn" tabIndex={-1}/>*/}
                    {/*    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('настоящее')}*/}
                    {/*            className="sn-section-item theory-button" tabIndex={-1}/>*/}
                    {/*</div>*/}
                    {/*<div style={{display: 'flex', alignItems: 'center'}}>*/}
                    {/*    <Button text="Future" size="s" onClick={() => toStartQuiz('будущее')}*/}
                    {/*            className="sn-section-item menu-btn" tabIndex={-1}/>*/}
                    {/*    <Button text="Theory" size="s" view="secondary" onClick={() => showTheory('будущее')}*/}
                    {/*            className="sn-section-item theory-button" tabIndex={-1}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Menu
