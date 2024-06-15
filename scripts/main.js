
// Convert Funktion

const inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("resultForm").style.display = "flex";
    inputForm.style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    const textareaField = document.getElementById("inputArea");
    const armyString = textareaField.value;

    // Name of army     
    let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    let outputArea = document.getElementById("outputArea");
    outputArea.textContent = armyLinebreakArray[0];

     // Faction
    for (faction of factionList) {
        if (armyString.includes(faction)) {
            outputArea.textContent = "**" + outputArea.textContent + "**\n*" + faction +"*"
        }
    }

    // Detachment    
    for (detachment of detachmentList) {
        if (armyString.includes(detachment)) {
            outputArea.textContent = outputArea.textContent + "\n*" + detachment + "*\n" 
        }
    }

    // Armylist
    for (const dataSheet of dataSheetList) {
        const unit = dataSheet[0];
        const points = dataSheet[1];
        const regularExpression = new RegExp(unit, "g");
        let count = (armyString.match(regularExpression) || []).length;
        for (i = 1; i <= count; i++) {
            outputArea.textContent = outputArea.textContent + "\n- " + unit + " " + points              //umstrukturieren wegen seo und readability?
        }
    }

    const resultForm = document.getElementById("resultForm");
    resultForm.addEventListener("submit", event => {
        event.preventDefault();
        const outputArea = document.getElementById("outputArea");
        navigator.clipboard.writeText(outputArea.textContent);
        alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
    });
})

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {location.reload()});


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






