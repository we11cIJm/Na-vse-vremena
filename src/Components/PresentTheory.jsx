import React from "react";
import { useNavigate } from "react-router-dom";
import { useDefaultSectionFocus, useSection } from '@salutejs/spatial';
import '../Theory.css';

const PresentTheory = () => {

    const navigate = useNavigate();
    const [theoryProps] = useSection('presentTheory');

    const goToMainMenu = () => {
        navigate("/");
    };

    useDefaultSectionFocus('presentTheory');

    return (
        <div {...theoryProps} className="theory-page">
            <div className="container">
                <h1 className="header">Present Tense Theory</h1>

                <div className="card present-simple">
                    <h2>Simple Present</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + am/is/are + predicate...</p>
                                    <p>Affirmative: S + verb + object...</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + am/is/are + not + predicate...</p>
                                    <p>Negative: S + don’t/doesn’t + verb + object...</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Am/Is/Are + S + predicate?</p>
                                    <p>Interrogative: Do/Does + S + verb + object?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Habitual actions</p>
                                    <p>2. Universal truths</p>
                                    <p>3. Instructions or directions</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. She brushes her teeth every morning.</p>
                                    <p>2. The sun rises in the east.</p>
                                    <p>3. Open the book and start reading.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card present-continuous">
                    <h2>Present Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + am/is/are + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + am/is/are + not + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Am/Is/Are + S + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions happening now</p>
                                    <p>2. Temporary actions</p>
                                    <p>3. Future plans</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. She is studying for her exams right now.</p>
                                    <p>2. They are staying at the hotel for a week.</p>
                                    <p>3. I am meeting a friend tomorrow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card present-perfect">
                    <h2>Present Perfect</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + have/has + past participle</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + have/has + not + past participle</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Have/Has + S + past participle?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions that happened at an unspecified time</p>
                                    <p>2. Actions that started in the past and continue to the present</p>
                                    <p>3. Life experiences</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. I have seen that movie three times.</p>
                                    <p>2. She has lived in Paris for five years.</p>
                                    <p>3. They have visited Japan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card present-perfect-continuous">
                    <h2>Present Perfect Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + have/has + been + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + have/has + not + been + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Have/Has + S + been + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions that started in the past and are still continuing</p>
                                    <p>2. Recently completed actions with current relevance</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. I have been studying for three hours.</p>
                                    <p>2. She has been working here since 2010.</p>
                                    <p>3. They have been playing tennis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="sn-section-item back-button" tabIndex={-1} onClick={goToMainMenu}>Список времён</button>
            </div>
        </div>
    );
};

export default PresentTheory;