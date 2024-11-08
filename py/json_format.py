import json
import os
import re
import copy
import time

# Start the timer for the entire script
start_time = time.time()

# Directory containing the JSON files
data_directory = '../data/'

# List of dataset files to load
dataset_files = [
    "Pokemon Learnset Dataset.json", "Location Pokemon Dataset.json", "Location Items Dataset.json",
    "Location Trainers Dataset.json", "Abilities Dataset.json", "Locations Dataset.json",
    "Moves Dataset.json", "Items Dataset.json", "Pokemon Dataset.json", "Trainers Dataset.json"
]

# Initialize finaldata dictionary
data_import = {}
finaldata = {}
Data = {}

# Load JSON data from each file and add it to finaldata
for dataset_file in dataset_files:
    file_path = os.path.join(data_directory, dataset_file)
    with open(file_path, 'r', encoding='utf-8') as file:
        key = dataset_file.replace(' Dataset.json', '')
        data_import[key] = json.load(file)


# Games List
Games = {
    "Red": {"ID": 1, "Generation": 1},
    "Blue": {"ID": 2, "Generation": 1},
    "Yellow": {"ID": 3, "Generation": 1},
    "Gold": {"ID": 4, "Generation": 2},
    "Silver": {"ID": 5, "Generation": 2},
    "Crystal": {"ID": 6, "Generation": 2},
    "Ruby": {"ID": 7, "Generation": 3},
    "Sapphire": {"ID": 8, "Generation": 3},
    "Colosseum": {"ID": 9, "Generation": 3},
    "FireRed": {"ID": 10, "Generation": 3},
    "LeafGreen": {"ID": 11, "Generation": 3},
    "Emerald": {"ID": 12, "Generation": 3},
    "XD": {"ID": 13, "Generation": 3},
    "Diamond": {"ID": 14, "Generation": 4},
    "Pearl": {"ID": 15, "Generation": 4},
    "Platinum": {"ID": 16, "Generation": 4},
    "HeartGold": {"ID": 17, "Generation": 4},
    "SoulSilver": {"ID": 18, "Generation": 4},
    "Black": {"ID": 19, "Generation": 5},
    "White": {"ID": 20, "Generation": 5},
    "Black 2": {"ID": 21, "Generation": 5},
    "White 2": {"ID": 22, "Generation": 5},
    "X": {"ID": 23, "Generation": 6},
    "Y": {"ID": 24, "Generation": 6},
    "Omega Ruby": {"ID": 25, "Generation": 6},
    "Alpha Sapphire": {"ID": 26, "Generation": 6},
    "Sun": {"ID": 27, "Generation": 7},
    "Moon": {"ID": 28, "Generation": 7},
    "Ultra Sun": {"ID": 29, "Generation": 7},
    "Ultra Moon": {"ID": 30, "Generation": 7},
    "Lets Go Pikachu": {"ID": 31, "Generation": 7},
    "Lets Go Eevee": {"ID": 32, "Generation": 7},
    "Sword": {"ID": 33, "Generation": 8},
    "Shield": {"ID": 34, "Generation": 8},
    #"Brilliant Diamond": {"ID": 35, "Generation": 8},
    #"Shining Pearl": {"ID": 36, "Generation": 8},
    #"Legends: Arceus": {"ID": 37, "Generation": 8},
    #"Scarlet": {"ID": 38, "Generation": 9},
    #"Violet": {"ID": 39, "Generation": 9}
}

# Define the get_game function
def get_game(name):
    if isinstance(name, str):
        for key, val in Games.items():
            if re.sub(r'[^a-zA-Z0-9]', '', key).lower() == re.sub(r'[^a-zA-Z0-9]', '', name).lower():
                return val["ID"]
    elif isinstance(name, int):
        for key, val in Games.items():
            if val["ID"] == name:
                return val["ID"]
    return -1

# Define the get_generation function
def get_generation(value):
    if isinstance(value, str):
        for key, val in Games.items():
            if re.sub(r'[^a-zA-Z0-9]', '', key).lower() == re.sub(r'[^a-zA-Z0-9]', '', value).lower():
                return val["Generation"]
    elif isinstance(value, int):
        for key, val in Games.items():
            if val["ID"] == value:
                return val["Generation"]
    return -1

def get_defaultPokemon(target_pokemon, current_game):
    default_pokemon = None
    max_keys = 0
    target_specie = Data["Pokemon"][target_pokemon]["Pokemon"] if target_pokemon in Data["Pokemon"] else target_pokemon

    for key, pokemon_entry in Data["Pokemon"].items():
        # Check if the Pokemon matches the target
        if pokemon_entry.get("Pokemon") == target_specie:
            # Count the number of keys in the current pokemon_entry
            number_of_keys = len(pokemon_entry)

            # Update if this entry has more keys
            if number_of_keys > max_keys:
                max_keys = number_of_keys
                default_pokemon = key

    return default_pokemon

# Define the get_pokemonIndex function
def get_pokemonIndex(pokemon, current_game):
    if pokemon in Data["Pokemon"]:
        return pokemon

    search1 = next((key for key in Data["Pokemon"] if Data["Pokemon"][key].get("Pokemon") == pokemon), None)
    if search1:
        return get_defaultPokemon(search1,current_game)

    search2 = next((key for key in Data["Pokemon"] if Data["Pokemon"][key].get("Pokemon") and re.sub(r'[^a-zA-Z0-9]', '', Data["Pokemon"][key]["Pokemon"]).lower() == re.sub(r'[^a-zA-Z0-9]', '', pokemon).lower()), None)
    if search2:
        return get_defaultPokemon(search2,current_game)

    return None

# Define the get_itemIndex function
def get_itemIndex(item, current_game):
    if item in Data["Items"]:
        return item

    search1 = next((key for key in Data["Items"] if Data["Items"][key].get("Item") and item in Data["Items"][key]["Item"]), None)
    if search1:
        return search1

    search2 = next((key for key in Data["Items"] if Data["Items"][key].get("Item") and any(re.sub(r'[^a-zA-Z0-9]', '', i).lower() == re.sub(r'[^a-zA-Z0-9]', '', item).lower() for i in Data["Items"][key]["Item"])), None)
    if search2:
        return search2

    return None

# Define the get_abilityIndex function
def get_abilityIndex(ability, current_game):
    if ability in Data["Abilities"]:
        return ability

    search1 = next((key for key in Data["Abilities"] if Data["Abilities"][key].get("Ability") and ability in Data["Abilities"][key]["Ability"]), None)
    if search1:
        return search1

    search2 = next((key for key in Data["Abilities"] if Data["Abilities"][key].get("Ability") and any(re.sub(r'[^a-zA-Z0-9]', '', i).lower() == re.sub(r'[^a-zA-Z0-9]', '', ability).lower() for i in Data["Abilities"][key]["Ability"])), None)
    if search2:
        return search2

    return None

# Define the get_abilityIndex function
def get_locationIndex(location, current_game):
    if location in Data["Locations"]:
        return location

    search1 = next((key for key in Data["Locations"] if Data["Locations"][key].get("Location") and location in Data["Locations"][key]["Location"]), None)
    if search1:
        return search1

    search2 = next((key for key in Data["Locations"] if Data["Locations"][key].get("Location") and any(re.sub(r'[^a-zA-Z0-9]', '', i).lower() == re.sub(r'[^a-zA-Z0-9]', '', location).lower() for i in Data["Locations"][key]["Location"])), None)
    if search2:
        return search2

    return None

# Define the get_moveIndex function
def get_moveIndex(move, current_game):
    if move in Data["Moves"]:
        return move

    search1 = next((key for key in Data["Moves"] if Data["Moves"][key].get("Move") and move in Data["Moves"][key]["Move"]), None)
    if search1:
        return search1

    search2 = next((key for key in Data["Moves"] if Data["Moves"][key].get("Move") and any(re.sub(r'[^a-zA-Z0-9]', '', i).lower() == re.sub(r'[^a-zA-Z0-9]', '', move).lower() for i in Data["Moves"][key]["Move"])), None)
    if search2:
        return search2

    return None


# Define the get_applicable function
def get_applicable(value, game):
    def check_range(start, end, target):
        game_id1, game_id2 = get_game(start), get_game(end)
        target_id = get_game(target)
        return game_id1 > 0 and game_id2 > 0 and target_id > 0 and (target_id >= min(game_id1, game_id2) and target_id <= max(game_id1, game_id2))

    values = value if isinstance(value, list) else re.split(r'[,_]', str(value))
    games = game if game is not None else ["All"]
    games = games if isinstance(games, list) else re.split(r'[,_]', str(games))

    for g in games:
        if g == "All":
            return True

        game_generation = int(g) if g.isdigit() else get_generation(g)
        game_id = None if g.isdigit() else get_game(g)

        for v in values:
            if v == "All":
                return True

            value_generation = int(v) if v.isdigit() else get_generation(v)
            value_id = None if v.isdigit() else get_game(v)

            # Check if the value is a range
            if '-' in v:
                start, end = v.split('-')
                generation_start, generation_end = min(start, end), max(start, end)

                if generation_start.isdigit() and generation_end.isdigit():
                    # Example: 5-6 --> Generation 5 to 6
                    if game_generation >= int(generation_start) and game_generation <= int(generation_end):
                        return True
                else:
                    # Example: Ruby-Sun --> Ruby (id: 7) to Sun (id: 27)
                    if check_range(start, end, g):
                        return True
            elif '-' in g:
                start, end = g.split('-')
                generation_start, generation_end = min(start, end), max(start, end)

                if generation_start.isdigit() and generation_end.isdigit():
                    # Example: 5-6 --> Generation 5 to 6
                    if value_generation >= int(generation_start) and value_generation <= int(generation_end):
                        return True
                else:
                    # Example: Ruby-Sun --> Ruby (id: 7) to Sun (id: 27)
                    if check_range(start, end, v):
                        return True
            else:
                # Check if the value is a single generation or game
                if value_id == game_id or g == v:
                    return True

                # Check if the value or game is a digit and compare generations
                if (v.isdigit() or g.isdigit()) and game_generation == value_generation:
                    return True

    return False


def split_string(str,split):
    if split in str:
        return str.split(',')
    else:
        return [str]
    

def parse_conjunctionSplit(string):
    # Split the string by slashes first
    groups = string.split('/')
    
    # Then split each group by commas and trim whitespace
    groups = [group.split(',') for group in groups]
    groups = [[item.strip() for item in group] for group in groups]
    
    return groups

def format_V(string):
    v_array = list(map(int, string.split(',')))
    v_object = {}

    if len(v_array) == 6:
        v_object = {
            "HP": v_array[0],
            "Attack": v_array[1],
            "Defense": v_array[2],
            "SpAtk": v_array[3],
            "SpDef": v_array[4],
            "Speed": v_array[5]
        }
    elif len(v_array) == 5:
        v_object = {
            "HP": v_array[0],
            "Attack": v_array[1],
            "Defense": v_array[2],
            "Special": v_array[3],
            "Speed": v_array[4]
        }
    else:
        raise ValueError("Invalid string format")

    return v_object


def parse_levels(level):
    # Example Usage: "25-32,35" --> [25,26,27,28,29,30,31,32,35]

    if not isinstance(level, str) or any(c.isalpha() for c in level):
        return [level]  # Fallback if level is not valid

    # Normalize the input to replace non-standard dashes with regular hyphens
    level = re.sub(r'[–—]', '-', level)

    # Split the input by commas and process each part
    formatted_level = []
    for part in level.split(','):
        if '-' in part:
            start, end = map(int, part.split('-'))
            if start <= end:
                formatted_level.extend(range(start, end + 1))
        else:
            num = int(part.strip())
            formatted_level.append(num)

    # Remove duplicates and create a unique sorted array
    return sorted(set(formatted_level))

# Function to filter the data
def data_filter(game):
    # List of keys to filter
    keys_to_filter = [
        "Pokemon Learnset", "Location Pokemon", "Location Items", "Location Trainers",
        "Abilities", "Locations", "Moves", "Items", "Pokemon", "Trainers"
    ]

    for key in keys_to_filter:
        if key in finaldata:
            arr = finaldata[key]
            if isinstance(arr, dict):
                for sub_key in arr:
                    if isinstance(arr[sub_key], list) and any(isinstance(entry, dict) and 'Game' in entry for entry in arr[sub_key]):
                        arr[sub_key] = [entry for entry in arr[sub_key] if get_applicable(entry['Game'], game)]

# Function to update the data
def data_update(current_game):

    # Settings
    ID = get_game(current_game)
    Generation = get_generation(current_game)
    Egg = Generation >= 2 and ID != 31 and ID != 32
    Gender = Generation >= 2
    Friendship = Generation >= 2
    Held = Generation >= 2 and ID != 31 and ID != 32
    if 31 <= ID <= 32:
        Ability = None
    else:
        if Generation >= 5:
            Ability = ["Primary", "Secondary", "Hidden"]
        elif Generation >= 3:
            Ability = ["Primary", "Secondary"]
        else:
            Ability = None

    # Pokemon
    Data["Pokemon"] = {}

    # Pokemon - Overview
    for entry in finaldata["Pokemon"]["Overview"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        active = entry.get("Active")

        if active and get_applicable(game, current_game):
            Data["Pokemon"][pokemon] = {}

    # Pokemon - Specie
    for entry in finaldata["Pokemon"]["Specie"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        specie = entry.get("Specie")
        
        if get_applicable(game, current_game):
            if pokemon in Data["Pokemon"]:
                Data["Pokemon"][pokemon].update({"Pokemon": specie} if specie is not None else {})

    # Pokemon - File
    for entry in finaldata["Pokemon"]["File"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        file = entry.get("File")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index].update({"File": str(file)} if file is not None else {})
    
    # Pokemon - Form Item
    for entry in finaldata["Pokemon"]["Form Item"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        required = entry.get("Required")
        conflict = entry.get("Conflict")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Form": {
                        **(Data["Pokemon"][pokemon_index].get("Form", {})),
                        **({"Required Item": parse_conjunctionSplit(required) if required else []} if required is not None else {}),
                        **({"Conflicting Item": parse_conjunctionSplit(conflict) if conflict else []} if conflict is not None else {})
                    }
                }

    # Pokemon - Form Change
    for entry in finaldata["Pokemon"]["Form Change"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        change = entry.get("Change")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Form": {
                        **(Data["Pokemon"][pokemon_index].get("Form", {})),
                        **({"Change": change} if change is not None else {})
                    }
                }
    # Pokemon - Pokédex ID
    for entry in finaldata["Pokemon"]["Pokedex ID"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        dex = entry.get("Dex")
        id = entry.get("ID")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Pokedex": {
                        **(Data["Pokemon"][pokemon_index].get("Pokedex", {})),
                        **({dex: id} if id is not None else {})
                    }
                }
    # Pokemon - Pokédex Color
    for entry in finaldata["Pokemon"]["Pokedex Color"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        color = entry.get("Color")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Pokedex Color": color} if color is not None else {})
                }

    # Pokemon - Pokédex Entry
    for entry in finaldata["Pokemon"]["Pokedex Entry"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        entry_text = entry.get("Entry")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Pokedex Entry": entry_text} if entry_text is not None else {})
                }

    # Pokemon - Type
    for entry in finaldata["Pokemon"]["Type"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        primary = entry.get("Primary")
        secondary = entry.get("Secondary")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Type": {
                        **(Data["Pokemon"][pokemon_index].get("Type", {})),
                        **({"Primary": primary} if primary is not None else {}),
                        **({"Secondary": secondary} if secondary is not None else {})
                    }
                }

    # Pokemon - Ability
    if Ability is not None:
        for entry in finaldata["Pokemon"]["Ability"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            primary = entry.get("Primary")
            secondary = entry.get("Secondary")
            hidden = entry.get("Hidden")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if pokemon_index in Data["Pokemon"]:
                    Data["Pokemon"][pokemon_index] = {
                        **Data["Pokemon"][pokemon_index],
                        "Ability": {
                            **(Data["Pokemon"][pokemon_index].get("Ability", {})),
                            **({"Primary": primary} if "Primary" in Ability and primary is not None else {}),
                            **({"Secondary": secondary} if "Secondary" in Ability and secondary is not None else {}),
                            **({"Hidden": hidden} if "Hidden" in Ability and hidden is not None else {})
                        }
                    }

    # Pokemon - Evolution Specie
    for entry in finaldata["Pokemon"]["Evolution Specie"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        previous_evolution = entry.get("Previous")
        next_evolution = entry.get("Next")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Evolution": {
                         
                        **(Data["Pokemon"][pokemon_index].get("Evolution", {})),
                        **({"Previous": re.split('|'.join(map(re.escape, [","])), previous_evolution)} if previous_evolution is not None else {}),
                        **({"Next": re.split('|'.join(map(re.escape, [","])), next_evolution)} if next_evolution is not None else {})
                    }
                }

    # Pokemon - Evolution Method
    for entry in finaldata["Pokemon"]["Evolution Method"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        evolution_type = entry.get("Type")
        item = entry.get("Item")
        level = entry.get("Level")
        extra = entry.get("Extra")
        gender = entry.get("Gender")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Evolution": {
                        **(Data["Pokemon"][pokemon_index].get("Evolution", {})),
                        **({"Type": evolution_type} if evolution_type is not None else {}),
                        **({"Item": item} if item is not None else {}),
                        **({"Level": level} if level is not None else {}),
                        **({"Extra": extra} if extra is not None else {}),
                        **({"Gender": gender} if gender is not None else {})
                    }
                }
    
    # Pokemon - Offspring
    if Egg:
        for entry in finaldata["Pokemon"]["Offspring"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            offspring = entry.get("Offspring")
            factor = entry.get("Factor")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if pokemon_index in Data["Pokemon"]:
                    Data["Pokemon"][pokemon_index]["Offspring"] = [
                        {"Offspring": v, **({"Factor": factor_value} if factor_value else {})}
                        for i, v in enumerate(parse_conjunctionSplit(offspring))
                        for factor_value in [parse_conjunctionSplit(factor)[i] if factor else None]
                    ]
        
        # Pokemon - Egg Cycle
        for entry in finaldata["Pokemon"]["Egg Cycle"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            cycle = entry.get("Egg Cycle")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if cycle is not None:
                    steps_value = None
                    if Generation in [2, 3, 7]:
                        steps_value = cycle * 256
                    elif Generation == 4 or ID in [35, 36]:
                        steps_value = cycle * 255
                    elif Generation in [5, 6]:
                        steps_value = cycle * 257
                    elif ID in [33, 34]:
                        steps_value = cycle * 128
                    
                    if pokemon_index in Data["Pokemon"]:
                        Data["Pokemon"][pokemon_index] = {
                            **Data["Pokemon"][pokemon_index],
                            "Egg Cycle": {
                                "Cycle": cycle,
                                **({"Steps": steps_value} if steps_value is not None else {})
                            }
                        }

        # Pokemon - Egg Group
        for entry in finaldata["Pokemon"]["Egg Group"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            primary = entry.get("Primary")
            secondary = entry.get("Secondary")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if pokemon_index in Data["Pokemon"]:
                    Data["Pokemon"][pokemon_index] = {
                        **Data["Pokemon"][pokemon_index],
                        "Egg Group": {
                            **(Data["Pokemon"][pokemon_index].get("Egg Group", {})),
                            **({"Primary": primary} if primary is not None else {}),
                            **({"Secondary": secondary} if secondary is not None else {})
                        }
                    }

    if Gender:
        # Pokemon - Gender Ratio
        for entry in finaldata["Pokemon"]["Gender Ratio"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            ratio = entry.get("Ratio")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if pokemon_index in Data["Pokemon"]:
                    Data["Pokemon"][pokemon_index] = {
                        **Data["Pokemon"][pokemon_index],
                        **({"Gender Ratio": {
                            "Female": int(ratio.split(":")[0]),
                            "Male": int(ratio.split(":")[1])
                        }} if ratio is not None else {})
                    }

    # Pokemon - Category
    for entry in finaldata["Pokemon"]["Category"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        category = entry.get("Category")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Category": category} if category is not None else {})
                }

    # Pokemon - Group
    for entry in finaldata["Pokemon"]["Group"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        group = entry.get("Group")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Group": group} if group is not None else {})
                }

    # Pokemon - Experience Yield
    for entry in finaldata["Pokemon"]["Experience Yield"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        yield_value = entry.get("Yield")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Experience Yield": yield_value} if yield_value is not None else {})
                }

    # Pokemon - Effort Value Yield
    for entry in finaldata["Pokemon"]["Effort Value Yield"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        hp = entry.get("HP")
        attack = entry.get("Attack")
        defense = entry.get("Defense")
        special = entry.get("Special")
        sp_atk = entry.get("SpAtk")
        sp_def = entry.get("SpDef")
        speed = entry.get("Speed")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Effort Value Yield": {
                        **(Data["Pokemon"][pokemon_index].get("Effort Value Yield", {})),
                        **({"HP": hp} if hp is not None else {}),
                        **({"Attack": attack} if attack is not None else {}),
                        **({"Defense": defense} if defense is not None else {}),
                        **({"Special": special} if special is not None else {}),
                        **({"SpAtk": sp_atk} if sp_atk is not None else {}),
                        **({"SpDef": sp_def} if sp_def is not None else {}),
                        **({"Speed": speed} if speed is not None else {})
                    }
                }

    # Pokemon - Base Stats
    for entry in finaldata["Pokemon"]["Base Stats"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        hp = entry.get("HP")
        attack = entry.get("Attack")
        defense = entry.get("Defense")
        special = entry.get("Special")
        sp_atk = entry.get("SpAtk")
        sp_def = entry.get("SpDef")
        speed = entry.get("Speed")
        total = entry.get("Total")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Base Stats": {
                        **(Data["Pokemon"][pokemon_index].get("Base Stats", {})),
                        **({"HP": hp} if hp is not None else {}),
                        **({"Attack": attack} if attack is not None else {}),
                        **({"Defense": defense} if defense is not None else {}),
                        **({"Special": special} if special is not None else {}),
                        **({"SpAtk": sp_atk} if sp_atk is not None else {}),
                        **({"SpDef": sp_def} if sp_def is not None else {}),
                        **({"Speed": speed} if speed is not None else {}),
                        **({"Total": total} if total is not None else {})
                    }
                }

    # Pokemon - Base Friendship
    for entry in finaldata["Pokemon"]["Base Friendship"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        friendship = entry.get("Friendship")
        
        if Friendship and get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Base Friendship": friendship} if friendship is not None else {})
                }

    # Shape
    for entry in finaldata["Pokemon"]["Shape"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        shape = entry.get("Shape")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Shape": shape} if shape is not None else {})
                }

    # Pokemon - Height
    for entry in finaldata["Pokemon"]["Height"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        metric = entry.get("Metric")
        customary = entry.get("Customary")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Height": {
                        **(Data["Pokemon"][pokemon_index].get("Height", {})),
                        **({"Metric": metric} if metric is not None else {}),
                        **({"Customary": customary} if customary is not None else {})
                    }
                }

    # Pokemon - Weight
    for entry in finaldata["Pokemon"]["Weight"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        metric = entry.get("Metric")
        customary = entry.get("Customary")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    "Weight": {
                        **(Data["Pokemon"][pokemon_index].get("Weight", {})),
                        **({"Metric": metric} if metric is not None else {}),
                        **({"Customary": customary} if customary is not None else {})
                    }
                }

    # Pokemon - Leveling Rate
    for entry in finaldata["Pokemon"]["Leveling Rate"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        rate = entry.get("Leveling Rate")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Leveling Rate": rate} if rate is not None else {})
                }

    # Pokemon - Catch Rate
    for entry in finaldata["Pokemon"]["Catch Rate"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        rate = entry.get("Catch Rate")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon, current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index] = {
                    **Data["Pokemon"][pokemon_index],
                    **({"Catch Rate": rate} if rate is not None else {})
                }

    # Pokemon - Held Item
    if Held:
        for entry in finaldata["Pokemon"]["Held Item"]:
            game = entry.get("Game")
            pokemon = entry.get("Pokemon")
            item = entry.get("Item")
            rate = entry.get("Rate")
            
            if get_applicable(game, current_game):
                pokemon_index = get_pokemonIndex(pokemon, current_game)
                
                if pokemon_index in Data["Pokemon"]:
                    Data["Pokemon"][pokemon_index]["Held Item"] = [
                        *(Data["Pokemon"][pokemon_index].get("Held Item", [])),
                        {
                            **({"Item": item} if item is not None else {}),
                            **({"Rate": rate} if rate is not None else {})
                        }
                    ]

    # Items
    Data["Items"] = {}

    # Items - Overview
    for entry in finaldata["Items"]["Overview"]:
        game = entry.get("Game")
        index = entry.get("Index")
        active = entry.get("Active")

        if active and get_applicable(game, current_game):
            Data["Items"][index] = {}

    # Items - Item Details
    for entry in finaldata["Items"]["Overview"]:
        game = entry.get("Game")
        index = entry.get("Index")
        item = entry.get("Item")
        id = entry.get("ID")
        file = entry.get("File")
        alias = entry.get("Alias")
        pocket = entry.get("Pocket")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item, current_game)
            
            if item_index in Data["Items"]:
                Data["Items"][item_index] = {
                    **Data["Items"][item_index],
                    **({"Index": index} if index is not None else {}),
                    **({"Item": [item]} if item is not None else {}),
                    **({"ID": id} if id is not None else {}),
                    **({"File": file} if file is not None else {}),
                    **({"Alias": alias} if alias is not None else {}),
                    **({"Pocket": pocket} if pocket is not None else {})
                }

    # Items - Description
    for entry in finaldata["Items"]["Description"]:
        game = entry.get("Game")
        index = entry.get("Index")
        item = entry.get("Item")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item, current_game)
            
            if item_index in Data["Items"]:
                Data["Items"][item_index] = {
                    **Data["Items"][item_index],
                    **({"Description": description} if description is not None else {})
                }

    # Items - Type Enhance
    for entry in finaldata["Items"]["Type Enhance"]:
        game = entry.get("Game")
        item = entry.get("Item")
        item_type = entry.get("Type")
        value = entry.get("Value")
        pokemon = entry.get("Pokemon")
        
        if get_applicable(game, current_game):
            item_index = get_itemIndex(item, current_game)
            
            if item_index in Data["Items"]:
                Data["Items"][item_index] = {
                    **Data["Items"][item_index],
                    "Type Enhance": {
                        **({"Type": item_type} if item_type is not None else {}),
                        **({"Value": value} if value is not None else {}),
                        **({"Pokemon": parse_conjunctionSplit(pokemon)} if pokemon is not None else {})
                    }
                }

    # Items - Effect
    for entry in finaldata["Items"]["Effect"]:
        game = entry.get("Game")
        index = entry.get("Index")
        item = entry.get("Item")
        effect = entry.get("Effect")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item, current_game)
            
            if item_index in Data["Items"]:
                effect_entry = {
                    **({"Effect": effect} if effect is not None else {})
                }
                Data["Items"][item_index]["Effect"] = Data["Items"][item_index].get("Effect", []) + [effect_entry]

    # Items - Sell
    for entry in finaldata["Items"]["Sell"]:
        game = entry.get("Game")
        index = entry.get("Index")
        item = entry.get("Item")
        shop = entry.get("Shop")
        price = entry.get("Price")
        currency = entry.get("Currency")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item, current_game)
            
            if item_index in Data["Items"]:
                sell_entry = {
                    **({"Price": price} if price is not None else {}),
                    **({"Currency": currency} if currency is not None else {}),
                    **({"Shop": shop} if shop is not None else {})
                }
                Data["Items"][item_index]["Sell"] = Data["Items"][item_index].get("Sell", []) + [sell_entry]

    # Abilities
    if Ability is not None:

        # Abilities
        Data["Abilities"] = {}

        # Abilities - Overview
        for entry in finaldata["Abilities"]["Overview"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            id = entry.get("ID")

            if get_applicable(game, current_game):
                Data["Abilities"][ability] = {}

        for entry in finaldata["Abilities"]["Overview"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            id = entry.get("ID")
            
            if get_applicable(game, current_game):
                if ability in Data["Abilities"]:
                    Data["Abilities"][ability] = {
                        **Data["Abilities"][ability],
                        **({"ID": id} if id is not None else {}),
                        **({"Ability": [ability]} if ability is not None else {})
                    }

        # Abilities - Description
        for entry in finaldata["Abilities"]["Description"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            description = entry.get("Description")
            
            if get_applicable(game, current_game):
                ability_index = get_abilityIndex(ability, current_game)
                
                if ability_index in Data["Abilities"]:
                    Data["Abilities"][ability_index] = {
                        **Data["Abilities"][ability_index],
                        **({"Description": description} if description is not None else {})
                    }

        # Abilities - Effect
        for entry in finaldata["Abilities"]["Effect"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            effect = entry.get("Effect")
            
            if get_applicable(game, current_game):
                ability_index = get_abilityIndex(ability, current_game)
                
                if ability_index in Data["Abilities"]:
                    effect_entry = {
                        **({"Effect": effect} if effect is not None else {})
                    }
                    Data["Abilities"][ability_index]["Effect"] = Data["Abilities"][ability_index].get("Effect", []) + [effect_entry]

        # Abilities - Category
        for entry in finaldata["Abilities"]["Category"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            category = entry.get("Category")
            
            if get_applicable(game, current_game):
                ability_index = get_abilityIndex(ability, current_game)
                
                if ability_index in Data["Abilities"]:
                    Data["Abilities"][ability_index] = {
                        **Data["Abilities"][ability_index],
                        **({"Category": category} if category is not None else {})
                    }

        # Abilities - Affect
        for entry in finaldata["Abilities"]["Affect"]:
            game = entry.get("Game")
            ability = entry.get("Ability")
            _name = entry.get("Name")
            _type = entry.get("Type")
            _boolean = entry.get("Boolean")
            _extra = entry.get("Extra")
            
            if get_applicable(game, current_game):
                ability_index = get_abilityIndex(ability, current_game)
                
                if ability_index in Data["Abilities"]:
                    affect_entry = {
                        **({"Name": _name} if _name is not None else {}),
                        **({"Type": _type} if _type is not None else {}),
                        **({"Boolean": _boolean} if _boolean is not None else {}),
                        **({"Extra": _extra} if _extra is not None else {})
                    }
                    Data["Abilities"][ability_index]["Affect"] = Data["Abilities"][ability_index].get("Affect", []) + [affect_entry]

        # Abilities - Pickup
        for entry in finaldata["Abilities"]["Pickup"]:
            game = entry.get("Game")
            item = entry.get("Item")
            index = entry.get("Index")
            level = entry.get("Level")
            area = entry.get("Area")
            title = entry.get("Title")
            header = entry.get("Header")
            rate = entry.get("Rate")
            location = entry.get("Location")
            
            if get_applicable(game, current_game):
                item_index = index if index else get_itemIndex(item, current_game)
                ability_index = get_abilityIndex("Pickup", current_game)
                
                if item_index in Data["Items"] and ability_index in Data["Abilities"]:
                    item_entry = {
                        **({"Location": location} if location is not None else {}),
                        **({"Area": area} if area is not None else {}),
                        **({"Header": header} if header is not None else {}),
                        **({"Title": title} if title is not None else {}),
                        **({"Item": item} if item is not None else {}),
                        **({"Level": parse_levels(level)} if level is not None else {}),
                        **({"Rate": rate} if rate is not None else {})
                    }
                    Data["Abilities"][ability_index]["Item"] = Data["Abilities"][ability_index].get("Item", []) + [item_entry]

    # Moves
    Data["Moves"] = {}

    # Moves - Overview
    for entry in finaldata["Moves"]["Overview"]:
        game = entry.get("Game")
        move = entry.get("Move")
        active = entry.get("Active")

        if active and get_applicable(game, current_game):
            Data["Moves"][move] = {"Move": [move]}

    # Moves - Alternate Name
    for entry in finaldata["Moves"]["Alternate Name"]:
        game = entry.get("Game")
        move = entry.get("Move")
        alternate = entry.get("Alternate Name")
        
        if get_applicable(game, current_game):
            if move in Data["Moves"]:
                Data["Moves"][move]["Move"].extend([alternate] if alternate else [])

    # Moves - Group
    for entry in finaldata["Moves"]["Group"]:
        game = entry.get("Game")
        move = entry.get("Move")
        group = entry.get("Group")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Group"] = group

    # Moves - Description
    for entry in finaldata["Moves"]["Description"]:
        game = entry.get("Game")
        move = entry.get("Move")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Description"] = description

    # Moves - Contest
    for entry in finaldata["Moves"]["Contest"]:
        game = entry.get("Game")
        move = entry.get("Move")
        condition = entry.get("Condition")
        appeal = entry.get("Appeal")
        jam = entry.get("Jam")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Contest"] = {
                    "Condition": condition,
                    "Appeal": appeal,
                    "Jam": jam,
                    "Description": description
                }

    # Moves - Super Contest
    for entry in finaldata["Moves"]["Super Contest"]:
        game = entry.get("Game")
        move = entry.get("Move")
        condition = entry.get("Condition")
        appeal = entry.get("Appeal")
        jam = entry.get("Jam")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Super Contest"] = {
                    "Condition": condition,
                    "Appeal": appeal,
                    "Jam": jam,
                    "Description": description
                }

    # Moves - Contest Spectacular
    for entry in finaldata["Moves"]["Contest Spectacular"]:
        game = entry.get("Game")
        move = entry.get("Move")
        condition = entry.get("Condition")
        appeal = entry.get("Appeal")
        jam = entry.get("Jam")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Contest Spectacular"] = {
                    "Condition": condition,
                    "Appeal": appeal,
                    "Jam": jam,
                    "Description": description
                }

    # Moves - Machine
    for entry in finaldata["Moves"]["Machine"]:
        game = entry.get("Game")
        move = entry.get("Move")
        machine = entry.get("Machine")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Machine"] = machine

    # Moves - Range
    for entry in finaldata["Moves"]["Range"]:
        game = entry.get("Game")
        move = entry.get("Move")
        range_ = entry.get("Range")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Range"] = range_

    # Moves - Affect
    for entry in finaldata["Moves"]["Affect"]:
        game = entry.get("Game")
        move = entry.get("Move")
        contact = entry.get("Contact")
        protect = entry.get("Protect")
        magic_coat = entry.get("Magic Coat")
        magic_bounce = entry.get("Magic Bounce")
        snatch = entry.get("Snatch")
        mirror_move = entry.get("Mirror Move")
        kings_rock = entry.get("King's Rock")
        sound_based = entry.get("Sound-Based")
        outside_battle = entry.get("Outside Battle")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index].update({
                    "Contact": contact,
                    "Protect": protect,
                    "Magic Coat": magic_coat,
                    "Magic Bounce": magic_bounce,
                    "Snatch": snatch,
                    "Mirror Move": mirror_move,
                    "King's Rock": kings_rock,
                    "Sound-Based": sound_based,
                    "Outside Battle": outside_battle
                })

    # Moves - Accuracy
    for entry in finaldata["Moves"]["Accuracy"]:
        game = entry.get("Game")
        move = entry.get("Move")
        accuracy = entry.get("Accuracy")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Accuracy"] = accuracy

    # Moves - Power
    for entry in finaldata["Moves"]["Power"]:
        game = entry.get("Game")
        move = entry.get("Move")
        power = entry.get("Power")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Power"] = power

    # Moves - PP
    for entry in finaldata["Moves"]["PP"]:
        game = entry.get("Game")
        move = entry.get("Move")
        min_ = entry.get("Min")
        max_ = entry.get("Max")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["PP"] = {
                    "Min": min_,
                    "Max": max_
                }

    # Moves - Category
    for entry in finaldata["Moves"]["Category"]:
        game = entry.get("Game")
        move = entry.get("Move")
        category = entry.get("Category")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Category"] = category

    # Moves - ID
    for entry in finaldata["Moves"]["ID"]:
        game = entry.get("Game")
        move = entry.get("Move")
        id_ = entry.get("ID")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["ID"] = id_

    # Moves - Type
    for entry in finaldata["Moves"]["Type"]:
        game = entry.get("Game")
        move = entry.get("Move")
        type_ = entry.get("Type")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Type"] = type_

    # Moves - Priority
    for entry in finaldata["Moves"]["Priority"]:
        game = entry.get("Game")
        move = entry.get("Move")
        priority = entry.get("Priority")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index]["Priority"] = priority

    # Moves - Effect
    for entry in finaldata["Moves"]["Effect"]:
        game = entry.get("Game")
        move = entry.get("Move")
        effect = entry.get("Effect")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                if "Effect" not in Data["Moves"][move_index]:
                    Data["Moves"][move_index]["Effect"] = []
                Data["Moves"][move_index]["Effect"].append({"Effect": effect})

    # Moves - Call
    for entry in finaldata["Moves"]["Call"]:
        game = entry.get("Game")
        move = entry.get("Move")
        call = entry.get("Call")
        pokemon = entry.get("Pokemon")
        item = entry.get("Item")
        type_ = entry.get("Type")
        
        if get_applicable(game, current_game):
            move_index = get_moveIndex(move,current_game)
            if move_index in Data["Moves"]:
                Data["Moves"][move_index].update({
                    "Call": call,
                    "Pokemon": pokemon,
                    "Item": item,
                    "Type": type_
                })
    
    # Locations
    Data["Locations"] = {}

    # Locations - Overview
    for entry in finaldata["Locations"]["Overview"]:
        game = entry.get("Game")
        location = entry.get("Location")

        if get_applicable(game, current_game):
            Data["Locations"][location] = {"Location": [location]}

    # Locations - Connection
    for entry in finaldata["Locations"]["Connection"]:
        game = entry.get("Game")
        location = entry.get("Location")
        west = entry.get("West")
        north = entry.get("North")
        east = entry.get("East")
        south = entry.get("South")
        located = entry.get("Located")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Connection"] = {
                    **(Data["Locations"][location_index].get("Connection", {})),
                    **({"West": re.split('|'.join(map(re.escape, [","])), west)} if west else {}),
                    **({"North": re.split('|'.join(map(re.escape, [","])), north)} if north else {}),
                    **({"East": re.split('|'.join(map(re.escape, [","])), east)} if east else {}),
                    **({"South": re.split('|'.join(map(re.escape, [","])), south)} if south else {}),
                    **({"Located": re.split('|'.join(map(re.escape, [","])), located)} if located else {}),
                }

    # Locations - Navigation
    for entry in finaldata["Locations"]["Navigation"]:
        game = entry.get("Game")
        location = entry.get("Location")
        navigation = entry.get("Navigation")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Navigation"] = parse_conjunctionSplit(navigation) if navigation else []

    # Locations - Description
    for entry in finaldata["Locations"]["Description"]:
        game = entry.get("Game")
        location = entry.get("Location")
        area = entry.get("Area")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Description"] = {
                    **({"Area": area} if area else {}),
                    **({"Text": description} if description else {}),
                }

    # Locations - Slogan
    for entry in finaldata["Locations"]["Slogan"]:
        game = entry.get("Game")
        location = entry.get("Location")
        slogan = entry.get("Slogan")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Slogan"] = slogan

    # Locations - Move Tutor
    for entry in finaldata["Locations"]["Move Tutor"]:
        game = entry.get("Game")
        location = entry.get("Location")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        move = entry.get("Move")
        criteria = entry.get("Criteria")
        note = entry.get("Note")
        character = entry.get("Character")
        cost = entry.get("Cost")
        currency = entry.get("Currency")
        pokemon = entry.get("Pokemon")
        rate = entry.get("Rate")
        field = entry.get("Field")
        weather = entry.get("Weather")
        season = entry.get("Season")
        day = entry.get("Day")
        time = entry.get("Time")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                cost_list = []
                if cost and currency:

                    costs = [int(v.strip()) for v in re.split(r'[,]+', str(cost))]
                    currencies = [v.strip() for v in re.split(r'[,]+', str(currency))]

                    max_length = max(len(costs), len(currencies))
                    cost_list = [{"Cost": costs[i] if i < len(costs) else 0, "Currency": currencies[i] if i < len(currencies) else ""} for i in range(max_length)]
                
                Data["Locations"][location_index]["Move Tutor"] = Data["Locations"][location_index].get("Move Tutor", []) + [{
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Move": move} if move else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Note": note} if note else {}),
                    **({"Character": character} if character else {}),
                    **({"Cost": cost_list} if cost_list else {}),
                    **({"Pokemon": parse_conjunctionSplit(pokemon)} if pokemon else {}),
                    **({"Rate": rate} if rate else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Weather": parse_conjunctionSplit(weather)} if weather else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                }]

    # Locations - Point of Interest
    for entry in finaldata["Locations"]["Point of Interest"]:
        game = entry.get("Game")
        location = entry.get("Location")
        point = entry.get("Point")
        located = entry.get("Located")
        description = entry.get("Description")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Point of Interest"] = Data["Locations"][location_index].get("Point of Interest", []) + [{
                    **({"Point": point} if point else {}),
                    **({"Located": located} if located else {}),
                    **({"Description": description} if description else {}),
                }]


    # Location Trainers - Trainers
    for entry in finaldata["Location Trainers"]["Trainers"]:
        game = entry.get("Game")
        index = entry.get("Index")
        location = entry.get("Location")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        season = entry.get("Season")
        day = entry.get("Day")
        time = entry.get("Time")
        field = entry.get("Field")
        trainer_class = entry.get("Class")
        trainer = entry.get("Trainer")
        gender = entry.get("Gender")
        image = entry.get("Image")
        battle_type = entry.get("Battle Type")
        note = entry.get("Note")
        item = entry.get("Item")
        item_quantity = entry.get("Item Quantity")
        reward = entry.get("Reward")
        reward_quantity = entry.get("Reward Quantity")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Trainer"] = Data["Locations"][location_index].get("Trainer", []) + [{
                    **({"Index": index} if index else {}),
                    **({"Trainer": trainer} if trainer else {}),
                    **({"Class": trainer_class} if trainer_class else {}),
                    **({"Gender": gender} if gender else {}),
                    **({"Battle Type": battle_type} if battle_type else {}),
                    **({"Title": title} if title else {}),
                    **({"Area": area} if area else {}),
                    **({"Header": header} if header else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Image": image} if image else {}),
                    **({"Note": note} if note else {}),
                    **({"Item": {"Item": item, "Quantity": item_quantity}} if item else {}),
                    **({"Reward": {"Reward": reward, "Quantity": reward_quantity}} if reward else {}),
                }]

    # Location Trainers - Pokemon
    for entry in finaldata["Location Trainers"]["Pokemon"]:
        game = entry.get("Game")
        trainer = entry.get("Trainer")
        location = entry.get("Location")
        pokemon = entry.get("Pokemon")
        header = entry.get("Header")
        gender = entry.get("Gender")
        level = entry.get("Level")
        ability = entry.get("Ability")
        move = entry.get("Move")
        iv = entry.get("IV")
        ev = entry.get("EV")
        item = entry.get("Item")
        nature = entry.get("Nature")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                trainers = Data["Locations"][location_index].get("Trainer", [])
                trainer_index = next((i for i, t in enumerate(trainers) if t.get("Index") == trainer), -1)
                if trainer_index != -1:
                    trainers[trainer_index]["Pokemon"] = trainers[trainer_index].get("Pokemon", []) + [{
                        **({"Pokemon": pokemon} if pokemon else {}),
                        **({"Header": header} if header else {}),
                        **({"Gender": gender} if gender else {}),
                        **({"Level": level} if level else {}),
                        **({"Ability": ability.split("/") if ability else []}),
                        **({"Move": move.split(",") if move else []}),
                        **({"IV": format_V(iv)} if iv else {}),
                        **({"EV": format_V(ev)} if ev else {}),
                        **({"Item": item} if item else {}),
                        **({"Nature": nature} if nature else {}),
                    }]
                else:
                    print("Did not find the correct Trainer.")
                Data["Locations"][location_index]["Trainer"] = trainers

    # Location Items - Items
    for entry in finaldata["Location Items"]["Items"]:
        game = entry.get("Game")
        location = entry.get("Location")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        image = entry.get("Image")
        item = entry.get("Item")
        index = entry.get("Index")
        quantity = entry.get("Quantity", 1)
        description = entry.get("Description")
        season = entry.get("Season")
        day = entry.get("Day")
        time = entry.get("Time")
        field = entry.get("Field")
        hidden = entry.get("Hidden")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item,current_game)
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Item"] = Data["Locations"][location_index].get("Item", []) + [{
                    **({"Item": item} if item else {}),
                    "Quantity": quantity,
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Description": description} if description else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Hidden": hidden} if hidden else {}),
                    **({"Image": image} if image else {}),
                    **({"Index": index} if index else {}),
                }]
                if item_index is not None:
                    Data["Items"][item_index]["Location"] = Data["Items"][item_index].get("Location", []) + [{
                        **({"Location": location} if location else {}),
                        "Quantity": quantity,
                        **({"Area": area} if area else {}),
                        **({"Title": title} if title else {}),
                        **({"Header": header} if header else {}),
                        **({"Description": description} if description else {}),
                        **({"Field": parse_conjunctionSplit(field)} if field else {}),
                        **({"Season": parse_conjunctionSplit(season)} if season else {}),
                        **({"Day": parse_conjunctionSplit(day)} if day else {}),
                        **({"Time": parse_conjunctionSplit(time)} if time else {}),
                        **({"Hidden": hidden} if hidden else {}),
                        **({"Image": image} if image else {}),
                    }]

    # Location Items - Currency
    for entry in finaldata["Location Items"]["Currency"]:
        game = entry.get("Game")
        location = entry.get("Location")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        image = entry.get("Image")
        currency = entry.get("Currency")
        quantity = entry.get("Quantity", 1)
        description = entry.get("Description")
        season = entry.get("Season")
        day = entry.get("Day")
        time = entry.get("Time")
        field = entry.get("Field")
        hidden = entry.get("Hidden")
        
        if get_applicable(game, current_game):
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Currency"] = Data["Locations"][location_index].get("Currency", []) + [{
                    **({"Currency": currency} if currency else {}),
                    "Quantity": quantity,
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Description": description} if description else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Hidden": hidden} if hidden else {}),
                    **({"Image": image} if image else {}),
                }]

    # Location Items - Shop
    for entry in finaldata["Location Items"]["Shop"]:
        game = entry.get("Game")
        location = entry.get("Location")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        shop = entry.get("Shop")
        note = entry.get("Note")
        criteria = entry.get("Criteria")
        item = entry.get("Item")
        index = entry.get("Index")
        cost = entry.get("Cost")
        quantity = entry.get("Quantity", 1)
        currency = entry.get("Currency")
        season = entry.get("Season")
        day = entry.get("Day")
        time = entry.get("Time")
        field = entry.get("Field")
        
        if get_applicable(game, current_game):
            item_index = index if index else get_itemIndex(item,current_game)
            location_index = get_locationIndex(location,current_game)
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Shop"] = Data["Locations"][location_index].get("Shop", []) + [{
                    **({"Item": item} if item else {}),
                    "Quantity": quantity,
                    **({"Shop": shop} if shop else {}),
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Note": note} if note else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Cost": cost} if cost else {}),
                    **({"Currency": currency} if currency else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                }]
                if item_index is not None:
                    Data["Items"][item_index]["Shop"] = Data["Items"][item_index].get("Shop", []) + [{
                        **({"Location": location} if location else {}),
                        "Quantity": quantity,
                        **({"Shop": shop} if shop else {}),
                        **({"Area": area} if area else {}),
                        **({"Title": title} if title else {}),
                        **({"Header": header} if header else {}),
                        **({"Note": note} if note else {}),
                        **({"Criteria": criteria} if criteria else {}),
                        **({"Cost": cost} if cost else {}),
                        **({"Currency": currency} if currency else {}),
                        **({"Season": parse_conjunctionSplit(season)} if season else {}),
                        **({"Day": parse_conjunctionSplit(day)} if day else {}),
                        **({"Time": parse_conjunctionSplit(time)} if time else {}),
                        **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    }]
    
    # Location Pokemon - Pokemon
    for entry in finaldata["Location Pokemon"]["Pokemon"]:
        game = entry.get("Game")
        location = entry.get("Location")
        pokemon = entry.get("Pokemon")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        note = entry.get("Note")
        criteria = entry.get("Criteria")
        field = entry.get("Field")
        allies = entry.get("Allies")
        held = entry.get("Held")
        move = entry.get("Move")
        tile = entry.get("Tile")
        encounter = entry.get("Encounter")
        level = entry.get("Level")
        item = entry.get("Item")
        weather = entry.get("Weather")
        day = entry.get("Day")
        season = entry.get("Season")
        time = entry.get("Time")
        rate = entry.get("Rate")
        shiny_rate = entry.get("Shiny Rate")
        catch_rate = entry.get("Catch Rate")
        gender = entry.get("Gender")
        ability = entry.get("Ability")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            location_index = get_locationIndex(location,current_game)
            
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Pokemon"] = Data["Locations"][location_index].get("Pokemon", []) + [{
                    **({"Pokemon": pokemon} if pokemon else {}),
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Note": note} if note else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Held": held} if held else {}),
                    **({"Allies": allies.split(",")} if allies else {}),
                    **({"Tile": parse_conjunctionSplit(tile)} if tile else {}),
                    **({"Encounter": encounter} if encounter else {}),
                    **({"Level": parse_levels(level)} if level else {}),
                    **({"Item": parse_conjunctionSplit(item)} if item else {}),
                    **({"Move": parse_conjunctionSplit(move)} if move else {}),
                    **({"Weather": parse_conjunctionSplit(weather)} if weather else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Rate": rate} if rate else {}),
                    **({"Shiny Rate": shiny_rate} if shiny_rate else {}),
                    **({"Catch Rate": catch_rate} if catch_rate else {}),
                    **({"Gender": gender} if gender else {}),
                    **({"Ability": ability} if ability else {}),
                }]
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Location"] = Data["Pokemon"][pokemon_index].get("Location", []) + [{
                    **({"Location": location} if location else {}),
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Note": note} if note else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Field": parse_conjunctionSplit(field)} if field else {}),
                    **({"Held": held} if held else {}),
                    **({"Allies": parse_conjunctionSplit(allies)} if allies else {}),
                    **({"Tile": parse_conjunctionSplit(tile)} if tile else {}),
                    **({"Encounter": encounter} if encounter else {}),
                    **({"Level": parse_levels(level)} if level else {}),
                    **({"Item": parse_conjunctionSplit(item)} if item else {}),
                    **({"Weather": parse_conjunctionSplit(weather)} if weather else {}),
                    **({"Day": parse_conjunctionSplit(day)} if day else {}),
                    **({"Season": parse_conjunctionSplit(season)} if season else {}),
                    **({"Time": parse_conjunctionSplit(time)} if time else {}),
                    **({"Rate": rate} if rate else {}),
                    **({"Shiny Rate": shiny_rate} if shiny_rate else {}),
                    **({"Catch Rate": catch_rate} if catch_rate else {}),
                    **({"Gender": gender} if gender else {}),
                    **({"Ability": ability} if ability else {}),
                }]

    # Location Pokemon - Shop
    for entry in finaldata["Location Pokemon"]["Shop"]:
        game = entry.get("Game")
        location = entry.get("Location")
        shop = entry.get("Shop")
        area = entry.get("Area")
        title = entry.get("Title")
        header = entry.get("Header")
        note = entry.get("Note")
        criteria = entry.get("Criteria")
        pokemon = entry.get("Pokemon")
        level = entry.get("Level")
        cost = entry.get("Cost")
        currency = entry.get("Currency")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            location_index = get_locationIndex(location,current_game)
            
            if location_index in Data["Locations"]:
                Data["Locations"][location_index]["Shop"] = Data["Locations"][location_index].get("Shop", []) + [{
                    **({"Shop": shop} if shop else {}),
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Note": note} if note else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Pokemon": pokemon} if pokemon else {}),
                    **({"Level": parse_levels(level)} if level else {}),
                    **({"Cost": cost} if cost else {}),
                    **({"Currency": parse_conjunctionSplit(currency)} if currency else {}),
                }]
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Shop"] = Data["Pokemon"][pokemon_index].get("Shop", []) + [{
                    **({"Location": location} if location else {}),
                    **({"Shop": shop} if shop else {}),
                    **({"Area": area} if area else {}),
                    **({"Title": title} if title else {}),
                    **({"Header": header} if header else {}),
                    **({"Note": note} if note else {}),
                    **({"Criteria": criteria} if criteria else {}),
                    **({"Level": parse_levels(level)} if level else {}),
                    **({"Cost": cost} if cost else {}),
                    **({"Currency": parse_conjunctionSplit(currency)} if currency else {}),
                }]


    # Pokemon Learnset - Evolution
    for entry in finaldata["Pokemon Learnset"]["Evolution"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        move = entry.get("Move")
        evolution = entry.get("Evolution")
        extra = entry.get("Extra")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Learnset"] = Data["Pokemon"][pokemon_index].get("Learnset", []) + [{
                    "Type": "Evolution",
                    **({"Move": move} if move else {}),
                    **({"Evolution": evolution.split(",")} if evolution else {}),
                    **({"Extra": extra} if extra else {}),
                }]

    # Pokemon Learnset - Level Up
    for entry in finaldata["Pokemon Learnset"]["Level Up"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        move = entry.get("Move")
        factor = entry.get("Factor")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Learnset"] = Data["Pokemon"][pokemon_index].get("Learnset", []) + [{
                    "Type": "Level Up",
                    **({"Move": move} if move else {}),
                    **({"Factor": factor} if factor else {}),
                }]

    # Pokemon Learnset - Machine
    for entry in finaldata["Pokemon Learnset"]["Machine"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        move = entry.get("Move")
        machine = entry.get("Machine")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Learnset"] = Data["Pokemon"][pokemon_index].get("Learnset", []) + [{
                    "Type": "Machine",
                    **({"Move": move} if move else {}),
                    **({"Machine": machine} if machine else {}),
                }]

    # Pokemon Learnset - Breeding
    for entry in finaldata["Pokemon Learnset"]["Breeding"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        move = entry.get("Move")
        parent = entry.get("Parent")
        item = entry.get("Item")
        extra = entry.get("Extra")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Learnset"] = Data["Pokemon"][pokemon_index].get("Learnset", []) + [{
                    "Type": "Breeding",
                    **({"Move": move} if move else {}),
                    **({"Parent": parent.split(",")} if parent else {}),
                    **({"Item": item} if item else {}),
                    **({"Extra": extra} if extra else {}),
                }]

    # Pokemon Learnset - Tutor
    for entry in finaldata["Pokemon Learnset"]["Tutor"]:
        game = entry.get("Game")
        pokemon = entry.get("Pokemon")
        move = entry.get("Move")
        
        if get_applicable(game, current_game):
            pokemon_index = get_pokemonIndex(pokemon,current_game)
            location = next((loc for loc in Data["Locations"] if any(tutor.get("Move") == move for tutor in Data["Locations"][loc].get("Move Tutor", []))), None)
            
            if pokemon_index in Data["Pokemon"]:
                Data["Pokemon"][pokemon_index]["Learnset"] = Data["Pokemon"][pokemon_index].get("Learnset", []) + [{
                    "Type": "Tutor",
                    **({"Move": move} if move else {}),
                    **({"Location": location} if location else {}),
                }]


def format_duration(seconds):
    hours, remainder = divmod(seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    
    if hours > 0:
        return f"{int(hours)}:{int(minutes):02}:{seconds:05.2f}"
    elif minutes > 0:
        return f"{int(minutes)}:{seconds:05.2f}"
    else:
        return f"{seconds:05.2f}"

def data_convert(game):
    global finaldata
    global Data
    finaldata = copy.deepcopy(data_import)
    Data = {}
    data_filter(game)
    data_update(game)

for game in Games.keys():
    #break

    iteration_start_time = time.time()
    print("Formatting: "+game)

    data_convert(game)

    output_file = '../data/'+game+'_data.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('const json_data = ')
        json.dump(Data, f, separators=(',', ':'), ensure_ascii=False)
        f.write(';')

    iteration_end_time = time.time()
    iteration_duration = iteration_end_time - iteration_start_time
    print(f"Elapsed time: {format_duration(iteration_duration)}")

    #break

# End the timer for the entire script
end_time = time.time()
total_duration = end_time - start_time
print(f"Total duration: {format_duration(total_duration)}")