
theme:/

    state: ВТемы
        state: ВыборТемы
                q: (тема) @duckling.number:: anyText || fromState = /ВТемы, onlyThisState = true 
                event: choose_theme || fromState = /ВТемы, onlyThisState = true
                
                if: $request.query != undefined
                    if: $parseTree._anyText < 1
                        a: нет такой темы!
                        go: /ВТемы
                    elseif: $parseTree._anyText > 3
                        a: нет такой темы!
                        go: /ВТемы
                    else:
                        random:
                            a: Отлично, {{$request.query}}!
                            a: {{$request.query}}!
                            a: {{$request.query}} выбрана!
                        script:
                            Topic($parseTree._anyText, $context);
                            addSuggestions(["вариант 1","ответ 2", "номер 3", "выход"], $context);
                        
                else:
                    random:
                            a: Отлично, тема {{$request.data.eventData.number}}!
                            a: Тема  {{$request.data.eventData.number}} выбрана!
                            a: Тема {{$request.data.eventData.number}}!
                    script:
                        addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                
    
                state: ПравильныйОтвет
                        q: [ответ|вариант|номер]
                            @duckling.number:: anyText
                        event: answer
                        if: $request.query != undefined
                            if: $parseTree._anyText < 1
                                a: нет такого ответа!
                            elseif: $parseTree._anyText > 4
                                a: нет такого ответа!
                            else:
                                random:
                                    a: ответ записан!
                                    a: ответ принят!
                                    a: вариант записан!
                                    a: вариант принят!
                                script:
                                    Answer($parseTree._anyText, $context);
                                    addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                        else:
                            random:
                                a: ответ записан!
                                a: ответ принят!
                                a: вариант записан!
                                a: вариант принят! 
                            script:
                                addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                state: СледующийВопрос
                        q: (далее|следующий|вперед) [вопрос]
                        event: next
                        script:
                            Next($parseTree._anyText, $context);
                            addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                state: Меню
                        q: [список тем| меню| играть снова]
                        event: menu
                        script:
                            Menu($parseTree._anyText, $context);
                            addSuggestions(["список тем","выход"], $context);
         
        
                    
    state: СписокТем
        q!: (~список тем| ~играть снова)
        event: list_theme
        random:
            a:Список уже на экране
        script:
            returnTopics($parseTree._anyText, $context);
            addSuggestions(["тема 1", "помощь","выход"], $context);
        go: /ВТемы
        state: ВТемы
            state: ВыборТемы
                    q: (~тема) 
                     @duckling.number:: anyText || fromState = /ВТемы, onlyThisState = true 
                    event: choose_theme || fromState = /ВТемы, onlyThisState = true
                    
                    if: $request.query != undefined
                        if: $parseTree._anyText < 1
                            a: нет такой темы!
                            go: /ВТемы
                        elseif: $parseTree._anyText > 4
                            a: нет такой темы!
                            go: /ВТемы
                        else:
                            random:
                                a: Отлично, {{$request.query}}!
                                a: {{$request.query}}!
                                a: {{$request.query}} выбрана!
                            script:
                                Topic($parseTree._anyText, $context);
                                addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                    else:
                        random:
                            a: Отлично, тема {{$request.data.eventData.number}}!
                            a: Тема  {{$request.data.eventData.number}} выбрана!
                            a: Тема {{$request.data.eventData.number}}!
                            script:
                                addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                    
        
                    state: ПравильныйОтвет
                            q: [ответ|вариант|номер]
                                @duckling.number:: anyText
                            event: answer
                            if: $request.query != undefined
                                if: $parseTree._anyText < 1
                                    a: нет такого ответа!
                                elseif: $parseTree._anyText > 4
                                    a: нет такого ответа!
                                else:
                                    random:
                                        a: ответ записан!
                                        a: ответ принят!
                                        a: вариант записан!
                                        a: вариант принят!
                                    script:
                                        addNote($parseTree._anyText, $context);
                                        addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                            else:
                                random:
                                    a: ответ записан!
                                    a: ответ принят!
                                    a: вариант записан!
                                    a: вариант принят! 
                                script:
                                    addSuggestions(["ответ 1","вариант 2", "номер 3","выход"], $context);
                                
                    
                                    
                            
    state: ПокажиРезультаты || noContext = true
        q!: [покажи](~результаты|~результат)
        event!: show_res
        random:
            a:Уже на экране!
            a:Сейчас покажу!
            a:Конечно!
        if: $request.query != undefined
            script:
                showResults($parseTree._anyText, $context);
                addSuggestions(["сброс","список тем","выход"], $context);
        else:
            script:
                addSuggestions(["сброс","список тем","выход"], $context);
                
            
    state: СбросРезультатов || noContext = true
        q!: (сброс)[результатов][результат]
        event!: del_res
        random:
            a:Сделано!
        if: $request.query != undefined
            script:
                resetResults($parseTree._anyText, $context);
                addSuggestions(["сброс","список тем","выход"], $context);
        else:
            script:
                addSuggestions(["сброс","список тем","выход"], $context);
    
    state: help || noContext=true
        q!: (помощь)
        a:  Чтобы начать игру, необходимо выбрать одну из предпочтительных тем и нажать на кнопку или сказать ее номер.
            Переключение между вопросами происходит после ответа на вопрос и нажатия на кнопку "Следующий вопрос".
            Кнопка «Список тем» возвращает к темам.
        script:
            addSuggestions(["список тем","выход"], $context);
        
        
    state: can || noContext=true
        q!: (что ты умеешь)
        a:Я умею выводить на экран темы и вопросы, также я с удовольствием приму ответ!
        script:
            addSuggestions(["список тем","выход"], $context);
            
    

    state: Goodbye
        q!: (~выход|~выйти)
        event: close
        a: Всего доброго!
        script:
            $response.replies.push({
                type: 'raw',
                body: {
                    items: [
                        {
                            "command": {
                                "type": "close_app"
                            }
                        }
                    ],
                },
            });
            $jsapi.stopSession();    
       
    state: CallBack || noContext=true
        event!: noMatch
        random:
            a: Можете воспользоваться командой "помощь", чтобы получить подробную инструкцию
        script:
            addSuggestions(["список тем", "выход"], $context);
                    
