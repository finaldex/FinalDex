// Config
const Config_default = {
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
    Image: {
        Pokemon: {
            Battle: {
                Path: {},
                Game: {},
            },
            Box: {
                Path: {},
                Game: {},
            }
        },
        Item: {
            Bag: {
                Path: {},
                Game: {},
            }
        }
    },
}
let Config = {};

// Data
const Data_default = {
    Abilities: undefined,
    Locations: undefined,
    Items: undefined,
    Pokemon: undefined,
    Moves: undefined,
}
let Data = {}

// Games
const Games = {
    ["Red"]: {ID: 1, Generation: 1, Title: "Red Version"},
    ["Blue"]: {ID: 2, Generation: 1, Title: "Blue Version"},
    ["Yellow"]: {ID: 3, Generation: 1, Title: "Yellow Version"},
    ["Gold"]: {ID: 4, Generation: 2, Title: "Gold Version"},
    ["Silver"]: {ID: 5, Generation: 2, Title: "Silver Version"},
    ["Crystal"]: {ID: 6, Generation: 2, Title: "Crystal Version"},
    ["Ruby"]: {ID: 7, Generation: 3, Title: "Ruby Version"},
    ["Sapphire"]: {ID: 8, Generation: 3, Title: "Sapphire Version"},
    ["Colosseum"]: {ID: 9, Generation: 3, Title: "Colosseum"},
    ["FireRed"]: {ID: 10, Generation: 3, Title: "FireRed Version"},
    ["LeafGreen"]: {ID: 11, Generation: 3, Title: "LeafGreen Version"},
    ["Emerald"]: {ID: 12, Generation: 3, Title: "Emerald Version"},
    ["XD"]: {ID: 13, Generation: 3, Title: "XD: Gale of Darkness"},
    ["Diamond"]: {ID: 14, Generation: 4, Title: "Diamond Version"},
    ["Pearl"]: {ID: 15, Generation: 4, Title: "Pearl Version"},
    ["Platinum"]: {ID: 16, Generation: 4, Title: "Platinum Version"},
    ["HeartGold"]: {ID: 17, Generation: 4, Title: "HeartGold Version"},
    ["SoulSilver"]: {ID: 18, Generation: 4, Title: "SoulSilver Version"},
    ["Black"]: {ID: 19, Generation: 5, Title: "Black Version"},
    ["White"]: {ID: 20, Generation: 5, Title: "White Version"},
    ["Black 2"]: {ID: 21, Generation: 5, Title: "Black Version 2"},
    ["White 2"]: {ID: 22, Generation: 5, Title: "White Version 2"},
    ["X"]: {ID: 23, Generation: 6, Title: "X"},
    ["Y"]: {ID: 24, Generation: 6, Title: "Y"},
    ["Omega Ruby"]: {ID: 25, Generation: 6, Title: "Omega Ruby"},
    ["Alpha Sapphire"]: {ID: 26, Generation: 6, Title: "Alpha Sapphire"},
    ["Sun"]: {ID: 27, Generation: 7, Title: "Sun"},
    ["Moon"]: {ID: 28, Generation: 7, Title: "Moon"},
    ["Ultra Sun"]: {ID: 29, Generation: 7, Title: "Ultra Sun"},
    ["Ultra Moon"]: {ID: 30, Generation: 7, Title: "Ultra Moon"},
    ["Lets Go Pikachu"]: {ID: 31, Generation: 7, Title: "Let's Go, Pikachu!"},
    ["Lets Go Eevee"]: {ID: 32, Generation: 7, Title: "Let's Go, Eevee!"},
    ["Sword"]: {ID: 33, Generation: 8, Title: "Sword"},
    ["Shield"]: {ID: 34, Generation: 8, Title: "Shield"},
    //["Legend Arceus"]: {ID: 35, Generation: 8, Title: "XXXX"},
    //["Brilliant Diamond"]: {ID: 36, Generation: 8, Title: "XXXX"},
    //["Shining Pearl"]: {ID: 37, Generation: 8, Title: "XXXX"},
    //["Scarlet"]: {ID: 38, Generation: 9, Title: "XXXX"},
    //["Violet"]: {ID: 39, Generation: 9, Title: "XXXX"},
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
            Default: "./media/Images/Pokemon/Menu/Default/",
            Shiny: "./media/Images/Pokemon/Menu/Shiny/"
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
    Config = { ...Config_default }

    Config.ID = id || 1;
    Config.Game = get_game(Config.ID)
	Config.Generation = get_generation(Config.ID)

    Data = json_data;

	switch (Config.ID) { // Per Game
        case 1: // Red
        case 2: // Blue
        case 3: // Yellow
            Config.Map = map_data["Kanto 1"] || [];
            break;
        case 4: // Gold
        case 5: // Silver
        case 6: // Crystal
            Config.Map = map_data["Johto Kanto 1"] || [];
            break;
        case 7: // Ruby
        case 8: // Sapphire
			Config.Map = map_data["Hoenn 1"] || [];
			break;
        case 9: // Colosseum
			Config.Map = map_data["Orre 1"] || [];
			break;
        case 10: // FireRed
        case 11: // LeafGreen
			Config.Map = map_data["Kanto Sevii 1"] || [];
			break;
        case 12: // Emerald
			Config.Map = map_data["Hoenn 2"] || [];
			break;
        case 13: // XD
			Config.Map = map_data["Orre 2"] || [];
			break;
        case 14: // Diamond
        case 15: // Pearl
            Config.Map = map_data["Sinnoh 1"] || [];
            break
        case 16: // Platinum
            Config.Map = map_data["Sinnoh 2"] || [];
			break;
        case 17: // HeartGold
        case 18: // SoulSilver
			Config.Map = map_data["Johto Kanto 2"] || [];
			break;
        case 19: // Black
            Config.Map = map_data["Unova 1"] || [];
            break
        case 20: // White
			Config.Map = map_data["Unova 2"] || [];
			break;
        case 21: // Black 2
            Config.Map = map_data["Unova 3"] || [];
			break;
        case 22: // White 2
			Config.Map = map_data["Unova 4"] || [];
			break;
        case 23: // X
        case 24: // Y
            Config.Map = map_data["Kalos 1"] || [];
            break;
        case 25: // Omega Ruby
        case 26: // Alpha Sapphire
            Config.Map = map_data["Hoenn 3"] || [];
            break;
        case 27: // Sun
			Config.Map = map_data["Alola 1"] || [];
			Config.Allies = true;
			break;
        case 28: // Moon
			Config.Map = map_data["Alola 2"] || [];
			Config.Allies = true;
			break;
		case 29: // Ultra Sun
			Config.Map = map_data["Alola 3"] || [];
			Config.Allies = true;
			break;
        case 30: // Ultra Moon
			Config.Map = map_data["Alola 4"] || [];
			Config.Allies = true;
			break;
        case 31: // Lets Go Pikachu
        case 32: // Lets Go Eevee
            Config.Map = map_data["Kanto 2"] || [];
            break;
        case 33: // Sword
        case 34: // Shield
            Config.Map = map_data["Galar 1"] || [];
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

    // Images
    /*
    Config.Image.Pokemon.Battle.Default.Path = [Path.Pokemon.Battle.Default.Front.GIF, Path.Pokemon.Battle.Default.Front.PNG,Path.Pokemon.Menu.Default];
    Config.Image.Pokemon.Battle.Default.Game = [Config.Game];
    Config.Image.Pokemon.Box.Default.Path = [Path.Pokemon.Box.Default.PNG,Path.Pokemon.Box.Default.GIF];
    Config.Image.Pokemon.Box.Default.Game = Config.Generation >= 1 && Config.Generation <= 2 ? ["3"] : [Config.Game];
    Config.Image.Item.Bag.Path = [Path.Item.Bag];
    Config.Image.Item.Bag.Game = [Config.Game];
    */

    map_update();
    load_initialize();
}


let Images = {}

function image_configure() {

    // Image lookup table
    Config.Images = {};

    // Pokemon
    Config.Images.Pokemon = {};

    Object.keys(Data.Pokemon).forEach(p => {
        Config.Images.Pokemon[p] = {};
        Config.Images.Pokemon[p].Battle = {};
        Config.Images.Pokemon[p].Battle.Default = {};
        Config.Images.Pokemon[p].Battle.Default.Front = {};
        Config.Images.Pokemon[p].Battle.Default.Front.PNG = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Battle.Default.Front.PNG] });
        Config.Images.Pokemon[p].Battle.Default.Front.GIF = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Battle.Default.Front.GIF] });
        Config.Images.Pokemon[p].Box = {};
        Config.Images.Pokemon[p].Box.Default = {};
        Config.Images.Pokemon[p].Box.Default.PNG = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Box.Default.PNG], Game: Config.Generation >= 1 && Config.Generation <= 2 ? ["3"] : [Config.Game] });
        Config.Images.Pokemon[p].Box.Default.GIF = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Box.Default.GIF], Game: Config.Generation >= 1 && Config.Generation <= 2 ? ["3"] : [Config.Game] });

        Config.Images.Pokemon[p].Overworld = {};
        Config.Images.Pokemon[p].Overworld.Default = {};
        Config.Images.Pokemon[p].Overworld.Default.Front = {};
        Config.Images.Pokemon[p].Overworld.Default.Front.PNG = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Overworld.Default.Front.PNG] });
        Config.Images.Pokemon[p].Overworld.Default.Front.GIF = get_directory({ FirstMatch: true, Exact: true, File: [Data.Pokemon[p].File], Path: [Path.Pokemon.Overworld.Default.Front.GIF] });
    });

    // Items
    Config.Images.Items = {};

    Object.keys(Data.Items).forEach(i => {
        Config.Images.Items[i] = {};
        Config.Images.Items[i].Bag = get_directory({ FirstMatch: true, Exact: true, File: [Data.Items[i].File,...Data.Items[i].Item], Path: [Path.Item.Bag] });
    });

    // Locations
    Config.Images.Locations = {};

    Object.keys(Data.Locations).forEach(l => {
        Config.Images.Locations[l] = {};
        Config.Images.Locations[l].Overview = get_directory({ FirstMatch: false, Exact: true, File: [...Data.Locations[l].Location], Path: [Path.Location.Load, Path.Location.Overview]});
        Config.Images.Locations[l].Overview.sort((a, b) => Data.Locations[l].Location.some(v => a.split('/').pop().startsWith(v) && !a.split('/').pop().includes('_')) && !Data.Locations[l].Location.some(v => b.split('/').pop().startsWith(v) && !b.split('/').pop().includes('_')) ? -1 : !Data.Locations[l].Location.some(v => a.split('/').pop().startsWith(v) && !a.split('/').pop().includes('_')) && Data.Locations[l].Location.some(v => b.split('/').pop().startsWith(v) && !b.split('/').pop().includes('_')) ? 1 : a.localeCompare(b));
    });

    // Types
    Config.Images.Types = {};

    Config.Types.forEach(t => {
        Config.Images.Types[t] = {};
        Config.Images.Types[t].Icon = get_directory({ FirstMatch: true, Exact: true, File: [t], Path: [Path.Type.Icon] });
    });


    // Game
    Config.Images.Game = {};
    Config.Images.Game.Title = get_directory({ FirstMatch: true, Exact: true, File: ["Title"], Path: [Path.Game.Title]});

    //Images.Type["Fire"].Icon
    //Images.Pokemon["Bulbasaur"].
}
