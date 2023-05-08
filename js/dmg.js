




function DMGCalcStart() {


	DMGSetPossible();




    // Paths //
	var user = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div.user");
	var userID = user.getAttribute("name");
	var userTeam = user.parentElement.getAttribute("name");


	// Path Scopes
    var allPokBase = document.querySelectorAll("#contain > div#tool div#dmg > div span[name] ul[name]");
	var allDivBase = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div[name]");
    
    let userDivBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+userTeam+"'] > div[name='"+userID+"']");
    let userPokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+userTeam+"'] > ul[name='"+userID+"']");
    let userTeamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+userTeam+"']");
    let userStatsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+userTeam+"'] > ul[name='"+userID+"']");
    let userPartyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+userTeam+"']")

    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");
	let menuBase = document.querySelector("#contain > div#tool div#dmg div[name='menu']");
	let specBase = document.querySelector("#contain div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child");


    // Battle
	var battleSelect = document.querySelector("#contain div#tool div#dmg div[name='options'] > div[name='header'] > span:first-child > select");
    let battleSizes = battleSelect.getAttribute("pokémon");
    battleSizes = undDel(battleSizes,"")
    battleSizes = splitStr(battleSizes,",")
    let battleSize = 0;

    for (var u = 0; u < battleSizes.length; u++) {
        battleSize = battleSize+parseInt(battleSizes[u]);
    }

    // User Div
    var userMaxHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='max']");
	var userCurrentHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='current']");
	var userPercentageHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='percentage']");
	var userStabPath = userDivBase.querySelector(":scope *[name='stab']");

    // User Stats
    var userModAccuracyPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Accuracy']");
	var userModEvasionPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Evasion']");
	var userModCriticalPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Critical']");
	var userModPath = userStatsBase.querySelectorAll(":scope span[name='Mod'] input:not(:first-child)");
	var userStatsPath = userStatsBase.querySelectorAll(":scope span:last-child input:not(:first-child)");
	var userSpeedStatPath = userStatsBase.querySelector(":scope span:last-child input[name='Speed']");

	// User Pokémon
	var userPokémonPath = userPokBase.querySelector(":scope *[name='pokémon'] select");
	var userLevelPath = userPokBase.querySelector(":scope *[name='level'] input");
	var userItemPath = userPokBase.querySelector(":scope *[name='item'] select");
	var userItemCountPath = userPokBase.querySelector(":scope *[name='item'] input[type='number']");
	var userFriendshipPath = userPokBase.querySelector(":scope *[name='friendship'] input");
	var userAffectionPath = userPokBase.querySelector(":scope *[name='affection'] input");
	var userAbilityPath = userPokBase.querySelector(":scope *[name='ability'] select");
	var userHPInputPath = userPokBase.querySelector(":scope *[name='hp'] > input");
	var userStatusPoisonPath = userPokBase.querySelector(":scope *[name='Poisoned'] input");
	var userStatusBadPoisonPath = userPokBase.querySelector(":scope *[name='Badly Poisoned'] input");
	var userStatusBurnPath = userPokBase.querySelector(":scope *[name='Burned'] input");
	var userStatusParalyzePath = userPokBase.querySelector(":scope *[name='Paralyzed'] input");
	var userStatusAsleepPath = userPokBase.querySelector(":scope *[name='Asleep'] input");
	var userStatusFrozenPath = userPokBase.querySelector(":scope *[name='Frozen'] input");
	var userThousandArrowsPath = userPokBase.querySelector(":scope *[name='Thousand Arrows'] input");
	var userSmackDownPath = userPokBase.querySelector(":scope *[name='Smack Down'] input");
	var userMagnetRisePath = userPokBase.querySelector(":scope *[name='Magnet Rise'] input");
	var userIngrainPath = userPokBase.querySelector(":scope *[name='Ingrain'] input");
	var userTelekinesisPath = userPokBase.querySelector(":scope *[name='Telekinesis'] input");
	var userDireHitPath = userPokBase.querySelector(":scope *[name='Dire Hit'] input");
	var userFocusEnergyPath = userPokBase.querySelector(":scope *[name='Focus Energy'] input");
    var userTypesPath = userPokBase.querySelectorAll(":scope *[name='type'] select");


    // User Team
	var userBadgePath = userTeamBase.querySelectorAll(":scope *[name='Badge-Group'] input");


	// Field
	var weatherPath = fieldBase.querySelector(":scope *[name='Weather-Group']");
	var weatherInputsPath = fieldBase.querySelectorAll(":scope *[name='Weather-Group'] input");
	var weatherHarshSunlightPath = weatherPath.querySelector(":scope *[name='Harsh Sunlight'] input");
	var weatherRainPath = weatherPath.querySelector(":scope *[name='Rain'] input");
	var weatherSandstormPath = weatherPath.querySelector(":scope *[name='Sandstorm'] input");
	var weatherSnowPath = weatherPath.querySelector(":scope *[name='Snow'] input");
	var weatherFogPath = weatherPath.querySelector(":scope *[name='Fog'] input");
	var weatherHailPath = weatherPath.querySelector(":scope *[name='Hail'] input");
	var weatherExtremelyHarshSunlightPath = weatherPath.querySelector(":scope *[name='Extremely Harsh Sunlight'] input");
	var weatherHeavyRainPath = weatherPath.querySelector(":scope *[name='Heavy Rain'] input");
	var weatherStrongWindsPath = weatherPath.querySelector(":scope *[name='Strong Winds'] input");
	var weatherShadowyAuraPath = weatherPath.querySelector(":scope *[name='Shadowy Aura'] input");
	var TerrainElectricPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Electric Terrain'] input");
	var TerrainGrassyPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Grassy Terrain'] input");
	var TerrainMistyPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Misty Terrain'] input");
	var TerrainPsychicPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Psychic Terrain'] input");
	var gravityPath = fieldBase.querySelector(":scope *[name='Gravity'] input");
	var wonderRoomPath = fieldBase.querySelector(":scope *[name='Wonder Room'] input");
	var magicRoomPath = fieldBase.querySelector(":scope *[name='Magic Room'] input");

	// Specific
	var ZMovePath = specBase.querySelector(":scope li[name='Z-Move'] input");
	var MaxMovePath = specBase.querySelector(":scope li[name='Max Move'] input");
	var MeFirstPath = specBase.querySelector(":scope li[name='Me First'] input");
	var ChargePath = specBase.querySelector(":scope li[name='Charge'] input");
	var ProtectionPath = specBase.querySelector(":scope li[name='Protection'] input");
	var InvunerableDivePath = specBase.querySelector(":scope li[name='Semi-Invulnerable Dive'] input");
	var InvunerableFlightPath = specBase.querySelector(":scope li[name='Semi-Invulnerable Flight'] input");
	var InvunerableDigPath = specBase.querySelector(":scope li[name='Semi-Invulnerable Dig'] input");
	var SwitchPath = specBase.querySelector(":scope li[name='Switching'] input");
	var MinimizePath = specBase.querySelector(":scope li[name='Minimize'] input");
	var DefenseCurlPath = specBase.querySelector(":scope li[name='Defense Curl'] input");
	var ConfusionPath = specBase.querySelector(":scope li[name='Confusion'] input");
	var FlashFirePath = specBase.querySelector(":scope li[name='Flash Fire'] input");
	var TarShotPath = specBase.querySelector(":scope li[name='Tar Shot'] input");
	var HelpingHandPath = specBase.querySelector(":scope li[name='Helping Hand'] input");


	// Move
	var movePath = menuBase.querySelector(":scope > div[name='move'] > span select");
	var moveCountPath = menuBase.querySelector(":scope > div[name='spec'] input[type='number']");
	var moveSelectPath = menuBase.querySelector(":scope > div[name='spec'] > span:first-child > input[type='number']");
	var criticalPath = menuBase.querySelector(":scope *[name='critical'] input[type='checkbox']")
	var randomPath = menuBase.querySelector(":scope > div > span > input[type='range']");

	var moveDamageTextPath = menuBase.querySelector(":scope *[name='damage'] > *:last-child");
	var moveAccuracyTextPath = menuBase.querySelector(":scope *[name='accuracy'] > *:last-child");
	var moveCriticalTextPath = menuBase.querySelector(":scope *[name='critical'] > *:last-child");



	// Values //

	// HP
	var userMaxHP = parseInt(userMaxHPPath.innerText);
	var userCurrHP = parseInt(userCurrentHPPath.innerText);
	userMaxHP = undwsnanDel(userMaxHP,0);
	userCurrHP = undwsnanDel(userCurrHP,0);

	// Move
	var movePower = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,movePath.value);
	var moveAccuracy = returnArrValue(finaldataMoveAccuracy,"Name_"+JSONPath_MoveName,"Accuracy_"+JSONPath_MoveAccuracy,movePath.value);
	var moveCategory = returnArrValue(finaldataMoveCategory,"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,movePath.value);
	var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movePath.value);
	var movePriority = returnArrValue(finaldataMovePriority,"Name_"+JSONPath_MoveName,"Priority_"+JSONPath_MovePriority,movePath.value);
	var moveGroup = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",movePath.value);
	var moveRange = returnArrValue(finaldataMoveRange,"Name_"+JSONPath_MoveName,"Range",movePath.value);
	movePower = undwsDel(movePower,0);
	moveAccuracy = undwsDel(moveAccuracy,0);
	moveCategory = undwsDel(moveCategory,"");
	moveType = undwsDel(moveType,"");
	movePriority = undwsDel(movePriority,0);

	// Types
	var userTypes = [];
	for (var t = 0; t < userTypesPath.length; t++) {
		userTypes.push(userTypesPath[t].value);
	}

	// Target
	var target = [];
	if (moveRange.includes("Affects")) {
		target = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div.viable")
	}
	else {
		target = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div.target.viable")
	}




	if (ZMovePath != undefined && ZMovePath.checked) {
		var check1 = false;
		var check2 = false;
		var check3 = false;
	
		for (var r = 0; r < finaldataMoveCall.length; r++) {
			if (finaldataMoveCall[r]["Call"] == movePath.value) {
				if (finaldataMoveCall[r]["Type"] == "Z-Move") {
					if (finaldataMoveCall[r]["Pokémon"] != undefined) {
						if (finaldataMoveCall[r]["Pokémon"].includes(",")) {
							var vals = finaldataMoveCall[r]["Pokémon"].split(",");
							for (var u = 0; u < vals.length; u++) {
								if (vals[u] == userPokémonPath.value) {
									check1 = true;
								}
							}
						}
						else {
							if (finaldataMoveCall[r]["Pokémon"] == userPokémonPath.value) {
								check1 = true;
							}
						}
					}
					if (finaldataMoveCall[r]["Item"] != undefined) {
						if (finaldataMoveCall[r]["Item"] == userItemPath.value) {
							check2 = true;
						}
					}
				}
			}
		}

		if (userItemPath.value.includes(" Z") && userItemPath.value.includes(moveType.replace(/.$/, ''))) {
			check3 = true;
		}

		if (check1 && check2) {
			if (userItemPath.value == "Pikanium Z") {
				movePower = 210;
			}
			else if (userItemPath.value == "Pikashunium Z") {
				movePower = 195;
			}
			else if (userItemPath.value == "Aloraichium Z") {
				movePower = 175;
			}		
			else if (userItemPath.value == "Snorlium Z") {
				movePower = 210;
			}
			else if (userItemPath.value == "Mewnium Z") {
				movePower = 185;
			}
			else if (userItemPath.value == "Decidium Z") {
				movePower = 180;
			}
			else if (userItemPath.value == "Incinium Z") {
				movePower = 180;
			}
			else if (userItemPath.value == "Primarium Z") {
				movePower = 195;
			}
			else if (userItemPath.value == "Lycanium Z") {
				movePower = 190;
			}
			else if (userItemPath.value == "Mimikium Z") {
				movePower = 190;
			}
			else if (userItemPath.value == "Kommonium Z") {
				movePower = 185;
			}
			else if (userItemPath.value == "Solganium Z") {
				movePower = 200;
			}
			else if (userItemPath.value == "Lunalium Z") {
				movePower = 200;
			}
			else if (userItemPath.value == "Ultranecrozium Z") {
				movePower = 200;
			}
			else if (userItemPath.value == "Marshadium Z") {
				movePower = 195;
			}

		}
		else if (check3) {
			if (movePower >= 0 && movePower <= 55) {
				movePower = 100;
			}
			else if (movePower >= 60 && movePower <= 65) {
				movePower = 120;
			}
			else if (movePower >= 70 && movePower <= 75) {
				movePower = 140;
			}
			else if (movePower >= 80 && movePower <= 85) {
				movePower = 100;
			}
			else if (movePower >= 90 && movePower <= 95) {
				movePower = 100;
			}
			else if (movePower == 100) {
				movePower = 100;
			}
			else if (movePower == 110) {
				movePower = 100;
			}
			else if (movePower >= 120 && movePower <= 125) {
				movePower = 100;
			}
			else if (movePower == 130) {
				movePower = 100;
			}
			else if (movePower >= 140) {
				movePower = 200;
			}

			if (movePath.value == "Mega Drain") {
				movePower = 120;
			}
			else if (movePath.value == "Weather Ball") {
				movePower = 160;
			}
			else if (movePath.value == "Hex") {
				movePower = 160;
			}
			else if (movePath.value == "Gear Grind") {
				movePower = 180;
			}
			else if (movePath.value == "V-create") {
				movePower = 220;
			}
			else if (movePath.value == "Flying Press") {
				movePower = 170;
			}
			else if (movePath.value == "Core Enforcer") {
				movePower = 140;
			}
			else {
				for (var u = 0; u < finaldataMoveAdditional.length; u++) {
					if (finaldataMoveAdditional[u]["Additional"] == "One-hit Knockout") {
						if (finaldataMoveAdditional[u]["Move"] == movePath.value) {
							if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
								movePower = 180;
								break;
							}
						}
							
					}
				}
			}
			
			
			for (var u = 0; u < finaldataMoveType.length; u++) {
				if (finaldataMoveType[u]["Name_"+JSONPath_MoveName].includes("(")) {
					if (returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",finaldataMoveType[u]["Name_"+JSONPath_MoveName]) == "Z-Move") {
						if (finaldataMoveType[u]["Type_"+JSONPath_MoveType] == moveType) {
							if (finaldataMoveType[u]["Name_"+JSONPath_MoveName].includes(moveCategory)) {
								consoleText(movePath.value+" ("+finaldataMoveType[u]["Name_"+JSONPath_MoveName].replaceAll(" ("+moveCategory+")","")+")");
								break;
							}
						}
					}
				}
			}

			
		}
	}

	var accRes = [];
	var dmgRes = [];
	var critRes = [];

	moveAccuracyTextPath.innerText = "0%";
	moveDamageTextPath.innerText = "0";
	moveCriticalTextPath.innerText = "0%";


	var check = true;
	if (user == undefined || target == undefined) {
		check = false;
	}

	if (check) {
		for (var i = 0; i < allDivBase.length; i++) {
			if (allDivBase[i].getAttribute("data-string") != "" && !allDivBase[i].getAttribute("data-string").includes("pok:|")) {
				// Paths //
                let tar = allDivBase[i];
				let tarTeam = allDivBase[i].parentElement.getAttribute("name");
				let tarID = allDivBase[i].getAttribute("name");
				let tarActive = tar.querySelector(":scope > *[name='active']");
				let tarInactive = tar.querySelector(":scope > *[name='inactive']");
				let tarBar = tar.querySelector(":scope > *[name='bar']");

                // Path Scopes
                let tarDivBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+tarTeam+"'] > div[name='"+tarID+"']");
                let tarPokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+tarTeam+"'] > ul[name='"+tarID+"']");
                let tarTeamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+tarTeam+"']");
                let tarStatsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+tarTeam+"'] > ul[name='"+tarID+"']");
                let tarPartyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+tarTeam+"']")
     
                // Target Div
				let tarHPCurrentPath = tarDivBase.querySelector(":scope *[name='hp'] *[name='current']");
				let tarHPMaxPath = tarDivBase.querySelector(":scope *[name='hp'] *[name='max']");
				let tarHPPercentagePath = tarDivBase.querySelector(":scope *[name='hp'] *[name='percentage']");
				let tarEffectPath = tarDivBase.querySelector(":scope *[name='effect']");
				let tarSTABPath = tarDivBase.querySelector(":scope *[name='stab']");

                // Target Pokémon
				let tarPokémonPath = tarPokBase.querySelector(":scope *[name='pokémon'] select");
				let tarLevelPath = tarPokBase.querySelector(":scope *[name='level'] input");
                let tarFriendshipPath = tarPokBase.querySelector(":scope *[name='friendship'] input");
				let tarItemPath = tarPokBase.querySelector(":scope *[name='item'] select");
				let tarAbilityPath = tarPokBase.querySelector(":scope *[name='ability'] select");
				let tarStatusPoisonPath = tarPokBase.querySelector(":scope *[name='Poisoned'] input");
				let tarStatusBadPoisonPath = tarPokBase.querySelector(":scope *[name='Badly Poisoned'] input");
				let tarStatusBurnPath = tarPokBase.querySelector(":scope *[name='Burned'] input");
				let tarStatusParalyzePath = tarPokBase.querySelector(":scope *[name='Paralyzed'] input");
				let tarStatusAsleepPath = tarPokBase.querySelector(":scope *[name='Asleep'] input");
				let tarStatusFrozenPath = tarPokBase.querySelector(":scope *[name='Frozen'] input");
				let tarForestsCursePath = tarPokBase.querySelector(`:scope *[name="Forest's Curse"] input`);
				let tarTrickOrTreatPath = tarPokBase.querySelector(":scope *[name='Trick-or-Treat'] input");
				let tarGlaiveRushPath = tarPokBase.querySelector(":scope *[name='Glaive Rush'] input");
				let tarLaserFocusPath = tarPokBase.querySelector(":scope *[name='Laser Focus'] input");
				let tarShadowPath = tarPokBase.querySelector(":scope *[name='Shadow'] input");
				let tarDynamaxPath = tarPokBase.querySelector(":scope *[name='Dynamax'] input");
				let tarForesightPath = tarPokBase.querySelector(":scope *[name='Foresight'] input");
				let tarMiracleEyePath = tarPokBase.querySelector(":scope *[name='Miracle Eye'] input");
				let tarOdorSleuthPath = tarPokBase.querySelector(":scope *[name='Odor Sleuth'] input");
				let tarSeedDamagePath = tarPokBase.querySelector(":scope *[name='Seed Damage'] input");
				let tarSeedHealPath = tarPokBase.querySelector(":scope *[name='Seed Heal'] input");
				let tarThousandArrowsPath = tarPokBase.querySelector(":scope *[name='Thousand Arrows'] input");
				let tarSmackDownPath = tarPokBase.querySelector(":scope *[name='Smack Down'] input");
				let tarMagnetRisePath = tarPokBase.querySelector(":scope *[name='Magnet Rise'] input");
				let tarIngrainPath = tarPokBase.querySelector(":scope *[name='Ingrain'] input");
				let tarTelekinesisPath = tarPokBase.querySelector(":scope *[name='Telekinesis'] input");
				let tarTypesPath = tarPokBase.querySelectorAll(":scope *[name='type'] select");
                let tarHPPath = tarPokBase.querySelector(":scope *[name='hp'] > input");

                // Target Team
				let tarAuroraVeilPath = tarTeamBase.querySelector(":scope *[name='Aurora Veil'] input");
				let tarLightScreenPath = tarTeamBase.querySelector(":scope *[name='Light Screen'] input");
				let tarReflectPath = tarTeamBase.querySelector(":scope *[name='Reflect'] input");
				let tarLuckyChantPath = tarTeamBase.querySelector(":scope *[name='Lucky Chant'] input");
				let tarSpikesPath = tarTeamBase.querySelector(":scope *[name='Spikes'] input");
				let tarStealthRockPath = tarTeamBase.querySelector(":scope *[name='Stealth Rock'] input");
				let tarStonesurgePath = tarTeamBase.querySelector(":scope *[name='G-Max Stonesurge'] input");
				let tarSteelsurgePath = tarTeamBase.querySelector(":scope *[name='G-Max Steelsurge'] input");

                // Target Stats
				let tarModPath = tarStatsBase.querySelectorAll(":scope span[name='Mod'] input:not(:first-child)");
				let tarStatsPath = tarStatsBase.querySelectorAll(":scope > span:last-child input:not(:first-child)");
				let tarSpeedStatPath = tarStatsBase.querySelector(":scope > span:last-child input[name='Speed']");
				let tarModEvasionPath = tarStatsBase.querySelector(":scope *[name='Mod'] *[name='Evasion']");


				let tarTypes = [];
				for (let t = 0; t < tarTypesPath.length; t++) {
					tarTypes.push(tarTypesPath[t].value);
				}


				// HP
				let tarMaxHP = parseInt(tarHPMaxPath.innerText);
				let tarCurrHP = parseInt(tarHPCurrentPath.innerText);
                let tarHP = parseInt(tarHPPath.value);
				let tarPercent = (tarHPPath.value/tarHPPath.max)*100;
				tarMaxHP = undwsnanDel(tarMaxHP,0);
				tarCurrHP = undwsnanDel(tarCurrHP,0);
                tarHP = undwsnanDel(tarHP,0);
				tarPercent = undwsnanDel(tarPercent,0);

            
				// Defaults
				tarEffectPath.innerText = "";
				tarSTABPath.innerText = "";
				tarActive.style.removeProperty("background");
				tarActive.style.background = "linear-gradient(90deg, limegreen 0%, limegreen "+tarPercent+"%, Darkred "+tarPercent+"%, Darkred 100%)";
				tarHPPercentagePath.innerText = Math.round(tarPercent)+"%";
				tarHPCurrentPath.innerText = tarHPPath.value;



				var check = false;
				if (moveRange.includes("May")) {
					if (allDivBase[i].classList.contains("viable")) {
						if (allDivBase[i].classList.contains("user") || allDivBase[i].classList.contains("target")) {
							check = true;
						}
					}
				}
				else {
					if (allDivBase[i].classList.contains("viable")) {
						check = true;
					}
				}
				if (check) {

					// --
					// Defaults
					var calculation = 0;
					var Immune = false;
					var Level = 1;
					var Critical = 1;
					var Attack = 0;		
					var Defense = 0;
					var NoModAttack = 0;
					var NoModDefense = 0;
					var Power = 0;
					var STAB = 1;
					var Type = 1;
					var Type1 = 1;
					var Type2 = 1;
					var random = 1;
					var Targets = 1;
					
					// Abilities
					var FlashFire = 1;
					var Fluffy1 = 1;
					var Fluffy2 = 1;
					var TintedLens = 1;
					var SolidRockFilter = 1;
					var FilterPrismArmorSolidRock = 1;
					var PunkRock = 1;
					var IceScales = 1;
					var FriendGuard = 1;
					var Neuroforce = 1;
					var Sniper = 1;
					var MultiscaleShadowShield = 1;

					// Moves
					var HelpingHand = 1;
					var MeFirst = 1;
					var Charge = 1;
					var GlaiveRush = 1;
					var Stockpile = 1;
					var TripleKick = 1;
					var BehemothBladeBehemothBashDynamaxCannon = 1;
					var Minimize = 1;
					var SurfWhirlpool = 1;
					var EarthquakeMagnitude = 1;
					var GustTwister = 1;
					var ColissionCourseElectroDrift = 1;
					var Rollout = 1;
					var FuryCutter = 1;
					var Rage = 1;
					var Pursuit = 1;
					var StompNeedleArmAstonishExtrasensory = 1;
					var Facade = 1;
					var SmellingSalt = 1;
					var Revenge = 1;
					var WeatherBall = 1;

					// Items
					var Item = 1;
					var ExpertBelt = 1;
					var LifeOrb = 1;
					var Metronome = 1;

					// Other
					var Weather = 1;
					var Badge = 1;
					var Burn = 1;
					var Screen = 1;
					var Berry = 1;
					var ZMove = 1;

					// Variable Power Moves
					if (movePath.value == "Return") {
						var val = userFriendshipPath.value;
						val = undwsnanDel(val,0);
						movePower = val/2.5;
						if (movePower < 1) {
							movePower = 1;
						}
					}
					if (movePath.value == "Frustration") {
						var val = userFriendshipPath.value;
						val = undwsnanDel(val,0);
						movePower = (255-val)/2.5;
						if (movePower < 1) {
							movePower = 1;
						}
					}
					if (movePath.value == "Dragon Energy") {
						movePower = Math.floor((150*userCurrHP)/userMaxHP);
					}
					if (movePath.value == "Crush Grip") {
						if (Generation == 4) {
							movePower = 1+120*(tarCurrHP/tarMaxHP);
							if (movePower < 1) {
								movePower = 1;
							}
							if (movePower > 121) {
								movePower = 121;
							}
						}
						else if (Generation >= 5) {
							movePower = 120*(tarCurrHP/tarMaxHP);
							if (movePower < 1) {
								movePower = 1;
							}
							if (movePower > 120) {
								movePower = 120;
							}
						}
					}
					if (movePath.value == "Electro Ball") {
						var val1 = userSpeedStatPath.value;
						val1 = undwsnanDel(val1,0);
						var val2 = tarSpeedStatPath.value;
						val2 = undwsnanDel(val2,0);

						var val = val1/val2;

						if (val > 1 || val2 == 0) {
							movePower = 40;
						}
						else if (val >= 0.5001 && val <= 1) {
							movePower = 60;
						}
						else if (val >= 0.3334 && val <= 0.5) {
							movePower = 80;
						}
						else if (val >= 0.2501 && val <= 0.3333) {
							movePower = 120;
						}
						else if (val >= 0.001 && val <= 0.25) {
							movePower = 150;
						}
					}
					if (movePath.value == "Eruption") {
						movePower = Math.floor((150*userCurrHP)/userMaxHP);
						if (movePower < 1) {
							movePower = 1;
						}
					}
					if (movePath.value == "Flail") {
						var val = userCurrHP/userMaxHP;
						if (Generation == 4) {
							if (val >= 0.6719) {
								movePower = 20;
							}
							else if (val >= 0.3438 && val < 0.6719) {
								movePower = 40;
							}
							else if (val >= 0.2031 && val < 0.3438) {
								movePower = 80;
							}
							else if (val >= 0.0938 && val < 0.2031) {
								movePower = 100;
							}
							else if (val >= 0.0313 && val < 0.0938) {
								movePower = 150;
							}
							else if (val < 0.0313) {
								movePower = 200;
							}
						}
						else {
							if (val >= 0.6875) {
								movePower = 20;
							}
							else if (val >= 0.3542 && val < 0.6875) {
								movePower = 40;
							}
							else if (val >= 0.2083 && val < 0.3542) {
								movePower = 80;
							}
							else if (val >= 0.1042 && val < 0.2083) {
								movePower = 100;
							}
							else if (val >= 0.0417 && val < 0.1042) {
								movePower = 150;
							}
							else if (val < 0.0417) {
								movePower = 200;
							}
						}
					}
					if (movePath.value == "Fling") {
						if (userItemPath != undefined) {
							movePower = flingPowerCalc(userItemPath.value);
							if (userItemPath.value.includes("TR")) {
								var val = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,getMachineMove(userItemPath.value));
								val = undwsnanDel(val,10);
								movePower = val;
								movePower = parseInt(movePower);
							}
						}
					}


					// Factors
					Level = parseInt(userLevelPath.value);
					Power = parseInt(movePower);
					if (Level == "" || Level == undefined) {
						Level = 0;
					}
					if (Power == "-") {
						Power = 0;
					}
					if (criticalPath.checked) {
						Critical = 2;
					}
					if (userTypes[0] == moveType || userTypes[1] == moveType) {
						if (userAbilityPath != undefined && userAbilityPath.value == "Adaptability") {
							STAB = 2;
						}
						else {
							STAB = 1.5;
						}
					}
					if (InvunerableDigPath.checked) {
						if (movePath.value == "Earthquake" || movePath.value == "Magnitude") {
							EarthquakeMagnitude = 2;
						}
					}
					if (InvunerableDivePath.checked) {
						if (movePath.value == "Surf" || movePath.value == "Whirlpool") {
							SurfWhirlpool = 2;
						}
					}
					if (movePath.value == "Gust" || movePath.value == "Twister") {
						if (InvunerableFlightPath.checked) {
							GustTwister = 2;
						}
					}
					if (weatherRainPath != undefined && weatherRainPath.checked) {
						if (moveType == "Fire") {
							Weather = 0.5;
						}
						if (moveType == "Water") {
							Weather = 1.5;
						}
					}
					if (weatherHarshSunlightPath != undefined && weatherHarshSunlightPath.checked) {
						if (moveType == "Fire") {
							Weather = 1.5;
						}
						if (moveType == "Water") {
							if (movePath.value != "Hydro Steam") {
								Weather = 0.5;
							}
						}
					}
					if (movePath.value == "Rollout") {
						if (DefenseCurlPath.checked) {
							Rollout = 2**((parseInt(moveCountPath.value)-1)+1);
						}
						else {
							Rollout = 2**(parseInt(moveCountPath.value)-1);
						}
					}
					if (movePath.value == "Fury Cutter") {
						FuryCutter = 2**(parseInt(moveCountPath.value)-1);
					}
					if (movePath.value == "Rage") {
						Rage = parseInt(moveCountPath.value);
					}
					if (movePath.value == "Pursuit") {
						if (SwitchPath.checked) {
							Pursuit = 2;
						}
					}
					if (movePath.value == "Stomp" || movePath.value == "Needle Arm" || movePath.value == "Astonish" || movePath.value == "Extrasensory") {
						if (MinimizePath.checked) {
							StompNeedleArmAstonishExtrasensory = 2;
						}
					}
					if (moveCategory == "Physical") {
						if (tarReflectPath.checked) {
							if (battleSize > 2) {
								Screen = 0.6667;
							}
							else {
								Screen = 0.5;
							}
						}
					}
					if (moveCategory == "Special") {
						if (tarLightScreenPath.checked) {
							if (battleSize > 2) {
								Screen = 0.6667;
							}
							else {
								Screen = 0.5;
							}
						}
					}
					if (!DMGCheckGrounded(tar)) {
						if (moveType == "Ground") {
							Immune = true;
						}
					}
					if (tarAbilityPath != undefined && tarAbilityPath.value == "Lightning Rod") {
						if (Generation >= 5) {
							if (moveType == "Electric") {
								Immune = true;
							}
						}
					}
					if (movePath.value == "SolarBeam" || movePath.value == "Solar Beam") {
						if (weatherRainPath != undefined && weatherRainPath.checked) {
							Weather = 0.5;
						}
						if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
							Weather = 0.5;
						}
						if (weatherHailPath != undefined && weatherHailPath.checked) {
							Weather = 0.5;
						}
						if (weatherFogPath != undefined && weatherFogPath.checked) {
							Weather = 0.5;
						}
					}
					if (userAbilityPath != undefined && userAbilityPath.value == "Flash Fire") {
						if (moveType == "Fire") {
							if (FlashFirePath.checked) {
								FlashFire = 1.5;
							}
						}
					}
					if (movePath.value == "Spit Up") {
						Stockpile = moveCountPath.value;
					}
					if (movePath.value == "Facade") {
						if (userStatusPoisonPath.checked || userStatusBurnPath.checked || userStatusParalyzePath.checked) {
							Facade = 2;
						}
						if (userStatusBadPoisonPath.value != "" && userStatusBadPoisonPath.value != undefined) {
							Facade = 2;
						}
					}
					if (movePath.value == "SmellingSalt" || movePath.value == "Smelling Salt") {
						if (tarStatusParalyzePath.checked) {
							SmellingSalt = 2;
						}
					}
					if (movePath.value == "Weather Ball") {
						if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(tar,"Air Lock","Ability","All","") == 0) {
							WeatherBall = 2;
						}
					}
					if (battleSize > 2) {
						if (HelpingHandPath.checked) {
							HelpingHand = 1.5;
						}
					}
					if (userItemPath != undefined && userItemPath.value == "Life Orb") {
						LifeOrb = 1.3;
					}
					if (MeFirstPath != undefined && MeFirstPath.checked) {
						MeFirst = 1.5;
					}

					for(var u = 0; u < finaldataItemsDamage.length; u++) {
						if (userItemPath != undefined && finaldataItemsDamage[u]["Item"] == userItemPath.value) {
							if (getApplicable(finaldataItemsDamage[u]["Game"])) {
								if (finaldataItemsDamage[u]["Type"] == moveType) {
									var check = false;
									if (finaldataItemsDamage[u]["Pokémon"] == undefined) {
										check = true;
									}
									else if (finaldataItemsDamage[u]["Pokémon"].includes(",")) {
										check 
										var tempPok = finaldataItemsDamage[u]["Pokémon"].split(",")
										for(var p = 0; p < tempPok.length; p++) {
											if (getPokémonName(getPokémonInt(tempPok[p])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
												check = true;
												break;
											}
										}
									}
									else if (getPokémonName(getPokémonInt(finaldataItemsDamage[u]["Pokémon"])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
										check = true;
									}
									if (check) {
										Item = finaldataItemsDamage[u]["Value"];
									}
								}
							}
						}
					}


					if (TerrainElectricPath != undefined && TerrainElectricPath.checked) {
						if (moveType == "Electric") {
							if (DMGCheckGrounded(tar)) {
								if (Generation >= 6 && Generation <= 7) {
									Power = Power*1.5;
								}
								else if (Generation >= 8) {
									Power = Power*1.3;
								}
							}
						}
					}
					if (TerrainGrassyPath != undefined && TerrainGrassyPath.checked) {
						if (moveType == "Grass") {
							if (DMGCheckGrounded(tar)) {
								if (Generation >= 6 && Generation <= 7) {
									Power = Power*1.5;
								}
								else if (Generation >= 8) {
									Power = Power*1.3;
								}
							}
						}
					}
					if (TerrainPsychicPath != undefined && TerrainPsychicPath.checked) {
						if (moveType == "Psychic") {
							if (DMGCheckGrounded(tar)) {
								if (Generation >= 6 && Generation <= 7) {
									Power = Power*1.5;
								}
								else if (Generation >= 8) {
									Power = Power*1.3;
								}
							}
						}
						if (movePriority.includes("+")) {
							Power = 0;
						}
					}

					if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
						if (moveType == "Dragon") {
							if (DMGCheckGrounded(tar)) {
								Power = Power*0.5;
							}
						}
					}
				


					if (Generation == 1) { // DMG Generation 1
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Special") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Special") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						Attack = parseFloat(Attack);
						Defense = parseFloat(Defense);
						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
						if (Critical == 2) {
							Attack = NoModAttack;
							Defense = NoModDefense;
						}
						if (Attack > 255 || Defense > 255) {
							Attack = Math.floor(Attack/4);
							Defense = Math.floor(Defense/4);
						}
					
						random = randomPath.value/255;
						
						var used = []
						if (tarTypes.length > 0) {
							var typeadv = returnTypeAdvantage(moveType,"Attacking");

							if (typeadv[2].includes(tarTypes[0].toUpperCase())) {
								used.push(tarTypes[0].toUpperCase())
								Type1 = Type1*2;
							}
							if (typeadv[1].includes(tarTypes[0].toUpperCase())) {
								used.push(tarTypes[0].toUpperCase())
								Type1 = Type1*0.5;
							}
							if (typeadv[3].includes(tarTypes[0].toUpperCase())) {
								Immune = true;
							}

							if (typeadv[2].includes(tarTypes[1].toUpperCase())) {
								if (!used.includes(tarTypes[1].toUpperCase())) {
									Type2 = 2;
								}
								Type1 = 2;
							}
							if (typeadv[1].includes(tarTypes[1].toUpperCase())) {
								if (!used.includes(tarTypes[1].toUpperCase())) {
									Type2 = 0.5;
								}
								Type1 = 0.5;
							}


							if (typeadv[3].includes(tarTypes[1].toUpperCase())) {
								Immune = true;
							}
						}
					}
					else if (Generation == 2) { // DMG Generation 2
		
						random = randomPath.value/255;
						
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						if (movePath.value == "Flail" || movePath.value == "Reversal" || movePath.value == "Future Sight") {
							Critical = 1;
						}
						if (Critical == 2) {
							if (userModPath.length == tarModPath.length) {
								for(var u = 0; u < tarModPath.length; u++) {
							
									var tarval = tarModPath[u].value;
									if (tarval == "" || tarval == undefined) {
										tarval = 0;
									}
	
									if (moveCategory == "Physical") {
										if (tarModPath[u].getAttribute("name") == "Attack") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Defense") {
													if (userval <= tarval) {
														Attack = NoModAttack;
													}
												}
											}
										}
										if (tarModPath[u].getAttribute("name") == "Defense") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Attack") {
													if (userval <= tarval) {
														Defense = NoModDefense;
													}
												}
											}
										}
									}
									else if (moveCategory == "Special") {
										if (tarModPath[u].getAttribute("name") == "Sp. Atk") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Sp. Def") {
													if (userval <= tarval) {
														Attack = NoModAttack;
													}
												}
											}
										}
										if (tarModPath[u].getAttribute("name") == "Sp. Def") {
											for(var r = 0; r < userModPath.length; r++) {
												var userval = userModPath[r].value;
												if (userval == "" || userval == undefined) {
													userval = 0;
												}
												if (tarModPath[r].getAttribute("name") == "Sp. Atk") {
													if (userval <= tarval) {
														Defense = NoModDefense;
													}
												}
											}
										}
									}
								}
							}
						}
						if (moveCategory == "Physical") {
							if (tarReflectPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
						if (moveCategory == "Special") {
							if (tarLightScreenPath.checked) {
								if (Critical == 1) {
									Defense = Defense*2;
								}
							}
						}
						for (var u = 0; u < tarTypes.length; u++) {
							var typeadv = returnTypeAdvantage(moveType,"Attacking");
							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type = Type*2;
							}
							if (typeadv[1].includes(tarTypes[u].toUpperCase())) {
								Type = Type*0.5;
							}
							if (typeadv[3].includes(tarTypes[u].toUpperCase())) {
								Immune = true;
							}
						}
						if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up") {
							Type = 1;
						}
						for (var u = 0; u < userBadgePath.length; u++) {
							if (userBadgePath[u].parentElement.title.includes(moveType+"-type")) {
								if (userBadgePath[u].checked) {
									Badge = 1.125;
								}
							}
						}
						if (movePath.value == "Triple Kick") {
							TripleKick = moveCountPath.value;
						}
						if (movePath.value == "Flail" || movePath.value == "Reversal") {
							random = 1;
						}
					}
					else if (Generation == 3) { // DMG Generation 3
				
						random = randomPath.value/100;
						
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						if (movePath.value == "Future Sight" || movePath.value == "Doom Desire" || movePath.value == "Spit Up" || tarAbilityPath.value == "Battle Armor" || tarAbilityPath.value == "Shell Armor") {
							Critical = 1;
						}
						if (tarStatusBurnPath.checked) {
							if (tarAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									Burn = 0.5;
								}
							}
						}
						if (Critical == 2) {
							Screen = 1;
							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (userModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (userModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}
						if (battleSize > 2) {
							if (tar.length > 1) {
								if (moveRange != "Affects all Pokémon adjacent to the user") {
									Targets = 0.5;
								}
							}
						}
						for (var u = 0; u < tarTypes.length; u++) {
							var typeadv = returnTypeAdvantage(moveType,"Attacking");
							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type = Type*2;
							}
							if (typeadv[1].includes(tarTypes[u].toUpperCase())) {
								Type = Type*0.5;
							}
							if (typeadv[3].includes(tarTypes[u].toUpperCase())) {
								Immune = true;
							}
						}
						if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
							Type = 1;
						}
						if (moveType == "Electric") {
							if (ChargePath.checked) {
								Charge = 2;
							}
						}
					}
					else if (Generation == 4) { // DMG Generation 4
					
						random = randomPath.value/100;
						
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						if (tarStatusBurnPath.checked) {
							if (tarAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									Burn = 0.5;
								}
							}
						}
						if (Critical == 2) {
							Screen = 1;

							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (userModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (userModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}
						if (battleSize > 2) {
							if (tar.length > 1) {
								if (moveRange != "Affects all Pokémon adjacent to the user") {
									Targets = 0.75;
								}
							}
						}
						if (userItemPath.value == "Metronome") {
							var val = userItemCountPath.value;
							if (isNaN(val)) {
								val = 0;
							}
							if (val > 10) {
								val = 10;
							}
							Metronome = 1+(val/10);
						}
						for(var u = 0; u < tarTypes.length; u++) {
							var typeadv = returnTypeAdvantage(moveType,"Attacking");

							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type1 = Type1*2;
							}
							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type1 = Type1*0.5;
							}
							if (typeadv[3].includes(tarTypes[u].toUpperCase())) {
								Immune = true;
							}

							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type2 = Type2*2;
							}
							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type2 = Type2*0.5;
							}
							if (typeadv[3].includes(tarTypes[u].toUpperCase())) {
								Immune = true;
							}
						}
						if (movePath.value == "Struggle" || movePath.value == "Future Sight" || movePath.value == "Beat Up" || movePath.value == "Doom Desire") {
							Type1 = 1;
							Type2 = 1;
						}
						if (tarAbilityPath != undefined) {
							if (tarAbilityPath.value == "Solid Rock" || tarAbilityPath.value == "Filter") {
								if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
									if (Type1+Type2 > 2) {
										SolidRockFilter = 0.75;
									}
								}
							}
						}
						if (userItemPath.value == "Expert Belt") {
							if (Type1+Type2 > 2) {
								ExpertBelt = 1.2;
							}
						}
						if (userAbilityPath.value == "Tinted Lens") {
							if (Type1+Type2 < 2) {
								TintedLens = 2;
							}
						}
						var check = false;
						if (tarItemPath.value == "Chilan Berry" && moveType == "Normal") {
							check = true;
						}
						if (Type1+Type2 > 2) {
							if (tarItemPath.value == "Babiri Berry" && moveType == "Steel") {
								check = true;
							}
							if (tarItemPath.value == "Charti Berry" && moveType == "Rock") {
								check = true;
							}
							if (tarItemPath.value == "Chople Berry" && moveType == "Fighting") {
								check = true;
							}
							if (tarItemPath.value == "Coba Berry" && moveType == "Flying") {
								check = true;
							}
							if (tarItemPath.value == "Colbur Berry" && moveType == "Dark") {
								check = true;
							}
							if (tarItemPath.value == "Haban Berry" && moveType == "Dragon") {
								check = true;
							}
							if (tarItemPath.value == "Kasib Berry" && moveType == "Ghost") {
								check = true;
							}
							if (tarItemPath.value == "Kebia Berry" && moveType == "Poison") {
								check = true;
							}
							if (tarItemPath.value == "Occa Berry" && moveType == "Fire") {
								check = true;
							}
							if (tarItemPath.value == "Passho Berry" && moveType == "Water") {
								check = true;
							}
							if (tarItemPath.value == "Payapa Berry" && moveType == "Psychic") {
								check = true;
							}
							if (tarItemPath.value == "Rindo Berry" && moveType == "Grass") {
								check = true;
							}
							if (tarItemPath.value == "Roseli Berry" && moveType == "Fairy") {
								check = true;
							}
							if (tarItemPath.value == "Shuca Berry" && moveType == "Ground") {
								check = true;
							}
							if (tarItemPath.value == "Tanga Berry" && moveType == "Bug") {
								check = true;
							}
							if (tarItemPath.value == "Wacan Berry" && moveType == "Electric") {
								check = true;
							}
							if (tarItemPath.value == "Yache Berry" && moveType == "Ice") {
								check = true;
							}
						}
						if (check) {
							Berry = 0.5;
						}
						if (moveType == "Electric") {
							if (ChargePath.checked) {
								Power = Power*2;
							}
						}
					}
					else if (Generation >= 5) { // DMG Generation 5+
						if (criticalPath.checked) {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}
				
						random = randomPath.value/100;
						
						if (movePath.value == "Storm Throw" || movePath.value == "Frost Breath" || movePath.value == "Zippy Zap" || movePath.value == "Surging Strikes" || movePath.value == "Wicked Blow" || movePath.value == "Flower Trick") {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}
						if (userAbilityPath != undefined && userAbilityPath.value == "Merciless") {
							var check = false;
							if (tarStatusPoisonPath.checked) {
								check = true;
							}
							if (tarStatusBadPoisonPath.value != "" && tarStatusBadPoisonPath.value != undefined) {
								check = true;
							}
							if (check) {
								if (Generation == 5) {
									Critical = 2;
								}
								else {
									Critical = 1.5;
								}
							}
						}
						if (tarLaserFocusPath != undefined && tarLaserFocusPath.checked) {
							if (Generation == 5) {
								Critical = 2;
							}
							else {
								Critical = 1.5;
							}
						}
						if (tarAbilityPath != undefined) {
							if (tarAbilityPath.value == "Battle Armor" || tarAbilityPath.value == "Shell Armor") {
								Critical = 1;
							}
						}
						if (tarLuckyChantPath != undefined && tarLuckyChantPath.checked) {
							Critical = 1;
						}
						if (battleSize > 2) {
							if (battleSelect.value == "Battle Royal") {
								Targets = 0.5;
							}
							else {
								Targets = 0.75;
							}
						}
						if (moveCategory == "Physical") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Attack") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Defense") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						else if (moveCategory == "Special") {
							for(var u = 0; u < userStatsPath.length; u++) {
								if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
									Attack = userStatsPath[u].value;
									NoModAttack = userStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
							for(var u = 0; u < tarStatsPath.length; u++) {
								if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
									Defense = tarStatsPath[u].value;
									NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
									break;
								}
							}
						}
						if (Critical > 1) {
							// Ignore "Negative" User Attack Stat Changes on Critical Hit
							for(var u = 0; u < userModPath.length; u++) {
								var userval = userModPath[u].value;
								if (userval == "" || userval == undefined) {
									userval = 0;
								}

								if (moveCategory == "Physical") {
									if (userModPath[u].getAttribute("name") == "Attack") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (userModPath[u].getAttribute("name") == "Sp. Atk") {
										if (userval < 0) {
											Attack = NoModAttack;
										}
									}
								}
							}
							// Ignore "Positive" Target Defense Stat Changes on Critical Hit
							for(var u = 0; u < tarModPath.length; u++) {
								var tarval = tarModPath[u].value;
								if (tarval == "" || tarval == undefined) {
									tarval = 0;
								}

								if (moveCategory == "Physical") {
									if (tarModPath[u].getAttribute("name") == "Defense") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
								else if (moveCategory == "Special") {
									if (tarModPath[u].getAttribute("name") == "Sp. Def") {
										if (tarval > 0) {
											Defense = NoModDefense;
										}
									}
								}
							}
						}
						/*
						if (movePath.value.includes(" Pledge")) {
							if (userAbilityPath.value == "Adaptability") {
								STAB = 2;
							}
							else {
								STAB = 1.5;
							}
						}
						*/
						for (var u = 0; u < tarTypes.length; u++) {
							var typeadv = returnTypeAdvantage(moveType,"Attacking");

							if (typeadv[2].includes(tarTypes[u].toUpperCase())) {
								Type = Type*2;
							}
							if (typeadv[1].includes(tarTypes[u].toUpperCase())) {
								var check = true;
								if (weatherStrongWindsPath != undefined) {
									if (weatherStrongWindsPath.checked && tarTypes[u] == "Flying") {
										check = false;
									}
								}

								if (check) {
									Type = Type*0.5;
								}
							}
							if (typeadv[3].includes(tarTypes[u].toUpperCase())) {
								var check = true;
								if (tarTypes[u] == "Flying" && tarThousandArrowsPath != undefined && tarThousandArrowsPath.checked) {
									check = false;
								}
								if (tarTypes[u] == "Flying" && tarItemPath.value == "Iron Ball") {
									check = false;
								}
								if (tarItemPath.value == "Ring Target") {
									check = false;
								}
								if (tarAbilityPath.value == "Scrappy") {
									if (tarTypes[u] == "Normal" || tarTypes[u] == "Fighting") {
										check = false;
									}
								}
								if (tarForesightPath.checked || tarMiracleEyePath.checked || tarOdorSleuthPath.checked) {
									check = false;
								}
								if (check) {
									Immune = true;
								}
							}
						}
						if (movePath.value == "Freeze-Dry") {
							if (!typeadv[2].includes("WATER")) {
								Type = Type*2;
							}
						}
						if (movePath.value == "Flying Press") {
							var tempTypeAdv = returnTypeAdvantage("Flying","Defending");
							if (tempTypeAdv[1].includes("FLYING")) {
								Type = Type*0.5;
							}
							if (tempTypeAdv[2].includes("FLYING")) {
								Type = Type*2;
							}
						}
					
						if (TarShotPath != undefined && TarShotPath.checked) {
							if (moveType == "Fire") {
								Type = Type*2;
							}
						}
						if (movePath.value == "Struggle") {
							Type = 1;
						}

						if (tarGlaiveRushPath != undefined && tarGlaiveRushPath.checked) {
							GlaiveRush = 2;
						}
						if (userStatusBurnPath.checked) {
							if (userAbilityPath.value != "Guts") {
								if (moveCategory == "Physical") {
									if (Generation != 5) {
										if (movePath.value != "Facade") {
											Burn = 0.5;
										}
									}
									else {
										Burn = 0.5;
									}
								}
							}
						}
						if (tarDynamaxPath != undefined) {
							if (tarDynamaxPath.checked || userPokémonPath.value.includes("Gigantamax")) {
								if (movePath.value == "Behemoth Blade" || movePath.value == "Behemoth Bash" || movePath.value == "Dynamax Cannon") {
									BehemothBladeBehemothBashDynamaxCannon = 2;
								}
							}
						}
						if (MinimizePath.checked) {
							var tempOtherMoves = [];
							if (Generation == 5) {
								tempOtherMoves = ["Stomp","Steamroller"];
							}
							if (Generation == 6) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Shadow Force","Steamroller","Heat Crash","Phantom Force","Flying Press"];
							}
							if (Generation == 7) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Steamroller","Heat Crash","Heavy Slam","Flying Press","Malicious Moonsault","Double Iron Bash"];
							}
							if (Generation == 8) {
								tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Heat Crash","Heavy Slam","Flying Press"];
							}
							if (tempOtherMoves.includes(movePath.value)) {
								Minimize = 2;
							}
						}
						if (tarAuroraVeilPath != undefined && tarAuroraVeilPath.checked) {
							if (battleSize > 2) {
								Screen = 0.6667;
							}
							else {
								Screen = 0.5;
							}
						}
						if (movePath.value == "Collision Course" || movePath.value == "Electro Drift") {
							if (Type > 1) {
								ColissionCourseElectroDrift = 1.3333;
							}
						}
						if (tarAbilityPath.value == "Multiscale" || tarAbilityPath.value == "Shadow Shield") {
							if (tarHPCurrentPath.innerText == tarHPMaxPath.innerText) {
								MultiscaleShadowShield = 0.5;
							}
						}
						if (tarAbilityPath != undefined) {
							if (tarAbilityPath.value == "Solid Rock" || tarAbilityPath.value == "Filter") {
								if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
									if (Type > 1) {
										SolidRockFilter = 0.75;
									}
								}
							}
						}
						if (tarAbilityPath.value == "Fluffy") {
							if (movePath.value != "Sunsteel Strike" && movePath.value != "Searing Sunraze Smash") {
								if (userAbilityPath.value != "Long Reach") {
									if (returnArrValue(finaldataMoveOtherMoves,"Name_"+JSONPath_MoveName,"Contact",movePath.value) == "Makes contact") {
										Fluffy1 = 0.5;
									}
								}
							}
						}
						if (tarAbilityPath.value == "Punk Rock") {
							if (returnArrValue(finaldataMoveOtherMoves,"Name_"+JSONPath_MoveName,"Sound-Based",movePath.value) == "Is a sound-tard move") {
								PunkRock = 0.5;
							}
						}
						if (tarAbilityPath.value == "Ice Scales") {
							if (moveCategory == "Special") {
								IceScales = 0.5;
							}
						}
	
	
						if (DMGFindScenario(tar,"Friend Guard","Ability","Ally","User") > 0) {
							FriendGuard = (16-((DMGFindScenario(tar,"Friend Guard","Ability","Ally","User")*3)+1))/16;
						}
						if (tarAbilityPath.value == "Filter" || tarAbilityPath.value == "Prism Armor" || tarAbilityPath.value == "Solid  Rock") {
							if (Type > 1) {
								FilterPrismArmorSolidRock = 0.75;
							}
						}
						if (userAbilityPath.value == "Neuroforce") {
							if (Type > 1) {
								Neuroforce = 1.25;
							}
						}
						if (Critical > 1) {
							if (userAbilityPath.value == "Sniper") {
								Sniper = 1.5;
							}
						}
						if (userAbilityPath.value == "Tinted Lens") {
							if (Type < 1) {
								TintedLens = 2;
							}
						}
						if (tarAbilityPath.value == "Fluffy") {
							if(movePath.value != "G-Max Fireball") {
								if (moveType == "Fire") {
									Fluffy2 = 2;
								}
							}
						}
						var check = false;
						if (tarItemPath.value == "Chilan Berry" && moveType == "Normal") {
							check = true;
						}
						if (Type > 1) {
							if (tarItemPath.value == "Babiri Berry" && moveType == "Steel") {
								check = true;
							}
							if (tarItemPath.value == "Charti Berry" && moveType == "Rock") {
								check = true;
							}
							if (tarItemPath.value == "Chople Berry" && moveType == "Fighting") {
								check = true;
							}
							if (tarItemPath.value == "Coba Berry" && moveType == "Flying") {
								check = true;
							}
							if (tarItemPath.value == "Colbur Berry" && moveType == "Dark") {
								check = true;
							}
							if (tarItemPath.value == "Haban Berry" && moveType == "Dragon") {
								check = true;
							}
							if (tarItemPath.value == "Kasib Berry" && moveType == "Ghost") {
								check = true;
							}
							if (tarItemPath.value == "Kebia Berry" && moveType == "Poison") {
								check = true;
							}
							if (tarItemPath.value == "Occa Berry" && moveType == "Fire") {
								check = true;
							}
							if (tarItemPath.value == "Passho Berry" && moveType == "Water") {
								check = true;
							}
							if (tarItemPath.value == "Payapa Berry" && moveType == "Psychic") {
								check = true;
							}
							if (tarItemPath.value == "Rindo Berry" && moveType == "Grass") {
								check = true;
							}
							if (tarItemPath.value == "Roseli Berry" && moveType == "Fairy") {
								check = true;
							}
							if (tarItemPath.value == "Shuca Berry" && moveType == "Ground") {
								check = true;
							}
							if (tarItemPath.value == "Tanga Berry" && moveType == "Bug") {
								check = true;
							}
							if (tarItemPath.value == "Wacan Berry" && moveType == "Electric") {
								check = true;
							}
							if (tarItemPath.value == "Yache Berry" && moveType == "Ice") {
								check = true;
							}
						}
						if (check) {
							if (userAbilityPath.value == "Ripen") {
								Berry = 0.25;
							}
							else {
								Berry = 0.5;
							}
						}
						if (userItemPath.value == "Expert Belt") {
							if (Type > 1) {
								ExpertBelt = 1.2;
							}
						}
						if (userItemPath.value == "Metronome") {
							var val = userItemCountPath.value;
							if (isNaN(val)) {
								val = 0;
							}
							Metronome = 1+((819/4096)*val);
							if (Metronome > 2) {
								Metronome = 2;
							}
						}
						if (ProtectionPath.checked) {
							var grp = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",movePath.value);
							if (grp == "Z-Move" || grp == "G-Max Move" || grp == "Max Move") {
								ZMove = 0.25;
							}
						}
						if (moveType == "Electric") {
							if (ChargePath.checked) {
								Power = Power*2;
							}
						}
					}

					if (tarAbilityPath != undefined && tarAbilityPath.value == "Wonder Guard") {								
						if (Generation == 4) {
							if (Type1*Type2 < 2) {
								Immune = true;
							}
						}
						else {
							if (Type < 2) {
								Immune = true;
							}
						}
					}


					if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") > 0 || DMGFindScenario(tar,"Air Lock","Ability","All","") > 0) {
						Weather = 1;
					}
					let effect = "Normal";
					if (Generation == 1 || Generation == 4) {
						if (Type1*Type2 == 2) {
							effect = "Super Effective"
						}
						else if (Type1*Type2 == 4) {
							effect = "Super Effective!!"
						}
						else if (Type1*Type2 == 0.5) {
							effect = "Not Very Effective"
						}
						else if (Type1*Type2 == 0.25) {
							effect = "Not Very Effective!!"
						}
						if (Immune) {
							effect = "Immune"
						}
					}
					else {
						if (Type == 2) {
							effect = "Super Effective"
						}
						else if (Type == 4) {
							effect = "Super Effective!!"
						}
						else if (Type == 0.5) {
							effect = "Not Very Effective"
						}
						else if (Type == 0.25) {
							effect = "Not Very Effective!"
						}
						if (Immune) {
							effect = "Immune"
						}
					}

					if (effect != "Normal") {
						tarEffectPath.innerText = effect;
					}

					if (STAB > 1) {
						userStabPath.innerText = "Same Type Attack Bonus";
					}

				
		

					// Calculation
					if (Generation == 1) {
						calculation = ((((((2*Level*Critical)/5)+2)*Power*(Attack/Defense))/50)+2)*STAB*Type1*Type2;
						if (calculation == 1) {
							random = 1;
						}
						calculation = calculation*random;
					}
					else if (Generation == 2) {
						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Item*Critical+2)*TripleKick*Weather*Badge*STAB*Type*(Rollout*FuryCutter*Rage*Pursuit*StompNeedleArmAstonishExtrasensory*GustTwister*EarthquakeMagnitude)*random;
					}
					else if (Generation == 3) {
						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Stockpile*Critical*(Item)*(GustTwister*StompNeedleArmAstonishExtrasensory*SurfWhirlpool*EarthquakeMagnitude*Pursuit*Facade*SmellingSalt*Revenge*WeatherBall)*Charge*HelpingHand*STAB*Type*random*(Rollout*FuryCutter*Rage);
					}
					else if (Generation == 4) {
						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Critical*(Item*LifeOrb*Metronome)*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit)*HelpingHand*random*STAB*Type1*Type2*SolidRockFilter*ExpertBelt*TintedLens*Berry;
					}
					else if (Generation >= 5) {
						calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)+2)*Targets*Weather*GlaiveRush*Critical*HelpingHand*random*STAB*Type*Burn*Screen*(SolidRockFilter*BehemothBladeBehemothBashDynamaxCannon*Minimize*SurfWhirlpool*EarthquakeMagnitude*Screen*ColissionCourseElectroDrift*MultiscaleShadowShield*Fluffy1*PunkRock*IceScales*FriendGuard*FilterPrismArmorSolidRock*Neuroforce*Sniper*TintedLens*Fluffy2*(Item*LifeOrb*ExpertBelt*Metronome)*Berry)*ZMove*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit);
					}

					if (movePath.value == "Endeavor") {	
						let val1 = (tarCurrHP-userCurrHP);
						val1 = val1;
						if (val1 < 0) {
							val1 = 0;
						}
						calculation = val1;

						movePower = 1;
					}


					if (Immune) {
						calculation = 0;
					}

					var integerResult = Math.round(calculation);
					var move = movePath.value;
					
					integerResult = undwsnanDel(integerResult,0)

					if (movePower == 0) {
						integerResult = 0;
					}
				
			
					if (movePath.value == "Dragon Rage") {
						DMGCalcApply(allDivBase[i],40,"Damage");
					}
					else if (movePath.value == "Sonic Boom" || movePath.value == "SonicBoom") {
						DMGCalcApply(allDivBase[i],20,"Damage");
					}
					else if (movePath.value == "Triple Kick" && Generation == 2) {
						DMGCalcApply(allDivBase[i],integerResult,"Damage");
					}
					else if (userAbilityPath != undefined && userAbilityPath.value == "Parental Bond") {
						var check = true;
						for (var u = 0; u < finaldataMoveAdditional.length; u++) {
							if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
								if (finaldataMoveAdditional[u]["Move"] == movePath.value) {
									if (finaldataMoveAdditional[u]["Additional"] == "Multi-strike") {
										check = false;
									}
								}
							}
						}
						if (check) {
							for (var h = 0; h < 2; h++) {
								if (Generation == 6) {
									if (h == 1) {
										DMGCalcApply(allDivBase[i],integerResult*0.5,"Damage");
									}
									else {
										DMGCalcApply(allDivBase[i],integerResult,"Damage");
									}
								}
								else {
									if (h == 1) {
										DMGCalcApply(allDivBase[i],integerResult*0.25,"Damage");
									}
									else {
										DMGCalcApply(allDivBase[i],integerResult,"Damage");
									}
								}
							}
						}
						
					}
					else if (movePath.value == "Spit Up") {
						DMGCalcApply(allDivBase[i],integerResult,"Damage");
					}
					else {
						for (var h = 0; h < moveCountPath.value; h++) {
							DMGCalcApply(allDivBase[i],integerResult,"Damage");
						}
					}


					// Accuracy
					var acc = undwsDel(moveAccuracy,"0");
					acc = acc.replaceAll("%","").replaceAll("~","");
					var evasionMod = tarModEvasionPath.value;
					var accuracyMod = userModAccuracyPath.value;

					
					accuracyMod = undwsDel(accuracyMod,0);
					accuracyMod = parseInt(accuracyMod);
					evasionMod = undwsDel(evasionMod,0)
					evasionMod = parseInt(evasionMod);

					accuracyMod = modStageCalc("Accuracy",accuracyMod);
					evasionMod = modStageCalc("Evasion",evasionMod);


					if (movePath.value == "Fissure" || movePath.value == "Guillotine" || movePath.value == "Horn Drill" || movePath.value == "Sheer Cold") {
						if (Generation == 2) {
							acc = (((parseInt(userLevelPath.value)-parseInt(tarLevelPath.value))*2+76)/256)*100;
						}
						if (Generation >= 3) {
							acc = parseInt(userLevelPath.value)-parseInt(tarLevelPath.value)+30;
						}
					}
					let accCalc = 0;

					// Defaults
					let CompoundEyes = 1;
					let SandVeil = 1;
					let SnowCloak = 1;
					let VictoryStar = 1;
					let Fog = 1;
					let Hustle = 1;
					let TangledFeet = 1;
					let BrightPowder = 1;
					let LaxIncense = 1;
					let WideLens = 1;
					let ZoomLens = 1;
					let MicleBerry = 1;
					let Gravity = 1;
					let Affection = 0;

					if (Generation == 1 || Generation == 2) {
						BrightPowder = 0;

						if (tarItemPath != undefined && tarItemPath.value == "BrightPowder") {
							BrightPowder = 20;
						}
			
						acc = 255*(acc/100);
						accCalc = acc*accuracyMod*evasionMod-BrightPowder;
						if (accCalc < 1) {
							accCalc = 1;
						}
						if (accCalc > 255) {
							accCalc = 255;
						}
						accCalc = (accCalc/255)*100;
					}
					if (Generation == 3) {
						if (userAbilityPath.value == "CompoundEyes") {
							CompoundEyes = 1.3;
						}
						if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(tar,"Air Lock","Ability","All","") == 0) {
							if (tarAbilityPath.value == "Sand Veil") {
								if (weatherSandstormPath.checked) {
									SandVeil = 0.8;
								}
							}
						}
						if (userAbilityPath.value == "Hustle") {
							if (moveCategory == "Physical") {
								Hustle = 0.8;
							}
						}
						if (tarItemPath.value == "BrightPowder") {
							BrightPowder = 0.9;
						}
						if (tarItemPath.value == "Lax Incense") {
							LaxIncense = 0.95;
						}

						accCalc = acc*(accuracyMod*evasionMod)*CompoundEyes*SandVeil*Hustle*BrightPowder*LaxIncense;
					}
					if (Generation == 4) {
						if (userAbilityPath.value == "CompoundEyes") {
							CompoundEyes = 1.3;
						}
						if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(tar,"Air Lock","Ability","All","") == 0) {
							if (tarAbilityPath.value == "Sand Veil") {
								if (weatherSandstormPath.checked) {
									if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
										SandVeil = 0.8;
									}
								}
							}
							if (tarAbilityPath.value == "Snow CLoak") {
								if (weatherHailPath.checked) {
									if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
										SnowCloak = 0.8;
									}
								}
							}
							if (weatherFogPath != undefined && weatherFogPath.checked) {
								Fog = 0.6;
							}
						}
						if (userAbilityPath.value == "Hustle") {
							if (moveCategory == "Physical") {
								Hustle = 0.8;
							}
						}
						if (tarAbilityPath.value == "Tangled Feet") {
							if (ConfusionPath.checked) {
								if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
									TangledFeet = 0.5;
								}
							}
						}

						if (tarItemPath.value == "BrightPowder") {
							BrightPowder = 0.9;
						}
						if (tarItemPath.value == "Lax Incense") {
							LaxIncense = 0.9;
						}
						if (userItemPath.value == "Wide Lens") {
							WideLens = 1.1;
						}
						if (userItemPath.value == "Zoom Lens") {
							ZoomLens = 1.2;
						}
						if (userItemPath.value == "Micle Berry") {
							MicleBerry = 1.2;
						}
						if (gravityPath.checked) {
							Gravity = 5/3;
						}
						accCalc = acc*(accuracyMod*evasionMod)*CompoundEyes*SandVeil*SnowCloak*Fog*Hustle*TangledFeet*BrightPowder*LaxIncense*WideLens*ZoomLens*MicleBerry*Gravity;
					}
					if (Generation >= 5) {
						if (gravityPath.checked) {
							Gravity = 6840/4096;
						}
						if (tarAbilityPath.value == "Tangled Feet") {
							if (ConfusionPath.checked) {
								if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
									TangledFeet = 0.5;
								}
							}
						}
						if (userAbilityPath.value == "Hustle") {
							if (moveCategory == "Physical") {
								Hustle = 3277/4096;
							}
						}
						if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(tar,"Air Lock","Ability","All","") == 0) {
							if (tarAbilityPath.value == "Sand Veil") {
								if (weatherSandstormPath.checked) {
									if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
										SandVeil = 0.8;
									}
								}
							}
							if (tarAbilityPath.value == "Snow Cloak") {
								if (weatherHailPath.checked) {
									if (DMGFindScenario(tar,"Mold Breaker","Ability","Enemy","") == 0) {
										SnowCloak = 0.8;
									}
								}
							}
						}

						if (DMGFindScenario(tar,"Victory Star","Ability","Ally","") > 0) {
							VictoryStar = (4506/4096)*DMGFindScenario(tar,"Victory Star","Ability","Ally","");
						}
						if (tarItemPath.value == "Lax Incense") {
							LaxIncense = 3686/4096;
						}
						if (userItemPath.value == "Wide Lens") {
							WideLens = 4505/4096;
						}
						if (userItemPath.value == "Zoom Lens") {
							ZoomLens = 4915/4096;
						}
						if (userItemPath.value == "Micle Berry") {
							MicleBerry = 4915/4096;
						}
					}

					if (Generation == 5) {
						if (tarItemPath.value == "BrightPowder") {
							BrightPowder = 3686/4096;
						}
						if (userAbilityPath.value == "CompoundEyes") {
							CompoundEyes = 5325/4096;
						}
		
						accCalc = acc*Gravity*TangledFeet*Hustle*SandVeil*SnowCloak*VictoryStar*CompoundEyes*BrightPowder*LaxIncense*WideLens*ZoomLens*(accuracyMod*evasionMod)*MicleBerry;
					}
					if (Generation >= 6) {
						if (tarItemPath.value == "Bright Powder") {
							BrightPowder = 3686/4096;
						}
						if (userAbilityPath.value == "Compound Eyes") {
							CompoundEyes = 5325/4096;
						}

						var fr = undDel(userFriendshipPath.value,0);

						if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
							var af = undDel(userAffectionPath.value,0);
							if (af >= 150) {
								Affection = 10;
							}
						}
						else if (getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
							if (fr >= 200) {
								Affection = 10;
							}
						}
						else if (Generation >= 8) {
							if (fr == 255) {
								Affection = 10;
							}
						}

						accCalc = acc*Gravity*TangledFeet*Hustle*SandVeil*SnowCloak*VictoryStar*CompoundEyes*BrightPowder*LaxIncense*WideLens*ZoomLens*(accuracyMod*evasionMod)*MicleBerry-Affection;
					}
					
					if (accCalc > 100) {
						accCalc = 100;
					}
					if (accCalc < 0) {
						accCalc = 0;
					}

					accRes.push(Math.round(accCalc)+"%");





					// Critical
					var critCalc = 0;

					var critHigh = false;
					for (var a = 0; a < finaldataMoveAdditional.length; a++) {
						if (finaldataMoveAdditional[a]["Additional"] == "High Critical-hit Ratio") {
							if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
								if (finaldataMoveAdditional[a]["Move"] == movePath.value) {
									critHigh = true;
									break;
								}		
							}
						}
					}

					var critMod = userModCriticalPath.value;
					critMod = undwsnanDel(critMod,0);

					if (critHigh) {
						critMod = parseInt(critMod)+1;
					}


					if (Generation == 1) {
						var tarspeed = parseInt(returnData(getPokémonInt(userPokémonPath.value),"Base Stats Speed","")[0]);

						if (movePath.value == "Crabhammer" || movePath.value == "Karate Chop" || movePath.value == "Razor Leaf" || movePath.value == "Slash") {
							if (critMod == 1) {
								critCalc = 4*Math.floor(tarspeed/4);
							}
							else {
								critCalc = Math.min(8*Math.floor(tarspeed/2),255);
							}
						}
						else {
							if (critMod == 1) {
								critCalc = Math.floor(tarspeed/8);
							}
							else {
								critCalc = Math.floor(tarspeed/2);
							}
						}

						critCalc = (critCalc/256)*100;
					}
					else if (Generation == 2) {
						if (critMod == 0 || critMod == undefined || critMod == "") {
							critCalc = 17/256;
						}
						else if (critMod == 1) {
							critCalc = 1/8;
						}
						else if (critMod == 2) {
							critCalc = 1/4;
						}
						else if (critMod == 3) {
							critCalc = 85/256;
						}
						else if (critMod >= 4) {
							critCalc = 1/2;
						}
						critCalc = critCalc*100;
					}
					else if (Generation >= 3 && Generation <= 5) {
						if (critMod == 0 || critMod == undefined || critMod == "") {
							critCalc = 1/16;
						}
						else if (critMod == 1) {
							critCalc = 1/8;
						}
						else if (critMod == 2) {
							critCalc = 1/4;
						}
						else if (critMod == 3) {
							critCalc = 1/3;
						}
						else if (critMod >= 4) {
							critCalc = 1/2;
						}
						critCalc = critCalc*100;
					}
					else if (Generation == 6) {
						if (critMod == 0 || critMod == undefined || critMod == "") {
							critCalc = 1/16;
						}
						else if (critMod == 1) {
							critCalc = 1/8;
						}
						else if (critMod == 2) {
							critCalc = 1/2;
						}
						else if (critMod == 3) {
							critCalc = 1;
						}
						else if (critMod >= 4) {
							critCalc = 1;
						}
						critCalc = critCalc*100;
					}
					else if (Generation >= 7) {
						if (critMod == 0 || critMod == undefined || critMod == "") {
							critCalc = 1/24;
						}
						else if (critMod == 1) {
							critCalc = 1/8;
						}
						else if (critMod == 2) {
							critCalc = 1/2;
						}
						else if (critMod == 3) {
							critCalc = 1;
						}
						else if (critMod >= 4) {
							critCalc = 1;
						}
						critCalc = critCalc*100;
					}
					if (tarAbilityPath != undefined) {
						if (tarAbilityPath.value == "Battle Armor" || tarAbilityPath.value == "Shell Armor") {
							critCalc = 0;
						}
					}
					for (var a = 0; a < finaldataMoveAdditional.length; a++) {
						if (finaldataMoveAdditional[a]["Additional"] == "Set Damage" || finaldataMoveAdditional[a]["Additional"] == "One-hit Knockout") {
							if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
								if (finaldataMoveAdditional[a]["Move"] == movePath.value) {
									critCalc = 0;
									break;
								}		
							}
						}
					}
     

					critCalc = Math.round(critCalc);
					critCalc = undwsnanDel(critCalc,0);

					critRes.push(critCalc+"%")


				}




                
				// All
				var check = true;
				if (Generation >= 3) {
					if (tarTypes.includes("Fire")) {
						check = false;
					}
				}
				if (tarAbilityPath != undefined) {
					if (tarAbilityPath.value == "Water Veil" || tarAbilityPath.value == "Water Bubble" || tarAbilityPath.value == "Comatose" || tarAbilityPath.value == "Magic Guard") {
						check = false;
					}
					if (tarAbilityPath.value == "Leaf Guard" && weatherHarshSunlightPath.checked) {
						check = false;
					}
				}
				if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
					if (DMGCheckGrounded(tar)) {
						check = false;
					}
				}

				if (check) {
					if (tarStatusBurnPath.checked) {
						var val = 0;
						if (Generation == 1) {
							val = Math.floor(tarMaxHP/16);
						}
						else {
							val = Math.floor(tarMaxHP/8);
						}

						if (tarAbilityPath != undefined && tarAbilityPath.value == "Heatproof") {
							val = val/2;
						}

						if (val <= 0) {
							val = 1;
						}

						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}


				var check = true;
				if (tarTypes.includes("Steel") || tarTypes.includes("Poison")) {
					check = false;
				}
				if (tarAbilityPath != undefined) {
					if (tarAbilityPath.value == "Immunity" || tarAbilityPath.value == "Comatose" || DMGFindScenario(tar,"Pastel Veil","Ability","Ally","") > 0 || tarAbilityPath.value == "Magic Guard") {
						check = false;
					}
					if (tarAbilityPath.value == "Leaf Guard" && weatherHarshSunlightPath.checked) {
						check = false;
					}
				}
				if (TerrainMistyPath != undefined && TerrainMistyPath.checked) {
					if (DMGCheckGrounded(tar)) {
						check = false;
					}
				}
				if (check) {
					if (tarStatusPoisonPath.checked) {
						var val = 0;
						if (Generation == 1) {
							val = Math.floor(tarMaxHP/16);
						}
						else {
							val = Math.floor(tarMaxHP/8);
						}
						if (val <= 0) {
							val = 1;
						}
					
						DMGCalcApply(allDivBase[i],val,"Damage");
					}

					if (tarStatusBadPoisonPath.value != "" && tarStatusBadPoisonPath.value != undefined && tarStatusBadPoisonPath.value != 0) {
						var val = 0;
						if (Generation == 1) {
							val = Math.floor(tarMaxHP/16);
						}
						else {
							val = Math.floor(tarMaxHP/8);
						}
						if (val <= 0) {
							val = 1;
						}
						val = tarStatusBadPoisonPath.value*val

						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}

				if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
					var check = true;

					if (tarTypes.includes("Rock") || tarTypes.includes("Ground") || tarTypes.includes("Steel")) {
						check = false;
					}
					if (tarItemPath != undefined && tarItemPath.value == "Safety Goggles") {
						check = false;
					}
					if (tarAbilityPath != undefined) {
						if (tarAbilityPath.value == "Sand Force" || tarAbilityPath.value == "Sand Rush" || tarAbilityPath.value == "Sand Veil" || tarAbilityPath.value == "Magic Guard" || tarAbilityPath.value == "Overcoat") {
							check = false;
						}
					}

					if (check) {
						var val = Math.floor(tarMaxHP/16);
	
						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}

				if (weatherHailPath != undefined && weatherHailPath.checked) {
					var check = true;

					if (tarTypes.includes("Ice")) {
						check = false;
					}
					if (tarItemPath != undefined && tarItemPath.value == "Safety Goggles") {
						check = false;
					}
					if (tarAbilityPath != undefined) {
						if (tarAbilityPath.value == "Ice Body" || tarAbilityPath.value == "Snow Cloak" || tarAbilityPath.value == "Magic Guard" || tarAbilityPath.value == "Overcoat") {
							check = false;
						}
					}

					if (check) {
						var val = Math.floor(tarMaxHP/16);
	
						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}

				
				if (tarSpikesPath != undefined && tarSpikesPath.value != "" && tarSpikesPath.value != undefined && tarSpikesPath.value != 0) {
					var rel = 1;
					if (tarSpikesPath.value == 1) {
						rel = 8;
					}
					else if (tarSpikesPath.value == 2) {
						rel = 6;
					}
					else if (tarSpikesPath.value == 3) {
						rel = 4;
					}

					if (DMGCheckGrounded(tar)) {
						var val = Math.floor(tarMaxHP/rel);
						if (val <= 0) {
							val = 1;
						}
	
						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}
				
				var check = true;
				if (tarAbilityPath != undefined && tarAbilityPath.value == "Magic Guard") {
					check = false;
				}
				if (check) {
					if (tarStealthRockPath != undefined && tarStealthRockPath.checked) {
						var typ = 1;
						var adv = returnTypeAdvantage("Rock","Attacking");
						
						if (adv[1].includes(tarTypes[0].toUpperCase())) {
							typ = typ*0.5;
						}
						if (adv[1].includes(tarTypes[1].toUpperCase())) {
							typ = typ*0.5;
						}
						if (tarTypes[2] != undefined) {
							if (adv[1].includes(tarTypes[2].toUpperCase())) {
								typ = typ*0.5;
							}
						}

						if (adv[2].includes(tarTypes[0].toUpperCase())) {
							typ = typ*2;
						}
						if (adv[2].includes(tarTypes[1].toUpperCase())) {
							typ = typ*2;
						}
						if (tarTypes[2] != undefined) {
							if (adv[2].includes(tarTypes[2].toUpperCase())) {
								typ = typ*2;
							}
						}

						var val = 0;
						if (typ == 0.25) {
							val = 32;
						}
						else if (typ == 0.5) {
							val = 16;
						}
						else if (typ == 1) {
							val = 8;
						}
						else if (typ == 2) {
							val = 4;
						}
						else if (typ == 4) {
							val = 2;
						}
						val = Math.floor(tarMaxHP/val);
						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}


				if (tarSeedDamagePath.checked) {
					var check = true;

					if (tarTypes.includes("Grass")) {
						check = false;
					}

					if (check) {
						let val = 8;

						if (Generation == 1) {
							val = 16;
						}

						val = Math.floor(tarMaxHP/val);
						if (val <= 0) {
							val = 1;
						}

						DMGCalcApply(allDivBase[i],val,"Damage");
					}
				}

				if (tarSeedHealPath.checked) {
					var check = true;

					if (check) {
						let val = 8;

						if (Generation == 1) {
							val = 16;
						}

						val = Math.floor(tarMaxHP/val);
						if (val <= 0) {
							val = 1;
						}
						let type = "Heal";

						if (tarAbilityPath != undefined && tarAbilityPath.value == "Liquid Ooze") {
							type = "Damage";
						}
						else if (tarItemPath != undefined && tarItemPath.value == "Big Root") {
							val = val*0.3;
						}

			

						DMGCalcApply(allDivBase[i],val,type);
					}
				}

		
				for (var u = 0; u < finaldataMoveAdditional.length; u++) {
					if (getApplicable(finaldataMoveAdditional[u]["Game"])) {
						if (finaldataMoveAdditional[u]["Move"] == move) {
							if (finaldataMoveAdditional[u]["Additional"] == "Healing") {
								if (finaldataMoveAdditional[u]["Value"] != undefined) {
									if (finaldataMoveAdditional[u]["Type"] == "Max HP") {
										var check = false;

										if (finaldataMoveAdditional[u]["Condition"] == undefined) {
											check = true;
										}
										else if (finaldataMoveAdditional[u]["Condition"] == "No Weather") {
											check = true;
											for (var w = 0; w < weatherInputsPath.length; w++) {
												if(weatherInputsPath[w].checked) {
													check = false;
												}
											}
										}
										else if (finaldataMoveAdditional[u]["Condition"] == "Harsh Sunlight") {
											if (weatherHarshSunlightPath.checked) {
												check = true;
											}
										}
										else if (finaldataMoveAdditional[u]["Condition"] == "Strong Winds") {
											if (weatherStrongWindsPath != undefined) {
												if (weatherStrongWindsPath.checked) {
													check = true;
												}
											}
										}
										else if (finaldataMoveAdditional[u]["Condition"] == "Sandstorm") {
											if (weatherSandstormPath.checked) {
												check = true;
											}
										}
										else if (finaldataMoveAdditional[u]["Condition"].includes("Non:")) {
											var tempStr = finaldataMoveAdditional[u]["Condition"].split("Non:")[1];
											if (tempStr.includes(",")) {
												check = true;
												var tempArr = tempStr.split(",")
												for (var r = 0; r < tempArr.length; r++) {
													for (var w = 0; w < weatherInputsPath.length; w++) {
														if (weatherInputsPath[w].parentElement.getAttribute("name") == tempArr[r]) {
															if (weatherInputsPath[w].checked) {
																check = false;
															}
														}
													}
												}
											}
											else {
												check = true;
												for (var w = 0; w < weatherInputsPath.length; w++) {
													if (weatherInputsPath[w].parentElement.getAttribute("name") == tempStr) {
														if (weatherInputsPath[w].checked) {
															check = false;
														}
													}
												}
											}
										}
										

										if (check) {
											if (finaldataMoveAdditional[u]["Target"] == undefined) {
												var heal = Math.ceil(tarMaxHP*finaldataMoveAdditional[u]["Value"]);
												DMGCalcApply(allDivBase[i],heal,"Heal");
											}
											else if (finaldataMoveAdditional[u]["Target"] == "Ally") {
												if (allDivBase[i].parentElement.querySelector(":scope > *.user") != undefined) {
													var heal = Math.ceil(tarMaxHP*finaldataMoveAdditional[u]["Value"]);
													DMGCalcApply(allDivBase[i],heal,"Heal");
												}
											}
										}
									}
									else if (finaldataMoveAdditional[u]["Type"] == "Target Attack") {
										if (finaldataMoveAdditional[u]["Condition"] == "Minus One Attack") {
											if (moveCategory == "Special") {
												if (Generation == 1) {
													var tarAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Special']")
													var modAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Special']")
												}
												else {
													var tarAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Sp. Atk']")
													var modAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Sp. Atk']")
												}
											}
											else if (moveCategory == "Physical") {
												var tarAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *:last-child > *[name='Attack']")
												var modAtk = document.querySelector("#contain > div#tool div#dmg > div span[name='"+divteam+"'] ul[name='"+divid+"'] li[name='stats'] > * > *[name='Mod'] > *[name='Attack']")
											}
											var val;
											
											var modval;
											if (modAtk.value == undefined) {
												modval = 0
											}
											else {
												modval = modAtk.value;
											}

								
											if (modval == -6) {
												val = tarAtk;
											}
											else {
												if (Generation >= 1 && Generation <= 2) {
													val = tarAtk*0.66;
												}
												else {
													val = tarAtk*0.6666666667;
												}
											}

											var heal = Math.ceil(val*finaldataMoveAdditional[u]["Value"]);
											DMGCalcApply(allDivBase[i],heal,"Heal");
										}
									}
								}
							}


							
							if (finaldataMoveAdditional[u]["Additional"] == "Recoil") {
								if (finaldataMoveAdditional[u]["Value"] != undefined) {
									var val = 0;
									if (finaldataMoveAdditional[u]["Type"] == "Move Damage") {
										val = integerResult*finaldataMoveAdditional[u]["Value"];
									}
									if (finaldataMoveAdditional[u]["Type"] == "Current HP") {
										val = parseInt(userCurrentHPPath.innerText)*finaldataMoveAdditional[u]["Value"];
									}
									if (finaldataMoveAdditional[u]["Type"] == "Max HP") {
										val = parseInt(userMaxHPPath.innerText)*finaldataMoveAdditional[u]["Value"];
									}
	
									DMGCalcApply(user,val,"Damage");
								}
							}


							if (finaldataMoveAdditional[u]["Additional"] == "Drain") {
								if (finaldataMoveAdditional[u]["Value"] != undefined) {
									var val = 0;
									var check = true;
									if (finaldataMoveAdditional[u]["Type"] == "Move Damage") {
										val = integerResult*parseFloat(finaldataMoveAdditional[u]["Value"]);
									}
									if (userItemPath != undefined && userItemPath.value == "Big Root") {
										val = val*1.3;
									}
									if (finaldataMoveAdditional[u]["Condition"] == "Asleep") {
										if (!tarStatusAsleepPath.checked) {
											check = false;
										}
									}

									val = Math.round(val);

									if (val < 1) {
										val = 1;
									}

	

									if (check) {
										if (tarAbilityPath != undefined && tarAbilityPath.value == "Liquid Ooze") {
											DMGCalcApply(user,val,"Damage");
										}
										else {
											DMGCalcApply(user,val,"Heal");
										}
									}
								}
							}
						}
					}
				}
			

	

				if (parseInt(tarHPCurrentPath.innerText) != undefined && tarHPPath.value != undefined) {
					if (!isNaN(parseInt(tarHPCurrentPath.innerText)) && !isNaN(tarHPPath.value)) {
                        let val = tarHPPath.value-parseInt(tarHPCurrentPath.innerText);
						if (val != 0) {
							dmgRes.push(val);
						}
					}
				}

			}
		}



		var dmgResult = dmgRes.join(" / ");


		var accResult;
		var check = true;
		for (var u = 0; u < accRes.length; u++) {
			if (u != 0) {
				if (accRes[u] != accRes[u-1]) {
					check = false;
					break;
				}
			}
		}
		if (check) {
			accResult = accRes[0];
		}
		else {
			accResult = accRes.join(" / ");
		}


		var critResult;
		var check = true;
		for (var u = 0; u < critRes.length; u++) {
			if (u != 0) {
				if (critRes[u] != critRes[u-1]) {
					check = false;
					break;
				}
			}
		}
		if (check) {
			critResult = critRes[0];
		}
		else {
			critResult = critRes.join(" / ");
		}

		if (accRes.length == 0) {
			accResult = "0%";
		}
		if (dmgRes.length == 0) {
			dmgResult = "0";
		}
		if (critRes.length == 0) {
			critResult = "0%";
		}

		moveDamageTextPath.innerText = dmgResult;
		moveAccuracyTextPath.innerText = accResult;
		moveCriticalTextPath.innerText = critResult;
	}





}

function DMGCalcApply(base,val,type) {

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");




    let HPMaxPath = divBase.querySelector(":scope *[name='hp'] *[name='max']");
    let HPCurrentPath = divBase.querySelector(":scope *[name='hp'] *[name='current']");
    let HPPercentagePath = divBase.querySelector(":scope *[name='hp'] *[name='percentage']");
    let HPInputPath = pokBase.querySelector(":scope *[name='hp'] > input");



    let maxHP = HPMaxPath.innerText;
    let currentHP = HPCurrentPath.innerText;
    let currentPercent = HPPercentagePath.innerText.replaceAll("%");

    val = parseInt(val);
    maxHP = parseInt(maxHP);
    currentHP = parseInt(currentHP);
    currentPercent = parseInt(currentPercent);

    let percent = Math.ceil(Math.ceil(val)/maxHP*100);
    let newHP;
    let newPercent;

    if (type == "Damage") {
        newHP = currentHP-val;
        newPercent = currentPercent-percent;
    }
    if (type == "Heal") {
        newHP = currentHP+val;
        newPercent = currentPercent+percent;
    }

    newHP = Math.min(Math.max(newHP,0),maxHP);
    newPercent = Math.min(Math.max(newPercent,0),100);

	let maxPercent = (HPInputPath.value/HPInputPath.max)*100;

	if (maxPercent > newPercent) { // DMG
		divBase.lastChild.style.background = "linear-gradient(90deg, Limegreen 0%, Limegreen "+newPercent+"%, Orangered "+newPercent+"%, Orangered "+maxPercent+"%, Darkred "+maxPercent+"%, Darkred 100%)";
	}
	else { // Heal
		let val = (newPercent-maxPercent)+maxPercent;
		divBase.lastChild.style.background = "linear-gradient(90deg, Limegreen 0%, Limegreen "+maxPercent+"%, Greenyellow "+maxPercent+"%, Greenyellow "+val+"%, Darkred "+val+"%, Darkred 100%)";
	}

    HPCurrentPath.innerText = newHP;
    HPPercentagePath.innerText = newPercent+"%";
    

}

function DMGCalcPokStats(base) {

	var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");


	// Div
    let divHPCurrentPath =  divBase.querySelector(":scope *[name='hp'] *[name='current']");
    let divHPMaxPath =  divBase.querySelector(":scope *[name='hp'] *[name='max']");

	// Pokémon
	let pokémonPath = pokBase.querySelector(":scope *[name='pokémon'] select");
	let levelPath = pokBase.querySelector(":scope *[name='level'] input[type='number']")
	let naturePath = pokBase.querySelector(":scope *[name='nature'] select");
	let friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input[type='number']");
	let burnPath = pokBase.querySelector(":scope *[name='Burned'] input");
	let paraPath = pokBase.querySelector(":scope *[name='Paralyzed'] input");
    let pokHPPath = pokBase.querySelector(":scope *[name='hp'] input[type='range']");
    let pokHPCurrentPath =  pokBase.querySelector(":scope *[name='hp'] *[name='current']");
    let pokHPMaxPath =  pokBase.querySelector(":scope *[name='hp'] *[name='max']");
	let typesPath = pokBase.querySelectorAll(":scope *[name='type'] select");

	// Stats
	let ivsPath = statsBase.querySelectorAll(":scope > *:nth-child(2) > input[type='number']:not(:first-child)");
	let evsPath = statsBase.querySelectorAll(":scope > *:nth-child(3) > input[type='number']:not(:first-child)");
	let totalPath = statsBase.querySelectorAll(":scope > *:last-child > input[type='number']:not(:first-child)");
	let modPath = statsBase.querySelectorAll(":scope > *[name='Mod'] > input[type='number']:not(:first-child)");


	// Team
	let badgesPath = teamBase.querySelectorAll(":scope *[name='Badge-Group'] li");
	let tailwindPath = teamBase.querySelector(":scope *[name='Tailwind'] input");

	// Field
	let sandstormPath = fieldBase.querySelector(":scope *[name='Sandstorm'] input");


	var types = [];
	for (var i = 0; i < typesPath.length; i++) {
		types.push(typesPath[i].value)
	}

	if (naturePath != undefined) {
		var nat = naturePath.value;
		nat = undDel(nat,"");
		statsBase.lastChild.setAttribute("name",nat);
	}


	if (pokémonPath.value != "") {
		var int = getPokémonInt(pokémonPath.value);
		for (var i = 0; i < totalPath.length; i++) {
			let stat = Stats[i];
			let base = returnData(int,"Base Stats "+stat,"")[0];

			let lvl = levelPath.value;
			let iv = ivsPath[i].value;
			let ev = evsPath[i].value;
			let nature = 1;
			let friendship = 1;

			lvl = undwsnanDel(lvl,0);
			iv = undwsnanDel(iv,0);
			ev = undwsnanDel(ev,0);

			if (Natures.length > 0) {
				nature = natureModifier(stat,naturePath.value);
			}
			if (friendshipPath != undefined) {
				if (friendshipPath.value != undefined && friendshipPath.value != "") {
					friendship = friendshipModifer(friendshipPath.value);
				}
			}

			if (lvl != 0) {
			
				let origin = parseFloat(totalPath[i].value);
				var val = parseFloat(statsCalc(stat,lvl,base,iv,ev,nature,friendship));

				totalPath[i].setAttribute("min",val);
				totalPath[i].setAttribute("max",val);
				totalPath[i].value = val;

				if (stat == "HP") {
					
					pokHPPath.setAttribute("max",val);
				
					divHPCurrentPath.innerText = pokHPPath.value;
					divHPMaxPath.innerText = val;
					pokHPCurrentPath.setAttribute("max",val)
					pokHPMaxPath.setAttribute("min",val)
					pokHPMaxPath.setAttribute("max",val)
					pokHPMaxPath.value = val;
					divHPMaxPath.style.removeProperty("background");

					if (pokHPPath.value >= origin || pokHPPath.value >= val) {
						pokHPPath.value = val;
						pokHPCurrentPath.value = val;
					}
					
					let per = (pokHPPath.value/val)*100;
					pokHPPath.style.background = "linear-gradient(to right, var(--colorBlue) 0%, var(--colorBlue) "+per+"%, var(--color_90) "+per+"%, var(--color_90) 100%)"
				
				}

					
				if (stat != "HP") {
					if (Generation >= 1 && Generation <= 2) {
						if (modPath[i].value == -6) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.25);
						}
						if (modPath[i].value == -5) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.28);
						}
						if (modPath[i].value == -4) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.33);
						}
						if (modPath[i].value == -3) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.4);
						}
						if (modPath[i].value == -2) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.5);
						}
						if (modPath[i].value == -1) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.66);
						}
						if (modPath[i].value == 0) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*1);
						}
						if (modPath[i].value == 1) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*1.5);
						}
						if (modPath[i].value == 2) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*2);
						}
						if (modPath[i].value == 3) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*2.5);
						}
						if (modPath[i].value == 4) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*3);
						}
						if (modPath[i].value == 5) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*3.5);
						}
						if (modPath[i].value == 6) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*4);
						}
					}
					else {
						if (modPath[i].value == -6) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.25);
						}
						if (modPath[i].value == -5) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.2857142857);
						}
						if (modPath[i].value == -4) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.3333333333);
						}
						if (modPath[i].value == -3) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.4);
						}
						if (modPath[i].value == -2) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.5);
						}
						if (modPath[i].value == -1) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*0.6666666667);
						}
						if (modPath[i].value == 0) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*1);
						}
						if (modPath[i].value == 1) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*1.5);
						}
						if (modPath[i].value == 2) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*2);
						}
						if (modPath[i].value == 3) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*2.5);
						}
						if (modPath[i].value == 4) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*3);
						}
						if (modPath[i].value == 5) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*3.5);
						}
						if (modPath[i].value == 6) {
							totalPath[i].value = Math.round(parseInt(totalPath[i].value)*4);
						}
					}

					if (Generation >= 1 && Generation <= 2) {
						if (totalPath[i].value > 999) {
							totalPath[i].value = 999;
						}
					}
				}


				if (tailwindPath != undefined && tailwindPath.checked) {
					if (stat == "Speed") {
						totalPath[i].value = totalPath[i].value*2;
					}
				}

				if (sandstormPath != undefined && sandstormPath.checked) {
					if (stat == "Sp. Def") {
						if (Generation >= 4) {
							if (types.includes("Rock")) {
								var newVal = val*1.5;
								totalPath[i].setAttribute("min",newVal);
								totalPath[i].setAttribute("max",newVal);
								totalPath[i].value = newVal;
							}
						}
					}
				}
				if (burnPath.checked) {
					if (Generation == 1 || Generation == 2) {
						if (stat == "Attack") {
							var newVal = val*0.5;
							totalPath[i].setAttribute("min",newVal);
							totalPath[i].setAttribute("max",newVal);
							totalPath[i].value = newVal;
						}
					}
				}
				if (paraPath.checked) {
					if (stat == "Speed") {
						var poktype = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,pokémon.value);
						var check = true;
						if (Generation >= 6) {
							if (poktype[0] == "Electric" || poktype[1] == "Electric") {
								check = false;
							}
						}
							
						if (check) {
							if (Generation >= 1 && Generation <= 6) {
								var newVal = val*0.75;
								totalPath[i].setAttribute("min",newVal);
								totalPath[i].setAttribute("max",newVal);
								totalPath[i].value = newVal;
							}
							else {
								var newVal = val*0.5;
								totalPath[i].setAttribute("min",newVal);
								totalPath[i].setAttribute("max",newVal);
								totalPath[i].value = newVal;
							}
						}
					}
				}



			}
			else {
				totalPath[i].setAttribute("min","0");
				totalPath[i].setAttribute("max","0");
				totalPath[i].value = 0;
			}


			for (var b = 0; b < badgesPath.length; b++) {
				var input = badgesPath[b].querySelector(":scope input");
				if (input.checked) {
					if (getApplicable("Red,Blue,Yellow")) {
						if (badgesPath[b].getAttribute("name") == "Boulder Badge") {
							if (totalPath[i].getAttribute("name") == "Attack") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Thunder Badge") {
							if (totalPath[i].getAttribute("name") == "Defense") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Volcano Badge") {
							if (totalPath[i].getAttribute("name") == "Special") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Soul Badge") {
							if (totalPath[i].getAttribute("name") == "Speed") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
					}
					else if (getApplicable("Gold,Silver,Crystal")) {
						if (badgesPath[b].getAttribute("name") == "Zephyr Badge") {
							if (totalPath[i].getAttribute("name") == "Attack") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Mineral Badge") {
							if (totalPath[i].getAttribute("name") == "Defense") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Glacier Badge") {
							if (totalPath[i].getAttribute("name") == "Sp. Atk") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Glacier Badge") {
							var check = true;
							if (totalPath[i].value >= 206 && totalPath[i].value <= 432) {
								check = false;
							}
							if (check) {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Plain Badge") {
							if (totalPath[i].getAttribute("name") == "Speed") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
					}
					else if (getApplicable("FireRed,LeafGreen")) {
						if (badgesPath[b].getAttribute("name") == "Boulder Badge") {
							if (totalPath[i].getAttribute("name") == "Attack") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Soul Badge") {
							if (totalPath[i].getAttribute("name") == "Defense") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Volcano Badge") {
							if (totalPath[i].getAttribute("name") == "Sp. Atk") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Volcano Badge") {
							if (totalPath[i].getAttribute("name") == "Sp. Def") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Thunder Badge") {
							if (totalPath[i].getAttribute("name") == "Speed") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
					}
					else if (getApplicable("Ruby,Sapphire,Emerald")) {
						if (badgesPath[b].getAttribute("name") == "Stone Badge") {
							if (totalPath[i].getAttribute("name") == "Attack") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Balance Badge") {
							if (totalPath[i].getAttribute("name") == "Defense") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Mind Badge") {
							if (totalPath[i].getAttribute("name") == "Sp. Atk") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Mind Badge") {
							if (totalPath[i].getAttribute("name") == "Sp. Def") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
						if (badgesPath[b].getAttribute("name") == "Dynamo Badge") {
							if (totalPath[i].getAttribute("name") == "Speed") {
								totalPath[i].value = totalPath[i].value * 1.125;
							}
						}
					}
				}
			}


			totalPath[i].setAttribute("data-nomod",totalPath[i].value);
			


		}
	}


	DMGSpeedCalc();	
}
function DMGSetInfo() {
	var sel = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='move'] > span select");
	var inp = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:first-child input");

	var def = document.querySelector("#contain > div#tool div#dmg > div");
	var user = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div[data-string].user");
	var userid = user.getAttribute("name");
	var userteam = user.parentElement.getAttribute("name");
	
    var userbase = document.querySelector("#contain > div#tool div#dmg > div span[name='"+userteam+"'] ul[name='"+userid+"']");


	var userAbilityPath = userbase.querySelector(":scope *[name='ability'] select");
	var userPokPath = userbase.querySelector(":scope *[name='pokémon'] select");
	var userItemPath = userbase.querySelector(":scope *[name='item'] select");

	var movePower = returnArrValue(finaldataMovePower,"Name_"+JSONPath_MoveName,"Power_"+JSONPath_MovePower,sel.value);
	var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,sel.value);
	var moveGroup = returnArrValue(finaldataMoveGroup,"Name_"+JSONPath_MoveName,"Group",sel.value)


    let battleSelect = document.querySelector("#contain > div#tool div#dmg div[name='options'] > div:first-child > span:first-child > select")

    let battleSizes = battleSelect.getAttribute("pokémon");
    battleSizes = undDel(battleSizes,"")
    if (battleSizes.includes(",")) {
        battleSizes = battleSizes.split(",");
    }
    else {
        battleSizes = [battleSizes]
    }
    let battleSize = 0;
    for (var u = 0; u < battleSizes.length; u++) {
        battleSize = battleSize+parseInt(battleSizes[u]);
    }


	var strikes = [1,1];

	inp.title = "";

	for (var a = 0; a < finaldataMoveAdditional.length; a++) {
		if (finaldataMoveAdditional[a]["Move"] == sel.value) {
			if (getApplicable(finaldataMoveAdditional[a]["Game"])) {
				if (finaldataMoveAdditional[a]["Additional"] == "Multi-strike" || finaldataMoveAdditional[a]["Additional"] == "Ramping" || finaldataMoveAdditional[a]["Additional"] == "Variable") {
					if (finaldataMoveAdditional[a]["Value"] != undefined) {
						if (finaldataMoveAdditional[a]["Value"].includes("-")) {
							var val1 = finaldataMoveAdditional[a]["Value"].split("-")[0];
							var val2 = finaldataMoveAdditional[a]["Value"].split("-")[1];
							strikes = [val1,val2];
						}
						else {
							strikes = [finaldataMoveAdditional[a]["Value"],finaldataMoveAdditional[a]["Value"]];
						}
					}
				}

				if (finaldataMoveAdditional[a]["Additional"] == "Multi-strike") {
					inp.title = "Amount of Hits";
				}
				else if (finaldataMoveAdditional[a]["Additional"] == "Ramping") {
					inp.title = "Consecutive Turns of Hits";
				}
			}
		}
	}


	var lis = document.querySelectorAll("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child > li");
	for (var l = 0; l < lis.length; l++) {
		lis[l].style.display = "none";
		lis[l].firstChild.checked = false;
	}

	var battlesel = document.querySelector("#contain > div#tool div#dmg div[name='options'] > div:first-child > span:first-child > select");
	var lis = document.querySelectorAll("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child > li");
	for (var l = 0; l < lis.length; l++) {
		if (parseInt(movePower) > 0) {
			if (lis[l].getAttribute("name") == "Semi-Invulnerable Flight") {
				if (sel.value == "Twister" || sel.value == "Gust") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Semi-Invulnerable Dig") {
				if (sel.value == "Earthquake" || sel.value == "Magnitude") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Semi-Invulnerable Dive") {
				if (sel.value == "Surf" || sel.value == "Whirlpool") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Switching") {
				if (sel.value == "Pursuit") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Minimize") {
				var tempOtherMoves = [];
				if (Generation == 2) {
					tempOtherMoves = ["Stomp"];
				}
				else if (Generation == 3) {
					tempOtherMoves = ["Stomp","Astonish","Extrasensory","Needle Arm"];
				}
				else if (Generation == 4) {
					tempOtherMoves = ["Stomp"];
				}
				else if (Generation == 5) {
					tempOtherMoves = ["Stomp","Steamroller"];
				}
				else if (Generation == 6) {
					tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Shadow Force","Steamroller","Heat Crash","Phantom Force","Flying Press"];
				}
				else if (Generation == 7) {
					tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Steamroller","Heat Crash","Heavy Slam","Flying Press","Malicious Moonsault","Double Iron Bash"];
				}
				else if (Generation == 8) {
					tempOtherMoves = ["Body Slam","Stomp","Dragon Rush","Heat Crash","Heavy Slam","Flying Press"];
				}

				if (tempOtherMoves.includes(sel.value)) {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Charge") {
				if (moveType == "Electric") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Me First") {
				var uncallable = [];
				if (Generation == 4 || Generation == 5) {
					uncallable = ["Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
				}
				else if (Generation == 6) {
					uncallable = ["Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
				}
				else if (Generation == 7) {
					uncallable = ["Beak Blast","Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Shell Trap","Struggle","Thief"]
				}
				if (!uncallable.includes(sel.value)) {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Flash Fire") {
				if (userAbilityPath != undefined && userAbilityPath.value == "Flash Fire") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Tar Shot") {
				if (moveType == "Fire") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Defense Curl") {
				if (sel.value == "Rollout") {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Helping Hand") {
				if (battleSize > 2) {
					lis[l].style.removeProperty("display");
				}
			}
			else if (lis[l].getAttribute("name") == "Z-Move") {
				if (sel.value != "Struggle") {
					var check1 = false;
					var check2 = false;
					var check3 = false;
				
					for (var r = 0; r < finaldataMoveCall.length; r++) {
						if (finaldataMoveCall[r]["Call"] == sel.value) {
							if (finaldataMoveCall[r]["Type"] == "Z-Move") {
								if (finaldataMoveCall[r]["Pokémon"] != undefined) {
									if (finaldataMoveCall[r]["Pokémon"].includes(",")) {
										var vals = finaldataMoveCall[r]["Pokémon"].split(",");
										for (var u = 0; u < vals.length; u++) {
											if (vals[u] == userPokPath.value) {
												check1 = true;
											}
										}
									}
									else {
										if (finaldataMoveCall[r]["Pokémon"] == userPokPath.value) {
											check1 = true;
										}
									}
								}
								if (finaldataMoveCall[r]["Item"] != undefined) {
									if (finaldataMoveCall[r]["Item"] == userItemPath.value) {
										check2 = true;
									}
								}
							}
						}
					}



					if (userItemPath.value.includes(" Z") && userItemPath.value.includes(moveType.replace(/.$/, ''))) {
						check3 = true;
					}
					

					if (check1 && check2 || check3) {
						lis[l].style.removeProperty("display");
					}
				}
			}
			else if (lis[l].getAttribute("name") == "Max Move") {
				lis[l].style.removeProperty("display");
			}
		}
	}






	inp.setAttribute("min",strikes[0]);
	inp.setAttribute("max",strikes[1]);
	inp.value = strikes[0];


	if (strikes[0] == strikes[1]) {
		inp.setAttribute("disabled","")
	}
	else {
		inp.removeAttribute("disabled");
	}

	sel.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,sel.value)+")";

	var moveRange = returnArrValue(finaldataMoveRange,"Name_"+JSONPath_MoveName,"Range",sel.value);


	if (moveRange != undefined) {
		def.setAttribute("data-range",moveRange)
	}
	else {
		def.setAttribute("data-range","")
	}


	

	DMGSetPossible();
}
function DMGSetChange(base) {

	var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");


	var pokImgPath = divBase.querySelector(":scope *[name='img']");
	var pokItemPath = divBase.querySelector(":scope *[name='item']");
	var pokNamePath = divBase.querySelector(":scope *[name='name'] > *");
	var pokMovesPath = divBase.querySelectorAll(":scope *[name='moves'] > *");
	
	var pokPath = pokBase.querySelector(":scope *[name='pokémon'] select");
	var formPath = pokBase.querySelector(":scope *[name='pokémon'] > span input");
	var abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
	var genderPath = pokBase.querySelector(":scope *[name='gender'] select");
	var itemPath = pokBase.querySelector(":scope *[name='item'] select");
	var friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
	var naturePath = pokBase.querySelector(":scope *[name='nature'] select");
	var levelPath = pokBase.querySelector(":scope *[name='level'] input");
	var movesPath = pokBase.querySelectorAll(":scope *[name='moves'] select");

	var ivPath = statsBase.querySelectorAll(":scope *[name='IV'] > input:not(:first-child)");
	var evPath = statsBase.querySelectorAll(":scope *[name='EV'] > input:not(:first-child)");
	var avPath = statsBase.querySelectorAll(":scope *[name='AV'] > input:not(:first-child)");

	var dataString = dataStringToObj(divBase.getAttribute("data-string"));


	divBase.lastChild.title = "";

	pokImgPath.removeAttribute("src");
	pokImgPath.removeAttribute("title");
	if (HeldItem) {
		pokItemPath.removeAttribute("src");
		pokItemPath.removeAttribute("title");
	}
	pokNamePath.innerText = "";

	for(var i = 0; i < pokMovesPath.length; i++) {
		pokMovesPath[i].firstChild.innerText = "";
		pokMovesPath[i].firstChild.removeAttribute("name");
		pokMovesPath[i].removeAttribute("data-category");
	}

	

	var itPath = ImageTypes[0]["path"];
	var itCategory = ImageTypes[0]["category"];
	var itAngle = ImageTypes[0]["angle"];
	var itType = ImageTypes[0]["type"];
	var itExt = ImageTypes[0]["extension"];


	if (dataString != undefined) {
		let int;
		let pokémon;
		let nature;
		let level;
		let gender;
		let friendship;
		let ability;
		let item;
		let iv;
		let ev;
		let av;
		let moves;

		
		pokémon = dataString["pok"];
		int = getPokémonInt(pokémon);
		
		if (dataString["na"] != undefined) {
			nature = dataString["na"];
		}
		if (dataString["lv"] != undefined) {
			level = dataString["lv"];
		}
		if (dataString["ge"] != undefined) {
			gender = dataString["ge"];
		}
		if (dataString["fr"] != undefined) {
			friendship = dataString["fr"];
		}
		if (dataString["ab"] != undefined) {
			if (dataString["ab"] != "Primary" && dataString["ab"] != "Secondary" && dataString["ab"] != "Hidden") {
				dataString["ab"] = getAbilityPosition(int,dataString["ab"]);
			}
			ability = dataString["ab"];
		}
		if (dataString["it"] != undefined) {
			item = dataString["it"];
		}
		if (dataString["mo"] != undefined) {
			moves = dataString["mo"];
		}
		if (dataString["iv"] != undefined) {
			iv = dataString["iv"];
		}
		if (dataString["ev"] != undefined) {
			ev = dataString["ev"];
		}
		if (dataString["av"] != undefined) {
			av = dataString["av"];
		}


		if (int != undefined) {
			pokBase.classList.add("active");
			statsBase.classList.add("active");
			divBase.classList.add("active");

			let pokName = getPokémonName(int,"Alt");
			if (formPath != undefined && formPath.checked) {
				pokName = getPokémonName(int);
			}

			pokImgPath.src = "./media/Images/Pokémon/"+itCategory+"/"+itExt+"/"+itType+"/"+itAngle+"/"+itPath+"/"+getPokémonMediaPath(int,"Battle")+"."+itExt;

			var titles = [];
			if (level != undefined) {
				titles.push("Lv. "+level);
			}
			titles.push(getPokémonName(int));
			
			

			pokNamePath.innerText = titles.join(" • ");
			pokPath.value = pokName;
			

			if (Natures.length > 0) {
				statsBase.querySelector(":scope > span:last-child").removeAttribute("name");
				if (nature != undefined) {
					naturePath.value = nature;
					statsBase.querySelector(":scope > span:last-child").setAttribute("name",naturePath.value);
				}
			}
			if (level != undefined) {
				levelPath.value = level;
			}
			
			
			if (Gender) {
				if (gender != undefined) {
					genderPath.value = gender;
					if (genderPath.value == "♂") {
						genderPath.style.color = "blue";
					}
					else if (genderPath.value == "♀") {
						genderPath.style.color = "red";
					}
				}
			}
			if (Friendship) {
				if (friendship != undefined) {
					friendshipPath.value = friendship;
				}
			}
			if (Ability.length > 0) {
				abilityPath.title = "";
				if (ability != undefined) {
					var el = abilityPath.querySelector(":scope > *[name='"+ability+"']");

					if (el != undefined) {
						var val = el.getAttribute("value")
						if (val != undefined) {
							abilityPath.value = val;

							let abd = returnAppArrData(finaldataAbilityDescription,"Ability",abilityPath.value)[0];
							abd = undDel(abd,{Description:""});
							abd = abd["Description"];
							abilityPath.title = abd;
						}
					}
				}
			}

			if (HeldItem) {
				if (item != undefined) {
					itemPath.value = item;

					let itd = returnAppArrData(finaldataItemsDescription,"Item",itemPath.value)[0];
					itd = undDel(itd,{Description:""});
					itd = itd["Description"];
					pokItemPath.title = itd;


					if (itemPath.value != undefined && itemPath.value != "") {
						pokItemPath.src = "./media/Images/Item/Bag/"+MEDIAPath_Item_Bag+"/"+getItemIcon(itemPath.value)+".png";
					}
				}
			}

			if (moves != undefined) {
				var usedm = [];
				if (moves.includes(",")) {
					moves = moves.split(",");
					if (moves.length == movesPath.length) {
						for(var v = 0; v < movesPath.length; v++) {
							if(moves[v] != undefined && moves[v] != "") {
								if (!usedm.includes(moves[v])) {
									movesPath[v].value = moves[v];
									var val = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,moves[v])
									if (val != undefined) {
										movesPath[v].style.color = "var(--type"+val+")";
									}
									usedm.push(moves[v])


									let movd = formatMoveData(movesPath[v].value);
									movd = undDel(movd,"");
									movesPath[v].title = movd;
								}
							}
						}
					}
					if (moves.length == pokMovesPath.length) {
						for(var v = 0; v < pokMovesPath.length; v++) {
							var val = movesPath[v].value;
							if(val != undefined && !val.includes("#") && val != "") {
								let category = returnArrValue(finaldataMoveCategory,"Name_"+JSONPath_MoveName,"Category_"+JSONPath_MoveCategory,val);
								
								pokMovesPath[v].firstChild.innerText = val;
								pokMovesPath[v].firstChild.setAttribute("name",val);
								pokMovesPath[v].setAttribute("data-category",category);


								let movd = formatMoveData(pokMovesPath[v].firstChild.innerText);
								movd = undDel(movd,"");
								pokMovesPath[v].firstChild.title = movd;
							}
						}
					}
				}
			}
			

			if (iv != undefined) {
				if (iv.includes(",")) {
					var ivs = iv.split(",");
					if (ivs.length == ivPath.length) {
						for(var v = 0; v < ivs.length; v++) {
							ivPath[v].value = ivs[v];
						}
					}
				}
			}

			if (ev != undefined) {
				if (ev.includes(",")) {
					var evs = ev.split(",");
					if (evs.length == evPath.length) {
						for(var v = 0; v < evs.length; v++) {
							evPath[v].value = evs[v];
						}
					}
				}
			}

			if (av != undefined) {
				if (av.includes(",")) {
					var avs = av.split(",");
					if (avs.length == avPath.length) {
						for(var v = 0; v < avs.length; v++) {
							avPath[v].value = avs[v];
						}
					}
				}
			}

		}
		else {
			pokBase.classList.remove("active");
			statsBase.classList.remove("active");
			divBase.classList.remove("active");
		}
	}


	var uls = document.querySelectorAll("#contain > div#tool div#dmg > div ul");
	for (var q = 0; q < uls.length; q++) {
		var mov = uls[q].querySelectorAll(":scope *[name='move'] select");
		uniqueValueSelect(mov);
	}

	divBase.lastChild.title = dataStringTitle(divBase.getAttribute("data-string"));;

}
function DMGSetActive(val) {
	var val;

	var x = findUpTag(event.target,"DIV");
	var all = x.parentElement.parentElement.querySelectorAll(":scope div[data-string]")			
	
	for(var a = 0; a < all.length; a++) {
		all[a].classList.remove(val);
	}
	x.classList.add(val);

	DMGSetPossible();
	DMGCalcStart();

}
function DMGSetPossible() {


	var tars = [];
	var divWrap = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div");

	var allBase = document.querySelectorAll("#contain > div#tool div#dmg > div ol ul[name]");

	var old = divWrap.querySelectorAll(":scope > *[name] > *[name]");
	for(var a = 0; a < old.length; a++) {
		old[a].classList.remove("viable");
	}

	var movePath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='move'] > span select")
	var moveType = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movePath.value);
	var moveRange = returnArrValue(finaldataMoveRange,"Name_"+JSONPath_MoveName,"Range",movePath.value);

	var user = divWrap.querySelectorAll(":scope > *[name] > *[name].user");
	var userTemp = divWrap.querySelectorAll(":scope > *[name='team 1'] > *[name]");
	
	if (user.length == 0) {
		if (userTemp.length > 0) {
			userTemp[0].classList.add("user");
		}
	}

	if (user.length > 1) {
		for(var a = 0; a < user.length; a++) {
			user[a].classList.remove("user");
		}
		usertemp[0].classList.add("user");
	}

	user = divWrap.querySelector(":scope > *[name] > *[name].user");

	var team = user.parentElement.getAttribute("name");
	var id = undefined;
	var nbs = user.parentElement.querySelectorAll(":scope > *");
	for(var a = 0; a < nbs.length; a++) {
		if (nbs[a] == user) {
			id = a;
			break;
		}
	}



	var idPrevious = parseInt(id)-1;
	var idNext = parseInt(id)+1;

	var adjacent = [];

	var allies = divWrap.querySelectorAll(":scope > *[name='"+team+"'] > *[name]:not([name='"+id+"'])");
	var enemies = divWrap.querySelectorAll(":scope > *[name]:not([name='"+team+"']) > *[name]");
	var all = divWrap.querySelectorAll(":scope > *[name] > *[name]");



	var adjThis = user.parentElement.querySelectorAll(":scope > *[name]");
	for(var a = 0; a < adjThis.length; a++) {
		if (a == idNext || a == idPrevious) {
			adjacent.push(adjThis[a])
		}
	}

	if (user.parentElement.previousElementSibling != undefined) {
		var adjLeft = user.parentElement.previousElementSibling.querySelectorAll(":scope > *[name]");
		for(var a = 0; a < adjLeft.length; a++) {
			if (a == id || a == idNext || a == idPrevious) {
				adjacent.push(adjLeft[a])
			}
		}
	}
	
	if (user.parentElement.nextElementSibling != undefined) {
		var adjRight = user.parentElement.nextElementSibling.querySelectorAll(":scope > *[name]");
		for(var a = 0; a < adjRight.length; a++) {
			if (a == id || a == idNext || a == idPrevious) {
				adjacent.push(adjRight[a])
			}
		}
	}

	if (moveRange == "May affect anyone adjacent to the user") {
		for(var a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}
	
	if (moveRange == "May randomly affect anyone adjacent to the user") {
		for(var a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}


	if (moveRange == "Affects all adjacent foes, but not allies") {
		for(var a = 0; a < adjacent.length; a++) {
			var check = true;
			for(var al = 0; al < allies.length; al++) {
				if (allies[al] == adjacent[a]) {
					check = false;
					break;
				}
			}
			if (check) {
				tars.push(adjacent[a])
			}
		}
	}


	if (moveRange == "Affects the user") {
		tars.push(user)
	}

	if (moveRange == "May affect anyone but the user") {
		for(var a = 0; a < all.length; a++) {
			var check = true;


			if (all[a] == user) {
				check = false;
			}
			
			if (check) {
				tars.push(all[a])
			}
		}
	}


	if (moveRange == "Affects the user and all allies") {
		tars.push(user)
		for(var a = 0; a < allies.length; a++) {
			tars.push(allies[a])
		}
	}



	if (moveRange == "Affects all Pokémon adjacent to the user") {
		for(var a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}

	if (moveRange == "Affects all Pokémon on the field") {
		for(var a = 0; a < all.length; a++) {
			tars.push(all[a])
		}
	}

	if (moveRange == "Affects all foes") {
		for(var a = 0; a < enemies.length; a++) {
			tars.push(enemies[a])
		}
	}



	if (moveRange == "Affects an adjacent ally") {
		for(var a = 0; a < adjacent.length; a++) {
			var check = false;
			for(var al = 0; al < allies.length; al++) {
				if (allies[al] == adjacent[a]) {
					check = true;
					break;
				}
			}
			if (check) {
				tars.push(adjacent[a])
			}
		}
	}
	if (moveRange == "Affects an adjacent ally") {
		for(var a = 0; a < adjacent.length; a++) {
			var check = false;
			for(var al = 0; al < allies.length; al++) {
				if (allies[al] == adjacent[a]) {
					check = true;
					break;
				}
			}
			if (check) {
				tars.push(adjacent[a])
			}
		}
		tars.push(user)
	}

	if (moveRange == "May affect any adjacent foe, but not allies") {
		for(var a = 0; a < adjacent.length; a++) {
			var check = true;
			for(var al = 0; al < allies.length; al++) {
				if (allies[al] == adjacent[a]) {
					check = false;
					break;
				}
			}
			if (check) {
				tars.push(adjacent[a])
			}
		}
	}


	if (moveRange == "Affects all allies") {
		for(var a = 0; a < allies.length; a++) {
			tars.push(allies[a])
		}
	}



	if (moveRange != undefined) {
		if (moveRange.includes(" ")) {
			if (moveRange.split(" ")[0] == "Affects") {
				set = true;
			}
			else {
				set = false;
			}
		}
	}



	if (moveType == "Electric") {
		var check = [];
		for(var a = 0; a < allBase.length; a++) {
			var ab = allBase[a].querySelector(":scope *[name='ability'] select")
			if (ab != undefined && ab.value == "Lightning Rod") {
				check.push(allBase[a]);
			}
		}
		if (check.length > 0) {
			tars = check;
		}
	}


	
	for(var a = 0; a < tars.length; a++) {
		tars[a].classList.add("viable");
	}

	var check = false;
	var check2 = true;
	for(var a = 0; a < all.length; a++) {
		if (all[a].classList.contains("target") && !all[a].classList.contains("viable")) {
			check = true;
		}
		if (all[a].classList.contains("target")) {
			check2 = false;
		}
	}
	if (check2) {
		check = true;
	}

	if (check) {
		for(var a = 0; a < all.length; a++) {
			all[a].classList.remove("target");
		}

		var target = divWrap.querySelectorAll(":scope > *[name] > *[name].target");
		var targets = divWrap.querySelectorAll(":scope > *[name] > *[name].viable");

		if (target.length == 0) {
			if (targets.length > 1) {
				for(var a = 0; a < targets.length; a++) {
					if (targets[a] != user) {
						if (targets[a].parentElement.getAttribute("name") != "team 1") {
							targets[a].classList.add("target");
							break;
						}
					}
				}
			}
			else if (targets.length > 0) {
				targets[0].classList.add("target");
			}
		}
	}

}
function DMGPokSpecific(base) {
    var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");




	let pokémonPath = pokBase.querySelector(":scope *[name='pokémon'] select");
	let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
	let genderPath = pokBase.querySelector(":scope *[name='gender'] select");
	let itemPath = pokBase.querySelector(":scope *[name='item'] select");
	let friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
	let typesPath = pokBase.querySelectorAll(":scope *[name='type'] select");

	var pokNameVal = dataStringToObj(divBase.getAttribute("data-string"));

	let pokHPPath = pokBase.querySelector(":scope *[name='hp'] input[type='range']");
	let pokCurrentHPPath = pokBase.querySelector(":scope *[name='hp'] *[name='current']");
	let pokMaxHPPath = pokBase.querySelector(":scope *[name='hp'] *[name='max']");




	var int;

	if (pokNameVal != undefined) {
		if (pokNameVal["pok"] != undefined) {
			int = getPokémonInt(pokNameVal["pok"]);
		}
	}
	if (int == undefined) {
		return;
	}




	if (pokNameVal["ab"] != undefined && pokNameVal["ab"] != "") {
		if (pokNameVal["ab"] != "Primary" && pokNameVal["ab"] != "Secondary" && pokNameVal["ab"] != "Hidden") {
			let val = "ab:"+pokNameVal["ab"];
			let pos = getAbilityPosition(int,pokNameVal["ab"]);

			tar.setAttribute("data-string",tar.getAttribute("data-string").replaceAll(val,"ab:"+pos))
		}
	}
	


	var opts = pokBase.querySelectorAll(":scope li[name='type'] select option");
	for (var o = 0; o < opts.length; o++) {
		opts[o].style.removeProperty("display");
	}
	var sel3 = pokBase.querySelector(":scope li[name='type'] select:nth-child(3)");
	if (sel3 != undefined) {
		sel3.innerHTML = "<option value=''></option>";
		sel3.style.removeProperty("background");
		sel3.classList.add("disable");
		var tc = pokBase.querySelectorAll(":scope li[name='Type Change-Group'] input");
		for (var t = 0; t < tc.length; t++) {
			tc[t].checked = false;
		}
	}

	var type1 = returnData(getPokémonInt(pokémonPath.value),"Type","")[0];
	var type2 = returnData(getPokémonInt(pokémonPath.value),"Type","")[1];

	if (type1 != undefined) {
		typesPath[0].value = type1;
		typesPath[0].style.background = "var(--type"+type1+")";
	}
	else {
		typesPath[0].value = "";
		typesPath[0].style.removeProperty("background");
	}
	if (type2 != undefined) {
		typesPath[1].value = type2;
		typesPath[1].style.background = "var(--type"+type2+")";
	}
	else {
		typesPath[1].value = "";
		typesPath[1].style.removeProperty("background");
	}



	var ex = pokBase.querySelector(":scope figure[name='export']")
	var evoFamily = getEvolutionFamily(int);
	if (evoFamily.length > 1) {
		ex.querySelector(":scope span[name='Change Evolution']").style.removeProperty("display");
	}
	else {
		ex.querySelector(":scope span[name='Change Evolution']").style.display = "none";
	}

	var pokForms = getPokémonForm(int);
	if (pokForms.length > 1) {
		ex.querySelector(":scope span[name='Change Form']").style.removeProperty("display");
	}
	else {
		ex.querySelector(":scope span[name='Change Form']").style.display = "none";
	}


	if (Friendship) {
		if (friendshipPath.value != 0) {
			var basefriendship = returnData(int,"Base Friendship","")[0];
			if (basefriendship != undefined) {
				friendshipPath.value = basefriendship;
			}
		}
	}


	if (Ability.length > 0) {
		var abilities = returnData(int,"Ability","undefined");
		
		abilityPath.innerHTML = "";
		abilityPath.title = "";

		for (var q = 0; q < abilities.length; q++) {
			if (abilities[q] != undefined) {
				var option = document.createElement("option");
				option.innerText = abilities[q];
				option.value = abilities[q];
				option.setAttribute("name",getAbilityPosition(int,abilities[q]));
				abilityPath.appendChild(option)
			}
		}

		let abd = returnAppArrData(finaldataAbilityDescription,"Ability",abilityPath.value)[0];
		abd = undDel(abd,{Description:""});
		abd = abd["Description"];
		abilityPath.title = abd;

	}
	
	if (Gender) {
		var genders = [];

		var tempgender = returnData(int,"Gender Ratio","undefined");
		if (getPokémonName(int).includes("Male")) {
			genders = ["♂"];
		}
		else if (getPokémonName(int).includes("Female")) {
			genders = ["♀"];
		}
		else {
			if (tempgender[0] == "0" && tempgender[1] == "0") {
				genders = ["☿"];
			}
			else if (tempgender[0] == "0") {
				genders = ["♀"];
			}
			else if (tempgender[1] == "0") {
				genders = ["♂"];
			}
			else {
				genders = ["♂","♀"];
			}
		}

		if (genders[0] != "") {
			if (genders.length > 1) {
				genders.unshift("");
			}
		}

		var storeGenderVal = genderPath.value.toString();

		genderPath.innerHTML = "";


		for (var q = 0; q < genders.length; q++) {
			var option = document.createElement("option");
			option.innerText = genders[q];
			option.value = genders[q];
			option.setAttribute("name",genders[q]);
			genderPath.appendChild(option)
		}
		if (genders.includes(storeGenderVal)) {
			genderPath.value = storeGenderVal;
		}
		else {
			genderPath.value = genderPath.firstChild.value;
		}
	}


	if (HeldItem) {
		var result = returnSortedItemsList(int);
		var storeItemVal = itemPath.value.toString();

		itemPath.innerHTML = "";

		var items = [];
		if (result.length > 1) {
			items.unshift("");
		}
		for (var q = 0; q < result.length; q++) {
			items.push(result[q]["Item"])
		}

		for (var q = 0; q < items.length; q++) {
			var option = document.createElement("option");
			option.innerText = items[q];
			option.value = items[q];
			itemPath.appendChild(option);

			let itd = returnAppArrData(finaldataItemsDescription,"Item",items[q])[0];
			itd = undDel(itd,{Description:""});
			itd = itd["Description"];
			option.title = itd;
		}
		if (items.includes(storeItemVal)) {
			itemPath.value = storeItemVal;
		}
		else {
			itemPath.value = itemPath.firstChild.value;
		}

	
		let itd = returnAppArrData(finaldataItemsDescription,"Item",itemPath.value)[0];
		itd = undDel(itd,{Description:""});
		itd = itd["Description"];
		itemPath.title = itd;

	}

}
function DMGClearData(base) {
    var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");


    var pokPath = pokBase.querySelector(":scope *[name='pokémon'] select");
    var lvlPath = pokBase.querySelector(":scope *[name='level'] input");
    var typesPath = pokBase.querySelectorAll(":scope *[name='type'] select");
    var abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
    var genderPath = pokBase.querySelector(":scope *[name='gender'] select");
    var itemPath = pokBase.querySelector(":scope *[name='item'] select");
    var friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
    var naturePath = pokBase.querySelector(":scope *[name='nature'] select");
    var movesPath = pokBase.querySelectorAll(":scope *[name='moves'] select");
    
    var ivsPath = statsBase.querySelectorAll(":scope *[name='IV'] input:not(:first-child)");
    var evsPath = statsBase.querySelectorAll(":scope *[name='EV'] input:not(:first-child)");
    var avsPath = statsBase.querySelectorAll(":scope *[name='AV'] input:not(:first-child)");
    var totalPath = statsBase.querySelectorAll(":scope > *:last-child input:not(:first-child)");

    pokPath.value = pokPath.firstChild.value;
    lvlPath.value = lvlPath.getAttribute("min");
    if (abilityPath != undefined) {
        abilityPath.innerHTML = "";
        abilityPath.title = "";
    }
    if (genderPath != undefined) {
        genderPath.value = "";
    }
    if (itemPath != undefined) {
        itemPath.value = "";
    }
    if (friendshipPath != undefined) {
        friendshipPath.value = friendshipPath.getAttribute("min");
    }
    if (naturePath != undefined) {
        naturePath.value = "";
        totalPath[0].parentElement.removeAttribute("name");
    }

    for(var e = 0; e < typesPath.length; e++) {
        typesPath[e].style.removeProperty("background");
        typesPath[e].value = "";
    }

    for(var e = 0; e < movesPath.length; e++) {
        movesPath[e].style.removeProperty("color");
        movesPath[e].value = movesPath[e].firstChild.value;
    }
    for(var e = 0; e < ivsPath.length; e++) {
        ivsPath[e].value = "";
    }
    for(var e = 0; e < evsPath.length; e++) {
        evsPath[e].value = "";
    }
    for(var e = 0; e < avsPath.length; e++) {
        avsPath[e].value = "";
    }
    for(var e = 0; e < totalPath.length; e++) {
        totalPath[e].value = 0;
    }


    divBase.setAttribute("data-string","");
    pokBase.classList.remove("active");
	divBase.classList.remove("active");
    statsBase.classList.remove("active");


	DMGBoxActiveSet();
}
function DMGSaveData(base) {
    var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");


    let pokPath = pokBase.querySelector(":scope *[name='pokémon'] select");
	let formPath = pokBase.querySelector(":scope *[name='pokémon'] > span input");
    let lvlPath = pokBase.querySelector(":scope *[name='level'] input");
    let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
    let genderPath = pokBase.querySelector(":scope *[name='gender'] select");
    let itemPath = pokBase.querySelector(":scope *[name='item'] select");
    let friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
    let naturePath = pokBase.querySelector(":scope *[name='nature'] select");
    let movesPath = pokBase.querySelectorAll(":scope *[name='moves'] select");

    let ivsPath = statsBase.querySelectorAll(":scope *[name='IV'] input:not(:first-child)");
    let evsPath = statsBase.querySelectorAll(":scope *[name='EV'] input:not(:first-child)");

    divBase.lastChild.title = "";

    let datas = divBase.getAttribute("data-string");
    let stringObj = dataStringToObj(datas);

    if (pokPath.value == undefined || pokPath.value == "") {
        return;
    }

    let int = getPokémonInt(pokPath.value);

    if (int == undefined) {
        return;
    }

	let pokName = getPokémonName(int,"Alt");
	if (formPath != undefined && formPath.checked) {
		pokName = getPokémonName(int,"Alt");
	}

	stringObj["pok"] = pokName;


    if (lvlPath.value != undefined && lvlPath.value != "") {
        stringObj["lv"] = lvlPath.value;
    }
    else {
        stringObj["lv"] = "";
    }
    if (abilityPath != undefined && abilityPath.value != undefined && abilityPath.value != "") {
        let pos = getAbilityPosition(int,abilityPath.value);
        stringObj["ab"] = pos;
    }
    else {
        stringObj["ab"] = "";
    }
    if (genderPath != undefined && genderPath.value != undefined && genderPath.value != "") {
        stringObj["ge"] = genderPath.value;
    }
    else {
        stringObj["ge"] = "";
    }
    if (itemPath != undefined && itemPath.value != undefined && itemPath.value != "") {
        stringObj["it"] = itemPath.value;
    }
    else {
        stringObj["it"] = "";
    }
    if (friendshipPath != undefined && friendshipPath.value != undefined && friendshipPath.value != "" && friendshipPath.value != 0) {
        stringObj["fr"] = friendshipPath.value;
    }
    else {
        stringObj["fr"] = "";
    }
    if (naturePath != undefined && naturePath.value != undefined && naturePath.value != "") {
        stringObj["na"] = naturePath.value;
    }
    else {
        stringObj["na"] = "";
    }


    var moves = [];
    for (var e = 0; e < movesPath.length; e++) {
        if (movesPath[e].value.includes("#")) {
            moves.push("");
        }
        else {
            moves.push(movesPath[e].value)
        }
    }
    stringObj["mo"] = moves.join(",");

    var ivs = [];
    for (var e = 0; e < ivsPath.length; e++) {
        ivs.push(ivsPath[e].value)
    }
    stringObj["iv"] = ivs.join(",");

    var evs = [];
    for (var e = 0; e < evsPath.length; e++) {
        evs.push(evsPath[e].value)
    }
    stringObj["ev"] = evs.join(",");

    var keys = Object.keys(stringObj)
    var tempArr = [];
    for (var e = 0; e < keys.length; e++) {
        var val1 = keys[e];
        var val2 = stringObj[keys[e]];
        if (val2 != "") {
            if (val2.replaceAll(",","") != "") {
                tempArr.push(val1+":"+val2)
            }
        }
    }

    divBase.lastChild.title = dataStringTitle(divBase.getAttribute("data-string"));
    divBase.setAttribute("data-string",tempArr.join("|"))




	var tars = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span > div[data-string]");
	var tarsint = 0;
	for (var t = 0; t < tars.length; t++) {
		var val = tars[t].getAttribute("data-string");
		if (val.includes("pok:") && !val.includes("pok:|") && !val.includes("pok:\n")) {
			tarsint = tarsint+1;
		}
	}
	document.querySelector("#contain > div#tool div#dmg > div").setAttribute("data-count",tarsint);

	DMGSetChange(base);
	DMGBoxActiveSet();
}
function DMGMatchPosition() {
	var teams = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name]");
	var poks = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div[data-string]");



    let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] > span[name] > div[data-string]");
    let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] > span[name] > ul[name]");
	let pokTopBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] > span[name]");
    let teamBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='team'] > span[name]");
    let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] > span[name] > ul[name]");
	let statsTopBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] > span[name]");
    let partyBases = document.querySelectorAll("#contain > div#tool div#dmg span[name='party'] > span[name]");


	var selects = document.querySelectorAll("#contain > div#tool div#dmg div[name='options'] > div:first-child > span > select");


	var order1 = [];
	for(var p = 0; p < teams.length; p++) {
		order1.push(teams[p].getAttribute("name"));
	}
	for(var o = 0; o < order1.length; o++) {
		for(var p = 0; p < pokTopBases.length; p++) {
			if (pokTopBases[p].getAttribute("name") == order1[o]) {
				pokTopBases[p].parentElement.appendChild(pokTopBases[p]);
			}
		}
		for(var p = 0; p < teamBases.length; p++) {
			if (teamBases[p].getAttribute("name") == order1[o]) {
				teamBases[p].parentElement.appendChild(teamBases[p]);
			}
		}
		for(var p = 0; p < statsTopBases.length; p++) {
			if (statsTopBases[p].getAttribute("name") == order1[o]) {
				statsTopBases[p].parentElement.appendChild(statsTopBases[p]);
			}
		}
		for(var p = 0; p < partyBases.length; p++) {
			if (partyBases[p].getAttribute("name") == order1[o]) {
				partyBases[p].parentElement.appendChild(partyBases[p]);
			}
		}
		for(var p = 0; p < selects.length; p++) {
			if (selects[p].getAttribute("name") == order1[o]) {
				selects[p].parentElement.appendChild(selects[p]);
			}
		}
	}

	var order2 = [];
	for(var p = 0; p < poks.length; p++) {
		order2.push(poks[p].parentElement.getAttribute("name")+"-"+poks[p].getAttribute("name"));
	}

	for(var o = 0; o < order2.length; o++) {
		for(var p = 0; p < pokBases.length; p++) {
			if (pokBases[p].parentElement.getAttribute("name")+"-"+pokBases[p].getAttribute("name") == order2[o]) {
				pokBases[p].parentElement.appendChild(pokBases[p]);
			}
		}
		for(var p = 0; p < statsBases.length; p++) {
			if (statsBases[p].parentElement.getAttribute("name")+"-"+statsBases[p].getAttribute("name") == order2[o]) {
				statsBases[p].parentElement.appendChild(statsBases[p]);
			}
		}
	}

	for(var p = 0; p < pokTopBases.length; p++) {
		let els = pokTopBases[p].querySelectorAll(":scope > *[name]");
		for(var r = 0; r < els.length; r++) {
			let x = r+1;
			let el = els[r].querySelector(":scope *[name='pokémon'] > *:first-child > *:first-child");
			el.innerText = "Pokémon #"+x;
		}
	}


	for(var p = 0; p < pokTopBases.length; p++) {
		var dat = pokTopBases[p].querySelectorAll(":scope > *");
		var val = undefined;
		for(var r = 0; r < dat.length; r++) {
			if (dat[r].style.getPropertyValue("display") == "flex") {
				val = r;
			}
		}
		for(var t = 0; t < selects.length; t++) {
			if (selects[t].getAttribute("name") == pokTopBases[p].getAttribute("name")) {
				selects[t].value = val;
			}
		}
		
	}


	DMGSetPossible();
	
}
function DMGRemoveDataString(base) {
    var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"DIV");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']");

	var ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");

	if (ask) {
		divBase.setAttribute("data-string","");
		DMGClearData(pokBase);
	}
	
	DMGBoxActiveSet();
}
function DMGExportDataString() {
	var base = findUpTag(this,"DIV");
	var str = base.getAttribute("data-string");
	navigator.clipboard.writeText(str);
	console.log(str)
	consoleText("Copied Data String!")
}
function DMGSpeedCalc() {

	
	let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");
	let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name] > ul[name]");
	let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name] > ul[name]");

	let fieldPath = document.querySelector("#contain > div#tool div#dmg div[name='content'] > div[name='field']");

	var TrickRoomPath = fieldPath.querySelector(":scope *[name='Trick Room'] input");

	if (divBases.length == statsBases.length) {
		var eles = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string] *[name='speed'] > *");

		for (var s = 0; s < eles.length; s++) {
			eles[s].innerHTML = "";
			eles[s].style.removeProperty("text-decoration");
		}

		var speed = [];
		for (var s = 0; s < statsBases.length; s++) {
			var ele = statsBases[s].querySelector(":scope > span:last-child > *[name='Speed']");
			var obj = new Object();
			obj["Speed"] = ele.value;
			obj["Int"] = s;
			speed.push(obj)
		}

		if (TrickRoomPath != undefined && TrickRoomPath.checked) {
			speed = sortObjectArray(speed,"Speed",true);
		}
		else {
			speed = sortObjectArray(speed,"Speed",false);
		}

		var result = [];
		var int = 0;
	
		for (var s = 0; s < speed.length; s++) {
			var val1 = speed[s-1];
			var val2 = speed[s];
		
			if (s == 0) {
				int = int+1;
				result.push(int);
			}
			else {
				if (val1["Speed"] == val2["Speed"]) {
					int = int;
					result.push(int);
				}
				else {
					int = int+1;
					result.push(int);
				}
			}
		}

		for (var s = 0; s < result.length; s++) {
			if (result[s] == 1) {
				result[s] = result[s]+"st";
			}
			else if (result[s] == 2) {
				result[s] = result[s]+"nd";
			}
			else if (result[s] == 3) {
				result[s] = result[s]+"rd";
			}
			else {
				result[s] = result[s]+"th";
			}
		}

		for (var s = 0; s < eles.length; s++) {	
			for (var d = 0; d < speed.length; d++) {
				if (speed[d]["Int"] == s) {
					eles[s].innerText = result[d];
					break;
				}
			}
		}
	
		for (var s = 0; s < eles.length; s++) {
			if (s != 0) {
				if (eles[s].innerText == eles[s-1].innerText) {
					eles[s].style.textDecoration = "underline";
					eles[s-1].style.textDecoration = "underline";
				}
			}
		}




	}

}
function DMGSetDataString(base,str) {
	var base;
	var str;
    if (base.tagName != undefined) {
		base = [base];
	}
	else if (base[0] != undefined) {
		base = base;
	}
	else {
		base = [findUpTag(this,"DIV")];
	}


	var data;

	if (str == undefined) {
        data = prompt("Enter Pokémon Data String:","");
	}
	else {
		data = str;
	}

	let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");



	if (data != null && data != "") {
		data = data.replaceAll("\r","");
		data = data.replaceAll("\n","_");
		data = data.replaceAll("\\n","_");

        data = splitStr(data,"_");

        if (divBases.length >= data.length) {
            for (var d = 0; d < data.length; d++) {
				let baseteam = base[d].parentElement.getAttribute("name");
				let baseid = base[d].getAttribute("name");

				let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+baseteam+"'] > div[name='"+baseid+"']");
				let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+baseteam+"'] > ul[name='"+baseid+"']");

                let dataObj = dataStringToObj(data[d]);
                let dataPok = dataObj["pok"]
				let dataInt = getPokémonInt(dataPok);

                if (dataPok != undefined && dataInt != undefined) {
                    if (finaldataPokémon[parseInt(dataInt)][JSONPath_Reference] == "true") {
                        divBase.setAttribute("data-string",data[d]);
                        DMGPokSpecific(pokBase);
                        DMGSetChange(pokBase);
						DMGSaveData(pokBase);
                        DMGCalcPokStats(pokBase);
                        DMGCalcStart(pokBase);
                    }
                    else {
                        consoleText("Pokémon Unavailable.");
                    }
                }
                else {
                    consoleText("Data returned an error.")
                }
            }
        }
        else {
            consoleText("Too many Pokémon for the battle.");
        }

	
	}

	DMGBoxActiveSet();
}


function DMGPartyCreate(base,data) {
	if (data == undefined) {
		var ask = prompt("Enter Pokémon Data String");
		data = ask;
	}

	if (data != null && data != "") {
		data = data.replaceAll("\r","");
		data = data.replaceAll("\n","_");
		if (data.includes("_")) {
			data = data.split("_");
		}
		else {
			data = [data];
		}

		let team = base.getAttribute("name");
		if (team != undefined && team.includes("team")) {
			base.classList.add("active");
			base = base.querySelector(":scope li.add");
			base = base.parentElement;
		}
	


		for (var r = 0; r < data.length; r++) {
			let dataobj = dataStringToObj(data[r]);
			let pok = dataobj["pok"];
			let pokint = getPokémonInt(pok);
	
			if (pok != undefined && pokint != undefined) {
				if(finaldataPokémon[pokint][JSONPath_Reference] == "true") {
					let els =  base.querySelectorAll(":scope li[name]");
					let el = els[parseInt(els.length)-1]
					let int = 0;
					if (el != undefined) {
						int = parseInt(el.getAttribute("name"))+1;
					}

					var pokli = document.createElement("li");
					var pokimg = document.createElement("img");
					pokli.setAttribute("name",int);
					pokli.setAttribute("data-string",data[r]);
					pokli.title = dataStringTitle(data[r]);
					pokimg.src = "./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/"+getPokémonMediaPath(pokint,"Box")+".png";
					pokimg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
					base.appendChild(pokli);
					pokli.appendChild(pokimg);
					
				

					$(pokli).draggable({
						start:function(e,ui){
							document.body.classList.add("dragging");
						},
						stop:function(e,ui){
							document.body.classList.remove("dragging");
						},
						revert: true,
					});
				}
				else {
					consoleText("Pokémon Unavailable.");
				}
			}
			else {
				consoleText("Data returned an error.");
			}
			
		}
	}

	DMGBoxActiveSet();
}


function DMGBoxActiveSet() {
	let els1 = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span > div[data-string]");
	let els2 = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > span > span[name] li[data-string]");


	let res = [];
	for (var i = 0; i < els1.length; i++) {
		let val = els1[i].getAttribute("data-string");
		let obj = dataStringToObj(val);
		let val1 = obj["ab"];
		let val2 = obj["lv"];
		if (val != undefined && val != "") {
			if(val1 != undefined) { 
				val = val.replaceAll("ab:"+val1,"")
			}
			if(val2 != undefined) { 
				val = val.replaceAll("lv:"+val2,"")
			}
			val = val.replaceAll("||","|");
			val = val.replaceAll("\n","");
			val = val.replaceAll("\r","");
			val = val.replace(/\|+$/,"");
			val = val.toString();
	
			res.push(val);
		}
	}

	for (var i = 0; i < els2.length; i++) {
		els2[i].classList.remove("top");
	}

	for (var i = 0; i < els2.length; i++) {
		let val = els2[i].getAttribute("data-string");
		let obj = dataStringToObj(val);
		let val1 = obj["ab"];
		let val2 = obj["lv"];
		if (val != undefined && val != "") {
			if(val1 != undefined) { 
				val = val.replaceAll("ab:"+val1,"")
			}
			if(val2 != undefined) { 
				val = val.replaceAll("lv:"+val2,"")
			}
			val = val.replaceAll("||","|");
			val = val.replaceAll("\n","");
			val = val.replaceAll("\r","");
			val = val.replace(/\|+$/,"");
			val = val.toString();

			if (res.includes(val)) {
				els2[i].classList.add("top");
			}
		}
	}
}

var conditions = [{Name:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Affect:"Pokémon",Group:"Status",Title:"Turns of Bad Poison",Values:"0,15",Type:"Status",Game:"All"},{Name:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Forest's Curse",Affect:"Pokémon",Group:"Type Change",Affected:"Forest's Curse",Type:"Move",Game:"All"},{Name:"Trick-or-Treat",Affect:"Pokémon",Group:"Type Change",Affected:"Trick-or-Treat",Type:"Move",Game:"All"},{Name:"Magnet Rise",Affect:"Pokémon",Group:"Ungrounded",Affected:"Magnet Rise",Type:"Move",Game:"All"},{Name:"Telekinesis",Affect:"Pokémon",Group:"Ungrounded",Affected:"Telekinesis",Type:"Move",Game:"All"},{Name:"Thousand Arrows",Affect:"Pokémon",Group:"Grounded",Affected:"Thousand Arrows",Type:"Move",Game:"All"},{Name:"Smack Down",Affect:"Pokémon",Group:"Grounded",Affected:"Smack Down",Type:"Move",Game:"All"},{Name:"Ingrain",Affect:"Pokémon",Group:"Grounded",Affected:"Ingrain",Type:"Move",Game:"Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Seed Damage",Affect:"Pokémon",Group:"Seed",Affected:"Leech Seed",Title:"Is the Pokémon affected by Leech Seed?",Type:"Move",Game:"All"},{Name:"Seed Heal",Affect:"Pokémon",Group:"Seed",Affected:"Leech Seed",Title:"Is the Pokémon being healed by Leech Seed?",Type:"Move",Game:"All"},{Name:"Glaive Rush",Affect:"Pokémon",Affected:"Glaive Rush",Type:"Move",Game:"All"},{Name:"Laser Focus",Affect:"Pokémon",Affected:"Laser Focus",Type:"Move",Game:"All"},{Name:"Odor Sleuth",Affect:"Pokémon",Affected:"Odor Sleuth",Type:"Move",Game:"All"},{Name:"Foresight",Affect:"Pokémon",Affected:"Foresight",Type:"Move",Game:"All"},{Name:"Miracle Eye",Affect:"Pokémon",Affected:"Miracle Eye",Type:"Move",Game:"All"},{Name:"Shadow",Affect:"Pokémon",Title:"Is it a Shadow Pokémon?",Type:"Form",Game:"Colosseum"},{Name:"Dynamax",Affect:"Pokémon",Title:"Is the Pokémon Dynamaxed?",Type:"Form",Game:"Sword,Shield"},{Name:"Boulder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it raises the the Attack stat stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow,FireRed,LeafGreen"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Zephyr Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Falkner in Violet City, it increases the power of Flying-type moves by 12.5% and raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Hive Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Bugsy in Azaela Town, it increases the power of Bug-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Plain Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Whitney in Goldenrod City, it increases the power of Normal-type moves by 12.5% and raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Fog Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Morty in Ecruteak City, it increases the power of Ghost-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Storm Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Chuck in Cianwood City, it increases the power of Fighting-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Mineral Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Jasmine in Olivine City, it increases the power of Steel-type moves by 12.5% and raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Glacier Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Pryce in Mahogany Town, it increases the power of Ice-type moves by 12.5% and raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rising Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Clair in Blackthorn City, it increases the power of Dragon-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Boulder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it increases the power of Rock-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Cascade Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Misty in Cerulean City, it increases the power of Water-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it increases the power of Electric-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rainbow Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Erika in Celadon City, it increases the power of Grass-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Janine in Fuchsia City, it increases the power of Poison-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Marsh Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Sabrina in Saffron City, it increases the power of Psychic-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on the Seafoam Islands, it increases the power of Fire-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Earth Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blue in Viridian City, it increases the power of Ground-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Stone Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Roxanne in Rustboro City, it raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Dynamo Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Wattson in Mauville City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Balance Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Norman in Petalburg City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Mind Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Tate and Liza in Mossdeep City, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Affected:"Stealth Rock",Type:"Move",Game:"All"},{Name:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Affected:"G-Max Stonesurge",Type:"Move",Game:"Sword,Shield"},{Name:"Spikes",Affect:"Team",Group:"Spikes",Affected:"Spikes",Title:"Layers of Spikes",Values:"0,3",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Affected:"G-Max Steelsurge",Type:"Move",Game:"Sword,Shield"},{Name:"Light Screen",Affect:"Team",Group:"Screen",Affected:"Light Screen",Type:"Move",Game:"All"},{Name:"Reflect",Affect:"Team",Group:"Screen",Affected:"Reflect",Type:"Move",Game:"All"},{Name:"Aurora Veil",Affect:"Team",Group:"Screen",Affected:"Aurora Veil",Type:"Move",Game:"All"},{Name:"Tailwind",Affect:"Team",Affected:"Tailwind",Type:"Move",Game:"All"},{Name:"Lucky Chant",Affect:"Team",Affected:"Lucky Chant",Type:"Move",Game:"All"},{Name:"G-Max Volcalith",Affect:"Team",Affected:"G-Max Volcalith",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Affect:"Team",Affected:"G-Max Cannonade",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Affect:"Team",Affected:"G-Max Vine Lash",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Affect:"Team",Affected:"G-Max Wildfire",Type:"Move",Game:"Sword,Shield"},{Name:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Sandstorm",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Extremely Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Legend Arceus,Scarlet,Violet"},{Name:"Trick Room",Affect:"All",Affected:"Trick Room",Type:"Move",Game:"All"},{Name:"Magic Room",Affect:"All",Affected:"Magic Room",Type:"Move",Game:"All"},{Name:"Wonder Room",Affect:"All",Affected:"Wonder Room",Type:"Move",Game:"All"},{Name:"Gravity",Affect:"All",Affected:"Gravity",Type:"Move",Game:"All"},{Name:"Protection",Affect:"Specific",Affected:"Baneful Bunker,Crafty Shield,Detect,King's Shield,Mat Block,Max Guard,Obstruct,Protect,Quick Guard,Silk Trap,Spiky Shield,Wide Guard",Title:"Is the target being Protected?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Flight",Affect:"Specific",Affected:"Fly,Bounce",Title:"Is the target in a semi-invulnerable turn of Fly or Bounce?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dig",Affect:"Specific",Affected:"Dig",Title:"Is the target in a semi-invulnerable turn of Dig?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dive",Affect:"Specific",Affected:"Dive,Surf,Whirlpool",Title:"Is the target in a semi-invulnerable turn of Dive?",Type:"Move",Game:"All"},{Name:"Switching",Affect:"Specific",Affected:"Pursuit",Title:"Is the target switching out?",Type:"Move",Game:"All"},{Name:"Confusion",Affect:"Specific",Affected:"Tangled Feet",Title:"Is the target confused?",Type:"Ability",Game:"All"},{Name:"Minimize",Affect:"Specific",Title:"Did the target previously use Minimize?",Type:"Move",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Charge",Affect:"Specific",Affected:"Charge",Title:"Is the move powered up by Charge?",Type:"Move",Game:"All"},{Name:"Me First",Affect:"Specific",Affected:"Me First",Title:"Is the move called by Me First?",Type:"Move",Game:"All"},{Name:"Flash Fire",Affect:"Specific",Affected:"Flash Fire",Title:"Is Flash Fire active on the user?",Type:"Ability",Game:"All"},{Name:"Tar Shot",Affect:"Specific",Affected:"Tar Shot",Title:"Is Tar Shot active on the target?",Type:"Move",Game:"All"},{Name:"Helping Hand",Affect:"Specific",Affected:"Helping Hand",Title:"Is the user affected by Helping Hand?",Type:"Move",Game:"All"},{Name:"Damaged",Affect:"Specific",Affected:"Revenge",Title:"Did the user take damage this turn?",Type:"Move",Game:"All"},{Name:"Defense Curl",Affect:"Specific",Affected:"Defense Curl",Title:"Did the user previously use Defense Curl?",Type:"Move",Game:"All"},{Name:"Z-Move",Affect:"Specific",Title:"Transform move to Z-Move?",Type:"Move",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Max Move",Affect:"Specific",Title:"Transform move to Max Move?",Type:"Move",Game:"Sword,Shield"}]
var battleVariation = [{Name:"Single Battle",Teams:"2",Pokémon:"1,1",Game:"All"},{Name:"Double Battle",Teams:"2",Pokémon:"2,2",Game:"Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Triple Battle",Teams:"2",Pokémon:"3,3",Game:"Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Battle Royal",Teams:"4",Pokémon:"1,1,1,1",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"SOS Battle",Teams:"2",Pokémon:"1,2",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"Horde Encounter",Teams:"2",Pokémon:"1,5",Game:"X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Max Raid Battle",Teams:"2",Pokémon:"4,1",Game:"Sword,Shield"},{Name:"Tera Raid Battle",Teams:"2",Pokémon:"4,1",Game:"Scarlet,Violet"}]


function buildDMG(preval) {

	let battleOrigin = document.querySelector("#contain > div#tool div#dmg");
    let battleResult = battleOrigin.querySelector(":scope div[name='result']");
	let battleSelect = battleOrigin.querySelector(":scope div[name='options'] > div:first-child > span:first-child > select");
    let battleVariant = battleVariation[battleSelect.getAttribute("name")];
    let battleTeams = battleVariant["Teams"];
    battleTeams = parseInt(battleTeams)
    battleTeams = undwsnanDel(battleTeams,0);

    let teamds = [];
    let boxds = [];
    let deleted = false;


	if ("Save Previous") {
		var teamdspath = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div[data-string]");
		var boxdspath = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > span > span[name] li[data-string]");

		for(var q = 0; q < teamdspath.length; q++) {
			let ds = teamdspath[q].getAttribute("data-string");
			let dsobj = dataStringToObj(ds);
			if (dsobj["pok"] != undefined) {
				let obj = new Object();
				obj["Team"] = teamdspath[q].parentElement.getAttribute("name");
				obj["Data"] = ds;
				teamds.push(obj)
			}
		}

		for(var q = 0; q < boxdspath.length; q++) {
			let ds = boxdspath[q].getAttribute("data-string");
			let dsobj = dataStringToObj(ds);
			if (dsobj["pok"] != undefined) {
				let obj = new Object();
				obj["Team"] = boxdspath[q].parentElement.parentElement.parentElement.getAttribute("name");
				obj["Data"] = ds;
				boxds.push(obj)
			}
		}

		for(var q = 0; q < teamds.length; q++) {
			let team = teamds[q]["Team"].replaceAll("team","").replaceAll(" ","");
			team = parseInt(team);

			if (team > battleTeams) {
				deleted = true;
				break;
			}
		}

		for(var q = 0; q < boxds.length; q++) {
			let team = boxds[q]["Team"].replaceAll("team","").replaceAll(" ","");
			team = parseInt(team);
			
			if (team > battleTeams) {
				deleted = true;
				break;
			}
		}

		if (deleted) {
			let ask = confirm("There are existing data that does not fit the field, if you proceed the data will be removed.\nDo you want to continue?")
			if (!ask) {
				let val = parseInt(preval);
				if (val != undefined && !isNaN(val)) {
					let el = battleSelect.querySelector(":scope option[name='"+val+"']");
					let keys = el.getAttributeNames();
					for(var q = 0; q < keys.length; q++) {
						let val1 = keys[q];
						let val2 = el.getAttribute(keys[q]);
						battleSelect.setAttribute(val1,val2);
					}
					battleSelect.value = el.value;
					return;
				}
			}
		}
	}




	document.querySelector("#contain > div#tool div#dmg > div").setAttribute("data-battle",battleSelect.value);


	let optionsPokPath = document.querySelector("#contain > div#tool div#dmg > div ol[name='pokémon']");
	let optionsTeamPath = document.querySelector("#contain > div#tool div#dmg > div ol[name='team']");
	let optionsStatsPath = document.querySelector("#contain > div#tool div#dmg > div ol[name='stats']");
    
	let optionsPokTitle = document.querySelector("#contain > div#tool div#dmg div[name='options'] > div[name='header'] > span:last-child");
	let fieldPath = document.querySelector("#contain > div#tool div#dmg div[name='content'] > div[name='field']");
	let contentPath = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div[name='battle']");
	let partyPath = document.querySelector("#contain > div#tool div#dmg div[name='result'] > span[name='party']");
	let specificPath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child");

	

	optionsPokPath.innerHTML = "";
	optionsTeamPath.innerHTML = "";
	optionsStatsPath.innerHTML = "";
	optionsPokTitle.innerHTML = "";
	fieldPath.innerHTML = "";
	contentPath.innerHTML = "";
	partyPath.innerHTML = "";
	specificPath.innerHTML = "";


	
	// Teams
	for(var d = 0; d < battleTeams; d++) {
		let x = d+1;

		let pokCount = battleVariant["Pokémon"];
		pokCount = splitStr(pokCount,",")[d];
		pokCount = parseInt(pokCount);
		pokCount = undwsnanDel(pokCount,0);


		if ("Content") {
			var contentPokPath = document.createElement("span");
			contentPokPath.setAttribute("name","team "+x);
			contentPath.appendChild(contentPokPath);


			for(var q = 0; q < pokCount; q++) {
				let y = q+1;

				var contentPokWrap = document.createElement("div");
				contentPokWrap.setAttribute("name",q);
				contentPokWrap.setAttribute("data-string","")
				contentPokPath.appendChild(contentPokWrap);

				
				$(contentPokWrap).droppable({
					drop: function(e,ui) {
						var tar = ui.helper[0];
						var base = this;
						if (tar.tagName == "LI") {
							var tarString = tar.getAttribute("data-string");
							var baseString = base.getAttribute("data-string");

							DMGBoxActiveSet();
			
							if (tarString.includes("pok:") && !tarString.includes("pok:|") && !tarString.includes("pok:\n")) {
								if (finaldataPokémon[getPokémonInt(dataStringToObj(tarString)["pok"])][JSONPath_Reference] == "true") {
									DMGSetDataString(base,tarString);
								}
								else {
									consoleText("Pokémon Unavailable.")
								}
							}
							else {
								consoleText("Data returned an error.");
							}

						}
					}
				});

				var contentInactive = document.createElement("span");
				var contentInactiveImport = document.createElement("b");
				var contentActive = document.createElement("span");
				var contentActiveTop = document.createElement("span");
				var contentActiveBottom = document.createElement("span");
				var contentActivePok = document.createElement("span");
				var contentActivePokHealth = document.createElement("span");
				var contentActivePokHealthPercentage = document.createElement("small");
				var contentActivePokHealthWrap = document.createElement("span");
				var contentActivePokHealthCurrent = document.createElement("small");
				var contentActivePokHealthDash = document.createElement("small");
				var contentActivePokHealthMax = document.createElement("small");

				var contentActivePokImgWrap = document.createElement("span");
				var contentActivePokImg = document.createElement("img");
				var contentActivePokItem = document.createElement("img");
				var contentActivePokName = document.createElement("span");
				var contentActivePokNameText = document.createElement("small");
				var contentActiveClose = document.createElement("figure");
				var contentActiveCloseText = document.createElement("small");
				var contentActiveExport = document.createElement("figure");
				var contentActiveExportText = document.createElement("small");
				var contentActiveUserSelect = document.createElement("figure");
				var contentActiveUserSelectText = document.createElement("small");
				var contentActiveTargetSelect = document.createElement("figure");
				var contentActiveTargetSelectText = document.createElement("small");
				var contentActiveSpeed = document.createElement("span");
				var contentActiveSpeedText = document.createElement("h6");
				var contentActiveBar = document.createElement("span");
				var contentActiveBarSTAB = document.createElement("small");
				var contentActiveBarEffect = document.createElement("small");

				contentInactiveImport.innerHTML = "<strong>+</strong>";
				contentActivePok.setAttribute("name","pok");
				contentActivePokHealth.setAttribute("name","hp");

				contentActivePokHealthPercentage.innerText = "100%"
				contentActivePokHealthPercentage.setAttribute("name","percentage");
				contentActivePokHealthCurrent.innerText = "0"
				contentActivePokHealthCurrent.setAttribute("name","current");
				contentActivePokHealthDash.innerText = "/";
				contentActivePokHealthMax.innerText = "0"
				contentActivePokHealthMax.setAttribute("name","max");

				contentActivePokImgWrap.setAttribute("name","imgs")
				contentActivePokImg.setAttribute("name","img");
				contentActivePokItem.setAttribute("name","item");
				contentActivePokName.setAttribute("name","name");
				contentActivePokNameText.innerText = "Bulbasaur"

				contentActiveClose.setAttribute("name","close");
				contentActiveExport.setAttribute("name","export");
				contentActiveUserSelect.setAttribute("name","user");
				contentActiveTargetSelect.setAttribute("name","target");
				contentInactive.setAttribute("name","inactive");
				contentActive.setAttribute("name","active");


				contentActivePokImg.setAttribute("onerror","this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png';");
				contentActivePokItem.setAttribute("onerror","this.style.display = 'none';");
				contentActivePokItem.setAttribute("onload","this.style.removeProperty('display');");
				contentActiveCloseText.innerText = "❌";
				contentActiveExportText.innerText = "⮟";
				contentActiveUserSelectText.innerText = "⍟";
				contentActiveTargetSelectText.innerText = "⨀";

				contentActiveBottom.setAttribute("name","moves");
				contentActiveSpeed.setAttribute("name","speed");

				contentActiveBar.setAttribute("name","bar");
				contentActiveBarSTAB.setAttribute("name","stab");
				contentActiveBarEffect.setAttribute("name","effect");


				contentPokWrap.appendChild(contentActiveBar);
				contentActiveBar.appendChild(contentActiveBarSTAB);
				contentActiveBar.appendChild(contentActiveBarEffect);
				contentPokWrap.appendChild(contentInactive);
				contentInactive.appendChild(contentInactiveImport)
				contentPokWrap.appendChild(contentActive);
				contentActive.appendChild(contentActiveTop);
				contentActive.appendChild(contentActiveBottom);
				contentActiveTop.appendChild(contentActivePok);
				contentActiveTop.appendChild(contentActivePok);
				contentActiveTop.appendChild(contentActiveClose);
				contentActiveClose.appendChild(contentActiveCloseText);
				contentActiveTop.appendChild(contentActiveExport);
				contentActiveExport.appendChild(contentActiveExportText);
				contentActiveTop.appendChild(contentActiveUserSelect);
				contentActiveUserSelect.appendChild(contentActiveUserSelectText);
				contentActiveTop.appendChild(contentActiveTargetSelect);
				contentActiveTargetSelect.appendChild(contentActiveTargetSelectText);
				contentActiveTop.appendChild(contentActivePokHealth);
				contentActivePokHealth.appendChild(contentActivePokHealthPercentage);
				contentActivePokHealth.appendChild(contentActivePokHealthWrap);
				contentActivePokHealthWrap.appendChild(contentActivePokHealthCurrent);
				contentActivePokHealthWrap.appendChild(contentActivePokHealthDash);
				contentActivePokHealthWrap.appendChild(contentActivePokHealthMax);
				contentActiveTop.appendChild(contentActiveSpeed);
				contentActiveSpeed.appendChild(contentActiveSpeedText);
				contentActivePok.appendChild(contentActivePokName);
				contentActivePokName.appendChild(contentActivePokNameText);
				contentActivePok.appendChild(contentActivePokImgWrap);
				contentActivePokImgWrap.appendChild(contentActivePokImg);
				contentActivePokImgWrap.appendChild(contentActivePokItem);
				contentInactiveImport.addEventListener("click",function(){ let el = findUpTag(this,"DIV"); let team = el.parentElement.getAttribute("name"); let id = el.getAttribute("name"); let els = el.parentElement.querySelectorAll(":scope > div[data-string]"); let int = id;  for (var m = 0; m < els.length; m++) { if (els[m] == el) { int = m; break; } }let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name]");let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name]"); let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']"); if (pokBase.style.getPropertyValue("display") == "flex") { DMGSetDataString(el); } else { for (var m = 0; m < pokBases.length; m++) { pokBases[m].style.display = "none"; statsBases[m].style.display = "none";}  statsBase.style.display = "flex"; pokBase.style.display = "flex"; } });
				contentActiveClose.addEventListener("click",DMGRemoveDataString);
				contentActiveExport.addEventListener("click",DMGExportDataString);
				contentActiveUserSelect.addEventListener("click",function(){DMGSetActive("user")});
				contentActiveTargetSelect.addEventListener("click",function(){DMGSetActive("target")});
				contentActivePokImgWrap.addEventListener("click",function(){let el = findUpTag(this,"DIV"); let team = el.parentElement.getAttribute("name"); let id = el.getAttribute("name"); let els = el.parentElement.querySelectorAll(":scope > div[data-string]"); let int = id;for (var m = 0; m < els.length; m++) { if (els[m] == el) { int = m; break; } }let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name]");let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name]"); let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']"); for (var m = 0; m < pokBases.length; m++) { pokBases[m].style.display = "none"; statsBases[m].style.display = "none";}pokBase.style.display = "flex";statsBase.style.display = "flex";let select = document.querySelector("#contain div#tool div#dmg div[name='options'] > div:first-child > span:last-child > select[name='"+team+"']"); select.value = int;});


				for (var m = 0; m < 4; m++) {
					var contentActiveMove = document.createElement("b");
					var contentActiveMoveText = document.createElement("small");
					contentActiveMove.setAttribute("name",m);
					contentActiveMove.setAttribute("type","invert");
					contentActiveBottom.appendChild(contentActiveMove)
					contentActiveMove.appendChild(contentActiveMoveText);
					contentActiveMove.addEventListener("click",function(){let val = this.firstChild.innerText;var tar = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='move'] > span select");var tarTemp = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='move'] > span select > option[value='"+val+"']"); if (val != "") {tar.style.color = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,val)+")"; if (tarTemp != undefined) {tar.value = val;} DMGSetInfo();DMGCalcStart();let movd = formatMoveData(val);movd = undDel(movd,"");tar.title = movd;}});

				}
			}
			// Sortable Pokémon //
			if (pokCount > 1) {
				let els = contentPokPath.querySelectorAll(":scope *[name='bar']");
				for(var r = 0; r < els.length; r++) {
					els[r].classList.add("on");
				}

				$(contentPokPath).sortable({
					stop: function(e,ui) {
						DMGMatchPosition();
						DMGCalcStart();
					},
					items: "div[data-string]",
					handle: "*[name='bar']",
					axis: "y",
					scroll: false,
				});
			}
		


			var contentPokOverlay = document.createElement("span");
			var contentPokOverlayText = document.createElement("p");
			contentPokOverlayText.innerText = "⋮⋮⋮";
			contentPokPath.appendChild(contentPokOverlay)
			contentPokOverlay.appendChild(contentPokOverlayText);
		}
		if ("Party") {
			var partyTeam = document.createElement("span");
			partyTeam.setAttribute("name","team "+x);
			partyPath.appendChild(partyTeam);

			var partyTeamOpen = document.createElement("figure");
			var partyTeamOpenText = document.createElement("h5");
			partyTeamOpen.setAttribute("type","invert");
			partyTeamOpenText.innerText = "⮝";
			partyTeamOpen.classList.add("open");
			partyTeam.appendChild(partyTeamOpen);
			partyTeamOpen.appendChild(partyTeamOpenText);
			partyTeamOpen.addEventListener("click",function(){if(this.parentElement.classList.contains("active")) {this.parentElement.classList.remove("active")} else {this.parentElement.classList.add("active");}});

			var partyTeamWrap = document.createElement("span");
			partyTeam.appendChild(partyTeamWrap);
			var partyTeamInner = document.createElement("span");
			partyTeamWrap.appendChild(partyTeamInner)


			var partyTeamDel = document.createElement("figure");
			var partyTeamDelText = document.createElement("h6");
			partyTeamDel.classList.add("del");
			partyTeamDel.setAttribute("type","scale");
			partyTeamDelText.innerText = "❌";
			partyTeamInner.appendChild(partyTeamDel);
			partyTeamDel.appendChild(partyTeamDelText);
			partyTeamDel.addEventListener("click",function(){
				var ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");
				if (ask) {
					var eles = this.parentElement.querySelectorAll(":scope li[name]");
					for (var i = 0; i < eles.length; i++) {
						eles[i].remove();
					}
				}
			})

			var partyTeamAdd = document.createElement("li");
			var partyTeamAddText = document.createElement("h2");
			partyTeamAdd.classList.add("add");
			partyTeamAddText.innerText = "+";
			partyTeamInner.appendChild(partyTeamAdd);
			partyTeamAdd.appendChild(partyTeamAddText);
			partyTeamAdd.addEventListener("click",function(){DMGPartyCreate(this.parentElement.parentElement.parentElement)});
		}
		if ("Options") {
            // Title //
			var optionsPokTitleSelect = document.createElement("select");
			optionsPokTitleSelect.setAttribute("name","team "+x);
			optionsPokTitle.appendChild(optionsPokTitleSelect);
			optionsPokTitleSelect.addEventListener("change",function(){var x = this.value; var z = this.getAttribute("name");var dvs = document.querySelectorAll("#contain > div#tool div#dmg > div span[name='"+z.toLowerCase()+"'] ul"); var dv = document.querySelectorAll("#contain > div#tool div#dmg > div span[name='"+z.toLowerCase()+"'] ul:nth-child("+(parseInt(x)+1)+")");for (var i = 0; i < dvs.length; i++) {dvs[i].style.display = "none";} for (var i = 0; i < dv.length; i++) {dv[i].style.display="flex"};})	

            for(var q = 0; q < pokCount; q++) {
                let y = q+1;

				var optionsPokOption = document.createElement("option");
				optionsPokOption.innerText = "Pokémon #"+y;
				optionsPokOption.setAttribute("value",q);
				optionsPokTitleSelect.appendChild(optionsPokOption);
            }



            // Pokémon //
			var optionsPokWrap = document.createElement("span");
			optionsPokWrap.setAttribute("name","team "+x)
			optionsPokPath.appendChild(optionsPokWrap)
			
			for(var q = 0; q < pokCount; q++) {
				let y = q+1;

				var optionsPok = document.createElement("ul");
				optionsPok.setAttribute("name",q);
				optionsPokWrap.appendChild(optionsPok);

                
                if ("Pokémon") {
                    var pok = document.createElement("li");
					var pokTitle = document.createElement("span");
                    var pokTitleText = document.createElement("h6");
                    var pokSelect = document.createElement("select");
                    pokTitleText.innerText = "Pokémon #"+y;
                    pok.setAttribute("name","pokémon");
                    optionsPok.appendChild(pok);
                    pok.appendChild(pokTitle);
					pokTitle.appendChild(pokTitleText);
                    pok.appendChild(pokSelect);
                    
                    //pokSelect.addEventListener("change",function(){if(this.value == ""){DMGRemoveDataString(findUpTag(this,"UL"))}});
                    pokSelect.addEventListener("change",function(){let ulbase = findUpTag(this,"UL");let team = ulbase.parentElement.getAttribute("name");let id = ulbase.getAttribute("name"); let tar = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div > span[name='"+team+"'] > div[data-string][name='"+id+"']"); let dstring = tar.getAttribute("data-string"); if (dstring != "") {var ds = tar.getAttribute("data-string").replaceAll("pok:"+dataStringToObj(tar.getAttribute("data-string"))["pok"],"pok:"+this.value); tar.setAttribute("data-string",ds);} else {tar.setAttribute("data-string","pok:"+this.value)}let el1 = ulbase.querySelector(":scope *[name='hp'] > input");let el2 = ulbase.querySelector(":scope *[name='hp'] input[name='current']");el1.value = el1.max; el2.value = el1.max;el1.style.background = "var(--colorBlue)";});
                    pokSelect.addEventListener("change",DMGPokSpecific);
                    pokSelect.addEventListener("change",DMGSaveData);
                    pokSelect.addEventListener("change",DMGSetChange);
                    pokSelect.addEventListener("change",DMGSetInfo);
                    pokSelect.addEventListener("change",DMGCalcPokStats);
                    pokSelect.addEventListener("change",DMGCalcStart);


                    var poks = [];
                    if (poks[0] != "") {
                        poks.unshift("");
                    }
                    for(var e = 0; e < finaldataPokémon.length; e++) {
                        if (finaldataPokémon[e][JSONPath_Reference] == "true") {
                            poks.push(getPokémonName(e))
                        }
                    }

                    for(var e = 0; e < poks.length; e++) {
						let pokint = getPokémonInt(poks[e]);
                        var pokOption = document.createElement("option");
                        pokSelect.appendChild(pokOption);

                        if (pokint != undefined) {
							let pokName = getPokémonName(pokint,"Alt");
							let pokTitle = getPokémonName(pokint);
							pokOption.setAttribute("value",pokName)
							pokOption.innerText = pokName;
							pokOption.setAttribute("data-name",pokName);
							pokOption.setAttribute("data-title",pokTitle);
                            pokOption.setAttribute("data-variant",finaldataPokémon[pokint]["Variant"]);
                        }

                        if (pokOption.getAttribute("data-variant") != undefined) {
                            if (!pokOption.getAttribute("data-variant").includes("Default")) {
                                pokOption.style.display = "none";
                                pokOption.setAttribute("disabled","");
                            }
                        }
                    }

                    if (pokSelect.querySelectorAll(":scope option[data-variant]:not([data-variant*='Default']").length > 0) {
                        var pokFormInput = document.createElement("input");
                        var pokFormLabel = document.createElement("label");
                        var pokFormLabelText = document.createElement("small");
                        pokFormInput.setAttribute("type","checkbox");
                        pokFormInput.setAttribute("id","dmg-pok-form-"+d);
                        pokFormInput.setAttribute("name","dmg-pok-form");
                        pokFormLabel.setAttribute("for","dmg-pok-form-"+d);
                        pokFormLabelText.innerText = "Forms";
                        pokTitle.appendChild(pokFormInput);
                        pokTitle.appendChild(pokFormLabel);
                        pokFormLabel.appendChild(pokFormLabelText);
                        pokFormInput.addEventListener("change",function(){var tars = findUpTag(this,"LI").querySelectorAll(":scope select option"); var tar = findUpTag(this,"LI").querySelectorAll(':scope select option[data-variant]:not([data-variant*="Default"])');for(var t = 0; t < tars.length; t++) {tars[t].style.removeProperty("display");tars[t].removeAttribute("disabled");} let pokname = "data-title"; if(!this.checked){pokname = "data-name";for(var t = 0; t < tar.length; t++) {tar[t].style.display = "none";tar[t].setAttribute("disabled","");}}for(var t = 0; t < tars.length; t++) {if (tars[t].getAttribute(pokname) != undefined) {tars[t].innerText = tars[t].getAttribute(pokname);tars[t].value = tars[t].getAttribute(pokname);}}})
                    }
                }
                if ("HP") {
                    var maxHP = document.createElement("li");
                    var maxHPRange = document.createElement("input");
                    maxHPRange.setAttribute("type","range");
                    maxHPRange.setAttribute("name","range-maxhp");
                    maxHPRange.setAttribute("id","range-maxhp");
                    maxHPRange.setAttribute("min","0");
                    maxHPRange.value = 1;
                    maxHPRange.setAttribute("max","1");
                    maxHPRange.setAttribute("step","1");
                    maxHP.setAttribute("name","hp")
                    optionsPok.appendChild(maxHP);
                    maxHP.appendChild(maxHPRange);

                    maxHPRange.addEventListener("input",function(){let v = (((this.value-this.min)/(this.max-this.min))*100);let c = "var(--colorBlue)";let b = "var(--color_90)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})


                    var maxHPWrap = document.createElement("span");
                    var maxHPWrapCurrent = document.createElement("input");
                    var maxHPWrapDash = document.createElement("small");
                    var maxHPWrapMax = document.createElement("input");
                    maxHPWrapCurrent.setAttribute("name","current");
                    maxHPWrapCurrent.setAttribute("type","number");
                    maxHPWrapCurrent.setAttribute("min",0);
                    maxHPWrapCurrent.setAttribute("max",1);
                    maxHPWrapCurrent.value = 0;
                    maxHPWrapMax.setAttribute("name","max");
                    maxHPWrapMax.setAttribute("type","number");
                    maxHPWrapMax.setAttribute("min",0);
                    maxHPWrapMax.setAttribute("max",1);
                    maxHPWrapMax.value = 1;
                    maxHPWrapDash.innerText = "/";
                    maxHP.appendChild(maxHPWrap)
                    maxHPWrap.appendChild(maxHPWrapCurrent)
                    maxHPWrap.appendChild(maxHPWrapDash)
                    maxHPWrap.appendChild(maxHPWrapMax)


                    maxHPWrapCurrent.addEventListener("change",iMinMax);
                    maxHPWrapCurrent.addEventListener("change",function(){this.parentElement.parentElement.querySelector(":scope input[type='range']").value = this.value;});
                    maxHPWrapCurrent.addEventListener("change",function(){var tar = this.parentElement.parentElement.querySelector(":scope input[type='range']");let v = ((tar.value-tar.min)/(tar.max-tar.min))*100;let c = "var(--colorBlue)";let b = "var(--color_90)";tar.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})
                    maxHPWrapCurrent.addEventListener("change",DMGCalcStart);

                    maxHPRange.addEventListener("input",function(){this.parentElement.querySelector(":scope *[name='current']").value = this.value;});
                    maxHPRange.addEventListener("input",DMGCalcStart);
                }
                if ("Type") {
                    var type = document.createElement("li");
                    var typeWrap = document.createElement("span");
                    type.setAttribute("name","type");
                    optionsPok.appendChild(type)
                    type.appendChild(typeWrap);
                    var count = 2;
                    if (document.querySelector("#contain > div#move > section[name='list'] ol label[data-title='trick-or-treat']") != undefined) {
                        count = 3;
                    }
                    if (document.querySelector(`#contain > div#move > section[name='list'] ol label[data-title="forest's curse"]`) != undefined) {
                        count = 3;
                    }
                    for (var m = 0; m < count; m++) {
                        var typeSelect = document.createElement("select");
                        typeWrap.appendChild(typeSelect)
                        typeSelect.setAttribute("name",m)
                        typeSelect.addEventListener("change",function(){if (this.value != "" && this.value != undefined) {this.style.background = "var(--type"+this.value+")"} else {this.style.removeProperty("background")}})
                        typeSelect.addEventListener("change",function(){uniqueValueSelect(this.parentElement.querySelectorAll(":scope select"))});
                        typeSelect.addEventListener("change",DMGCalcPokStats);
                        typeSelect.addEventListener("change",DMGCalcStart);


                        var typesTemp = [...Types];

                        if (typesTemp[0] != "") {
                            typesTemp.unshift("");
                        }

                        for(var n = 0; n < typesTemp.length; n++) {
                            var typeOption = document.createElement("option");
                            typeOption.value = typesTemp[n];
                            typeOption.innerText = typesTemp[n];
                            typeSelect.appendChild(typeOption)
                            if (n != 0) {
                                typeOption.style.background = "var(--type"+typesTemp[n]+")";
                            }
                            else {
                                typeOption.style.background = "gray";
                            }
                        }
                        if (m == 2) {
                            typeSelect.innerHTML = "<option value=''></option>"
                            typeSelect.classList.add("disable");
                        }
                    }
                }
                if ("Level") {
                    var level = document.createElement("li");
                    level.setAttribute("name","level");
                    optionsPok.appendChild(level)

                    var levelTitle = document.createElement("h6");
                    var levelInput = document.createElement("input");

                    levelTitle.innerText = "Level";
                    levelInput.setAttribute("type","number");
                    levelInput.setAttribute("min","1");
                    levelInput.setAttribute("max","100");
                    levelInput.setAttribute("placeholder","1");
                    levelInput.setAttribute("onblur","this.placeholder='1'");
                    levelInput.setAttribute("onfocus","this.placeholder=''");
                    levelInput.value = 1;

                    level.appendChild(levelTitle)
                    level.appendChild(levelInput)

                    levelInput.addEventListener("input",iMinMax);
					levelInput.addEventListener("click",function(){this.select();})
                    levelInput.addEventListener("input",DMGSaveData);
                    levelInput.addEventListener("input",DMGCalcPokStats);
                    levelInput.addEventListener("input",DMGCalcStart);
                }
                if ("Nature") {
                    if (Natures.length > 0) {
                        var nature = document.createElement("li");
                        var natureTitle = document.createElement("h6");
                        var natureSelect = document.createElement("select");

                        nature.setAttribute("name","nature");
                        natureTitle.innerText = "Nature"

                        optionsPok.appendChild(nature)
                        nature.appendChild(natureTitle);
                        nature.appendChild(natureSelect)

                        natureSelect.addEventListener("change",DMGSaveData);
                        natureSelect.addEventListener("change",DMGCalcPokStats);
                        natureSelect.addEventListener("change",DMGCalcStart);
                        
                        var naturesTemp = Natures;
                        if (naturesTemp[0] != "") {
                            naturesTemp.unshift("");
                        }
                        for(var n = 0; n < naturesTemp.length; n++) {
                            var natureOption = document.createElement("option");
                            natureOption.value = naturesTemp[n];
                            natureOption.innerText = naturesTemp[n];
                            natureSelect.appendChild(natureOption)
                        }
                    }
                }
                if ("Ability") {
                    if (Ability.length > 0) {
                        var ability = document.createElement("li");
                        var abilityTitle = document.createElement("h6");
                        var abilitySelect = document.createElement("select");

                        ability.setAttribute("name","ability");
                        abilityTitle.innerText = "Ability"

                        optionsPok.appendChild(ability)
                        ability.appendChild(abilityTitle);
                        ability.appendChild(abilitySelect)

                        abilitySelect.addEventListener("change",DMGSaveData);
                        abilitySelect.addEventListener("change",DMGCalcPokStats);
                        abilitySelect.addEventListener("change",DMGCalcStart);
                        abilitySelect.addEventListener("change",function(){
                            let abd = returnAppArrData(finaldataAbilityDescription,"Ability",this.value)[0];
                            abd = undDel(abd,{Description:""});
                            abd = abd["Description"];
                            this.title = abd;
                        })
                    }
                }
                if ("Gender") {
                    if (Gender == true) {

                        var gender = document.createElement("li");
                        var genderTitle = document.createElement("h6");
                        var genderSelect = document.createElement("select");
                        
                        gender.setAttribute("name","gender");
                        genderTitle.innerText = "Gender"

                        optionsPok.appendChild(gender)
                        gender.appendChild(genderTitle);
                        gender.appendChild(genderSelect)

                        genderSelect.addEventListener("change",DMGSaveData);
                        genderSelect.addEventListener("change",DMGCalcPokStats);
                        genderSelect.addEventListener("change",DMGCalcStart);

                        genderSelect.addEventListener("change",function(){this.style.removeProperty("color"); if (this.value == "♂") {this.style.color = "blue";}else if (this.value == "♀") {this.style.color = "red";}});

                
                        var possibleGender = [];

                        for (var r = 0; r < possibleGender.length; r++) {
                            var option = document.createElement("option");
                            option.innerText = possibleGender[r];
                            option.value = possibleGender[r];
                            genderSelect.appendChild(option)
                        }
                    }
                }
                if ("Friendship") {
                    if (Friendship) {
                        var friendship = document.createElement("li");
                        friendship.setAttribute("name","friendship");
                        optionsPok.appendChild(friendship)

                        var friendshipTitle = document.createElement("h6");
                        var friendshipInputWrap = document.createElement("span");
                        var friendshipInput = document.createElement("input");
                        friendshipTitle.innerText = "Friendship";

                        friendshipInput.setAttribute("type","number");
                        friendshipInput.setAttribute("min","0");
                        friendshipInput.setAttribute("max","255");
                        friendshipInput.setAttribute("placeholder","0");
                        friendshipInput.setAttribute("onblur","this.placeholder='0'");
                        friendshipInput.setAttribute("onfocus","this.placeholder=''");
                        friendshipInput.value = 0;

                        friendshipInput.addEventListener("input",iMinMax);
						friendshipInput.addEventListener("click",function(){this.select();})
                        friendshipInput.addEventListener("input",DMGSaveData);
                        friendshipInput.addEventListener("input",DMGCalcPokStats);
                        friendshipInput.addEventListener("input",DMGCalcStart);

                        friendship.appendChild(friendshipTitle)
                        friendship.appendChild(friendshipInputWrap)
                        friendshipInputWrap.appendChild(friendshipInput)
                        
                    }
                }
                if ("Affection") {
                    if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
                        var affection = document.createElement("li");
                        affection.setAttribute("name","affection");
                        optionsPok.appendChild(affection)

                        var affectionTitle = document.createElement("h6");
                        var affectionInputWrap = document.createElement("span");
                        var affectionInput = document.createElement("input");
                        affectionTitle.innerText = "Affection";

                        affectionInput.setAttribute("type","number");
                        affectionInput.setAttribute("min","0");
                        affectionInput.setAttribute("max","255");
                        affectionInput.setAttribute("placeholder","0");
                        affectionInput.setAttribute("onblur","this.placeholder='0'");
                        affectionInput.setAttribute("onfocus","this.placeholder=''");
                        affectionInput.value = 0;

                        affectionInput.addEventListener("input",iMinMax);
						affectionInput.addEventListener("click",function(){this.select();})
                        affectionInput.addEventListener("input",DMGSaveData);
                        affectionInput.addEventListener("input",DMGCalcPokStats);
                        affectionInput.addEventListener("input",DMGCalcStart);

                        affection.appendChild(affectionTitle)
                        affection.appendChild(affectionInputWrap)
                        affectionInputWrap.appendChild(affectionInput)
                    }
                }
                if ("Item") {
                    if (HeldItem == true) {
                        var item = document.createElement("li");
                        item.setAttribute("name","item");
                        optionsPok.appendChild(item)

                        var itemTitle = document.createElement("h6");
                        var itemImgWrap = document.createElement("span");
                        var itemSelect = document.createElement("select");
                        var itemImg = document.createElement("img");
                        itemTitle.innerText = "Item";

                        itemImg.setAttribute("type","number");
                        itemImg.setAttribute("min","0");
                        itemImg.setAttribute("max","100");
                        itemImg.setAttribute("placeholder","0");
                        itemImg.setAttribute("onblur","this.placeholder='0'");
                        itemImg.setAttribute("onfocus","this.placeholder=''");

                        item.appendChild(itemTitle)
                        item.appendChild(itemSelect)
                        item.appendChild(itemImgWrap)
                        itemImgWrap.appendChild(itemImg)

                        itemSelect.addEventListener("change",DMGSaveData);
                        itemSelect.addEventListener("change",DMGCalcPokStats);
                        itemSelect.addEventListener("change",DMGCalcStart);
                        itemSelect.addEventListener("change",DMGSetInfo);
                        itemSelect.addEventListener("change",function(){
                            let itd = returnAppArrData(finaldataItemsDescription,"Item",this.value)[0];
                            itd = undDel(itd,{Description:""});
                            itd = itd["Description"];
                            this.title = itd;
                    
                        })


                        var items = []
                        if (items[0] != "") {
                            items.unshift("");
                        }

                        for (var r = 0; r < items.length; r++) {
                            var option = document.createElement("option");
                            option.innerText = items[r];
                            option.value = items[r];
                            itemSelect.appendChild(option)
                        }
                
                    }
                }
                if ("Move") {
                    var move = document.createElement("li");
                    var moveTitle = document.createElement("h6");
                    var moveWrap = document.createElement("span");
                    move.setAttribute("name","moves");
                    moveTitle.innerText = "Moves"
                    optionsPok.appendChild(move)
                    move.appendChild(moveTitle);
                    move.appendChild(moveWrap);

                    $(moveWrap).sortable({
                        update: function(e,ui) {		
                            let base = findUpTag(this,"UL");
                    
                            var eles = base.querySelectorAll(":scope li[name='moves'] select");

                            for (var r = 0; r < eles.length; r++) {
                                eles[r].setAttribute("name",r)
                                eles[r].firstChild.setAttribute("value","Move #"+(r+1));
                                eles[r].firstChild.innerText = "Move #"+(r+1);
                            }

                            DMGSaveData(base);
                            DMGSetChange(base);
                        
                        },
                        containment: "parent",
                    });


                    for (var m = 0; m < 4; m++) {
                        var moveSelectTopWrap = document.createElement("span");
                        var moveSelect = document.createElement("select");
                        moveWrap.appendChild(moveSelectTopWrap);
                        moveSelectTopWrap.appendChild(moveSelect);
                        moveSelect.setAttribute("name",m)
                        moveSelect.addEventListener("change",function(){var x = returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,this.value); if (x == undefined) {this.style.removeProperty("color");this.style.removeProperty("background");} else {this.style.color = "var(--type"+x+")";}})
                        moveSelect.addEventListener("change",DMGSaveData);
                        moveSelect.addEventListener("change",DMGCalcPokStats);
                        moveSelect.addEventListener("change",DMGCalcStart);
                        moveSelect.addEventListener("change",function(){uniqueValueSelect(this.parentElement.parentElement.querySelectorAll(":scope select"))});

                        moveSelect.addEventListener("change",function(){this.title = ""; if(!this.value.includes("#")) {let movd = formatMoveData(this.value);movd = undDel(movd,"");this.title = movd;}});


                        var tempMoves = [];

                        for(var t = 0; t < finaldataMove.length; t++) {
                            if(finaldataMove[t][JSONPath_MoveReference] == "true") {
                                if (finaldataMoveGroup[t]["Group"] != "Z-Move" && finaldataMoveGroup[t]["Group"] != "Max Move") {
                                    tempMoves.push(finaldataMove[t]["Name_"+JSONPath_MoveName])
                                }
                            }
                        }
                
                        tempMoves.sort();

                        var movesTemp = [...tempMoves];


                        movesTemp.sort();
                        if (!movesTemp[0].includes("#")) {
                            movesTemp.unshift("Move #"+(m+1));
                        }
                        for(var n = 0; n < movesTemp.length; n++) {
                            var moveOption = document.createElement("option");
                            moveOption.value = movesTemp[n];
                            moveOption.innerText = movesTemp[n];


                            if (!movesTemp[n].includes("#")) {
                                let movd = formatMoveData(movesTemp[n]);
                                movd = undDel(movd,"");
                                moveOption.title = movd;
                            }
                            else {
                                moveOption.title = "";
                            }

                            moveSelect.appendChild(moveOption)
                            if (n != 0) {
                                moveOption.style.background = "var(--type"+returnArrValue(finaldataMoveType,"Name_"+JSONPath_MoveName,"Type_"+JSONPath_MoveType,movesTemp[n])+")";
                            }
                        }

                        if (!moveSelect.value.includes("#")) {
                            let movd = formatMoveData(moveSelect.value);
                            movd = undDel(movd,"");
                            moveSelect.title = movd;
                        }
                        else {
                            moveSelect.title = "";
                        }
                    }
                }
                if ("Header") {
                    var header = document.createElement("span");
                    var headerText = document.createElement("small");
                    header.setAttribute("name","header");
                    headerText.innerText = "Team "+x;
                    optionsPok.appendChild(header)
                    header.appendChild(headerText);
                }
                if ("Reset") {
                    var reset = document.createElement("figure");
                    var resetText = document.createElement("h6");
                    resetText.innerText = "❌";
                    reset.setAttribute("type","scale");
                    reset.setAttribute("name","reset");
                    optionsPok.appendChild(reset)
                    reset.appendChild(resetText)
                    reset.addEventListener("click",function(){var base = findUpTag(this,"UL");DMGRemoveDataString(document.querySelector("#contain > div#tool div#dmg div[name='result'] > div > span[name='"+base.parentElement.getAttribute("name")+"'] > div[name='"+base.getAttribute("name")+"']"))})
                }
                if ("Export") {
                    var exportTeam = document.createElement("figure");
                    var exportTeamText = document.createElement("small");
                    var exportTeamTop = document.createElement("div");
                    var exportTeamWrap = document.createElement("span");
                    exportTeam.setAttribute("name","export");
                    exportTeamText.innerText = "⮟";
                    optionsPok.appendChild(exportTeam)
                    exportTeam.appendChild(exportTeamText)
                    exportTeam.appendChild(exportTeamTop)
                    exportTeamTop.appendChild(exportTeamWrap)

                    exportTeam.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

                    let exportOptions = ["Import Pokémon","Copy Data String","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form"];

                    for(var e = 0; e < exportOptions.length; e++) {
                        let exportWrapTop = document.createElement("span");
                        let exportWrap = document.createElement("b");
                        let exportText = document.createElement("small");
                        exportWrapTop.setAttribute("name",exportOptions[e]);
                        exportWrap.setAttribute("type","invert");
                        exportText.innerText = exportOptions[e];
                        exportTeamWrap.appendChild(exportWrapTop);
                        exportWrapTop.appendChild(exportWrap);
                        exportWrap.appendChild(exportText);
                        exportWrap.addEventListener("click",DMGExportChange);
                    }
                }



                // Pokémon Conditions //
                for(var c = 0; c < conditions.length; c++) {
                    if (conditions[c]["Affect"] == "Pokémon") {
                        var check = getApplicable(conditions[c]["Game"]);
                        
                        if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
                            check = false;
                            var val = [];
                            if (conditions[c]["Affected"].includes(",")) {
                                val = conditions[c]["Affected"].split(",");
                            }
                            else {
                                val = [conditions[c]["Affected"]]
                            }

                            for (var k = 0; k < val.length; k++) {
                                var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
                                if (exist  != undefined) {
                                    check = true;
                                    break;
                                }
                            }
                        }
                    
                        if (check) {
                            var nameTemp = [];

                            if (conditions[c]["Name"] != undefined) {
                                nameTemp.push(conditions[c]["Name"])
                            }
                            if (conditions[c]["Group"] == undefined) {
                                if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
                                    nameTemp.push("("+conditions[c]["Type"]+")")
                                }
                            }
                            
                            let appender = optionsPok;
                            if (conditions[c]["Group"] != undefined) {
                                let tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"']");
                    
                                if (tar == undefined) {
                                    var grp = document.createElement("li");
                                    var grpTitle = document.createElement("h6");
                                    var grpWrap = document.createElement("span");
                                    grp.setAttribute("name",conditions[c]["Group"]+"-Group");
                                    grpTitle.innerText = conditions[c]["Group"];
                                    appender.appendChild(grp);
                                    grp.appendChild(grpTitle);
                                    grp.appendChild(grpWrap);
                                }

                                appender = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"'] > *:last-child");
                            }

                            if (appender != undefined) {
                                var condition = document.createElement("li");
                                appender.appendChild(condition)

                                condition.setAttribute("name",conditions[c]["Name"]);
                                
                                var conditionInput = document.createElement("input");
                                var conditionLabel = document.createElement("label");
                                var conditionLabelText = document.createElement("small");	
                                conditionLabelText.innerText = nameTemp.join(" ");
                                conditionInput.setAttribute("type","checkbox");
                                conditionInput.setAttribute("name","condition-checkbox");
                                conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
                                conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
                                condition.appendChild(conditionInput)
                                condition.appendChild(conditionLabel)
                                conditionLabel.appendChild(conditionLabelText)

                                if (conditions[c]["Group"] == "Type Change" || conditions[c]["Group"] == "Status") {
                                    conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
                                }
                                if (conditions[c]["Group"] == "Status") {
                                    conditionInput.addEventListener("change",DMGCalcPokStats);
                                }


                                if (conditions[c]["Title"] != undefined) {
                                    condition.setAttribute("title",conditions[c]["Title"])
                                }
                                else if (conditions[c]["Type"] == "Move") {
                                    var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
                                    if (val != undefined) {
                                        condition.setAttribute("title",val);
                                    }
                                }
                                else if (conditions[c]["Type"] == "Ability") {
                                    var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
                                    if (val != undefined) {
                                        cond.setAttribute("title",val);
                                    }
                                }
                            
                                if (conditions[c]["Name"] == "Trick-or-Treat") {
                                    conditionInput.addEventListener("change",function(){var y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (var i = 0; i < y.length; i++) {if (y[i].value == "Ghost") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Ghost' style='var(--typeGhost)'>Ghost</option>";y[2].classList.remove("disable");y[2].value = "Ghost";y[2].style.background = 'var(--typeGhost';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
                                }
                                if (conditions[c]["Name"] == "Forest's Curse") {
                                    conditionInput.addEventListener("change",function(){var y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (var i = 0; i < y.length; i++) {if (y[i].value == "Grass") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Grass' style='var(--typeGrass)'>Grass</option>";y[2].classList.remove("disable");y[2].value = "Grass";y[2].style.background = 'var(--typeGrass';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
                                }

                                
                                if (conditions[c]["Values"] != undefined) {
                                    conditionInput.setAttribute("type","number");
                                    conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0]);
                                    conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1]);
                                    conditionInput.addEventListener("input",iMinMax);
                                    conditionInput.addEventListener("input",DMGCalcStart);
                                }
                                else {
                                    conditionInput.addEventListener("change",DMGCalcStart);
                                }
                                

                            }
                        }
                    }
                }

                if (q == 0) {
					optionsPok.style.display = "flex";
				}

            }


            // Team //
            var optionsTeamWrap = document.createElement("span");
			optionsTeamWrap.setAttribute("name","team "+x)
			optionsTeamPath.appendChild(optionsTeamWrap)

            // Stats //
            var statsWrap = document.createElement("span");
            statsWrap.setAttribute("name","team "+x)
            optionsStatsPath.appendChild(statsWrap);
    
            for(var q = 0; q < pokCount; q++) {
                let y = q+1;

                var statsPok = document.createElement("ul");
                statsPok.setAttribute("name",q)
                statsWrap.appendChild(statsPok)
    

    
                let statsCol = [{},{Name:"Individual Value",Title:"IV",Min:0,Max:31},{Name:"Effort Value",Title:"EV",Min:0,Max:255},{Name:"Modifier",Title:"Mod",Min:-6,Max:6},{}]

   
                for(var e = 0; e < statsCol.length; e++) {
                    var statsColumn = document.createElement("span");
                    statsPok.appendChild(statsColumn);
            
                    let statsName = statsCol[e]["Name"];
                    let statsTitle = statsCol[e]["Title"];
                    let statsMin = statsCol[e]["Min"];
                    let statsMax = statsCol[e]["Max"];

                    statsName = undDel(statsName,"");
                    statsTitle = undDel(statsTitle,"");
                    statsMin = undDel(statsMin,0);
                    statsMax = undDel(statsMax,0);
     
                  
                    if (statsTitle == "IV") {
                        if (getApplicable("Red,Blue,Yellow,Gold,Silver,Crystal")) {
                            statsMax = 15;
                        }
                    }
                    if (statsTitle == "EV") {
                        if (getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
                            statsName = "Awakening Value";
                            statsTitle = "AV";
                            statsMax = 200;
                        }
                    }


    
    
                    if (statsTitle != "") {
                        statsColumn.setAttribute("name",statsTitle)
                    }
    
                    var statsWrapTempInput = document.createElement("input");
                    statsWrapTempInput.setAttribute("type","number");
                    statsWrapTempInput.setAttribute("disabled","");
                    statsWrapTempInput.setAttribute("min",0);
                    statsWrapTempInput.setAttribute("max",0);
                    statsWrapTempInput.setAttribute("value",statsTitle);
                    statsWrapTempInput.setAttribute("placeholder",statsTitle);
                    statsColumn.appendChild(statsWrapTempInput);
    
                    
    
                    
                    var statsTemp = [...Stats];
    
                    statsTemp.push("Evasion");
                    statsTemp.push("Accuracy");
                    statsTemp.push("Critical");
    
                    statsTemp = statsTemp.filter(e => e !== 'Total');
    
                    for(var s = 0; s < statsTemp.length; s++) {
    
                        if (e == 1 || e == 2 || e == 4) {
                            if (statsTemp[s] == "Evasion" || statsTemp[s] == "Accuracy" || statsTemp[s] == "Critical") {
                                break;
                            }
                        }
                        
    
                        var statsWrapInput = document.createElement("input");
                        statsWrapInput.setAttribute("type","number");
                        statsWrapInput.setAttribute("min",statsMin);
                        statsWrapInput.setAttribute("max",statsMax);
                        statsWrapInput.setAttribute("name",statsTemp[s]);
                        statsWrapInput.setAttribute("title",statsTitle+"\n"+statsTemp[s]);
                        statsWrapInput.setAttribute("onblur","this.placeholder='0'");
                        statsWrapInput.setAttribute("onfocus","this.placeholder=''");
                        if (e == 0 || e == 4) {
                            statsWrapInput.setAttribute("disabled","");
                        }
            
                        if (statsTemp[s] == "Critical") {
                            if (Generation == 1) {
                                statsWrapInput.min = 0;
                                statsWrapInput.max = 1;
                            }
                            else if (Generation >= 2) {
                                statsWrapInput.min = 0;
                                statsWrapInput.max = 4;
                            }
                        }
                    
                        if (e == 3) {
                            if (s == 0) {
                                statsWrapInput.setAttribute("disabled","");
                                statsWrapInput.style.opacity = "0";
                                statsWrapInput.style.pointerEvents = "none";
                            }
                        }
    
                        if (e == 0) {
                            statsWrapInput.setAttribute("placeholder",statsTemp[s]+":");
                        }
                        else {
                            statsWrapInput.setAttribute("placeholder","0");
                            
                        }
                        if (e == 4) {
                            statsWrapInput.value = 0;
                        }
                    
                        statsColumn.appendChild(statsWrapInput);
                        statsWrapInput.addEventListener("input",iMinMax);
    
						statsWrapInput.addEventListener("click",function(){this.select();})
                        statsWrapInput.addEventListener("input",function(){var x = findUpTag(this,"UL");var base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGCalcPokStats(base2)});
                        statsWrapInput.addEventListener("input",function(){var x = findUpTag(this,"UL");var base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGSaveData(base2)});
                        statsWrapInput.addEventListener("input",function(){var x = findUpTag(this,"UL");var base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGCalcStart(base2)});
    
                        statsWrapInput.addEventListener("input",function(){if (this.value == 0) {this.value = ""}});
    
                        if (statsTemp[s] != "Evasion" && statsTemp[s] != "Accuracy") {
                            if (e < 3) {
                                statsWrapInput.style.color = "var(--stat"+statsTemp[s].replaceAll(".","").replaceAll(" ","")+")";
                            }
                        }
    
                        if (e == 2) {
                            if (Generation >= 3) {
                                if (!getApplicable("Lets Go Pikachu,Lets Go Eevee")) {
                                    statsWrapInput.addEventListener("change",function(){inputMaxValue(this.parentElement.querySelectorAll(":scope input"),255,510)});
                                }
                            }
                        }
                    }

                }
    
                if (q == 0) {
                    statsPok.style.display = "flex";
                }
            }




			// Team Conditions
			for(var c = 0; c < conditions.length; c++) {
				if (conditions[c]["Affect"] == "Team") {
					var check = getApplicable(conditions[c]["Game"]);
					if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
						check = false;
						var val = [];
						if (conditions[c]["Affected"].includes(",")) {
							val = conditions[c]["Affected"].split(",");
						}
						else {
							val = [conditions[c]["Affected"]]
						}

						for (var k = 0; k < val.length; k++) {
							var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
							if (exist  != undefined) {
								check = true;
								break;
							}
						}
					}
				
					if (check) {
						var nameTemp = [];

						if (conditions[c]["Name"] != undefined) {
							nameTemp.push(conditions[c]["Name"])
						}
						if (conditions[c]["Group"] == undefined) {
							if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
								nameTemp.push("("+conditions[c]["Type"]+")")
							}
						}

						
						let appender = optionsTeamPath.querySelector(":scope > *[name='team "+x+"']");

						if (conditions[c]["Group"] != undefined) {
							let tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"']");
				
							if (tar == undefined) {
								var grp = document.createElement("li");
								var grpTitle = document.createElement("h6");
								var grpWrap = document.createElement("span");
								grp.setAttribute("name",conditions[c]["Group"]+"-Group");
								grpTitle.innerText = conditions[c]["Group"];
								appender.appendChild(grp);
								grp.appendChild(grpTitle);
								grp.appendChild(grpWrap);
							}

							appender = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"'] > *:last-child");
						}

						if (appender != undefined) {
					
							var condition = document.createElement("li");
							appender.appendChild(condition)

							condition.setAttribute("name",conditions[c]["Name"]);
							
							var conditionInput = document.createElement("input");
							var conditionLabel = document.createElement("label");
							var conditionLabelText = document.createElement("small");	
							conditionLabelText.innerText = nameTemp.join(" ");
							conditionInput.setAttribute("type","checkbox");
							conditionInput.setAttribute("name","condition-checkbox");
							conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
							conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
							condition.appendChild(conditionInput)
							condition.appendChild(conditionLabel)
							conditionLabel.appendChild(conditionLabelText)

							if (conditions[c]["Title"] != undefined) {
								condition.setAttribute("title",conditions[c]["Title"])
							}
							else if (conditions[c]["Type"] == "Move") {
								let val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}
							else if (conditions[c]["Type"] == "Ability") {
								let val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}


							if (conditions[c]["Group"] == "Pointed Stones" || conditions[c]["Group"] == "Spikes" || conditions[c]["Group"] == "Sharp Steel") {
								conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
							}
							if (conditions[c]["Group"] == "Badge" || conditions[c]["Name"] == "Tailwind") {
								conditionInput.addEventListener("change",function(){let base = findUpTagAtt(this,"SPAN","name"); let team = base.getAttribute("name"); let els = document.querySelectorAll("#contain > div#tool div#dmg > div ol[name='pokémon'] > span[name='"+team+"'] > ul"); for(var i = 0; i < els.length; i++) {DMGCalcPokStats(els[i])}});
							}


							if (conditions[c]["Values"] != undefined) {
								conditionInput.setAttribute("type","number");
								conditionInput.setAttribute("min",conditions[c]["Values"].split(",")[0]);
								conditionInput.setAttribute("max",conditions[c]["Values"].split(",")[1]);
								conditionInput.addEventListener("input",iMinMax);
								conditionInput.addEventListener("click",function(){this.select();})
								conditionInput.addEventListener("input",DMGCalcStart);
							}
							else {
								conditionInput.addEventListener("change",DMGCalcStart);
							}

						}
					}
				}
			}
		}
	}

	// All Conditions
	for(var c = 0; c < conditions.length; c++) {
		if (conditions[c]["Affect"] == "All") {
			var check = getApplicable(conditions[c]["Game"]);
			
			if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
				check = false;
				var val = [];
				if (conditions[c]["Affected"].includes(",")) {
					val = conditions[c]["Affected"].split(",");
				}
				else {
					val = [conditions[c]["Affected"]]
				}

				for (var k = 0; k < val.length; k++) {
					var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
					if (exist  != undefined) {
						check = true;
						break;
					}
				}
			}
		
			if (check) {
				var nameTemp = [];

				if (conditions[c]["Name"] != undefined) {
					nameTemp.push(conditions[c]["Name"])
				}
				if (conditions[c]["Group"] == undefined) {
					if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
						nameTemp.push("("+conditions[c]["Type"]+")")
					}
				}

				
				var appender = document.querySelector("#contain > div#tool div#dmg div[name='content'] > div[name='field']")
		
		
				if (conditions[c]["Affect"] == "Specific") {
					appender = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child")
				}

				if (appender != undefined) {
					if (conditions[c]["Group"] != undefined) {
						if (conditions[c]["Affect"] == "All") {
							var targ = appender.querySelector(":scope > span[name='wrap1']");
							if (targ == undefined) {
								var wrap = document.createElement("span");
								wrap.setAttribute("name","wrap1");
								appender.appendChild(wrap);
							}
							targ = appender.querySelector(":scope > span[name='wrap1']");
							appender = targ;
						}

						var tar = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"']");
			
						if (tar == undefined) {
							var grp = document.createElement("li");
							var grpTitle = document.createElement("h6");
							var grpWrap = document.createElement("span");
							grp.setAttribute("name",conditions[c]["Group"]+"-Group");
							grpTitle.innerText = conditions[c]["Group"];
							appender.appendChild(grp);
							grp.appendChild(grpTitle);
							grp.appendChild(grpWrap);
						}

						appender = appender.querySelector(":scope > *[name='"+conditions[c]["Group"]+"-Group"+"'] > *:last-child");
					}
					else {
						var targ = appender.querySelector(":scope > span[name='wrap2']");
						if (targ == undefined) {
							var wrap = document.createElement("span");
							wrap.setAttribute("name","wrap2");
							appender.appendChild(wrap);
						}
						targ = appender.querySelector(":scope > span[name='wrap2']");
						appender = targ;
					}


					if (appender != undefined) {
						var condition = document.createElement("li");
						var conditionInput = document.createElement("input");
						var conditionLabel = document.createElement("label");
						var conditionLabelText = document.createElement("small");	

						condition.setAttribute("name",conditions[c]["Name"]);

						conditionLabelText.innerText = nameTemp.join(" ");
						conditionInput.setAttribute("type","checkbox");
						conditionInput.setAttribute("name","condition-checkbox");
						conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
						conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");


						appender.appendChild(condition)
						condition.appendChild(conditionInput)
						condition.appendChild(conditionLabel)
						conditionLabel.appendChild(conditionLabelText)

						if (conditions[c]["Title"] != undefined) {
							condition.setAttribute("title",conditions[c]["Title"])
						}
						else if (conditions[c]["Type"] == "Move") {
							var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
							if (val != undefined) {
								condition.setAttribute("title",val);
							}
						}
						else if (conditions[c]["Type"] == "Ability") {
							var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
							if (val != undefined) {
								condition.setAttribute("title",val);
							}
						}

						if (conditions[c]["Group"] == "Weather") {
							var img = document.createElement("img");
							img.src = "./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/"+conditions[c]["Name"]+".png"
							img.title = conditions[c]["Name"];
							img.setAttribute("name",MEDIAPath_Weather);
							img.setAttribute("onload","this.parentElement.parentElement.firstChild.style.display=`none`;");
							img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`;this.style.display=`none`");
							conditionLabel.appendChild(img)
						}
						if (conditions[c]["Group"] == "Terrain") {
							var terrtype = undefined;
							if (conditions[c]["Name"] == "Misty Terrain") {
								terrtype = "Fairy";
							}
							if (conditions[c]["Name"] == "Grassy Terrain") {
								terrtype = "Grass";
							}
							if (conditions[c]["Name"] == "Psychic Terrain") {
								terrtype = "Psychic";
							}
							if (conditions[c]["Name"] == "Electric Terrain") {
								terrtype = "Electric";
							}
							var img = document.createElement("img");
							img.src = "./media/Images/Misc/Type/Symbol/GO/"+terrtype+".png";
							img.title = conditions[c]["Name"];
							img.setAttribute("onload","this.parentElement.firstChild.style.display='none'");
							img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`; this.parentElement.firstChild.style.display='unset';this.style.display=`none`");
							conditionLabel.appendChild(img)
						}

						
						if (conditions[c]["Group"] == "Weather" || conditions[c]["Group"] == "Terrain") {
							conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
						}


						if (conditions[c]["Group"] == "Weather") {
							conditionInput.addEventListener("change",function(){var x = document.querySelectorAll("#contain > div#tool div#dmg > div ul"); for(var q = 0; q < x.length; q++) {DMGCalcPokStats(x[q])}})
						}

						
						if (conditions[c]["Name"] == "Trick Room") {
							conditionInput.addEventListener("change",function(){var x = document.querySelectorAll("#contain > div#tool div#dmg > div span[name] ul[name]"); for (var r = 0; r < x.length; r++) {DMGCalcPokStats(x[r]);}})
						}

						
						conditionInput.addEventListener("change",DMGCalcStart);	
					}
				
				}
			}
		}
	}

	// Specific Conditions
	for(var c = 0; c < conditions.length; c++) {
		if (conditions[c]["Affect"] == "Specific") {
			var check = getApplicable(conditions[c]["Game"]);
			
			if (conditions[c]["Affected"] != undefined && conditions[c]["Game"] == "All") {
				check = false;
				var val = [];
				if (conditions[c]["Affected"].includes(",")) {
					val = conditions[c]["Affected"].split(",");
				}
				else {
					val = [conditions[c]["Affected"]]
				}

				for (var k = 0; k < val.length; k++) {
					var exist = document.querySelector(`#contain > div#`+conditions[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
					if (exist  != undefined) {
						check = true;
						break;
					}
				}
			}
		
			if (check) {
				var nameTemp = [];

				if (conditions[c]["Name"] != undefined) {
					nameTemp.push(conditions[c]["Name"])
				}
				if (conditions[c]["Group"] == undefined) {
					if (conditions[c]["Type"] == "Ability" || conditions[c]["Type"] == "Move") {
						nameTemp.push("("+conditions[c]["Type"]+")")
					}
				}

				
				var appender = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='spec'] > span:last-child")
		


				if (appender != undefined) {
					var condition = document.createElement("li");
					var conditionInput = document.createElement("input");
					var conditionLabel = document.createElement("label");
					var conditionLabelText = document.createElement("small");	

					condition.setAttribute("name",conditions[c]["Name"]);

					conditionLabelText.innerText = conditions[c]["Name"];
					conditionInput.setAttribute("type","checkbox");
					conditionInput.setAttribute("name","condition-checkbox");
					conditionInput.setAttribute("id",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");
					conditionLabel.setAttribute("for",conditions[c]["Name"]+"-"+d+"-"+c+"-checkbox");


					appender.appendChild(condition)
					condition.appendChild(conditionInput)
					condition.appendChild(conditionLabel)
					conditionLabel.appendChild(conditionLabelText)

					if (conditions[c]["Title"] != undefined) {
						condition.setAttribute("title",conditions[c]["Title"])
					}
					else if (conditions[c]["Type"] == "Move") {
						var val = returnArrValue(finaldataMoveDescription,"Name_"+JSONPath_MoveName,"Description_"+JSONPath_MoveDescription,conditions[c]["Name"])
						if (val != undefined) {
							condition.setAttribute("title",val);
						}
					}
					else if (conditions[c]["Type"] == "Ability") {
						var val = returnAppArrData(finaldataAbilityDescription,"Ability",conditions[c]["Name"])[0]["Description"];
						if (val != undefined) {
							condition.setAttribute("title",val);
						}
					}

					if (conditions[c]["Group"] == "Weather") {
						var img = document.createElement("img");
						img.src = "./media/Images/Misc/Weather/PNG/"+MEDIAPath_Weather+"/"+conditions[c]["Name"]+".png"
						img.title = conditions[c]["Name"];
						img.setAttribute("name",MEDIAPath_Weather);
						img.setAttribute("onload","this.parentElement.parentElement.firstChild.style.display=`none`;");
						img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`;this.style.display=`none`");
						conditionLabel.appendChild(img)
					}
					if (conditions[c]["Group"] == "Terrain") {
						var terrtype = undefined;
						if (conditions[c]["Name"] == "Misty Terrain") {
							terrtype = "Fairy";
						}
						if (conditions[c]["Name"] == "Grassy Terrain") {
							terrtype = "Grass";
						}
						if (conditions[c]["Name"] == "Psychic Terrain") {
							terrtype = "Psychic";
						}
						if (conditions[c]["Name"] == "Electric Terrain") {
							terrtype = "Electric";
						}
						var img = document.createElement("img");
						img.src = "./media/Images/Misc/Type/Symbol/GO/"+terrtype+".png";
						img.title = conditions[c]["Name"];
						img.setAttribute("onload","this.parentElement.firstChild.style.display='none'");
						img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`; this.parentElement.firstChild.style.display='unset';this.style.display=`none`");
						conditionLabel.appendChild(img)
					}



					
					conditionInput.addEventListener("change",DMGCalcStart);	
				}
				
			}
		}
	}


    if ("Random") {
        let randomPath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div > span > input[type='range']");
        let randomMinText = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div > span > *[name='min']");
        let randomMaxText = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div > span > *[name='max']");

        randomPath.setAttribute("min",0);
        randomPath.setAttribute("max",0);

        if (Generation == 1 || Generation == 2) {
            randomPath.setAttribute("min",85);
            randomPath.setAttribute("max",100);
        }
        if (Generation >= 3) {
            randomPath.setAttribute("min",85);
            randomPath.setAttribute("max",100);
        }

        randomPath.setAttribute("step",1);
        randomPath.value = Math.ceil(((parseInt(randomPath.getAttribute("max"))-parseInt(randomPath.getAttribute("min")))/2))+parseInt(randomPath.getAttribute("min"));

        let halfway = ((randomPath.value-parseInt(randomPath.getAttribute("min")))/(parseInt(randomPath.getAttribute("max"))-parseInt(randomPath.getAttribute("min"))))*100;
        randomPath.title = Math.ceil(((parseInt(randomPath.getAttribute("max"))-parseInt(randomPath.getAttribute("min")))/2))+parseInt(randomPath.getAttribute("min"))-parseInt(randomPath.getAttribute("min"));
        randomPath.style.background = "linear-gradient(to right, var(--colorBlue) 0%, var(--colorBlue) "+halfway+"%, var(--color_90) "+halfway+"%, var(--color_90) 100%)"
        randomMinText.innerText = randomPath.getAttribute("min")-randomPath.getAttribute("min");
        randomMaxText.innerText = randomPath.getAttribute("max")-randomPath.getAttribute("min");

    }

	if (fieldPath.firstChild != undefined) {
		fieldPath.style.removeProperty("display");
		battleResult.style.removeProperty("height");
	}
	else {
		fieldPath.style.display = "none";
		battleResult.style.height = "80%";
	}

	


    if ("Restore Previous") {
        for(var q = 0; q < teamds.length; q++) {
            let team = teamds[q]["Team"];
            let data = teamds[q]["Data"];
            let els = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name='"+team+"'] > div[data-string]");
            for(var r = 0; r < els.length; r++) {
                let eldata = els[r].getAttribute("data-string");
                let elobj = dataStringToObj(eldata);
                if (elobj["pok"] == undefined) {
                    DMGSetDataString(els[r],data);
                    break;
                }
            }
        }

        for(var q = 0; q < boxds.length; q++) {
            let team = boxds[q]["Team"];
            let data = boxds[q]["Data"];
            let el = document.querySelector("#contain > div#tool div#dmg div[name='result'] > span > span[name='"+team+"']")
            if (el != undefined) {
                DMGPartyCreate(el,data)
            }
        }
    }
	

    DMGSetPossible();
	DMGSetInfo();
	DMGCalcStart();

}


function DMGExportChange() {
    var base = findUpTag(this,"UL");
    var val = findUpTag(this,"SPAN").querySelector(":scope small").innerText;

    var team = base.parentElement.getAttribute("name");
    var id = base.getAttribute("name");


    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")

    let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");
    var dataString = divBase.getAttribute("data-string");

    var pokPath = pokBase.querySelector(":scope li[name='pokémon'] select");
    var int = undefined;
    if (pokPath.value != undefined && pokPath.value != "") {
        int = getPokémonInt(pokPath.value);
    }


    if (val == "Import Pokémon") {
        DMGSetDataString(divBase);
    }

    if (int != undefined) {
        var evoFamily = getEvolutionFamily(int).map(function(v) {return v["Pokémon"];});
        var pokForm = getPokémonForm(int);
        
        if (val == "Copy Data String") {
            DMGSaveData(pokBase);
            dataString = divBase.getAttribute("data-string");
            navigator.clipboard.writeText(dataString);
            console.log(dataString);
            consoleText("Copied Data String!");
        }
        if (val == "Add Copy to Party") {
            var slot = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
            if (slot.length > 0) {
                createParty(slot[0],dataString);
                partyShow(slot[0]);
                consoleText("Copy added to Party.");
            }
            else {
                consoleText("Party is full!");
            }
        }
        if (val == "Add Copy to Box") {
            storeInBox(dataString);
            consoleText("Copy added to Box.");
        }
        if (val == "Change Evolution") {
            evoFamily = evoFamily.filter(function(v) {
                return v != finaldataPokémon[int]["Pokémon"];
            })
            evoFamily = evoFamily.filter(function(v) {
                return v != finaldataPokémonForm[int]["Form_"+JSONPath_Form];
            })

            for (var q = 0; q < evoFamily.length; q++) {
                var x = q+1;
                evoFamily[q] = x+". "+evoFamily[q];
            }

            evoFamily = evoFamily.join("\n");

            var reply = prompt("Change Evolution\nEnter Number:\n"+evoFamily,"");
            var num = [];

            if (reply != null && reply != "") {
                evoFamily = evoFamily.split("\n");

                for (var q = 0; q < evoFamily.length; q++) {
                    num.push(evoFamily[q].split(". ",2)[0]);
                }

                for (var q = 0; q < evoFamily.length; q++) {
                    evoFamily[q] = evoFamily[q].split(". ",2)[1];
                }

                var result = evoFamily[parseInt(reply)-1]

                if (dataString.includes("|")) {
                    if (dataString.includes("pok")) {
                        var data = dataString.split("|");
                        for (var u = 0; u < data.length; u++) {
                            if (data[u].includes("pok:")) {
                                data[u] = data[u].split(":",1)[0]+":"+result;
                                break;
                            }
                        }
                        data = data.join("|");
                    }
                }
                else {
                    if (dataString.includes("pok")) {
                        var data = dataString.split(":",1)[0]+":"+result;
                    }
                }

                if (num.includes(reply)) {
                    divBase.setAttribute("data-string",data);
                    DMGPokSpecific(pokBase);
                    DMGSetChange(pokBase);
                    DMGCalcPokStats(pokBase);
                    DMGCalcStart(pokBase);
                    consoleText("Evolution updated.");
                }
                else {
                    consoleText("Number returned an error.")
                }
            }
        }
        if (val == "Change Form") {
            pokForm = pokForm.filter(function(v) {
                return v != getPokémonName(int);
            })
        
            for (var q = 0; q < pokForm.length; q++) {
                var x = q+1;
                pokForm[q] = x+". "+pokForm[q];
            }
        
            pokForm = pokForm.join("\n");
        
            var reply = prompt("Change Form\nEnter Number:\n"+pokForm,"");
            var num = [];
        
            if (reply != null && reply != "") {
        
                pokForm = pokForm.split("\n");
        
                for (var q = 0; q < pokForm.length; q++) {
                    num.push(pokForm[q].split(". ",2)[0]);
                }
        
                for (var q = 0; q < pokForm.length; q++) {
                    pokForm[q] = pokForm[q].split(". ",2)[1];
                }
        
                var result = pokForm[parseInt(reply)-1]
        
                if (dataString.includes("|")) {
                    if (dataString.includes("pok")) {
                        var data = dataString.split("|");
                        for (var u = 0; u < data.length; u++) {
                            if (data[u].includes("pok:")) {
                                data[u] = data[u].split(":",1)[0]+":"+result;
                                break;
                            }
                        }
                        data = data.join("|");
                    }
                }
                else {
                    if (data.includes("pok")) {
                        var data = dataString.split(":",1)[0]+":"+result;
                    }
                }
        
                if (num.includes(reply)) {
                    divBase.setAttribute("data-string",data);
                    DMGPokSpecific(pokBase);
                    DMGSetChange(pokBase);
                    DMGCalcPokStats(pokBase);
                    DMGCalcStart(pokBase);
                    consoleText("Form updated.");
                }
                else {
                    consoleText("Number returned an error.")
                }
                
            }
        }
    }

}



function DMGFindScenario(base,val,what,which,exclude) {

	let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");
	let check1 = base.parentElement.querySelector(":scope *.user");

	let helper1 = "user";
	let helper2 = "target";

	if (check1 == undefined) {
		helper1 = "target";
		helper2 = "user";
	}

	let user = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name] > div[name]."+helper1);
	let userTeam = user.parentElement.getAttribute("name");
	let userID = user.getAttribute("name");

	let target = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name] > div[name]."+helper2);
	let tarTeam = target.parentElement.getAttribute("name");
	let tarID = target.getAttribute("name");

	let targets = [];

	if (which == "All") {
		which = "Ally,Enemy";
	}

	if (which.includes("Ally")) {
		let els = user.parentElement.querySelectorAll(":scope > *[data-string]");

		for (let i = 0; i < els.length; i++) {
			targets.push(els[i])
		}
	}

	if (which.includes("Enemy")) {
		let els = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span:not([name='"+userTeam+"']) > div[data-string]");

		for (let i = 0; i < els.length; i++) {
			targets.push(els[i])
		}
	}



	if (exclude.includes("User")) {
		for (let i = 0; i < targets.length; i++) {
			let x = i+1;
			if (targets[i] == user) {
				targets.splice(0,x);
			}
		}
	}
	if (exclude.includes("Target")) {
		for (let i = 0; i < targets.length; i++) {
			let x = i+1;
			if (targets[i] == target) {
				targets.splice(0,x);
			}
		}
	}

	let count = 0;

	for (let i = 0; i < targets.length; i++) {
		let team = targets[i].parentElement.getAttribute("name");
		let id = targets[i].getAttribute("name");
		let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
		let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
		let itemPath = pokBase.querySelector(":scope *[name='item'] select");

		let path;

		if (what == "Ability") {
			path = abilityPath;
		}
		if (what == "Item") {
			path = itemPath;
		}

		if (path != undefined && path.value == val) {
			count = count+1;
		}
	
	}

	return count;

	

}

function DMGCheckGrounded(base) {

	var base;
	if (base.tagName != undefined) {
		base = base;
	}
	else {
		base = findUpTag(this,"UL");
	}

    let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");

	let typesPath = pokBase.querySelectorAll(":scope *[name='type'] select");
	let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
	let itemPath = pokBase.querySelector(":scope *[name='item'] select");

	let SmackDownPath = pokBase.querySelector(":scope *[name='Smack Down'] input");
	let MagnetRisePath = pokBase.querySelector(":scope *[name='Magnet Rise'] input");
	let IngrainPath = pokBase.querySelector(":scope *[name='Ingrain'] input");
	let TelekinesisPath = pokBase.querySelector(":scope *[name='Telekinesis'] input");
	let ThousandArrowsPath = pokBase.querySelector(":scope *[name='Thousand Arrows'] input");

	var GravityPath = fieldBase.querySelector(":scope *[name='Gravity'] input");


	let types = [];
	for (let t = 0; t < typesPath.length; t++) {
		types.push(typesPath[t].value);
	}


	
	let Grounded = true;

	if (types.includes("Flying")) {
		Grounded = false;
	}
	if (abilityPath != undefined && abilityPath.value == "Levitate") {
		if (DMGFindScenario(divBase,"Mold Breaker","Ability","Enemy","") == 0) {
			Grounded = false;
		}
	}
	if (itemPath != undefined && itemPath.value == "Air Balloon") {
		if (abilityPath != undefined && abilityPath.value != "Klutz") {
			Grounded = false;
		}
		else {
			Grounded = false;
		}
	}
	if (MagnetRisePath != undefined && MagnetRisePath.checked) {
		Grounded = false;
	}
	if (TelekinesisPath != undefined && TelekinesisPath.checked) {
		Grounded = false;
	}
	if (itemPath != undefined && itemPath.value == "Iron Ball") {
		if (abilityPath != undefined) {
			if (abilityPath.value != "Klutz") {
				Grounded = true;
			}
		}
		else {
			Grounded = true;
		}
	}
	if (IngrainPath != undefined && IngrainPath.checked) {
		if (Generation >= 4) {
			Grounded = true;
		}
	}
	if (SmackDownPath != undefined && SmackDownPath.checked) {
		Grounded = true;
	}
	if (ThousandArrowsPath != undefined && ThousandArrowsPath.checked) {
		Grounded = true;
	}
	if (GravityPath != undefined && GravityPath.checked) {
		Grounded = true;
	}


	return Grounded;


}
