function getAbilityTrigger(tree, ability) {
    const abilityTriggerList = {
        "Dawnbringer": [
            { "Soothing Combos": "Combo" },
            { "Ward of Light": "Right" },
            { "Radiant Blessing": "Sneak Left" },
            { "Bottled Sunlight": "Sneak Right" },
            { "Sundrops": "Spawner Break" },
            { "Divine Beam": "Sneak Bow" },
            { "Spark of Inspiration": "Swap" },
            { "Eternal Savior": "Lifeline" },
            { "Enlightenment": "Passive" },
            { "Lightning Bottle": "Passive" },
            { "Rejuvenation": "Passive" }
        ],
        "Earthbound": [
            { "Earthen Combos": "Combo" },
            { "Crushing Earth": "Right" },
            { "Taunt": "Sneak Left" },
            { "Iron Grip": "Sneak Right" },
            { "Entrench": "Spawner Break" },
            { "Earthquake": "Sneak Bow" },
            { "Earthen Wrath": "Swap" },
            { "Bramble Shell": "Passive" },
            { "Bulwark": "Passive" },
            { "Toughness": "Passive" }
        ],
        "Flamecaller": [
            { "Volcanic Combos": "Combo" },
            { "Fireball": "Right" },
            { "Igneous Rune": "Sneak Left" },
            { "Flamestrike": "Sneak Right" },
            { "Flame Spirit": "Spawner Break" },
            { "Pyroblast": "Sneak Bow" },
            { "Volcanic Meteor": "Swap" },
            { "Apocalypse": "Lifeline" },
            { "Detonation": "Passive" },
            { "Primordial Mastery": "Passive" },
            { "Pyromania": "Passive" }
        ],
        "Frostborn": [
            { "Frigd Combos": "Combo" },
            { "Ice Lance": "Right" },
            { "Snowstorm": "Sneak Left" },
            { "Ice Barrier": "Sneak Right" },
            { "Permafrost": "Spawner Break" },
            { "Piercing Cold": "Sneak Bow" },
            { "Avalanche": "Swap" },
            { "Cryobox": "Lifeline" },
            { "Frozen Domain": "Passive" },
            { "Icebreaker": "Passive" }
        ],
        "Shadowdancer": [
            { "Dark Combos": "Combo" },
            { "Advancing Shadows": "Right" },
            { "Cloak of Shadows": "Sneak Left" },
            { "Blade Flurry": "Sneak Right" },
            { "Phantom Force": "Spawner Break" },
            { "Summy Decoy": "Sneak Bow" },
            { "Chaos Dagger": "Swap" },
            { "Escape Artist": "Lifeline" },
            { "Brutalize": "Passive" },
            { "Deadly Strike": "Passive" },
            { "Dethroner": "Passive" },
            { "Shadow Slam": "Passive" }

        ],
        "Steelsage": [
            { "Focused Combos": "Combo" },
            { "Sidearm": "Right" },
            { "Scrapshot": "Sneak Left" },
            { "Firework Blast": "Sneak Right" },
            { "Precision Strike": "Spawner Break" },
            { "Volley": "Sneak Bow" },
            { "Gravity Bomb": "Swap" },
            { "Steel Stallion": "Lifeline" },
            { "Rapid Fire": "Passive" },
            { "Sharpshooter": "Passive" },
            { "Split Arrow": "Passive" }
        ],
        "Windwalker": [
            { "Windswept Combos": "Combo" },
            { "Wind Walk": "Right" },
            { "Guarding Bolt": "Sneak Left" },
            { "Aeroblast": "Sneak Right" },
            { "Whirlwind": "Spawner Break" },
            { "Skyhook": "Sneak Bow" },
            { "Thundercloud Form": "Swap" },
            { "Last Breath": "Lifeline" },
            { "Aeromancy": "Passive" },
            { "Dodging": "Passive" },
            { "One with the Wind": "Passive" },
            { "Restoring Draft": "Passive" }
        ],
        "Prismatic": [
            { "Solar Ray": "Right" },
            { "Encore": "Sneak Left" },
            { "Chroma Blade": "Sneak Right" },
            { "Convergence": "Spawner Break" },
            { "Disco Ball": "Sneak Bow" },
            { "Refraction": "Swap" },
            { "Color Splash": "Swap" },
            { "Rebirth": "Lifeline" },
            { "Charity": "Passive" },
            { "Diversity": "Passive" },
            { "Flexbility": "Passive" },
            { "Generosity": "Passive" },
            { "Multiplicity": "Passive" },
            { "Prosperity": "Passive" }
        ]
    };
    return abilityTriggerList[tree][ability];
}