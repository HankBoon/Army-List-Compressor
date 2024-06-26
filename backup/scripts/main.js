const inputForm = document.getElementById("inputForm");
const resultForm = document.getElementById("resultForm");
const textAreaField = document.getElementById("inputAreaField");
const outputAreaField = document.getElementById("outputAreaField");
const resetButton = document.getElementById("resetButton");
let inputArmyString = "";
let inputArmyLinebreakArray;
let outputArmyArray = [];
let armyArrayIndex = -1;   // anders lösen?

function createArmyStringFromInput() {
    inputArmyString = textAreaField.value;
}
function getAndSetArmyName() {
    inputArmyLinebreakArray = inputArmyString.split((/\r?\n|\r|\n/g));
    outputAreaField.textContent = "**" + inputArmyLinebreakArray[0] + "**" + "\n";
}
function getAndSetFaction() {
    if (inputArmyString.includes(tauEmpire.name)) {
        outputAreaField.textContent += "*" + tauEmpire.name + "*" + "\n"
    }
}
function getAndSetDetachment() {
    for (const detachment of tauEmpire.detachments) {
        if (inputArmyString.includes(detachment)) {
            outputAreaField.textContent += "*" + detachment + "*" + "\n"
        }
    }
}
function getUnitsAndWeapons(string, keyword, points, weapons, unit) {
    let results = [];
    let startIndex = 0;
    let index;
    for (index = string.indexOf(keyword, startIndex); index !== -1; index = string.indexOf(keyword, startIndex)) {
        armyArrayIndex += 1;
        // Find the next empty line
        let emptyLineIndex = string.indexOf('\n\n', index);    
        if (emptyLineIndex === -1) {
            emptyLineIndex = string.length;    // If no empty line is found, use the end of the string
        }
        outputArmyArray.push({
            name: keyword,
            points: points,
            weaponsAlias: [],
            warlord: [],
            keywordIndex: index,
            nextEmptyLineIndex: emptyLineIndex,
        })
        let searchArea = string.slice(results.keywordIndex, results.nextEmptyLineIndex); //. warum funktioniert +1 nicht? searchstringZZZZZZZZZ ist flasch definiert
        for (const weapon of weapons) {
            if (searchArea.includes(weapon.name) && weapon.display === "true") {
                outputArmyArray[armyArrayIndex].weaponsAlias.push(weapon.alias);
                console.log(searchArea)
            }
        }

        if (searchArea.includes("Warlord") && unit.warlord === true) {    // fügt allen chars Warlord hinzu....warum? nex
            outputArmyArray[armyArrayIndex].warlord.push("Warlord");
            console.log(searchArea)
        }

        startIndex = index + keyword.length;
    }
}

function getUnits() {
    for (const unit of tauEmpire.units) {
        getUnitsAndWeapons(inputArmyString, unit.name, unit.points, unit.weapons, unit);
    }
    for (const unit of outputArmyArray) {
        if (unit.weaponsAlias.length !== 0) {
            const weaponsAliasString = unit.weaponsAlias.toString();
            const weaponsAliasStringCommata = weaponsAliasString.replaceAll(",", ", ");
            outputAreaField.textContent += "- " + unit.name + " (" + weaponsAliasStringCommata + ") " + unit.points + "\n";
        }
        else {
            outputAreaField.textContent += "- " + unit.name + " " + unit.points + "\n";
        }
    }
}

function compressList(event) {
    event.preventDefault();
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "block";
    createArmyStringFromInput();
    getAndSetArmyName();
    getAndSetFaction();
    getAndSetDetachment();
    getUnits();
}

function copyToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(outputAreaField.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
}

inputForm.addEventListener("submit", compressList);
resultForm.addEventListener("submit", copyToClipboard);
resetButton.addEventListener("click", () => { location.reload() });








