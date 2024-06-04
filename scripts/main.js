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

// Hier werden alle Fraktionen eingetragen
const factionList = ["T’au Empire"];

// Hier werden alle Detachments eingetragen
const detachmentList = ["Kauyon", "Kroot Hunting Pack", "Mont’ka", "Retaliation Cadre"];

// Convert Funktion
function convert(event) {
    event.preventDefault();
    document.getElementById("resultForm").style.display = "flex";
    const textareaField = document.getElementById("inputArea");
    const armyString = textareaField.value;

    // Name of army     
    let armyLinebreakArray = armyString.split((/\r?\n|\r|\n/g));
    let resultParagraph = document.getElementById("resultParagraph")
    resultParagraph.innerText = `${armyLinebreakArray[0]}`;
    
    // Faction
    for (faction of factionList) {
        if (armyString.includes(faction)) {
            resultParagraph.innerText = `**${resultParagraph.innerText}**
            *${faction}*`
        }
    }
    // Detachment    
    for (detachment of detachmentList) {
        if (armyString.includes(detachment)) {
            resultParagraph.innerText = `${resultParagraph.innerText}
            *${detachment}*\n`
        }
    }
    // Armylist
    for (const dataSheet of dataSheetList) {
        const regularExpression = new RegExp(dataSheet, "g");
        let count = (armyString.match(regularExpression) || []).length;
        for (i = 1; i <= count; i++) {
            resultParagraph.innerText = `${resultParagraph.innerText}
            - ${dataSheet}`;                                           // umstrukturieren
        }
    }
    const resultForm = document.getElementById("resultForm");
    resultForm.addEventListener("submit", copyFunction);
}

function copyFunction(event) {
    event.preventDefault();
    const innerResultDiv = document.getElementById("innerResultDiv");
    navigator.clipboard.writeText(innerResultDiv.innerText);
    alert("Copied simplified list to clipboard");
}

const inputForm = document.getElementById("inputForm");
inputForm.addEventListener("submit", convert);
// wo müssen diese Zeilen hin?

// To Do:
// Anzahl der Ausgaben von datasheet stimmt nicht   ->erledigt!
// Liste taucht ausserhalb von p auf -> erledigt!
// entscheiden, ob ein paragraph oder mehrere am Anfang besser sind -> erledigt!
// ist es möglich Aufzählungszeichen statt einer Liste zu nutzen? -> erledigt!
// button einfügen für "copy to clipboard"
//reset am anfang einbauen damit die die ul nicht ständig erweitert wird sondern erneuert
// Ausrüstungsoptionen einfügen
// Machen Schalter für verschiedene Armeen Sinn?
// Schalter für verschiedene Armeelisten tools? bzw. automatische erkennung der verwendeten tools
// Optionsschalter für Anzeige der Ausrüstung?
//css aufräumen!-> erledigt!
// backlog  Trello
//regex für 
// Daten auslagern
// Markdown umsetzen ->erledigt!
// Alert mit anderer Benachrichtigung umsetzen






