
// Convert Funktion

const inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("resultForm").style.display = "flex";
    inputForm.style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    const textareaField = document.getElementById("inputArea");
    const armyString = textareaField.value;
    let testObject = {
        "armyName": "Tau",
        "faction": "",
        "detachment": "",
        "unitEntry": [
            {
                "name": "",
                "points": "",
                "entryLength": "",
                "equip": [
                    {
                        "weapon": "",
                        "amount": "",
                    },
                    {
                        "weapon": "",
                        "amount": "",
                    }
                ]


            },
            {
                "name": "",
                "points": "",
                "entryLength": "",
                "equip": [
                    {
                        "weapon": "",
                        "amount": "",
                    },
                    {
                        "weapon": "",
                        "amount": "",
                    }
                ]


            }
        ]
    }

    // Name of army     
    let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    let outputArea = document.getElementById("outputArea");
    outputArea.textContent = armyLinebreakArray[0];
    // console.log(armyLinebreakArray);


    // Faction
    for (faction of factionList) {
        if (armyString.includes(faction)) {
            outputArea.textContent = "**" + outputArea.textContent + "**\n*" + faction + "*"
        }
    }

    // Detachment    
    for (detachment of detachmentList) {
        if (armyString.includes(detachment)) {
            outputArea.textContent = outputArea.textContent + "\n*" + detachment + "*\n"
        }
    }

    // Armylist
    for (dataSheet of dataSheetList) {
        const unit = dataSheet[0];
        const points = dataSheet[1];
        let paraStart;
        let paraEnd;
        let paraLength;
        const regularExpression = new RegExp(unit, "g");
        let count = (armyString.match(regularExpression) || []).length;
        for (i = 1; i <= count; i++) {
            outputArea.textContent = outputArea.textContent + "\n- " + unit + " " + points;
        }

        // search area for keywords
        // for (arrayItem of armyLinebreakArray) {
        //     if (arrayItem.startsWith(unit)) {
        //         paraStart = armyLinebreakArray.indexOf(arrayItem);     //überschreibt sich jedes mal wenn etwas gefunden wird. darum in array oder objekt speichern.
        //         console.log("paraStart = " + paraStart);
        //     };

        // }
        // for (arrayItem of armyLinebreakArray) {
        //     if (arrayItem === "" && armyLinebreakArray.indexOf(arrayItem) > paraStart) {
        //         paraEnd = armyLinebreakArray.indexOf(arrayItem);
        //         console.log("paraEnd = " + paraEnd);
        //     }
        // }
    }
});
//wenn datasheet x vorkommt, gib mir die zeile, wo es vorkommt.

//von dieser zeile bis zur zeile in der der nächste datasheet vorkommt, erstelle einen string.
// wenn hier bestimmte keywords vorkommen, addiere sie zu outputarea.textcontent.

const resultForm = document.getElementById("resultForm");
resultForm.addEventListener("submit", event => {
    event.preventDefault();
    const outputArea = document.getElementById("outputArea");
    navigator.clipboard.writeText(outputArea.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
});


const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => { location.reload() });


// To Do:
// Anzahl der Ausgaben von datasheet stimmt nicht   ->erledigt!
// Liste taucht ausserhalb von p auf -> erledigt!
// entscheiden, ob ein paragraph oder mehrere am Anfang besser sind -> erledigt!
// ist es möglich Aufzählungszeichen statt einer Liste zu nutzen? -> erledigt!
// button einfügen für "copy to clipboard" -> erledigt!
//reset am anfang einbauen damit die die ul nicht ständig erweitert wird sondern erneuert-> erledigt!
// Ausrüstungsoptionen einfügen
// Machen Schalter für verschiedene Armeen Sinn?
// Schalter für verschiedene Armeelisten tools? bzw. automatische erkennung der verwendeten tools
// Optionsschalter für Anzeige der Ausrüstung?
//css aufräumen!-> erledigt!
// backlog  Trello
//regex für
// Daten auslagern
// Markdown umsetzen ->erledigt!
// Alert mit anderer Benachrichtigungs- umsetzen
// reset button einfügen -> erledigt!
// Punktwerte einfügen?
//enhancemnts einfügen

// breite der textarea fixieren
// outputArea an größe des inhalts anpassen


// outputArea.textContent anpassen. inhalt und logik trennen.inhalt in variable zusammenfassen und erst am ende das ergebnis ausgeben.




//    const regExpLinebreak = new RegExp(unit, (.\n ?) * (?=\n\n));



//anlegen: object oder array dass sich aus den zeilen und gefundenen ausrüstungen speisst
// output area - textcontent ändern. so dass es erst ganz am ende mit inhalt befüllt wir und nicht in mehreren schritten