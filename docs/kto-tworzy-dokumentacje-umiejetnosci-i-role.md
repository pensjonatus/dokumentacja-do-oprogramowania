---
id: kto-tworzy-dokumentacje-umiejetnosci-i-role
title: Kto tworzy dokumentację (umiejętności i role)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Po co nam dokumentacja?" src={useBaseUrl('img/kto-tworzy.png')} />

W fazie wdrożenia, zabieramy się za pisanie (czy też tworzenie treści w innej
formie). Czujemy trochę, że pisanie to sporo pracy, dlatego zanim na dobre się
tym zajmiemy, zastanówmy się kto powinien zajmować się tworzeniem dokumentacji.
W zależności od skali przedsięwzięcia, naszą dokumentacją może zajmować się
jeden człowiek albo cały zespół.

## Role związane z dokumentacją

W procesie tworzenia dokumentacji do obsadzenia są następujące role:

1. Ktoś ustala wymagania dotyczące dokumentacji.
2. Ktoś pisze dokumentację.
3. Ktoś ją opiniuje.
4. Ktoś ją publikuje (potrzebna jest strona z dokumentacją lub coś podobnego).

## Wymagane umiejętności i zasoby

Każda rola wymaga odpowiedniego zestawu umiejętności i zasobów.

### Dla kogoś, kto ustala wymagania dotyczące dokumentacji

Taka osoba musi znać potrzeby użytkowników. Najlepiej, żeby ich nie wymyślała,
ani nie zgadywała, tylko je zbadała.

Wymagane umiejętności:

-   Przeprowadzanie badań i wywiadów (często stosowane w UX designie)
-   Analiza wyników badań
-   Priorytetyzacja wymagań

Wymagane zasoby:

-   Dostęp do użytkowników

### Dla kogoś, kto pisze dokumentację

Wymagane umiejętności:

-   Jasne i zwięzłe pisanie
-   Pisanie dla konkretnej publiki
-   Znajomość produktu

Wymagane zasoby:

-   Dostęp do wyników badań potrzeb użytkownika
-   Dostęp do produktu, żeby testować dokumentację
-   Dostęp do ekspertów, żeby wyjaśniać wątpliwości i zawiłości techniczne
-   Dostęp do edytora - kogoś kto zrobi korektę, poprawi styl, i zadba o
    spójność przekazu pochodzącego od różnych autorów.

### Dla kogoś, kto opiniuje dokumentację

Wymagane umiejętności:

-   Znajomość produktu, żeby potwierdzić, czy informacje w dokumentacji są
    prawdziwe

Wymagane zasoby:

-   Dostęp do produktu, żeby testować dokumentację
-   Dostęp do wyników badań potrzeb użytkownika, żeby zweryfikować czy
    dokumentacja spełnia te potrzeby
-   Dostęp do ekspertów, żeby wyjaśniać wątpliwości i zawiłości techniczne,
    które mogą wyniknąć podczas testowania.

### Dla kogoś, kto publikuje dokumentację

Wymagane umiejętności:

-   Tworzenie stron/portali/książek, czy innych form przekazu dokumentacji
-   Tworzenie zautomatyzowanych buildów i deploymentów, CI/CD, automatyczne
    testy weryfikacyjne, itp.

Wymagane zasoby:

-   Dostęp do odpowiednich narzędzi i technologii (na przykład CCMSa z
    możliwościami publikacji)
-   Dostęp do zespołów wspierających infrastrukturę i procesy dostarczania
    oprogramowania w celu uzyskania wsparcia i stosowania dobrych praktyk

## Potencjalni kandydaci

Poszczególne role mogą być obsadzone przez następujące osoby.

### Programista

Tworzy aplikację i przez to zna ją najlepiej. Ale czy pisanie dokumentacji to
jest najlepszy użytek jego czasu? Programistów zatrudnia się po to, żeby pisali
kod, bo na tym najlepiej się znają. W tym obszarze programiści pracują
najbardziej wydajnie, więc czas ich pracy jest dobrze spożytkowany. Biorąc pod
uwagę wysokość ich zarobków, warto się zastanowić czy nie lepiej oddać tworzenie
dokumentacji osobie wyspecjalizowanej właśnie w tej dziedzinie.

Poza tym, ktoś kto tworzy aplikację może mieć inną perspektywę niż użytkownik.
Programiście bardzo dużo czasu zajęło wdrożenie odpowiedniej wersji SNMP, albo
zgodności ze standardem X, Y, lub Z. Naturalnie w jego głowie ta sprawa wydaje
się bardzo ważna, podczas gdy może nie ma w ogóle znaczenia dla użytkownika.

Wyjątkiem jest oprogramowanie dla programistów - wtedy programista naturalnie ma
odpowiednią perspektywę.

### Analityk biznesowy

Ma kontakt z klientem i zna jego potrzeby. Na ich podstawie stworzył plan
wdrożenia oprogramowania. Tylko jego czas zwykle dzieli się pomiędzy bardzo dużą
liczbę spotkań. Tam leżą talenty analityka biznesowego, więc tam je
wykorzystujemy.

W związku z tym, czasem pojawia się następujący model: analityk biznesowy tworzy
wygania dokumentacji i organizuje programistów, którzy ją napiszą.

### UX designer i UX writer

Pracuje nad optymalnymi interakcjami użytkownika z oprogramowaniem. Zwykle
projektuje interfejs, czasem pisze teksty, które pokażą się w tym interfejsie.
Może wydawać się naturalne, że ta osoba opracuje przynajmniej część dokumentacji
użytkownika. A mimo to, nigdy się z tym nie spotkałem. Być może dlatego, że
projektowanie interfejsu to zupełnie inny zestaw umiejętności niż projektowanie
treści technicznych.

### Technical writer

Specjalizuje się w projektowaniu i pisaniu dokumentacji użytkownika. Dużo
rozmawia z programistami i z innymi osobami w firmie, testuje, używa
oprogramowania, wciela się w różne role. Czasem pisze[^1].

Dlaczego potrzebna jest ta dodatkowa osoba?

-   Skupia się tylko na dokumentacji, ma więc siłę specjalizacji. Dzięki temu
    zna praktyki, narzędzia i procesy związane z dokumentacją
-   Zna szerszy kontekst niż osoby, które bezpośrednio tworzą produkt; zna całą
    funkcjonalność i cele biznesowe użytkowników

Jeżeli masz okazję pracować z technical writerami, to większość problemów
spocznie na ich barkach. Musisz tylko zadbać o odpowiednie środowisko pracy dla
nich.

Niestety, duże zespoły technical writerskie mają tendencję do rozrastania się w
nieskończoność i dokumentacja zaczyna żyć własnym życiem, które niestety z
biegiem czasu ma coraz mniej wspólnego z życiem produktu.

[^1]:
    Wbrew powszechnemu przekonaniu, technical writer spędza relatywnie mało
    czasu na właściwym pisaniu. Większość dnia, szacunkowo ok. 80%, wypełniają
    mu czynności takie jak szukanie informacji i wyciąganie wiedzy od ekspertów.
