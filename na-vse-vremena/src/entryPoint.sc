require: slotfilling/slotFilling.sc
  module = sys.zb-common
  
# Подключение javascript обработчиков
require: js/getters.js
require: js/reply.js
require: js/actions.js

# Подключение сценарных файлов
require: sc/Topic.sc


patterns:
    $AnyText = $nonEmptyGarbage
    
theme:/
    state: Start
        #При запуске приложения с кнопки прилетит сообщение /start.
        #event!: start
        q!: $regex</start>
        #q: Запусти Мифология
         #При запуске приложения с голоса прилетит сказанная фраза.
        a: Добро пожаловать в игру «Мифология», которая может помочь запомнить факты из мифологии разных культур. При возникновении вопросов по функционалу игры необходимо сказать слово «Помощь»
           
        
        script:
            addSuggestions(["тема 1", "помощь","выход"], $context);
            
        go: /ВТемы


