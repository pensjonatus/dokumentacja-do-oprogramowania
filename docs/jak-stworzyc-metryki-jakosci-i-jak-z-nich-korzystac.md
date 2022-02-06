---
id: jak-stworzyc-metryki-jakosci-i-jak-z-nich-korzystac
title: Jak stworzyć metryki jakości i jak z nich korzystać
---

Jakość powinno się dać zmierzyć po to, żeby móc ją utrzymać lub podnieść. Ale
jak mierzyć jakość dzieła sztuki (bo takim właśnie dziełem jest dokumentacja).
No dobra, to był żart, ale jednak jest w tym stwierdzeniu ziarno prawdy.

Kiedy myślimy o jakości dokumentacji, do głowy przychodzą następujące metryki:

-   Liczba defektów w dokumentacji. Czyli ktoś zgłasza, że informacja w
    dokumentacji jest nieprawdziwa, lub brakuje jakiejś informacji.
-   Liczba zapytań do supportu, które powinny być rozwiązane w dokumentacji, ale
    nie są. Nie należy mylić tego z liczbą zapytań do supportu, które są
    rozwiązane w dokumentacji, ale użytkownicy o tym nie wiedzą. To także jest
    problem z dokumentacją, ale jest on bardziej związany z jej dostępnością,
    wyszukiwarką, nawigacją, itp.
-   Liczba zapytań do działu sprzedaży, które pochodzą z dokumentacji.
-   Indeks czytelności, czyli jak łatwo jest czytać dokumentację. Na przykład:
    indeks Gunninga, Flesch-Kincaid, SMOG, Coleman-Liau. Im niższy, tym lepszy.

## Wadliwa dokumentacja

Gdy czegoś brakuje, lub informacje są nieprawdziwe, dowiemy się tego od
użytkowników. Popularną metodą zbierania tego typu informacji jest możliwość
komentowania dokumentów. Komentarze nie muszą być publicznie widoczne,
najważniejsze, żeby zespół dokumentacji na nie reagował.

Komentarze od użytkowników są bardzo cenne, bo tylko jeden na miliard
użytkowników wystawi komentarz (statystyki niepotwierdzone). Z tego część będzie
dotyczyć dokumentacji, a część samego produktu. Na obie informacje warto
zareagować - odpisać i poprawić to, co jest nie tak. Użytkownik poczuje się
bardzo dobrze, jeśli dostanie od nas prostą i przyjazną wiadomość - nie z
wymówkami, ale ze szczerym podziękowaniem za poświęcony czas i z opisem kroków
jakie podjęliśmy w sprawie zgłoszonego przez niego problemu. Chodzi o coś
takiego.

```txt
Cześć Marek,

Dziękujemy za komentarz. Napisałeś, że w tabeli brakuje wartości dla
parametru paramFIK. Już dodaliśmy brakujące informacje. Daj nam znać,
jeśli zauważysz coś jeszcze.

Pozdrawiam,
Piotrek Jakiśtam

Technical writer, SomeSoftwareSystems.io
```

Dzięki takiej wiadomości zyskujemy dwie rzeczy: zaufanie i nowego kontrolera
jakości.

Żeby mierzyć ten wymiar jakości, zbierajmy komentarze i dzielmy je na kategorie.
Na przykład, zgłoszenia dotyczące dokumentacji, zgłoszenia dotyczące produktu,
wyrazy frustracji, chęć udowodnienia swojej wyższości intelektualnej, itp.

Raz na rok (kwartał, miesiąc, zależy od ilości) możemy porównać wyniki z
poprzednim okresem i przyjrzeć się komentarzom w każdej kategorii. Czy
poprawiliśmy dokumentację lub produkt? Czy klient został utrzymany? Czy liczba
komentarzy się zmienia?

Rezultaty takiego procesu mogą być ogromną kopalnią wiedzy.

## Dokumentacja jako support

W idealnym świecie, nasi użytkownicy znaleźliby rozwiązania swoich problemów
sami. Dzięki temu szybciej osiągneliby swój cel i byliby bardziej zadowoleni, a
my oszczędzilibyśmy na kosztach utrzymania helpdesku.

Jako metrykę możemy przyjąć liczbę zapytań do supportu. Jeżeli liczba spada
kiedy poprawiamy dokumentację, to dobrze. Ale trudno powiązać tę liczbę
jednoznacznie z dokumentacją, bo być może poprawiliśmy produkt, albo mamy mniej
klientów.

Moglibyśmy też dodać w dokumentacji przycisk “skontaktuj się z supportem” i
liczyć ile osób go używa. Jeżeli przycisk jest w tym samym miejscu i tak samo
dostępny, a liczba maleje, to może być znak, że robimy coś dobrze. Naszym celem
może być ciągłe zmniejszanie tej liczby. Żeby to zrobić, analizujemy jaką
ścieżkę przeszedł klient i reagujemy na powtarzające się potrzeby. Na przykład:

_Nasza aplikacja integruje się z komunikatorem Skype. Mamy dużo zapytań do
supportu o to, czy integruje się ze Skype for Business i Microsoft Lync.
Widzimy, że niektórzy użytkownicy szukali słów “Skype for Business” i “Microsoft
Lync” na stronie z dokumentacją, lub przeglądali sekcję “Integracja z
komunikatorami”, a potem klikali “skontaktuj się z helpdeskiem”._

Patrzymy do dokumentacji i widzimy, że w sekcji integracja z komunikatorami
napisaliśmy o Skypie, ale nie wspomnieliśmy o pozostałych dwóch. Dodajemy sekcje
o brakujących komunikatorach i rozjaśniamy sprawę

Jeżeli w dokumentacji mamy link typu “skontaktuj się z helpdeskiem”, to możemy
mierzyć jak wiele osób go używa.

Jeżeli podejdziemy do sprawy nie metrykowo, tylko jakościowo, to możemy
analizować zapytania i patrzeć na następujące rzeczy:

-   Czy zapytanie mogłaby rozwiązać dokumentacja - jeżeli tak, to dodajmy
    brakujące informacje.
-   Czy zapytanie jest rozwiązane w dokumentacji - jeżeli tak, to znajdźmy
    odpowiedź na pytanie dlaczego klient z niej nie skorzystał.
-   Czy zapytanie się powtarza - zastanówmy się czy warto poprawić produkt.

Na dłuższą metę takie rozwiązanie może być lepsze niż śledzenie metryk, ale
trudno zweryfikować jego skuteczność. Jeżeli ciągle pojawiają się te same
zapytania, to znaczy, że nasze działania nie są skuteczne.

## Dokumentacja jako narzędzie sprzedaży

Nasz potencjalny klient szuka oprogramowania, które najlepiej spełni jego cele.
Przegląda ofertę naszą i konkurencji pod każdym względem, z czego najważniejszym
pytaniem dla niego jest, “czy to oprogramowanie spełnia moje potrzeby?”. Żeby
odpowiedzieć na to pytanie, może sięgnąć do dokumentacji.

Jeżeli nasza dokumentacja jasno da mu na to odpowiedź, to być może kliknie na
naszej stronie przycisk “oferta”, albo “cennik”, albo “skontaktuj się z działem
sprzedaży”. Możemy liczyć ile takich sytuacji miało miejsce. Potem możemy
porównać ile razy ktoś kliknął “kupuj” ze strony z dokumentacją, a ile razy np.
ze strony marketingowej. Wtedy pojawia się nowa metryka - ilość potencjalnych
sprzedaży (“leadów”) wygenerowanych przez dokumentację.

Możemy postawić sobie za cel, żeby zwiększać liczbę takich “leadów”. Ale nawet
sam fakt, że one występują bardzo dobrze świadczy o naszej dokumentacji.

## Poprawianie czytelności tekstu

Indeks czytelności jest miarą tego jak łatwo jest czytać naszą dokumentację.
Przykładem może indeks Gunninga, Flesch-Kincaid, SMOG czy Coleman-Liau. W
przypadku większości indeksów, im niższy, tym lepszy.

Ta metryka ma sens jeżeli nie jesteśmy w stanie powiedzieć nic więcej o jakości.
Na przykład liczba defektów i zapytań jest na tyle niska, że nic nie oznacza.
Wtedy traktujemy czytelność tekstu jako nasz własny sposób na utrzymanie poziomu
jakości. Możemy też stosować ten indeks obok innych metryk.

Jest wiele aplikacji, które określi indeks czytelności naszych tekstów.
Oprogramowanie analizuje liczbę słów na zdanie, zdań na akapit, i tym podobne.
Bardziej zaawansowane programy patrzą na liczbę przysłówków, rzadko spotykanych
słów, i tym podobne. Większość z nich, niestety, działa tylko w języku
angielskim, ale w świecie oprogramowania to nie jest duży problem, ponieważ
większość tekstów jest i tak pisana po angielsku.
