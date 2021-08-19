import { Lecture } from "../../entities/Lecture";
import { LectureSet } from "../../entities/LectureSet";
import { Track } from "../../entities/Track";
import { OrganizeEventUseCase } from "./OrganizeEventUseCase";

describe("Organize Event Use Case", () => {
    const lectures = [
        new Lecture(
            "Diminuindo tempo de execução de testes em aplicações Rails enterprise", 
            60,
            "Diminuindo tempo de execução de testes em aplicações Rails enterprise 60min"
         ),
        new Lecture(
            "Reinventando a roda em ASP clássico", 
            45,
            "Reinventando a roda em ASP clássico 45min"
         ),
        new Lecture(
            "Apresentando Lua para as massas", 
            30,
            "Apresentando Lua para as massas 30min"
         ),
        new Lecture(
            "Erros de Ruby oriundos de versões erradas de gems", 
            45,
            "Erros de Ruby oriundos de versões erradas de gems 45min"
         ),
        new Lecture(
            "Erros comuns em Ruby", 
            45,
            "Erros comuns em Ruby 45min"
         ),
        new Lecture(
            "Rails para usuários de Django", 
            5,
            "Rails para usuários de Django lightning"
         ),
        new Lecture(
            "Trabalho remoto: prós e cons", 
            60,
            "Trabalho remoto: prós e cons 60min"
         ),
        new Lecture(
            "Desenvolvimento orientado a gambiarras", 
            45,
            "Desenvolvimento orientado a gambiarras 45min"
         ),
        new Lecture(
            "Aplicações isomórficas: o futuro (que talvez nunca chegaremos)", 
            30,
            "Aplicações isomórficas: o futuro (que talvez nunca chegaremos) 30min"
         ),
        new Lecture(
            "Codifique menos, Escreva mais!", 
            30,
            "Codifique menos, Escreva mais! 30min"
         ),
        new Lecture(
            "Programação em par", 
            45,
            "Programação em par 45min"
         ),
        new Lecture(
            "A mágica do Rails: como ser mais produtivo", 
            60,
            "A mágica do Rails: como ser mais produtivo 60min"
         ),
        new Lecture(
            "Ruby on Rails: Por que devemos deixá-lo para trás", 
            60,
            "Ruby on Rails: Por que devemos deixá-lo para trás 60min"
         ),
        new Lecture(
            "Clojure engoliu Scala: migrando ha aplicação", 
            45,
            "Clojure engoliu Scala: migrando ha aplicação 45min"
         ),
        new Lecture(
            "Ensinando programação nas grotas de Maceió", 
            30,
            "Ensinando programação nas grotas de Maceió 30min"
         ),
        new Lecture(
            "Ruby vs. Clojure para desenvolvimento backend", 
            30,
            "Ruby vs. Clojure para desenvolvimento backend 30min"
         ),
        new Lecture(
            "Manutenção de aplicações legadas em Ruby on Rails", 
            60,
            "Manutenção de aplicações legadas em Ruby on Rails 60min"
         ),
        new Lecture(
            "Um mundo sem StackOverflow", 
            30,
            "Um mundo sem StackOverflow 30min"
         ),
        new Lecture(
            "Otimizando CSS em aplicações Rails", 
            30,
            "Otimizando CSS em aplicações Rails 30min"
         ),
     ];

    const track1Morning = new LectureSet();
    track1Morning.timeOfLectures = 180;
    track1Morning.lectures = [
        new Lecture(
            "Diminuindo tempo de execução de testes em aplicações Rails enterprise", 
            60,
            "Diminuindo tempo de execução de testes em aplicações Rails enterprise 60min",
            "09:00"
         ),
        new Lecture(
            "Reinventando a roda em ASP clássico", 
            45,
            "Reinventando a roda em ASP clássico 45min",
            "10:00"
         ),
        new Lecture(
            "Apresentando Lua para as massas", 
            30,
            "Apresentando Lua para as massas 30min",
            "10:45"
         ),
        new Lecture(
            "Erros de Ruby oriundos de versões erradas de gems", 
            45,
            "Erros de Ruby oriundos de versões erradas de gems 45min",
            "11:15"
        ),
        new Lecture(
            "Almoço",
            0,
            "Almoço",
            "12:00"
        )
    ]

    const track1Afternoon = new LectureSet();
    track1Afternoon.timeOfLectures = 240;
    track1Afternoon.lectures = [
        new Lecture(
            "Erros comuns em Ruby", 
            45,
            "Erros comuns em Ruby 45min",
            "13:00"
        ),
        new Lecture(
            "Trabalho remoto: prós e cons", 
            60,
            "Trabalho remoto: prós e cons 60min",
            "13:45"
        ),
        new Lecture(
            "Desenvolvimento orientado a gambiarras", 
            45,
            "Desenvolvimento orientado a gambiarras 45min",
            "14:45"
        ),
        new Lecture(
            "Aplicações isomórficas: o futuro (que talvez nunca chegaremos)", 
            30,
            "Aplicações isomórficas: o futuro (que talvez nunca chegaremos) 30min",
            "15:30"
        ),
        new Lecture(
            "Codifique menos, Escreva mais!", 
            30,
            "Codifique menos, Escreva mais! 30min",
            "16:00"
        ),
        new Lecture(
            "Ensinando programação nas grotas de Maceió", 
            30,
            "Ensinando programação nas grotas de Maceió 30min",
            "16:30"
        ),
        new Lecture(
            "Evento de Networking",
            0,
            "Evento de Networking",
            "17:00"
        ),
    ];

    const track2Morning = new LectureSet();
    track2Morning.timeOfLectures = 180;
    track2Morning.lectures = [
        new Lecture(
            "Programação em par", 
            45,
            "Programação em par 45min",
            "09:00"
        ),
        new Lecture(
            "A mágica do Rails: como ser mais produtivo", 
            60,
            "A mágica do Rails: como ser mais produtivo 60min",
            "09:45"
        ),
        new Lecture(
            "Clojure engoliu Scala: migrando ha aplicação", 
            45,
            "Clojure engoliu Scala: migrando ha aplicação 45min",
            "10:45"
        ),
        new Lecture(
            "Ruby vs. Clojure para desenvolvimento backend", 
            30,
            "Ruby vs. Clojure para desenvolvimento backend 30min",
            "11:30"
        ),
        new Lecture(
            "Almoço",
            0,
            "Almoço",
            "12:00"
        )
    ];

    const track2Afternoon = new LectureSet();
    track2Afternoon.timeOfLectures = 185;
    track2Afternoon.lectures = [
        new Lecture(
            "Rails para usuários de Django", 
            5,
            "Rails para usuários de Django lightning",
            "13:00"
        ),
        new Lecture(
            "Ruby on Rails: Por que devemos deixá-lo para trás", 
            60,
            "Ruby on Rails: Por que devemos deixá-lo para trás 60min",
            "13:05"
        ),
        new Lecture(
            "Manutenção de aplicações legadas em Ruby on Rails", 
            60,
            "Manutenção de aplicações legadas em Ruby on Rails 60min",
            "14:05"
        ),
        new Lecture(
            "Um mundo sem StackOverflow", 
            30,
            "Um mundo sem StackOverflow 30min",
            "15:05"
        ),
        new Lecture(
            "Otimizando CSS em aplicações Rails", 
            30,
            "Otimizando CSS em aplicações Rails 30min",
            "15:35"
        ),
        new Lecture(
            "Evento de Networking",
            0,
            "Evento de Networking",
            "16:05"
        )
    ];

    const trackA = new Track("Track A", track1Morning, track1Afternoon);
    const trackB = new Track("Track B", track2Morning, track2Afternoon);

    const event = [
        trackA,
        trackB 
    ];

    it ("Should return right result", () => {
        const organizeEventUseCase = new OrganizeEventUseCase();
        const result = organizeEventUseCase.execute(lectures);

        expect(result).toEqual(event);
    });
});