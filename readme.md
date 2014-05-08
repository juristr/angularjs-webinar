Angular JS - Webinar
---

Speaker: [@GoloRoden](http://twitter.com/GoldenRoden)
http://www.heise.de/developer/the-next-big-thing-1790061.html
Mail: webmaster@goloroden.de
Meeting Start: 18:36
Participant: 30
(bis 18:55 kein Bild)

---

angularjs download

als script in index.html eingebunden

`ng-app` brauchts um eine app zu haben

`{{` bedeutet placeholder was auszuwerten ist

`ng-init="text=Hallo Welt"` erlaubt Variablen einzuführen.

`{{}}` unidirectionale bindung; `ng-model` erlaubt bidirectionale binding

**Directives:** selbstdefiniertes HTML element. Sollte damit sparsam umgehen. `ng-controller` usw sind von Angular zur verfügung gestellte Direktiven

**jQuery einbinden** entweder über Angular modul jQuery.lite.

## Links

- https://docs.angularjs.org/api/ng/service
- https://docs.angularjs.org/tutorial
- https://docs.angularjs.org/api
- https://docs.angularjs.org/guide
- http://angularjs.de/

## Fragen

9:53  Tim Döppner:  Ist es ratsam Direktiven innerhalb von For-Schleifen einzusetzen? 
19:53  Philip Erdös:  Kann ich UI mit Angular machen und .NET Code einbinden :-)
19:53  Juri Strumpflohner:  Du erwähntest dass Direktiven "sparsam" verwendet werden sollten, richtig? Wieso? -> Spieltrieb: nicht jeden "Blödsinn" mit directiven. Tabelle mit filter+sortierbar nicht unbedingt als Direktive. Direktiven sind "shadow-doms".

19:53  Philip Erdös:  Geht's auch als iOS oder Android app ?
19:54  Tim Döppner:  bzw. sollte man für die Untergliederung von Logik Direktiven verwenden z. B. eine Shopping Basket Direktive.
19:54  Ralf Michael Bier:  Gibt's was an Anbindung zu Datenbank auf Server-Seite?
19:55  Juri Strumpflohner:  Was genau wäre das "Model" von M-VC in Angular?? -->>> Grundsätzlich 2 Models: Services und alles was dahiner liegt. Zum anderen das Data binding -> MVVM: $scope.
19:56  Philip Erdös:  .NET Webservice kann ich aber quasi von Angular aus ansteuern, auch als standalone-app ohne Webserver?






