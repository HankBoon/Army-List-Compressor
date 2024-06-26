
// Convert Funktion

const inputForm = document.getElementById("inputForm");
const resultForm = document.getElementById("resultForm");
const textAreaField = document.getElementById("inputAreaField");
const outputAreaField = document.getElementById("outputAreaField");
const resetButton = document.getElementById("resetButton");
let armyString = "";
let armyArray = [];
let armyArrayIndex = -1;
let armyLinebreakArray;

function createArmyString() {
    armyString = textAreaField.value;
}


function getAndSetArmyName() {
    armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    outputAreaField.textContent = "**" + armyLinebreakArray[0] + "**" + "\n";
}
function getFaction() {
    if (armyString.includes(tauEmpire.name)) {
        outputAreaField.textContent += "*" + tauEmpire.name + "*" + "\n"
    }
}
function getDetachment() {
    for (const detachment of tauEmpire.detachments) {
        if (armyString.includes(detachment)) {
            outputAreaField.textContent += "*" + detachment + "*" + "\n"
        }
    }
}

function searchKeywordAndEmptyLine(string, keyword, points, weapons) {
    let results = [];
    let startIndex = 0;
    let index;



    for (index = string.indexOf(keyword, startIndex); index !== -1; index = string.indexOf(keyword, startIndex)) {
        // Find the next empty line
        let emptyLineIndex = string.indexOf('\n\n', index);
        if (emptyLineIndex === -1) {
            // If no empty line is found, use the end of the string
            emptyLineIndex = string.length;
        }
        armyArrayIndex += 1;

        results.push({
            keywordIndex: index,
            nextEmptyLineIndex: emptyLineIndex,
            armyArrayIndex: armyArrayIndex
        });
        let searchArea = string.slice(results.keywordIndex, results.nextEmptyLineIndex); //. warum funktioniert +1 nicht?

        if (index !== "") {
            armyArray.push({
                name: keyword,
                points: points,
                weaponsAlias: []
            })
        }
        for (const weapon of weapons) {
            if (searchArea.includes(weapon.name) && weapon.display === "true") {
                armyArray[armyArrayIndex].weaponsAlias.push(weapon.alias)
            }
        }


        console.log(armyArray);


        startIndex = index + keyword.length;
    }
    // console.log(results);

    return results;

}

inputForm.addEventListener("submit", convert);
function convert(event) {
    event.preventDefault();
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "block";

    createArmyString();
    getAndSetArmyName();
    getFaction();
    getDetachment();
    for (const unit of tauEmpire.units) {
        searchKeywordAndEmptyLine(armyString, unit.name, unit.points, unit.weapons);
    }

    for (const unit of armyArray) {
    
        if (unit.weaponsAlias.length !== 0) {
            const weaponsAliasString = unit.weaponsAlias.toString();
            const weaponsAliasStringCommata = weaponsAliasString.replace(",",", ");

            outputAreaField.textContent += "- " + unit.name + " (" + weaponsAliasStringCommata + ") " + unit.points + "\n";
        } 
        else{
            outputAreaField.textContent += "- " + unit.name + " " + unit.points + "\n";
        }
    }
};




//Copy To clipboard and alert
resultForm.addEventListener("submit", copyToClipboard);
function copyToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(outputAreaField.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
};


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