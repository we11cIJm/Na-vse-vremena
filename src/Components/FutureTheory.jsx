import React from "react";
import { useNavigate } from "react-router-dom";
import { useDefaultSectionFocus, useSection } from '@salutejs/spatial';
import '../Theory.css';

const FutureTheory = () => {

    const navigate = useNavigate();
    const [theoryProps] = useSection('futureTheory');

    const goToMainMenu = () => {
        navigate("/");
    };

    useDefaultSectionFocus('futureTheory');

    return (
        <div {...theoryProps} className="theory-page">
            <div className="container">
                <h1 className="header">Future Tense Theory</h1>

                <div className="card future-simple">
                    <h2>Simple Future</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + will/shall + V (base form)</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + will not/won’t + V (base form)</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Will + S + V (base form)?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions decided at the moment of speech</p>
                                    <p>2. Unplanned future actions</p>
                                    <p>3. Offering, asking for a request, promising, ordering, threatening</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. I have a toothache. I'll take some medicine.</p>
                                    <p>2. Winter will come soon.</p>
                                    <p>3. I’m afraid we will get wet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card future-continuous">
                    <h2>Future Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + will be + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + will not be + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Will + S + be + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Interrupted actions in the future</p>
                                    <p>2. Actions in progress at a specific time in the future</p>
                                    <p>3. Actions happening now and expected to continue in the future</p>
                                    <p>4. Asking politely about the future</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. When you come tomorrow, they will be playing tennis.</p>
                                    <p>2. At 12 o’clock tomorrow, we will be having lunch at school.</p>
                                    <p>3. Unfortunately, sea levels will still be rising in 20 years.</p>
                                    <p>4. Will you be bringing your friend to the party tonight?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card future-perfect">
                    <h2>Future Perfect</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + will have + past participle</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + will not have + past participle</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Will + S + have + past participle?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions that will finish before a certain time in the future</p>
                                    <p>2. Actions that will be completed before another event takes place</p>
                                    <p>3. Conviction that something will happen in the near past</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. By eight o'clock tomorrow, I will have taken off for Japan.</p>
                                    <p>2. She will have learnt Chinese before she moves to China.</p>
                                    <p>3. The guests will have arrived at the hotel by now.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card future-perfect-continuous">
                    <h2>Future Perfect Continuous</h2>
                    <div className="card-content">
                        <div className="card-fullwidth">
                            <div className="card-section structure">
                                <h3>Structure</h3>
                                <div className="affirmative">
                                    <p>Affirmative: S + will have been + V-ing</p>
                                </div>
                                <div className="negative">
                                    <p>Negative: S + will not have been + V-ing</p>
                                </div>
                                <div className="interrogative">
                                    <p>Interrogative: Will + S + have been + V-ing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns">
                            <div className="card-column">
                                <div className="card-section usage">
                                    <h3>Usage</h3>
                                    <p>1. Actions continuing up until a particular event or time in the future</p>
                                    <p>2. Actions finishing just before another time or action</p>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="card-section example">
                                    <h3>Example</h3>
                                    <p>1. James will have been teaching at the university for more than a year by the time he leaves for Asia.</p>
                                    <p>2. I will be tired when I get home because I will have been walking for over an hour.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="sn-section-item back-button" tabIndex={-1} onClick={goToMainMenu}>Список тем</button>
            </div>
        </div>
    );
};

export default FutureTheory;
