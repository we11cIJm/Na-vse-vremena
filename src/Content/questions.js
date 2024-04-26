const data = {
    past: {
        questions: [
            {
                question: "John was so thirsty that he ____ two glasses of water.",
                answers: ["drinked", "drank", "drink", "had drunk"],
                validAnswer: 2,
            },
            {
                question: "Nobody ___ while we were having dinner",
                answers: ["didn`t phone", "did phone", "phoned", "had phoned"],
                validAnswer: 3,
            },
            {
                question: "When I got home, my sister ___ with a kitten.",
                answers: ["was playing", "playing", "were playing", "played"],
                validAnswer: 1,
            },
            {
                question: "Какой персонаж скандинавской мифологии был известен своими путешествиями по морю?",
                answers: ["Рагнарок", "Один", "Эйрик Блутакса", "Локи"],
                validAnswer: 3,
            },
            {
                question: "Кто является отцом богов в скандинавской мифологии?",
                answers: ["Локи", "Один", "Тор", "Браги"],
                validAnswer: 2,
            },
            {
                question: "We ___ tea when our grandparents came.",
                answers: ["were having", "were have", "was having", "was have"],
                validAnswer: 1,
            },
            {
                question: "Кто является богиней любви в скандинавской мифологии?",
                answers: ["Фрейя", "Скальд", "Сиф", "Хела"],
                validAnswer: 1,
            },
            {
                question: "It was my brother`s birthday on Sunday, so I ___ him a postcard.",
                answers: ["sent", "send", "have sent", "sended"],
                validAnswer: 1,
            },
            {
                question: "Какое животное является символом скандинавской мифологии и часто изображается на викингских кораблях?",
                answers: ["Белый медведь", "Волк", "Дракон", "Драккар"],
                validAnswer: 3,
            },
            {
                question: "We ___ last night due to the nasty weather.",
                answers: ["did go out", "didn`t went out", "didn`t go out", "did went out"],
                validAnswer: 3,
            },
            {
                question: "We ___ a New Year tree all morning yesrerday.",
                answers: ["were to decorating", "was decorating", "were decorating", "decorated"],
                validAnswer: 3,
            },
            {
                question: "Как называется мир, в котором пребывают погибшие в битвах в скандинавской мифологии?",
                answers: ["Асгард", "Мидгард", "Валгалла", "Йотунхейм"],
                validAnswer: 3,
            },
            {
                question: "Кто из следующих богов скандинавской мифологии является богом мудрости, поэзии и вдохновения?",
                answers: ["Один", "Тор", "Фрейя", "Бали"],
                validAnswer: 1,
            },
            {
                question: "Mary ___ home when she met her old friend.",
                answers: ["were walking", "was walk", "was walking", "walked"],
                validAnswer: 3,
            },
            {
                question: "Какой герой скандинавской мифологии был известен своим могучим молотом, который мог разрушить все вокруг?",
                answers: ["Тор", "Бальдр", "Хель", "Йормунганд"],
                validAnswer: 1,
            },
        ]
    },
    present: {
        questions: [
            {
                question: "Какое животное помогло Гераклу украсть яблоки Гесперид?",
                answers: ["Конь", "Пегас", "Серебряный бык", "Олень"],
                validAnswer: 4,
            },
            {
                question: "Кто был первым героем, который умер в Троянской войне?",
                answers: ["Ахиллес", "Хризес", "Диомед", "Патрокл"],
                validAnswer: 2,
            },
            {
                question: "Как звали бога ветра и грозы в греческой мифологии?",
                answers: ["Посейдон", "Зевс", "Геракл", "Арес"],
                validAnswer: 2,
            },
            {
                question: "Как называлась женщина, влюбленная в своего сына Адонаиса?",
                answers: ["Антиопа", "Бризейда", "Мира", "Афродита"],
                validAnswer: 4,
            },
            {
                question: "Как звали героя, который смог украсть огонь из Олимпа?",
                answers: ["Пандора", "Прометей", "Гермес", "Геракл"],
                validAnswer: 2,
            },
            {
                question: "Как звали спутника Персея, который помог ему убить Медузу?",
                answers: ["Кассиопея", "Андромеда", "Пегас", "Ариадна"],
                validAnswer: 4,
            },
            {
                question: "Как звали богиню охоты в греческой мифологии?",
                answers: ["Афина", "Гера", "Деметра", "Артемида"],
                validAnswer: 4,
            },
            {
                question: "Как звали бога огня и кузнечного мастерства в греческой мифологии?",
                answers: ["Гефест", "Аполлон", "Арес", "Гермес"],
                validAnswer: 1,
            },
            {
                question: "Как звали бога подземного мира в греческой мифологии?",
                answers: ["Аид", "Посейдон", "Гермес", "Арес"],
                validAnswer: 1,
            },
            {
                question: "Как звали бога света, музыки и поэзии в греческой мифологии?",
                answers: ["Гермес", "Аполлон", "Арес", "Дионис"],
                validAnswer: 2,
            },
            {
                question: "Как звали богиню любви и красоты в греческой мифологии?",
                answers: ["Деметра", "Гестия", "Артемида", "Афродита"],
                validAnswer: 4,
            },
            {
                question: "Как звали бога войны в греческой мифологии?",
                answers: ["Геракл", "Арес", "Гермес", "Аполлон"],
                validAnswer: 2,
            },
            {
                question: "Как звали бога моря в греческой мифологии?",
                answers: ["Прометей", "Посейдон", "Геракл", "Гермес"],
                validAnswer: 2,
            },
            {
                question: "Кто была богиней мудрости?",
                answers: ["Гера", "Афина", "Артемида", "Афродита"],
                validAnswer: 2,
            },
            {
                question: "Кто был богом моря и землетрясений?",
                answers: ["Аид", "Дионис", "Посейдон", "Геракл"],
                validAnswer: 3,
            },
        ]
    },
    future: {
        questions: [
            {
                question: "Египетская богиня с причудливой головой льва?",
                answers: ["Исис", "Нефертум", "Секхмет", "Хатхор"],
                validAnswer: 3,
            },
            {
                question: "Каким прозвищем называли египетскую богиню неба Нут?",
                answers: ["Владычица бесконечности", "Королева вселенной", "Хранитель небесных тел", "Матерь звезд"],
                validAnswer: 1,
            },
            {
                question: "Как звали богиню защиты и домашнего очага в египетской мифологии?",
                answers: ["Сехмет", "Маат", "Бастет", "Нефертум"],
                validAnswer: 3,
            },
            {
                question: "Как звали бога смерти и тьмы в египетской мифологии?",
                answers: ["Анубис", "Озирис", "Сет", "Хор"],
                validAnswer: 3,
            },
            {
                question: "Какая из египетских богинь была покровительницей материнства?",
                answers: ["Бастет", "Хатхор", "Иштар", "Мут"],
                validAnswer: 2,
            },
            {
                question: "Какое животное является символом магических свойств и бесконечности?",
                answers: ["Скорпион", "Жук-некрофаг", "Кальмар", "Змея"],
                validAnswer: 4,
            },
            {
                question: "Как называется миф, описывающий борьбу Ра с Апопом, стоящим на пути солнца?",
                answers: ["О Тифоне", "Об Изиде и Озирисе", "Об Уаджет-глазе", "Об Апопи"],
                validAnswer: 4,
            },
            {
                question: "Как звали бога жизни и плодородия в египетской мифологии?",
                answers: ["Озирис", "Сет", "Хор", "Себек"],
                validAnswer: 4,
            },
            {
                question: "Как звали богиню неба в египетской мифологии?",
                answers: ["Ра", "Нут", "Бастет", "Сехмет"],
                validAnswer: 2,
            },
            {
                question: "Как звали бога мертвых в египетской мифологии?",
                answers: ["Анубис", "Ра", "Озирис", "Сет"],
                validAnswer: 1,
            },
            {
                question: "Как звали богиню материнства и плодородия в египетской мифологии?",
                answers: ["Сехмет", "Бастет", "Маат", "Изида"],
                validAnswer: 4,
            },
            {
                question: "Кто был главным богом в египетской мифологии?",
                answers: ["Анубис", "Ра", "Озирис", "Хор"],
                validAnswer: 2,
            },
            {
                question: "Какое животное было священным символом богини Исиды?",
                answers: ["Крокодил", "Сокол", "Кошка", "Кролик"],
                validAnswer: 4,
            },
            {
                question: "Какой бог был символом солнца и создателем мира?",
                answers: ["Ра", "Тот", "Хор", "Озирис"],
                validAnswer: 1,
            },
            {
                question: "Как назывался бог баланса и справедливости?",
                answers: ["Гор", "Анубис", "Маат", "Амон"],
                validAnswer: 3,
            },
        ]
    }
};

export default data;