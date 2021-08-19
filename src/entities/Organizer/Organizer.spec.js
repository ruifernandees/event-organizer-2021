import { Lecture } from '../Lecture';
import { Organizer } from "./Organizer";

describe('Organize Event Use Case', () => {
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

    const track1Morning = [
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
    ]

    it ('Should return the morning events of track 1', () => {
        const maxMinutesMorning = 180;
        const maxMinutesAfternoon = 180;
        
        const organizer = new Organizer(lectures, maxMinutesMorning);
        
        const result = organizer.getBestCombination(0, organizer.maxMinutes);

        expect(result.lectures).toEqual(track1Morning);
    });
});