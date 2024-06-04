import { useSection } from '@salutejs/spatial';
import React from 'react';
import { Button } from "@salutejs/plasma-ui";

const Page = () => {
  const [theory] = useSection('theory');
  const [tests] = useSection('tests');

  return (
      <>
        <div {...theory}>
          <div className="sn-section-item" tabIndex={-1}>
            <Button Кнопка теории Past Simple />
          </div>
          <div className="sn-section-item" tabIndex={-1}>
            <Button Кнопка теории Present Simple/>
          </div>
          <div>
            <div>
              <div className="sn-section-item" tabIndex={-1}>
                <Button Кнопка теории Future Simple/>
              </div>
            </div>
          </div>
        </div>

        <div {...tests}>
          <div className="sn-section-item" tabIndex={-1}>
            <Button Кнопка теста Past Simple/>
          </div>
          <div className="sn-section-item" tabIndex={-1}>
            <Button Кнопка теста Present Simple/>
          </div>
          <div>
            <div>
              <div className="sn-section-item" tabIndex={-1}>
                <Button Кнопка теста Future Simple/>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};


