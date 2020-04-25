---
id: analiza-design-tworzenie
title: Analiza, design, tworzenie
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Analiza, design, tworzenie" src={useBaseUrl('img/analiza-design.png')} />

Skup się na odbiorcy.

Wyobraź sobie, że kroki przed nami, to:

<img alt="Etapy prjektu" src={useBaseUrl('img/diagram-analiza.png')} />

Zatrzymajmy się na tym. Chodzi na razie o to, żeby przejść cykle analizy i designu[^1] aż będziemy gotowi zacząć tworzyć. Czyli, między innymi, pisać. Te trzy kroki wystarczą na początek.

Nie skupimy się na tym co potem: utrzymujemy treść, dostajemy feedback, analizujemy feedback, designujemy rozwiązanie, wdrażamy je, i tak dalej. Ten cykl się nigdy nie kończy.

## Analiza to nie design

Analiza jest obiektywna. Analizujesz co chcesz osiągnąć. Innymi słowy, kładziesz na stół wszystkie cele. Jakie są Twoje cele? Spełnić **potrzeby** użytkownika.

Na etapie analizy nie proponuj rozwiązań, od tego jest design.

Żeby przeprowadzić analizę, skup się na użytkowniku, nie na produkcie. Nie opisuj funkcjonalności produktu, bo tam są. Opisuj to, co użytkownik potrzebuje osiągnąć.

Żeby zebrać potrzeby użytkownika, przeprowadź wywiady i skonstruuj persony. Możesz o tym przeczytać wszędzie, albo poradzić się UX designera, dlatego nie będziemy się nad tym rozwodzić. Najważniejsze co musisz pamiętać, to rozwinięcie skrótu UX. Bo analizując potrzeby dokumentacyjne, analizujesz całe user experience - doświadczenie użytkownika podczas korzystania z produktu.

W wyniku przeprowadzenia wywiadów i stworzenia person jesteśmy w stanie zidentyfikować potrzeby użytkownika, które mogą mieć następującą formę:

- Użytkownik musi zainstalować wtyczki w gniazdkach i podłączyć je do wifi
- Użytkownik chce ustawić termostat tak, żeby podniósł temperaturę zanim wstanie z pracy i ekspres tak, żeby zrobił kawę do śniadania
- Użytkownik chce, żeby alarm ignorował kota, który szwęda się po domu

## Design pod konkretne potrzeby

Teraz, kiedy na stole leżą potrzeby, spełnijmy je za pomocą dokumentacji.

Najbardziej typowa dokumentacja to “strona z pomocą”, a więc na etapie designu tworzymy jej mapę (sitemap). Czyli listę podstron.

Na podstawie potrzeb, które wynikają z analizy, zrób listę nagłówków. Zamknij się w pokoju z potencjalnymi użytkownikami i poukładajcie razem te nagłówki w sensowną kolejność. Może pogrupujcie je w większe strony, wtedy będzie łatwiej znaleźć je w nawigacji. Na przykład:

| Strona             | Szczegółowe tytuły                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Zainstaluj         | Zainstaluj sensory<br/>Zainstaluj kontrolę napięcia<br/>Zainstaluj oprogramowanie<br/>... |
| Skonfiguruj        | Dodaj użytkownika<br/>Skonfiguruj tryb nocny<br/>...                                      |
| Używaj             | Ustaw timer na ekspresie do kawy<br/>Ustaw budzenie muzyką<br/>Dostosuj termostat do trybu dobowego<br/>...                                      |
| Dodatkowe funkcjonalności       | Głośniki w trybie “follow”<br/>Tymczasowy dostęp do zamka w drzwiach<br/>Pomijanie kota<br/>...                                      |
| Parametry i komendy       | Parametry techniczne<br/>Wymagania sprzętowe<br/>Komendy głosowe<br/>Kody błędów<br/>...                                      |

Zauważ, że nagłówki napisane są w formie “zadań” do wykonania. Piszemy z punktu widzenia użytkownika i to jego potrzeby są najważniejsze. W dokumentacji technicznej często stosuje się podejście “zadaniowe”, bo użytkownik nie czyta dokumentacji tak jak czyta się powieść. Użytkownik próbuje **coś zrobić**. (Najczęściej rozwiązać jakiś problem.)

Ostatnia grupa to informacje podręczne, czyli takie, do których użytkownik wraca, żeby coś sprawdzić. Na przykład, znajdzie tu listę komend lub kodów błędów. Do tej strony użytkownik zapewne będzie wracał częściej niż do innych.

## Wracamy do analizy

Jak już masz design, wróć do kroku analizy i przetestuj go. Posadź użytkownika przez zadaniem i daj mu listę nagłówków. Zapytaj go: “gdzie poszukasz rozwiązania?” Użytkownik nie będzie mógł znaleźć odpowiedniej sekcji - to dobrze. Zapytaj gdzie by jej szukał i tam ją umieść.

Musisz skonfrontować swój design z grupą trzech do pięciu użytkowników. Nie daje to wyników statystycznych, ale wskazuje trendy.

Uważaj jednak, żeby nie przedobrzyć. Nie spędzaj za dużo czasu na cyklu analiza-design, bo zamkniesz się w martwym kręgu. Pamiętaj, że projektujemy dokumentację a nie zastawkę serca. Jak mówią za oceanem: _good enough is good enough_.

## Tworzenie, czyli nie tylko pisanie

Mówi się, że dokumentację się pisze. Jednak rozwój technologiczny sprawił, że tego stwierdzenia nie można traktować dosłownie. Istnieją inne formy przekazu, które mogą sprawdzić się lepiej niż słowo pisane. Twoja analiza i design pokaże co tak naprawdę trzeba zrobić. Może zamiast pisać lepiej będzie stworzyć rysunki, animacje, lub filmiki z tutorialami. Pisanie jest tak naprawdę najtańszym rozwiązaniem, szczególnie jeśli tłumaczysz swoją dokumentację na inne języki. Jeśli jednak zdecydujesz się dodać jakieś multimedia, rozważ wcześniej koszty tłumaczenia.

[^1]: Dlaczego nie “projektowanie” lub “projekt”? Oba te słowa są bardzo ogólne. W tej książce nie staram się sztucznie unikać anglicyzmów, których używamy w branży i design jest tego bardzo dobrym przykładem: to konkretne słowo, którego akurat potrzebujemy.
