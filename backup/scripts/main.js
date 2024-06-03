// Daten
const tauDataSheet01 = "Cadre Fireblade";
const tauDataSheet02 = "Commander Farsight";
const tauDataSheet03 = "Commander Shadowsun";
const tauDataSheet04 = "Commander in Coldstar Battlesuit";
const tauDataSheet05 = "Commander in Enforcer Battlesuit";
const tauDataSheet06 = "Darkstrider";
const tauDataSheet07 = "Ethereal";
const tauDataSheet08 = "Firesight Team";
const tauDataSheet09 = "Kroot Flesh Shaper";
const tauDataSheet10 = "Kroot Lone-Spear";
const tauDataSheet11 = "Kroot Trail Shaper";
const tauDataSheet12 = "Kroot War Shaper";
const tauDataSheet13 = "Breacher Team";
const tauDataSheet14 = "Strike Team";
const tauDataSheet15 = "Kroot Carnivores";
const tauDataSheet16 = "Devilfish";
const tauDataSheet17 = "AX-1-0 Tiger Shark";
const tauDataSheet18 = "Broadside Battlesuits";
const tauDataSheet19 = "Crisis Fireknife Battlesuits";
const tauDataSheet20 = "Crisis Starscythe Battlesuits";
const tauDataSheet21 = "Crisis Sunforge Battlesuits";
const tauDataSheet22 = "Ghostkeel Battlesuit";
const tauDataSheet23 = "Hammerhead Gunship";
const tauDataSheet24 = "Kroot Farstalkers";
const tauDataSheet25 = "Kroot Hounds";
const tauDataSheet26 = "Krootox Rampagers";
const tauDataSheet27 = "Krootox Riders";
const tauDataSheet28 = "Manta";
const tauDataSheet29 = "Pathfinder Team";
const tauDataSheet30 = "Piranhas";
const tauDataSheet31 = "Razorshark Strike Fighter";
const tauDataSheet32 = "Riptide Battlesuit";
const tauDataSheet33 = "Sky Ray Gunship";
const tauDataSheet34 = "Stealth Battlesuits";
const tauDataSheet35 = "Stormsurge";
const tauDataSheet36 = "Sun Shark Bomber";
const tauDataSheet37 = "Ta'unar Supremacy Armour";
const tauDataSheet38 = "Tidewall Droneport"; 
const tauDataSheet39 = "Tidewall Gunrig";
const tauDataSheet40 = "Tidewall Shieldline";
const tauDataSheet41 = "Tiger Shark";
const tauDataSheet42 = "Vespid Stingwings";


const dataSheetList = [
tauDataSheet01,
tauDataSheet02,
tauDataSheet03,
tauDataSheet04,
tauDataSheet05,
tauDataSheet06,
tauDataSheet07,
tauDataSheet08,
tauDataSheet09,
tauDataSheet10,
tauDataSheet11,
tauDataSheet12,
tauDataSheet13,
tauDataSheet14,
tauDataSheet15,
tauDataSheet16,
tauDataSheet17,
tauDataSheet18,
tauDataSheet19,
tauDataSheet20,
tauDataSheet21,
tauDataSheet22,
tauDataSheet23,
tauDataSheet24,
tauDataSheet25,
tauDataSheet26,
tauDataSheet27,
tauDataSheet28,
tauDataSheet29,
tauDataSheet30,
tauDataSheet31,
tauDataSheet32,
tauDataSheet33,
tauDataSheet34,
tauDataSheet35,
tauDataSheet36,
tauDataSheet37,
tauDataSheet39,
tauDataSheet40,
tauDataSheet41,
tauDataSheet42
];  // Anzahl der Datasheets muss erhöht werden, damit alle Codizes damit funkktionieren.

const factionList = ["T’au Empire"];
const detachmentList = ["Kauyon", "Kroot Hunting Pack", "Mont’ka", "Retaliation Cadre"];



// 
const fConv = document.getElementById("finput");
fConv.addEventListener("submit", getOldList);
let pElement = document.getElementById("pelement");
const lastElement = document.getElementById("script");

let textInputField = document.getElementById("tinput");
let textOutputField = document.getElementById("toutput");

let copyToClipboard = document.getElementById("resultForm");     // ist diese Zeile überflüssig, da ich den eventlistener auch an resultDiv hängen könnte?
copyToClipboard.addEventListener("submit", clipboardFunction);



// Input Funktion
function getOldList(event) {
    event.preventDefault();
    let armyString = textInputField.value;
    let simplifiedList = [];
 
    var resultForm = document.createElement("form");
    fConv.insertAdjacentElement("afterend", resultForm);     
    resultForm.setAttribute("id", "resultForm")
    var innerResultDiv = document.createElement("div");
    resultForm.appendChild(innerResultDiv);
    innerResultDiv.setAttribute("id", "innerResultForm");
// create clipboard button
    let input = document.createElement("input") ;
    let clipboardButton = innerResultDiv.insertAdjacentElement("afterend", input);
    clipboardButton.setAttribute("id", "clipboardbutton");
    clipboardButton.setAttribute("type", "submit");
    clipboardButton.setAttribute("for", "resultForm");
    // clipboardButton.setAttribute("onsubmit", "return false");     // Ist das sinnvoll?
    clipboardButton.value = "copy to clipboard";
    

    function clipboardFunction(event) {
        event.preventDefault();
        innerResultDiv.select();
        innerResultDiv.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(innerResultDiv.value);
        alert("Copied the text: " + innerResultDiv.value);
    }
   

    
      

//copy mit mehreren paragraphs
// // Name of army     
//     let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
//     let armyNameParagraph = document.createElement("p");
//             innerResultDiv.appendChild(armyNameParagraph);
//             armyNameParagraph.innerText = armyNameParagraph.innerText + armyLinebreakArray[0];

// // Faction
//     for (faction of factionList){
//         if(armyString.includes(faction)){
//             let factionParagraph = document.createElement("p");
//             innerResultDiv.appendChild(factionParagraph);
//             factionParagraph.innerText = factionParagraph.innerText + faction;      
//          }   
//     }
// // Detachment    
//     for (detachment of detachmentList){
//         if(armyString.includes(detachment)){
//             let detachmentParagraph = document.createElement("p");
//             innerResultDiv.appendChild(detachmentParagraph);
//             detachmentParagraph.innerText = detachmentParagraph.innerText + detachment;      
//          }   
//     }                                                          // einzelne Paragraphs für Einträge oder besser ein paragraph mit zeilenumbruch?

// Name of army     
    let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    let firstParagraph = document.createElement("p");
            innerResultDiv.appendChild(firstParagraph);
            firstParagraph.innerText = firstParagraph.innerText + armyLinebreakArray[0];

// Faction
    for (faction of factionList){
        if(armyString.includes(faction)){
            firstParagraph.innerText = `${firstParagraph.innerText} 
            ${faction}`
         }   
    }
// Detachment    
    for (detachment of detachmentList){
        if(armyString.includes(detachment)){   
            firstParagraph.innerText = `${firstParagraph.innerText} 
            ${detachment}`
         }   
    } 
// Armylist
    for (const dataSheet of dataSheetList) {
        const regularExpression = new RegExp(dataSheet, "g");
        var count = (armyString.match(regularExpression) || []).length;
        console.log(count);
        for (i = 1; i <= count; i++) {
            if (count >= 1) {
                simplifiedList.push(dataSheet);
                console.log(simplifiedList);
            }
        var unorderedList = document.createElement("ul");                    //an der richtigen Stelle im Code? werden so nicht mehrere Listen erstellt?
        let listElement = innerResultDiv.appendChild(unorderedList);
                        
        var li = document.createElement("li");
        listElement.appendChild(li);
        li.innerHTML = li.innerHTML + dataSheet;
        }
    }
}
    // simplifiedList.forEach(renderSimplifiedList)
    // function renderSimplifiedList() {                   // wie wird element definiert? Wiw funktioniert das überhaupt? 
    //             // warum funktioniert auch element? dataSheet bringt das gleiche Ergebnis
    // }


// To Do:
// Anzahl der Ausgaben von datasheet stimmt nicht   ->erledigt!
// Liste taucht ausserhalb von p auf -> erledigt!
// entscheiden, ob ein paragraph oder mehrere am Anfang besser sind
// ist es möglich Aufzählungszeichen statt einer Liste zu nutzen?
// button einfügen für "copy to clipboard"
//reset am anfang einbauen damit die die ul nicht ständig erweitert wird sondern erneuert
// Ausrüstungsoptionen einfügen
// Machen Schalter für verschiedene Armeen Sinn?
// Schalter für verschiedene Armeelisten tools?
// Optionsschalter für Anzeige der Ausrüstung?






