
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








