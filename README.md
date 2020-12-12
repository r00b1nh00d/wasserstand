# Des Wasserstand am Weihnachtsbaum messen
## ~avatar avatar @unplugged
Ihr habt einen echten Weihnachtsbaum, der regelsmäßig gegossen werden muss im wohnzimmer stehen? <br>
Lass dich vom Calliope daran erinnern regelmäßig Wasser nach zu gießen. <br>
(P.s. du kannst es auch bei anderen Pflanzen probieren)

## ~ @unplugged
Um den Wasserstand zu messen benötigst du nur zwei Kabel und einen Calliope mini. Schneide die Kabel einfach auf deine gewünschte Länge und entferne die Isolierung jeweils an beiden Enden etwas. <br>
Von einem Kabel kommt das eine Ende  an den **(-) Pol** am Calliope das andere Ende an den Boden des Weihnachtsbaumständers (oder deiner Vase/ deines Blumentopfes). <br>
Das andere Kabel soll an den **Pin P0** des Calliope, das andere Ende soll auf der Höhe angebracht werden, auf der der Wasserstand voll anzeigt. <br>
Um die Kabel zu endgültig zu befestigen solltest du Klebestreifen verwenden, welche nicht einfach durch das Wasser abgelöst werden. Vorerst kannst du sie aber auch mit Tesafilm oder einem Stein fixieren. 

## Programmierung 
Die Programmierung ist ganz einfach. In einer ``||basic.dauerhaft||``- Schleife soll mittels ``||logic.wenn-dann-ansonsten||`` - Bedingung geprüft werden ob der ``||inputs: Pin P0||`` ``||logic. nicht||`` ``||inputs: gedrückt|`` ist. <br>
Ist er nicht gedrückt soll die ``||basic.RGB Led||`` auf rot geschalten werden, da dann der Wasserstand zu niedrig ist. Ansonsten soll die ``||basic.RGB Led||`` auf grün gestellt werden. <br>

basic.forever(function () {
    if (!(input.pinIsPressed(TouchPin.P0))) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})

## ~ @unplugged 
Du kannst das Programm natürlich noch erweitern, sodass ein Signalton abgespielt wird, sobald der Wasserstand zu niedrig ist, vielleicht lässt du den Calliope dann sogar ein Weihnachtslied abspielen ;)


> Diese Seite bei [https://r00b1nh00d.github.io/wasserstand/](https://r00b1nh00d.github.io/wasserstand/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/wasserstand** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/wasserstand/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/wasserstand** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/wasserstand/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
