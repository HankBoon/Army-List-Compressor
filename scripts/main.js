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
function getUnit(string, keyword, points, weapons) {
    let startIndex = 0;
    let index;
    for (index = string.indexOf(keyword, startIndex); index !== -1; index = string.indexOf(keyword, startIndex)) {
        armyArrayIndex += 1;
        // Find the next empty line
        let emptyLineIndex = string.indexOf('\n\n', index);
        if (emptyLineIndex === -1) {
            emptyLineIndex = string.length;    // If no empty line is found, use the end of the string
        }
        let searchArea = string.slice(index, emptyLineIndex);

        outputArmyArray.push({
            name: keyword,
            points: points,
            equipedWeapons: [],
            warlord: [],
            keywordIndex: index,
            nextEmptyLineIndex: emptyLineIndex,
            searchArea: searchArea
        })

        for (const weapon of weapons) {
            if (searchArea.includes(weapon.name) && weapon.display === "true") {
                outputArmyArray[armyArrayIndex].equipedWeapons.push(weapon.alias);
            }
        }

        if (searchArea.includes("Warlord")) {    // fügt allen chars Warlord hinzu....warum? nex
            outputArmyArray[armyArrayIndex].warlord.push("Warlord");
        }

        startIndex = index + keyword.length;
    }
}

function getAllUnits() {
    for (const unit of tauEmpire.units) {
        getUnit(inputArmyString, unit.name, unit.points, unit.weapons);
    }

}
function setAllUnits() {
    for (const item of outputArmyArray) {
        if (item.equipedWeapons.length !== 0) {
            const equipedWeaponsString = item.equipedWeapons.toString();
            const equipedWeaponsCommata = equipedWeaponsString.replaceAll(",", ", ");
            outputAreaField.textContent += "- " + item.name + " (" + equipedWeaponsCommata + ")"+ " " + item.points + "\n";
        }
        else if (item.equipedWeapons.length !== 0 && item.warlord.length !== 0) {
            const equipedWeaponsString = item.equipedWeapons.toString();
            const equipedWeaponsCommata = equipedWeaponsString.replaceAll(",", ", ");
            outputAreaField.textContent += "- " + item.name + " (" + equipedWeaponsCommata + ")" + " " +"(" +item.warlord +")" + item.points + "\n";
        }
        else if (item.equipedWeapons.length === 0 && item.warlord.length !== 0) {
            const equipedWeaponsString = item.equipedWeapons.toString();
            const equipedWeaponsCommata = equipedWeaponsString.replaceAll(",", ", ");
            outputAreaField.textContent += "- " + item.name + " " +"(" +item.warlord +")"+ " " + item.points  + "\n";
        }
        else {
            outputAreaField.textContent += "- " + item.name + " " + item.points + "\n";
        }

    }
}

//(" + weaponsAliasStringCommata + ")

function compressList(event) {
    event.preventDefault();
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "block";
    createArmyStringFromInput();
    getAndSetArmyName();
    getAndSetFaction();
    getAndSetDetachment();
    getAllUnits();
    setAllUnits();


}

function copyToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(outputAreaField.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
}

inputForm.addEventListener("submit", compressList);
resultForm.addEventListener("submit", copyToClipboard);
resetButton.addEventListener("click", () => { location.reload() });








