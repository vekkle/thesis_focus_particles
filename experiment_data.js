var shuffleSequence = seq("intro", "instructions", sepWith("sep", seq("practice", rshuffle(rshuffle("f1", "f2", "f3"), rshuffle("s_adjacent", "s_distant")))));
var practiceItemTypes = ["practice"];
var practiceItemMessage = "Тренировочные предложения";
var completionMessage = "Эксперимент завершён, результаты сохранены на сервере. Спасибо за участие!";

var defaults = [
    "Separator", {
        transfer: 1000,
        ignoreFailure: true,
        normalMessage: "Загрузка следующего предложения...",
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "DashedAcceptabilityJudgment", {
        q: "Оцените только что прочитанное предложение по шкале от 1 «ужасно, так не говорят» до 7 «отлично, так можно сказать».",
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        leftComment: "плохо",
        rightComment: "хорошо",
        mode: "self-paced reading"
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [
    ["sep", "Separator", { }],
    ["intro", "Form", {
        html: { include: "exp_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Неправильное значение возраста: \u2018age\u2019"; }
        }
    } ],
    ["instructions", "Message", {html: { include: "instructions.html" }} ],

    //
    // Six practice items for self-paced reading (all in the SPR mode, 3/6 with an acceptability judgement task).
    //
                
    ["practice", "DashedSentence", {s: "Это тренировочные предложения, которые позволят вам привыкнуть к такому способу чтения и оценке предложений."}],
    ["practice", "DashedSentence", {s: "Все испытуемые психолингвистов любят проходить забавные эксперименты со смешными стимулами."},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Вы — испытуемый психолингвистов. Вы любите проходить эксперименты?",
                              as: ["Да", "Очень!"]}],
    ["practice", "DashedSentence", {s: "Каждому следующему предложению нужно будет поставить оценку по шкале от 1 до 7."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Этому прекрасному предложению нужно поставить высокую оценку, в нём всё хорошо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Предложение это ужасное, ставить единица нужно, тут всё очень плохо."}],
    ["practice", "DashedAcceptabilityJudgment", {s: "Это последнее тренировочное предложение, после которого начнётся эксперимент."}],
    ["practice", "FlashSentence", {s: "Мы начинаем!"}],
    
    //
    // 20 "real" (i.e. non-filler) self-paced reading items with acceptability judgment tasks.
    // There are two conditions. Thus, in each group there are two sentence variants for a specific context.
    // Stimuli presentation is based on a latin square rool: each participant is presented with 10 itemps per
    // every condition, resulted in 20 experimental sentences total.
    //
    
    [["s_adjacent", 1], "DashedAcceptabilityJudgment", {s: "Никита вешает только костюмы в шкаф для одежды, а рубашки складывает в комод."}],
    [["s_distant", 1], "DashedAcceptabilityJudgment", {s: "Никита только вешает костюмы в шкаф для одежды, а рубашки складывает в комод."}],
    [["s_adjacent", 2], "DashedAcceptabilityJudgment", {s: "Убийца ворует только кошелёк с тел своих жертв, но не берёт драгоценности и телефон."}],
    [["s_distant", 2], "DashedAcceptabilityJudgment", {s: "Убийца только ворует кошелёк с тел своих жертв, но не берёт драгоценности и телефон."}],
    [["s_adjacent", 3], "DashedAcceptabilityJudgment", {s: "Зоолог жалеет только обезьян в научных экспериментах, потому что они больше всего похожи на человека."}],
    [["s_distant", 3], "DashedAcceptabilityJudgment", {s: "Зоолог только жалеет обезьян в научных экспериментах, потому что они больше всего похожи на человека."}],
    [["s_adjacent", 4], "DashedAcceptabilityJudgment", {s: "Леонид выдаёт только брошюры на стойке регистрации, фирменные значки и футболки раздают другие люди."}],
    [["s_distant", 4], "DashedAcceptabilityJudgment", {s: "Леонид только выдаёт брошюры на стойке регистрации, фирменные значки и футболки раздают другие люди."}],
    [["s_adjacent", 5], "DashedAcceptabilityJudgment", {s: "Пионер катает только тележку по двору лагеря, все самокаты уже убрали."}],
    [["s_distant", 5], "DashedAcceptabilityJudgment", {s: "Пионер только катает тележку по двору лагеря, все самокаты уже убрали."}],
    [["s_adjacent", 6], "DashedAcceptabilityJudgment", {s: "Данила кидает только снаряды на очень большое расстояние, а обычные предметы на такое расстояние забросить не сможет."}],
    [["s_distant", 6], "DashedAcceptabilityJudgment", {s: "Данила только кидает снаряды на очень большое расстояние, а обычные предметы на такое расстояние забросить не сможет."}],
    [["s_adjacent", 7], "DashedAcceptabilityJudgment", {s: "Учёный роняет только заметки на пол лаборатории, а вот распечатки статей он аккуратно хранит на столе."}],
    [["s_distant", 7], "DashedAcceptabilityJudgment", {s: "Учёный только роняет заметки на пол лаборатории, а вот распечатки статей он аккуратно хранит на столе."}],
    [["s_adjacent", 8], "DashedAcceptabilityJudgment", {s: "Атаман уносит только золото во время набега на деревню, всё остальное он считает не таким ценным."}],
    [["s_distant", 8], "DashedAcceptabilityJudgment", {s: "Атаман только уносит золото во время набега на деревню, всё остальное он считает не таким ценным."}],
    [["s_adjacent", 9], "DashedAcceptabilityJudgment", {s: "Геолог ломает только приборы во время работы, однако с университетским ноутбуком он обращается аккуратно."}],
    [["s_distant", 9], "DashedAcceptabilityJudgment", {s: "Геолог только ломает приборы во время работы, однако с университетским ноутбуком он обращается аккуратно."}],
    [["s_adjacent", 10], "DashedAcceptabilityJudgment", {s: "Боярин кушает только курицу за ужином, говядина и свинина ему не по нраву."}],
    [["s_distant", 10], "DashedAcceptabilityJudgment", {s: "Боярин только кушает курицу за ужином, говядина и свинина ему не по нраву."}],
    [["s_adjacent", 11], "DashedAcceptabilityJudgment", {s: "Уродец пугает только горожан на площади, деревенские жители, приехавшие в город, к его виду привыкли."}],
    [["s_distant", 11], "DashedAcceptabilityJudgment", {s: "Уродец только пугает горожан на площади, деревенские жители, приехавшие в город, к его виду привыкли."}],
    [["s_adjacent", 12], "DashedAcceptabilityJudgment", {s: "Китаец отдаёт только бумагу на переработку, хотя пластиковые бутылки тоже можно сдавать."}],
    [["s_distant", 12], "DashedAcceptabilityJudgment", {s: "Китаец только отдаёт бумагу на переработку, хотя пластиковые бутылки тоже можно сдавать."}],
    [["s_adjacent", 13], "DashedAcceptabilityJudgment", {s: "Биолог радует только физиков на университетской конференции, потому что для химиков его исследования не очень интересны."}],
    [["s_distant", 13], "DashedAcceptabilityJudgment", {s: "Биолог только радует физиков на университетской конференции, потому что для химиков его исследования не очень интересны."}],
    [["s_adjacent", 14], "DashedAcceptabilityJudgment", {s: "Ученик решает только задачи на умножение дробей, а все тестовые задания он оставил на потом."}],
    [["s_distant", 14], "DashedAcceptabilityJudgment", {s: "Ученик только решает задачи на умножение дробей, а все тестовые задания он оставил на потом."}],
    [["s_adjacent", 15], "DashedAcceptabilityJudgment", {s: "Японец рисует только пейзажи на заказ, хотя неплохо умеет работать и в жанре портрета."}],
    [["s_distant", 15], "DashedAcceptabilityJudgment", {s: "Японец только рисует пейзажи на заказ, хотя неплохо умеет работать и в жанре портрета."}],
    [["s_adjacent", 16], "DashedAcceptabilityJudgment", {s: "Офицер ругает только рядовых за малейшие ошибки, подчинённые старше по званию уже не боятся его криков."}],
    [["s_distant", 16], "DashedAcceptabilityJudgment", {s: "Офицер только ругает рядовых за малейшие ошибки, подчинённые старше по званию уже не боятся его криков."}],
    [["s_adjacent", 17], "DashedAcceptabilityJudgment", {s: "Китаец сажает только капусту около колодца, ягоды там почему-то не растут."}],
    [["s_distant", 17], "DashedAcceptabilityJudgment", {s: "Китаец только сажает капусту около колодца, ягоды там почему-то не растут."}],
    [["s_adjacent", 18], "DashedAcceptabilityJudgment", {s: "Валера теряет только работу из-за режима самоизоляции, друзья его не покинут ни при каких обстоятельствах."}],
    [["s_distant", 18], "DashedAcceptabilityJudgment", {s: "Валера только теряет работу из-за режима самоизоляции, друзья его не покинут ни при каких обстоятельствах."}],
    [["s_adjacent", 19], "DashedAcceptabilityJudgment", {s: "Михаил увозит только технику на новое место, за перевозку мебели отвечает Иван."}],
    [["s_distant", 19], "DashedAcceptabilityJudgment", {s: "Михаил только увозит технику на новое место, за перевозку мебели отвечает Иван."}],
    [["s_adjacent", 20], "DashedAcceptabilityJudgment", {s: "Оратор читает только заметку из популярного блога, серьёзные статьи он решил отложить на потом."}],
    [["s_distant", 20], "DashedAcceptabilityJudgment", {s: "Оратор только читает заметку из популярного блога, серьёзные статьи он решил отложить на потом."}],

    //
    // 30 self-paced-reading filler sentences with acceptability judgement tasks (in order
    // to distract the participant, data from these sentences are not analysed).
    //

    ["f1", "DashedAcceptabilityJudgment", {s: "Это случилось однажды вечером, когда я читал книгу о приключениях морских разбойников."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Схватив булочку, посыпанную маком, он откусил сразу столько, что сделался похожим на хомяка."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Каждый будний день после обеда в колледже начинается время отдыха, под которым чаще всего подразумеваются занятия спортом."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Клиенты не просто размещают ролики, а являются спонсорами или производителями специализированных программ."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "По свидетельству экспертов, даже те, кто всё-таки возвращается после учёбы, всё равно надолго не задерживаются."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "У нас слишком много общих дел, чтобы позволить себе увязнуть в спорах по проблемам, принадлежащим прошлому."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Руководство павильона приглашает мастеров к участию в фестивалях и конкурсах."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Жизнь создаёт условия, подобные экспериментальным, и исследователи используют эти уникальные ситуации."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Авторы доклада доказывают необходимость кардинально пересмотреть подход к использованию ресурсов."}],
    ["f1", "DashedAcceptabilityJudgment", {s: "Критики отмечали, что авторы проводят параллели с другим произведением Достоевского ― «Преступлением и наказанием»."}],

    ["f2", "DashedAcceptabilityJudgment", {s: "Превышение пользовательских прав возможно лишь с разрешения и под наблюдением администратора системы."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Мне было странно даже подумать, что когда-то мы с Лешкой не могли надышаться друг на друга. "}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Трое храбрых девочек направились прямиком в лес, чтобы помочь своим друзьям, оказавшимся в беде."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Лишь известный хирург Апресян смогла поставить правильный диагноз ребёнку, поскольку наблюдала его с рождения."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Они зашли в помещение и сразу же сняли с себя шляпу, как делают все настоящие джентельмены."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Подавляющее большинство респондентов проголосовали за возвращение парка на прежнее место."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Инесса была прекрасный организатор и чуткий товарищ, и эти качества ценили её коллеги."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "В Измайлове строятся десять двенадцатиэтажных домов, квартиры в которых будут продавать через агентства."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "В свои неполные тридцать лет его трудовой стаж исчислялся полутора годами, что удивляло рекрутеров."}],
    ["f2", "DashedAcceptabilityJudgment", {s: "Писатель размышлял над проблемой хищнического отношения к природе в новом очерке для газеты."}],

    ["f3", "DashedAcceptabilityJudgment", {s: "За короткий срок в городе-спутнике построены не только новые школа, больница, а также драматический театр и библиотека."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Обратившись к эндокринологу, мне врач посоветовал принимать новое лекарство, а старое неэффективно."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Только за последнее время принятые законы об охране здоровья, укреплении семьи, водопользовании."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Предложение Максима было ни на чём не обосновано, но Катя решила закрыть на это глаза."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Книги помогают нам в учёбе и выбрать профессию, о чём не перестают напоминать учителя."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Факты говорят за возможность использования этих учебников для подготовки к не только экзаменам, но и олимпиадам."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Классный руководитель отругал ребят, кто постоянно прогуливали занятия, а затем рассказал про подготовку к выпускному."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Врач Иванова подчеркнул о необходимости учитывать возраст пациентов при назначении антибиотиков."}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Командир крикнул, что вперёд, ребята, вы сможете прорваться через построение врага, я в вас верю!"}],
    ["f3", "DashedAcceptabilityJudgment", {s: "Жильцы требовали не только проведения ремонта, а также устранения неполадок, однако ЖКХ их игнорировали."}]

];