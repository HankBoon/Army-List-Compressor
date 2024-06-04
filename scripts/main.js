
// Convert Funktion
function convert(event) {
    event.preventDefault();
    document.getElementById("resultForm").style.display = "flex";
    inputForm.style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    const textareaField = document.getElementById("inputArea");
    const armyString = textareaField.value;

    // Name of army     
    let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    let resultParagraph = document.getElementById("resultParagraph")
    resultParagraph.innerText = `${armyLinebreakArray[0]}`;

    // Faction
    for (faction of factionList) {
        if (armyString.includes(faction)) {
            resultParagraph.innerText = `**${resultParagraph.innerText}**
            *${faction}*`
        }
    }
    // Detachment    
    for (detachment of detachmentList) {
        if (armyString.includes(detachment)) {
            resultParagraph.innerText = `${resultParagraph.innerText}
            *${detachment}*\n`
        }
    }
    // Armylist
    for (const dataSheet of dataSheetList) {
        const unit = dataSheet[0];
        console.log(unit);
        const points = dataSheet[1];
        const regularExpression = new RegExp(unit, "g");
        let count = (armyString.match(regularExpression) || []).length;
        for (i = 1; i <= count; i++) {
            resultParagraph.innerText = `${resultParagraph.innerText}
            - ${unit} ${points}`;                                           // umstrukturieren
        }
    }
    const resultForm = document.getElementById("resultForm");
    resultForm.addEventListener("submit", copyFunction);
}

function copyFunction(event) {
    event.preventDefault();
    const innerResultDiv = document.getElementById("innerResultDiv");
    navigator.clipboard.writeText(innerResultDiv.innerText);
    alert("Awsome List!\nCopied to clipboard.");
}
function reload (){
    location.reload()
};

const inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", convert);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reload);


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
// Alert mit anderer Benachrichtigung umsetzen
// reset button einfügen -> erledigt!
// Punktwerte einfügen?
//enhancemnts einfügen






