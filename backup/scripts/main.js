const inputForm = document.getElementById("inputForm");
const resultForm = document.getElementById("resultForm");
const textAreaField = document.getElementById("inputAreaField");
const outputAreaField = document.getElementById("outputAreaField");
const resetButton = document.getElementById("resetButton");
let inputArmyString = "";
let inputArmyLinebreakArray;
let outputArmyArray = [];
let armyArrayIndex = -1;   // anders lösen?
let armyTitle = "";
let firstEmptyLineIndex = "";

function createArmyStringFromInput() {
    inputArmyString = textAreaField.value;
}

function getAndSetArmyName() {
    // inputArmyLinebreakArray = inputArmyString.split((/\r?\n|\r|\n/g));
    const firstLetterIndex = inputArmyString[0];
    firstEmptyLineIndex = inputArmyString.indexOf("\n\n");
    for (i = 0; i <= firstEmptyLineIndex; i++) {
        armyTitle = inputArmyString.slice(firstLetterIndex, firstEmptyLineIndex);
        outputAreaField.textContent = "**" + armyTitle + "**" + "\n";
    }
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

function getUnit(string, unitName, singleModelNames, minSize, weapons, enhancements) {
    startIndex = firstEmptyLineIndex;
    let index;
    for (index = string.indexOf(unitName, startIndex); index !== -1; index = string.indexOf(unitName, startIndex)) {
        // Find the next empty line
        let emptyLineIndex = string.indexOf('\n\n', index);
        if (emptyLineIndex === -1) {
            emptyLineIndex = string.length;    // If no empty line is found, use the end of the string
        }
        let searchArea = string.slice(index, emptyLineIndex);
        const searchAreaLinebreakArray = searchArea.split((/\r?\n|\r|\n/g));
        for (const line of searchAreaLinebreakArray) {
            if (line.includes(unitName) && line.includes("points")) {
                armyArrayIndex += 1;
                outputArmyArray.push({
                    name: unitName,
                    singleModelNames: singleModelNames,
                    numberOfModels: 0,
                    minSize: minSize,
                    points: "",
                    equipedWeapons: [],
                    warlord: [],
                    enhancement: [],
                    keywordIndex: index,
                    nextEmptyLineIndex: emptyLineIndex,
                    searchArea: searchArea
                })
            }
        }

        // checks for number of models in a unit

        for (const singleModelName of singleModelNames) {
            for (const line of searchAreaLinebreakArray) {
                if (line.includes(singleModelName) && line.includes("•")) {
                    const trimmedLine = line.trim();
                    let onlyNumber = Number(trimmedLine.substring(2, (trimmedLine.length - singleModelName.length - 2)));
                    outputArmyArray[armyArrayIndex].numberOfModels += onlyNumber;
                }

            }
        }
        // checks for points
        // for (const line of searchAreaLinebreakArray) {
        //     if (line.includes(unitName) && line.includes("points")) {
        //         const trimmedLine = line.trim();
        //         const onlyPoints = trimmedLine.substring((unitName.length + 2), (trimmedLine.length - 8));
        //         outputArmyArray[armyArrayIndex].points = onlyPoints;
        //     }
        // }

        for (const weapon of weapons) {
            if (searchArea.includes(weapon.name) && weapon.display === "true") {
                const searchAreaLinebreakArray = searchArea.split((/\r?\n|\r|\n/g));
                outputArmyArray[armyArrayIndex].equipedWeapons.push({
                    name: weapon.alias,
                    count: 0
                })
                for (const line of searchAreaLinebreakArray) {
                    if (line.includes(weapon.name)) {
                        for (i = 1; i < 10; i++) {
                            if (line.includes(i)) {
                                outputArmyArray[armyArrayIndex].equipedWeapons[outputArmyArray[armyArrayIndex].equipedWeapons.length - 1].count += i;  // kann ich hier mit this abkürzen?
                            }
                        }
                    }
                }
            }
        }

        if (searchArea.includes("Warlord")) {
            outputArmyArray[armyArrayIndex].warlord.push("Warlord");
        }

        if (searchArea.includes("Enhancement")) {
            for (const enhancement of enhancements) {
                if (searchArea.includes(enhancement)) {
                    outputArmyArray[armyArrayIndex].enhancement.push(enhancement);
                }
            }
        }
        startIndex = index + unitName.length;
    }
}

function getAllUnits() {
    for (const unit of tauEmpire.units) {
        getUnit(inputArmyString, unit.name, unit.singleModelNames, unit.minSize, unit.weapons, unit.enhancements);
    }
}
// in cases ändern! struktur ändern, so dass text content erst am ende gefüllt wird.
function setAllUnits() {
    for (const item of outputArmyArray) {
        if (item.numberOfModels !== 0) {
            if (item.equipedWeapons.length !== 0 && item.warlord.length === 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);  //warum ist index 1 nicht index0?
                outputAreaField.textContent += `- ${item.name} [${item.numberOfModels}x] [${weaponString}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length !== 0 && item.warlord.length !== 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);
                outputAreaField.textContent += `- ${item.name} [${item.numberOfModels}x] [${weaponString}] [${item.warlord}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length === 0 && item.warlord.length !== 0) {
                outputAreaField.textContent += `- ${item.name} [${item.numberOfModels}x] [${item.warlord}] ${item.points}\n`
            }
            else {
                outputAreaField.textContent += `- ${item.name} [${item.numberOfModels}x] ${item.points}\n`
            }
        }

        if (item.numberOfModels === 0) {
            if (item.equipedWeapons.length !== 0 && item.warlord.length === 0 && item.enhancement.length === 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);  //warum ist index 1 nicht index0?
                outputAreaField.textContent += `- ${item.name} [${weaponString}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length !== 0 && item.warlord.length === 0 && item.enhancement !== 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);  //warum ist index 1 nicht index0?
                outputAreaField.textContent += `- ${item.name} [${item.enhancement[0]}] [${weaponString}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length !== 0 && item.warlord.length !== 0 && item.enhancement.length === 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);
                outputAreaField.textContent += `- ${item.name} [${weaponString}] [${item.warlord}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length !== 0 && item.warlord.length !== 0 && item.enhancement.length !== 0) {
                let rawWeaponString = "";
                for (const weapon of item.equipedWeapons) {
                    rawWeaponString += `${weapon.count}x ${weapon.name}, `;
                }
                const weaponString = rawWeaponString.slice(rawWeaponString[1], rawWeaponString.length - 2);
                outputAreaField.textContent += `- ${item.name} [${item.enhancement}] [${weaponString}] [${item.warlord}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length === 0 && item.warlord.length !== 0) {
                outputAreaField.textContent += `- ${item.name} [${item.warlord}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length === 0 && item.warlord.length !== 0 && item.enhancement.length !== 0) {
                outputAreaField.textContent += `- ${item.name} [${item.enhancement[0]}] [${item.warlord}] ${item.points}\n`
            }
            else if (item.equipedWeapons.length === 0 && item.warlord.length === 0 && item.enhancement.length !== 0) {
                outputAreaField.textContent += `- ${item.name} [${item.enhancement[0]}] ${item.points}\n`
            }
            else {
                outputAreaField.textContent += `- ${item.name} ${item.points}\n`
            }
        }
    }
}


function compressList(event) {
    event.preventDefault();
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
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

