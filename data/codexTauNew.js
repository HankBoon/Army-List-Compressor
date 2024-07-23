const tauEmpire = {
  name: [
    "T’au Empire",
    "T'au Empire",
  ],
  detachments: [
    "Kauyon",
    "Kroot Hunting Pack",
    "Mont’ka",
    "Retaliation Cadre"
  ],
  formatSpecs: {
    gw: {
      pointsIdentifier: "oints",
      charactersAfterPoints: 8,
      armyIdentifier: "GW",
      factionMarkdown: "*",
    },
    nr: {
      pointsIdentifier: "pts",
      charactersAfterPoints: 5,
      armyIdentifier: "NR",
      factionMarkdown: "**"
    }
  },
  units: [
    {
      name: "Cadre Fireblade",
      singleModelNames: [],
      minSize: 1,
      points: 50,
      warlord: true,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Fireblade pulse rifle", display: "", alias: "" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly"
      ]
    },
    {
      name: "Commander Farsight",
      singleModelNames: [],
      minSize: 1,
      points: 105,
      warlord: true,
      weapons: [
        { name: "Dawn Blade", display: "", alias: "" },
        { name: "High-intensity plasma rifle", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Commander Shadowsun",
      singleModelNames: [],
      minSize: 1,
      points: 100,
      warlord: true,
      weapons: [
        { name: "Advanced Guardian Drone", display: "", alias: "Drone" },
        { name: "Battlesuit fists", display: "", alias: "Fists" },
        { name: "Command-link Drone (Aura)", display: "", alias: "" },
        { name: "Flechette launcher", display: "", alias: "" },
        { name: "High-energy fusion blaster", display: "", alias: "" },
        { name: "Light missile pod", display: "", alias: "" },
        { name: "Pulse pistol", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Commander in Coldstar Battlesuit",
      singleModelNames: [],
      minSize: 1,
      points: 95,
      warlord: true,
      weapons: [
        { name: "Airbursting fragmentation projector", display: "true", alias: "AFP" },
        { name: "Battlesuit Support System", display: "true", alias: "BSS" },
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Burst cannon", display: "true", alias: "BC" },
        { name: "Cyclic ion blaster", display: "true", alias: "CIB" },
        { name: "Fusion blaster", display: "true", alias: "FB" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "High-output burst cannon", display: "true", alias: "HOBC" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Missile pod", display: "true", alias: "MP" },
        { name: "Plasma rifle", display: "true", alias: "PR" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Shield Generator", display: "true", alias: "SH" },
        { name: "T'au flamer", display: "true", alias: "Flamer" },
        { name: "T’au flamer", display: "true", alias: "Flamer" },
        { name: "Weapon Support System", display: "true", alias: "WSS" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly",
        "Prototype Weapon System",
        "Starflare Ignition System",
        "Puretide Engram Neurochip",
        "Internal Grenade Racks"
      ]
    },
    {
      name: "Commander in Enforcer Battlesuit",
      singleModelNames: [],
      minSize: 1,
      points: 80,
      warlord: true,
      weapons: [
        { name: "Airbursting fragmentation projector", display: "true", alias: "AFP" },
        { name: "Battlesuit Support System", display: "true", alias: "BSS" },
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Burst cannon", display: "true", alias: "BC" },
        { name: "Cyclic ion blaster", display: "true", alias: "CIB" },
        { name: "Fusion blaster", display: "true", alias: "FB" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Missile pod", display: "true", alias: "MP" },
        { name: "Plasma rifle", display: "true", alias: "PR" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Shield Generator", display: "true", alias: "SG" },
        { name: "T'au flamer", display: "true", alias: "Flamer" },
        { name: "T’au flamer", display: "true", alias: "Flamer" },
        { name: "Weapon Support System", display: "true", alias: "WSS" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly",
        "Prototype Weapon System",
        "Starflare Ignition System",
        "Puretide Engram Neurochip",
        "Internal Grenade Racks"
      ]
    },
    {
      name: "Darkstrider",
      singleModelNames: [],
      minSize: 1,
      points: 60,
      warlord: true,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Shade", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Ethereal",
      singleModelNames: [],
      minSize: 1,
      points: 50,
      warlord: true,
      weapons: [
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Honour stave", display: "", alias: "" },
        { name: "Hover Drone", display: "", alias: "" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly"
      ]
    },
    {
      name: "Firesight Team",
      singleModelNames: [],
      minSize: 1,
      points: 70,
      warlord: true,
      weapons: [
        { name: "Close combat weapons", display: "", alias: "" },
        { name: "Longshot pulse rifles", display: "", alias: "" },
        { name: "Pulse pistol", display: "", alias: "" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly"
      ]
    },
    {
      name: "Kroot Flesh Shaper",
      singleModelNames: [],
      minSize: 1,
      points: 55,
      warlord: true,
      weapons: [
        { name: "Kroot scattergun", display: "", alias: "" },
        { name: "Twin ritualistic blades", display: "", alias: "" }
      ],
      enhancements: [
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Strategic Conqueror",
        "Strike Swiftly",
        "Kroothawk Flock",
        "Borthrod Gland"
      ]
    },
    {
      name: "Kroot Lone-spear",
      singleModelNames: [],
      minSize: 1,
      points: 90,
      warlord: true,
      weapons: [
        { name: "Blast javelin", display: "true", alias: "Javelin" },
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Hunting javelin", display: "", alias: "" },
        { name: "Kalamandra's bite", display: "", alias: "" },
        { name: "Kroot long gun", display: "true", alias: "Long Gun" }
      ],
      enhancements: [
        "Exemplar of the Kauyon",
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Through Unity, Devastation",
        "Strategic Conqueror",
        "Exemplar of the Mont’ka",
        "Coordinated Exploitation",
        "Strike Swiftly",
        "Kroothawk Flock"
      ]
    },
    {
      name: "Kroot Trail Shaper",
      singleModelNames: [],
      minSize: 1,
      points: 65,
      warlord: true,
      weapons: [
        { name: "Kroot rifle", display: "", alias: "" },
        { name: "Shaper's blade", display: "", alias: "" }
      ],
      enhancements: [
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Strategic Conqueror",
        "Strike Swiftly",
        "Kroothawk Flock",
        "Nomadic Hunter"
      ]
    },
    {
      name: "Kroot War Shaper",
      singleModelNames: [],
      minSize: 1,
      points: 60,
      warlord: true,
      weapons: [
        { name: "Bladestave and prey-hook", display: "true", alias: "Bladestave/Hook" },
        { name: "Dart-bow and tri-blade", display: "true", alias: "Bow/Blade" },
        { name: "Kroot pistol", display: "", alias: "" },
        { name: "Shaper's blade", display: "", alias: "" }
      ],
      enhancements: [
        "Solid-image Projection Unit",
        "Precision of the Patient Hunter",
        "Strategic Conqueror",
        "Strike Swiftly",
        "Kroothawk Flock",
        "Root-carved Weapons"
      ]
    },
    {
      name: "Breacher Team",
      singleModelNames: [],
      minSize: 10,
      points: 100,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Pulse blaster", display: "", alias: "" },
        { name: "Pulse pistol", display: "", alias: "" },
        { name: "Guardian Drone", display: "true", alias: "Guardian Drone" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Support turret", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Strike Team",
      singleModelNames: [],
      minSize: 10,
      points: 75,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Pulse pistol", display: "", alias: "" },
        { name: "Pulse rifle", display: "", alias: "" },
        { name: "Guardian Drone", display: "true", alias: "Guardian Drone" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Support turret", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Devilfish",
      singleModelNames: [],
      minSize: 1,
      points: 85,
      weapons: [
        { name: "Accelerator burst cannon", display: "", alias: "" },
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "Seeker" },
        { name: "Smart missile system", display: "true", alias: "SMS" },
        { name: "Twin pulse carbine", display: "true", alias: "TPC" }
      ],
      enhancements: []
    },
    {
      name: "AX-1-0 Tiger Shark",
      singleModelNames: [],
      minSize: 1,
      points: 315,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Burst cannon", display: "true", alias: "BC" },
        { name: "Cyclic ion blaster", display: "true", alias: "CIB" },
        { name: "Missile pod", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "Seeker" },
        { name: "Twin heavy rail cannon", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Broadside Battlesuits",
      singleModelNames: ["Broadside Shas’vre", "Broadside Shas’ui"],
      minSize: 1,
      points: 90,
      weapons: [
        { name: "Heavy rail rifle", display: "true", alias: "Rail" },
        { name: "High-yield missile pods", display: "true", alias: "Missle pods" },
        { name: "Crushing bulk", display: "", alias: "" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Missile Drone", display: "true", alias: "Missle Drone" },
        { name: "Missile pod", display: "true", alias: "Missle Drone" },
        { name: "Seeker missile", display: "true", alias: "Seeker" },
        { name: "Twin plasma rifle", display: "true", alias: "Plasma" },
        { name: "Twin smart missile system", display: "true", alias: "SMS" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Weapon Support System", display: "true", alias: "WSS" }
      ],
      enhancements: []
    },
    {
      name: "Crisis Fireknife Battlesuits",
      singleModelNames: ["Crisis Starscythe Shas’vre", "Crisis Starscythe Shas’ui"],
      minSize: 3,
      points: 130,
      weapons: [
        { name: "Missile pod", display: "true", alias: "Missile pod" },
        { name: "Plasma rifle", display: "true", alias: "Plasma" },
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: []
    },
    {
      name: "Crisis Starscythe Battlesuits",
      singleModelNames: ["Crisis Starscythe Shas’vre", "Crisis Starscythe Shas’ui"],
      minSize: 3,
      points: 110,
      weapons: [
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Burst cannon", display: "true", alias: "Burst" },
        { name: "T’au flamer", display: "true", alias: "Flamer" },
        { name: "T'au flamer", display: "true", alias: "Flamer" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: []
    },
    {
      name: "Crisis Sunforge Battlesuits",
      singleModelNames: ["Crisis Sunforge Shas’vre", "Crisis Sunforge Shas’ui"],
      minSize: 3,
      points: 150,
      weapons: [
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Fusion blaster", display: "", alias: "" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: []
    },
    {
      name: "Ghostkeel Battlesuit",
      singleModelNames: [],
      minSize: 1,
      points: 160,
      weapons: [
        { name: "Battlesuit Support System", display: "true", alias: "BSS" },
        { name: "Cyclic ion raker", display: "true", alias: "Ion Raker" },
        { name: "Fusion collider", display: "true", alias: "Fusion Collider" },
        { name: "Ghostkeel fists", display: "", alias: "" },
        { name: "T’au flamer", display: "true", alias: "Flamer" },
        { name: "Twin T'au flamer", display: "true", alias: "Flamer" },
        { name: "Twin burst cannon", display: "true", alias: "Burst" },
        { name: "Twin fusion blaster", display: "true", alias: "Twin fusion" }
      ],
      enhancements: []
    },
    {
      name: "Hammerhead Gunship",
      singleModelNames: [],
      minSize: 1,
      points: 145,
      weapons: [
        { name: "Accelerator burst cannon", display: "true", alias: "Burst" },
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Ion cannon", display: "true", alias: "Ion" },
        { name: "Railgun", display: "true", alias: "Rail" },
        { name: "Seeker missile", display: "", alias: "Seeker" },
        { name: "Twin pulse carbine", display: "true", alias: "TPC" },
        { name: "Twin smart missile system", display: "true", alias: "SMS" },
        { name: "Smart missile system", display: "true", alias: "SMS" }
      ],
      enhancements: []
    },
    {
      name: "Kroot Carnivores",
      singleModelNames: ["Long-quill", "Kroot Carnivore"],
      minSize: 10,
      points: 75,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Kroot carbine", display: "true", alias: "Carbine" },
        { name: "Kroot pistol", display: "", alias: "" },
        { name: "Kroot rifle", display: "", alias: "" },
        { name: "Tanglebomb launcher", display: "true", alias: "Tanglebomb" }
      ],
      enhancements: []
    },
    {
      name: "Kroot Farstalkers",
      singleModelNames: [],
      minSize: 12,
      points: 85,
      weapons: [
        { name: "Farstalker firearm", display: "", alias: "" },
        { name: "Kroot pistol", display: "", alias: "" },
        { name: "Ritual blade", display: "", alias: "" },
        { name: "T’au-tech rifle", display: "true", alias: "Tech Rifle" },
        { name: "T'au-tech rifle", display: "true", alias: "Tech Rifle" },
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Ripping fangs", display: "", alias: "" },
        { name: "Dvorgite skinner", display: "true", alias: "Dvorgite skinner" },
        { name: "Londaxi tribalest", display: "true", alias: "Londaxi tribalest" },
        { name: "Pech’ra", display: "true", alias: "Pech’ra" }
      ],
      enhancements: []
    },
    {
      name: "Kroot Hounds",
      singleModelNames: ["Kroot Hound"],
      minSize: 5,
      points: 40,
      maxCount: 10,
      weapons: [
        { name: "Ripping fangs", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Krootox Rampagers",
      singleModelNames: ["Krootox Rampagers"],
      minSize: 1,
      points: 110,
      maxCount: 6,
      weapons: [
        { name: "Hunting blades", display: "", alias: "" },
        { name: "Kroot pistol and hunting javelins", display: "", alias: "" },
        { name: "Rampager fists", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Krootox Riders",
      singleModelNames: ["Krootox Rider"],
      minSize: 1,
      points: 35,
      maxCount: 3,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Krootox fists", display: "", alias: "" },
        { name: "Repeater cannon", display: "true", alias: "Repeater cannon" },
        { name: "Tanglecannon", display: "true", alias: "Tanglecannon" }
      ],
      enhancements: []
    },
    {
      name: "Manta",
      singleModelNames: [],
      minSize: 1,
      points: 2100,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Heavy rail cannon", display: "", alias: "" },
        { name: "Ion cannon", display: "", alias: "" },
        { name: "Long-barrelled burst cannon array", display: "", alias: "" },
        { name: "Missile pod", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Pathfinder Team",
      singleModelNames: [],
      minSize: 10,
      points: 90,
      weapons: [
        { name: "Close combat weapon", display: "", alias: "" },
        { name: "Grav-inhibitor Drone", display: "true", alias: "Grav Drone" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Pulse Accelerator Drone", display: "true", alias: "Pulse Acc Drone" },
        { name: "Pulse carbine", display: "", alias: "" },
        { name: "Pulse pistol", display: "", alias: "" },
        { name: "Recon Drone", display: "true", alias: "Recon Drone" },
        { name: "Semi-automatic grenade launcher", display: "", alias: "" },
        { name: "Shield Drone", display: "true", alias: "SD" },
        { name: "Ion rifle", display: "true", alias: "Ion Rifle" },
        { name: "Rail rifle", display: "true", alias: "Rail rifle" }
      ],
      enhancements: []
    },
    {
      name: "Piranhas",
      singleModelNames: ["Piranha"],
      minSize: 1,
      points: 55,
      maxCount: 3,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Piranha burst cannon", display: "true", alias: "Burst" },
        { name: "Piranha fusion blaster", display: "true", alias: "Fusion" },
        { name: "Seeker missile", display: "", alias: "Seeker" },
        { name: "Twin pulse carbine", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Piranha",
      singleModelNames: ["Piranhas"],
      minSize: 1,
      points: 55,
      maxCount: 3,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Piranha burst cannon", display: "true", alias: "Burst" },
        { name: "Piranha fusion blaster", display: "true", alias: "Fusion" },
        { name: "Seeker missile", display: "", alias: "Seeker" },
        { name: "Twin pulse carbine", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Razorshark Strike Fighter",
      singleModelNames: [],
      minSize: 1,
      points: 170,
      weapons: [
        { name: "Accelerator burst cannon", display: "true", alias: "Burst" },
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Missile pod", display: "true", alias: "Missile pod" },
        { name: "Quad ion turret", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Riptide Battlesuit",
      singleModelNames: [],
      minSize: 1,
      points: 180,
      weapons: [
        { name: "Heavy burst cannon", display: "true", alias: "Burst" },
        { name: "Ion accelerator", display: "true", alias: "Ion" },
        { name: "Missile Drone", display: "true", alias: "Missile Drone" },
        { name: "Riptide fists", display: "", alias: "" },
        { name: "Twin fusion blaster", display: "true", alias: "Fusion" },
        { name: "Twin plasma rifle", display: "true", alias: "Plasma" },
        { name: "Twin smart missile system", display: "true", alias: "SMS" },
        { name: "Missile pod", display: "true", alias: "Missile Drone" }
      ],
      enhancements: []
    },
    {
      name: "Sky Ray Gunship",
      singleModelNames: [],
      minSize: 1,
      points: 140,
      weapons: [
        { name: "Accelerator burst cannon", display: "true", alias: "Burst" },
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Seeker missile rack", display: "", alias: "Seeker" },
        { name: "Smart missile system", display: "true", alias: "SMS" },
        { name: "Twin pulse carbine", display: "true", alias: "TPC" }
      ],
      enhancements: []
    },
    {
      name: "Stealth Battlesuits",
      singleModelNames: ["Stealth Shas’vre", "Stealth Shas’ui", "Stealth Shas'vre", "Stealth Shas'ui"],
      minSize: 3,
      points: 60,
      weapons: [
        { name: "Battlesuit Support System", display: "true", alias: "BSS" },
        { name: "Battlesuit fists", display: "", alias: "" },
        { name: "Burst cannon", display: "", alias: "" },
        { name: "Fusion blaster", display: "true", alias: "Fusion" },
        { name: "Gun Drone", display: "true", alias: "GD" },
        { name: "Twin pulse carbine", display: "true", alias: "GD" },
        { name: "Homing Beacon", display: "", alias: "" },
        { name: "Marker Drone", display: "true", alias: "MD" },
        { name: "Shield Drone", display: "true", alias: "SD" }
      ],
      enhancements: []
    },
    {
      name: "Stormsurge",
      singleModelNames: [],
      minSize: 1,
      points: 400,
      weapons: [
        { name: "Cluster rocket system", display: "", alias: "" },
        { name: "Destroyer missiles", display: "", alias: "" },
        { name: "Pulse blast cannon", display: "true", alias: "Pulse blast cannon" },
        { name: "Pulse driver cannon", display: "true", alias: "Pulse driver cannon" },
        { name: "Thunderous footfalls", display: "", alias: "" },
        { name: "Twin T'au flamer", display: "true", alias: "Flamer" },
        { name: "Twin airbursting fragmentation projector", display: "true", alias: "TAFP" },
        { name: "Twin burst cannon", display: "true", alias: "Burst" },
        { name: "Twin smart missile system", display: "true", alias: "SMS" }
      ],
      enhancements: []
    },
    {
      name: "Sun Shark Bomber",
      singleModelNames: [],
      minSize: 1,
      points: 160,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Missile pod", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "" },
        { name: "Twin ion rifle", display: "", alias: "" },
        { name: "Twin missile pod", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Ta'unar Supremacy Armour",
      singleModelNames: [],
      minSize: 1,
      points: 790,
      weapons: [
        { name: "Burst cannon", display: "", alias: "" },
        { name: "Crushing feet", display: "", alias: "" },
        { name: "Fragmentation cluster shell launcher", display: "true", alias: "Frag Launcher" },
        { name: "Fusion eradicator", display: "true", alias: "Fusion eradicator" },
        { name: "Heavy rail cannon array", display: "true", alias: "Rail cannon array" },
        { name: "Nexus missile launcher", display: "true", alias: "Nexus missile launcher" },
        { name: "Pulse ordnance driver", display: "true", alias: "Pulse ordnance driver" },
        { name: "Smart missile system", display: "", alias: "" },
        { name: "Tri-axis ion cannon", display: "true", alias: "Tri-axis ion cannon" }
      ],
      enhancements: []
    },
    {
      name: "Tidewall Droneport",
      singleModelNames: [],
      minSize: 1,
      points: 85,
      weapons: [
        { name: "Drone defenders", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Tidewall Gunrig",
      singleModelNames: [],
      minSize: 1,
      points: 90,
      weapons: [
        { name: "Supremacy railgun", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Tidewall Shieldline",
      singleModelNames: [],
      minSize: 1,
      points: 105,
      weapons: [
        { name: "Tidewall Defence Platform", display: "true", alias: "Defence platform" },
        { name: "Tidewall Shieldline", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Tiger Shark",
      singleModelNames: [],
      minSize: 1,
      points: 275,
      weapons: [
        { name: "Armoured hull", display: "", alias: "" },
        { name: "Burst cannon", display: "true", alias: "Burst" },
        { name: "Cyclic ion blaster", display: "true", alias: "CIB" },
        { name: "Ion cannon", display: "", alias: "" },
        { name: "Missile pod", display: "", alias: "" },
        { name: "Seeker missile", display: "", alias: "" },
        { name: "Skyspear missile rack", display: "", alias: "" },
        { name: "Swiftstrike burst cannon", display: "", alias: "" },
        { name: "Swiftstrike railgun", display: "", alias: "" },
        { name: "Transport Bay", display: "", alias: "" }
      ],
      enhancements: []
    },
    {
      name: "Vespid Stingwings",
      singleModelNames: [],
      minSize: 5,
      points: 65,
      weapons: [
        { name: "Neutron blaster", display: "", alias: "" },
        { name: "Stingwing claws", display: "", alias: "" }
      ],
      enhancements: []
    }
  ]
}