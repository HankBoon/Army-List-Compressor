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

let armyArrayIndex = -1;   // anders lösen?
let inputArmyString = "";
let inputArmyLinebreakArray;
let outputArmyObject = [];
let firstEmptyLineIndex = "";
let compressedArmyArray = [];

function createArmyStringFromInput() {
    inputArmyString = textAreaField.value;
}

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
    if (inputArmyString.includes(tauEmpire.name)) {
        compressedArmyArray.push("*" + tauEmpire.name + "*") 
    }
}

function getAndSetDetachment() {
    for (const detachment of tauEmpire.detachments) {
        if (inputArmyString.includes(detachment)) {
            compressedArmyArray.push("*" + detachment + "*")
        }
    }
}

function createUnitObject(string, unitName, singleModelNames, minSize, weapons, enhancements) {
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
            if (line.includes(unitName) && line.includes("oints")) {
                armyArrayIndex++;
                outputArmyObject.push({
                    name: unitName,
                    singleModelNames: singleModelNames,
                    numberOfModels: 0,
                    minSize: minSize,
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
                    outputArmyObject[armyArrayIndex].numberOfModels += onlyNumber;
                }
                
            }
        }
        // checks for points
        for (const line of searchAreaLinebreakArray) {
            if (line.includes(unitName) && line.includes("oints")) {
                const trimmedLine = line.trim();
                const onlyPoints = trimmedLine.substring((unitName.length + 2), (trimmedLine.length - 8));
                outputArmyObject[armyArrayIndex].points = onlyPoints;
            }
        }
        
        for (const weapon of weapons) {
            if (searchArea.includes(weapon.name) && weapon.display === "true") {
                const searchAreaLinebreakArray = searchArea.split((/\r?\n|\r|\n/g));
                outputArmyObject[armyArrayIndex].equipedWeapons.push({
                    name: weapon.alias,
                    count: 0
                })
                for (const line of searchAreaLinebreakArray) {
                    if (line.includes(weapon.name)) {
                        for (i = 1; i < 10; i++) {
                            if (line.includes(i)) {
                                outputArmyObject[armyArrayIndex].equipedWeapons[outputArmyObject[armyArrayIndex].equipedWeapons.length - 1].count += i;  // kann ich hier mit this abkürzen?
                            }
                        }
                    }
                }
            }
        }
        
        if (searchArea.includes("Warlord")) {
            outputArmyObject[armyArrayIndex].warlord.push("Warlord");
        }
        
        if (searchArea.includes("Enhancement")) {
            for (const enhancement of enhancements) {
                if (searchArea.includes(enhancement)) {
                    outputArmyObject[armyArrayIndex].enhancement.push(enhancement);
                }
            }
        }
        startIndex = index + unitName.length;
    }
}

function getAllUnitsToObject() {
    for (const unit of tauEmpire.units) {
        createUnitObject(inputArmyString, unit.name, unit.singleModelNames, unit.minSize, unit.weapons, unit.enhancements);
    }
}
function setAllUnitsToOutput() {
    let index = compressedArmyArray.length -1
    for (const item of outputArmyObject) {
        index++;
        compressedArmyArray.push(`- ${item.name}`)
        if (item.numberOfModels !== 0 && modelCountButton.checked) {
            compressedArmyArray[index] += ` [${item.numberOfModels}]`
        }
        if (item.enhancement.length !== 0 && enhancementsButton.checked) {
            compressedArmyArray[index] += ` [${item.enhancement[0]}]`
        }
        if (item.warlord.length !== 0 && warlordbutton.checked) {
            compressedArmyArray[index] += ` [Warlord]`
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

function compressList() {
    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
    outputAreaField.focus();
    createArmyStringFromInput();
    getAndSetArmyName();
    getAndSetFaction();
    getAndSetDetachment();
    getAllUnitsToObject();
    setAllUnitsToOutput();
}

function copyToClipboard() {
    // event.preventDefault();
    navigator.clipboard.writeText(outputAreaField.textContent);
    alert("That´s an awsome list, Shas´el!\nCopied to clipboard.");
}

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    compressList();
});
inputForm.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        compressList();
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

// console.log(outputArmyObject);
// console.log(allUnitsArray);
