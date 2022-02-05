---
id: narzedzia-w-dokumentacji
title: Narzędzia w dokumentacji
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Po co nam dokumentacja?" src={useBaseUrl('img/narzedzia.png')} />

## Model “tradycyjny”

W tym modelu stosuje się narzędzia ściśle związane ze światem komunikacji
technicznej. Często poza technical writerami nikt o nich nie słyszał, nie
wspominając już o tym, że nie umie oraz nie chce z nich korzystać. Nie dlatego,
że są to złe rozwiązania, ale dlatego, że spełniają potrzeby w świecie, w którym
zostały wymyślone i osoby funkcjonujące w innym świecie nie czują potrzeby ich
używania.

Największą zaletą narzędzi typowo writerskich jest spora liczba funkcji, które
dostajemy od razu i to, że są stworzone z myślą o osobach tworzących
dokumentację. Dzięki temu możemy mocno zredukować zaangażowanie osób
technicznych, np. programistów, w konfigurację i dodanie brakujących funkcji,
ponieważ wiele rzeczy możemy zrobić sami. Dodatkowo, w pakiecie dostajemy
wsparcie techniczne producenta co na pewno ułatwia rozwiązywanie problemów z
narzędziem.

Z drugiej strony, musimy się liczyć z dość wysokim kosztem zakupu oraz z tym, że
nie będziemy mieli szczegółowej wiedzy na temat tego jak działa narzędzie, przez
co nie będziemy w stanie samodzielnie radzić sobie z pewnymi problemami oraz
dodawać nowych funkcji w łatwy sposób. To z kolei może spowodować wydłużony czas
potrzebny na wdrożenie jakiegoś rozwiązania oraz wygenerować dodatkowy koszt -
np. będziemy musieli zapłacić producentowi za rozszerzenie narzędzia o to czego
nam brakuje.

Ale może właśnie taki model nam pasuje, bo w zespole dokumentacyjnym nie mamy
osób mocno technicznych i samodzielne utrzymywanie narzędzi nie jest możliwe.

### Help Authoring Tool (HAT)

HAT chyba najlepiej określić jako kombajn, który pozwala nam na tworzenie
dokumentacji od A do Z, czyli od pisania treści po jego publikację do żądanego
formatu.

Przykładem takiego narzędzia jest MadCap Flare i Adobe RoboHelp. HAT zapisuje
pliki w prostym repozytorium, albo na dysku, ale pozwala na utrzymanie wiele
helpów z jednego zbioru topików. W tych topikach możemy stosować zmienne typu
“nazwa produktu” i zmieniać ich wartość w zależności od tego, który help
generujemy. HAT oferuje też możliwość wielokrotnego wykorzystania tej samej
treści (reuse).

Jeżeli nasz produkt ma kilka wariacji, które mają części wspólne, ale używają
ich różni użytkownicy, to warto zastosować reuse. Klasycznym przykładem ze
świata poza oprogramowaniem jest pralka. Model A jest podstawowy, model B ma
trzy dodatkowe funkcje, a model C ma jedną z tych trzech i dwie inne. Przykładem
ze świata oprogramowania może być Word, PowerPoint i Excel, gdzie podstawowe
operacje (zapisywanie plików, integracja z OneDrive, czy pisanie makr) są takie
same.

### Component Content Management System (CCMS) i standardy XML

Jeżeli przechowujemy bardzo dużo treści, mamy w niej dużo zależności (reuse,
single sourcing, content references, itp.), to krokiem ponad HATy są CCMSy.

Component Content Management System (CCMS) łączy w sobie:

-   Repozytorium i narzędzia do zarządzania wersjami
-   narzędzia do zarządzania zadaniami i workflowem
-   narzędzia do review
-   system do zarządzania tłumaczeniami, może pamięć tłumaczeniową
-   narzędzia do publikacji treści
-   narzędzia do zarządzania jakością
-   edytory i inne cuda na kiju

Tego typu system działa w połączeniu ze standardem przechowywania treści.
Najpopularniejsze standardy na rynku to DITA, Docbook i S1000D. S1000D jest
używany głównie w wojsku i lotnictwie (chociaż spotyka się go w szerszym
przemyśle maszynowym). Docbook powoli umiera. Oprócz nich, istnieje jeszcze
wiele niszowych standardów XMLowych, często związanych ściśle z konkretnym
CCMSem.

DITA święci triumfy na rynku oprogramowania enterprise i istnieje wiele CCMSów,
które z nią współpracują, a także kilka edytorów XML, które ułatwiają życie
technical writerom, na przykład Oxygen (Syncro Soft), czy Adobe FrameMaker.

## Model docs like code

W momencie kiedy piszę te słowa, na popularności mocno zyskuje (szczególnie
wśród tech writerów współpracujących blisko z programistami) model utrzymywania
dokumentacji o nazwie _docs like code _(znany też jako _docs as code)_. Oznacza
to, że używamy podobnych narzędzi i procesów jak do tworzenia oprogramowania.
Czyli:

-   Źródła dokumentacji przechowujemy w systemie kontroli wersji (VCS), takim
    jak git czy SVN.
-   Treść utrzymywana jest w plikach tekstowych, a piszemy ją używając języka
    znaczników, na przykład Markdown.
-   Do pisania używamy edytora tekstowego, najlepiej takiego, który wspiera
    używany przez nas język znaczników. Przykładem może być Visual Studio Code
    albo Atom.
-   Do publikacji używamy narzędzi CI typu Jenkins, Travis czy Teamcity
-   Budujemy statyczne strony HTML za pomocą generatora stron statycznych,
    takiego jak Sphinx czy Docusaurus. Rzadko publikujemy PDFy.

To dobre podejście do iteracyjnego tworzenia dokumentacji, jeżeli pamiętamy o
tym, żeby nie powtarzać tej samej informacji na wielu stronach. Zapytajcie
technical writera jak łatwo o pomyłkę, jeśli utrzymujemy tę samą informację w
kilku plikach tekstowych na raz!

Kolejną zaletą tego modelu jest niski koszt narzędzi. Część z nich jest darmowa,
np. generator stron statycznych i edytor tekstu. Jeśli nawet musimy użyć
jakiegoś płatnego oprogramowania, to raczej nie będzie z tym problemu, bo
skorzystamy z tego czego używają już programiści w naszej organizacji. W końcu
traktujemy naszą dokumentację tak samo jak kod. Dodatkowo, mamy dostęp do tego
“co siedzi w środku takich narzędzi”, przez co możemy je poznać na wylot. Dzięki
temu będziemy mogli je rozbudowywać i rozwiązywać łatwiej problemy, które
napotkamy.

Ale jest też druga strona medalu. Pomimo tego, że pewne narzędzia są darmowe, to
ich koszt poniesiemy w innym miejscu - ujawni się on w czasie, który będziemy
musieli zainwestować w dodanie brakujących funkcji i w utrzymywanie narzędzia.
Na przykład, generator stron statycznych pozwala nam za darmo i dość szybko
zbudować ładną stronę z dokumentacją, ale jeśli będziemy chcieli mieć dobrą
wyszukiwarkę i generować dokumentację do formatu PDF, to będziemy musieli
uzupełnić takie braki we własnym zakresie. Jeśli nasz zespół dokumentacyjny nie
ma osób mocno technicznych, to stajemy się skazani na pomoc programistów. A oni
mają swoją pracę przy rozwijaniu oprogramowania i zazwyczaj ciężko jest uzyskać
ich pomoc. Nie dlatego, że nie chcą tego zrobić, tylko dlatego, że mają na sobie
rzeczy o większym priorytecie.

## Jak wybrać narzędzie

Wybór narzędzia jest ważny, bo bardzo wpłynie na koszty tworzenia dokumentacji,
a nawet na to jaka ona będzie.

Koszt narzędzia też ma znaczenie. Narzędzie typu Google Docs jest “za darmo”,
ale ogranicza nas trochę w kwestii tego jak będziemy publikować treści, co może
nas dużo kosztować w perspektywie czasu. Z kolei CCMSy mogą być kosztem rzędu
dziesiątek lub setek tysięcy dolarów rocznie, ale mogą się zwrócić w krótkim
czasie, i to z nawiązką.

Wszystko zależy od naszych potrzeb. Musimy je dokładnie przeanalizować i
porównać z dostępnymi narzędziami. Nie wpadajmy w pułapkę wybierania narzędzia,
a potem sprawdzania jak by nam pasowało, tylko dlatego, że inni tego używają!

Nie chcę tutaj rozpisywać się na ten temat, bo można by napisać osobną książkę o
procesie wyboru narzędzia. O tym co jest faktycznie potrzebą (publikowanie
treści online), a co tylko brzmi jak potrzeba (generowanie release notes z
komentarzy z Jirze). O tym jak polityka zakupowa firmy może przedłużyć wybór
narzędzia o pięć lat. O tym jak sprzedawcy oprogramowania planują dema tak, żeby
nas złapać w pułapkę. Dlatego poprzestańmy na tym krótkim akapicie.

Jeżeli mamy w zespole doświadczonych technical writerów, to pomogą nam
skonstruować i przejść proces wyboru. Jeżeli ich nie mamy, a będziemy sporo
inwestować w dokumentację, to warto poradzić się konsultanta (niezwiązanego z
żadnym narzędziem!)
