
// Convert Funktion

const inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", convert);
function convert(event) {
    event.preventDefault();
    document.getElementById("resultForm").style.display = "flex";
    inputForm.style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    const textareaField = document.getElementById("inputArea");
    const armyString = textareaField.value;


    
    // angepasster code:
    // function searchKeywordAndEmptyLine(text, keyword) {
        //     let results = [];
        //     let startIndex = 0;
        //     let index;
        
        //     for (index = text.indexOf(keyword, startIndex); index !== -1; index = text.indexOf(keyword, startIndex)) {
            //         // Find the next empty line
            //         let emptyLineIndex = text.indexOf('\n\n', index);
            //         if (emptyLineIndex === -1) {
                //             // If no empty line is found, use the end of the string
                //             emptyLineIndex = text.length;
    //         }
    
    //         results.push({
        //             keywordIndex: index,
        //             nextEmptyLineIndex: emptyLineIndex
    //         });
    
    //         startIndex = index + keyword.length;
    //     }
    
    //     return results;
}
// Name of army     
let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
let outputArea = document.getElementById("outputArea");
outputArea.textContent = armyLinebreakArray[0];  // ändern wohin diese Zeile geschrieben wird.


// alte Funktion
    // // Faction
    // for (faction of factionList) {
    //     if (armyString.includes(faction)) {
    //         outputArea.textContent = "**" + outputArea.textContent + "**\n*" + faction + "*"
    //     }
    // }

    // // Detachment    
    // for (detachment of detachmentList) {
    //     if (armyString.includes(detachment)) {
    //         outputArea.textContent = outputArea.textContent + "\n*" + detachment + "*\n"
    //     }
    // }

    // // Armylist
    // for (dataSheet of dataSheetList) {
    //     const unit = dataSheet[0];
    //     const points = dataSheet[1];
    //     const regularExpression = new RegExp(unit, "g");
    //     let count = (armyString.match(regularExpression) || []).length;
    //     for (i = 1; i <= count; i++) {
    //         outputArea.textContent = outputArea.textContent + "\n- " + unit + " " + points;
    //     }
    // }
// };

const resultForm = document.getElementById("resultForm");
resultForm.addEventListener("submit", fillForm);
function fillForm(event) {
    event.preventDefault();
    const outputArea = document.getElementById("outputArea");
    navigator.clipboard.writeText(outputArea.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
};


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

// funktion von perplexity

// function searchKeyword(text, keyword) {
//     let positions = [];
//     let startIndex = 0;
//     let index;

//     while ((index = text.indexOf(keyword, startIndex)) !== -1) {
//         positions.push(index);
//         startIndex = index + keyword.length; // Move startIndex to the next character after the found keyword
//     }

//     return positions;
// }

// // Example usage:
// let text = "This is a test. This test is only a test.";
// let keyword = "test";
// let result = searchKeyword(text, keyword);
// console.log(result); // Output: [10, 21, 36]





// angepasster code:
// function searchKeywordAndEmptyLine(text, keyword) {
//     let results = [];
//     let startIndex = 0;
//     let index;

//     for (index = text.indexOf(keyword, startIndex); index !== -1; index = text.indexOf(keyword, startIndex)) {
//         // Find the next empty line
//         let emptyLineIndex = text.indexOf('\n\n', index);
//         if (emptyLineIndex === -1) {
//             // If no empty line is found, use the end of the string
//             emptyLineIndex = text.length;
//         }

//         results.push({
//             keywordIndex: index,
//             nextEmptyLineIndex: emptyLineIndex
//         });

//         startIndex = index + keyword.length;
//     }

//     return results;
// }

// // Beispielverwendung:
// let text = "This is a test.\n\nThis test is only a test.\n\nAnother test here.";
// let keyword = "test";
// let result = searchKeywordAndEmptyLine(text, keyword);
// console.log(result);