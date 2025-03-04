// changeable ------------------------------------------------------------------------------------------------------------------------------------------------------
/*
・このevent macroはCelesital Zenithでアビリティを選択するときに優先選択するべき
 アビリティを光らせてくれるものです
・アビリティのtier(取る優先順位)を自分の好きなように設定できます
・アビリティを選択するときに、取るべきアビリティを黄色でハイライトし、もし選択肢のどのアビリティをとっても
 ブロックされる(ほかの所持treeに取りたいメインアビリティがある)ときは、ピンク色でハイライトされます
・

<tier設定ルール>
・tierを設定するには、変数treePriorityの"tier"と書かれている部分の数字を変更してください
・自分のメインツリーごとに異なるtierを設定できます
・メインツリーはコメントで
    // Shadow ------
    ------------
と囲まれている部分で確認できます
・tierは以下のように設定してください:
    0 : 必ず取りたい
    1 : 0のabilityのtreeを所持していなかったら取りたい or 欲しいが必須ではない
    2 : 欲しいが必須ではない 1より下ランク
    3 : とっても取らなくても影響なし
    5 : 取りたくない
    〇 ここで、tierにはtier4は設定しないでください 〇
・同じtierの場合、メインアビリティ(Right,SneakBow,Lifelineなど)のほうがPassiveアビリティより優先されます
(優先順位 : main tier0 > passive tier0 > main tier1 > passive tier1)



*/

const treePriority = {

    // Shadow --------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Shadowdancer": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 1 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 5 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 3 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 0 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 3 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 3 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 1 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 0 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 5 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 3 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 2 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 2 },
            "Lifeline": { "ability": "Last Breath", "tier": 1 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 0 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 3 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Frost -------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Frostborn": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 0 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 3 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 5 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 0 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 0 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 1 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 0 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 3 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Flame -------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Flamecaller": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 3 },
            "Right": { "ability": "Ward of Light", "tier": 1 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 5 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 5 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 3 },
            "Right": { "ability": "Crushing Earth", "tier": 3 },
            "Sneak Left": { "ability": "Taunt", "tier": 5 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 5 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 0 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 0 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 0 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 5 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 0 },
            "Lifeline": { "ability": "Apocalypse", "tier": 5 },
            "Passive": [
                { "ability": "Detonation", "tier": 1 },
                { "ability": "Primordial Mastery", "tier": 1 },
                { "ability": "Pyromania", "tier": 1 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 3 },
            "Right": { "ability": "Ice Lance", "tier": 3 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 5 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 5 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 5 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 3 },
                { "ability": "Icebreaker", "tier": 1 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 3 },
            "Right": { "ability": "Advancing Shadows", "tier": 3 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 5 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 3 },
            "Swap": { "ability": "Chaos Dagger", "tier": 5 },
            "Lifeline": { "ability": "Escape Artist", "tier": 3 },
            "Passive": [
                { "ability": "Brutalize", "tier": 3 },
                { "ability": "Deadly Strike", "tier": 3 },
                { "ability": "Dethroner", "tier": 2 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 3 },
            "Right": { "ability": "Sidearm", "tier": 3 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 5 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 5 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 0 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 3 },
            "Right": { "ability": "Wind Walk", "tier": 1 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 5 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 5 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 1 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 3 },
                { "ability": "Dodging", "tier": 2 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 3 },
            "Sneak Left": { "ability": "Encore", "tier": 5 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 0 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 3 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 3 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Dawn --------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Dawnbringer": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 0 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 3 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 5 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 0 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 0 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 1 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 0 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 3 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Steel -------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Steelsage": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 0 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 3 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 5 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 0 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 0 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 1 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 0 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 3 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },

    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Wind --------------------------------------------------------------------
    // -------------------------------------------------------------------------

    "Windwalker": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 0 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 3 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 5 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 0 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 0 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 1 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 0 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 3 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    },
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------

    // Earth -------------------------------------------------------------------
    // -------------------------------------------------------------------------
    "Earthbound": {

        "Dawnbringer": {
            "Combo": { "ability": "Soothing Combos", "tier": 5 },
            "Right": { "ability": "Ward of Light", "tier": 5 },
            "Sneak Left": { "ability": "Radiant Blessing", "tier": 1 },
            "Sneak Right": { "ability": "Bottled Sunlight", "tier": 5 },
            "Spawner Break": { "ability": "Sundrops", "tier": 3 },
            "Sneak Bow": { "ability": "Divine Beam", "tier": 2 },
            "Swap": { "ability": "Spark of Inspiration", "tier": 5 },
            "Lifeline": { "ability": "Eternal Savior", "tier": 5 },
            "Passive": [
                { "ability": "Enlightenment", "tier": 2 },
                { "ability": "Lightning Bottle", "tier": 3 },
                { "ability": "Rejuvenation", "tier": 3 }
            ]
        },
        "Earthbound": {
            "Combo": { "ability": "Earthen Combos", "tier": 5 },
            "Right": { "ability": "Crushing Earth", "tier": 5 },
            "Sneak Left": { "ability": "Taunt", "tier": 0 },
            "Sneak Right": { "ability": "Iron Grip", "tier": 5 },
            "Spawner Break": { "ability": "Entrench", "tier": 3 },
            "Sneak Bow": { "ability": "Earthquake", "tier": 3 },
            "Swap": { "ability": "Earthen Wrath", "tier": 5 },
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Bramble Shell", "tier": 3 },
                { "ability": "Bulwark", "tier": 2 },
                { "ability": "Toughness", "tier": 2 }
            ]
        },
        "Flamecaller": {
            "Combo": { "ability": "Volcanic Combos", "tier": 5 },
            "Right": { "ability": "Fireball", "tier": 5 },
            "Sneak Left": { "ability": "Igneous Rune", "tier": 3 },
            "Sneak Right": { "ability": "Flamestrike", "tier": 5 },
            "Spawner Break": { "ability": "Flame Spirit", "tier": 3 },
            "Sneak Bow": { "ability": "Pyroblast", "tier": 3 },
            "Swap": { "ability": "Volcanic Meteor", "tier": 5 },
            "Lifeline": { "ability": "Apocalypse", "tier": 2 },
            "Passive": [
                { "ability": "Detonation", "tier": 3 },
                { "ability": "Primordial Mastery", "tier": 3 },
                { "ability": "Pyromania", "tier": 3 }
            ]
        },
        "Frostborn": {
            "Combo": { "ability": "Frigid Combos", "tier": 5 },
            "Right": { "ability": "Ice Lance", "tier": 5 },
            "Sneak Left": { "ability": "Snowstorm", "tier": 3 },
            "Sneak Right": { "ability": "Ice Barrier", "tier": 5 },
            "Spawner Break": { "ability": "Permafrost", "tier": 3 },
            "Sneak Bow": { "ability": "Piercing Cold", "tier": 3 },
            "Swap": { "ability": "Avalanche", "tier": 5 },
            "Lifeline": { "ability": "Cryobox", "tier": 3 },
            "Passive": [
                { "ability": "Frozen Domain", "tier": 2 },
                { "ability": "Icebreaker", "tier": 0 }
            ]
        },
        "Shadowdancer": {
            "Combo": { "ability": "Dark Combos", "tier": 0 },
            "Right": { "ability": "Advancing Shadows", "tier": 0 },
            "Sneak Left": { "ability": "Cloak of Shadows", "tier": 5 },
            "Sneak Right": { "ability": "Blade Flurry", "tier": 0 },
            "Spawner Break": { "ability": "Phantom Force", "tier": 5 },
            "Sneak Bow": { "ability": "Dummy Decoy", "tier": 5 },
            "Swap": { "ability": "Chaos Dagger", "tier": 0 },
            "Lifeline": { "ability": "Escape Artist", "tier": 5 },
            "Passive": [
                { "ability": "Brutalize", "tier": 0 },
                { "ability": "Deadly Strike", "tier": 0 },
                { "ability": "Dethroner", "tier": 0 },
                { "ability": "Shadow Slam", "tier": 3 }
            ]
        },
        "Steelsage": {
            "Combo": { "ability": "Focused Combos", "tier": 5 },
            "Right": { "ability": "Sidearm", "tier": 5 },
            "Sneak Left": { "ability": "Scrapshot", "tier": 3 },
            "Sneak Right": { "ability": "Firework Blast", "tier": 5 },
            "Spawner Break": { "ability": "Precision Strike", "tier": 3 },
            "Sneak Bow": { "ability": "Volley", "tier": 3 },
            "Swap": { "ability": "Gravity Bomb", "tier": 5 },
            "Lifeline": { "ability": "Steel Stallion", "tier": 1 },
            "Passive": [
                { "ability": "Rapid Fire", "tier": 2 },
                { "ability": "Sharpshooter", "tier": 3 },
                { "ability": "Split Arrow", "tier": 3 }
            ]
        },
        "Windwalker": {
            "Combo": { "ability": "Windswept Combos", "tier": 5 },
            "Right": { "ability": "Wind Walk", "tier": 5 },
            "Sneak Left": { "ability": "Guarding Bolt", "tier": 3 },
            "Sneak Right": { "ability": "Aeroblast", "tier": 5 },
            "Spawner Break": { "ability": "Whirlwind", "tier": 2 },
            "Sneak Bow": { "ability": "Skyhook", "tier": 0 },
            "Swap": { "ability": "Thundercloud Form", "tier": 5 },
            "Lifeline": { "ability": "Last Breath", "tier": 0 },
            "Passive": [
                { "ability": "Aeromancy", "tier": 0 },
                { "ability": "Dodging", "tier": 1 },
                { "ability": "One with the Wind", "tier": 3 },
                { "ability": "Restoring Draft", "tier": 2 }
            ]
        },
        "Prismatic": {
            "Combo": { "ability": "", "tier": 10 },
            "Right": { "ability": "Solar Ray", "tier": 5 },
            "Sneak Left": { "ability": "Encore", "tier": 3 },
            "Sneak Right": { "ability": "Chroma Blade", "tier": 5 },
            "Spawner Break": { "ability": "Convergence", "tier": 3 },
            "Sneak Bow": { "ability": "Disco Ball", "tier": 3 },
            "Swap": [
                { "ability": "Refraction", "tier": 5 },
                { "ability": "Color Splash", "tier": 5 }
            ],
            "Lifeline": { "ability": "", "tier": 10 },
            "Passive": [
                { "ability": "Charity", "tier": 1 },
                { "ability": "Diversity", "tier": 2 },
                { "ability": "Flexibility", "tier": 1 },
                { "ability": "Generosity", "tier": 2 },
                { "ability": "Multiplicity", "tier": 2 },
                { "ability": "Prosperity", "tier": 0 },
                { "ability": "Abnormality", "tier": 5 },
                { "ability": "Rebirth", "tier": 2 },
                { "ability": "Opportunity", "tier": 1 }
            ]
        }
    }
};
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
const tierThreshold = 4;    //

// --------------------------------------------------------------------------------------------------

const screenWidth = event.screen.getWidth();
const screenHeight = event.screen.getHeight();

const yellow = 0xFFFF00;
const orange = 0xFFA500;
const lightblue = 0xADD8E6;
const pink = 0xFFC0CB;
const brightpink = 0xFF007F;

const treeList = ["Shadowdancer", "Flamecaller", "Earthbound", "Windwalker", "Frostborn", "Dawnbringer", "Steelsage", "Prismatic"];
let treePattern = new RegExp(`^(${treeList.join("|")}) : .*$`);

let abilities;  //[0] ability name [1] slot [2] tree [3] trigger

Time.sleep(50);

// GlobalVars.putString("maintree", "Flamecaller");   //temp

abilities = getItemsInContainerAbiSelection(27);    //Celestial Gift / Curse用 一時的にifの前に出してる

if ((event.inventory.getContainerTitle() == "Select an Ability" || event.inventory.getContainerTitle() == "Select an Upgrade") && isType(abilities[0][1])) {
    // abilities = getItemsInContainerAbiSelection(27);
    for (let i = 0; i < abilities.length; i++) {
        let slot = event.inventory.getSlot(abilities[i][1]);
        let lore = slot.getLore()[0].getString();
        if (treePattern.test(lore)) {
            let tree = lore.match(treePattern)[1];  //get ability's tree
            let trigger = getAbilityTrigger(tree, abilities[i][0]);
            abilities[i].push(tree);
            abilities[i].push(trigger);
        }
    }

    let highlightSlot = [];
    let ownTreeList = [];
    let mainTree = GlobalVars.getString("maintree");

    let tier = 100;
    let otherAbilityBetter = [];

    for (let i = 0; i < GlobalVars.getInt("treeCount"); i++) {
        ownTreeList.push(GlobalVars.getString(`tree${i}`));
    }

    for (let i = 0; i < abilities.length; i++) {
        let flag = 0;
        let abilityTier = getAbilityTier(treePriority, mainTree, abilities[i]);
        // Chat.log(i + " : " + abilities[i]);
        // Chat.log(abilities[i][3] != "Passive");
        if (abilities[i][3] != "Passive") {
            for (let j = 0; j < ownTreeList.length; j++) {
                // Chat.log(ownTreeList[j] + ":");
                // Chat.log(treePriority[mainTree][ownTreeList[j]][abilities[i][3]]);
                let ownTreeAbilityTier = treePriority[mainTree][ownTreeList[j]][abilities[i][3]].tier;  //メインツリー.他所有ツリー(j).トリガー.tier
                // アビリティがメインアビリティであり、ほかに所有しているツリーの同じトリガーのメインアビリティよりティアが低かった(数値としては高い)時
                if (ownTreeAbilityTier < abilityTier) {
                    //そのアビリティのTierを取りたくないレベルまで下げる
                    if (abilityTier < tierThreshold) {
                        abilityTier = tierThreshold;
                    }
                    otherAbilityBetter.push(true);
                    flag = 1;
                    // Chat.log("break!");
                    break;
                }
            }
        }
        if (!flag) {
            // Chat.log("flag : false");
            otherAbilityBetter.push(false);
        }
        // 左のアビリティよりティアが高かった時(数値としては低かったとき)
        if (tier > abilityTier) {
            highlightSlot.splice(0);                //delete all list elements
            highlightSlot.push(abilities[i]);
            // Chat.log(i + " : " + highlightSlot);
            tier = abilityTier;
        }
        else if (tier == abilityTier) {
            highlightSlot.push(abilities[i]);
        }
    }

    if (isListAllTrue(otherAbilityBetter)) {
        for (let i = 0; i < highlightSlot.length; i++) {
            let distanceList = getRectLocation(highlightSlot[i][1], screenWidth, screenHeight);

            event.screen.addRect(distanceList[0], distanceList[2], distanceList[1], distanceList[3], brightpink);
        }
    }
    else {
        for (let i = 0; i < highlightSlot.length; i++) {
            let distanceList = getRectLocation(highlightSlot[i][1], screenWidth, screenHeight);

            event.screen.addRect(distanceList[0], distanceList[2], distanceList[1], distanceList[3], yellow);
        }
    }


}

// function ---------------------------------------------------------------------------------------------------------------------------------------
/**
 *  containerに存在するアイテム名を取得
 *  @param slot containerのスロット番号
 *  @param screenWidth スクリーンの横幅
 *  @param screenHeight スクリーンの縦幅
 *  @return 座標リスト、[x1, x2, y1, y2]
 */
function getRectLocation(slot, screenWidth, screenHeight) {
    let xDistance = slot % 9;
    let yDistance = Math.floor(slot / 9);
    let distance = [xDistance, yDistance];

    let x1 = Math.floor(screenWidth / 2 - 64 + distance[0] * 18);
    let x2 = Math.floor(screenWidth / 2 - 80 + distance[0] * 18);
    let y1 = Math.floor(screenHeight / 2 - 50 + distance[1] * 18);
    let y2 = Math.floor(screenHeight / 2 - 66 + distance[1] * 18);

    return [x1, x2, y1, y2];
}

/**
 *  containerに存在するアイテム名を取得(Reroll、UnknownChoice(Curse of Obscurity)除外)
 *  @param slot containerのスロット数
 *  @return containerに存在するアイテムリスト、[アイテム名,スロット番号]
 */
function getItemsInContainerAbiSelection(slot) {
    let containerItems = [];
    for (let i = 0; i < slot; i++) {
        let slot = event.inventory.getSlot(i);
        let abilityName = slot.getName().getString();
        // Chat.log(slot.getName().getString());
        if (abilityName !== "" && abilityName !== "Reroll" && abilityName !== "UnknownChoice") {
            containerItems.push([slot.getName().getString(), i]);
        }
    }
    return containerItems;
}

/**
 *  アビリティのtierを取得
 *  @param treePriority object tier情報が示されているjsonList
 *  @param mainTree String メインスキルツリー
 *  @param abilities list アビリティ情報が格納されたリスト
 *  @return tier
 */
function getAbilityTier(treePriority, mainTree, abilities) {
    if (abilities[3] == "Passive") {
        return treePriority[mainTree][abilities[2]][abilities[3]].find(item => item["ability"] == abilities[0]).tier + 0.5;
    }
    // else if{
    //Prismatic Swap *2
    // }
    else {
        return treePriority[mainTree][abilities[2]][abilities[3]].tier;
    }
}

function isType(slot) {
    let abilityType = event.inventory.getSlot(slot).getLore()[0].getString();
    if (abilityType == "Celestial Gift" || abilityType == "Zenith Curse") {
        return false;
    }
    else {
        return true;
    }
}

function isListAllTrue(List) {
    for (let i = 0; i < List.length; i++) {
        if (List[i] == false) {
            return false;
        }
    }
    return true;
}


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
            { "Frigid Combos": "Combo" },
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
            { "Dummy Decoy": "Sneak Bow" },
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
            { "Charity": "Passive" },
            { "Diversity": "Passive" },
            { "Flexibility": "Passive" },
            { "Generosity": "Passive" },
            { "Multiplicity": "Passive" },
            { "Prosperity": "Passive" },
            { "Abnormality": "Passive" },
            { "Rebirth": "Passive" },
            { "Opportunity": "Passive" }


        ]
    };
    return abilityTriggerList[tree].find(item => ability in item)[ability];
}