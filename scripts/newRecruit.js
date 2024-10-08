// identifyOrigin(points, charactersAfterPoints,)
// compressNRList(pts, 5 )

function compressNRList() {



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

    function createUnitObject(string, unitName, singleModelNames, minSize, weapons, enhancements, warlord) {
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
                if (line.includes(unitName) && line.includes("pts")) {
                    outputArmyArrayIndex++;
                    outputArmyArray.push({
                        name: unitName,
                        numberOfModels: 0,
                        minSize: minSize,
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
            }
            // console.log(outputArmyArray[outputArmyArrayIndex].name);
            // console.log(outputArmyArray[outputArmyArrayIndex]);
            startIndex = index + unitName.length;
        }
    }
    function getPoints() {
        for (const item of outputArmyArray) {
            for (const line of item.searchAreaLinebreakArray) {
                if (line.includes(item.name) && line.includes("pts")) {
                    const trimmedLine = line.trim();
                    const onlyPoints = trimmedLine.substring((item.name.length + 2), (trimmedLine.length - 5));
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

    function getAllUnitsToObject() {
        for (const unit of tauEmpire.units) {
            createUnitObject(inputArmyString, unit.name, unit.singleModelNames, unit.minSize, unit.weapons, unit.enhancements, unit.warlord);
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


    inputForm.style.display = "none";
    resultForm.style.display = "flex";
    resetButton.style.display = "flex";
    outputAreaField.focus();
    getAndSetFaction();
    getandSetTotalPoints();
    getAndSetDetachment();
    getAllUnitsToObject();
    getPoints();
    getWeapons();
    getWarlord();
    getEnhancement();
    getModelCount();
    setArmyToOutput();
}