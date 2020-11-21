---
id: po-co-nam-dokumentacja
title: Po co nam dokumentacja?
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Po co nam dokumentacja?" src={useBaseUrl('img/po-co-doku.png')} />

Dokumentacja jest dla użytkownika.

Jeśli to wiesz i nie potrzebujesz, żebym Cię przekonywał, przejdź do następnego
rozdziału.

Jeżeli uważasz, że dokumentacja jest niepotrzebna, to być może masz rację. Nie
zawsze jest potrzebna. Jednak zachęcam Cię do czytania dalej.

Jeżeli chcesz przekonać swoje szefostwo, ale nie wiesz jak, to zdecydowanie
czytaj dalej.

Tak naprawdę, jest wiele rodzajów dokumentacji i trochę tu upraszczam.
Dokumentacja projektowa (wymagania, sprawozdania), biznesowa (umowy, aneksy do
umów, aneksy do aneksów), czy firmowa (“minutki” ze spotkań, maile) to jedna
sprawa. Ale tutaj piszemy o **dokumentacji użytkownika**, czyli takiej, która
**pozwala użytkownikowi używać Twojego produktu**.

Jeżeli Twoja aplikacja, jest wystarczająco prosta i ma dobrze zaprojektowany
interfejs, to prawdopodobnie nie potrzebuje dokumentacji. Ale jeżeli:

-   Tworzysz coś bardziej skomplikowanego, gdzie jest wiele możliwych
    scenariuszy użycia i odkrycie ich wszystkich wymaga znajomości aplikacji
-   Tworzysz coś, czego używa się pisząc kod
-   Tworzysz intuicyjną aplikację dla konsumentów, ale zarabiasz na firmach,
    które jej używają

...to potrzebujesz dokumentacji dla użytkowników.

## Skomplikowana aplikacja

Większość aplikacji dla przedsiębiorstw to “skomplikowane aplikacje”. Nawet
jeśli interfejs jest zupełnie intuicyjny, użytkownik powinien robić więcej niż
to, co przypadkiem odkryje. Poza tym oszczędzi czas, jeśli napiszemy mu jak
osiągnąć cel.

Przykładem takiej aplikacji może być Microsoft Word. Kiedy zaczynam pisać, widzę
kontrolki, które pozwalają mi zmienić wielkość czcionki i pogrubienie. Więc
zaczynam: “Rozdział 1”. Zwiększam czcionkę do 24, dodaję pogrubienie. Potem parę
razy enter, żeby był odstęp. Zmniejszam czcionkę do 10, usuwam pogrubienie.
“Pewnego razu, Marcin poszedł na ryby...”

Fajnie mi się pisze. Marcin ma różne przygody na rybach, ale teraz pora
wprowadzić drugiego bohatera, Kamila. Najlepiej w nowym rozdziale.

Parę razy naciskam enter, żeby tekst zaczynał się na nowej stronie. Czcionka na
24, pogrubienie. “Rozdział 2”.

Parę razy enter. Czcionka na 9. Nie, chyba było 10? Tak, 10! Piszę dalej.

Sporo tego mam, przydałby się spis treści. Ale spoko, Word jest intuicyjny, więc
znajduję opcję Wstaw, potem Spis treści... Wstawił się, ale jest pusty.

Jaki popełniłem błąd? Trzeba było użyć stylów. Tytuł rozdziału oznaczyć jako
Nagłówek 1, a tekst rozdziału jako Normalny. Nie muszę pamiętać jakich wielkości
czcionek używam. I jak dopiszę jakieś zdanie, to nie będę musiał poprawiać gdzie
się ma zaczynać następna strona. A jak wstawię spis treści, to nagłówki i numery
stron się same wygenerują.

Taka jest dobra praktyka pracy w Wordzie. Ale skąd miałbym to wiedzieć?

Mógłbym się dowiedzieć z dokumentacji -e strony “Jak zacząć pisać w Wordzie”,
albo “Jak napisać powieść w Wordzie”. (O nagłówkach powiemy sobie później.)

## Aplikacja dla programistów

Przykładem tutaj może być dowolna implementacja Domain Object Model.

Jeżeli to zbyt techniczne dla Ciebie, pomiń dwa następne akapity i czytaj dalej
od strzałki.

Wyobraź sobie, że nic nie wiem o tym jak działa DOM i muszę dojść do tego z
opisów klas i metod. Chcę przejść przez dokument XML i zamienić taga “data
wydania” na atrybut. Zaczynam od wczytania dokumentu, potem próbuję znaleźć
wszystkie tagi “data wydania” i nadpisać ich wartość. Nie wiem jeszcze jak
stworzyć atrybut, czy mogę nadpisać w miejscu czy muszę zrobić kopię i zapisać
moje zmiany. Nie mówiąc już o dostępnych narzędziach i pomocnych metodach,
wydajności różnych readerów, używaniu XPath albo XSL...

Wskakuję na StackOverflow i kopiuję stamtąd bloki kodu. Uczę się przy okazji
metod, które pojawiają się w wynikach Google jako **pierwsze**, co może znaczyć,
że są **najstarsze**.

Jako twórca tej implementacji DOM pewnie chciałbyś, żebym skorzystał z
najnowszych funkcjonalności, ale skąd ja mogę o nich wiedzieć?

⬇

Jeżeli tworzysz bibliotekę, framework, lub API, to na pewno rozumiesz dlaczego
dokumentacja jest NIEODZOWNA. Nikt nie zgadnie jaki kod pisać, żeby działało.
Możesz im udostępnić swoje źródła i liczyć na to, że z nich się nauczą, ale w
większości przypadków to nie jest praktyczne.

Dokumentacja z komentarzy w kodzie jest ok. Zwłaszcza, jeżeli pokazuje się w
zintegrowanym środowisku programistycznym (IDE) Twoich użytkowników. Ale nie
zawsze wystarczy, żeby wytłumaczyć jak coś ma działać. A zwłaszcza jak zacząć.

Napisz kilka stron o tym jak zacząć i jak wdrożyć typowe funkcjonalności. Nawet
jeśli większość użytkowników przeczyta tylko próbki kodu, to i tak im pomogłeś.
Poza tym słowa wokół próbek też się komuś przydadzą.

## Zaplecze dla użytkowników komercyjnych

Niektóre aplikacje nie wymagają instrukcji. Użytkownicy po prostu zaczynają ich
używać i powoli stają się w tym dobrzy. A ty zarabiasz na tym, że w Twojej
aplikacji biorą też udział firmy, które na tych użytkowników polują.

Przykładem takiej aplikacji w moich czasach (nie wiem, kiedy to czytasz) jest
Snapchat.

Ludzie na Snapchacie tworzą swoje “historyjki”, czyli posty które składają się
ze zdjęć lub filmików z opisami. Każda historyjka jest dostępna przez kilka
godzin, a potem znika na zawsze. Dlaczego ktoś tego używa? Bo to fajne.

Na Snapchacie jest wielu użytkowników (w moich czasach!), więc pojawiają się
firmy, które chcą do tych użytkowników trafić ze swoimi produktami. I na tych
firmach Snapchat zarabia.

Pracownik firmy, która reklamuje się na Snapchacie chce używać Snapchata
prawidłowo, zgodnie z zamiarem autorów aplikacji. Do tego chce go używać tak,
jak użytkownicy, którzy sami odkryli sekrety Snapchata. Dlatego właśnie ta
aplikacja ma bardzo rozległą i szczegółową dokumentację.

99% użytkowników nawet nie będzie wiedziało, że ta dokumentacja istnieje. Ale
ten 1% który płaci, na pewno z niej skorzysta.
