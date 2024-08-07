import './App.css';
import Menu from './Components/Menu';
import toStartQuiz from './Components/Menu';
import showTheory from './Components/Menu';
import {useSpatnavInitialization, useSection} from '@salutejs/spatial';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { getAnswers } from './indexedDB';
import Game from './Components/Game';
import PastTheory from './Components/PastTheory';
import PresentTheory from './Components/PresentTheory';
import FutureTheory from './Components/FutureTheory';
//import Theory from './Components/Theory';
import data from "./Content/questions"
import React, {
  useReducer,
  useState,
  useRef,
  useEffect,
} from "react";
import { Button } from "@salutejs/plasma-ui";
import { createAssistant, createSmartappDebugger } from '@salutejs/client';
import { darkJoy, darkEva, darkSber } from '@salutejs/plasma-tokens/themes';
import { text, background, gradient } from '@salutejs/plasma-tokens';
import { createGlobalStyle } from 'styled-components';

const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);



const DocStyles = createGlobalStyle`
html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};
    min-height: 100vh;
}
`; 


function App() {
  //document.addEventListener("DOMContentLoaded", function() {
  //  let currentDate = document.querySelector("theory");
    // rest of your code goes here
  //});

  const [character, setCharacter] = useState('sber');
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const initialize = (getState) => {
    //if (process.env.NODE_ENV === "production") {
    //  return createSmartappDebugger({
    //    token: process.env.REACT_APP_TOKEN ?? "",
    //    initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
    //    getState,
    //  });
    //}
    return createAssistant({ getState });
  };

  const childRef = useRef(null);
  const assistantStateRef = useRef();
  const assistantRef = useRef();
  useSpatnavInitialization();

  useEffect(() => {
    navigate('/');
    assistantRef.current = initialize(() => assistantStateRef.current);

    assistantRef.current.on("data", (action) => {
      handleAssistantDataEvent(action);
    });
    assistantRef.current.on("command", (event) => {
      dispatchAssistantAction(event?.command);
    })
  }, []);

  const handleAssistantDataEventSmartAppData = (event) => {
    console.log('AssistantWrapper.handleAssistantEventSmartAppData: event:', event);

    if (event.sub !== undefined) {
      // this.emit('event-sub', event.sub);
      // /*await*/ this._App.handleAssistantSub(event.sub);
    }

    const action = event.action;
    dispatchAssistantAction(action);
  }

  const dispatchAssistantAction = (action) => {
    // notify(`action ${action} `);
    if (!action) return;

    switch (action.type) { //action.types
      case 'new_topic': {
        console.log('new_topic', action.note)
        navigate('/game', { state: { Type: Number(action.note) } });
        break;
      }
      case 'choose_theory': {
        console.log('choose_theory', action.note)
        navigate('/theory/'.concat(action.note), { state: { Type: Number(action.note) } });
        break;
      }

      case 'answer':
        if (childRef?.current)
          childRef.current.callMethod('ans', Number(action.note));
        break;
      case 'next':
        if (childRef?.current)
          childRef.current.callMethod('next');
        break;
      case 'correct_ans':
        if (childRef?.current)
          childRef.current.callMethod('correct_ans', Number(action.note));
        break;
      case 'menu':
        assistantRef.current.sendData({
          action: {
            action_id: 'list_of_tense',
            parameters: {
              number: null
            }
          }
        })
        navigate('/');
        break;
      case 'send_results':
        getAnswers().then(answers => {
          assistantRef.current.sendData({
            action: {
              action_id: 'show_results',
              parameters: {
                results: answers
              }
            }
          });
        });
        break;
      default:
        // console.warn('dispatchAssistantAction: Unknown action.type:', action.type)
    }
  }

  const handleAssistantDataEvent = (event) => {
    switch (event?.type) {
      case "character":
        // notify(event.type);
        setCharacter(event.character?.id)
        break;
      case "sdk_answer":
        // notify(event.type);
        handleAssistantDataEventSmartAppData(event);
        break;

      case "smart_app_data":
        // notify(event.type);
        handleAssistantDataEventSmartAppData(event);
        break;

      default:
        break
    }
  }

  function assistant_global(command, type) {
    console.log(command, type);
    
    const characterDependentResponses = {
       joy: "ты",
       eva: "вы",
       sber: "вы"
    };

    const responseStyle = characterDependentResponses[character] || "вы";

    assistantRef.current.sendData({
      action: {
        action_id: type,
        parameters: {
          number: command,
          responseStyle
        }
      }
    });

    if (type === "choose_theme") { //"new_topic") {
      switch (command) {
        case 1: // "Past practice":
          navigate('/game', { state: { Type: 1 } });
          break;
        case 2: // "Present practice":
          navigate('/game', { state: { Type: 2 } });
          break;
        case 3: // "Future practice":
          navigate('/game', { state: { Type: 3 } });
          break;
        default:
          break;
      }
    } else if (type === "choose_theory") {
      switch (command) {
        case 1: //"Past theory":
          navigate('/theory/'.concat(command), { state: { Type: 1 } });
          break;
        case 2: // "Present theory":
          navigate('/theory/'.concat(command), { state: { Type: 2 } });
          break;
        case 3: // "Future theory":
          navigate('/theory/'.concat(command), { state: { Type: 3 } });
          break;
        default:
          break;
      }
    }
  }

  return (
      <div className="App">
        <DocStyles />
        {(() => {
          switch (character) {
            case 'sber':
              return <ThemeBackgroundSber />;
            case 'eva':
              return <ThemeBackgroundEva />;
            case 'joy':
              return <ThemeBackgroundJoy />;
            default:
              return;
          }
        })()}
        <Routes>
        <Route exact path="/" element={<Menu assistant_global={assistant_global} />} />
        <Route exact path="/game" element={<Game ref={childRef} assistant_global={assistant_global} />} />

        <Route path="/theory/1" element={<PastTheory assistant_global={assistant_global} />} />
        <Route path="/theory/2" element={<PresentTheory assistant_global={assistant_global} />} />
        <Route path="/theory/3" element={<FutureTheory assistant_global={assistant_global} />} />
        </Routes>

      </div>
  );
}

export default App;
