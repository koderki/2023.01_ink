var storyContent = ﻿{"inkVersion":20,"root":[["^- Jesteś spóźniony.","\n","^Cisza.","\n","^- Zrobione? - w bezdennym głosie nie dało się wyczuć emocji.","\n","^- Tak, sir.","\n","^- Mam dla Ciebie nowe zlecenie. - Otworzył szufladę i wyciągnął zdjęcie czerwonowłosej dziewczyny.","\n","^- Uśpij ją i przywieź do mnie. Nie będę czekać.","\n",["ev",{"^->":"0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^ZGADZA SIĘ. ",{"->":"$r","var":true},null]}],["ev",{"^->":"0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^NIE ZGADZA SIĘ. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.12.s"},[{"#n":"$r2"}],{"->":"zgadza"},"\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.13.s"},[{"#n":"$r2"}],{"->":"nie_zgadza"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"zgadza":[["^- Ja...nie... - zająknął się.","\n","^- Wiesz dobrze, co się stanie, jeśli tego nie zrobisz.","\n","^Asasyn przypomniał sobie o tragicznej śmierci brata, który powiedział: Nie.","\n","^- Tak... sir - wziął zdjęcie dziewczyny i wyszedł z pokoju. Na korytarzu były rozrzucone papiery. Poślizgnął się o nie i stracił przytomność.","\n",["ev",{"^->":"zgadza.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^OBUDZIŁ SIĘ W DZIWNYM POMIESZCZENIU. ",{"->":"$r","var":true},null]}],["ev",{"^->":"zgadza.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^OBUDZIŁ SIĘ W CICHYM I WILGOTNYM POMIESZCZENIU. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"zgadza.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"->":"dziwne_pomieszczenie"},"\n",{"#f":5}],"c-1":["ev",{"^->":"zgadza.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->":"ciche_i_wilgotne_pomieszczenie"},"\n",{"#f":5}]}],{"#f":1}],"ciche_i_wilgotne_pomieszczenie":[["^Poczuł zimne powietrze. Usłyszał damski głos, który z niego kpił. Miał poczucie, że coś zaraz się stanie. Nagle poczuł nasilający się ból głowy. Spytał się:","\n",["ev",{"^->":"ciche_i_wilgotne_pomieszczenie.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Czy coś mi podałaś? ",{"->":"$r","var":true},null]}],["ev",{"^->":"ciche_i_wilgotne_pomieszczenie.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Gdzie ja jestem? ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ciche_i_wilgotne_pomieszczenie.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"podałaś"},"\n",{"#f":5}],"c-1":["ev",{"^->":"ciche_i_wilgotne_pomieszczenie.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"gdzie_ja_jestem"},"\n",{"#f":5}]}],{"#f":1}],"podałaś":["^- Hehe...Tak,a co?","\n","^- Jakoś musiałam cię tu przywlec - powiedziała kobieta.","\n","^- Co?!","\n","^Zauważył zbliżający się cień człowieka, ale nie wiedział, kto to jest.","\n","^- Halo?! Wyginęli wszyscy, czy co? - powiedział zirytowany James.","\n","^Z ciemności wyszedł meżczyzna.","\n","^- Zawiodłeś mnie! - mężczyzna okazał się szefem mafii. Miał w ręce pistolet.","\n","^- Nie... Proszę!","\n",{"#f":1}],"gdzie_ja_jestem":["^W odpowiedzi zaszczekał nieznany pies. Po chwili ukazał się Zdzisiu ze swoją panią - Ariettą, znaną detektywką.","\n","^- Witaj.","\n","^- Kim jesteś?! Czego ode mnie chcesz?","\n","^- Nie bój się. Dla ciebie to już koniec.","\n","^- Co?! Nie... co mi zrobiłaś?!","\n","^Głos odezwał się ponownie, lecz James mało co słyszał.","\n","^- Jesteś za bardzo zmęczony, nie zrozumiesz - odezwała się kobieta głosem cichym i spokojnym.","\n","^Chłopak zaczął się trząść. Przewrócił się i uderzył głową o kamień.","\n","^Już nigdy się nie obudził...","\n","^KONIEC","\n","end",{"#f":1}],"dziwne_pomieszczenie":["^Gdy otworzył oczy, jedyne co zobaczył, to ciemne pomieszczenie.","\n","^- Arietta! -ktos zawołał.","\n","^James od razu wiedział, że chodzi o jego byłą dziewczynę.","\n","^Zdziwiony chłopak zawołał:","\n","^- Arietta, czy to ty?","\n","^- Czyli mnie jeszcze pamiętasz? - uśmiechnęła się kobieta.","\n","^- Czego chcesz?! Zostaw mnie... Daj mi skończyć zadanie!","\n","^- Obawiam się, że za późno już na robienie czegokolwiek...","\n","^- O czym ty mówisz?! - krzyknął z furią Asasyn.","\n","^Kobieta włączyła radio. Z głośnika można było usłyszeć:,, ...boss mafii, wielki Pan Niewidzalny został wreszcie złapany!.. \"","\n","^- Nie... nie wierzę ci!","\n","^Wtedy z ciemności wyszli antyterroryści z bronią wycelowaną w czoło Jamesa. Chłopak już po chwili poddał się i dał się aresztować.","\n","^KONIEC","\n","end",{"#f":1}],"nie_zgadza":[["^- Nie...Proszę, tylko nie to - powiedział, jąkając się.","\n","^- Jeśli tego nie zrobisz, to pożałujesz – odpowiedział szef głosem, w którym dało się wyczuć groźbę.","\n","^- Ale czemu ona? - zapytał się słabym głosem podwładny.","\n","^Zaczął się cofać, nie zauważył z tyłu szafki i uderzył w nią. Chłopak stracił przytomność.","\n",["ev",{"^->":"nie_zgadza.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^BUDZI SIĘ W JASKINI. ",{"->":"$r","var":true},null]}],["ev",{"^->":"nie_zgadza.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^BUDZI SIĘ W SKRZYDLE SZPITALNYM. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nie_zgadza.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],{"->":"jaskinia"},"\n",{"#f":5}],"c-1":["ev",{"^->":"nie_zgadza.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->":"szpital"},"\n",{"#f":5}]}],{"#f":1}],"jaskinia":[["^Chłopak otwiera oczy i widzi burzę czerwonych włosów.","\n","^- Dawno się nie widzieliśmy, James – usłyszał.","\n","^Poderwał się, słysząc znany mu głos.","\n","^- Tari?! - krzyknął James.","\n","^- Jak?!","\n","^- Ani cześć, ani dziękuję za uratowanie życia... cały ty - zaśmiała się Tari.","\n","^Spotkana po latach dwójka przyjaciół już po chwili swobodnie rozmawiała.","\n","^Na rozmowach i wspomnieniach zleciało im kilka dni. Przez ten czas zdrowie Jamesa wróciło do normy.","\n","^Pewnego dnia postanowili opuścić jaskinię. Brakowało im już prowiantu.","\n","^Po dwóch kwadransach poszukiwań znaleźli opuszczony szpital. Weszli do niego i po kilku minutach oględziń stwierdzili, że mogą tu zamieszkać.","\n","^Przeszukali cały szpital w poszukiwaniu przydatnych rzeczy.","\n",["ev",{"^->":"jaskinia.0.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^ZNALEŹLI RADIO ",{"->":"$r","var":true},null]}],["ev",{"^->":"jaskinia.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^ZNALEŹLI TELEWIZOR ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jaskinia.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],{"->":"radio"},"\n",{"#f":5}],"c-1":["ev",{"^->":"jaskinia.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],{"->":"telewizor"},"\n",{"#f":5}]}],{"#f":1}],"szpital":[["^Chłopak otworzył oczy, głowa pulsowała mu bólem. Spróbował powoli usiąść na łóżku. Rozejrzał się. Usłyszał kroki i szybko wrócił do poprzedniej pozycji.","\n","^Zamknął oczy, lecz głos, jaki usłyszał, kazał mu je otworzyć ponownie.","\n","^- Dawno się nie widzieliśmy, James - powiedziała dziewczyna, której głos miał ledwo wyczuwalną kpinę.","\n","^- Niemożliwe - szepnął.","\n","^Okazało się, że była to ta czerwonowłosa dziewczyna ze zdjęcia - jego dawna wspólniczka - Tari.","\n","^Po chwili można było usłyszeć rozmowę pełną śmiechów i wspomnień. Dwoje przyjaciół było znowu razem.","\n","^Minęło kilka dni. Tari i James przeszukali cały szpital w poszukiwaniu przydatnych rzeczy.","\n",["ev",{"^->":"szpital.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^ZNALEŹLI RADIO. ",{"->":"$r","var":true},null]}],["ev",{"^->":"szpital.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^ZNALEŹLI TELEWIZOR. ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"szpital.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],{"->":"radio"},"\n",{"#f":5}],"c-1":["ev",{"^->":"szpital.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],{"->":"telewizor"},"\n",{"#f":5}]}],{"#f":1}],"radio":["^Znaleźli radio i spróbowali je uruchomić. Udało się. Natrafili na kanał z wiadomościami. Usłyszeli niski głos mówiący:","\n","^- Pan Niewidzialny - bardzo niebezpieczny przestępca - został zlikwidowany przez znaną wszystkim Ariettę - detektywkę, specjalizującą się w łapaniu morderców.","\n","^KONIEC","\n","end",{"#f":1}],"telewizor":["^W końcu znaleźli stary telewizor i spróbowali go włączyć. Natrafili na kanał z wiadomościami i zaciekawieni zaczęli oglądać.","\n","^- Znana wszystkim - detektywka Arietta złapała i zlikwidowała bossa mafii - Pana Niewidzalnego.","\n","^KONIEC","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};