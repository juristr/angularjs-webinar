Angular JS - Webinar
---

Speaker: [@GoloRoden](http://twitter.com/GoldenRoden)
http://www.heise.de/developer/the-next-big-thing-1790061.html
Mail: webmaster@goloroden.de

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

**Du erwähntest dass Direktiven "sparsam" verwendet werden sollten, richtig? Wieso?**

Spieltrieb: nicht jeden "Blödsinn" mit directiven. Tabelle mit filter+sortierbar nicht unbedingt als Direktive. Direktiven sind "shadow-doms".

**Was genau wäre das "Model" von M-VC in Angular??**

Grundsätzlich 2 Models: Services und alles was dahiner liegt. Zum anderen das Data binding -> MVVM: $scope.






