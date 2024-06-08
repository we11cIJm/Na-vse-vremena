// import React from "react";
// import { useNavigate } from "react-router-dom";
// import pastTheoryImage from "../Content/past_theory.png";
// import {useDefaultSectionFocus, useSection} from '@salutejs/spatial';
//
// const PastTheory = () => {
//
//     const navigate = useNavigate();
//     const [theoryProps] = useSection('pastTheory');
//
//     const goToMainMenu = () => {
//         navigate("/");
//     };
//
//     useDefaultSectionFocus('pastTheory');
//
//     return (
//         <div {...theoryProps}>
//             <div className="theory-page">
//                 <img src={pastTheoryImage} alt="Past Theory" className="theory-page"/>
//                 <button onClick={goToMainMenu} className="sn-section-item back-button-invisible" tabIndex={-1}>
//                     Список времён
//                 </button>
//                 <button onClick={goToMainMenu} className="sn-section-item back-button" tabIndex={-1}>
//                     Список времён
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default PastTheory;

/********************************************************************************************************************/

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useDefaultSectionFocus, useSection } from '@salutejs/spatial';
// // import '../App.css';
// import '../PastTheory.css';
//
// const PastTheory = () => {
//
//     const navigate = useNavigate();
//     const [theoryProps] = useSection('pastTheory');
//
//     const goToMainMenu = () => {
//         navigate("/");
//     };
//
//     useDefaultSectionFocus('pastTheory');
//
//     return (
//         // <div {...theoryProps}>
//         <div className="theory-page">
//             <div className="container">
//                 <h1 className="header">Past Tense Theory</h1>
//
//                 <div className="card">
//                     <h2>Simple Past</h2>
//                     <div className="card-section">
//                         <h3>Structure</h3>
//                         <p>+ S + was/were</p>
//                         <p>+ S + V-ed</p>
//                         <p>- S + was not/were not + ...</p>
//                         <p>- S + did not + verb (base form)</p>
//                         <p>? Was/Were + S + ...?</p>
//                         <p>? Did + S + verb (in base form)?</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Usage</h3>
//                         <p>To express completed action in the past</p>
//                         <p>To describe a series of completed actions in the past</p>
//                         <p>To express habits in the past</p>
//                         <p>For stative verbs (have, own, be, think, believe, know, dislike, need, owe, wish)</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Example</h3>
//                         <p>I saw a ghost last Friday.</p>
//                         <p>I finished work, walked to the beach, and found a nice place to swim.</p>
//                         <p>When I was young, I watched lots of television every day after school.</p>
//                         <p>He had a small cottage in the woods.</p>
//                     </div>
//                 </div>
//
//                 <div className="card">
//                     <h2>Past Continuous</h2>
//                     <div className="card-section">
//                         <h3>Structure</h3>
//                         <p>+ S + was/were + V-ing</p>
//                         <p>- S + was/were + not + V-ing</p>
//                         <p>? Was/were + S + V-ing?</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Usage</h3>
//                         <p>To describe parallel actions</p>
//                         <p>To describe what someone was doing at a particular point in time</p>
//                         <p>To express interrupted action in the past</p>
//                         <p>To describe repetition and irritation</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Example</h3>
//                         <p>While I was washing the dishes, I heard a loud noise.</p>
//                         <p>I was working in the garden all day yesterday.</p>
//                         <p>I was driving to work when I crashed my car.</p>
//                         <p>He was always complaining in class.</p>
//                     </div>
//                 </div>
//
//                 <div className="card">
//                     <h2>Past Perfect</h2>
//                     <div className="card-section">
//                         <h3>Structure</h3>
//                         <p>+ S + had + past participle + ...</p>
//                         <p>- S + had not/hadn’t + past participle + ...</p>
//                         <p>? Had + S + past participle + ...?</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Usage</h3>
//                         <p>To describe an action finished before another past action</p>
//                         <p>To describe an action that happened before a specific time in the past</p>
//                         <p>To describe cause and effect (combine with Past Simple)</p>
//                         <p>To emphasize the result of an activity in the past</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Example</h3>
//                         <p>Richard had gone out when his wife arrived in the office.</p>
//                         <p>Christine had never been to an opera before last night.</p>
//                         <p>I got stuck in traffic because there had been an accident.</p>
//                         <p>I had been to London twice by the time I got a job in New York.</p>
//                     </div>
//                 </div>
//
//                 <div className="card">
//                     <h2>Past Perfect Continuous</h2>
//                     <div className="card-section">
//                         <h3>Structure</h3>
//                         <p>+ S + had + been + V-ing</p>
//                         <p>- S + had not/hadn’t + been + V-ing</p>
//                         <p>? Had + S + been + V-ing?</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Usage</h3>
//                         <p>To describe a past action, already started and continued up to another action or time in the
//                             past</p>
//                         <p>To express the duration before something in the past</p>
//                         <p>To describe the cause of something in the past</p>
//                     </div>
//                     <div className="card-section">
//                         <h3>Example</h3>
//                         <p>The boys had been playing soccer for about an hour when it started to rain.</p>
//                         <p>Richard needed a holiday because he had been working hard for six months.</p>
//                         <p>He was tired because he had been jogging.</p>
//                     </div>
//                 </div>
//                 <div {...theoryProps}>
//                     <button onClick={goToMainMenu} className="sn-section-item back-button" tabIndex={-1}>
//                         Список времён
//                     </button>
//                 </div>
//
//             </div>
//         </div>
//     );
// };
//
// export default PastTheory;

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
                                    <p>+ S + was/were</p>
                                    <p>+ S + V-ed</p>
                                </div>
                                <div className="negative">
                                    <p>- S + was not/were not + ...</p>
                                    <p>- S + did not + verb (base form)</p>
                                </div>
                                <div className="interrogative">
                                    <p>? Was/Were + S + ...?</p>
                                    <p>? Did + S + verb (in base form)?</p>
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
                                    <p>+ S + was/were + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>- S + was/were + not + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>? Was/were + S + V-ing?</p>
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
                                    <p>+ S + had + past participle + ...</p>
                                </div>
                                <div className="negative">
                                    <p>- S + had not/hadn’t + past participle + ...</p>
                                </div>
                                <div className="interrogative">
                                    <p>? Had + S + past participle + ...?</p>
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
                                    <p>+ S + had + been + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>- S + had not/hadn’t + been + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>? Had + S + been + V-ing?</p>
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
