// Config
const Config = {
	ID: undefined,
	Game: undefined,
	Egg: undefined,
	Gender: undefined,
	Generation: undefined,
	Held: undefined,
	Friendship: undefined,
	Ability: undefined,
	Types: undefined,
	Stats: undefined,
	Natures: undefined,
	Allies: undefined,
	Region: undefined,
	Map: undefined,
	IV: undefined,
	EV: undefined,
	AV: undefined,
}

// Data
const Data = {
    Abilities: undefined,
    Locations: undefined,
    Items: undefined,
    Pokemon: undefined,
    Moves: undefined,
    Games: ["Red","Blue","Yellow","Gold","Silver","Crystal","Ruby","Sapphire","Colosseum","FireRed","LeafGreen","Emerald","XD","Diamond","Pearl","Platinum","HeartGold","SoulSilver","Black","White","Black 2","White 2","X","Y","Omega Ruby","Alpha Sapphire","Sun","Moon","Ultra Sun","Ultra Moon","Lets Go Pikachu","Lets Go Eevee","Sword","Shield"] // "Legend Arceus","Brilliant Diamond","Shining Pearl","Scarlet","Violet"
}

// Memory
let Memory = {};

// Paths
const Path = {
    Pokemon: {
        base: "./media/Images/Pokemon/",
        Battle: {
            base: "./media/Images/Pokemon/Battle/",
            Default: {
                Front: {
                    base: "./media/Images/Pokemon/Battle/Default/Front/",
                    PNG: "./media/Images/Pokemon/Battle/Default/Front/PNG/",
                    GIF: "./media/Images/Pokemon/Battle/Default/Front/GIF/"
                },
                Back: {
                    base: "./media/Images/Pokemon/Battle/Default/Back/",
                    PNG: "./media/Images/Pokemon/Battle/Default/Back/PNG/",
                    GIF: "./media/Images/Pokemon/Battle/Default/Back/GIF/"
                }
            },
            Shiny: {
                Front: {
                    base: "./media/Images/Pokemon/Battle/Shiny/Front/",
                    PNG: "./media/Images/Pokemon/Battle/Shiny/Front/PNG/",
                    GIF: "./media/Images/Pokemon/Battle/Shiny/Front/GIF/"
                },
                Back: {
                    base: "./media/Images/Pokemon/Battle/Shiny/Back/",
                    PNG: "./media/Images/Pokemon/Battle/Shiny/Back/PNG/",
                    GIF: "./media/Images/Pokemon/Battle/Shiny/Back/GIF/"
                }
            }
        },
        Overworld: {
            Default: {
                Front: {
                    base: "./media/Images/Pokemon/Overworld/Default/Front/",
                    PNG: "./media/Images/Pokemon/Overworld/Default/Front/PNG/",
                    GIF: "./media/Images/Pokemon/Overworld/Default/Front/GIF/"
                }
            },
            Shiny: {
                Front: {
                    base: "./media/Images/Pokemon/Overworld/Shiny/Front/",
                    PNG: "./media/Images/Pokemon/Overworld/Shiny/Front/PNG/",
                    GIF: "./media/Images/Pokemon/Overworld/Shiny/Front/GIF/"
                }
            }
        },
        Menu: {
            Default: "./media/Images/Pokemon/Menu/Default/Front/",
            Shiny: "./media/Images/Pokemon/Menu/Shiny/Front/"
        },
        Pokedex: {
            Default: {
                base: "./media/Images/Pokemon/Pokedex/Default/Front/",
                PNG: "./media/Images/Pokemon/Pokedex/Default/Front/PNG/",
                GIF: "./media/Images/Pokemon/Pokedex/Default/Front/GIF/"
            },
            Shiny: {
                base: "./media/Images/Pokemon/Pokedex/Shiny/Front/",
                PNG: "./media/Images/Pokemon/Pokedex/Shiny/Front/PNG/",
                GIF: "./media/Images/Pokemon/Pokedex/Shiny/Front/GIF/"
            }
        },
        Box: {
            Default: {
                base: "./media/Images/Pokemon/Box/Default/",
                PNG: "./media/Images/Pokemon/Box/Default/PNG/",
                GIF: "./media/Images/Pokemon/Box/Default/GIF/"
            },
            Shiny: {
                base: "./media/Images/Pokemon/Box/Shiny/",
                PNG: "./media/Images/Pokemon/Box/Shiny/PNG/",
                GIF: "./media/Images/Pokemon/Box/Shiny/GIF/"
            }
        },
        Art: {
            base: "./media/Images/Pokemon/Art/",
            Default: {
                Front: {
                    base: "./media/Images/Pokemon/Art/Default/Front/",
                    Official: "./media/Images/Pokemon/Art/Default/Front/Official/",
                    Sugimori: "./media/Images/Pokemon/Art/Default/Front/Ken Sugimori/"
                },
                Back: {
                    base: "./media/Images/Pokemon/Art/Default/Back/",
                    Official: "./media/Images/Pokemon/Art/Default/Back/Official/",
                    Sugimori: "./media/Images/Pokemon/Art/Default/Back/Ken Sugimori/"
                }
            },
            Shiny: {
                Front: {
                    base: "./media/Images/Pokemon/Art/Shiny/Front/",
                    Official: "./media/Images/Pokemon/Art/Shiny/Front/Official/",
                    Sugimori: "./media/Images/Pokemon/Art/Shiny/Front/Ken Sugimori/"
                },
                Back: {
                    base: "./media/Images/Pokemon/Art/Shiny/Back/",
                    Official: "./media/Images/Pokemon/Art/Shiny/Back/Official/",
                    Sugimori: "./media/Images/Pokemon/Art/Shiny/Back/Ken Sugimori/"
                }
            }
        }
    },
    Item: {
        Overworld: "./media/Images/Item/Overworld/",
        Obtain: "./media/Images/Item/Obtain/",
        Tag: "./media/Images/Item/Tag/",
        Menu: "./media/Images/Item/Menu/",
        Held: "./media/Images/Item/Held/",
        Battle: {
            base: "./media/Images/Item/Battle/",
            PNG: "./media/Images/Item/Battle/PNG/",
            GIF: "./media/Images/Item/Battle/GIF/",
        },
        Bag: "./media/Images/Item/Bag/",
        Art: {
            Dream: "./media/Images/Item/Art/Dream World/",
            Sugimori: "./media/Images/Item/Art/Sugimori/",
            Official: "./media/Images/Item/Art/Official/"
        }
    },
    Location: {
        Art: {
            Official: "./media/Images/Location/Art/Official/"
        },
        Load: "./media/Images/Location/Load/",
        Overview: "./media/Images/Location/Overview/"
    },
    Type: {
        Icon: "./media/Images/Type/Icon/"
    },
    Currency: {
        Icon: "./media/Images/Currency/Icon/"
    },
    Character: {
        Art: {
            Official: "./media/Images/Character/Art/Official/",
            Sugimori: "./media/Images/Character/Art/Ken Sugimori/"
        },
        Battle: {
            Front: {
                base: "./media/Images/Character/Battle/Front/",
                PNG: "./media/Images/Character/Battle/Front/PNG/",
                GIF: "./media/Images/Character/Battle/Front/GIF/"
            },
            Back: {
                base: "./media/Images/Character/Battle/Back/",
                PNG: "./media/Images/Character/Battle/Back/PNG/",
                GIF: "./media/Images/Character/Battle/Back/GIF/"
            }
        },
        Overworld: {
            Front: {
                base: "./media/Images/Character/Overworld/Front/",
                PNG: "./media/Images/Character/Overworld/Front/PNG/",
                GIF: "./media/Images/Character/Overworld/Front/GIF/"
            },
            Back: {
                base: "./media/Images/Character/Overworld/Back/",
                PNG: "./media/Images/Character/Overworld/Back/PNG/",
                GIF: "./media/Images/Character/Overworld/Back/GIF/"
            }
        },
        Pokestar: "./media/Images/Character/Pokestar Studio/",
        Portrait: "./media/Images/Character/Portrait/",
        PSS: "./media/Images/Character/PSS/",
        VS: "./media/Images/Character/Versus/",
        YComm: "./media/Images/Character/Y-Comm/"
    },
    Bag: {
        Pocket: "./media/Images/Bag/Pocket/"
    },
    Region: {
        base: "./media/Images/Region/",
        Art: {
            Official: "./media/Images/Region/Art/Official/"
        },
        Map: "./media/Images/Region/Map/"
    },
    Weather: {
        Icon: {
            PNG: "./media/Images/Weather/Icon/PNG/",
            GIF: "./media/Images/Weather/Icon/GIF/"
        }
    },
    Move: {
        Category: "./media/Images/Move/Category/",
        Art: {
            Official: "./media/Images/Move/Art/Official/"
        },
        Icon: "./media/Images/Move/Icon/"
    },
    Game: {
        Title: "./media/Images/Game/Title/",
        Menu: "./media/Images/Game/Menu/",
        Art: {
            HOME: "./media/Images/Game/Art/HOME",
            Official: "./media/Images/Game/Art/Official/",
            Sugimori: "./media/Images/Game/Art/Ken Sugimori/",
            base: "./media/Images/Game/Art/"
        }
    },
    FinalDex: "./media/Images/FinalDex/",
    Object: {
        Overworld: {
            Tile: "./media/Images/Object/Overworld/Tile/"
        }
    }
};



function configure_game(id) {

	// Reset config
	Object.keys(Config).forEach(key => Config[key] = undefined);

    Config.ID = id || 1;
    Config.Game = get_game(Config.ID)
	Config.Generation = get_generation(Config.ID)
    Config.Region = finaldata["Game"]["Overview"][Config.ID - 1]["Region"].split(/[,]/);


	switch (Config.ID) { // Per Game
        case 1: // Red
        case 2: // Blue
        case 3: // Yellow
            Config.Map = Kanto1_coords;
            break;
        case 4: // Gold
        case 5: // Silver
        case 6: // Crystal
            Config.Map = JohtoKanto1_coords;
            break;
        case 7: // Ruby
        case 8: // Sapphire
			Config.Map = Hoenn1_coords;
			break;
        case 9: // Colosseum
			Config.Map = Orre1_coords;
			break;
        case 10: // FireRed
        case 11: // LeafGreen
			Config.Map = KantoSevii_coords;
			break;
        case 12: // Emerald
			Config.Map = Hoenn2_coords;
			break;
        case 13: // XD
			Config.Map = Orre2_coords;
			break;
        case 14: // Diamond
        case 15: // Pearl
        case 16: // Platinum
			Config.Map = Sinnoh1_coords;
			break;
        case 17: // HeartGold
        case 18: // SoulSilver
			Config.Map = JohtoKanto2_coords;
			break;
        case 19: // Black
			Config.Map = Unova1_coords;
			break;
        case 20: // White
			Config.Map = Unova2_coords;
			break;
        case 21: // Black 2
			Config.Map = Unova3_coords;
			break;
        case 22: // White 2
			Config.Map = Unova4_coords;
			break;
        case 23: // X
        case 24: // Y
            Config.Map = Kalos_coords;
            break;
        case 25: // Omega Ruby
        case 26: // Alpha Sapphire
            Config.Map = Hoenn3_coords;
            break;
        case 27: // Sun
			Config.Map = Alola1_coords;
			Config.Allies = true;
			break;
        case 28: // Moon
			Config.Map = Alola2_coords;
			Config.Allies = true;
			break;
		case 29: // Ultra Sun
			Config.Map = Alola3_coords;
			Config.Allies = true;
			break;
        case 30: // Ultra Moon
			Config.Map = Alola4_coords;
			Config.Allies = true;
			break;
        case 31: // Lets Go Pikachu
        case 32: // Lets Go Eevee
            Config.Map = Kanto2_coords;
            break;
        case 33: // Sword
        case 34: // Shield
            Config.Map = Galar_coords;
            break;
		case 35: // Brilliant Diamond
		case 36: // Shining Pearl
			break;
		case 37: // Legend Arceus
			break;
		case 38: // Scarlet
		case 39: // Violet
			break;

        default:
            console.error("Invalid Game ID");
            break;
    }

    // Generation-specific logic
    Config.Gender = Config.Generation >= 2;
    Config.Egg = Config.Generation >= 2 && Config.ID !== 31 && Config.ID !== 32;
	Config.Friendship = Config.Generation >= 2;
	Config.Held = Config.Generation >= 2 && Config.ID !== 31 && Config.ID !== 32;
    Config.Ability = (Config.ID >= 31 && Config.ID <= 32) ? undefined : (Config.Generation >= 5 ? ["Primary", "Secondary", "Hidden"] : (Config.Generation >= 3 ? ["Primary", "Secondary"] : undefined));
	Config.Natures = Config.Generation >= 3 ? ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"] : undefined;

    Config.Stats = Config.Generation === 1 
    ? [{ Stat: "HP", Long: "HP", Short: "HP" }, { Stat: "Attack", Long: "Attack", Short: "Atk" }, { Stat: "Defense", Long: "Defense", Short: "Def" }, { Stat: "Special", Long: "Special", Short: "Sp" }, { Stat: "Speed", Long: "Speed", Short: "Spe" }] 
    : [{ Stat: "HP", Long: "HP", Short: "HP" }, { Stat: "Attack", Long: "Attack", Short: "Atk" }, { Stat: "Defense", Long: "Defense", Short: "Def" }, { Stat: "Sp. Atk", Long: "Special Attack", Short: "SpAtk" }, { Stat: "Sp. Def", Long: "Special Defense", Short: "SpDef" }, { Stat: "Speed", Long: "Speed", Short: "Spe" }];

    // Types based on Generation
    Config.Types = Config.Types || [];
    if (Config.Generation >= 1) Config.Types.splice(Config.Types.length, 0, ...["Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon"]);
    if (Config.Generation >= 2) Config.Types.splice(8, 0, ...["Steel"]); Config.Types.splice(Config.Types.length, 0, ...["Dark"]);
    if (Config.Generation >= 6) Config.Types.splice(Config.Types.length, 0, ...["Fairy"])

    // EV and IV settings
    if (Config.Generation >= 1 && Config.Generation <= 2) {
        Config.EV = { Name: "Effort Value", Abbreviation: "EV", Min: 0, Max: 65535 };
        Config.IV = { Name: "Individual Value", Abbreviation: "DV", Min: 0, Max: 15 };
    } else if (Config.Generation >= 3 && Config.Generation <= 5) {
        Config.EV = { Name: "Effort Value", Abbreviation: "EV", Min: 0, Max: 255 };
        Config.IV = { Name: "Individual Value", Abbreviation: "IV", Min: 0, Max: 31 };
    } else {
        Config.EV = { Name: "Effort Value", Abbreviation: "EV", Min: 0, Max: 252 };
        Config.IV = { Name: "Individual Value", Abbreviation: "IV", Min: 0, Max: 31 };
    }


    load_data();
    load_initialize();
}


function load_data() {



    // Scope for current game only to reduce load
    var arr = finaldata["Pokemon Learnset"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Pokemon"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Items"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Location Trainers"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Abilities"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Locations"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Moves"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Items"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Pokemon"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));
    var arr = finaldata["Trainers"]; Object.keys(arr).forEach(key => Array.isArray(arr[key]) && arr[key].some(entry => entry.hasOwnProperty('Game')) && (arr[key] = arr[key].filter(entry => get_applicable(entry.Game))));

    // Create Lookup Tables

    // Pokemon
    finaldata["Pokemon"]["Overview"].forEach(({ Game, Pokemon, Active }) => {
        Active && get_applicable(Game) && ((Data.Pokemon ||= {})[Pokemon] = {});
    });
    

    // Specie
    finaldata["Pokemon"]["Specie"].forEach(({ Game, Pokemon, Specie }) => {
        if (get_applicable(Game)) {

            Data.Pokemon[Pokemon] && (Data.Pokemon[Pokemon] = {
                ...Data.Pokemon[Pokemon],
                ...(Specie !== undefined && { ["Pokemon"]: Specie })
            });
        }
    });

    // File
    finaldata["Pokemon"]["File"].forEach(({ Game, Pokemon, File }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(File !== undefined && { File: String(File) })
            });
        }
    });

    // Form Item
    finaldata["Pokemon"]["Form Item"].forEach(({ Game, Pokemon, Required, Conflict }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Form: {
                    ...(Data.Pokemon[pokemon_index]?.Form || {}),
                    ...(Required !== undefined && { ["Required Item"]: Required ? parse_conjunctionSplit(Required) : [] }),
                    ...(Conflict !== undefined && { ["Conflicting Item"]: Conflict ? parse_conjunctionSplit(Conflict) : [] }),
                }
            });
        }
    });

    // Form Change
    finaldata["Pokemon"]["Form Change"].forEach(({ Game, Pokemon, Change }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
    
            Data.Pokemon[pokemon_index]  && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Form: {
                    ...(Data.Pokemon[pokemon_index]?.Form || {}),
                    ...(Change !== undefined && { Change }),
                }
            });
        }
    });
    

    // Pokédex ID
    finaldata["Pokemon"]["Pokedex ID"].forEach(({ Game, Pokemon, Dex, ID }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = { 
                ...Data.Pokemon[pokemon_index], 
                Pokedex: {
                    ...(Data.Pokemon[pokemon_index]?.Pokedex || {}),
                    ...(ID !== undefined && { [Dex]: ID }),
                } 
            });
        }
    });

    // Pokédex Color
    finaldata["Pokemon"]["Pokedex Color"].forEach(({ Game, Pokemon, Color }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
 
            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Color !== undefined && { ["Pokedex Color"]: Color })
            });
        }
    });

    // Pokédex Entry
    finaldata["Pokemon"]["Pokedex Entry"].forEach(({ Game, Pokemon, Entry }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Entry !== undefined && { ["Pokedex Entry"]: Entry })
            });
        }
    });

    // Type
    finaldata["Pokemon"]["Type"].forEach(({ Game, Pokemon, Primary, Secondary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Type: {
                    ...(Data.Pokemon[pokemon_index]?.Type || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary }),
                }
            });
        }
    });

    // Ability
    finaldata["Pokemon"]["Ability"].forEach(({ Game, Pokemon, Primary, Secondary, Hidden }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Ability: {
                    ...(Data.Pokemon[pokemon_index]?.Ability || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary }),
                    ...(Hidden !== undefined && { Hidden }),
                }
            });
        }
    });

    // Evolution Specie
    finaldata["Pokemon"]["Evolution Specie"].forEach(({ Game, Pokemon, Previous, Next }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Evolution: {
                    ...(Data.Pokemon[pokemon_index]?.Evolution || {}),
                    ...(Previous !== undefined && { Previous: Previous.split(/[,]/) }),
                    ...(Next !== undefined && { Next: Next.split(/[,]/) })
                }
            });
        }
    });

    // Evolution Method
    finaldata["Pokemon"]["Evolution Method"].forEach(({ Game, Pokemon, Type, Item, Level, Extra, Gender }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Evolution: {
                    ...(Data.Pokemon[pokemon_index]?.Evolution || {}),
                    ...(Type !== undefined && { Type }),
                    ...(Item !== undefined && { Item }),
                    ...(Level !== undefined && { Level }),
                    ...(Extra !== undefined && { Extra }),
                    ...(Gender !== undefined && { Gender }),
                }
            });
        }
    });

    // Offspring Method
    finaldata["Pokemon"]["Offspring"].forEach(({ Game, Pokemon, Offspring, Factor }) => { 
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index].Offspring = parse_conjunctionSplit(Offspring).map((v, i) => {
                const factorValue = Factor && parse_conjunctionSplit(Factor)[i];
                return { Offspring: v, ...(factorValue ? { Factor: factorValue } : {}) }; // Only assign Factor if valid
            }));
        }
    });

    // Egg Cycle
    finaldata["Pokemon"]["Egg Cycle"].forEach(({ Game, Pokemon, ["Egg Cycle"]: Cycle }) => { 
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            const stepsValue = Cycle ? (Config.Generation === 2 || Config.Generation === 3 || Config.Generation === 7 ? Cycle * 256 : Config.Generation === 4 || Config.ID === 35 || Config.ID === 36 ? Cycle * 255 : Config.Generation === 5 || Config.Generation === 6 ? Cycle * 257 : Config.ID === 33 || Config.ID === 34 ? Cycle * 128 : null) : null;

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Cycle !== undefined && { ["Egg Cycle"]: {
                    ["Cycle"]: Cycle,
                    ...(stepsValue !== null && { ["Steps"]: stepsValue })
                } })
            });
        }
    });

    // Egg Group
    finaldata["Pokemon"]["Egg Group"].forEach(({ Game, Pokemon, Primary, Secondary }) => {
        if (Config.Egg && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Egg Group"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Egg Group"] || {}),
                    ...(Primary !== undefined && { Primary }),
                    ...(Secondary !== undefined && { Secondary })
                }
            });
        }
    });

    // Gender Ratio
    finaldata["Pokemon"]["Gender Ratio"].forEach(({ Game, Pokemon, Ratio }) => { 
        if (Config.Gender && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Ratio !== undefined && { ["Gender Ratio"]: { 
                        Female: parseInt(Ratio.split(":")[0]),
                        Male: parseInt(Ratio.split(":")[1]),
                    }
                }),
            });
        }
    });


    // Category
    finaldata["Pokemon"]["Category"].forEach(({ Game, Pokemon, Category }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Category !== undefined && { Category })
            });
        }
    });

    // Group
    finaldata["Pokemon"]["Group"].forEach(({ Game, Pokemon, Group }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Group !== undefined && { Group })
            });
        }
    });

    // Experience Yield
    finaldata["Pokemon"]["Experience Yield"].forEach(({ Game, Pokemon, Yield }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Yield !== undefined && { ["Experience Yield"]: Yield })
            });
        }
    });

    // Experience Yield
    finaldata["Pokemon"]["Experience Yield"].forEach(({ Game, Pokemon, Yield }) => { 
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Yield !== undefined && { ["Experience Yield"]: Yield })
            });
        }
    });

    // Effort Value Yield
    finaldata["Pokemon"]["Effort Value Yield"].forEach(({ Game, Pokemon, HP, Attack, Defense, Special, SpAtk, SpDef, Speed, Total }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Effort Value Yield"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Effort Value Yield"] || {}),
                    ...(HP !== undefined && { HP }),
                    ...(Attack !== undefined && { Attack }),
                    ...(Defense !== undefined && { Defense }),
                    ...(Special !== undefined && { Special }),
                    ...(SpAtk !== undefined && { SpAtk }),
                    ...(SpDef !== undefined && { SpDef }),
                    ...(Speed !== undefined && { Speed }),
                    /*...(Total !== undefined && { Total }),*/
                }
            });
        }
    });

    // Base Stats
    finaldata["Pokemon"]["Base Stats"].forEach(({ Game, Pokemon, HP, Attack, Defense, Special, SpAtk, SpDef, Speed, Total }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Base Stats"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Base Stats"] || {}),
                    ...(HP !== undefined && { HP }),
                    ...(Attack !== undefined && { Attack }),
                    ...(Defense !== undefined && { Defense }),
                    ...(Special !== undefined && { Special }),
                    ...(SpAtk !== undefined && { SpAtk }),
                    ...(SpDef !== undefined && { SpDef }),
                    ...(Speed !== undefined && { Speed }),
                    ...(Total !== undefined && { Total }),
                }
            });
        }
    });

    // Base Friendship
    finaldata["Pokemon"]["Base Friendship"].forEach(({ Game, Pokemon, Friendship }) => {
        if (Config.Friendship && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Friendship !== undefined && { ["Base Friendship"]: Friendship })
            });
        }
    });


    // Shape
    finaldata["Pokemon"]["Shape"].forEach(({ Game, Pokemon, Shape }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Shape !== undefined && { Shape })
            });
        }
    });

    // Height
    finaldata["Pokemon"]["Height"].forEach(({ Game, Pokemon, Metric, Customary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Height"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Height"] || {}),
                    ...(Metric !== undefined && { Metric }),
                    ...(Customary !== undefined && { Customary })
                }
            });
        }
    });

    // Weight
    finaldata["Pokemon"]["Weight"].forEach(({ Game, Pokemon, Metric, Customary }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
        
            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Weight"]: {
                    ...(Data.Pokemon[pokemon_index]?.["Weight"] || {}),
                    ...(Metric !== undefined && { Metric }),
                    ...(Customary !== undefined && { Customary })
                }
            });
        }
    });

    // Leveling Rate
    finaldata["Pokemon"]["Leveling Rate"].forEach(({ Game, Pokemon, ["Leveling Rate"]: Rate }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Rate !== undefined && { ["Leveling Rate"]: Rate })
            });
        }
    });

    // Catch Rate
    finaldata["Pokemon"]["Catch Rate"].forEach(({ Game, Pokemon, ["Catch Rate"]: Rate }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ...(Rate !== undefined && { ["Catch Rate"]: Rate })
            });
        }
    });

    // Held Item
    finaldata["Pokemon"]["Held Item"].forEach(({ Game, Pokemon, Item, Rate }) => {
      if (Config.Held && get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index]["Held Item"] = [
                ...(Data.Pokemon[pokemon_index]["Held Item"] || []),
                {
                    ...(Item !== undefined && { Item }),
                    ...(Rate !== undefined && { Rate })
                }
            ]);
        }
    });



    // Items

    // Overview
    finaldata["Items"]["Overview"].forEach(({ Game, Index, Active }) => {
        Active && get_applicable(Game) && ((Data.Items ||= {})[Index] = {} );
    });


    finaldata["Items"]["Overview"].forEach(({ Game, Index, Item, ID, Image, Alias, Pocket }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Pokemon);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ...(Index !== undefined && { Index }),
                ...(Item !== undefined && { Item: [Item] }),
                ...(ID !== undefined && { ID }),
                ...(Image !== undefined && { Image }),
                ...(Alias !== undefined && { Alias }),
                ...(Pocket !== undefined && { Pocket }),
            }); 
        }
    });

    // Description
    finaldata["Items"]["Description"].forEach(({ Game, Index, Item, Description }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ...(Description !== undefined && { Description }),
            });
        }
    });

    // Type Enhance
    finaldata["Items"]["Type Enhance"].forEach(({ Game, Item, Type, Value, Pokemon }) => {
        if (get_applicable(Game)) {
            const item_index = get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Type Enhance"]: { 
                    ...(Type !== undefined && { Type }),
                    ...(Value !== undefined && { Value }),
                    ...(Pokemon !== undefined && { Pokemon: parse_conjunctionSplit(Pokemon) }),
                }
            }); 
        }
    });


    // Effect
    finaldata["Items"]["Effect"].forEach(({ Game, Index, Item, Effect }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);

            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                Effect: [
                    ...(Data.Items[item_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]
            }); 
        }
    });

    // Sell
    finaldata["Items"]["Sell"].forEach(({ Game, Index, Item, Shop, Price, Currency,  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
        
            Data.Items[item_index] && (Data.Items[item_index] = { 
                ...Data.Items[item_index],
                ["Sell"]: [
                    ...(Data.Items[item_index]?.["Sell"] || []),
                    {
                        ...(Price !== undefined && { Price }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Shop !== undefined && { Shop }),
                    }
                ]
            });

        }
    });


    // Abilities
    finaldata["Abilities"]["Overview"].forEach(({ Game, Ability, ID }) => {
        Config.Ability && get_applicable(Game) && ((Data.Abilities ||= {})[Ability] = {});
    });

    finaldata["Abilities"]["Overview"].forEach(({ Game, Ability, ID }) => {
        if (Config.Ability && get_applicable(Game)) {
            Data.Abilities[Ability] && (Data.Abilities[Ability] = {
                ...Data.Abilities[Ability],
                ...(ID !== undefined && { ID }),
                ...(Ability !== undefined && { Ability: [Ability] }),
            });
        }
    });


    // Description
    finaldata["Abilities"]["Description"].forEach(({ Game, Ability, Description }) => { 
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ...(Description !== undefined && { Description })
            }); 
        }
    });
    

    // Effect
    finaldata["Abilities"]["Effect"].forEach(({ Game, Ability, Effect }) => {
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                Effect: [
                    ...(Data.Abilities[ability_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]
            });
        }
    });
    

    // Category
    finaldata["Abilities"]["Category"].forEach(({ Game, Ability, Category }) => { 
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ...(Category !== undefined && { Category })
            });
        }
    });

    // Affect
    finaldata["Abilities"]["Affect"].forEach(({ Game, Ability, Name, Type, Boolean, Extra }) => {
        if (Config.Ability && get_applicable(Game)) {
            const ability_index = get_abilityIndex(Ability);

            Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                Affect: [
                    ...(Data.Abilities[ability_index]?.Affect || []),
                    {
                        ...(Name !== undefined && { Name }),
                        ...(Type !== undefined && { Type }),
                        ...(Boolean !== undefined && { Boolean }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Pickup
    finaldata["Abilities"]["Pickup"].forEach(({ Game, Item, Index, Level, Area, Title, Header, Rate, Location, }) => {
        if (Config.Ability && get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const ability_index = get_abilityIndex("Pickup");
    
            Data.Items[item_index] && Data.Abilities[ability_index] && (Data.Abilities[ability_index] = {
                ...Data.Abilities[ability_index],
                ["Item"]: [
                    ...(Data.Abilities[ability_index]?.["Item"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Area !== undefined && { Area }),
                        ...(Header !== undefined && { Header }),
                        ...(Title !== undefined && { Title }),
                        ...(Item !== undefined && { Item }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Rate !== undefined && { Rate }),
                    }
                ]
            });
        }
    });

    // Moves
    finaldata["Moves"]["Overview"].forEach(({ Game, Move, Active }) => {
        Active && get_applicable(Game) && ((Data.Moves ||= {})[Move] = {["Move"]: [Move]} );
    });

    // Names
    finaldata["Moves"]["Alternate Name"].forEach(({ Game, Move, ["Alternate Name"]: Alternate }) => { 
        if (get_applicable(Game)) {
            Data.Moves[Move] && (Data.Moves[Move] = {
                ...Data.Moves[Move],
                Move: [
                    ...(Data.Moves[Move]?.Move || []),
                    ...(Alternate !== undefined ? [Alternate] : [])
                ]
            });
        }
    });


    // Group
    finaldata["Moves"]["Group"].forEach(({ Game, Move, Group }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Group !== undefined && { Group })
            });
        }
    });

    // Description
    finaldata["Moves"]["Description"].forEach(({ Game, Move, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Description !== undefined && { Description })
            });
        }
    });

    // Contest
    finaldata["Moves"]["Contest"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Contest"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });


    // Super Contest
    finaldata["Moves"]["Super Contest"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Super Contest"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });

    // Contest Spectacular
    finaldata["Moves"]["Contest Spectacular"].forEach(({ Game, Move, Condition, Appeal, Jam, Description }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
         
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["Contest Spectacular"]: {
                    ...(Condition !== undefined && { Condition }),
                    ...(Appeal !== undefined && { Appeal }),
                    ...(Jam !== undefined && { Jam }),
                    ...(Description !== undefined && { Description }),
                }
            });
        }
    });


    // Machine
    finaldata["Moves"]["Machine"].forEach(({ Game, Move, Machine }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Machine !== undefined && { Machine })
            });           
        }
    });


     // Range
     finaldata["Moves"]["Range"].forEach(({ Game, Move, Range }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Range !== undefined && { Range })
            });
        }
    });


    // Affect
    finaldata["Moves"]["Affect"].forEach(({ Game, Move, Contact, Protect, ["Magic Coat"]: MagicCoat, ["Magic Bounce"]: MagicBounce, Snatch, ["Mirror Move"]: MirrorMove, ["King's Rock"]: KingsRock, ["Sound-Based"]: SoundBased, ["Outside Battle"]: OutsideBattle, }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Contact !== undefined && { Contact }),
                ...(Protect !== undefined && { Protect }),
                ...(MagicCoat !== undefined && { ["Magic Coat"]: MagicCoat }),
                ...(MagicBounce !== undefined && { ["Magic Bounce"]: MagicBounce }),
                ...(Snatch !== undefined && { Snatch }),
                ...(MirrorMove !== undefined && { ["Mirror Move"]: MirrorMove }),
                ...(KingsRock !== undefined && { ["King's Rock"]: KingsRock }),
                ...(SoundBased !== undefined && { ["Sound-Based"]: SoundBased }),
                ...(OutsideBattle !== undefined && { ["Outside Battle"]: OutsideBattle }),
            });
        }
    });



    // Accuracy
    finaldata["Moves"]["Accuracy"].forEach(({ Game, Move, Accuracy }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Accuracy !== undefined && { Accuracy })
            });
        }
    });


    // Power
    finaldata["Moves"]["Power"].forEach(({ Game, Move, Power }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Power !== undefined && { Power })
            });
        }
    });

    // PP
    finaldata["Moves"]["PP"].forEach(({ Game, Move, Min, Max, }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ["PP"]: {
                    ...Data.Moves[move_index]?.["PP"],
                    ...(Min !== undefined && { Min }),
                    ...(Max !== undefined && { Max }),                         
                }
            });
        }
    });


    // Category
    finaldata["Moves"]["Category"].forEach(({ Game, Move, Category }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
 
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Category !== undefined && { Category })
            });
        }
    });


    // ID
    finaldata["Moves"]["ID"].forEach(({ Game, Move, ID }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);
      
            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(ID !== undefined && { ID })
            });
        }
    });
    

    // Type
    finaldata["Moves"]["Type"].forEach(({ Game, Move, Type }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Type !== undefined && { Type })
            });
        }
    });


    // Priority
    finaldata["Moves"]["Priority"].forEach(({ Game, Move, Priority }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Priority !== undefined && { Priority })
            });
        }
    });


    // Effect
    finaldata["Moves"]["Effect"].forEach(({ Game, Move, Effect }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                
                Effect: [
                    ...(Data.Moves[move_index]?.Effect || []),
                    {
                        ...(Effect !== undefined && { Effect }),
                    }
                ]

            });
        }
    });


    // Call
    finaldata["Moves"]["Call"].forEach(({ Game, Move, Call, Pokemon, Item, Type }) => {
        if (get_applicable(Game)) {
            const move_index = get_moveIndex(Move);

            Data.Moves[move_index] && (Data.Moves[move_index] = {
                ...Data.Moves[move_index],
                ...(Call !== undefined && { Call }),
                ...(Pokemon !== undefined && { Pokemon }),
                ...(Item !== undefined && { Item }),
                ...(Type !== undefined && { Type }),
            });
        }
    });


    // Locations
    finaldata["Locations"]["Overview"].forEach(({ Game, Location }) => {
        get_applicable(Game) && ((Data.Locations ||= {})[Location] = {Location: [Location]} );
    });

    // Connection
    finaldata["Locations"]["Connection"].forEach(({ Game, Location, West, North, East, South, Located }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Connection"]: {
                    ...(Data.Locations[location_index]?.["Connection"] || {}),
                    ...(West !== undefined && { West: West.split(/[,]/) }),
                    ...(North !== undefined && { North: North.split(/[,]/) }),
                    ...(East !== undefined && { East: East.split(/[,]/) }),
                    ...(South !== undefined && { South: South.split(/[,]/) }),
                    ...(Located !== undefined && { Located: Located.split(/[,]/) }),
                }
            });
        }
    });


    // Navigation
    finaldata["Locations"]["Navigation"].forEach(({ Game, Location, Navigation, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ...(Navigation !== undefined && { Navigation: Navigation ? parse_conjunctionSplit(Navigation) : [] }),
            });
        }
    });


    // Description
    finaldata["Locations"]["Description"].forEach(({ Game, Location, Area, Description, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Description"]: {
                    ...(Area !== undefined && { Area }),
                    ...(Description !== undefined && { ["Text"]: Description }),
                }
            });
        }
    });

    // Slogan
    finaldata["Locations"]["Slogan"].forEach(({ Game, Location, Slogan, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ...(Slogan !== undefined && { Slogan }),
            });
        }
    });


    // Move Tutor
    finaldata["Locations"]["Move Tutor"].forEach(({ Game, Location, Area, Title, Header, Move, Criteria, Note, Character, Cost, Currency, Pokemon, Rate, Field, Weather, Season, Day, Time }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            let cost = [];
            if (Cost !== undefined && Currency !== undefined) {
                const costs = String(Cost).split(/[,]/).map(cost => parseInt(cost.trim()));
                const currencies = String(Currency).split(/[,]/).map(currency => currency.trim());
                const maxLength = Math.max(costs.length, currencies.length);
                cost = Array.from({ length: maxLength }, (_, i) => {
                    return {
                        Cost: costs[i] || 0,
                        Currency: currencies[i] || ""
                    };
                });
            }

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Move Tutor"]: [
                    ...(Data.Locations[location_index]?.["Move Tutor"] || []),
                    {
                    ...(Area !== undefined && { Area }),
                    ...(Title !== undefined && { Title }),
                    ...(Header !== undefined && { Header }),
                    ...(Move !== undefined && { Move }),
                    ...(Criteria !== undefined && { Criteria }),
                    ...(Note !== undefined && { Note }),
                    ...(Character !== undefined && { Character }),
                    ...(cost.length > 0 && { ["Cost"]: cost }),
                    ...(Pokemon !== undefined && { Pokemon: Pokemon ? parse_conjunctionSplit(Pokemon) : [] }),
                    ...(Rate !== undefined && { Rate }),
                    ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                    ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                    ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                    ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                    ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                    }
                ]
            });
        }
    });


    // Point of Interest
    finaldata["Locations"]["Point of Interest"].forEach(({ Game, Location, Point, Located, Description, }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Point of Interest"]: [
                    ...(Data.Locations[location_index]?.["Point of Interest"] || []),
                    {
                        ...(Point !== undefined && { Point }),
                        ...(Located !== undefined && { Located }),
                        ...(Description !== undefined && { Description }),
                    }
                ]
            });
        }
    });


    // Location Trainers

    // Trainers
    finaldata["Location Trainers"]["Trainers"].forEach(({ Game, Index, Location, Area, Title, Header, Season, Day, Time, Field, Class, Trainer, Gender, Image, ["Battle Type"]: BattleType, Note, Item, ["Item Quantity"]: ItemQuantity, Reward, ["Reward Quantity"]: RewardQuantity, Pokemon  }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Trainer"]: [
                    ...(Data.Locations[location_index]?.["Trainer"] || []),
                    {
                        ...(Index !== undefined && { Index }),
                        ...(Trainer !== undefined && { Trainer }),
                        ...(Class !== undefined && { Class }),
                        ...(Gender !== undefined && { Gender }),
                        ...(BattleType !== undefined && { ["Battle Type"]: BattleType }),
                        ...(Title !== undefined && { Title }),
                        ...(Area !== undefined && { Area }),
                        ...(Header !== undefined && { Header }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Image !== undefined && { Image }),
                        ...(Note !== undefined && { Note }),
                        ...(Item !== undefined && {
                            ["Item"]: {
                                 Item,
                                ...(ItemQuantity !== undefined && { ["Quantity"]: ItemQuantity  }),
                            },
                        }),
                        ...(Reward !== undefined && {
                            ["Reward"]: {
                                Reward,
                                ...(RewardQuantity !== undefined && { ["Quantity"]: RewardQuantity  }),
                            },
                        }),
                    }
                ]
            });
        }
    });


    finaldata["Location Trainers"]["Pokemon"].forEach(({ Game, Trainer, Location, Pokemon, Header, Gender, Level, Ability, Move, IV, EV, Item, Nature }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);
    
            if (Data.Locations[location_index]) {
                const trainers = Data.Locations[location_index]["Trainer"] || [];
    
                // Find the trainer with the matching index
                const trainerIndex = trainers.findIndex(t => t.Index === Trainer);
    
                if (trainerIndex !== -1) {
                    // Add the Pokémon to the existing trainer
                    trainers[trainerIndex]["Pokemon"] = [
                        ...(trainers[trainerIndex]["Pokemon"] || []),
                        {
                            ...(Pokemon !== undefined && { Pokemon }),
                            ...(Header !== undefined && { Header }),
                            ...(Gender !== undefined && { Gender }),
                            ...(Level !== undefined && { Level }),
                            ...(Ability !== undefined && { Ability: Ability.split(/[\/]/) }),
                            ...(Move !== undefined && { Move: Move.split(/[,]/) }),
                            ...(IV !== undefined && { IV: format_V(IV) }),
                            ...(EV !== undefined && { EV: format_V(EV) }),
                            ...(Item !== undefined && { Item }),
                            ...(Nature !== undefined && { Nature }),
                        }
                    ];
                } else {
                    console.warn("Did not find the correct Trainer.")
                }
    
                // Update the location's trainers
                Data.Locations[location_index]["Trainer"] = trainers;
            }
        }
    });



    // Location Items

    // Items
    finaldata["Location Items"]["Items"].forEach(({ Game, Location, Area, Title, Header, Image, Item, Index, Quantity, Description, Season, Day, Time, Field, Hidden,  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Item"]: [
                    ...(Data.Locations[location_index]?.["Item"] || []),
                    {
                        ...(Item !== undefined && { Item }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                        ...(Index !== undefined && { Index }),
                    }
                ]
            });


            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Location"]: [
                    ...(Data.Items[item_index]?.["Location"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                    }
                ]
            });
        }
    });



    // Currency
    finaldata["Location Items"]["Currency"].forEach(({ Game, Location, Area, Title, Header, Image, Currency, Quantity, Description, Season, Day, Time, Field, Hidden,  }) => {
        if (get_applicable(Game)) {
            const location_index = get_locationIndex(Location);

            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Currency"]: [
                    ...(Data.Locations[location_index]?.["Currency"] || []),
                    {
                        ...(Currency !== undefined && { Currency }),
                        ["Quantity"]: Quantity || 1,
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Description !== undefined && { Description }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Hidden !== undefined && { Hidden }),
                        ...(Image !== undefined && { Image }),
                    }
                ]
            });
        }
    });


    // Shop
    finaldata["Location Items"]["Shop"].forEach(({ Game, Location, Area, Title, Header, Shop, Note, Criteria, Item, Index, Cost, Quantity, Currency, Season, Day, Time, Field  }) => {
        if (get_applicable(Game)) {
            const item_index = Index ? Index : get_itemIndex(Item);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Shop"]: [
                    ...(Data.Locations[location_index]?.["Shop"] || []),
                    {
                        ...(Item !== undefined && { Item }),
                        ["Quantity"]: Quantity || 1,
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        
                    }
                ]
            });

            Data.Items[item_index] && (Data.Items[item_index] = {
                ...Data.Items[item_index],
                ["Shop"]: [
                    ...(Data.Items[item_index]?.["Shop"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ["Quantity"]: Quantity || 1,
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                    }
                ]
            });
        }
    });

    // Location Pokemon

    // Pokemon
    finaldata["Location Pokemon"]["Pokemon"].forEach(({ Game, Location, Pokemon, Area, Title, Header, Note, Criteria, Field, Allies, Held, Move, Tile, Encounter, Level, Item, Weather, Day, Season, Time, Rate, ["Shiny Rate"]: ShinyRate, ["Catch Rate"]: CatchRate, Gender, Ability   }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Pokemon"]: [
                    ...(Data.Locations[location_index]?.["Pokemon"] || []),
                    {
                        ...(Pokemon !== undefined && { Pokemon }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Held !== undefined && { Held }),
                        ...(Allies !== undefined && { Allies: Allies.split(/[,]/) }),
                        ...(Tile !== undefined && { Tile: parse_conjunctionSplit(Tile) }),
                        ...(Encounter !== undefined && { Encounter }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Item !== undefined && { Item: parse_conjunctionSplit(Item) }),
                        ...(Move !== undefined && { Move: parse_conjunctionSplit(Move) }),
                        ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Rate !== undefined && { Rate }),
                        ...(ShinyRate !== undefined && { ["Shiny Rate"]: ShinyRate }),
                        ...(CatchRate !== undefined && { ["Catch Rate"]: CatchRate }),
                        ...(Gender !== undefined && { Gender }),
                        ...(Ability !== undefined && { Ability }),
                        
                    }
                ]
            });

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Location"]: [
                    ...(Data.Pokemon[pokemon_index]?.["Location"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Field !== undefined && { Field: parse_conjunctionSplit(Field) }),
                        ...(Held !== undefined && { Held }),
                        ...(Allies !== undefined && { Allies: parse_conjunctionSplit(Allies) }),
                        ...(Tile !== undefined && { Tile: parse_conjunctionSplit(Tile) }),
                        ...(Encounter !== undefined && { Encounter }),
                        ...(Level !== undefined && { Level: parse_levels(Level) }),
                        ...(Item !== undefined && { Item: parse_conjunctionSplit(Item) }),
                        ...(Weather !== undefined && { Weather: parse_conjunctionSplit(Weather) }),
                        ...(Day !== undefined && { Day: parse_conjunctionSplit(Day) }),
                        ...(Season !== undefined && { Season: parse_conjunctionSplit(Season) }),
                        ...(Time !== undefined && { Time: parse_conjunctionSplit(Time) }),
                        ...(Rate !== undefined && { Rate }),
                        ...(ShinyRate !== undefined && { ["Shiny Rate"]: ShinyRate }),
                        ...(CatchRate !== undefined && { ["Catch Rate"]: CatchRate }),
                        ...(Gender !== undefined && { Gender }),
                        ...(Ability !== undefined && { Ability }),
                        
                    }
                ]
            });

        }
    });


    // Shop
    finaldata["Location Pokemon"]["Shop"].forEach(({ Game, Location, Shop, Area, Title, Header, Note, Criteria, Pokemon, Level, Cost, Currency,  }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);
            const location_index = get_locationIndex(Location);
            
            Data.Locations[location_index] && (Data.Locations[location_index] = {
                ...Data.Locations[location_index],
                ["Shop"]: [
                    ...(Data.Locations[location_index]?.["Shop"] || []),
                    {
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Pokemon !== undefined && { Pokemon }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency: parse_conjunctionSplit(Currency) }),
                    }
                ]
            });

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                ["Shop"]: [
                    ...(Data.Pokemon[pokemon_index]?.["Shop"] || []),
                    {
                        ...(Location !== undefined && { Location }),
                        ...(Shop !== undefined && { Shop }),
                        ...(Area !== undefined && { Area }),
                        ...(Title !== undefined && { Title }),
                        ...(Header !== undefined && { Header }),
                        ...(Note !== undefined && { Note }),
                        ...(Criteria !== undefined && { Criteria }),
                        ...(Level !== undefined && { ["Level"]: parse_levels(Level) }),
                        ...(Cost !== undefined && { Cost }),
                        ...(Currency !== undefined && { Currency: parse_conjunctionSplit(Currency) }),
                    }
                ]
            });

        }
    });
    
    // Learnset

    // Evolution
    finaldata["Pokemon Learnset"]["Evolution"].forEach(({ Game, Pokemon, Move, Evolution, Extra }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Evolution",
                        ...(Move !== undefined && { Move }),
                        ...(Evolution !== undefined && { Evolution: Evolution.split(/[,]/) }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Level Up
    finaldata["Pokemon Learnset"]["Level Up"].forEach(({ Game, Pokemon, Move, Factor }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Level Up",
                        ...(Move !== undefined && { Move }),
                        ...(Factor !== undefined && { Factor }),
                    }
                ]
            });
        }
    });

    // Machine
    finaldata["Pokemon Learnset"]["Machine"].forEach(({ Game, Pokemon, Move, Machine }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Machine",
                        ...(Move !== undefined && { Move }),
                        ...(Machine !== undefined && { Machine }),
                    }
                ]
            });
        }
    });

    // Breeding
    finaldata["Pokemon Learnset"]["Breeding"].forEach(({ Game, Pokemon, Move, Parent, Item, Extra }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Breeding",
                        ...(Move !== undefined && { Move }),
                        ...(Parent !== undefined && { Parent: Parent.split(/[,]/) }),
                        ...(Item !== undefined && { Item }),
                        ...(Extra !== undefined && { Extra }),
                    }
                ]
            });
        }
    });

    // Tutor
    finaldata["Pokemon Learnset"]["Tutor"].forEach(({ Game, Pokemon, Move }) => {
        if (get_applicable(Game)) {
            const pokemon_index = get_pokemonIndex(Pokemon); 
            const Location = Object.keys(Data.Locations).reduce((found, location) => { const tutor = Data.Locations[location]["Move Tutor"]; const hasMove = tutor && tutor.some(tutorItem => tutorItem.Move === Move); if (hasMove) { found = location; }  return found; }, null);

            Data.Pokemon[pokemon_index] && (Data.Pokemon[pokemon_index] = {
                ...Data.Pokemon[pokemon_index],
                Learnset: [
                    ...(Data.Pokemon[pokemon_index]?.Learnset || []),
                    {
                        Type: "Tutor",
                        ...(Move !== undefined && { Move }),
                        ...(Location !== undefined && { Location }),
                    }
                ]
            });
        }
    });


}
