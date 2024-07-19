const inputForm = document.getElementById("inputForm");
const resultForm = document.getElementById("resultForm");
const textAreaField = document.getElementById("inputAreaField");
const outputAreaField = document.getElementById("outputAreaField");
const resetButton = document.getElementById("resetButton");
const modelCountButton = document.querySelector("#modelCount");
const enhancementsButton = document.querySelector("#enhancements");
const warlordbutton = document.querySelector("#warlord");
const weaponsButton = document.querySelector("#weapons");
const pointsButton = document.querySelector("#points");

const gwSpecs = {
    pointsIdentifier: "oints",
    charactersAfterPoints: 8,
}
const nrSpecs = {
    pointsIdentifier: "pts",
    charactersAfterPoints: 5,
}

let inputArmyString = "";
let firstEmptyLineIndex = "";
let outputArmyArray = [];
let outputArmyArrayIndex = -1;   // anders lösen?
let compressedArmyArray = [];
let inputArmyLinebreakArray = [];

function getAndSetArmyName() {
    let armyTitle = "";
    const firstLetterIndex = inputArmyString[0];
    firstEmptyLineIndex = inputArmyString.indexOf("\n\n");
    for (i = 0; i <= firstEmptyLineIndex; i++) {
        armyTitle = inputArmyString.slice(firstLetterIndex, firstEmptyLineIndex);
    }
    compressedArmyArray.push("**" + armyTitle + "**")
}

function getAndSetFaction() {
    for (const item of tauEmpire.name) {
        if (inputArmyString.includes(item)) {
            compressedArmyArray.push("**" + item + "**")
        }
    }
}

function getandSetTotalPoints() {
    for (const line of inputArmyLinebreakArray) {
        if (line.includes("POINTS")) {
            const trimmedLine = line.trim();
            const onlyPoints = trimmedLine.substring(21, (trimmedLine.length - 3));
            compressedArmyArray.push(`*${onlyPoints} Points*`)
        }
    }
}

function getAndSetDetachment() {
    for (const detachment of tauEmpire.detachments) {
        if (inputArmyString.includes(detachment)) {
            compressedArmyArray.push("*" + detachment + "*")
        }
    }
}

function getPoints(pointsIdentifier, charactersAfterPoints) {
    for (const item of outputArmyArray) {
        for (const line of item.searchAreaLinebreakArray) {
            if (line.includes(item.name) && line.includes(pointsIdentifier)) {
                const trimmedLine = line.trim();
                const onlyPoints = trimmedLine.substring((item.name.length + 2), (trimmedLine.length - charactersAfterPoints));
                item.points = onlyPoints;
            }
        }
    }
}

function getWeapons() {
    for (const item of outputArmyArray) {
        for (const weapon of item.weapons) {
            if (item.searchArea.includes(weapon.name) && weapon.display === "true") {
                item.equipedWeapons.push({
                    name: weapon.alias,
                    count: 0
                })
                for (const line of item.searchAreaLinebreakArray) {
                    if (line.includes(weapon.name)) {
                        for (i = 1; i < 10; i++) {
                            if (line.includes(i)) {
                                item.equipedWeapons[item.equipedWeapons.length - 1].count += i;  // kann ich hier mit this abkürzen?
                                break
                            }
                        }
                        if (item.equipedWeapons[item.equipedWeapons.length - 1].count === 0) {
                            item.equipedWeapons[item.equipedWeapons.length - 1].count = 1
                        }
                    }
                }
            }
        }
    }
}

function getWarlord() {
    for (const item of outputArmyArray) {
        if (item.warlord !== undefined) {
            if (item.searchArea.includes("Warlord")) {
                item.warlord = "Warlord";
            }
            else {
                item.warlord = ""
            }
        }
        else {
            item.warlord = ""
        }
    }
}

function getEnhancement() {
    for (const item of outputArmyArray) {
        if (item.enhancements.length !== 0) {
            for (const enhancement of item.enhancements) {
                if (item.searchArea.includes(enhancement)) {
                    item.enhancements = enhancement;
                    break
                }
                else {
                    item.enhancements = ""
                }
            }
        }
    }
}

function getModelCount() {
    for (const item of outputArmyArray) {
        for (const line of item.searchAreaLinebreakArray) {
            for (const name of item.singleModelNames) {
                if (line.includes(name) && line.includes("•")) {
                    const trimmedLine = line.trim();
                    let onlyNumber = Number(trimmedLine.substring(2, (trimmedLine.length - name.length - 2)));
                    item.numberOfModels += onlyNumber;
                }
            }
        }
    }
}

function createUnitObject(string, unitName, singleModelNames, weapons, enhancements, warlord, pointsIdentifier) {
    console.log(pointsIdentifier);
    startIndex = firstEmptyLineIndex;
    let index;
    for (index = string.indexOf(unitName, startIndex); index !== -1; index = string.indexOf(unitName, startIndex)) {
        // Find the next empty line
        let emptyLineIndex = string.indexOf("\n\n", index);
        if (emptyLineIndex === -1) {
            emptyLineIndex = string.length;    // If no empty line is found, use the end of the string
        }
        let searchArea = string.slice(index, emptyLineIndex);
        const searchAreaLinebreakArray = searchArea.split((/\r?\n|\r|\n/g));
        for (const line of searchAreaLinebreakArray) {
            if (line.includes(unitName) && line.includes("oints") || line.includes(unitName) && line.includes("pts") ) {
                outputArmyArrayIndex++;
                outputArmyArray.push({
                    name: unitName,
                    numberOfModels: 0,
                    weapons: weapons,
                    equipedWeapons: [],
                    warlord: warlord,
                    enhancements: enhancements,
                    keywordIndex: index,
                    nextEmptyLineIndex: emptyLineIndex,
                    searchArea: searchArea,
                    index: outputArmyArrayIndex,
                    searchAreaLinebreakArray: searchAreaLinebreakArray,
                    singleModelNames: singleModelNames
                })
            }
            startIndex = index + unitName.length;
        }
    }
}

function getAllUnitsToObject(pointsIdentifier) {
    for (const unit of tauEmpire.units) {
        createUnitObject(inputArmyString, unit.name, unit.singleModelNames, unit.weapons, unit.enhancements, pointsIdentifier);
    }
}

function setArmyToOutput() {
    let index = compressedArmyArray.length - 1
    for (const item of outputArmyArray) {
        index++;
        compressedArmyArray.push(`- ${item.name}`)
        if (item.numberOfModels !== 0 && modelCountButton.checked) {
            compressedArmyArray[index] += ` [${item.numberOfModels}]`
        }
        if (item.enhancements.length !== 0 && enhancementsButton.checked) {
            compressedArmyArray[index] += ` [${item.enhancements}]`
        }
        if (item.warlord.length !== 0 && warlordbutton.checked) {
            compressedArmyArray[index] += ` [${item.warlord}]`
        }
        if (item.equipedWeapons.length !== 0 && weaponsButton.checked) {
            let rawWeaponString = "";
            for (const weapon of item.equipedWeapons) {
                rawWeaponString += `${weapon.count}x ${weapon.name}, `;
            }
            const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2)
            compressedArmyArray[index] += ` [${weaponString}]`
        }
        if (pointsButton.checked) {
            compressedArmyArray[index] += ` ${item.points}`
        }
    }
    for (const item of compressedArmyArray) {
        outputAreaField.textContent += `${item}\n`
    }
}

function compressGwList(pointsIdentifier, charactersAfterPoints) {
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
    outputAreaField.focus();
    getAndSetArmyName();
    getAndSetFaction();
    getAndSetDetachment();
    getAllUnitsToObject(pointsIdentifier);
    getPoints(pointsIdentifier, charactersAfterPoints);
    getWeapons();
    getWarlord();
    getEnhancement();
    getModelCount();
    setArmyToOutput();
}

function compressNRList(pointsIdentifier, charactersAfterPoints) {
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
    outputAreaField.focus();
    getAndSetFaction();
    getandSetTotalPoints();
    getAndSetDetachment();
    getAllUnitsToObject(pointsIdentifier);
    getPoints(pointsIdentifier, charactersAfterPoints);
    getWeapons();
    getWarlord();
    getEnhancement();
    getModelCount();
    setArmyToOutput();
}

function identifyOrigin() {
    inputArmyString = textAreaField.value;
    inputArmyLinebreakArray = inputArmyString.split((/\r?\n|\r|\n/g));
    if (inputArmyLinebreakArray[0].includes("++++++++++++++++++++")) {
        compressNRList(nrSpecs.pointsIdentifier, nrSpecs.charactersAfterPoints);
    }
    else {
        compressGwList(gwSpecs.pointsIdentifier, gwSpecs.charactersAfterPoints);
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(outputAreaField.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
}

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
   identifyOrigin();
});

inputForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        identifyOrigin();
    }
})

resultForm.addEventListener("submit", (event) => {
    event.preventDefault();
    copyToClipboard();
}
);

resultForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        copyToClipboard();
    }
})

resetButton.addEventListener("click", () => { location.reload() });

console.log("outputArmyArray: ");
console.log(outputArmyArray);
console.log("compressedArmyArray: ");
console.log(compressedArmyArray);