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

let inputArmyString = "";
let firstEmptyLineIndex = "";
let outputArmyArray = [];
let outputArmyArrayIndex = -1;   // anders lösen?
let compressedArmyArray = [];
let inputArmyLinebreakArray = [];



function identifyOrigin() {
    inputArmyString = textAreaField.value;
    inputArmyLinebreakArray = inputArmyString.split((/\r?\n|\r|\n/g));
    if (inputArmyLinebreakArray[0].includes("++++++++++++++++++++")) {
        compressNRList();
    }
    else {
        compressGwList();
    }
}

function compressGwList() {
    
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
                compressedArmyArray.push("*" + item + "*")
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
                    outputArmyArrayIndex++;
                    outputArmyArray.push({
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
                        outputArmyArray[outputArmyArrayIndex].numberOfModels += onlyNumber;
                    }

                }
            }
            // checks for points
            for (const line of searchAreaLinebreakArray) {
                if (line.includes(unitName) && line.includes("oints")) {
                    const trimmedLine = line.trim();
                    const onlyPoints = trimmedLine.substring((unitName.length + 2), (trimmedLine.length - 8));
                    outputArmyArray[outputArmyArrayIndex].points = onlyPoints;
                }
            }

            for (const weapon of weapons) {
                if (searchArea.includes(weapon.name) && weapon.display === "true") {
                    const searchAreaLinebreakArray = searchArea.split((/\r?\n|\r|\n/g));
                    outputArmyArray[outputArmyArrayIndex].equipedWeapons.push({
                        name: weapon.alias,
                        count: 0
                    })
                    for (const line of searchAreaLinebreakArray) {
                        if (line.includes(weapon.name)) {
                            for (i = 1; i < 10; i++) {
                                if (line.includes(i)) {
                                    outputArmyArray[outputArmyArrayIndex].equipedWeapons[outputArmyArray[outputArmyArrayIndex].equipedWeapons.length - 1].count += i;  // kann ich hier mit this abkürzen?
                                }
                            }
                        }
                    }
                }
            }

            if (searchArea.includes("Warlord")) {
                outputArmyArray[outputArmyArrayIndex].warlord.push("Warlord");
            }

            // if (searchArea.includes("Enhancement")) {
            if(enhancements.length !== 0){   
            for (const enhancement of enhancements) {
                    if (searchArea.includes(enhancement)) {
                        outputArmyArray[outputArmyArrayIndex].enhancement.push(enhancement);
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
    function setArmyToOutput() {
        let index = compressedArmyArray.length - 1
        for (const item of outputArmyArray) {
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


    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
    outputAreaField.focus();
    getAndSetArmyName();
    getAndSetFaction();
    getAndSetDetachment();
    getAllUnitsToObject();
    setArmyToOutput();
}

function copyToClipboard() {
    // event.preventDefault();
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
