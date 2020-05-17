# Front-end Level UP 2020 - DaftaAcademy

[Published homework](https://iluzjonista.github.io/daftacademy-frontend_2020/)

## Fifth homework


>#### Opis

>* Uzupełnić elementy na stronie produktani z serwera
>  * Elementy w karuzeli/sliderze
>  * Lista głównych produktów z możliwością doczytywania kolejnych
>  * Grupa wyróżnionych produktów
>* Zapytania do serwera mogą być wykonywane z użyciem gotowych bibliotek lub metod udostępnionych przez przeglądarki
>  * fetch
>  * XMLHttpRequest
>  * jQuery
>  * axios
>* Połączenie z serwerem jest dowolne
>  * Otwarte darmowe api
>  * Mockowy serwer w przeglądarce np https://miragejs.com/ - w tym rozwiązaniu należy samemu uzupełnić kolekcję
>  * Własny serwer
>  * W ostateczności napisanie funkcji `fakeServer` która po 500ms zwróci listę produktów
>* Propozycje api
>  * https://rapidapi.com/category/eCommerce
>  * https://rapidapi.com/apidojo/api/asos2
>
>#### Kryteria punktacji
>
>* pobranie elementów z serwera
>* wyświetlenie elementów z serwera
>* obsługa stanów
>  * ładowanie produktów
>  * załadowania produktów
>  * nieudane załadowanie produktów
>
>Prześlij info o gotowej pracy do sprawdzenia: [frontend@daftacademy.pl](mailto:frontend@daftacademy.pl).



## Third homework



>* Stwórz **Moduł** aplikacji w którym będą zawarte wszystkie metody
>  * Moduł powinien być stworzony po załadowaniu *DOM* czyli na evencie `DOMContentLoaded`
>* Dodać obsługę przycisku **scroll to top** *(kółko po prawej stronie ze strzałką w górę)*
>  * Przycisk powinien pokazywać się po zescrollowaniu conajmniej do połowy pierwszej strony
>  * Naciśnięcie przycisku powinno kierować do początku strony
>  * Po powrocie, do wysokości conajmniej połowy pierwszej strony, przycisk powinien być niewidoczny
>* Przycisk **All products** powinien doładować dodatkowe elementy do listy produktów
>  * W tej wersji bez użycia **API** wystarczy wyświetlić elementy z placeholderami
>* Dodać funkcję która po załadowaniu *DOM* zaaktualizuje datę w stopce na bierzący rok
>* Dodatkowe:
>  * Stworzenie karuzeli wyświetlającej produkty - *bez użycia gotowych bibliotek tworzących karuzelę*
>* Prześlij info o gotowej pracy do sprawdzenia: [frontend@daftacademy.pl](mailto:frontend@daftacademy.pl).


## Second homework



> Zbuduj stronę na podstawie przygotowanego projektu graficznego:
> -   Do pracy z projektem skorzystaj z Zeplin'a (https://zeplin.io/)
> -   Skorzystaj z załączonej konfiguracji webpack'a - będziesz mogła/mógł w łatwy sposób dodawać grafiki z folderu 'assets' (zmodyfikowaną konfigurację z przykładowym kodem znajdziesz w folderze 'extended_webpack_config' - dzięki Oleg za pomoc! :D)
> -   Pamiętaj o responsywności budowanej strony
> -   Skorzystaj z grida dostępnego w Bootstrapie (albo innym frameworku) - to ułatwi RWD
> -   Przygotuj placeholdery produktów na stronie z wykorzystaniem np. https://placekitten.com/ lub https://placeholder.com/
> -   Korzystaj z preprocesorów (najlepiej Sass, ze składnią .scss - konfiguracja jest już przez Was przygotowana) i pobaw się jego możliwościami.
> -   Postaraj się przygotować widok jak najbardziej zbliżony do projektu, jednak pamietaj, że na kolejnych zajęciach poznasz podstawy JSa i komunikacji z API. Dlatego kluczowe jest stworzenie markup'u, w którym stworzysz placeholdery dla dynamicznie pobieranych treści.
> -   Prześlij info o gotowej pracy do sprawdzenia: [frontend@daftacademy.pl](mailto:frontend@daftacademy.pl).


## First homework



> Skonfiguruj aplikację front-end:
> -   Dodaj załączony folder  `src`  do projektu i nie dodawaj zmian do istnujących plików w środku.
> -   Użyj npm do instalacji paczek i Webpack jako bundler.
> -   Użyj Babel do kompilacji JS (@babel/preset-env + ustawienie browserlist).
> -   Z pomocą html-webpack-plugin dodaj załączhony plik  `src/index.html`.
> -   Z pomocą  `sass-loader`  (przy potrzebie innych) dodaj do projektu styli w pliku  `src/styles/style.sass`  uywając deklaracji import.
> -   Dodaj do konfiguracji webpacku  `file-loader`  w taki sposób żeby z pomocą deklaracji import uzyskać link do obrazka fomatu png(PS: Sprawdzic działanie mozna w następnym kroku).
> -   Dodaj do projektu  `src/script.js`  uywająć deklaracji import żeby skript załączył sekcje z obrazkiem.
> -   Wrzuć apkę na GitHub i opublikuj na GitHub Pages.
> -   Prześlij adres repo na maila:  [frontend@daftacademy.pl](mailto:frontend@daftacademy.pl).
