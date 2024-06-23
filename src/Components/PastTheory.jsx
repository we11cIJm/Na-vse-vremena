import React from "react";
import { useNavigate } from "react-router-dom";
import { useDefaultSectionFocus, useSection } from '@salutejs/spatial';
import '../Theory.css';

const PastTheory = () => {

    const navigate = useNavigate();
    // const [theoryProps] = useSection('pastTheory');

    const goToMainMenu = () => {
        navigate("/");
    };

    // useDefaultSectionFocus('pastTheory');

    return (
        <div className="theory-page">
            <div className="container">
                <h1 className="header">Past Tense Theory</h1>

                <div className="card simple-past">
                    <h2>Simple Past</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + was/were</p>
                                    <p>Affirmative: S + V-ed</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + was not/were not + ...</p>
                                    <p>Negative: S + did not + verb (base form)</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Was/Were + S + ...?</p>
                                    <p>Interrogative: Did + S + verb (in base form)?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. To express completed action in the past</p>
                                    <p>2. To describe a series of completed actions in the past</p>
                                    <p>3. To express habits in the past</p>
                                    <p>4. For stative verbs (have, own, be, think, believe, know, dislike, need, owe, wish)</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. I saw a ghost last Friday.</p>
                                    <p>2. I finished work, walked to the beach, and found a nice place to swim.</p>
                                    <p>3. When I was young, I watched lots of television every day after school.</p>
                                    <p>4. He had a small cottage in the woods.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card past-continuous">
                    <h2>Past Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + was/were + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + was/were + not + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Was/were + S + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. To describe parallel actions</p>
                                    <p>2. To describe what someone was doing at a particular point in time</p>
                                    <p>3. To express interrupted action in the past</p>
                                    <p>4. To describe repetition and irritation</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. While I was washing the dishes, I heard a loud noise.</p>
                                    <p>2. I was working in the garden all day yesterday.</p>
                                    <p>3. I was driving to work when I crashed my car.</p>
                                    <p>4. He was always complaining in class.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card past-perfect">
                    <h2>Past Perfect</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + had + past participle + ...</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + had not/hadn’t + past participle + ...</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Had + S + past participle + ...?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. To describe an action finished before another past action</p>
                                    <p>2. To describe an action that happened before a specific time in the past</p>
                                    <p>3. To describe cause and effect (combine with Past Simple)</p>
                                    <p>4. To emphasize the result of an activity in the past</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. Richard had gone out when his wife arrived in the office.</p>
                                    <p>2. Christine had never been to an opera before last night.</p>
                                    <p>3. I got stuck in traffic because there had been an accident.</p>
                                    <p>4. I had been to London twice by the time I got a job in New York.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card past-perfect-continuous">
                    <h2>Past Perfect Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + had + been + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + had not/hadn’t + been + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Had + S + been + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. To show that something started in the past and continued up until another time in the past</p>
                                    <p>2. To emphasize the duration of an action</p>
                                    <p>3. To show cause and effect</p>
                                    <p>4. In reported speech</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. We had been making dinner when the phone rang.</p>
                                    <p>2. He had been working for three hours when I called him.</p>
                                    <p>3. It had been raining hard for several hours and the streets were very wet.</p>
                                    <p>4. She said she had been trying to call me all day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div {...theoryProps}>*/}
                <button className="sn-section-item back-button" tabIndex={-1} onClick={goToMainMenu}>Список времён</button>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default PastTheory;