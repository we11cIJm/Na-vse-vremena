import './App.css';
import Menu from './Components/Menu';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Game from './Components/Game';
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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Menu />,
//   },
//   {
//     path: "/quizStart",
//     element: <QuizStart />
//   },
//   {
//     path: "/game",
//     element: <Game />
//   }
// ]);

function App() {
  const [character, setCharacter] = useState('sber');
  const [page, setPage] = useState(0)
  const navigate = useNavigate();
  const initialize = (getState) => {
    if (process.env.NODE_ENV === "development") {
      return createSmartappDebugger({
        token: process.env.REACT_APP_TOKEN ?? "",
        initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
        getState,
      });
    }
    return createAssistant({ getState });
  };

  const childRef = useRef(null);
  const assistantStateRef = useRef();
  const assistantRef = useRef();

  useEffect(() => {
    navigate('/')
    assistantRef.current = initialize(() => assistantStateRef.current);

    assistantRef.current.on("data", (action) => {
      handleAssistantDataEvent(action)
    });


    assistantRef.current.on("command", (event) => {
      dispatchAssistantAction(event?.command);
    })
    // assistantRef.current.on("start", () => {
    //   console.log(`AssistantWrapper: _assistant.on(start)`);
    // });
    // assistantRef.current.on("data", ({ action }) => {
    //   if (action) {
    //   }
    // });
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
        //navigate('/quizStart', { state: { Type: action.note } });
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

  // const handleOnRefreshClick = () => {
  //   // Отправка сообщения бэкенду с возможностью подписки на ответ.
  //   // В обработчик assistant.on('data') сообщение не передается
  //   const unsubscribe = assistant.sendAction(
  //     { type: 'some_action_name', payload: { param: 'some' } },
  //     (data: { type: string; payload: Record<string, unknown> }) => {
  //       // Обработка данных, переданных от бэкенд
  //       unsubscribe();
  //     },
  //     (error: { code: number; description: string }) => {
  //       // Обработка ошибки, переданной от бэкенд
  //     });
  // }

  function assistant_global(n, state) {
    console.log(n, state)
    assistantRef.current.sendData({
      action: {
        action_id: state,
        parameters: {
          number: n
        }
      }
    })
    if (state === "choose_theme") {
      navigate('/game', { state: { Type: Number(n) } });
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
      </Routes>
    </div>
  );
}

export default App;
