function DMGCalcStart() {

	DMGSetPossible();
	DMGSpeedCalc();
	DMGSetWeatherTerrain();

    // Paths //
	let user = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string].user");
	let userID = user.getAttribute("name");
	let userTeam = user.parentElement.getAttribute("name");

	// Path Scopes
    let allPokBase = document.querySelectorAll("#contain > div#tool div#dmg > div span[name*='team'] ul[name]");
	let allDivBase = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");
    
    let userDivBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+userTeam+"'] > div[name='"+userID+"']");
    let userPokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+userTeam+"'] > ul[name='"+userID+"']");
    let userTeamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+userTeam+"']");
    let userStatsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+userTeam+"'] > ul[name='"+userID+"']");
    let userPartyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+userTeam+"']")

    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");
	let menuBase = document.querySelector("#contain > div#tool div#dmg div[name='menu']");
	let specBase = document.querySelector("#contain div#tool div#dmg div[name='menu'] *[name='specific']");
	let countBase = document.querySelector("#contain div#tool div#dmg div[name='menu'] *[name='count']");

    // Battle
	let battleSelect = document.querySelector("#contain div#tool div#dmg div[name='options'] > div[name='header'] > span:first-child > select");
    let battleSizes = battleSelect.getAttribute("pokémon");
    battleSizes = undDel(battleSizes,"")
    battleSizes = splitStr(battleSizes,",")
    let battleSize = 0;

    for (let u = 0; u < battleSizes.length; u++) {
        battleSize = battleSize+parseInt(battleSizes[u]);
    }


    // User Div
    let userMaxHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='max']");
	let userCurrentHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='current']");
	let userPercentageHPPath = userDivBase.querySelector(":scope *[name='hp'] *[name='percentage']");
	let userEffectPositivePath = userDivBase.querySelector(":scope *[name='effect'] *[name='positive']");
	let userEffectNegativePath = userDivBase.querySelector(":scope *[name='effect'] *[name='negative']");



    // User Stats
    let userModAccuracyPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Accuracy']");
	let userModEvasionPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Evasion']");
	let userModCriticalPath = userStatsBase.querySelector(":scope span[name='Mod'] input[name='Critical']");
	let userModPath = userStatsBase.querySelectorAll(":scope span[name='Mod'] input:not(:first-child)");
	let userStatsPath = userStatsBase.querySelectorAll(":scope span:last-child input:not(:first-child)");
	let userSpeedStatPath = userStatsBase.querySelector(":scope span:last-child input[name='Speed']");
	let userStatsIVPath = userStatsBase.querySelectorAll(":scope *[name='IV'] input:not(:first-child)");

	// User Pokémon
	let userPokémonPath = userPokBase.querySelector(":scope *[name='pokémon'] select");
	let userLevelPath = userPokBase.querySelector(":scope *[name='level'] input");
	let userItemPath = userPokBase.querySelector(":scope *[name='item'] select");
	let userItemCountPath = userPokBase.querySelector(":scope *[name='item'] input[type='number']");
	let userFriendshipPath = userPokBase.querySelector(":scope *[name='friendship'] input");
	let userAffectionPath = userPokBase.querySelector(":scope *[name='affection'] input");
	let userAbilityPath = userPokBase.querySelector(":scope *[name='ability'] select");
	let userHPPath = userPokBase.querySelector(":scope *[name='hp'] > input");
	let userStatusPoisonPath = userPokBase.querySelector(":scope *[name='Poisoned'] input");
	let userStatusBadPoisonPath = userPokBase.querySelector(":scope *[name='Badly Poisoned'] input");
	let userStatusBurnPath = userPokBase.querySelector(":scope *[name='Burned'] input");
	let userStatusParalyzePath = userPokBase.querySelector(":scope *[name='Paralyzed'] input");
	let userStatusAsleepPath = userPokBase.querySelector(":scope *[name='Asleep'] input");
	let userStatusFrozenPath = userPokBase.querySelector(":scope *[name='Frozen'] input");
	let userThousandArrowsPath = userPokBase.querySelector(":scope *[name='Thousand Arrows'] input");
	let userSmackDownPath = userPokBase.querySelector(":scope *[name='Smack Down'] input");
	let userMagnetRisePath = userPokBase.querySelector(":scope *[name='Magnet Rise'] input");
	let userIngrainPath = userPokBase.querySelector(":scope *[name='Ingrain'] input");
	let userTelekinesisPath = userPokBase.querySelector(":scope *[name='Telekinesis'] input");
	let userDireHitPath = userPokBase.querySelector(":scope *[name='Dire Hit'] input");
	let userFocusEnergyPath = userPokBase.querySelector(":scope *[name='Focus Energy'] input");
    let userTypesPath = userPokBase.querySelectorAll(":scope *[name='type'] select");


    // User Team
	let userBadgePath = userTeamBase.querySelectorAll(":scope *[name='Badge-Group'] input");


	// Field
	let weatherInputsPath = fieldBase.querySelectorAll(":scope *[name='Weather-Group'] input");
	let weatherHarshSunlightPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Harsh Sunlight'] input");
	let weatherRainPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Rain'] input");
	let weatherSandstormPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Sandstorm'] input");
	let weatherSnowPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Snow'] input");
	let weatherFogPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Fog'] input");
	let weatherHailPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Hail'] input");
	let weatherExtremelyHarshSunlightPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Extremely Harsh Sunlight'] input");
	let weatherHeavyRainPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Heavy Rain'] input");
	let weatherStrongWindsPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Strong Winds'] input");
	let weatherShadowyAuraPath = fieldBase.querySelector(":scope *[name='Weather-Group'] *[name='Shadowy Aura'] input");
	let TerrainElectricPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Electric Terrain'] input");
	let TerrainGrassyPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Grassy Terrain'] input");
	let TerrainMistyPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Misty Terrain'] input");
	let TerrainPsychicPath = fieldBase.querySelector(":scope *[name='Terrain-Group'] *[name='Psychic Terrain'] input");
	let gravityPath = fieldBase.querySelector(":scope *[name='Gravity'] input");
	let wonderRoomPath = fieldBase.querySelector(":scope *[name='Wonder Room'] input");
	let magicRoomPath = fieldBase.querySelector(":scope *[name='Magic Room'] input");

	// Count
	let countSelectPath = countBase.querySelector(":scope select");
	let countInputPath = countBase.querySelector(":scope input");

	// Specific
	let ZMovePath = specBase.querySelector(":scope li[name='Z-Move'] input");
	let MaxMovePath = specBase.querySelector(":scope li[name='Max Move'] input");
	let MeFirstPath = specBase.querySelector(":scope li[name='Me First'] input");
	let ChargePath = specBase.querySelector(":scope li[name='Charge'] input");
	let ProtectionPath = specBase.querySelector(":scope li[name='Protection'] input");
	let InvunerableDivePath = specBase.querySelector(":scope li[name='Semi-Invulnerable Dive'] input");
	let InvunerableFlightPath = specBase.querySelector(":scope li[name='Semi-Invulnerable Flight'] input");
	let InvunerableDigPath = specBase.querySelector(":scope li[name='Semi-Invulnerable Dig'] input");
	let SwitchPath = specBase.querySelector(":scope li[name='Switching'] input");
	let MinimizePath = specBase.querySelector(":scope li[name='Minimize'] input");
	let DefenseCurlPath = specBase.querySelector(":scope li[name='Defense Curl'] input");
	let ConfusionPath = specBase.querySelector(":scope li[name='Confusion'] input");
	let FlashFirePath = specBase.querySelector(":scope li[name='Flash Fire'] input");
	let TarShotPath = specBase.querySelector(":scope li[name='Tar Shot'] input");
	let HelpingHandPath = specBase.querySelector(":scope li[name='Helping Hand'] input");

	

	// Move
	let movePath = menuBase.querySelector(":scope *[name='move'] select");
	let randomPath = menuBase.querySelector(":scope *[name='roll'] input[type='range']");
	let criticalPath = menuBase.querySelector(":scope *[name='roll'] *[name='critical'] input")

	let movePowerTextPath = menuBase.querySelector(":scope *[name='info'] *[name='power'] > *:last-child");
	let moveAccuracyTextPath = menuBase.querySelector(":scope *[name='info'] *[name='accuracy'] > *:last-child");
	let moveCriticalTextPath = menuBase.querySelector(":scope *[name='info'] *[name='critical'] > *:last-child");
	let moveTypeImgPath = menuBase.querySelector(":scope *[name='info'] *[name='type'] img");
	let moveTypeTextPath = menuBase.querySelector(":scope *[name='info'] *[name='type'] > *:not(img)");
	let moveCategoryImgPath = menuBase.querySelector(":scope *[name='info'] *[name='category'] img");
	let moveCategoryTextPath = menuBase.querySelector(":scope *[name='info'] *[name='category'] > *:not(img)");

	// Values //

	// Move
	let movePower = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],movePath.value);
	let moveAccuracy = returnArrValue(finaldata["Moves"]["Accuracy"],DATA_Move_Reference["Name"],DATA_Move_Accuracy["Accuracy"],movePath.value);
	let moveCategory = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],movePath.value);
	let moveType = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],movePath.value);
	let movePriority = returnArrValue(finaldata["Moves"]["Priority"],DATA_Move_Reference["Name"],DATA_Move_Priority["Priority"],movePath.value);
	let moveGroup = returnArrValue(finaldata["Moves"]["Group"],DATA_Move_Reference["Name"],"Group",movePath.value);
	let moveRange = returnArrValue(finaldata["Moves"]["Range"],DATA_Move_Reference["Name"],"Range",movePath.value);
	movePower = undwsDel(movePower,0);
	moveAccuracy = undwsDel(moveAccuracy,"100%");
	moveCategory = undwsDel(moveCategory,"");
	moveType = undwsDel(moveType,"");
	movePriority = undwsDel(movePriority,0);

	movePath.parentElement.setAttribute("data-special","");

	// Types
	let userTypes = [];
	for (let t = 0; t < userTypesPath.length; t++) {
		userTypes.push(userTypesPath[t].value);
	}

	// Target
	let target = [];
	if (document.querySelector("#contain > div#tool div#dmg > div[data-range]").getAttribute("data-range").includes("Affects")) {
		target = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div.viable")
	}
	else {
		target = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span[name] > div.target.viable")
	}

	let pwrRes = [];
	let accRes = [];
	let critRes = [];

	moveAccuracyTextPath.innerText = "0%";
	movePowerTextPath.innerText = "0";
	moveCriticalTextPath.innerText = "0%";

	DMGCalculation = [];

	var check = true;
	if (user == undefined || target == undefined) {
		check = false;
	}
	if (check) {
		for (let i = 0; i < allDivBase.length; i++) {
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
				let tarHPBasePath = tarDivBase.querySelector(":scope *[name='hp']");
				let tarHPCurrentPath = tarDivBase.querySelector(":scope *[name='hp'] *[name='current']");
				let tarHPMaxPath = tarDivBase.querySelector(":scope *[name='hp'] *[name='max']");
				let tarHPPercentagePath = tarDivBase.querySelector(":scope *[name='hp'] *[name='percentage'] > *");
				let tarHPResultPath = tarDivBase.querySelector(":scope *[name='hp'] *[name='result'] > *");
				let tarEffectPositivePath = tarDivBase.querySelector(":scope *[name='effect'] *[name='positive']");
				let tarEffectNegativePath = tarDivBase.querySelector(":scope *[name='effect'] *[name='negative']");

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

				// Defaults
				tarEffectNegativePath.innerHTML = "";
				tarEffectPositivePath.innerHTML = "";
				tarHPBasePath.style.setProperty("--heal",((tarHPPath.value/tarHPPath.max)*100)+"%")
				tarHPBasePath.style.setProperty("--dmg",((tarHPPath.value/tarHPPath.max)*100)+"%")
				tarHPBasePath.style.setProperty("--hp",((tarHPPath.value/tarHPPath.max)*100)+"%")

				tarHPCurrentPath.innerText = tarHPPath.max-(tarHPPath.max-tarHPPath.value);
				tarHPMaxPath.innerText = tarHPPath.max;
				tarHPPercentagePath.innerText = parseInt((tarHPPath.value/tarHPPath.max)*100);
				tarHPPercentagePath.innerText = tarHPPercentagePath.innerText+"%";
				tarHPResultPath.innerText = "";
				tarHPBasePath.removeAttribute("title");



				if ("Type" && "Category") {
					if (movePath.value == "Weather Ball") {
						if (DMGFindScenario(user,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(user,"Air Lock","Ability","All","") == 0) {
							if (weatherHarshSunlightPath != undefined && weatherHarshSunlightPath.checked) {
								moveType = "Fire";
							}
							else if (weatherRainPath != undefined && weatherRainPath.checked) {
								moveType = "Water";
							}
							else if (weatherHailPath != undefined && weatherHailPath.checked || weatherSnowPath != undefined && weatherSnowPath.checked) {
								moveType = "Ice";
							}
							else if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
								moveType = "Rock";
							}
							else if (weatherShadowyAuraPath != undefined && weatherShadowyAuraPath.checked) {
								moveType = "???";
								moveCategory = "Physical";
							}
						}
						if (weatherExtremelyHarshSunlightPath != undefined && weatherExtremelyHarshSunlightPath.checked) {
							moveType = "Fire";
						}
						if (weatherHeavyRainPath != undefined && weatherHeavyRainPath.checked) {
							moveType = "Water";
						}
					}
					else if (movePath.value == "Hidden Power") {
						let ivs = [];
						for (let q = 0; q < userStatsIVPath.length; q++) {
							if (userStatsIVPath[q].value != undefined && userStatsIVPath[q].value != "") {
								ivs.push(userStatsIVPath[q].value);
							}
							else {
								ivs.push(0);
							}
						}
								
						moveType = hiddenPowerCalc(ivs)["Type"];
					}

					for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
						if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
							if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
								if (finaldata["Moves"]["Additional"][u]["Additional"] == "Sound") {
									if (userAbilityPath != undefined && userAbilityPath.value == "Liquid Voice") {
										moveType = "Water";
									}
								}
							}
						}
					}

				}


				if (Generation < 4) {
					let typ1 = ["Normal","Fighting","Flying","Poison","Ground","Rock","Bug","Ghost","Steel"];
					let typ2 = ["Fire","Water","Grass","Electric","Psychic","Ice","Dragon","Dark"];
					if (typ1.includes(moveType)) {
						moveCategory = "Physical";
					}
					else if (typ2.includes(moveType)) {
						moveCategory = "Special";
					}
				}




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
					let positiveEffect = [];
					let negativeEffect = [];

					for (let h = 0; h < countInputPath.value; h++) {
						// Defaults
						let calculation = 0;
						let Immune = false;
						let Affected = true;
						let Level = 1;
						let Critical = 1;
						let Attack = 0;		
						let Defense = 0;
						let NoModAttack = 0;
						let NoModDefense = 0;
						let Power = 0;
						let STAB = 1;
						let Type = 1;
						let Type1 = 1;
						let Type2 = 1;
						let random = 1;
						let Targets = 1;
						
						// Abilities
						let FlashFire = 1;
						let Fluffy1 = 1;
						let Fluffy2 = 1;
						let TintedLens = 1;
						let SolidRockFilter = 1;
						let FilterPrismArmorSolidRock = 1;
						let PunkRock = 1;
						let IceScales = 1;
						let FriendGuard = 1;
						let Neuroforce = 1;
						let Sniper = 1;
						let MultiscaleShadowShield = 1;

						// Moves
						let HelpingHand = 1;
						let MeFirst = 1;
						let Charge = 1;
						let GlaiveRush = 1;
						let TripleKick = 1;
						let BehemothBladeBehemothBashDynamaxCannon = 1;
						let Minimize = 1;
						let SurfWhirlpool = 1;
						let EarthquakeMagnitude = 1;
						let GustTwister = 1;
						let ColissionCourseElectroDrift = 1;
						let Rollout = 1;
						let FuryCutter = 1;
						let Rage = 1;
						let Pursuit = 1;
						let StompNeedleArmAstonishExtrasensory = 1;
						let Facade = 1;
						let SmellingSalt = 1;
						let Revenge = 1;

						// Items
						let Item = 1;
						let ExpertBelt = 1;
						let LifeOrb = 1;
						let Metronome = 1;

						// Other
						let Weather = 1;
						let Badge = 1;
						let Burn = 1;
						let Screen = 1;
						let Berry = 1;
						let ZMove = 1;


						if ("Factors Pre") {
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
										
							if ("Z-Move") {
								if (ZMovePath != undefined && ZMovePath.checked) {
									var check1 = false;
									var check2 = false;
									var check3 = false;
									let val = "";
								
									for (let r = 0; r < finaldata["Moves"]["Call"].length; r++) {
										if (finaldata["Moves"]["Call"][r]["Call"] == movePath.value) {
											if (finaldata["Moves"]["Call"][r]["Type"] == "Z-Move") {
												if (finaldata["Moves"]["Call"][r]["Pokémon"] != undefined) {
													let vals = splitStr(finaldata["Moves"]["Call"][r]["Pokémon"],",");
													for (let t = 0; t < vals.length; t++) {
														if (vals[t] == userPokémonPath.value) {
															check1 = true;
														}
													}
												}
												if (finaldata["Moves"]["Call"][r]["Item"] != undefined) {
													if (finaldata["Moves"]["Call"][r]["Item"] == userItemPath.value) {
														check2 = true;
													}
												}


												if (check1 && check2) {
													val = finaldata["Moves"]["Call"][r]["Move"];
													break;
												}
											}
										}
									}

									if (userItemPath != undefined && userItemPath.value.includes(" Z") && userItemPath.value.includes(moveType.replace(/.$/, ''))) {
										check3 = true;
									}

									if (check1 && check2) {
										if (userItemPath.value == "Pikanium Z") {
											Power = 210;
										}
										else if (userItemPath.value == "Pikashunium Z") {
											Power = 195;
										}
										else if (userItemPath.value == "Aloraichium Z") {
											Power = 175;
										}		
										else if (userItemPath.value == "Snorlium Z") {
											Power = 210;
										}
										else if (userItemPath.value == "Mewnium Z") {
											Power = 185;
										}
										else if (userItemPath.value == "Decidium Z") {
											Power = 180;
										}
										else if (userItemPath.value == "Incinium Z") {
											Power = 180;
										}
										else if (userItemPath.value == "Primarium Z") {
											Power = 195;
										}
										else if (userItemPath.value == "Lycanium Z") {
											Power = 190;
										}
										else if (userItemPath.value == "Mimikium Z") {
											Power = 190;
										}
										else if (userItemPath.value == "Kommonium Z") {
											Power = 185;
										}
										else if (userItemPath.value == "Solganium Z") {
											Power = 200;
										}
										else if (userItemPath.value == "Lunalium Z") {
											Power = 200;
										}
										else if (userItemPath.value == "Ultranecrozium Z") {
											Power = 200;
										}
										else if (userItemPath.value == "Marshadium Z") {
											Power = 195;
										}

										movePath.parentElement.setAttribute("data-special",val);
							
									}
									else if (check3) {
										if (Power >= 0 && Power <= 55) {
											Power = 100;
										}
										else if (Power >= 60 && Power <= 65) {
											Power = 120;
										}
										else if (Power >= 70 && Power <= 75) {
											Power = 140;
										}
										else if (Power >= 80 && Power <= 85) {
											Power = 100;
										}
										else if (Power >= 90 && Power <= 95) {
											Power = 100;
										}
										else if (Power == 100) {
											Power = 100;
										}
										else if (Power == 110) {
											Power = 100;
										}
										else if (Power >= 120 && Power <= 125) {
											Power = 100;
										}
										else if (Power == 130) {
											Power = 100;
										}
										else if (Power >= 140) {
											Power = 200;
										}

										if (movePath.value == "Mega Drain") {
											Power = 120;
										}
										else if (movePath.value == "Weather Ball") {
											Power = 160;
										}
										else if (movePath.value == "Hex") {
											Power = 160;
										}
										else if (movePath.value == "Gear Grind") {
											Power = 180;
										}
										else if (movePath.value == "V-create") {
											Power = 220;
										}
										else if (movePath.value == "Flying Press") {
											Power = 170;
										}
										else if (movePath.value == "Core Enforcer") {
											Power = 140;
										}
										else {
											for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
												if (finaldata["Moves"]["Additional"][u]["Additional"] == "One-hit Knockout") {
													if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
														if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
															Power = 180;
															break;
														}
													}
														
												}
											}
										}


																				
										for (let u = 0; u < finaldata["Moves"]["Type"].length; u++) {
											if (finaldata["Moves"]["Type"][u][DATA_Move_Reference["Name"]].includes("(")) {
												if (returnArrValue(finaldata["Moves"]["Group"],DATA_Move_Reference["Name"],"Group",finaldata["Moves"]["Type"][u][DATA_Move_Reference["Name"]]) == "Z-Move") {
													if (finaldata["Moves"]["Type"][u][DATA_Move_Type["Type"]] == moveType) {
														if (finaldata["Moves"]["Type"][u][DATA_Move_Reference["Name"]].includes(moveCategory)) {
															movePath.parentElement.setAttribute("data-special",finaldata["Moves"]["Type"][u][DATA_Move_Reference["Name"]].replaceAll(" ("+moveCategory+")",""));
															break;
														}
													}
												}
											}
										}
									}

					
								}
							}

							if ("Power") {
								if (movePath.value == "Hidden Power") {
									let ivs = [];
									for (let q = 0; q < userStatsIVPath.length; q++) {
										if (userStatsIVPath[q].value != undefined && userStatsIVPath[q].value != "") {
											ivs.push(userStatsIVPath[q].value);
										}
										else {
											ivs.push(0);
										}
									}
								
									Power = hiddenPowerCalc(ivs)["Power"];
								}
								else if (movePath.value == "Return") {
									let val = userFriendshipPath.value;
									val = undwsnullnanDel(val,0);
									Power = val/2.5;
									Power = Math.max(Power,1);
								}
								else if (movePath.value == "Grass Knot" || movePath.value == "Low Kick") {
									let val = getIntData(getPokémonInt(userPokémonPath.value),finaldata["Pokémon"]["Weight"],"Metric Values_1-8");
									val = undDel(val,0);
									val = val.replaceAll(" kg");
									val = parseFloat(val);

									if (val >= 0.1 && val <= 9.9) {
										Power = 20;
									}
									else if (val >= 10 && val <= 24.9) {
										Power = 40;
									}
									else if (val >= 25 && val <= 49.9) {
										Power = 60;
									}
									else if (val >= 50 && val <= 99.9) {
										Power = 80;
									}
									else if (val >= 100 && val <= 199.9) {
										Power = 100;
									}
									else if (val >= 200) {
										Power = 120;
									}
								}
								else if (movePath.value == "Triple Kick" && Generation >= 3) {
									Power = Power*(h+1);
								}
								else if (movePath.value == "Trump Card") {
									if (countInputPath.value == 5) { // 5 PP
										Power = 40;
									}
									else if (countInputPath.value == 4) { // 4 PP
										Power = 50;
									}
									else if (countInputPath.value == 3) { // 3 PP
										Power = 60;
									}
									else if (countInputPath.value == 2) { // 2 PP
										Power = 80;
									}
									else if (countInputPath.value == 1) { // 1 PP
										Power = 200;
									}
								}
								else if (movePath.value == "Water Spout") {
									Power = Math.max(1,Math.floor(150*parseInt(userHPPath.value)/parseInt(userHPPath.max)));
								}
								else if (movePath.value == "Magnitude") {
									if (countInputPath.value == 4) { // Magnitude 4
										Power = 10;
									}
									else if (countInputPath.value == 5) { // Magnitude 5
										Power = 30;
									}
									else if (countInputPath.value == 6) { // Magnitude 6
										Power = 50;
									}
									else if (countInputPath.value == 7) { // Magnitude 7
										Power = 70;
									}
									else if (countInputPath.value == 8) { // Magnitude 8
										Power = 90;
									}
									else if (countInputPath.value == 9) { // Magnitude 9
										Power = 110;
									}
									else if (countInputPath.value == 10) { // Magnitude 10
										Power = 150;
									}
								}
								else if (movePath.value == "Present") {
									if (countInputPath.value == 1) { // Present Scenario 1 (40% Probability)
										Power = 40;
									}
									else if (countInputPath.value == 2) { // Present Scenario 2 (30% Probability)
										Power = 80;
									}
									else if (countInputPath.value == 3) { // Present Scenario 3 (10% Probability)
										Power = 120;
									}
								}
								else if (movePath.value == "Natural Gift") {
									Power = naturalGiftPowerCalc(userItemPath.value);
								}
								else if (movePath.value == "Spit Up") {
									Power = parseInt(countInputPath.value)*100;
								}
								else if (movePath.value == "Punishment") {
									let it = 1;
									for (let t = 0; t < tarModPath.length; t++) {
										if (tarModPath[t].value != undefined && tarModPath[t].value != "") {
											let val = parseInt(tarModPath[t].value);
											if (val > 0) {
												it = it+val;
											}
										}
									}
									let val = Math.min((20*it),200);
									Power = val;
								}
								else if (movePath.value == "Acrobatics") {
									if (userItemPath != undefined) {
										if (userItemPath.value == "" || userItemPath.value == "Flying Gem") {
											Power = Power*2;
										}
									}
								}
								else if (movePath.value == "Gyro Ball") {
									Power = Math.min(150,((25*tarSpeedStatPath.value)/userSpeedStatPath.value)+1);
								}
								else if (movePath.value == "Heat Crash" || movePath.value == "Heavy Slam") {
									let val1 = getIntData(getPokémonInt(userPokémonPath.value),finaldata["Pokémon"]["Weight"],"Metric Values_1-8");
									let val2 = getIntData(getPokémonInt(tarPokémonPath.value),finaldata["Pokémon"]["Weight"],"Metric Values_1-8");
									val1 = undDel(val1,0);
									val2 = undDel(val2,0);
									val1 = val1.replaceAll(" kg","")
									val2 = val2.replaceAll(" kg","")
									val1 = parseFloat(val1);
									val2 = parseFloat(val2);

									let val = val2/val1;
									if (val > 0.5) {
										Power = 40;
									}
									else if (val >= 0.335 && val <= 0.5) {
										Power = 60;
									}
									else if (val >= 0.2501 && val <= 0.3334) {
										Power = 80;
									}
									else if (val >= 0.2001 && val <= 0.25) {
										Power = 100;
									}
									else if (val <= 0.2) {
										Power = 120;
									}
								}
								else if (movePath.value == "Frustration") {
									let val = userFriendshipPath.value;
									val = undwsnullnanDel(val,0);
									Power = (255-val)/2.5;
									Power = Math.max(Power,1);
								}
								else if (movePath.value == "Dragon Energy") {
									Power = Math.floor((150*userHPPath.value)/userHPPath.max);
								}
								else if (movePath.value == "Crush Grip") {
									if (Generation == 4) {
										Power = 1+120*(tarHPPath.value/tarHPPath.max);
										if (Power < 1) {
											Power = 1;
										}
										if (Power > 121) {
											Power = 121;
										}
									}
									else if (Generation >= 5) {
										Power = 120*(tarHPPath.value/tarHPPath.max);
										if (Power < 1) {
											Power = 1;
										}
										if (Power > 120) {
											Power = 120;
										}
									}
								}
								else if (movePath.value == "Electro Ball") {
									let val1 = userSpeedStatPath.value;
									val1 = undwsnullnanDel(val1,0);
									let val2 = tarSpeedStatPath.value;
									val2 = undwsnullnanDel(val2,0);

									let val = val1/val2;

									if (val > 1 || val2 == 0) {
										Power = 40;
									}
									else if (val >= 0.5001 && val <= 1) {
										Power = 60;
									}
									else if (val >= 0.3334 && val <= 0.5) {
										Power = 80;
									}
									else if (val >= 0.2501 && val <= 0.3333) {
										Power = 120;
									}
									else if (val >= 0.001 && val <= 0.25) {
										Power = 150;
									}
								}
								else if (movePath.value == "Wring Out") {
									if (Generation == 4) {
										Power = 1+120*(parseInt(tarHPPath.value)/parseInt(tarHPPath.max))
									}
									else if (Generation >= 5) {
										Power = Math.max(1,120*(parseInt(tarHPPath.value)/parseInt(tarHPPath.max)))
									}
									
								}
								else if (movePath.value == "Eruption") {
									Power = Math.max(1,Math.floor((150*userHPPath.value)/userHPPath.max));
								}
								else if (movePath.value == "Flail" || movePath.value == "Reversal") {
									let val = userHPPath.value/userHPPath.max;
									if (Generation == 4) {
										if (val >= 0.6719) {
											Power = 20;
										}
										else if (val >= 0.3438 && val < 0.6719) {
											Power = 40;
										}
										else if (val >= 0.2031 && val < 0.3438) {
											Power = 80;
										}
										else if (val >= 0.0938 && val < 0.2031) {
											Power = 100;
										}
										else if (val >= 0.0313 && val < 0.0938) {
											Power = 150;
										}
										else if (val < 0.0313) {
											Power = 200;
										}
									}
									else {
										if (val >= 0.6875) {
											Power = 20;
										}
										else if (val >= 0.3542 && val < 0.6875) {
											Power = 40;
										}
										else if (val >= 0.2083 && val < 0.3542) {
											Power = 80;
										}
										else if (val >= 0.1042 && val < 0.2083) {
											Power = 100;
										}
										else if (val >= 0.0417 && val < 0.1042) {
											Power = 150;
										}
										else if (val < 0.0417) {
											Power = 200;
										}
									}
								}
								else if (movePath.value == "Fling") {
									if (userItemPath != undefined) {
										Power = flingPowerCalc(userItemPath.value);
										if (userItemPath.value.includes("TR")) {
											let val = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],getMachineMove(userItemPath.value));
											val = undwsnullnanDel(val,10);
											Power = val;
											Power = parseInt(Power);
										}
									}
								}

								for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
									if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
										if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Aura" || finaldata["Moves"]["Additional"][u]["Additional"] == "Pulse") {
												if (userAbilityPath != undefined && userAbilityPath.value == "Mega Launcher") {
													Power = Power*1.5;
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Bite") {
												if (userAbilityPath != undefined && userAbilityPath.value == "Strong Jaw") {
													Power = Power*1.5;
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Punch") {
												if (tarAbilityPath != undefined && tarAbilityPath.value == "Iron Fist") {
													Power = Power*1.2;
												}
												else if (userItemPath != undefined && userItemPath.value == "Punching Glove") {
													Power = Power*1.1;
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Slice") {
												if (userAbilityPath != undefined && userAbilityPath.value == "Sharpness") {
													Power = Power*1.5;
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Sound") {
												if (userAbilityPath != undefined && userAbilityPath.value == "Punk Rock") {
													Power = Power*1.3;
												}
												if (tarAbilityPath != undefined && tarAbilityPath.value == "Punk Rock") {
													Power = Power*0.5;
												}
											}
										}
									}
								}

								Power = Math.ceil(Power)
							}

							if (movePath.value == "Weather Ball") {
								var check = false;
								if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(tar,"Air Lock","Ability","All","") == 0) {
									if (weatherHarshSunlightPath != undefined && weatherHarshSunlightPath.checked) {
										check = true;
									}
									else if (weatherRainPath != undefined && weatherRainPath.checked) {
										check = true;
									}
									else if (weatherHailPath != undefined && weatherHailPath.checked || weatherSnowPath != undefined && weatherSnowPath.checked) {
										check = true;
									}
									else if (weatherSandstormPath != undefined && weatherSandstormPath.checked) {
										check = true;
									}
									else if (weatherShadowyAuraPath != undefined && weatherShadowyAuraPath.checked) {
										check = true;
									}
									else if (weatherFogPath != undefined && weatherFogPath.checked) {
										check = true;
									}
								}
								
								if (weatherExtremelyHarshSunlightPath != undefined && weatherExtremelyHarshSunlightPath.checked || weatherHeavyRainPath != undefined && weatherHeavyRainPath.checked) {
									check = true;
								}
								
								if (check) {
									Power = Power*2;
								}
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
							if (weatherExtremelyHarshSunlightPath != undefined && weatherExtremelyHarshSunlightPath.checked) {
								if (moveType == "Water") {
									Affected = false;
								}
							}
							if (weatherHeavyRainPath != undefined && weatherHeavyRainPath.checked) {
								if (moveType == "Fire") {
									Affected = false;
								}
							}
							if (movePath.value == "Rollout") {
								if (DefenseCurlPath.checked) {
									Rollout = 2**((parseInt(countInputPath.value)-1)+1);
								}
								else {
									Rollout = 2**(parseInt(countInputPath.value)-1);
								}
							}
							if (movePath.value == "Fury Cutter") {
								FuryCutter = 2**(parseInt(countInputPath.value)-1);
							}
							if (movePath.value == "Rage") {
								Rage = parseInt(countInputPath.value);
							}
							if (movePath.value == "Pursuit") {
								if (SwitchPath.checked) {
									Pursuit = 2;
								}
							}
							if (movePath.value == "Stomp" || movePath.value == "Needle Arm" || movePath.value == "Astonish" || movePath.value == "Extrasensory") {
								if (MinimizePath != undefined && MinimizePath.checked) {
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

							for(let u = 0; u < finaldata["Items"]["Type Enhance"].length; u++) {
								if (userItemPath != undefined && finaldata["Items"]["Type Enhance"][u]["Item"] == userItemPath.value) {
									if (getApplicable(finaldata["Items"]["Type Enhance"][u]["Game"])) {
										if (finaldata["Items"]["Type Enhance"][u]["Type"] == moveType) {
											var check = false;
											if (finaldata["Items"]["Type Enhance"][u]["Pokémon"] == undefined) {
												check = true;
											}
											else if (finaldata["Items"]["Type Enhance"][u]["Pokémon"].includes(",")) {
												check 
												let tempPok = finaldata["Items"]["Type Enhance"][u]["Pokémon"].split(",")
												for(let p = 0; p < tempPok.length; p++) {
													if (getPokémonName(getPokémonInt(tempPok[p])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
														check = true;
														break;
													}
												}
											}
											else if (getPokémonName(getPokémonInt(finaldata["Items"]["Type Enhance"][u]["Pokémon"])) == getPokémonName(getDefaultInt(getPokémonInt(userPokémonPath.value)))) {
												check = true;
											}
											if (check) {
												Item = finaldata["Items"]["Type Enhance"][u]["Value"];
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
						}
					
						if ("Factors Generation") {
							if (Generation == 1) { // DMG Generation 1
								if (moveCategory == "Physical") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Defense") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								else if (moveCategory == "Special") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Special") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
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
								
								let used = []
								if (tarTypes.length > 0) {
									let typeadv = returnTypeAdvantage(moveType,"Attacking");

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
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Defense") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								else if (moveCategory == "Special") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
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
										for(let u = 0; u < tarModPath.length; u++) {
									
											let tarval = tarModPath[u].value;
											if (tarval == "" || tarval == undefined) {
												tarval = 0;
											}
			
											if (moveCategory == "Physical") {
												if (tarModPath[u].getAttribute("name") == "Attack") {
													for(let r = 0; r < userModPath.length; r++) {
														let userval = userModPath[r].value;
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
													for(let r = 0; r < userModPath.length; r++) {
														let userval = userModPath[r].value;
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
													for(let r = 0; r < userModPath.length; r++) {
														let userval = userModPath[r].value;
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
													for(let r = 0; r < userModPath.length; r++) {
														let userval = userModPath[r].value;
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
								for (let u = 0; u < tarTypes.length; u++) {
									let typeadv = returnTypeAdvantage(moveType,"Attacking");
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
								for (let u = 0; u < userBadgePath.length; u++) {
									if (userBadgePath[u].parentElement.title.includes(moveType+"-type")) {
										if (userBadgePath[u].checked) {
											Badge = 1.125;
										}
									}
								}
								if (movePath.value == "Triple Kick") {
									TripleKick = countInputPath.value;
								}
								if (movePath.value == "Flail" || movePath.value == "Reversal") {
									random = 1;
								}
							}
							else if (Generation == 3) { // DMG Generation 3
								random = randomPath.value/100;
								
								if (moveCategory == "Physical") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Defense") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								else if (moveCategory == "Special") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
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
									for(let u = 0; u < userModPath.length; u++) {
										let userval = userModPath[u].value;
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
									for(let u = 0; u < tarModPath.length; u++) {
										let tarval = tarModPath[u].value;
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
								for (let u = 0; u < tarTypes.length; u++) {
									let typeadv = returnTypeAdvantage(moveType,"Attacking");
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
								if (movePath.value == "Spit Up") { // No Random
									random = 1;
								}
							}
							else if (Generation == 4) { // DMG Generation 4
						
								random = randomPath.value/100;
								
								if (moveCategory == "Physical") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Defense") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								else if (moveCategory == "Special") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
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
									for(let u = 0; u < userModPath.length; u++) {
										let userval = userModPath[u].value;
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
									for(let u = 0; u < tarModPath.length; u++) {
										let tarval = tarModPath[u].value;
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
									let val = userItemCountPath.value;
									if (isNaN(val)) {
										val = 0;
									}
									if (val > 10) {
										val = 10;
									}
									Metronome = 1+(val/10);
								}
								
								if (tarTypes.length > 0) {
									let typeadv = returnTypeAdvantage(moveType,"Attacking");

									if (typeadv[2].includes(tarTypes[0].toUpperCase())) {
										Type1 = Type1*2;
									}
									if (typeadv[2].includes(tarTypes[0].toUpperCase())) {
										Type1 = Type1*0.5;
									}
									if (typeadv[3].includes(tarTypes[0].toUpperCase())) {
										Immune = true;
									}

									if (typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type2 = Type2*2;
									}
									if (typeadv[2].includes(tarTypes[1].toUpperCase())) {
										Type2 = Type2*0.5;
									}
									if (typeadv[3].includes(tarTypes[1].toUpperCase())) {
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
								if (movePath.value == "Spit Up") { // No Random
									random = 1;
								}
							}
							else if (Generation >= 5) { // DMG Generation 5+
								if (movePath.value == "Beat Up") {
									let el = document.querySelector("#contain div#tool div#dmg div[name='result'] > span[name='party'] > span[name='"+userTeam+"']");
									let ds = el.getAttribute("data-string");

									if (ds == undefined || ds == "") {
										ds = user.getAttribute("data-string");
									}
			
									ds = ds.replaceAll("\r","");
									ds = ds.replaceAll("\n","_");
									ds = splitStr(ds,"_");

									let val = 0;

									for(let r = 0; r < ds.length; r++) {
										if (r == h) {
											let obj = dataStringToObj(ds[r]);
											if (obj["pok"] != undefined && obj["pok"] != undefined) {
												let int = getPokémonInt(obj["pok"]);
												let atk = returnData(int,"Base Stats Attack","")[0];
												val = parseInt(atk);
												break;
											}
										}
									}
									
									Power = Math.floor((val/10)+5);
								}
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
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Attack") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Defense") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								else if (moveCategory == "Special") {
									for(let u = 0; u < userStatsPath.length; u++) {
										if (userStatsPath[u].getAttribute("name") == "Sp. Atk") {
											Attack = userStatsPath[u].value;
											NoModAttack = userStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
									for(let u = 0; u < tarStatsPath.length; u++) {
										if (tarStatsPath[u].getAttribute("name") == "Sp. Def") {
											Defense = tarStatsPath[u].value;
											NoModDefense = tarStatsPath[u].getAttribute("data-nomod");
											break;
										}
									}
								}
								if (Critical > 1) {
									// Ignore "Negative" User Attack Stat Changes on Critical Hit
									for(let u = 0; u < userModPath.length; u++) {
										let userval = userModPath[u].value;
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
									for(let u = 0; u < tarModPath.length; u++) {
										let tarval = tarModPath[u].value;
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
								
								for (let u = 0; u < tarTypes.length; u++) {
									let typeadv = returnTypeAdvantage(moveType,"Attacking");

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
									if (tarTypes.includes("Water")) {
										Type = Type*4;
									}
								}
								if (movePath.value == "Flying Press") {
									let tempTypeAdv = returnTypeAdvantage("Flying","Defending");
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
									let tempOtherMoves = [];
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
											if (returnArrValue(finaldata["Moves"]["Other Moves"],DATA_Move_Reference["Name"],"Contact",movePath.value) == "Makes contact") {
												Fluffy1 = 0.5;
											}
										}
									}
								}
								if (tarAbilityPath.value == "Punk Rock") {
									if (returnArrValue(finaldata["Moves"]["Other Moves"],DATA_Move_Reference["Name"],"Sound-Based",movePath.value) == "Is a sound-tard move") {
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
									let val = userItemCountPath.value;
									if (isNaN(val)) {
										val = 0;
									}
									Metronome = 1+((819/4096)*val);
									if (Metronome > 2) {
										Metronome = 2;
									}
								}
								if (ProtectionPath.checked) {
									let grp = returnArrValue(finaldata["Moves"]["Group"],DATA_Move_Reference["Name"],"Group",movePath.value);
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
						}

						if ("Factors Post") {
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

							if (Ability.length > 0) {
								if (DMGFindScenario(tar,"Cloud Nine","Ability","All","") > 0 || DMGFindScenario(tar,"Air Lock","Ability","All","") > 0) {
									Weather = 1;
								}
							}
							
							for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
								if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
									if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
										if (finaldata["Moves"]["Additional"][u]["Additional"] == "Explosive") {
											if (DMGFindScenario(user,"Damp","Ability","Enemy","") > 0) {
												Affected = false;
											}
										}
										if (finaldata["Moves"]["Additional"][u]["Additional"] == "Ball" || finaldata["Moves"]["Additional"][u]["Additional"] == "Bomb") {
											if (tarAbilityPath != undefined && tarAbilityPath.value == "Bulletproof") {
												Affected = false;
											}
										}
										if (finaldata["Moves"]["Additional"][u]["Additional"] == "Powder" || finaldata["Moves"]["Additional"][u]["Additional"] == "Spore") {
											if (Generation >= 6) {
												if (tarTypes.includes("Grass") || tarAbilityPath != undefined && tarAbilityPath.value == "Overcoat" || tarItemPath != undefined && tarItemPath.value == "Safety Goggles") {
													Affected = false;
												}
											}
										}
										if (finaldata["Moves"]["Additional"][u]["Additional"] == "Sound") {
											if (tarAbilityPath != undefined && tarAbilityPath.value == "Soundproof") {
												var check = true;
												if (Generation == 5 && movePath.value == "Heal Bell") {
													check = false;
												}
												if (check) {
													Affected = false;
												}
											}
										}
									}
								}
							}
							if (tarAbilityPath != undefined && tarAbilityPath.value == "Telepathy") {
								if (userTeam == tarTeam) {
									Affected = false;
								}
							}

							if (movePath.value == "Night Shade" || movePath.value == "Seismic Toss" || movePath.value == "Endeavor" || movePath.value == "Nature's Madness" || movePath.value == "Super Fang" || movePath.value == "Ruination" || movePath.value == "Final Gambit" || movePath.value == "Psywave") { // No Stab/Type Boost
								STAB = 1;
								Type = 1;
								Type1 = 1;
								Type2 = 1;
							}

			


						}

						if ("Accuracy") {
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

							let acc = moveAccuracy;
							acc = acc.replaceAll("%","").replaceAll("~","");
							let evasionMod = tarModEvasionPath.value;
							let accuracyMod = userModAccuracyPath.value;

							
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

								let fr = undDel(userFriendshipPath.value,0);

								if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
									let af = undDel(userAffectionPath.value,0);
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
							
							moveAccuracy = Math.min(Math.max(accCalc,0),100);

							if (returnArrValue(finaldata["Moves"]["Accuracy"],DATA_Move_Reference["Name"],DATA_Move_Accuracy["Accuracy"],movePath.value) == undefined) {
								moveAccuracy = 100;
							}




							if (movePath.value == "Fissure" || movePath.value == "Guillotine" || movePath.value == "Horn Drill" || movePath.value == "Sheer Cold") {
								if (Generation == 1) {
									let val1 = userSpeedStatPath.value;
									let val2 = tarSpeedStatPath.value
									val1 = undDel(val1,0);
									val2 = undDel(val2,0);
									val1 = parseInt(val1);
									val2 = parseInt(val2);

									if (val2 > val1) {
										moveAccuracy = 0;
									}
								}
								else {
									let val1 = userLevelPath.value;
									let val2 = tarLevelPath.value
									val1 = undDel(val1,0);
									val2 = undDel(val2,0);
									val1 = parseInt(val1);
									val2 = parseInt(val2);

									if (val2 > val1) {
										moveAccuracy = 0;
									}
								}
								Type1 = 1;
								Type2 = 1;
								Type = 1;
							}

							accRes.push(Math.ceil(moveAccuracy)+"%");
						}

						if ("Critical") {
							let critCalc = 0;

							let critHigh = false;
							for (let a = 0; a < finaldata["Moves"]["Additional"].length; a++) {
								if (finaldata["Moves"]["Additional"][a]["Additional"] == "High Critical-hit Ratio") {
									if (getApplicable(finaldata["Moves"]["Additional"][a]["Game"])) {
										if (finaldata["Moves"]["Additional"][a]["Move"] == movePath.value) {
											critHigh = true;
											break;
										}		
									}
								}
							}

							let critMod = userModCriticalPath.value;
							critMod = undwsnullnanDel(critMod,0);

							if (critHigh) {
								critMod = parseInt(critMod)+1;
							}


							if (Generation == 1) {
								let tarspeed = parseInt(returnData(getPokémonInt(userPokémonPath.value),"Base Stats Speed","")[0]);

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
							for (let a = 0; a < finaldata["Moves"]["Additional"].length; a++) {
								if (finaldata["Moves"]["Additional"][a]["Additional"] == "Set Damage" || finaldata["Moves"]["Additional"][a]["Additional"] == "One-hit Knockout") {
									if (getApplicable(finaldata["Moves"]["Additional"][a]["Game"])) {
										if (finaldata["Moves"]["Additional"][a]["Move"] == movePath.value) {
											critCalc = 0;
											break;
										}		
									}
								}
							}
			

							critCalc = Math.round(critCalc);
							critCalc = undwsnullnanDel(critCalc,0);
							critRes.push(critCalc+"%")
						}

						if ("Calculation") {
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
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Critical*(Item)*(GustTwister*StompNeedleArmAstonishExtrasensory*SurfWhirlpool*EarthquakeMagnitude*Pursuit*Facade*SmellingSalt*Revenge)*Charge*HelpingHand*STAB*Type*random*(Rollout*FuryCutter*Rage);
							}
							else if (Generation == 4) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)*Burn*Screen*Targets*Weather*FlashFire+2)*Critical*(Item*LifeOrb*Metronome)*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit)*HelpingHand*random*STAB*Type1*Type2*SolidRockFilter*ExpertBelt*TintedLens*Berry;
							}
							else if (Generation >= 5) {
								calculation = ((((((2*Level)/5)+2)*Power*(Attack/Defense))/50)+2)*Targets*Weather*GlaiveRush*Critical*HelpingHand*random*STAB*Type*Burn*Screen*(SolidRockFilter*BehemothBladeBehemothBashDynamaxCannon*Minimize*SurfWhirlpool*EarthquakeMagnitude*Screen*ColissionCourseElectroDrift*MultiscaleShadowShield*Fluffy1*PunkRock*IceScales*FriendGuard*FilterPrismArmorSolidRock*Neuroforce*Sniper*TintedLens*Fluffy2*(Item*LifeOrb*ExpertBelt*Metronome)*Berry)*ZMove*(MeFirst*Rollout*FuryCutter*Rage*StompNeedleArmAstonishExtrasensory*Pursuit);
							}

							if (Generation == 1) {
								if (movePath.value == "Night Shade" || movePath.value == "Seismic Toss") { // Bypass Immunity Check
									Immune = false;
								}
							}

							if (!Immune && Affected && moveAccuracy != 0) {

								calculation = Math.max(calculation,1);

								if (Power == 0) {
									calculation = 0;
								}

								// Varied Calculation //
								if (movePath.value == "Endeavor") {
									let val1 = (parseInt(tarHPPath.value) - parseInt(userHPPath.value));

									val1 = val1;
									if (val1 < 0) {
										val1 = 0;
									}
									calculation = val1;
								}
								else if (movePath.value == "Final Gambit") {
									calculation = userHPPath.value;
									DMGCalcApply(user,calculation,"Damage");
								}
								else if (movePath.value == "Nature's Madness" || movePath.value == "Super Fang" || movePath.value == "Ruination") {
									calculation = Math.max(1,Math.floor(tarHPPath.value/2));
								}
								else if (movePath.value == "Night Shade" || movePath.value == "Seismic Toss") {
									calculation = userLevelPath.value;
								}
								else if (movePath.value == "Psywave") {
									if (Generation == 1 || Generation == 2) {
										calculation = Math.max(1,parseFloat(randomPath.value));
									}
									else if (Generation >= 3 && Generation <= 4) {
										calculation = Math.max(1,Math.floor((parseFloat(userLevelPath.value)*((10*parseFloat(randomPath.value))+50))/100));
									}
									else if (Generation >= 5) {
										calculation = Math.max(1,Math.floor((parseFloat(userLevelPath.value)*((parseFloat(randomPath.value))+50))/100));
									}
								}


								// Calculation Apply //
								if (movePath.value == "Triple Kick" && Generation == 2 || movePath.value == "Spit Up" || movePath.value == "Magnitude") { // Variable Power (Break Multiple Hits Loop)
									DMGCalcApply(tar,calculation,"Damage");
									h = countInputPath.value-1;
								}
								else if (movePath.value == "Present") { // Present
									if (countInputPath.value == 4) { // Heal
										let val = tarHPPath.max/4
										DMGCalcApply(tar,val,"Heal");
									}
									else { // Damage
										DMGCalcApply(tar,calculation,"Damage");
									}
									h = countInputPath.value-1;
								}
								else if (userAbilityPath != undefined && userAbilityPath.value == "Parental Bond") { // Parental Bond
									var check = true;
									for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
										if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
											if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
												if (finaldata["Moves"]["Additional"][u]["Additional"] == "Multi-strike") {
													check = false;
												}
											}
										}
									}
									if (check) {
										for (let t = 0; t < 2; t++) {
											if (Generation == 6) {
												if (t == 1) {
													DMGCalcApply(tar,calculation*0.5,"Damage");
												}
												else {
													DMGCalcApply(tar,calculation,"Damage");
												}
											}
											else {
												if (t == 1) {
													DMGCalcApply(tar,calculation*0.25,"Damage");
												}
												else {
													DMGCalcApply(tar,calculation,"Damage");
												}
											}
										}
									}
									h = countInputPath.value-1;
								}
								else { // Default
									DMGCalcApply(tar,calculation,"Damage");
								}


								for (let u = 0; u < finaldata["Moves"]["Additional"].length; u++) {
									if (getApplicable(finaldata["Moves"]["Additional"][u]["Game"])) {
										if (finaldata["Moves"]["Additional"][u]["Move"] == movePath.value) {
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "One-hit Knockout") {
												DMGCalcApply(tar,parseInt(tarHPPath.value),"Damage");
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Set Damage") {
												if (finaldata["Moves"]["Additional"][u]["Value"] != undefined) {
													let val = parseInt(finaldata["Moves"]["Additional"][u]["Value"]);
													DMGCalcApply(tar,val,"Damage");
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Explosive") {
												if (DMGFindScenario(user,"Damp","Ability","Enemy","") == 0) {
													DMGCalcApply(user,userHPPath.value,"Damage");
												}
											}
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Drain") {
												if (finaldata["Moves"]["Additional"][u]["Value"] != undefined) {
													let val = 0;
													var check = true;
													if (finaldata["Moves"]["Additional"][u]["Type"] == "Move Damage") {
														val = (tarHPPath.value-DMGFindCurrentHP(tar))*parseFloat(finaldata["Moves"]["Additional"][u]["Value"]);
													}
													if (userItemPath != undefined && userItemPath.value == "Big Root") {
														val = val*1.3;
													}
													if (finaldata["Moves"]["Additional"][u]["Condition"] == "Asleep") {
														if (!tarStatusAsleepPath.checked) {
															check = false;
														}
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
											if (finaldata["Moves"]["Additional"][u]["Additional"] == "Recoil") {
												if (finaldata["Moves"]["Additional"][u]["Value"] != undefined) {
													var check = true;
			
													if (userAbilityPath != undefined && userAbilityPath.value == "Rock Head") {
														check = false;
													}
													if (finaldata["Moves"]["Additional"][u]["Move"] == "Struggle" || finaldata["Moves"]["Additional"][u]["Move"] == "Shadow End" || finaldata["Moves"]["Additional"][u]["Move"] == "Shadow Rush") {
														check = true;
													}
			
													if (check) {
														let val = 0;
														
														if (finaldata["Moves"]["Additional"][u]["Type"] == "Move Damage") {
															val = (tarHPPath.value-DMGFindCurrentHP(tar))*parseFloat(finaldata["Moves"]["Additional"][u]["Value"]);
														}
														if (finaldata["Moves"]["Additional"][u]["Type"] == "Current HP") {
															val = userHPPath.value*parseFloat(finaldata["Moves"]["Additional"][u]["Value"]);
														}
														if (finaldata["Moves"]["Additional"][u]["Type"] == "Max HP") {
															val = userHPPath.max*parseFloat(finaldata["Moves"]["Additional"][u]["Value"]);
														}
			
														DMGCalcApply(user,val,"Damage");
													}
												}
											}	
											break;
										}
									}
								}
							}
							else {
								Type1 = 1;
								Type2 = 1;
								Type = 1;
							}
						}

						if ("Info" && h == 0) {
							if (Generation == 1 || Generation == 4) {
								if (Type1*Type2 == 2) {
									negativeEffect.push("Super Effective");
								}
								else if (Type1*Type2 == 4) {
									negativeEffect.push("Super Effective!!");
								}
								else if (Type1*Type2 == 0.5) {
									negativeEffect.push("Not Very Effective");
								}
								else if (Type1*Type2 == 0.25) {
									negativeEffect.push("Not Very Effective!!");
								}
								else {
									negativeEffect.push("Normal");
								}
								if (Immune) {
									negativeEffect.push("Immune");
								}
							}
							else {
								if (Type == 2) {
									negativeEffect.push("Super Effective");
								}
								else if (Type == 4) {
									negativeEffect.push("Super Effective!!");
								}
								else if (Type == 0.5) {
									negativeEffect.push("Not Very Effective");
								}
								else if (Type == 0.25) {
									negativeEffect.push("Not Very Effective!");
								}
								if (!Affected) {
									negativeEffect.push("Unaffected");
								}
								if (Immune) {
									negativeEffect.push("Immune");
								}
							}

							negativeEffect = negativeEffect.filter(e => e != "Normal");

							if (STAB > 1) {
								positiveEffect.push("STAB");
							}
		
		
							pwrRes.push(Power);
						}

						
					}
				
					positiveEffect = [...new Set(positiveEffect)];
					negativeEffect = [...new Set(negativeEffect)];

					for (let e = 0; e < negativeEffect.length; e++) {
						let el = tarEffectNegativePath.querySelector(":scope > *[name='"+negativeEffect[e]+"']");
						if (el == undefined) {
							let txt = document.createElement("small");
							txt.setAttribute("name",negativeEffect[e])
							txt.innerText = negativeEffect[e];
							tarEffectNegativePath.appendChild(txt)
						}
					}
					
					for (let e = 0; e < positiveEffect.length; e++) {
						let el = userEffectPositivePath.querySelector(":scope > *[name='"+positiveEffect[e]+"']");
						if (el == undefined) {
							let txt = document.createElement("small");
							txt.setAttribute("name",positiveEffect[e])
							txt.innerText = positiveEffect[e];
							userEffectPositivePath.appendChild(txt)
						}
					}

					
				}


				if ("End of turn") {
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
							let val = 0;
							if (Generation == 1) {
								val = Math.floor(tarHPPath.max/16);
							}
							else {
								val = Math.floor(tarHPPath.max/8);
							}

							if (tarAbilityPath != undefined && tarAbilityPath.value == "Heatproof") {
								val = val/2;
							}

							if (val <= 0) {
								val = 1;
							}

							DMGCalcApply(tar,val,"Damage");
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
							let val = 1;
							if (Generation == 1) {
								val = Math.floor(tarHPPath.max/16);
							}
							else {
								val = Math.floor(tarHPPath.max/8);
							}
							val = Math.max(val,1)
							DMGCalcApply(tar,val,"Damage");
						}

						if (tarStatusBadPoisonPath.value != "" && tarStatusBadPoisonPath.value != undefined && tarStatusBadPoisonPath.value != 0) {
							let val = 1;
							if (Generation == 1) {
								val = Math.floor(tarHPPath.max/16);
							}
							else {
								val = Math.floor(tarHPPath.max/8);
							}
							val = Math.max(val,1);
							val = tarStatusBadPoisonPath.value*val
							DMGCalcApply(tar,val,"Damage");
						}
					}

					if (weatherHarshSunlightPath != undefined && weatherHarshSunlightPath.checked) {
						if (tarAbilityPath != undefined && tarAbilityPath.value == "Dry Skin") {
							let val = Math.floor(tarHPPath.max/8);
							DMGCalcApply(tar,val,"Damage");
						}
					}
					if (weatherRainPath != undefined && weatherRainPath.checked) {
						if (tarAbilityPath != undefined && tarAbilityPath.value == "Dry Skin") {
							let val = Math.floor(tarHPPath.max/8);
							DMGCalcApply(tar,val,"Heal");
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
							let val = Math.floor(tarHPPath.max/16);
							val = Math.max(val,1)
							DMGCalcApply(tar,val,"Damage");
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
							let val = Math.floor(tarHPPath.max/16);
							val = Math.max(val,1)
							DMGCalcApply(tar,val,"Damage");
						}
					}

					
					if (tarSpikesPath != undefined && tarSpikesPath.value != "" && tarSpikesPath.value != undefined && tarSpikesPath.value != 0) {
						let rel = 1;
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
							let val = Math.floor(tarHPPath.max/rel);
							val = Math.max(val,1);
							DMGCalcApply(tar,val,"Damage");
						}
					}
					
					var check = true;
					if (tarAbilityPath != undefined && tarAbilityPath.value == "Magic Guard") {
						check = false;
					}
					if (check) {
						if (tarStealthRockPath != undefined && tarStealthRockPath.checked) {
							let typ = 1;
							let adv = returnTypeAdvantage("Rock","Attacking");
							
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

							let val = 0;
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
							val = Math.floor(tarHPPath.max/val);
							val = Math.max(val,1);
							DMGCalcApply(tar,val,"Damage");
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

							val = Math.floor(tarHPPath.max/val);
							val = Math.max(val,1);
							DMGCalcApply(tar,val,"Damage");
						}
					}

					if (tarSeedHealPath.checked) {
						var check = true;

						if (check) {
							let val = 8;

							if (Generation == 1) {
								val = 16;
							}

							val = Math.floor(tarHPPath.max/val);
							val = Math.max(val,1);
							let type = "Heal";

							if (tarAbilityPath != undefined && tarAbilityPath.value == "Liquid Ooze") {
								type = "Damage";
							}
							else if (tarItemPath != undefined && tarItemPath.value == "Big Root") {
								val = val*0.3;
							}

							DMGCalcApply(tar,val,type);
						}
					}



					for (let u = 0; u < finaldata["Items"]["Restoration"].length; u++) {
						if (getApplicable(finaldata["Items"]["Restoration"][u]["Game"])) {
							if (tarItemPath != undefined && tarItemPath.value == finaldata["Items"]["Restoration"][u]["Item"]) {
								let activation = false;
								if (finaldata["Items"]["Restoration"][u]["Activation"] == "Super Effective") {
									if (Type1+Type2 > 2 || Type > 1) {
										activation = true;
									}
								}
								else if (parseFloat(finaldata["Items"]["Restoration"][u]["Activation"]) >= tarHPPath.value/tarHPPath.max) {
									activation = true;
								}
								let val = 0;

								if (finaldata["Items"]["Restoration"][u]["Type"] == "Max HP") {
									val = parseFloat(finaldata["Items"]["Restoration"][u]["Value"])*tarHPPath.max;
								}
								else if (finaldata["Items"]["Restoration"][u]["Type"] == "Set") {
									val = parseInt(finaldata["Items"]["Restoration"][u]["Value"]);
								}

								if (finaldata["Items"]["Restoration"][u]["Item"].includes(" Berry") && DMGFindScenario(tar,"Unnerve","Ability","Enemy","") > 0) {
									activation = false;
								}

								if (val != 0 && activation) {
									DMGCalcApply(tar,val,"Heal",finaldata["Items"]["Restoration"][u]["Use"]);
								}
							}
						}
					}
				}
			}
		}
		
		if ('Extra') {
			movePath.parentElement.style.color = "var(--type"+moveType+")";
			moveTypeImgPath.src = getMedia(true,[moveType],[PATH_Type_Icon])
			moveCategoryImgPath.src = getMedia(true,[moveCategory],[PATH_Move_Category])
			moveTypeTextPath.innerText = moveType;
			moveCategoryTextPath.innerText = moveCategory;
		}



		for (let i = 0; i < DMGCalculation.length; i++) {
			let dmg = 0;
			let heal = 0;
		
			let Team;
			let ID;

			let divBase;
			let pokBase;
			let HPPath;
			let HPCurrentPath;
			let HPMaxPath;
			let HPPercentagePath;
			let HPResultPath;

			for (let q = 0; q < DMGCalculation[i].length; q++) {

				Team = DMGCalculation[i][q]["Target"].parentElement.getAttribute("name");
				ID = DMGCalculation[i][q]["Target"].getAttribute("name");

				divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+Team+"'] > div[name='"+ID+"']");
				pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+Team+"'] > ul[name='"+ID+"']");
				HPPath = pokBase.querySelector(":scope *[name='hp'] > input");
				HPCurrentPath = divBase.querySelector(":scope *[name='hp'] *[name='current']");
				HPMaxPath = divBase.querySelector(":scope *[name='hp'] *[name='max']");
				HPPercentagePath = divBase.querySelector(":scope *[name='hp'] *[name='percentage'] > *");
				HPResultPath = divBase.querySelector(":scope *[name='hp'] *[name='result'] > *");

	
				if (DMGCalculation[i][q]["Type"] == "Damage") {
					dmg = dmg+DMGCalculation[i][q]["Value"];
				}
				if (DMGCalculation[i][q]["Type"] == "Heal") {
					heal = heal+DMGCalculation[i][q]["Value"];
				}
			}




			let hpval = HPPath.max;
			let dmgval = 0;
			if (hpval > 0) {
				hpval = hpval-(HPPath.max-HPPath.value);
				dmgval = dmgval;
			}
			if (hpval > 0) {
				hpval = hpval-dmg;
				dmgval = dmgval+dmg;
			}
			if (hpval > 0) {
				hpval = hpval+heal;
				dmgval = dmgval-heal;
			}
			hpval = Math.max(hpval,0);
			hpval = Math.min(hpval,HPPath.max);

			//dmgRes.push(HPPath.value-hpval);

			HPCurrentPath.innerText = hpval;
			HPMaxPath.innerText = HPPath.max;
			HPPercentagePath.innerText = (hpval/HPPath.max)*100;
			HPPercentagePath.innerText = parseInt(HPPercentagePath.innerText)+"%";
			HPResultPath.innerText = HPPath.value-hpval;
			HPResultPath.innerHTML = "-"+HPResultPath.innerText+"";
			HPResultPath.innerText = HPResultPath.innerText.replaceAll("--","+");

			if (HPResultPath.innerText == "-0") {
				HPResultPath.innerText = "";
			}






	
			let valStart = ((HPPath.value-dmg)/HPPath.max)*100;
			let valHeal = (((HPPath.value-dmg)+heal)/HPPath.max)*100;
			let valEnd = (HPPath.value/HPPath.max)*100;
		
			DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp']").style.setProperty("--dmg",valStart+"%");
			DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp']").style.setProperty("--heal",valHeal+"%");
			DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp']").style.setProperty("--hp",valEnd+"%");

			let val = (hpval/HPPath.max)*100;
			if (val > 80) {
				let resw = DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp'] *[name='result']").offsetWidth;
				if (resw != undefined && resw != "" && resw != 0) {
					DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp'] *[name='result']").style.marginLeft = "-"+(resw+5)+"px";
				}
				else {
					DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp'] *[name='result']").style.marginLeft = "-15px";
				}
			}
			else {
				DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp'] *[name='result']").style.marginLeft = "5px";
			}

			DMGCalculation[i][0]["Target"].querySelector(":scope *[name='hp'] *[name='result']").style.left = val+"%";
		}

		for (let i = 0; i < DMGCalculation.length; i++) {

			let dmg = 0;
			let heal = 0;
			let int = Infinity;

			let Team;
			let ID;

			let divBase;
			let pokBase;
			let HPPath;
			let HPBasePath;
			let HPCurrentPath;
			let HPMaxPath;
			let HPPercentagePath;
			let HPResultPath;

			for (let u = 0; u < 100; u++) {
				let brk = false;

				for (let q = 0; q < DMGCalculation[i].length; q++) {

					Team = DMGCalculation[i][q]["Target"].parentElement.getAttribute("name");
					ID = DMGCalculation[i][q]["Target"].getAttribute("name");

					divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+Team+"'] > div[name='"+ID+"']");
					pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+Team+"'] > ul[name='"+ID+"']");
					HPPath = pokBase.querySelector(":scope *[name='hp'] > input");
					HPBasePath = divBase.querySelector(":scope *[name='hp']");
					HPCurrentPath = divBase.querySelector(":scope *[name='hp'] *[name='current']");
					HPMaxPath = divBase.querySelector(":scope *[name='hp'] *[name='max']");
					HPPercentagePath = divBase.querySelector(":scope *[name='hp'] *[name='percentage']");
					HPResultPath = divBase.querySelector(":scope *[name='hp'] *[name='result']");

		
					if (DMGCalculation[i][q]["Type"] == "Damage") {
						dmg = dmg+DMGCalculation[i][q]["Value"]
					}
					if (HPPath.value-dmg <= 0) {
						brk = true;
						break;
					}
					if (DMGCalculation[i][q]["Type"] == "Heal") {
						heal = heal+DMGCalculation[i][q]["Value"]
					}
				}

				if (brk) {
					int = u;
					break;
				}

			}

			if (int != Infinity) {
				HPBasePath.title = (int+1)+"x turns before fainting.";
				HPBasePath.title = HPBasePath.title.replaceAll("1x turns","1x turn");
			}
		}

	
		let pwrResult;
		var check = true;
		for (let u = 0; u < pwrRes.length; u++) {
			if (u != 0) {
				if (pwrRes[u] != pwrRes[u-1]) {
					check = false;
					break;
				}
			}
		}
		if (check) {
			pwrResult = pwrRes[0];
		}
		else {
			pwrResult = pwrRes.join(" / ");
		}



		let accResult;
		var check = true;
		for (let u = 0; u < accRes.length; u++) {
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


		let critResult;
		var check = true;
		for (let u = 0; u < critRes.length; u++) {
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

		if (pwrRes.length == 0) {
			pwrResult = "0";
		}
		if (accRes.length == 0) {
			accResult = "0%";
		}
		if (critRes.length == 0) {
			critResult = "0%";
		}

		movePowerTextPath.innerText = pwrResult;
		moveAccuracyTextPath.innerText = accResult;
		moveCriticalTextPath.innerText = critResult;
	}


}
let DMGCalculation = [];

function DMGFindCurrentHP(base) {


	let team = base.parentElement.getAttribute("name");
	let id = base.getAttribute("name");

	let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
    let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");

    let HPInputPath = pokBase.querySelector(":scope *[name='hp'] > input");


	let hp = HPInputPath.value;

	for(let t = 0; t < DMGCalculation.length; t++) {
		for(let r = 0; r < DMGCalculation[t].length; r++) {
			if (DMGCalculation[t][r]["Target"] == base) {
				if (DMGCalculation[t][r]["Type"] == "Damage" && hp > 0) {
					hp = hp-parseInt(DMGCalculation[t][r]["Value"]);
				}
				if (DMGCalculation[t][r]["Type"] == "Heal" && hp > 0) {
					hp = Math.min(hp+parseInt(DMGCalculation[t][r]["Value"]),HPInputPath.max);
				}
			}
		}
	}
	
	hp = Math.max(hp,0);
	hp = Math.min(hp,HPInputPath.max);

	return hp;
	
}
function DMGCalcApply(base,val,type,charge) {

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


	let int = undefined;
	for(let t = 0; t < DMGCalculation.length; t++) {
		if (DMGCalculation[t][0]["Target"] == base) {
			int = t;
			break;
		}
	}

	if (val <= 0) {
		return;
	}

	val = Math.floor(val);
	val = Math.max(val,1);


	if (charge == undefined) {
		charge = Infinity;
	}

	let obj = new Object();
	obj["Type"] = type;
	obj["Value"] = val;
	obj["Target"] = base;
	obj["Uses"] = charge;
	
	if (int == undefined) {
		DMGCalculation.push([obj])
	}
	else {
		DMGCalculation[int].push(obj)
	}
}
function DMGCalcPokStats(base) {

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


	let types = [];
	for (let i = 0; i < typesPath.length; i++) {
		types.push(typesPath[i].value)
	}

	if (naturePath != undefined) {
		let nat = naturePath.value;
		nat = undDel(nat,"");
		statsBase.lastChild.setAttribute("name",nat);
	}


	if (pokémonPath.value != "") {
		let int = getPokémonInt(pokémonPath.value);

		let ivs = [];
		for(let t = 0; t < ivsPath.length; t++) {
			let val = ivsPath[t].value;
			val = undwsDel(val,0);
			ivs.push(val);
		}

		for (let i = 0; i < totalPath.length; i++) {
			let stat = Stats[i]["Name"];
			let base = returnData(int,"Base Stats "+stat,"")[0];

			let lvl = levelPath.value;
			let iv = ivsPath[i].value;
			let ev = evsPath[i].value;
			let nature = 1;
			let friendship = 1;

			lvl = undwsnullnanDel(lvl,0);
			iv = undwsnullnanDel(iv,0);
			ev = undwsnullnanDel(ev,0);

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
				let val = parseFloat(statsCalc(stat,lvl,base,iv,ev,nature,friendship));

				totalPath[i].setAttribute("min",val);
				totalPath[i].setAttribute("max",val);
				totalPath[i].value = val;

				if (stat == "HP") {
					
					if (Generation == 2) {
						ivsPath[0].value = binaryHPCalc(ivs);
					}


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
					pokHPPath.style.background = "linear-gradient(to right, Blue 0%, Blue "+per+"%, hsl(0,0%,90%) "+per+"%, hsl(0,0%,90%) 100%)"
				
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
								let newVal = val*1.5;
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
							let newVal = val*0.5;
							totalPath[i].setAttribute("min",newVal);
							totalPath[i].setAttribute("max",newVal);
							totalPath[i].value = newVal;
						}
					}
				}
				if (paraPath.checked) {
					if (stat == "Speed") {
						let poktype = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],pokémon.value);
						var check = true;
						if (Generation >= 6) {
							if (poktype[0] == "Electric" || poktype[1] == "Electric") {
								check = false;
							}
						}
							
						if (check) {
							if (Generation >= 1 && Generation <= 6) {
								let newVal = val*0.75;
								totalPath[i].setAttribute("min",newVal);
								totalPath[i].setAttribute("max",newVal);
								totalPath[i].value = newVal;
							}
							else {
								let newVal = val*0.5;
								totalPath[i].setAttribute("min",newVal);
								totalPath[i].setAttribute("max",newVal);
								totalPath[i].value = newVal;
							}
						}
					}
				}

				for (let b = 0; b < badgesPath.length; b++) {
					let input = badgesPath[b].querySelector(":scope input");
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
			}
			else {
				totalPath[i].setAttribute("min","0");
				totalPath[i].setAttribute("max","0");
				totalPath[i].value = 0;
			}
		}
	}


	DMGSpeedCalc();	
}

let DMGRandomLeave = false;

function DMGSetInfo() {
	
	let user = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string].user");
	let userID = user.getAttribute("name");
	let userTeam = user.parentElement.getAttribute("name");
    let userPokBase = document.querySelector("#contain > div#tool div#dmg > div span[name='"+userTeam+"'] ul[name='"+userID+"']");

	let userAbilityPath = userPokBase.querySelector(":scope *[name='ability'] select");
	let userPokPath = userPokBase.querySelector(":scope *[name='pokémon'] select");
	let userLevelPath = userPokBase.querySelector(":scope *[name='level'] input");
	let userItemPath = userPokBase.querySelector(":scope *[name='item'] select");

	let baseDiv = document.querySelector("#contain > div#tool div#dmg > div");
	let moveSelect = document.querySelector("#contain div#tool div#dmg div[name='menu'] *[name='move'] select");

	let specInput = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='count'] input");
	let specSelect = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='count'] select");
	let specLis = document.querySelectorAll("#contain div#tool div#dmg div[name='menu'] *[name='specific'] li");

    let battleSelect = document.querySelector("#contain > div#tool div#dmg div[name='options'] > div:first-child > span:first-child > select")


	let movePower = returnArrValue(finaldata["Moves"]["Power"],DATA_Move_Reference["Name"],DATA_Move_Power["Power"],moveSelect.value);
	let moveType = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],moveSelect.value);
	let moveGroup = returnArrValue(finaldata["Moves"]["Group"],DATA_Move_Reference["Name"],"Group",moveSelect.value)
	let moveRange = returnArrValue(finaldata["Moves"]["Range"],DATA_Move_Reference["Name"],"Range",moveSelect.value);


	let rollPath = document.querySelector("#contain div#tool div#dmg div[name='menu'] *[name='roll']")
	let rollRandomPath = rollPath.querySelector(":scope input[type='range']")
	let rollMinTextPath = rollPath.querySelector(":scope *[name='min']");
	let rollValTextPath = rollPath.querySelector(":scope *[name='val']");
	let rollMaxTextPath = rollPath.querySelector(":scope *[name='max']")
	

    let battleSizes = battleSelect.getAttribute("pokémon");
    battleSizes = undDel(battleSizes,"")
    if (battleSizes.includes(",")) {
        battleSizes = battleSizes.split(",");
    }
    else {
        battleSizes = [battleSizes]
    }
    let battleSize = 0;
    for (let u = 0; u < battleSizes.length; u++) {
        battleSize = battleSize+parseInt(battleSizes[u]);
    }


	let strikes = [1,1];

	specInput.title = "";
	
	specSelect.innerHTML = "";
	specSelect.style.display = "none";


	
	for (let a = 0; a < finaldata["Moves"]["Additional"].length; a++) {
		if (finaldata["Moves"]["Additional"][a]["Move"] == moveSelect.value) {
			if (getApplicable(finaldata["Moves"]["Additional"][a]["Game"])) {
				if (finaldata["Moves"]["Additional"][a]["Additional"] == "Multi-strike" || finaldata["Moves"]["Additional"][a]["Additional"] == "Ramping" || finaldata["Moves"]["Additional"][a]["Additional"] == "Variable") {
					if (finaldata["Moves"]["Additional"][a]["Value"] != undefined) {
						if (finaldata["Moves"]["Additional"][a]["Value"].includes("-")) {
							let val1 = finaldata["Moves"]["Additional"][a]["Value"].split("-")[0];
							let val2 = finaldata["Moves"]["Additional"][a]["Value"].split("-")[1];
							strikes = [val1,val2];
						}
						else {
							strikes = [finaldata["Moves"]["Additional"][a]["Value"],finaldata["Moves"]["Additional"][a]["Value"]];
						}
					}
				}

				if (finaldata["Moves"]["Additional"][a]["Additional"] == "Multi-strike") {
					specInput.title = "Amount of Hits";
				}
				else if (finaldata["Moves"]["Additional"][a]["Additional"] == "Ramping") {
					specInput.title = "Consecutive Turns of Hits";
				}
				else if (finaldata["Moves"]["Additional"][a]["Additional"] == "Variable") {
					specInput.title = "Variable Power";
				}
			}
		}
	}


	let firstIteration = false;
	if (rollRandomPath.value == -1) {
		firstIteration = true;
	}


	if (moveSelect.value == "Psywave") {
		if (Generation >= 1 && Generation <= 2) {
			rollRandomPath.min = 0;
			rollRandomPath.max = Math.floor(1.5*userLevelPath.value);
		}
		else if (Generation >= 3 && Generation <= 4) {
			rollRandomPath.min = 0;
			rollRandomPath.max = 10;
		}
		else if (Generation >= 5) {
			rollRandomPath.min = 0;
			rollRandomPath.max = 100;
		}
		DMGRandomLeave = true;
	}
	else {
		if (Generation >= 1 && Generation <= 2) {
            rollRandomPath.min = 217;
            rollRandomPath.max = 255;
        }
        else if (Generation >= 3) {
            rollRandomPath.min = 85;
            rollRandomPath.max = 100;
        }
	}


	if (DMGRandomLeave || firstIteration || rollRandomPath.value > parseFloat(rollRandomPath.max) || rollRandomPath.value < parseFloat(rollRandomPath.min)) {
		rollRandomPath.value = Math.round((parseFloat(rollRandomPath.max)-parseFloat(rollRandomPath.min))/2)+parseFloat(rollRandomPath.min);
	}



	let tempArr = ["Psywave"];
	if (DMGRandomLeave) {
		DMGRandomLeave = false;
	}
	if (tempArr.includes(moveSelect.value)) {
		DMGRandomLeave = true;
	}
	


	let pcent = ((rollRandomPath.value-parseFloat(rollRandomPath.min))/(parseFloat(rollRandomPath.max)-parseFloat(rollRandomPath.min)))*100;
	rollValTextPath.innerText = rollRandomPath.value-parseFloat(rollRandomPath.min);
	rollValTextPath.innerText = rollValTextPath.innerText+" ("+parseInt(pcent)+"%)";
	rollRandomPath.style.background = "linear-gradient(to right, Blue 0%, Blue "+pcent+"%, hsl(0,0%,90%) "+pcent+"%, hsl(0,0%,90%) 100%)"
	rollMinTextPath.innerText = parseFloat(rollRandomPath.min)-parseFloat(rollRandomPath.min);
	rollMaxTextPath.innerText = parseFloat(rollRandomPath.max)-parseFloat(rollRandomPath.min);


	for (let l = 0; l < specLis.length; l++) {
		specLis[l].style.display = "none";
		specLis[l].firstChild.checked = false;
	}

	for (let l = 0; l < specLis.length; l++) {
		if (specLis[l].getAttribute("name") == "Semi-Invulnerable Flight") {
			if (moveSelect.value == "Twister" || moveSelect.value == "Gust") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Semi-Invulnerable Dig") {
			if (moveSelect.value == "Earthquake" || moveSelect.value == "Magnitude") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Semi-Invulnerable Dive") {
			if (moveSelect.value == "Surf" || moveSelect.value == "Whirlpool") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Switching") {
			if (moveSelect.value == "Pursuit") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Minimize") {
			let tempOtherMoves = [];
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

			if (tempOtherMoves.includes(moveSelect.value)) {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Charge") {
			if (moveType == "Electric") {
				specLis[l].style.removeProperty("display");
			}
		}
		/*
		else if (specLis[l].getAttribute("name") == "Me First") {
			let uncallable = [];
			if (Generation == 4 || Generation == 5) {
				uncallable = ["Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
			}
			else if (Generation == 6) {
				uncallable = ["Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Struggle","Thief"]
			}
			else if (Generation == 7) {
				uncallable = ["Beak Blast","Belch","Chatter","Counter","Covet","Focus Punch","Metal Burst","Mirror Coat","Shell Trap","Struggle","Thief"]
			}
			if (!uncallable.includes(moveSelect.value)) {
				specLis[l].style.removeProperty("display");
			}
		}
		*/
		else if (specLis[l].getAttribute("name") == "Flash Fire") {
			if (userAbilityPath != undefined && userAbilityPath.value == "Flash Fire") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Tar Shot") {
			if (moveType == "Fire") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Defense Curl") {
			if (moveSelect.value == "Rollout") {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Helping Hand") {
			if (battleSize > 2) {
				specLis[l].style.removeProperty("display");
			}
		}
		else if (specLis[l].getAttribute("name") == "Z-Move") {
			if (moveSelect.value != "Struggle") {
				var check1 = false;
				var check2 = false;
				var check3 = false;
			
				for (let r = 0; r < finaldata["Moves"]["Call"].length; r++) {
					if (finaldata["Moves"]["Call"][r]["Call"] == moveSelect.value) {
						if (finaldata["Moves"]["Call"][r]["Type"] == "Z-Move") {
							if (finaldata["Moves"]["Call"][r]["Pokémon"] != undefined) {
								if (finaldata["Moves"]["Call"][r]["Pokémon"].includes(",")) {
									let vals = finaldata["Moves"]["Call"][r]["Pokémon"].split(",");
									for (let u = 0; u < vals.length; u++) {
										if (vals[u] == userPokPath.value) {
											check1 = true;
										}
									}
								}
								else {
									if (finaldata["Moves"]["Call"][r]["Pokémon"] == userPokPath.value) {
										check1 = true;
									}
								}
							}
							if (finaldata["Moves"]["Call"][r]["Item"] != undefined) {
								if (finaldata["Moves"]["Call"][r]["Item"] == userItemPath.value) {
									check2 = true;
								}
							}
						}
					}
				}



				if (userItemPath != undefined && userItemPath.value.includes(" Z") && userItemPath.value.includes(moveType.replace(/.$/, ''))) {
					check3 = true;
				}
				

				if (check1 && check2 || check3) {
					specLis[l].style.removeProperty("display");
				}
			}
		}
		else if (specLis[l].getAttribute("name") == "Max Move") {
			specLis[l].style.removeProperty("display");
		}
	}





	specInput.setAttribute("min",strikes[0]);
	specInput.setAttribute("max",strikes[1]);
	

	if (moveSelect.value == "Present") {
		specInput.value = strikes[0];
	}
	else {
		specInput.value = strikes[1];
	}


	if (strikes[0] == strikes[1]) {
		specInput.setAttribute("disabled","")
	}
	else {
		specInput.removeAttribute("disabled");
	}



	if (moveRange != undefined) {
		baseDiv.setAttribute("data-range",moveRange)
	}
	else {
		baseDiv.setAttribute("data-range","")
	}


	

	DMGSetPossible();
}
function DMGUpdateSRC() {


    let bases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");

	for (let i = 0; i < bases.length; i++) {

		let team = bases[i].parentElement.getAttribute("name");
		let id = bases[i].getAttribute("name");
	
		let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
		let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
		let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
		let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
		let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")
		let fieldBase = document.querySelector("#contain > div#tool div#dmg div[name='field']");
	
		let pokImgPath = divBase.querySelector(":scope *[name='img']");
		let genderPath = pokBase.querySelector(":scope *[name='gender'] select");
		let pokPath = pokBase.querySelector(":scope *[name='pokémon'] select");

		if (pokPath.value != "") {
			let data_dir = [PATH_Pokémon_Battle_Default_Front_GIF,PATH_Pokémon_Battle_Default_Front_PNG]

			if (bases[i].parentElement.parentElement.getAttribute("name") == "user") {
				data_dir = [PATH_Pokémon_Battle_Default_Back_GIF,PATH_Pokémon_Battle_Default_Back_PNG,PATH_Pokémon_Battle_Default_Front_GIF,PATH_Pokémon_Battle_Default_Front_PNG]
			}

			let data_file = ["^"+getPokémonPath(getPokémonInt(pokPath.value))]

			if (genderPath != undefined) {
				if (genderPath.value == "♂") {
					data_file.push(data_file[0]+"_Male");
				}
				else if (genderPath.value == "♀") {
					data_file.push(data_file[0]+"_Female");
				}
				else {
					data_file.push(data_file[0]+"_Male");
					data_file.push(data_file[0]+"_Female");
				}
			}

			
			pokImgPath.src = getMedia(true,data_file,data_dir,[],true)
		}
	}


}
function DMGSetChange(base) {

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


	let pokImgPath = divBase.querySelector(":scope *[name='img']");
	let pokItemPath = divBase.querySelector(":scope *[name='item']");
	let pokNamePath = divBase.querySelector(":scope *[name='name'] > *:last-child");
	let pokLvPath = divBase.querySelector(":scope *[name='name'] > *:first-child");
	let pokMovesPath = divBase.querySelectorAll(":scope *[name='moves'] > *");
	
	let pokPath = pokBase.querySelector(":scope *[name='pokémon'] select");
	let formPath = pokBase.querySelector(":scope *[name='pokémon'] > span input");
	let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
	let genderPath = pokBase.querySelector(":scope *[name='gender'] select");
	let itemPath = pokBase.querySelector(":scope *[name='item'] select");
	let friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
	let naturePath = pokBase.querySelector(":scope *[name='nature'] select");
	let levelPath = pokBase.querySelector(":scope *[name='level'] input");
	let movesPath = pokBase.querySelectorAll(":scope *[name='moves'] select");

	let ivPath = statsBase.querySelectorAll(":scope *[name='IV'] > input:not(:first-child)");
	let evPath = statsBase.querySelectorAll(":scope *[name='EV'] > input:not(:first-child)");
	let avPath = statsBase.querySelectorAll(":scope *[name='AV'] > input:not(:first-child)");

	let dataString = dataStringToObj(divBase.getAttribute("data-string"));


	divBase.title = "";

	pokImgPath.removeAttribute("src");
	pokImgPath.removeAttribute("title");
	if (HeldItem) {
		pokItemPath.removeAttribute("src");
		pokItemPath.removeAttribute("title");
	}
	pokNamePath.innerText = "";
	pokLvPath.innerText = "";

	for(let i = 0; i < pokMovesPath.length; i++) {
		pokMovesPath[i].firstChild.innerText = "";
		pokMovesPath[i].firstChild.removeAttribute("name");
		pokMovesPath[i].removeAttribute("data-category");
	}

	


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



			pokNamePath.innerText = pokName;
			if (level != undefined) {
				pokLvPath.innerText = "Lv. "+level;
			}
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
					let el = abilityPath.querySelector(":scope > *[name='"+ability+"']");

					if (el != undefined) {
						let val = el.getAttribute("value")
						if (val != undefined) {
							abilityPath.value = val;

							let abd = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",abilityPath.value)[0];
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

				
					let itd = returnAppArrData(finaldata["Items"]["Description"],"Item",itemPath.value)[0];
					itd = undDel(itd,{Description:""});
					itd = itd["Description"];
					pokItemPath.title = itd;
				

					if (itemPath.value != undefined && itemPath.value != "") {
						let itoc = getItemIcon(itemPath.value);
						itoc = undDel(itoc,itemPath.value);
						pokItemPath.src = getMedia(true,[itoc],[PATH_Item_Bag])
					}
				}
			}

			if (moves != undefined) {
				for(let v = 0; v < movesPath.length; v++) {
					movesPath[v].style.removeProperty("color");
					movesPath[v].value = movesPath[v].firstChild.value;
				}

				let usedm = [];
				if (moves.includes(",")) {
					moves = moves.split(",");
					if (moves.length == movesPath.length) {
						for(let v = 0; v < movesPath.length; v++) {
							if(moves[v] != undefined && moves[v] != "") {
								if (!usedm.includes(moves[v])) {
									movesPath[v].value = moves[v];
									let val = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],moves[v])
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
						for(let v = 0; v < pokMovesPath.length; v++) {
							let val = movesPath[v].value;
							if(val != undefined && !val.includes("#") && val != "") {
								let category = returnArrValue(finaldata["Moves"]["Category"],DATA_Move_Reference["Name"],DATA_Move_Category["Category"],val);
								let type = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],val)

								pokMovesPath[v].firstChild.innerText = val;
								pokMovesPath[v].firstChild.setAttribute("name",val);
								pokMovesPath[v].setAttribute("data-category",category);

								
							
								pokMovesPath[v].style.color = "var(--type"+type+")";
								

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
					let ivs = iv.split(",");
					if (ivs.length == ivPath.length) {
						for(let v = 0; v < ivs.length; v++) {
							ivPath[v].value = ivs[v];
						}
					}
				}
			}

			if (ev != undefined) {
				if (ev.includes(",")) {
					let evs = ev.split(",");
					if (evs.length == evPath.length) {
						for(let v = 0; v < evs.length; v++) {
							evPath[v].value = evs[v];
						}
					}
				}
			}

			if (av != undefined) {
				if (av.includes(",")) {
					let avs = av.split(",");
					if (avs.length == avPath.length) {
						for(let v = 0; v < avs.length; v++) {
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


	let uls = document.querySelectorAll("#contain > div#tool div#dmg > div ul");
	for (let q = 0; q < uls.length; q++) {
		let mov = uls[q].querySelectorAll(":scope *[name='move'] select");
		uniqueValueSelect(mov);
	}

	divBase.title = dataStringTitle(divBase.getAttribute("data-string"));;
	DMGUpdateSRC();
}
function DMGSetActive(val) {
	let x = findUpTag(event.target,"DIV");
	let all = x.parentElement.parentElement.parentElement.querySelectorAll(":scope div[data-string]");

	for(let a = 0; a < all.length; a++) {
		all[a].classList.remove(val);
	}
	x.classList.add(val);


	DMGSetPossible();
	//DMGCalcStart();
	DMGUpdateSRC();
	DMGResetCalc();
}
function DMGSetPossible() {
	let tars = [];
	let divWrap = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div");

	let allBase = document.querySelectorAll("#contain > div#tool div#dmg > div ol ul[name]");

	let old = divWrap.querySelectorAll(":scope > *[name] > *[name]");
	for(let a = 0; a < old.length; a++) {
		old[a].classList.remove("viable");
	}

	let movePath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='move'] select")
	let moveType = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],movePath.value);
	let moveRange = returnArrValue(finaldata["Moves"]["Range"],DATA_Move_Reference["Name"],"Range",movePath.value);

	let all = divWrap.querySelectorAll(":scope *[name*='team'] > div[data-string]");
	let userWrap = divWrap.querySelector(":scope span[name='user']");
	let tarWrap = divWrap.querySelector(":scope span[name='target']");
	let user = divWrap.querySelector(":scope span[name*='team'] > div[data-string].user");
	let userTemp = divWrap.querySelector(":scope span[name='team 1'] > div[data-string]");
	
	if (user == undefined) {
		userTemp.classList.add("user");
		for(let a = 0; a < all.length; a++) {
			all[a].classList.remove("target");
		}
	}

	user = divWrap.querySelector(":scope span[name*='team'] > div[data-string].user");


	document.querySelector("#contain > div#tool div#dmg > div").setAttribute("data-range",moveRange);

	if (user.parentElement.parentElement.getAttribute("name") == "target") {
		let els = userWrap.querySelectorAll(":scope > *");
		for(let a = 0; a < els.length; a++) {
			tarWrap.appendChild(els[a])
		}
		userWrap.appendChild(user.parentElement);
		for(let a = 0; a < all.length; a++) {
			all[a].classList.remove("target");
		}
	}

	let team = user.parentElement.getAttribute("name");
	let id = undefined;
	let nbs = user.parentElement.querySelectorAll(":scope > *");
	for(let a = 0; a < nbs.length; a++) {
		if (nbs[a] == user) {
			id = a;
			break;
		}
	}




	let idPrevious = parseInt(id)-1;
	let idNext = parseInt(id)+1;

	let adjacent = [];

	let allies = divWrap.querySelectorAll(":scope [name='"+team+"'] > div[data-string]:not([name='"+id+"'])");
	let enemies = divWrap.querySelectorAll(":scope *[name*='team']:not([name='"+team+"']) > div[data-string]");


	let adjThis = user.parentElement.querySelectorAll(":scope > div[data-string]");
	for(let a = 0; a < adjThis.length; a++) {
		if (a == idNext || a == idPrevious) {
			adjacent.push(adjThis[a])
		}
	}

	if (user.parentElement.previousElementSibling != undefined) {
		let adjLeft = user.parentElement.previousElementSibling.querySelectorAll(":scope > div[data-string]");
		for(let a = 0; a < adjLeft.length; a++) {
			if (a == id || a == idNext || a == idPrevious) {
				adjacent.push(adjLeft[a])
			}
		}
	}
	
	if (user.parentElement.nextElementSibling != undefined) {
		let adjRight = user.parentElement.nextElementSibling.querySelectorAll(":scope > div[data-string]");
		for(let a = 0; a < adjRight.length; a++) {
			if (a == id || a == idNext || a == idPrevious) {
				adjacent.push(adjRight[a])
			}
		}
	}




	if (user.parentElement.parentElement.previousElementSibling != undefined) {
		let adjTopLeftWrap = user.parentElement.parentElement.previousElementSibling.querySelectorAll(":scope > *[name*='team']");
		for(let t = 0; t < adjTopLeftWrap.length; t++) {
			let adjTopLeft = adjTopLeftWrap[t].querySelectorAll(":scope > div[data-string]");
			for(let a = 0; a < adjTopLeft.length; a++) {
				if (a == id || a == idNext || a == idPrevious) {
					adjacent.push(adjTopLeft[a])
				}
			}
		}
	}

	
	if (user.parentElement.parentElement.nextElementSibling != undefined) {
		let adjTopRightWrap = user.parentElement.parentElement.nextElementSibling.querySelectorAll(":scope > *[name*='team']");
		for(let t = 0; t < adjTopRightWrap.length; t++) {
			let adjTopRight = adjTopRightWrap[t].querySelectorAll(":scope > div[data-string]");
			for(let a = 0; a < adjTopRight.length; a++) {
				if (a == id || a == idNext || a == idPrevious) {
					adjacent.push(adjTopRight[a])
				}
			}
		}
	}


	if (moveRange == "May affect anyone adjacent to the user") {
		for(let a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}
	
	if (moveRange == "May randomly affect anyone adjacent to the user") {
		for(let a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}


	if (moveRange == "Affects all adjacent foes, but not allies") {
		for(let a = 0; a < adjacent.length; a++) {
			var check = true;
			for(let al = 0; al < allies.length; al++) {
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
		for(let a = 0; a < all.length; a++) {
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
		for(let a = 0; a < allies.length; a++) {
			tars.push(allies[a])
		}
	}



	if (moveRange == "Affects all Pokémon adjacent to the user") {
		for(let a = 0; a < adjacent.length; a++) {
			tars.push(adjacent[a])
		}
	}

	if (moveRange == "Affects all Pokémon on the field") {
		for(let a = 0; a < all.length; a++) {
			tars.push(all[a])
		}
	}

	if (moveRange == "Affects all foes") {
		for(let a = 0; a < enemies.length; a++) {
			tars.push(enemies[a])
		}
	}



	if (moveRange == "Affects an adjacent ally") {
		for(let a = 0; a < adjacent.length; a++) {
			var check = false;
			for(let al = 0; al < allies.length; al++) {
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
		for(let a = 0; a < adjacent.length; a++) {
			var check = false;
			for(let al = 0; al < allies.length; al++) {
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
		for(let a = 0; a < adjacent.length; a++) {
			var check = true;
			for(let al = 0; al < allies.length; al++) {
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
		for(let a = 0; a < allies.length; a++) {
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
		for(let a = 0; a < allBase.length; a++) {
			let ab = allBase[a].querySelector(":scope *[name='ability'] select")
			if (ab != undefined && ab.value == "Lightning Rod") {
				check.push(allBase[a]);
			}
		}
		if (check.length > 0) {
			tars = check;
		}
	}


	for(let a = 0; a < all.length; a++) {
		all[a].classList.remove("viable");
	}

	for(let a = 0; a < tars.length; a++) {
		tars[a].classList.add("viable");
	}
	


	var check1 = false;
	var check2 = true;
	for(let a = 0; a < all.length; a++) {
		if (all[a].classList.contains("target") && !all[a].classList.contains("viable")) {
			check1 = true;
		}
		if (all[a].classList.contains("target")) {
			check2 = false;
		}
	}
	if (check2) {
		check1 = true;
	}

	

	if (check1) {
		for(let a = 0; a < all.length; a++) {
			all[a].classList.remove("target");
		}

		let targets = divWrap.querySelectorAll(":scope span[name*='team'] > div[data-string].viable");
		let added = false;
		for(let a = 0; a < targets.length; a++) {
			if (targets[a] != user) {
				if (targets[a].parentElement.getAttribute("name") != user.parentElement.getAttribute("name")) {
					targets[a].classList.add("target");
					added = true;
					break;
				}
			}
		}
		if (!added) {
			for(let a = 0; a < targets.length; a++) {
				if (targets[a] != user) {
					if (targets[a].parentElement.getAttribute("name") != "team 1") {
						targets[a].classList.add("target");
						added = true;
						break;
					}
				}
			}
		}
		if (!added) {
			for(let a = 0; a < targets.length; a++) {
				if (targets[a] != user) {
					targets[a].classList.add("target");
					added = true;
					break;
				}
			}
		}
		if (!added) {
			for(let a = 0; a < targets.length; a++) {
				targets[a].classList.add("target");
				added = true;
				break;
			}
		}

	
		
	}
	DMGMatchPosition();
}
function DMGPokSpecific(base) {

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

	let pokNameVal = dataStringToObj(divBase.getAttribute("data-string"));

	let pokHPPath = pokBase.querySelector(":scope *[name='hp'] input[type='range']");
	let pokCurrentHPPath = pokBase.querySelector(":scope *[name='hp'] *[name='current']");
	let pokMaxHPPath = pokBase.querySelector(":scope *[name='hp'] *[name='max']");




	let int;

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

			divBase.setAttribute("data-string",divBase.getAttribute("data-string").replaceAll(val,"ab:"+pos))
		}
	}
	


	let opts = pokBase.querySelectorAll(":scope li[name='type'] select option");
	for (let o = 0; o < opts.length; o++) {
		opts[o].style.removeProperty("display");
	}
	let sel3 = pokBase.querySelector(":scope li[name='type'] select:nth-child(3)");
	if (sel3 != undefined) {
		sel3.innerHTML = "<option value=''></option>";
		sel3.style.removeProperty("background");
		sel3.classList.add("disable");
		let tc = pokBase.querySelectorAll(":scope li[name='Type Change-Group'] input");
		for (let t = 0; t < tc.length; t++) {
			tc[t].checked = false;
		}
	}

	let type1 = returnData(getPokémonInt(pokémonPath.value),"Type","")[0];
	let type2 = returnData(getPokémonInt(pokémonPath.value),"Type","")[1];

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



	let ex = pokBase.querySelector(":scope figure[name='export']")
	let evoFamily = getEvolutionFamily(int);
	if (evoFamily.length > 1) {
		ex.querySelector(":scope span[name='Change Evolution']").style.removeProperty("display");
	}
	else {
		ex.querySelector(":scope span[name='Change Evolution']").style.display = "none";
	}

	let pokForms = getPokémonForm(int);
	if (pokForms.length > 1) {
		ex.querySelector(":scope span[name='Change Form']").style.removeProperty("display");
	}
	else {
		ex.querySelector(":scope span[name='Change Form']").style.display = "none";
	}


	if (Friendship) {
		if (friendshipPath.value != 0) {
			let basefriendship = returnData(int,"Base Friendship","")[0];
			if (basefriendship != undefined) {
				friendshipPath.value = basefriendship;
			}
		}
	}


	if (Ability.length > 0) {
		let abilities = returnData(int,"Ability","undefined");
		
		abilityPath.innerHTML = "";
		abilityPath.title = "";

		for (let q = 0; q < abilities.length; q++) {
			if (abilities[q] != undefined) {
				let option = document.createElement("option");
				option.innerText = abilities[q];
				option.value = abilities[q];
				option.setAttribute("name",getAbilityPosition(int,abilities[q]));
				abilityPath.appendChild(option)
			}
		}

		let abd = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",abilityPath.value)[0];
		abd = undDel(abd,{Description:""});
		abd = abd["Description"];
		abilityPath.title = abd;

	}
	
	if (Gender) {
		let genders = [];

		let tempgender = returnData(int,"Gender Ratio","undefined");
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

		let storeGenderVal = genderPath.value.toString();

		genderPath.innerHTML = "";


		for (let q = 0; q < genders.length; q++) {
			let option = document.createElement("option");
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
		let result = returnSortedItemsList(int);
		let storeItemVal = itemPath.value.toString();

		itemPath.innerHTML = "";

		let items = [];
		if (result.length > 1) {
			items.unshift("");
		}
		for (let q = 0; q < result.length; q++) {
			items.push(result[q]["Item"])
		}

		for (let q = 0; q < items.length; q++) {
			let option = document.createElement("option");
			option.innerText = items[q];
			option.value = items[q];
			itemPath.appendChild(option);

			let itd = returnAppArrData(finaldata["Items"]["Description"],"Item",items[q])[0];
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

	
		let itd = returnAppArrData(finaldata["Items"]["Description"],"Item",itemPath.value)[0];
		itd = undDel(itd,{Description:""});
		itd = itd["Description"];
		itemPath.title = itd;

	}

}
function DMGClearData(base) {

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
    let lvlPath = pokBase.querySelector(":scope *[name='level'] input");
    let typesPath = pokBase.querySelectorAll(":scope *[name='type'] select");
    let abilityPath = pokBase.querySelector(":scope *[name='ability'] select");
    let genderPath = pokBase.querySelector(":scope *[name='gender'] select");
    let itemPath = pokBase.querySelector(":scope *[name='item'] select");
    let friendshipPath = pokBase.querySelector(":scope *[name='friendship'] input");
    let naturePath = pokBase.querySelector(":scope *[name='nature'] select");
    let movesPath = pokBase.querySelectorAll(":scope *[name='moves'] select");

	let idPath = divBase.querySelector(":scope *[name='name'] > *:first-child");
	let namePath = divBase.querySelector(":scope *[name='name'] > *:last-child");
	let pokImgPath = divBase.querySelector(":scope img[name='img']");
	let itemImgPath = divBase.querySelector(":scope img[name='item']");
    
    let ivsPath = statsBase.querySelectorAll(":scope *[name='IV'] input:not(:first-child)");
    let evsPath = statsBase.querySelectorAll(":scope *[name='EV'] input:not(:first-child)");
    let avsPath = statsBase.querySelectorAll(":scope *[name='AV'] input:not(:first-child)");
	let modsPath = statsBase.querySelectorAll(":scope *[name='Mod'] input:not(:first-child)");
    let totalPath = statsBase.querySelectorAll(":scope > *:last-child input:not(:first-child)");

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

    for(let e = 0; e < typesPath.length; e++) {
        typesPath[e].style.removeProperty("background");
        typesPath[e].value = "";
    }

    for(let e = 0; e < movesPath.length; e++) {
        movesPath[e].style.removeProperty("color");
        movesPath[e].value = movesPath[e].firstChild.value;
    }
    for(let e = 0; e < ivsPath.length; e++) {
        ivsPath[e].value = "";
    }
    for(let e = 0; e < evsPath.length; e++) {
        evsPath[e].value = "";
    }
    for(let e = 0; e < avsPath.length; e++) {
        avsPath[e].value = "";
    }
	for(let e = 0; e < modsPath.length; e++) {
        modsPath[e].value = "";
    }
    for(let e = 0; e < totalPath.length; e++) {
        totalPath[e].value = 0;
    }
	namePath.innerText = "";
	idPath.innerText = "";
	pokImgPath.removeAttribute("src");
	itemImgPath.removeAttribute("src");

    divBase.setAttribute("data-string","");
    pokBase.classList.remove("active");
	divBase.classList.remove("active");
    statsBase.classList.remove("active");


	DMGPartyActiveSet();
}
function DMGSaveData(base) {

	DMGResetCalc();

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

    divBase.title = "";

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


    let moves = [];
    for (let e = 0; e < movesPath.length; e++) {
        if (movesPath[e].value.includes("#")) {
            moves.push("");
        }
        else {
            moves.push(movesPath[e].value)
        }
    }
    stringObj["mo"] = moves.join(",");

    let ivs = [];
    for (let e = 0; e < ivsPath.length; e++) {
        ivs.push(ivsPath[e].value)
    }
    stringObj["iv"] = ivs.join(",");

    let evs = [];
    for (let e = 0; e < evsPath.length; e++) {
        evs.push(evsPath[e].value)
    }
    stringObj["ev"] = evs.join(",");

    let keys = Object.keys(stringObj)
    let tempArr = [];

    for (let e = 0; e < keys.length; e++) {
        let val1 = keys[e];
        let val2 = stringObj[keys[e]];
        if (val2 != undefined && val2 != "") {
            if (val2.replaceAll(",","") != "") {
                tempArr.push(val1+":"+val2)
            }
        }
    }

    divBase.title = dataStringTitle(divBase.getAttribute("data-string"));
    divBase.setAttribute("data-string",tempArr.join("|"))




	let tars = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");
	let tarsint = 0;
	for (let t = 0; t < tars.length; t++) {
		let val = tars[t].getAttribute("data-string");
		if (val.includes("pok:") && !val.includes("pok:|") && !val.includes("pok:\n")) {
			tarsint = tarsint+1;
		}
	}
	document.querySelector("#contain > div#tool div#dmg > div").setAttribute("data-count",tarsint);

	DMGSetChange(base);
	DMGPartyActiveSet();
}
function DMGResetCalc() {
    let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");
	for (let i = 0; i < divBases.length; i++) {
		let team = divBases[i].parentElement.getAttribute("name");
		let id = divBases[i].getAttribute("name");

		let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
		let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
		let pokHPPath = pokBase.querySelector(":scope *[name='hp'] > input");
		let HPPath = divBase.querySelector(":scope *[name='hp']");
		let MaxHPPath = divBase.querySelector(":scope *[name='hp'] *[name='max']");
		let CurrentHPPath = divBase.querySelector(":scope *[name='hp'] *[name='current']");
		let ResultHPPath = divBase.querySelector(":scope *[name='hp'] *[name='result'] > *");
		let PercentageHPPath = divBase.querySelector(":scope *[name='hp'] *[name='percentage'] > *");
		let EffectPositivePath = divBase.querySelector(":scope *[name='effect'] *[name='positive']");
		let EffectNegativePath = divBase.querySelector(":scope *[name='effect'] *[name='negative']");

		let val = ((pokHPPath.value/pokHPPath.max)*100);

		HPPath.style.setProperty("--heal",val+"%")
		HPPath.style.setProperty("--dmg",val+"%")
		HPPath.style.setProperty("--hp",val+"%")

		HPPath.removeAttribute("title");

		//MaxHPPath.innerText = pokHPPath.max;
		CurrentHPPath.innerText = pokHPPath.max;
		PercentageHPPath.innerText = parseInt(val)+"%";
		ResultHPPath.innerText = "";
		EffectPositivePath.innerHTML = "";
		EffectNegativePath.innerHTML = "";
	}
}
function DMGMatchPosition() {
	let teams = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team']");
	let poks = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");



    let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");
    let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] > span[name] > ul[name]");
	let pokTopBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] > span[name]");
    let teamBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='team'] > span[name]");
    let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] > span[name] > ul[name]");
	let statsTopBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] > span[name]");
    let partyBases = document.querySelectorAll("#contain > div#tool div#dmg span[name='party'] > span[name]");


	let selects = document.querySelectorAll("#contain > div#tool div#dmg div[name='options'] > div:first-child > span > select");


	let order1 = [];
	for(let p = 0; p < teams.length; p++) {
		order1.push(teams[p].getAttribute("name"));
	}
	for(let o = 0; o < order1.length; o++) {
		for(let p = 0; p < pokTopBases.length; p++) {
			if (pokTopBases[p].getAttribute("name") == order1[o]) {
				pokTopBases[p].parentElement.appendChild(pokTopBases[p]);
			}
		}
		for(let p = 0; p < teamBases.length; p++) {
			if (teamBases[p].getAttribute("name") == order1[o]) {
				teamBases[p].parentElement.appendChild(teamBases[p]);
			}
		}
		for(let p = 0; p < statsTopBases.length; p++) {
			if (statsTopBases[p].getAttribute("name") == order1[o]) {
				statsTopBases[p].parentElement.appendChild(statsTopBases[p]);
			}
		}
		for(let p = 0; p < partyBases.length; p++) {
			if (partyBases[p].getAttribute("name") == order1[o]) {
				partyBases[p].parentElement.appendChild(partyBases[p]);
			}
		}
		for(let p = 0; p < selects.length; p++) {
			if (selects[p].getAttribute("name") == order1[o]) {
				selects[p].parentElement.appendChild(selects[p]);
			}
		}
	}

	let order2 = [];
	for(let p = 0; p < poks.length; p++) {
		order2.push(poks[p].parentElement.getAttribute("name")+"-"+poks[p].getAttribute("name"));
	}

	for(let o = 0; o < order2.length; o++) {
		for(let p = 0; p < pokBases.length; p++) {
			if (pokBases[p].parentElement.getAttribute("name")+"-"+pokBases[p].getAttribute("name") == order2[o]) {
				pokBases[p].parentElement.appendChild(pokBases[p]);
			}
		}
		for(let p = 0; p < statsBases.length; p++) {
			if (statsBases[p].parentElement.getAttribute("name")+"-"+statsBases[p].getAttribute("name") == order2[o]) {
				statsBases[p].parentElement.appendChild(statsBases[p]);
			}
		}
	}

	for(let p = 0; p < pokTopBases.length; p++) {
		let els = pokTopBases[p].querySelectorAll(":scope > *[name]");
		for(let r = 0; r < els.length; r++) {
			let x = r+1;
			let el = els[r].querySelector(":scope *[name='pokémon'] > *:first-child > *:first-child");
			el.innerText = "Pokémon #"+x;
		}
	}


	for(let p = 0; p < pokTopBases.length; p++) {
		let dat = pokTopBases[p].querySelectorAll(":scope > *");
		let val = undefined;
		for(let r = 0; r < dat.length; r++) {
			if (dat[r].style.getPropertyValue("display") == "flex") {
				val = r;
			}
		}
		for(let t = 0; t < selects.length; t++) {
			if (selects[t].getAttribute("name") == pokTopBases[p].getAttribute("name")) {
				selects[t].value = val;
			}
		}
		
	}

}
function DMGRemoveDataString(base) {

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

	let ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");

	if (ask) {
		divBase.setAttribute("data-string","");
		DMGClearData(pokBase);
	}
	
	DMGPartyActiveSet();
}
function DMGExportDataString() {
	let base = findUpTag(this,"DIV");
	let str = base.getAttribute("data-string");
	navigator.clipboard.writeText(str);
	console.log(str)
	consoleText("Copied Data String!")
}
function DMGSpeedCalc() {

	let user = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string].user");
    let userTeam = user.parentElement.getAttribute("name");
	let userID = user.getAttribute("name");

	let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]");
	let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name] > ul[name]");
	let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name] > ul[name]");

	let fieldPath = document.querySelector("#contain > div#tool div#dmg div[name='content'] > div[name='field']");

	let TrickRoomPath = fieldPath.querySelector(":scope *[name='Trick Room'] input");

	let movePath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='move'] select")
	let movePriority = returnArrValue(finaldata["Moves"]["Priority"],DATA_Move_Reference["Name"],DATA_Move_Priority["Priority"],movePath.value);

	let eles = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string] *[name='effect'] *[name='speed']");


	if (eles.length == statsBases.length) {


		for (let s = 0; s < eles.length; s++) {
			eles[s].innerHTML = "";
			eles[s].style.removeProperty("text-decoration");
		}


	
		let speed = [];
		for (let s = 0; s < statsBases.length; s++) {
			let ele = statsBases[s].querySelector(":scope > span:last-child > *[name='Speed']");
			let obj = new Object();
			obj["Speed"] = ele.value;
			obj["Int"] = s;

			if (statsBases[s].getAttribute("name") == userID && statsBases[s].parentElement.getAttribute("name") == userTeam) {
				if (movePriority != undefined && movePriority != "") {
					if (movePriority.includes("+")) {
						obj["Speed"] = 99999;
					}
					else if (movePriority.includes("-")) {
						obj["Speed"] = -99999;
					}
				}
			}
			speed.push(obj)
		}
		


		if (TrickRoomPath != undefined && TrickRoomPath.checked) {
			speed = sortObjectArray(speed,"Speed",true);
		}
		else {
			speed = sortObjectArray(speed,"Speed",false);
		}

		let result = [];
		let int = 0;
	
		for (let s = 0; s < speed.length; s++) {
			let val1 = speed[s-1];
			let val2 = speed[s];
		
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

		for (let s = 0; s < result.length; s++) {
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


		


		for (let s = 0; s < eles.length; s++) {	
			for (let d = 0; d < speed.length; d++) {
				if (speed[d]["Int"] == s) {	
					eles[s].innerText = result[d];
					break;
				}
			}
		}




		for (let s = 0; s < eles.length; s++) {
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


    if (base.tagName != undefined) {
		base = [base];
	}
	else if (base[0] != undefined) {
		base = base;
	}
	else {
		base = [findUpTag(this,"DIV")];
	}


	let data;

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
            for (let d = 0; d < data.length; d++) {
				let baseteam = base[d].parentElement.getAttribute("name");
				let baseid = base[d].getAttribute("name");

				let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+baseteam+"'] > div[name='"+baseid+"']");
				let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+baseteam+"'] > ul[name='"+baseid+"']");

                let dataObj = dataStringToObj(data[d]);
                let dataPok = dataObj["pok"]
				let dataInt = getPokémonInt(dataPok);

                if (dataPok != undefined && dataInt != undefined) {
                    if (finaldata["Pokémon"]["Reference"][parseInt(dataInt)][DATA_Pokémon_Reference["Reference"]] == "true") {
                        divBase.setAttribute("data-string",data[d]);

						DMGSetChange(pokBase);
						DMGPokSpecific(pokBase);
                        DMGSetChange(pokBase);
						DMGSaveData(pokBase);
						DMGSetPossible();
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

	DMGPartyActiveSet();
}
function DMGPartyCreate(base,data) {
	if (data == undefined) {
		let ask = prompt("Enter Pokémon Data String");
		data = ask;
	}

	let dataStrings = base.getAttribute("data-string");
	dataStrings = undwsDel(dataStrings,"");
	dataStrings = dataStrings.replaceAll("\r","");
	dataStrings = dataStrings.replaceAll("\n","_");
	dataStrings = splitStr(dataStrings,"_");
	dataStrings = dataStrings.filter(e => e !== "");

	if (data != null && data != "") {
		data = data.replaceAll("\r","");
		data = data.replaceAll("\n","_");
		if (data.includes("_")) {
			data = data.split("_");
		}
		else {
			data = [data];
		}

		for (let r = 0; r < data.length; r++) {
			let dataobj = dataStringToObj(data[r]);
			let pok = dataobj["pok"];
			let pokint = getPokémonInt(pok);
	
			if (pok != undefined && pokint != undefined) {
				if(finaldata["Pokémon"]["Reference"][pokint][DATA_Pokémon_Reference["Reference"]] == "true") {
					dataStrings.push(data[r])
					base.setAttribute("data-string",dataStrings.join("_"));
					DMGPartyRow(base);
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

	DMGPartyActiveSet();
}
function DMGPartyRow(base) {
	let els =  base.querySelectorAll(":scope li[data-string]");
	let elAdd =  base.querySelector(":scope li.add");
	let elExit =  base.querySelector(":scope *[name='exit']");
	let elExport =  base.querySelector(":scope *[name='export']");

	let rowPath = base.querySelector(":scope *[name='row']");
	let rowUp = rowPath.querySelector(":scope b[name='up']");
	let rowText = rowPath.querySelector(":scope > small");
	let rowDown = rowPath.querySelector(":scope b[name='down']");

	let dataStrings = base.getAttribute("data-string");
	dataStrings = undwsDel(dataStrings,"");
	dataStrings = dataStrings.replaceAll("\r","");
	dataStrings = dataStrings.replaceAll("\n","_");
	dataStrings = splitStr(dataStrings,"_");
	dataStrings = dataStrings.filter(e => e !== "");


	let row = base.getAttribute("data-row");
	row = parseInt(row);
	let val1 = ((row*6)-6)+1;
	let val2 = row*6;


	rowText.innerText = row;

	let used = [];

	if (dataStrings.length > val2) {
		rowDown.classList.add("active")
		elAdd.classList.remove("active");
	}
	else {
		rowDown.classList.remove("active");
		elAdd.classList.add("active");
	}


	if (dataStrings.length == 0) {
		elExit.style.display = "none";
		elExport.style.display = "none";
	}
	else {
		elExit.style.removeProperty("display");
		elExport.style.removeProperty("display");
	}

	if (row == 1) {
		rowUp.classList.remove("active")
	}
	else {
		rowUp.classList.add("active");
	}

	for (let e = 0; e < els.length; e++) {
		let li = els[e];
		let img = els[e].querySelector(":scope img");
		li.setAttribute("title","");
		li.setAttribute("data-string","");
		img.removeAttribute("src");
	}

	for (let e = 0; e < els.length; e++) { // 6
		let li = els[e];
		let img = els[e].querySelector(":scope img");

		for (let r = 0; r < dataStrings.length; r++) {
			if (!used.includes(r)) {
				let x = r+1;
		
				let obj = dataStringToObj(dataStrings[r]);
				let pok = obj["pok"];
				let int = getPokémonInt(pok);

				if (pok != undefined && int != undefined) {
					if (x >= val1 && x <= val2) {
						li.setAttribute("data-string",dataStrings[r]);
						li.setAttribute("title",dataStringTitle(dataStrings[r]));
						img.src = getMedia(true,[getPokémonPath(int)],[PATH_Pokémon_Box_Default_PNG]);
						used.push(r);
						break;
					}
				}
			}
		}

	}


	DMGPartyActiveSet();
}
function DMGPartyActiveSet() {
	let els1 = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > div > span > div[data-string]");
	let els2 = document.querySelectorAll("#contain > div#tool div#dmg div[name='result'] > span > span[name] li[data-string]");


	for (let i = 0; i < els2.length; i++) {
		els2[i].classList.remove("select");
	}

	let vals = ["pok","it","iv","ev","mo","na"];

	if (Natures.length == 0) {
		vals = vals.filter(e => e !== "na");
	}

	if (!HeldItem) {
		vals = vals.filter(e => e !== "it");
	}

	for (let i = 0; i < els1.length; i++) {
		if (els1[i].getAttribute("data-string") != undefined && els1[i].getAttribute("data-string") != "") {
			let obj1 = dataStringToObj(els1[i].getAttribute("data-string"));

			for (let q = 0; q < els2.length; q++) {
				if (els2[q].getAttribute("data-string") != undefined && els2[q].getAttribute("data-string") != "") {
					let obj2 = dataStringToObj(els2[q].getAttribute("data-string"));

					var check = true;

					for (let r = 0; r < vals.length; r++) {
						if (obj1[vals[r]] != obj2[vals[r]]) {
							check = false;
						}
					}
					
					if (check) {
						els2[q].classList.add("select");
					}
				}
			}
		}
	}

	////DMGCalcStart();
}

let battleCondition = [{Name:"Poisoned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Badly Poisoned",Affect:"Pokémon",Group:"Status",Title:"Turns of Bad Poison",Values:"0,15",Type:"Status",Game:"All"},{Name:"Burned",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Paralyzed",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Asleep",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Frozen",Affect:"Pokémon",Group:"Status",Type:"Status",Game:"All"},{Name:"Forest's Curse",Affect:"Pokémon",Group:"Type Change",Affected:"Forest's Curse",Type:"Move",Game:"All"},{Name:"Trick-or-Treat",Affect:"Pokémon",Group:"Type Change",Affected:"Trick-or-Treat",Type:"Move",Game:"All"},{Name:"Magnet Rise",Affect:"Pokémon",Group:"Ungrounded",Affected:"Magnet Rise",Type:"Move",Game:"All"},{Name:"Telekinesis",Affect:"Pokémon",Group:"Ungrounded",Affected:"Telekinesis",Type:"Move",Game:"All"},{Name:"Thousand Arrows",Affect:"Pokémon",Group:"Grounded",Affected:"Thousand Arrows",Type:"Move",Game:"All"},{Name:"Smack Down",Affect:"Pokémon",Group:"Grounded",Affected:"Smack Down",Type:"Move",Game:"All"},{Name:"Ingrain",Affect:"Pokémon",Group:"Grounded",Affected:"Ingrain",Type:"Move",Game:"Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Seed Damage",Affect:"Pokémon",Group:"Seed",Affected:"Leech Seed",Title:"Is the Pokémon affected by Leech Seed?",Type:"Move",Game:"All"},{Name:"Seed Heal",Affect:"Pokémon",Group:"Seed",Affected:"Leech Seed",Title:"Is the Pokémon being healed by Leech Seed?",Type:"Move",Game:"All"},{Name:"Glaive Rush",Affect:"Pokémon",Affected:"Glaive Rush",Type:"Move",Game:"All"},{Name:"Laser Focus",Affect:"Pokémon",Affected:"Laser Focus",Type:"Move",Game:"All"},{Name:"Odor Sleuth",Affect:"Pokémon",Affected:"Odor Sleuth",Type:"Move",Game:"All"},{Name:"Foresight",Affect:"Pokémon",Affected:"Foresight",Type:"Move",Game:"All"},{Name:"Miracle Eye",Affect:"Pokémon",Affected:"Miracle Eye",Type:"Move",Game:"All"},{Name:"Shadow",Affect:"Pokémon",Title:"Is it a Shadow Pokémon?",Type:"Form",Game:"Colosseum"},{Name:"Dynamax",Affect:"Pokémon",Title:"Is the Pokémon Dynamaxed?",Type:"Form",Game:"Sword,Shield"},{Name:"Boulder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it raises the the Attack stat stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow,FireRed,LeafGreen"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Koga in Fuchsia City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special stat by 12.5% when entering a battle.",Type:"Badge",Game:"Red,Blue,Yellow"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on Cinnabar Island, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"FireRed,LeafGreen"},{Name:"Zephyr Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Falkner in Violet City, it increases the power of Flying-type moves by 12.5% and raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Hive Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Bugsy in Azaela Town, it increases the power of Bug-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Plain Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Whitney in Goldenrod City, it increases the power of Normal-type moves by 12.5% and raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Fog Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Morty in Ecruteak City, it increases the power of Ghost-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Storm Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Chuck in Cianwood City, it increases the power of Fighting-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Mineral Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Jasmine in Olivine City, it increases the power of Steel-type moves by 12.5% and raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Glacier Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Pryce in Mahogany Town, it increases the power of Ice-type moves by 12.5% and raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rising Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Clair in Blackthorn City, it increases the power of Dragon-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Boulder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Brock in Pewter City, it increases the power of Rock-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Cascade Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Misty in Cerulean City, it increases the power of Water-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Thunder Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Lt. Surge in Vermilion City, it increases the power of Electric-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Rainbow Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Erika in Celadon City, it increases the power of Grass-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Soul Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Janine in Fuchsia City, it increases the power of Poison-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Marsh Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Sabrina in Saffron City, it increases the power of Psychic-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Volcano Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blaine on the Seafoam Islands, it increases the power of Fire-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Earth Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Blue in Viridian City, it increases the power of Ground-type moves by 12.5%.",Type:"Badge",Game:"Gold,Silver,Crystal"},{Name:"Stone Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Roxanne in Rustboro City, it raises the Attack stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Dynamo Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Wattson in Mauville City, it raises the Speed stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Balance Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Norman in Petalburg City, it raises the Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Mind Badge",Affect:"Team",Group:"Badge",Title:"Obtained from the Gym Leader Tate and Liza in Mossdeep City, it raises the Special Attack and Special Defense stat by 12.5% when entering a battle.",Type:"Badge",Game:"Ruby,Sapphire,Emerald"},{Name:"Stealth Rock",Affect:"Team",Group:"Pointed Stones",Affected:"Stealth Rock",Type:"Move",Game:"All"},{Name:"G-Max Stonesurge",Affect:"Team",Group:"Pointed Stones",Affected:"G-Max Stonesurge",Type:"Move",Game:"Sword,Shield"},{Name:"Spikes",Affect:"Team",Group:"Spikes",Affected:"Spikes",Title:"Layers of Spikes",Values:"0,3",Type:"Move",Game:"All"},{Name:"G-Max Steelsurge",Affect:"Team",Group:"Sharp Steel",Affected:"G-Max Steelsurge",Type:"Move",Game:"Sword,Shield"},{Name:"Light Screen",Affect:"Team",Group:"Screen",Affected:"Light Screen",Type:"Move",Game:"All"},{Name:"Reflect",Affect:"Team",Group:"Screen",Affected:"Reflect",Type:"Move",Game:"All"},{Name:"Aurora Veil",Affect:"Team",Group:"Screen",Affected:"Aurora Veil",Type:"Move",Game:"All"},{Name:"Tailwind",Affect:"Team",Affected:"Tailwind",Type:"Move",Game:"All"},{Name:"Lucky Chant",Affect:"Team",Affected:"Lucky Chant",Type:"Move",Game:"All"},{Name:"G-Max Volcalith",Affect:"Team",Affected:"G-Max Volcalith",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Cannonade",Affect:"Team",Affected:"G-Max Cannonade",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Vine Lash",Affect:"Team",Affected:"G-Max Vine Lash",Type:"Move",Game:"Sword,Shield"},{Name:"G-Max Wildfire",Affect:"Team",Affected:"G-Max Wildfire",Type:"Move",Game:"Sword,Shield"},{Name:"Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Sandstorm",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Snow",Affect:"All",Group:"Weather",Type:"Weather",Game:"Legend Arceus,Scarlet,Violet"},{Name:"Fog",Affect:"All",Group:"Weather",Type:"Weather",Game:"Diamond,Pearl,Platinum,Brilliant Diamond,Shining Pearl,Legend Arceus"},{Name:"Hail",Affect:"All",Group:"Weather",Type:"Weather",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Extremely Harsh Sunlight",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Heavy Rain",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Strong Winds",Affect:"All",Group:"Weather",Type:"Weather",Game:"Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Shadowy Aura",Affect:"All",Group:"Weather",Type:"Weather",Game:"XD"},{Name:"Electric Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Grassy Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Misty Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Psychic Terrain",Affect:"All",Group:"Terrain",Type:"Terrain",Game:"Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Legend Arceus,Scarlet,Violet"},{Name:"Trick Room",Affect:"All",Affected:"Trick Room",Type:"Move",Game:"All"},{Name:"Magic Room",Affect:"All",Affected:"Magic Room",Type:"Move",Game:"All"},{Name:"Wonder Room",Affect:"All",Affected:"Wonder Room",Type:"Move",Game:"All"},{Name:"Gravity",Affect:"All",Affected:"Gravity",Type:"Move",Game:"All"},{Name:"Protection",Affect:"Specific",Affected:"Baneful Bunker,Crafty Shield,Detect,King's Shield,Mat Block,Max Guard,Obstruct,Protect,Quick Guard,Silk Trap,Spiky Shield,Wide Guard",Title:"Is the target being Protected?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Flight",Affect:"Specific",Affected:"Fly,Bounce",Title:"Is the target in a semi-invulnerable turn of Fly or Bounce?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dig",Affect:"Specific",Affected:"Dig",Title:"Is the target in a semi-invulnerable turn of Dig?",Type:"Move",Game:"All"},{Name:"Semi-Invulnerable Dive",Affect:"Specific",Affected:"Dive,Surf,Whirlpool",Title:"Is the target in a semi-invulnerable turn of Dive?",Type:"Move",Game:"All"},{Name:"Switching",Affect:"Specific",Affected:"Pursuit",Title:"Is the target switching out?",Type:"Move",Game:"All"},{Name:"Confusion",Affect:"Specific",Affected:"Tangled Feet",Title:"Is the target confused?",Type:"Ability",Game:"All"},{Name:"Minimize",Affect:"Specific",Title:"Did the target previously use Minimize?",Type:"Move",Game:"Gold,Silver,Crystal,Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Charge",Affect:"Specific",Affected:"Charge",Title:"Is the move powered up by Charge?",Type:"Move",Game:"All"},{Name:"Me First",Affect:"Specific",Affected:"Me First",Title:"Is the move called by Me First?",Type:"Move",Game:"All"},{Name:"Flash Fire",Affect:"Specific",Affected:"Flash Fire",Title:"Is Flash Fire active on the user?",Type:"Ability",Game:"All"},{Name:"Tar Shot",Affect:"Specific",Affected:"Tar Shot",Title:"Is Tar Shot active on the target?",Type:"Move",Game:"All"},{Name:"Helping Hand",Affect:"Specific",Affected:"Helping Hand",Title:"Is the user affected by Helping Hand?",Type:"Move",Game:"All"},{Name:"Damaged",Affect:"Specific",Affected:"Revenge",Title:"Did the user take damage this turn?",Type:"Move",Game:"All"},{Name:"Defense Curl",Affect:"Specific",Affected:"Defense Curl",Title:"Did the user previously use Defense Curl?",Type:"Move",Game:"All"},{Name:"Z-Move",Affect:"Specific",Title:"Transform move to Z-Move?",Type:"Move",Game:"X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee"},{Name:"Max Move",Affect:"Specific",Title:"Transform move to Max Move?",Type:"Move",Game:"Sword,Shield"}]
let battleVariation = [{Name:"Single Battle",Teams:"2",Pokémon:"1,1",Game:"All"},{Name:"Double Battle",Teams:"2",Pokémon:"2,2",Game:"Ruby,Sapphire,Colosseum,FireRed,LeafGreen,Emerald,XD,Diamond,Pearl,Platinum,HeartGold,SoulSilver,Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon,Lets Go Pikachu,Lets Go Eevee,Sword,Shield,Brilliant Diamond,Shining Pearl,Legend Arceus,Scarlet,Violet"},{Name:"Triple Battle",Teams:"2",Pokémon:"3,3",Game:"Black,White,Black 2,White 2,X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Battle Royal",Teams:"4",Pokémon:"1,1,1,1",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"SOS Battle",Teams:"2",Pokémon:"1,2",Game:"Sun,Moon,Ultra Sun,Ultra Moon"},{Name:"Horde Encounter",Teams:"2",Pokémon:"1,5",Game:"X,Y,Omega Ruby,Alpha Sapphire"},{Name:"Max Raid Battle",Teams:"2",Pokémon:"4,1",Game:"Sword,Shield"},{Name:"Tera Raid Battle",Teams:"2",Pokémon:"4,1",Game:"Scarlet,Violet"}]

function buildDMG(preval) {

	let battleOrigin = document.querySelector("#contain > div#tool div#dmg");
    let battleResult = battleOrigin.querySelector(":scope div[name='result']");
	let battleSelect = battleOrigin.querySelector(":scope div[name='options'] > div:first-child > span:first-child > select");
    let battleVariant = battleVariation[battleSelect.getAttribute("name")];
    let battleTeams = battleVariant["Teams"];
    battleTeams = parseInt(battleTeams)
    battleTeams = undwsnullnanDel(battleTeams,0);

    let teamds = [];
    let boxds = [];
    let deleted = false;


	if ("Save Previous") {
		let teamdspath = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] div[data-string]");
		let boxdspath = document.querySelectorAll("#contain > div#tool div#dmg span[name='party'] span[data-string]");

		for(let q = 0; q < teamdspath.length; q++) {
			let ds = teamdspath[q].getAttribute("data-string");
			let dsobj = dataStringToObj(ds);
			if (dsobj["pok"] != undefined) {
				let obj = new Object();
				obj["Team"] = teamdspath[q].parentElement.getAttribute("name");
				obj["Data"] = ds;
				teamds.push(obj)
			}
		}

		for(let q = 0; q < boxdspath.length; q++) {
			let ds = boxdspath[q].getAttribute("data-string");
			let dsobj = dataStringToObj(ds);
			if (dsobj["pok"] != undefined) {
				let obj = new Object();
				obj["Team"] = boxdspath[q].getAttribute("name");
				obj["Data"] = ds;
				boxds.push(obj)
			}
		}

		for(let q = 0; q < teamds.length; q++) {
			let val1 = teamds[q]["Team"].replaceAll("team","").replaceAll(" ","");
			let val2 = battleTeams;
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			if (val1 > val2) {
				deleted = true;
				break;
			}
		}

		for(let q = 0; q < boxds.length; q++) {
			let val1 = boxds[q]["Team"].replaceAll("team","").replaceAll(" ","");
			let val2 = battleTeams;
			val1 = parseInt(val1);
			val2 = parseInt(val2);

			if (val1 > val2) {
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
					for(let q = 0; q < keys.length; q++) {
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
	let contentPath = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div[name='battle'] span[name='target']");
	let contentPath2 = document.querySelector("#contain > div#tool div#dmg div[name='result'] > div[name='battle'] span[name='user']");
	let partyPath = document.querySelector("#contain > div#tool div#dmg div[name='result'] > span[name='party']");
	let specificPath = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='specific']");

	
	contentPath2.innerHTML = "";
	optionsPokPath.innerHTML = "";
	optionsTeamPath.innerHTML = "";
	optionsStatsPath.innerHTML = "";
	optionsPokTitle.innerHTML = "";
	fieldPath.innerHTML = "";
	contentPath.innerHTML = "";
	partyPath.innerHTML = "";
	specificPath.innerHTML = "";


	
	// Teams
	for(let d = 0; d < battleTeams; d++) {
		let x = d+1;

		let pokCount = battleVariant["Pokémon"];
		pokCount = splitStr(pokCount,",")[d];
		pokCount = parseInt(pokCount);
		pokCount = undwsnullnanDel(pokCount,0);


		if ("Content") {
			let contentPokPath = document.createElement("span");
			contentPokPath.setAttribute("name","team "+x);
			contentPath.appendChild(contentPokPath);


			for(let q = 0; q < pokCount; q++) {
				let y = q+1;

				let content = document.createElement("div");
				content.setAttribute("name",q);
				content.setAttribute("data-string","")
				contentPokPath.appendChild(content);

				
				$(content).droppable({
					drop: function(e,ui) {
						let tar = ui.helper[0];
						if (tar.tagName == "LI") {
							let base = findUpAtt(tar,"data-row");
							let tarString = tar.getAttribute("data-string");

							if (tarString.includes("pok:") && !tarString.includes("pok:|") && !tarString.includes("pok:\n")) {
								if (finaldata["Pokémon"]["Reference"][getPokémonInt(dataStringToObj(tarString)["pok"])][DATA_Pokémon_Reference["Reference"]] == "true") {
									DMGSetDataString(this,tarString);
									DMGPartyRow(base);
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
				


				let contentName = document.createElement("span");
				let contentNameText1 = document.createElement("small");
				let contentNameText2 = document.createElement("small");

				let contentHP = document.createElement("span");

				let contentEffect = document.createElement("span");
				let contentEffectWrap = document.createElement("span");
				let contentEffectPositive = document.createElement("span");
				let contentEffectNegative = document.createElement("span");
				let contentEffectNeutral = document.createElement("span");

				let contentEffectSpeed = document.createElement("small");


				let contentPercentage = document.createElement("span");
				let contentPercentageText = document.createElement("small");

				let contentHealth = document.createElement("span");
				let contentHealthCurrent = document.createElement("small");
				let contentHealthDash = document.createElement("small");
				let contentHealthMax = document.createElement("small");

				let contentResult = document.createElement("span");
				let contentResultText = document.createElement("small");


				let contentPok = document.createElement("span");
				let contentImg = document.createElement("img");
				let contentItem = document.createElement("img");
				let contentAdd = document.createElement("b");
				let contentAddText = document.createElement("header");


				let contentUser = document.createElement("figure");
				let contentUserText = document.createElement("h6");
				let contentTarget = document.createElement("figure");
				let contentTargetText = document.createElement("h6");

				let contentMovesWrap = document.createElement("span");
				let contentMoves = document.createElement("span");

				contentEffect.setAttribute("name","effect");
				contentEffectNeutral.setAttribute("name","neutral");
				contentEffectPositive.setAttribute("name","positive");
				contentEffectNegative.setAttribute("name","negative");

				contentName.setAttribute("name","name");
				contentNameText1.innerText = ""
				contentNameText2.innerText = ""

				contentMoves.setAttribute("name","moves")
				contentHP.setAttribute("name","hp");

				contentPercentage.setAttribute("name","percentage");
				contentPercentageText.innerText = "100%";

				contentEffectSpeed.setAttribute("name","speed");

				contentHealth.setAttribute("name","health");
				contentHealthCurrent.innerText = "0"
				contentHealthCurrent.setAttribute("name","current");
				contentHealthDash.innerText = "/";
				contentHealthMax.innerText = "0"
				contentHealthMax.setAttribute("name","max");

				contentResultText.innerText = "0";
				contentResult.setAttribute("name","result");
				contentAdd.setAttribute("type","scale");
				contentAddText.innerText = "+";

				contentPok.setAttribute("name","pok")
				contentImg.setAttribute("name","img");
				contentItem.setAttribute("name","item");


				
				contentUser.setAttribute("name","user");
				contentTarget.setAttribute("name","target");

				contentUser.setAttribute("type","invert");
				contentTarget.setAttribute("type","invert");

				contentImg.src = "";
				contentItem.src = "";

				contentUserText.innerText = "⚝";
				contentTargetText.innerText = "⚀";

	

				content.appendChild(contentName);
				contentName.appendChild(contentNameText1);
				contentName.appendChild(contentNameText2);

				content.appendChild(contentHP);

				contentHP.appendChild(contentEffect);
				contentEffect.appendChild(contentEffectWrap);
				contentEffectWrap.appendChild(contentEffectPositive);
				contentEffectWrap.appendChild(contentEffectNegative);
				contentEffect.appendChild(contentEffectNeutral);
				contentEffectNeutral.appendChild(contentEffectSpeed);

				contentHP.appendChild(contentHealth);
				contentHealth.appendChild(contentHealthCurrent);
				contentHealth.appendChild(contentHealthDash);
				contentHealth.appendChild(contentHealthMax);

				contentHP.appendChild(contentPercentage);
				contentPercentage.appendChild(contentPercentageText);

	

				contentHP.appendChild(contentResult);
				contentResult.appendChild(contentResultText);
			
				content.appendChild(contentMovesWrap);
				contentMovesWrap.appendChild(contentMoves);


				content.appendChild(contentPok);
				contentPok.appendChild(contentImg);
				contentPok.appendChild(contentItem);
				contentPok.appendChild(contentAdd);
				contentAdd.appendChild(contentAddText);

				content.appendChild(contentUser);
				contentUser.appendChild(contentUserText);
				content.appendChild(contentTarget);
				contentTarget.appendChild(contentTargetText);



				contentAdd.addEventListener("click",function(){ let el = findUpTag(this,"DIV"); let team = el.parentElement.getAttribute("name"); let id = el.getAttribute("name"); let els = el.parentElement.querySelectorAll(":scope > div[data-string]"); let int = id;  for (let m = 0; m < els.length; m++) { if (els[m] == el) { int = m; break; } }let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name]");let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name]"); let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']"); if (pokBase.style.getPropertyValue("display") == "flex") { DMGSetDataString(el); } else { for (let m = 0; m < pokBases.length; m++) { pokBases[m].style.display = "none"; statsBases[m].style.display = "none";}  statsBase.style.display = "flex"; pokBase.style.display = "flex"; } });
				contentUser.addEventListener("click",function(){DMGSetActive("user")});
				contentTarget.addEventListener("click",function(){DMGSetActive("target")});
				contentImg.addEventListener("click",function(){let el = findUpTag(this,"DIV"); let team = el.parentElement.getAttribute("name"); let id = el.getAttribute("name"); let els = el.parentElement.querySelectorAll(":scope > div[data-string]"); let int = id;for (let m = 0; m < els.length; m++) { if (els[m] == el) { int = m; break; } }let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name]");let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name]"); let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']"); for (let m = 0; m < pokBases.length; m++) { pokBases[m].style.display = "none"; statsBases[m].style.display = "none";}pokBase.style.display = "flex";statsBase.style.display = "flex";let select = document.querySelector("#contain div#tool div#dmg div[name='options'] > div:first-child > span:last-child > select[name='"+team+"']"); select.value = int;});


				/*
				let contentActiveClose = document.createElement("figure");
				let contentActiveCloseText = document.createElement("small");
				let contentActiveExport = document.createElement("figure");
				let contentActiveExportText = document.createElement("small");
				contentActiveClose.setAttribute("name","close");
				contentActiveExport.setAttribute("name","export");
				contentActiveExport.classList.add("drop");
				contentActiveCloseText.innerText = "❌";
				contentActiveExportText.innerText = "⮟";
				contentActiveTop.appendChild(contentActiveClose);
				contentActiveClose.appendChild(contentActiveCloseText);
				contentActiveTop.appendChild(contentActiveExport);
				contentActiveExport.appendChild(contentActiveExportText);
				contentActiveClose.addEventListener("click",DMGRemoveDataString);
				contentActiveExport.addEventListener("click",DMGExportDataString);
				*/
				

				for (let m = 0; m < 4; m++) {
					let contentMove = document.createElement("b");
					let contentMoveText = document.createElement("small");
					contentMove.setAttribute("name",m);
					contentMove.setAttribute("type","invert");
					contentMoves.appendChild(contentMove)
					contentMove.appendChild(contentMoveText);
					contentMove.addEventListener("click",function(){DMGSetActive("user")});
					//contentMove.addEventListener("click",function(){let val = this.firstChild.innerText;let tar = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='move'] select");let tarTemp = document.querySelector("#contain > div#tool div#dmg div[name='menu'] > div[name='move'] > span select > option[value='"+val+"']"); if (val != "") {tar.parentElement.style.color = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],val)+")"; if (tarTemp != undefined) {tar.value = val;} DMGSetInfo();DMGCalcStart();let movd = formatMoveData(val);movd = undDel(movd,"");tar.title = movd;}});1
					contentMove.addEventListener("click",function(){let el = findUpTag(this,"DIV"); let team = el.parentElement.getAttribute("name"); let id = el.getAttribute("name"); let els = el.parentElement.querySelectorAll(":scope > div[data-string]"); let int = id;for (let m = 0; m < els.length; m++) { if (els[m] == el) { int = m; break; } }let pokBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name]");let statsBases = document.querySelectorAll("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name]"); let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']"); for (let m = 0; m < pokBases.length; m++) { pokBases[m].style.display = "none"; statsBases[m].style.display = "none";}pokBase.style.display = "flex";statsBase.style.display = "flex";let select = document.querySelector("#contain div#tool div#dmg div[name='options'] > div:first-child > span:last-child > select[name='"+team+"']"); select.value = int;});

				}
			}
			// Sortable Pokémon //

			/*
			if (pokCount > 1) {
				let els = contentPokPath.querySelectorAll(":scope *[name='bar']");
				for(let r = 0; r < els.length; r++) {
					els[r].classList.add("on");
				}

				$(contentPokPath).sortable({
					stop: function(e,ui) {
						DMGMatchPosition();
						DMGCalcStart()
					},
					items: "div[data-string]",
					handle: "*[name='bar']",
					axis: "y",
					scroll: false,
				});
			}
			*/
			
		

			/*
			let contentPokOverlay = document.createElement("span");
			let contentPokOverlayText = document.createElement("p");
			contentPokOverlayText.innerText = "⋮⋮⋮";
			contentPokPath.appendChild(contentPokOverlay)
			contentPokOverlay.appendChild(contentPokOverlayText);
			*/
			
		}
		if ("Party") {
			let partyTeam = document.createElement("span");
			partyTeam.setAttribute("name","team "+x);
			partyPath.appendChild(partyTeam);
			partyTeam.setAttribute("data-row",1);
			partyTeam.setAttribute("data-string","");

			let partyTeamFigureWrap = document.createElement("span");
			partyTeam.appendChild(partyTeamFigureWrap)

			let partyTeamDel = document.createElement("figure");
			let partyTeamDelText = document.createElement("h6");
			partyTeamDel.setAttribute("name","exit");
			partyTeamDel.setAttribute("type","scale");
			partyTeamDelText.innerText = "❌";
			partyTeamFigureWrap.appendChild(partyTeamDel);
			partyTeamDel.appendChild(partyTeamDelText);
			partyTeamDel.addEventListener("click",function(){
				let ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");
				if (ask) {
					let ele = findUpAtt(this,"data-string");
					ele.setAttribute("data-string","");
					ele.setAttribute("data-row","1");
					DMGPartyRow(ele);
				}
			});


			$(partyTeamDel).droppable({
				over: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.add("delete");
				},
				out: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				},
				drop: function(e,ui) {
					let tar = ui.helper[0];
					let base = findUpAtt(tar,"data-row");
					if (tar.tagName == "LI" && tar.getAttribute("data-string") != undefined) {
						let row = base.getAttribute("data-row");
						let dataStrings = base.getAttribute("data-string");
						dataStrings = undwsDel(dataStrings,"");
						dataStrings = dataStrings.replaceAll("\r","");
						dataStrings = dataStrings.replaceAll("\n","_");
						dataStrings = splitStr(dataStrings,"_");
						dataStrings = dataStrings.filter(e => e !== "");
				

						let id = tar.getAttribute("name");
						let int = ((parseInt(row)-1)*6)+parseInt(id);


						DMGPartyActiveSet();

						let ask = confirm("The Pokémon's data will not be saved.\nDo you want to continue?");

						if (ask) {
							dataStrings.splice(int,1);
							base.setAttribute("data-string",dataStrings.join("_"));
							DMGPartyRow(base);
						}
					}
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				}
			});

			let partyTeamExport = document.createElement("figure");
			let partyTeamExportText = document.createElement("h6");
			partyTeamExport.setAttribute("name","export");
			partyTeamExport.classList.add("drop");
			partyTeamExport.setAttribute("type","invert");
			partyTeamExportText.innerText = "⮟";
			partyTeamFigureWrap.appendChild(partyTeamExport);
			partyTeamExport.appendChild(partyTeamExportText);
			partyTeamExport.addEventListener("click",function(){
				let ele = findUpAtt(this,"data-string");
				let dataString = ele.getAttribute("data-string");
				dataString = undDel(dataString,"");
				dataString = dataString.replaceAll("_","\n");
				navigator.clipboard.writeText(dataString);
				console.log(dataString);
				consoleText("Copied Data Strings!");				
			});


			$(partyTeamExport).droppable({
				over: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.add("copy");
				},
				out: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				},
				drop: function(e,ui) {
					let tar = ui.helper[0];
					if (tar.tagName == "LI" && tar.getAttribute("data-string") != undefined) {
						let dataString = tar.getAttribute("data-string");
						navigator.clipboard.writeText(dataString);
						console.log(dataString);
						consoleText("Copied Data String!");
					}
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				}
			});



			let partyTeamWrap = document.createElement("span");
			partyTeamWrap.setAttribute("name","wrap");
			partyTeam.appendChild(partyTeamWrap);



			for(let q = 0; q < 6; q++) {
				let partyTeamPok = document.createElement("li");
				let partyTeamPokImg = document.createElement("img");
				partyTeamPok.setAttribute("data-string","");
				partyTeamPok.setAttribute("name",q);
				partyTeamPokImg.title = "";
				partyTeamWrap.appendChild(partyTeamPok);
				partyTeamPok.appendChild(partyTeamPokImg);

				$(partyTeamPok).draggable({
					start:function(e,ui){
						document.body.classList.add("dragging");
					},
					stop:function(e,ui){
						document.body.classList.remove("dragging");
					},
					revert: true,
				});
			}

			let partyTeamAdd = document.createElement("li");
			let partyTeamAddText = document.createElement("h2");
			partyTeamAdd.classList.add("add");
			partyTeamAddText.innerText = "+";
			partyTeamWrap.appendChild(partyTeamAdd);
			partyTeamAdd.appendChild(partyTeamAddText);
			partyTeamAdd.addEventListener("click",function(){DMGPartyCreate(this.parentElement.parentElement)});


			$(partyTeamAdd).droppable({
				over: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.add("plus");
				},
				out: function(e,ui) {
					let tar = ui.helper[0];
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				},
				drop: function(e,ui) {
					let tar = ui.helper[0];
					let base = findUpAtt(tar,"data-string");
					if (tar.tagName == "LI" && tar.getAttribute("data-string") != undefined && base != undefined) {
						let dataString = tar.getAttribute("data-string");
						DMGPartyCreate(base,dataString);
					}
					tar.classList.remove("plus");
					tar.classList.remove("copy");
					tar.classList.remove("delete");
				}
			});


			let partyTeamPointerWrap = document.createElement("span");
			partyTeamPointerWrap.setAttribute("name","row")
			partyTeam.appendChild(partyTeamPointerWrap);

			let partyTeamPointerUp = document.createElement("b");
			let partyTeamPointerUpText = document.createElement("small");
			partyTeamPointerUp.setAttribute("type","invert");
			partyTeamPointerUp.setAttribute("name","up");
			partyTeamPointerUp.classList.add("active");
			partyTeamPointerUpText.innerText = "⮝";
			partyTeamPointerWrap.appendChild(partyTeamPointerUp)
			partyTeamPointerUp.appendChild(partyTeamPointerUpText)
			partyTeamPointerUp.addEventListener("click",function(){let x = findUpAtt(this,"data-row");let y = x.getAttribute("data-row"); let z = parseInt(y)-1; if (z > 0) {x.setAttribute("data-row",z); DMGPartyRow(x);}});

	
			let partyTeamPointerRow = document.createElement("small");
			partyTeamPointerRow.innerText = "1";
			partyTeamPointerWrap.appendChild(partyTeamPointerRow);
	

			let partyTeamPointerDown = document.createElement("b");
			let partyTeamPointerDownText = document.createElement("small");
			partyTeamPointerDown.setAttribute("type","invert");
			partyTeamPointerDown.setAttribute("name","down");
			partyTeamPointerDown.classList.add("active");
			partyTeamPointerDownText.innerText = "⮟";
			partyTeamPointerWrap.appendChild(partyTeamPointerDown);
			partyTeamPointerDown.appendChild(partyTeamPointerDownText);
			partyTeamPointerDown.addEventListener("click",function(){let x = findUpAtt(this,"data-row"); let y = x.getAttribute("data-row");let z = parseInt(y)+1;  if (z > 0) {x.setAttribute("data-row",z); DMGPartyRow(x);}});

			DMGPartyRow(partyTeam);
		}
		if ("Options") {
            // Title //
			let optionsPokTitleSelect = document.createElement("select");
			optionsPokTitleSelect.setAttribute("name","team "+x);
			optionsPokTitle.appendChild(optionsPokTitleSelect);
			optionsPokTitleSelect.addEventListener("change",function(){let x = this.value; let z = this.getAttribute("name");let dvs = document.querySelectorAll("#contain > div#tool div#dmg > div span[name='"+z.toLowerCase()+"'] ul"); let dv = document.querySelectorAll("#contain > div#tool div#dmg > div span[name='"+z.toLowerCase()+"'] ul:nth-child("+(parseInt(x)+1)+")");for (let i = 0; i < dvs.length; i++) {dvs[i].style.display = "none";} for (let i = 0; i < dv.length; i++) {dv[i].style.display="flex"};})	

            for(let q = 0; q < pokCount; q++) {
                let y = q+1;

				let optionsPokOption = document.createElement("option");
				optionsPokOption.innerText = "Pokémon #"+y;
				optionsPokOption.setAttribute("value",q);
				optionsPokTitleSelect.appendChild(optionsPokOption);
            }



            // Pokémon //
			let optionsPokWrap = document.createElement("span");
			optionsPokWrap.setAttribute("name","team "+x)
			optionsPokPath.appendChild(optionsPokWrap)
			
			for(let q = 0; q < pokCount; q++) {
				let y = q+1;

				let optionsPok = document.createElement("ul");
				optionsPok.setAttribute("name",q);
				optionsPokWrap.appendChild(optionsPok);

                
                if ("Pokémon") {
                    let pok = document.createElement("li");
					let pokTitle = document.createElement("span");
                    let pokTitleText = document.createElement("h6");
                    let pokSelect = document.createElement("select");
                    pokTitleText.innerText = "Pokémon #"+y;
                    pok.setAttribute("name","pokémon");
                    optionsPok.appendChild(pok);
                    pok.appendChild(pokTitle);
					pokTitle.appendChild(pokTitleText);
                    pok.appendChild(pokSelect);
                    
                    //pokSelect.addEventListener("change",function(){if(this.value == ""){DMGRemoveDataString(findUpTag(this,"UL"))}});
                    pokSelect.addEventListener("change",function(){let ulbase = findUpTag(this,"UL");let team = ulbase.parentElement.getAttribute("name");let id = ulbase.getAttribute("name"); let tar = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[data-string][name='"+id+"']"); let dstring = tar.getAttribute("data-string"); if (dstring != "") {let ds = tar.getAttribute("data-string").replaceAll("pok:"+dataStringToObj(tar.getAttribute("data-string"))["pok"],"pok:"+this.value); tar.setAttribute("data-string",ds);} else {tar.setAttribute("data-string","pok:"+this.value)}let el1 = ulbase.querySelector(":scope *[name='hp'] > input");let el2 = ulbase.querySelector(":scope *[name='hp'] input[name='current']");el1.value = el1.max; el2.value = el1.max;el1.style.background = "Dodgerblue";});
                    pokSelect.addEventListener("change",DMGPokSpecific);
                    pokSelect.addEventListener("change",DMGSaveData);
                    pokSelect.addEventListener("change",DMGSetChange);
                    //pokSelect.addEventListener("change",DMGSetInfo);
                    pokSelect.addEventListener("change",DMGCalcPokStats);
					pokSelect.addEventListener("change",DMGResetCalc);
					//pokSelect.addEventListener("change",DMGCalcStart);


                    let poks = [];
                    if (poks[0] != "") {
                        poks.unshift("");
                    }
                    for(let e = 0; e < finaldata["Pokémon"]["Reference"].length; e++) {
                        if (finaldata["Pokémon"]["Reference"][e][DATA_Pokémon_Reference["Reference"]] == "true") {
                            poks.push(getPokémonName(e))
                        }
                    }

                    for(let e = 0; e < poks.length; e++) {
						let pokint = getPokémonInt(poks[e]);
                        let pokOption = document.createElement("option");
                        pokSelect.appendChild(pokOption);

                        if (pokint != undefined) {
							let pokName = getPokémonName(pokint,"Alt");
							let pokTitle = getPokémonName(pokint);
							pokOption.setAttribute("value",pokName)
							pokOption.innerText = pokName;
							pokOption.setAttribute("data-name",pokName);
							pokOption.setAttribute("data-title",pokTitle);
                            pokOption.setAttribute("data-variant",finaldata["Pokémon"]["Reference"][pokint]["Variant"]);
                        }

                        if (pokOption.getAttribute("data-variant") != undefined) {
                            if (!pokOption.getAttribute("data-variant").includes("Default")) {
                                pokOption.style.display = "none";
                                pokOption.setAttribute("disabled","");
                            }
                        }
                    }

                    if (pokSelect.querySelectorAll(":scope option[data-variant]:not([data-variant*='Default']").length > 0) {
                        let pokFormInput = document.createElement("input");
                        let pokFormLabel = document.createElement("label");
                        let pokFormLabelText = document.createElement("small");
                        pokFormInput.setAttribute("type","checkbox");
                        pokFormInput.setAttribute("id","dmg-pok-form-"+d);
                        pokFormInput.setAttribute("name","dmg-pok-form");
                        pokFormLabel.setAttribute("for","dmg-pok-form-"+d);
                        pokFormLabelText.innerText = "Forms";
                        pokTitle.appendChild(pokFormInput);
                        pokTitle.appendChild(pokFormLabel);
                        pokFormLabel.appendChild(pokFormLabelText);
                        pokFormInput.addEventListener("change",function(){let tars = findUpTag(this,"LI").querySelectorAll(":scope select option"); let tar = findUpTag(this,"LI").querySelectorAll(':scope select option[data-variant]:not([data-variant*="Default"])');for(let t = 0; t < tars.length; t++) {tars[t].style.removeProperty("display");tars[t].removeAttribute("disabled");} let pokname = "data-title"; if(!this.checked){pokname = "data-name";for(let t = 0; t < tar.length; t++) {tar[t].style.display = "none";tar[t].setAttribute("disabled","");}}for(let t = 0; t < tars.length; t++) {if (tars[t].getAttribute(pokname) != undefined) {tars[t].innerText = tars[t].getAttribute(pokname);tars[t].value = tars[t].getAttribute(pokname);}}})
                    }
                }
                if ("HP") {
                    let maxHP = document.createElement("li");
                    let maxHPRange = document.createElement("input");
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

                    maxHPRange.addEventListener("input",function(){let v = (((this.value-this.min)/(this.max-this.min))*100);let c = "Dodgerblue";let b = "hsl(0,0%,90%)";this.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})


                    let maxHPWrap = document.createElement("span");
                    let maxHPWrapCurrent = document.createElement("input");
                    let maxHPWrapDash = document.createElement("small");
                    let maxHPWrapMax = document.createElement("input");
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
					maxHPWrapCurrent.addEventListener("click",function(){this.select();});
                    maxHPWrapCurrent.addEventListener("change",function(){this.parentElement.parentElement.querySelector(":scope input[type='range']").value = this.value;});
                    maxHPWrapCurrent.addEventListener("change",function(){let tar = this.parentElement.parentElement.querySelector(":scope input[type='range']");let v = ((tar.value-tar.min)/(tar.max-tar.min))*100;let c = "Dodgerblue";let b = "hsl(0,0%,90%)";tar.style.background = `linear-gradient(to right, ${c} 0%, ${c} ${v}%, ${b} ${v}%, ${b} 100%)`})

					//maxHPWrapCurrent.addEventListener("change",DMGCalcStart);

					maxHPWrapCurrent.addEventListener("change",DMGResetCalc);
					maxHPRange.addEventListener("change",DMGResetCalc);

                    maxHPRange.addEventListener("input",function(){this.parentElement.querySelector(":scope *[name='current']").value = this.value;});
					//maxHPRange.addEventListener("input",DMGCalcStart);
                }
                if ("Type") {
                    let type = document.createElement("li");
                    let typeWrap = document.createElement("span");
                    type.setAttribute("name","type");
                    optionsPok.appendChild(type)
                    type.appendChild(typeWrap);
                    let count = 2;
                    if (document.querySelector("#contain > div#move > section[name='list'] ol label[data-title='trick-or-treat']") != undefined) {
                        count = 3;
                    }
                    if (document.querySelector(`#contain > div#move > section[name='list'] ol label[data-title="forest's curse"]`) != undefined) {
                        count = 3;
                    }
                    for (let m = 0; m < count; m++) {
                        let typeSelect = document.createElement("select");
                        typeWrap.appendChild(typeSelect)
                        typeSelect.setAttribute("name",m)
                        typeSelect.addEventListener("change",function(){if (this.value != "" && this.value != undefined) {this.style.background = "var(--type"+this.value+")"} else {this.style.removeProperty("background")}})
                        typeSelect.addEventListener("change",function(){uniqueValueSelect(this.parentElement.querySelectorAll(":scope select"))});
                        typeSelect.addEventListener("change",DMGCalcPokStats);
                        //typeSelect.addEventListener("change",DMGCalcStart);


                        let typesTemp = [...Types];

                        if (typesTemp[0] != "") {
                            typesTemp.unshift("");
                        }

                        for(let n = 0; n < typesTemp.length; n++) {
                            let typeOption = document.createElement("option");
                            typeOption.value = typesTemp[n];
                            typeOption.innerText = typesTemp[n];
                            typeSelect.appendChild(typeOption)
                            if (n != 0) {
                                typeOption.style.background = "var(--type"+typesTemp[n]+")";
                            }
                        }
                        if (m == 2) {
                            typeSelect.innerHTML = "<option value=''></option>"
                            typeSelect.classList.add("disable");
                        }
                    }
                }
                if ("Level") {
                    let level = document.createElement("li");
                    level.setAttribute("name","level");
                    optionsPok.appendChild(level)

                    let levelTitle = document.createElement("h6");
                    let levelInput = document.createElement("input");

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
					//levelInput.addEventListener("input",DMGSetInfo);
                    levelInput.addEventListener("input",DMGSaveData);
                    levelInput.addEventListener("input",DMGCalcPokStats);
					//levelInput.addEventListener("input",DMGCalcStart);
                }
                if ("Nature") {
                    if (Natures.length > 0) {
                        let nature = document.createElement("li");
                        let natureTitle = document.createElement("h6");
                        let natureSelect = document.createElement("select");

                        nature.setAttribute("name","nature");
                        natureTitle.innerText = "Nature"

                        optionsPok.appendChild(nature)
                        nature.appendChild(natureTitle);
                        nature.appendChild(natureSelect)

                        natureSelect.addEventListener("change",DMGSaveData);
                        natureSelect.addEventListener("change",DMGCalcPokStats);
                        //natureSelect.addEventListener("change",DMGCalcStart);
                        
                        let naturesTemp = Natures;
                        if (naturesTemp[0] != "") {
                            naturesTemp.unshift("");
                        }
                        for(let n = 0; n < naturesTemp.length; n++) {
                            let natureOption = document.createElement("option");
                            natureOption.value = naturesTemp[n];
                            natureOption.innerText = naturesTemp[n];
                            natureSelect.appendChild(natureOption)
                        }
                    }
                }
                if ("Ability") {
                    if (Ability.length > 0) {
                        let ability = document.createElement("li");
                        let abilityTitle = document.createElement("h6");
                        let abilitySelect = document.createElement("select");

                        ability.setAttribute("name","ability");
                        abilityTitle.innerText = "Ability"

                        optionsPok.appendChild(ability)
                        ability.appendChild(abilityTitle);
                        ability.appendChild(abilitySelect)

                        abilitySelect.addEventListener("change",DMGSaveData);
                        abilitySelect.addEventListener("change",DMGCalcPokStats);
                        //abilitySelect.addEventListener("change",DMGCalcStart);
                        abilitySelect.addEventListener("change",function(){
                            let abd = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",this.value)[0];
                            abd = undDel(abd,{Description:""});
                            abd = abd["Description"];
                            this.title = abd;
                        })
                    }
                }
                if ("Gender") {
                    if (Gender == true) {

                        let gender = document.createElement("li");
                        let genderTitle = document.createElement("h6");
                        let genderSelect = document.createElement("select");
                        
                        gender.setAttribute("name","gender");
                        genderTitle.innerText = "Gender"

                        optionsPok.appendChild(gender)
                        gender.appendChild(genderTitle);
                        gender.appendChild(genderSelect)

                        genderSelect.addEventListener("change",DMGSaveData);
                        genderSelect.addEventListener("change",DMGCalcPokStats);
                        //genderSelect.addEventListener("change",DMGCalcStart);
						genderSelect.addEventListener("change",DMGUpdateSRC);

                        genderSelect.addEventListener("change",function(){this.style.removeProperty("color"); if (this.value == "♂") {this.style.color = "blue";}else if (this.value == "♀") {this.style.color = "red";}});

                
                        let possibleGender = [];

                        for (let r = 0; r < possibleGender.length; r++) {
                            let option = document.createElement("option");
                            option.innerText = possibleGender[r];
                            option.value = possibleGender[r];
                            genderSelect.appendChild(option)
                        }
                    }
                }
                if ("Friendship") {
                    if (Friendship) {
                        let friendship = document.createElement("li");
                        friendship.setAttribute("name","friendship");
                        optionsPok.appendChild(friendship)

                        let friendshipTitle = document.createElement("h6");
                        let friendshipInputWrap = document.createElement("span");
                        let friendshipInput = document.createElement("input");
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
                        //friendshipInput.addEventListener("input",DMGCalcStart);

                        friendship.appendChild(friendshipTitle)
                        friendship.appendChild(friendshipInputWrap)
                        friendshipInputWrap.appendChild(friendshipInput)
                        
                    }
                }
                if ("Affection") {
                    if (getApplicable("X,Y,Omega Ruby,Alpha Sapphire,Sun,Moon,Ultra Sun,Ultra Moon")) {
                        let affection = document.createElement("li");
                        affection.setAttribute("name","affection");
                        optionsPok.appendChild(affection)

                        let affectionTitle = document.createElement("h6");
                        let affectionInputWrap = document.createElement("span");
                        let affectionInput = document.createElement("input");
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
                        //affectionInput.addEventListener("input",DMGCalcStart);

                        affection.appendChild(affectionTitle)
                        affection.appendChild(affectionInputWrap)
                        affectionInputWrap.appendChild(affectionInput)
                    }
                }
                if ("Item") {
                    if (HeldItem == true) {
                        let item = document.createElement("li");
                        item.setAttribute("name","item");
                        optionsPok.appendChild(item)

                        let itemTitle = document.createElement("h6");
                        let itemImgWrap = document.createElement("span");
                        let itemSelect = document.createElement("select");
                        let itemImg = document.createElement("img");
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
                        //itemSelect.addEventListener("change",DMGCalcStart);
                        //itemSelect.addEventListener("change",DMGSetInfo);
                        itemSelect.addEventListener("change",function(){
                            let itd = returnAppArrData(finaldata["Items"]["Description"],"Item",this.value)[0];
                            itd = undDel(itd,{Description:""});
                            itd = itd["Description"];
                            this.title = itd;
                    
                        })


                        let items = []
                        if (items[0] != "") {
                            items.unshift("");
                        }

                        for (let r = 0; r < items.length; r++) {
                            let option = document.createElement("option");
                            option.innerText = items[r];
                            option.value = items[r];
                            itemSelect.appendChild(option)
                        }
                
                    }
                }
                if ("Move") {
                    let move = document.createElement("li");
                    let moveTitle = document.createElement("h6");
                    let moveWrap = document.createElement("span");
                    move.setAttribute("name","moves");
                    moveTitle.innerText = "Moves"
                    optionsPok.appendChild(move)
                    move.appendChild(moveTitle);
                    move.appendChild(moveWrap);

                    $(moveWrap).sortable({
                        update: function(e,ui) {		
                            let base = findUpTag(this,"UL");
                    
                            let eles = base.querySelectorAll(":scope li[name='moves'] select");

                            for (let r = 0; r < eles.length; r++) {
                                eles[r].setAttribute("name",r)
                                eles[r].firstChild.setAttribute("value","Move #"+(r+1));
                                eles[r].firstChild.innerText = "Move #"+(r+1);
                            }

                            DMGSaveData(base);
                            DMGSetChange(base);
                        
                        },
                        containment: "parent",
                    });


                    for (let m = 0; m < 4; m++) {
                        let moveSelectTopWrap = document.createElement("span");
                        let moveSelect = document.createElement("select");
                        moveWrap.appendChild(moveSelectTopWrap);
                        moveSelectTopWrap.appendChild(moveSelect);
                        moveSelect.setAttribute("name",m)
                        moveSelect.addEventListener("change",function(){let x = returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],this.value); if (x == undefined) {this.style.removeProperty("color");this.style.removeProperty("background");} else {this.style.color = "var(--type"+x+")";}})
                        moveSelect.addEventListener("change",DMGSaveData);
                        moveSelect.addEventListener("change",DMGCalcPokStats);
                        //moveSelect.addEventListener("change",DMGCalcStart);
                        moveSelect.addEventListener("change",function(){uniqueValueSelect(this.parentElement.parentElement.querySelectorAll(":scope select"))});

                        moveSelect.addEventListener("change",function(){this.title = ""; if(!this.value.includes("#")) {let movd = formatMoveData(this.value);movd = undDel(movd,"");this.title = movd;}});


                        let tempMoves = [];

                        for(let t = 0; t < finaldata["Moves"]["Reference"].length; t++) {
                            if(finaldata["Moves"]["Reference"][t][DATA_Move_Reference["Reference"]] == "true") {
                                if (finaldata["Moves"]["Group"][t]["Group"] != "Z-Move" && finaldata["Moves"]["Group"][t]["Group"] != "Max Move" && finaldata["Moves"]["Group"][t]["Group"] != "G-Max Move") {
                                    tempMoves.push(finaldata["Moves"]["Reference"][t][DATA_Move_Reference["Name"]])
                                }
                            }
                        }

                
                        tempMoves.sort();

                        let movesTemp = [...tempMoves];


                        movesTemp.sort();
						if (movesTemp[0] != undefined) {
							if (!movesTemp[0].includes("#")) {
								movesTemp.unshift("Move #"+(m+1));
							}
						}
                        for(let n = 0; n < movesTemp.length; n++) {
                            let moveOption = document.createElement("option");
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
                                moveOption.style.background = "var(--type"+returnArrValue(finaldata["Moves"]["Type"],DATA_Move_Reference["Name"],DATA_Move_Type["Type"],movesTemp[n])+")";
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
                    let header = document.createElement("span");
                    let headerText = document.createElement("small");
                    header.setAttribute("name","header");
                    headerText.innerText = "Team "+x;
                    optionsPok.appendChild(header)
                    header.appendChild(headerText);
                }
                if ("Reset") {
                    let reset = document.createElement("figure");
                    let resetText = document.createElement("h6");
                    resetText.innerText = "❌";
                    reset.setAttribute("type","scale");
                    reset.setAttribute("name","reset");
                    optionsPok.appendChild(reset)
                    reset.appendChild(resetText)
                    reset.addEventListener("click",function(){let base = findUpTag(this,"UL");DMGRemoveDataString(document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+base.parentElement.getAttribute("name")+"'] > div[name='"+base.getAttribute("name")+"']"))})
                }
                if ("Export") {
                    let exportTeam = document.createElement("figure");
                    let exportTeamText = document.createElement("small");
                    let exportTeamTop = document.createElement("div");
                    let exportTeamWrap = document.createElement("span");
                    exportTeam.setAttribute("name","export");
					exportTeam.classList.add("drop");
                    exportTeamText.innerText = "⮟";
                    optionsPok.appendChild(exportTeam)
                    exportTeam.appendChild(exportTeamText)
                    exportTeam.appendChild(exportTeamTop)
                    exportTeamTop.appendChild(exportTeamWrap)

                    exportTeam.addEventListener("click",function(){if (this.classList.contains("active")) {this.classList.remove("active");} else {this.classList.add("active");}})

                    let exportOptions = ["Import Pokémon","Copy Data String","Add Copy to Party","Add Copy to Box","Change Evolution","Change Form"];

                    for(let e = 0; e < exportOptions.length; e++) {
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
                for(let c = 0; c < battleCondition.length; c++) {
                    if (battleCondition[c]["Affect"] == "Pokémon") {
                        var check = getApplicable(battleCondition[c]["Game"]);
                        
                        if (battleCondition[c]["Affected"] != undefined && battleCondition[c]["Game"] == "All") {
                            check = false;
                            let val = [];
                            if (battleCondition[c]["Affected"].includes(",")) {
                                val = battleCondition[c]["Affected"].split(",");
                            }
                            else {
                                val = [battleCondition[c]["Affected"]]
                            }

                            for (let k = 0; k < val.length; k++) {
                                let exist = document.querySelector(`#contain > div#`+battleCondition[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
                                if (exist  != undefined) {
                                    check = true;
                                    break;
                                }
                            }
                        }
                    
                        if (check) {
                            let nameTemp = [];

                            if (battleCondition[c]["Name"] != undefined) {
                                nameTemp.push(battleCondition[c]["Name"])
                            }
                            if (battleCondition[c]["Group"] == undefined) {
                                if (battleCondition[c]["Type"] == "Ability" || battleCondition[c]["Type"] == "Move") {
                                    nameTemp.push("("+battleCondition[c]["Type"]+")")
                                }
                            }
                            
                            let appender = optionsPok;
                            if (battleCondition[c]["Group"] != undefined) {
                                let tar = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"']");
                    
                                if (tar == undefined) {
                                    let grp = document.createElement("li");
                                    let grpTitle = document.createElement("h6");
                                    let grpWrap = document.createElement("span");
                                    grp.setAttribute("name",battleCondition[c]["Group"]+"-Group");
                                    grpTitle.innerText = battleCondition[c]["Group"];
                                    appender.appendChild(grp);
                                    grp.appendChild(grpTitle);
                                    grp.appendChild(grpWrap);
                                }

                                appender = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"'] > *:last-child");
                            }

                            if (appender != undefined) {
                                let condition = document.createElement("li");
                                appender.appendChild(condition)

                                condition.setAttribute("name",battleCondition[c]["Name"]);
                                
                                let conditionInput = document.createElement("input");
                                let conditionLabel = document.createElement("label");
                                let conditionLabelText = document.createElement("small");	
                                conditionLabelText.innerText = nameTemp.join(" ");
                                conditionInput.setAttribute("type","checkbox");
                                conditionInput.setAttribute("name","condition-checkbox");
                                conditionInput.setAttribute("id",battleCondition[c]["Name"]+"-"+d+"-"+c+"-pok-checkbox");
                                conditionLabel.setAttribute("for",battleCondition[c]["Name"]+"-"+d+"-"+c+"-pok-checkbox");
                                condition.appendChild(conditionInput)
                                condition.appendChild(conditionLabel)
                                conditionLabel.appendChild(conditionLabelText)

                                if (battleCondition[c]["Group"] == "Type Change" || battleCondition[c]["Group"] == "Status") {
                                    conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
                                }
                                if (battleCondition[c]["Group"] == "Status") {
                                    conditionInput.addEventListener("change",DMGCalcPokStats);
                                }


                                if (battleCondition[c]["Title"] != undefined) {
                                    condition.setAttribute("title",battleCondition[c]["Title"])
                                }
                                else if (battleCondition[c]["Type"] == "Move") {
                                    let val = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],battleCondition[c]["Name"])
                                    if (val != undefined) {
                                        condition.setAttribute("title",val);
                                    }
                                }
                                else if (battleCondition[c]["Type"] == "Ability") {
                                    let val = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",battleCondition[c]["Name"])[0]["Description"];
                                    if (val != undefined) {
                                        cond.setAttribute("title",val);
                                    }
                                }
                            
                                if (battleCondition[c]["Name"] == "Trick-or-Treat") {
                                    conditionInput.addEventListener("change",function(){let y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (let i = 0; i < y.length; i++) {if (y[i].value == "Ghost") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Ghost' style='var(--typeGhost)'>Ghost</option>";y[2].classList.remove("disable");y[2].value = "Ghost";y[2].style.background = 'var(--typeGhost';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
                                }
                                if (battleCondition[c]["Name"] == "Forest's Curse") {
                                    conditionInput.addEventListener("change",function(){let y = this.parentElement.parentElement.parentElement.parentElement.querySelectorAll(":scope *[name='type'] select"); check = true; for (let i = 0; i < y.length; i++) {if (y[i].value == "Grass") {check = false;break;}}; if (check) {if(this.checked) {y[2].innerHTML = "<option value='Grass' style='var(--typeGrass)'>Grass</option>";y[2].classList.remove("disable");y[2].value = "Grass";y[2].style.background = 'var(--typeGrass';}} else {this.checked = false; y[2].style.removeProperty("background");y[2].classList.add("disable");y[2].innerHTML = "<option value=''></option>"; y[2].value = "";} uniqueValueSelect(y)})
                                }

								
                                if (battleCondition[c]["Values"] != undefined) {
                                    conditionInput.setAttribute("type","number");
                                    conditionInput.setAttribute("min",battleCondition[c]["Values"].split(",")[0]);
                                    conditionInput.setAttribute("max",battleCondition[c]["Values"].split(",")[1]);
                                    conditionInput.addEventListener("input",iMinMax);
                                    //conditionInput.addEventListener("input",DMGCalcStart);
                                }
                                else {
                                    //conditionInput.addEventListener("change",DMGCalcStart);
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
            let optionsTeamWrap = document.createElement("span");
			optionsTeamWrap.setAttribute("name","team "+x)
			optionsTeamPath.appendChild(optionsTeamWrap)

            // Stats //
            let statsWrap = document.createElement("span");
            statsWrap.setAttribute("name","team "+x)
            optionsStatsPath.appendChild(statsWrap);
    
            for(let q = 0; q < pokCount; q++) {
                let y = q+1;

                let statsPok = document.createElement("ul");
                statsPok.setAttribute("name",q)
                statsWrap.appendChild(statsPok)
    

    
                let statsCol = [{},{Name:"Individual Value",Title:"IV",Min:0,Max:31},{Name:"Effort Value",Title:"EV",Min:0,Max:255},{Name:"Modifier",Title:"Mod",Min:-6,Max:6},{}]

   
                for(let e = 0; e < statsCol.length; e++) {
            
                    let statsName = statsCol[e]["Name"];
                    let statsTitle = statsCol[e]["Title"];
                    let statsMin = statsCol[e]["Min"];
                    let statsMax = statsCol[e]["Max"];

                    statsName = undwsnullDel(statsName,"");
                    statsTitle = undwsnullDel(statsTitle,"");
                    statsMin = undwsnullDel(statsMin,0);
                    statsMax = undwsnullDel(statsMax,0);
     

                    let statsColumn = document.createElement("span");
					if (statsTitle != "") {
                        statsColumn.setAttribute("name",statsTitle)
                    }
                    statsPok.appendChild(statsColumn);

                  
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
    
                    let statsWrapTempInput = document.createElement("input");
                    statsWrapTempInput.setAttribute("type","number");
                    statsWrapTempInput.setAttribute("disabled","");
                    statsWrapTempInput.setAttribute("min",0);
                    statsWrapTempInput.setAttribute("max",0);
                    statsWrapTempInput.setAttribute("value",statsTitle);
                    statsWrapTempInput.setAttribute("placeholder",statsTitle);
                    statsColumn.appendChild(statsWrapTempInput);
    
                    
    
                    
                    let statsTemp = [...Stats];
    
					statsTemp = statsTemp.map(function(item) {return item['Name'];});

                    statsTemp.push("Evasion");
                    statsTemp.push("Accuracy");
                    statsTemp.push("Critical");
    
                    statsTemp = statsTemp.filter(e => e !== 'Total');
    
                    for(let s = 0; s < statsTemp.length; s++) {
    
                        if (e == 1 || e == 2 || e == 4) {
                            if (statsTemp[s] == "Evasion" || statsTemp[s] == "Accuracy" || statsTemp[s] == "Critical") {
                                break;
                            }
                        }

						
                        
						
						let statsWrapInput = document.createElement("input");
						statsWrapInput.setAttribute("type","number");
						statsWrapInput.setAttribute("min",statsMin);
						statsWrapInput.setAttribute("max",statsMax);
						statsWrapInput.setAttribute("name",statsTemp[s]);
						statsWrapInput.setAttribute("title",statsName+"\n"+statsTemp[s]);
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

						if (Generation == 2) {
							if (statsCol[e]["Title"] == "IV") {
								if (statsTemp[s] == "Sp. Atk") {
									statsWrapInput.addEventListener("input",function(){let x = this.parentElement.querySelector(":scope *[name='Sp. Def']");x.value = this.value;});
								}
								if (statsTemp[s] == "Sp. Def") {
									statsWrapInput.addEventListener("input",function(){let x = this.parentElement.querySelector(":scope *[name='Sp. Atk']");x.value = this.value;});
								}
							}
						}

						statsWrapInput.addEventListener("click",function(){this.select();})
						statsWrapInput.addEventListener("input",function(){let x = findUpTag(this,"UL");let base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGCalcPokStats(base2)});
						statsWrapInput.addEventListener("input",function(){let x = findUpTag(this,"UL");let base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGSaveData(base2)});
						//statsWrapInput.addEventListener("input",function(){let x = findUpTag(this,"UL");let base2 = document.querySelector("#contain > div#tool div#dmg div[name='options'] ol[name='pokémon'] > span[name='"+x.parentElement.getAttribute("name")+"'] > ul[name='"+x.getAttribute("name")+"']");DMGCalcStart(base2)});
	
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


						if (Generation == 2) {
							if (statsCol[e]["Title"] == "IV") {
								if (statsTemp[s] == "HP") {
									statsWrapInput.setAttribute("disabled","")
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
			for(let c = 0; c < battleCondition.length; c++) {
				if (battleCondition[c]["Affect"] == "Team") {
					var check = getApplicable(battleCondition[c]["Game"]);
					if (battleCondition[c]["Affected"] != undefined && battleCondition[c]["Game"] == "All") {
						check = false;
						let val = [];
						if (battleCondition[c]["Affected"].includes(",")) {
							val = battleCondition[c]["Affected"].split(",");
						}
						else {
							val = [battleCondition[c]["Affected"]]
						}

						for (let k = 0; k < val.length; k++) {
							let exist = document.querySelector(`#contain > div#`+battleCondition[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
							if (exist  != undefined) {
								check = true;
								break;
							}
						}
					}
				
					if (check) {
						let nameTemp = [];

						if (battleCondition[c]["Name"] != undefined) {
							nameTemp.push(battleCondition[c]["Name"])
						}
						if (battleCondition[c]["Group"] == undefined) {
							if (battleCondition[c]["Type"] == "Ability" || battleCondition[c]["Type"] == "Move") {
								nameTemp.push("("+battleCondition[c]["Type"]+")")
							}
						}

						
						let appender = optionsTeamPath.querySelector(":scope > *[name='team "+x+"']");

						if (battleCondition[c]["Group"] != undefined) {
							let tar = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"']");
				
							if (tar == undefined) {
								let grp = document.createElement("li");
								let grpTitle = document.createElement("h6");
								let grpWrap = document.createElement("span");
								grp.setAttribute("name",battleCondition[c]["Group"]+"-Group");
								grpTitle.innerText = battleCondition[c]["Group"];
								appender.appendChild(grp);
								grp.appendChild(grpTitle);
								grp.appendChild(grpWrap);
							}

							appender = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"'] > *:last-child");
						}

						if (appender != undefined) {
					
							let condition = document.createElement("li");
							appender.appendChild(condition)

							condition.setAttribute("name",battleCondition[c]["Name"]);
							
							let conditionInput = document.createElement("input");
							let conditionLabel = document.createElement("label");
							let conditionLabelText = document.createElement("small");	
							conditionLabelText.innerText = nameTemp.join(" ");
							conditionInput.setAttribute("type","checkbox");
							conditionInput.setAttribute("name","condition-checkbox");
							conditionInput.setAttribute("id",battleCondition[c]["Name"]+"-"+d+"-"+c+"-team-checkbox");
							conditionLabel.setAttribute("for",battleCondition[c]["Name"]+"-"+d+"-"+c+"-team-checkbox");
							condition.appendChild(conditionInput)
							condition.appendChild(conditionLabel)
							conditionLabel.appendChild(conditionLabelText)

							if (battleCondition[c]["Title"] != undefined) {
								condition.setAttribute("title",battleCondition[c]["Title"])
							}
							else if (battleCondition[c]["Type"] == "Move") {
								let val = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],battleCondition[c]["Name"])
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}
							else if (battleCondition[c]["Type"] == "Ability") {
								let val = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",battleCondition[c]["Name"])[0]["Description"];
								if (val != undefined) {
									condition.setAttribute("title",val);
								}
							}


							if (battleCondition[c]["Group"] == "Pointed Stones" || battleCondition[c]["Group"] == "Spikes" || battleCondition[c]["Group"] == "Sharp Steel") {
								conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
							}
							if (battleCondition[c]["Group"] == "Badge" || battleCondition[c]["Name"] == "Tailwind") {
								conditionInput.addEventListener("change",function(){let base = findUpTagAtt(this,"SPAN","name"); let team = base.getAttribute("name"); let els = document.querySelectorAll("#contain > div#tool div#dmg > div ol[name='pokémon'] > span[name='"+team+"'] > ul"); for(let i = 0; i < els.length; i++) {DMGCalcPokStats(els[i])}});
							}


							if (battleCondition[c]["Values"] != undefined) {
								conditionInput.setAttribute("type","number");
								conditionInput.setAttribute("min",battleCondition[c]["Values"].split(",")[0]);
								conditionInput.setAttribute("max",battleCondition[c]["Values"].split(",")[1]);
								conditionInput.addEventListener("input",iMinMax);
								conditionInput.addEventListener("click",function(){this.select();})
								//conditionInput.addEventListener("input",DMGCalcStart);
							}
							else {
								//conditionInput.addEventListener("change",DMGCalcStart);
							}

						}
					}
				}
			}
		}
	}

	// All Conditions
	for(let c = 0; c < battleCondition.length; c++) {
		if (battleCondition[c]["Affect"] == "All") {
			var check = getApplicable(battleCondition[c]["Game"]);
			
			if (battleCondition[c]["Affected"] != undefined && battleCondition[c]["Game"] == "All") {
				check = false;
				let val = [];
				if (battleCondition[c]["Affected"].includes(",")) {
					val = battleCondition[c]["Affected"].split(",");
				}
				else {
					val = [battleCondition[c]["Affected"]]
				}

				for (let k = 0; k < val.length; k++) {
					let exist = document.querySelector(`#contain > div#`+battleCondition[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
					if (exist  != undefined) {
						check = true;
						break;
					}
				}
			}
		
			if (check) {
				let nameTemp = [];

				if (battleCondition[c]["Name"] != undefined) {
					nameTemp.push(battleCondition[c]["Name"])
				}
				if (battleCondition[c]["Group"] == undefined) {
					if (battleCondition[c]["Type"] == "Ability" || battleCondition[c]["Type"] == "Move") {
						nameTemp.push("("+battleCondition[c]["Type"]+")")
					}
				}

				
				let appender = document.querySelector("#contain > div#tool div#dmg div[name='content'] > div[name='field']")
		
		
				if (battleCondition[c]["Affect"] == "Specific") {
					appender = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='specific']")
				}

				if (appender != undefined) {
					if (battleCondition[c]["Group"] != undefined) {
						if (battleCondition[c]["Affect"] == "All") {
							let targ = appender.querySelector(":scope > span[name='wrap1']");
							if (targ == undefined) {
								let wrap = document.createElement("span");
								wrap.setAttribute("name","wrap1");
								appender.appendChild(wrap);
							}
							targ = appender.querySelector(":scope > span[name='wrap1']");
							appender = targ;
						}

						let tar = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"']");
			
						if (tar == undefined) {
							let grp = document.createElement("li");
							let grpTitle = document.createElement("h6");
							let grpWrap = document.createElement("span");
							grp.setAttribute("name",battleCondition[c]["Group"]+"-Group");
							grpTitle.innerText = battleCondition[c]["Group"];
							appender.appendChild(grp);
							grp.appendChild(grpTitle);
							grp.appendChild(grpWrap);
						}

						appender = appender.querySelector(":scope > *[name='"+battleCondition[c]["Group"]+"-Group"+"'] > *:last-child");
					}
					else {
						let targ = appender.querySelector(":scope > span[name='wrap2']");
						if (targ == undefined) {
							let wrap = document.createElement("span");
							wrap.setAttribute("name","wrap2");
							appender.appendChild(wrap);
						}
						targ = appender.querySelector(":scope > span[name='wrap2']");
						appender = targ;
					}


					if (appender != undefined) {
						let condition = document.createElement("li");
						let conditionInput = document.createElement("input");
						let conditionLabel = document.createElement("label");
						let conditionLabelText = document.createElement("small");	

						condition.setAttribute("name",battleCondition[c]["Name"]);

						conditionLabelText.innerText = nameTemp.join(" ");
						conditionInput.setAttribute("type","checkbox");
						conditionInput.setAttribute("name","condition-checkbox");
						conditionInput.setAttribute("id",battleCondition[c]["Name"]+"-"+c+"-all-checkbox");
						conditionLabel.setAttribute("for",battleCondition[c]["Name"]+"-"+c+"-all-checkbox");


						appender.appendChild(condition)
						condition.appendChild(conditionInput)
						condition.appendChild(conditionLabel)
						conditionLabel.appendChild(conditionLabelText)

						if (battleCondition[c]["Title"] != undefined) {
							condition.setAttribute("title",battleCondition[c]["Title"])
						}
						else if (battleCondition[c]["Type"] == "Move") {
							let val = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],battleCondition[c]["Name"])
							if (val != undefined) {
								condition.setAttribute("title",val);
							}
						}
						else if (battleCondition[c]["Type"] == "Ability") {
							let val = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",battleCondition[c]["Name"])[0]["Description"];
							if (val != undefined) {
								condition.setAttribute("title",val);
							}
						}

						if (battleCondition[c]["Group"] == "Weather") {
							let img = document.createElement("img");
							img.src = getMedia(true,battleCondition[c]["Name"],[PATH_Weather_Icon_PNG,PATH_Weather_Icon_GIF])
							img.title = battleCondition[c]["Name"];
							img.setAttribute("onload","this.parentElement.parentElement.firstChild.style.display=`none`;");
							img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`;this.style.display=`none`");
							conditionLabel.appendChild(img)
						}
						if (battleCondition[c]["Group"] == "Terrain") {
							let terrtype = undefined;
							if (battleCondition[c]["Name"] == "Misty Terrain") {
								terrtype = "Fairy";
							}
							if (battleCondition[c]["Name"] == "Grassy Terrain") {
								terrtype = "Grass";
							}
							if (battleCondition[c]["Name"] == "Psychic Terrain") {
								terrtype = "Psychic";
							}
							if (battleCondition[c]["Name"] == "Electric Terrain") {
								terrtype = "Electric";
							}
							let img = document.createElement("img");
							img.src = getMedia(true,[terrtype],[PATH_Type_Icon],["GO"])
							img.title = battleCondition[c]["Name"];
							img.setAttribute("onload","this.parentElement.firstChild.style.display='none'");
							img.setAttribute("onerror","this.parentElement.parentElement.firstChild.style.display=`unset`; this.parentElement.firstChild.style.display='unset';this.style.display=`none`");
							conditionLabel.appendChild(img)
						}

						
						if (battleCondition[c]["Group"] == "Weather" || battleCondition[c]["Group"] == "Terrain") {
							conditionInput.addEventListener("change",function(){onlyOneInput(this.parentElement.parentElement.querySelectorAll(":scope input"),this)})
			
						}


						if (battleCondition[c]["Group"] == "Weather") {
							conditionInput.addEventListener("change",function(){let x = document.querySelectorAll("#contain > div#tool div#dmg > div ul"); for(let q = 0; q < x.length; q++) {DMGCalcPokStats(x[q])}})
						}

						
						if (battleCondition[c]["Name"] == "Trick Room") {
							conditionInput.addEventListener("change",function(){let x = document.querySelectorAll("#contain > div#tool div#dmg > div span[name] ul[name]"); for (let r = 0; r < x.length; r++) {DMGCalcPokStats(x[r]);}})
						}

						
						//conditionInput.addEventListener("change",DMGCalcStart);	
					}
				
				}
			}
		}
	}

	// Specific Conditions
	for(let c = 0; c < battleCondition.length; c++) {
		if (battleCondition[c]["Affect"] == "Specific") {
			var check = getApplicable(battleCondition[c]["Game"]);
			
			if (battleCondition[c]["Affected"] != undefined && battleCondition[c]["Game"] == "All") {
				check = false;
				let val = [];
				if (battleCondition[c]["Affected"].includes(",")) {
					val = battleCondition[c]["Affected"].split(",");
				}
				else {
					val = [battleCondition[c]["Affected"]]
				}

				for (let k = 0; k < val.length; k++) {
					let exist = document.querySelector(`#contain > div#`+battleCondition[c]["Type"].toLowerCase()+` > section[name='list'] ol label[data-title="`+val[k].toLowerCase()+`"]`);
					if (exist  != undefined) {
						check = true;
						break;
					}
				}
			}
		
			if (check) {
				let nameTemp = [];

				if (battleCondition[c]["Name"] != undefined) {
					nameTemp.push(battleCondition[c]["Name"])
				}
				if (battleCondition[c]["Group"] == undefined) {
					if (battleCondition[c]["Type"] == "Ability" || battleCondition[c]["Type"] == "Move") {
						nameTemp.push("("+battleCondition[c]["Type"]+")")
					}
				}

				
				let appender = document.querySelector("#contain > div#tool div#dmg div[name='menu'] *[name='specific']")
		


				if (appender != undefined) {
					let condition = document.createElement("li");
					let conditionInput = document.createElement("input");
					let conditionLabel = document.createElement("label");
					let conditionLabelText = document.createElement("small");	

					condition.setAttribute("name",battleCondition[c]["Name"]);

					conditionLabelText.innerText = battleCondition[c]["Name"];
					conditionInput.setAttribute("type","checkbox");
					conditionInput.setAttribute("name","condition-checkbox");
					conditionInput.setAttribute("id",battleCondition[c]["Name"]+"-"+c+"-specific-checkbox");
					conditionLabel.setAttribute("for",battleCondition[c]["Name"]+"-"+c+"-specific-checkbox");


					appender.appendChild(condition)
					condition.appendChild(conditionInput)
					condition.appendChild(conditionLabel)
					conditionLabel.appendChild(conditionLabelText)

					if (battleCondition[c]["Title"] != undefined) {
						condition.setAttribute("title",battleCondition[c]["Title"])
					}
					else if (battleCondition[c]["Type"] == "Move") {
						let val = returnArrValue(finaldata["Moves"]["Description"],DATA_Move_Reference["Name"],DATA_Move_Description["Description"],battleCondition[c]["Name"])
						if (val != undefined) {
							condition.setAttribute("title",val);
						}
					}
					else if (battleCondition[c]["Type"] == "Ability") {
						let val = returnAppArrData(finaldata["Abilities"]["Description"],"Ability",battleCondition[c]["Name"])[0]["Description"];
						if (val != undefined) {
							condition.setAttribute("title",val);
						}
					}


			
					
					//conditionInput.addEventListener("change",DMGCalcStart);	
				}
				
			}
		}
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
        for(let q = 0; q < teamds.length; q++) {
            let team = teamds[q]["Team"];
            let data = teamds[q]["Data"];
            let els = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[data-string]");
            for(let r = 0; r < els.length; r++) {
                let eldata = els[r].getAttribute("data-string");
                let elobj = dataStringToObj(eldata);
                if (elobj["pok"] == undefined) {
                    DMGSetDataString(els[r],data);
                    break;
                }
            }
        }

        for(let q = 0; q < boxds.length; q++) {
            let team = boxds[q]["Team"];
            let data = boxds[q]["Data"];
            let el = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"'][data-string]")
			el.setAttribute("data-string",data);
			DMGPartyRow(el);
        }
    }
	

    DMGSetPossible();
	DMGSetInfo();
	DMGCalcStart();

}
function DMGExportChange() {
    let base = findUpTag(this,"UL");
    let val = findUpTag(this,"SPAN").querySelector(":scope small").innerText;

    let team = base.parentElement.getAttribute("name");
    let id = base.getAttribute("name");


    let divBase = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name='"+team+"'] > div[name='"+id+"']");
    let pokBase = document.querySelector("#contain > div#tool div#dmg ol[name='pokémon'] span[name='"+team+"'] > ul[name='"+id+"']");
    let teamBase = document.querySelector("#contain > div#tool div#dmg ol[name='team'] span[name='"+team+"']");
    let statsBase = document.querySelector("#contain > div#tool div#dmg ol[name='stats'] span[name='"+team+"'] > ul[name='"+id+"']");
    let partyBase = document.querySelector("#contain > div#tool div#dmg span[name='party'] span[name='"+team+"']")

    let divBases = document.querySelectorAll("#contain > div#tool div#dmg div[name='battle'] span[name] > div[data-string]");
    let dataString = divBase.getAttribute("data-string");

    let pokPath = pokBase.querySelector(":scope li[name='pokémon'] select");
    let int = undefined;
    if (pokPath.value != undefined && pokPath.value != "") {
        int = getPokémonInt(pokPath.value);
    }


    if (val == "Import Pokémon") {
        DMGSetDataString(divBase);
    }

    if (int != undefined) {
        let evoFamily = getEvolutionFamily(int).map(function(v) {return v["Pokémon"];});
        let pokForm = getPokémonForm(int);
        
        if (val == "Copy Data String") {
            DMGSaveData(pokBase);
            dataString = divBase.getAttribute("data-string");
            navigator.clipboard.writeText(dataString);
            console.log(dataString);
            consoleText("Copied Data String!");
        }
        if (val == "Add Copy to Party") {
            let slot = document.querySelectorAll('#pokémon > aside[name="team"] section div[name="empty"]');
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
                return v != finaldata["Pokémon"]["Reference"][int]["Pokémon"];
            })
            evoFamily = evoFamily.filter(function(v) {
                return v != finaldata["Pokémon"]["Form"][int][DATA_Pokémon_Form["Form"]];
            })

            for (let q = 0; q < evoFamily.length; q++) {
                let x = q+1;
                evoFamily[q] = x+". "+evoFamily[q];
            }

            evoFamily = evoFamily.join("\n");

            let reply = prompt("Change Evolution\nEnter Number:\n"+evoFamily,"");
            let num = [];

            if (reply != null && reply != "") {
                evoFamily = evoFamily.split("\n");

                for (let q = 0; q < evoFamily.length; q++) {
                    num.push(evoFamily[q].split(". ",2)[0]);
                }

                for (let q = 0; q < evoFamily.length; q++) {
                    evoFamily[q] = evoFamily[q].split(". ",2)[1];
                }

                let result = evoFamily[parseInt(reply)-1]

                if (dataString.includes("|")) {
                    if (dataString.includes("pok")) {
                        let data = dataString.split("|");
                        for (let u = 0; u < data.length; u++) {
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
                        let data = dataString.split(":",1)[0]+":"+result;
                    }
                }

                if (num.includes(reply)) {
                    divBase.setAttribute("data-string",data);
                    DMGPokSpecific(pokBase);
                    DMGSetChange(pokBase);
                    DMGCalcPokStats(pokBase);
					DMGSetPossible();
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
        
            for (let q = 0; q < pokForm.length; q++) {
                let x = q+1;
                pokForm[q] = x+". "+pokForm[q];
            }
        
            pokForm = pokForm.join("\n");
        
            let reply = prompt("Change Form\nEnter Number:\n"+pokForm,"");
            let num = [];
        
            if (reply != null && reply != "") {
        
                pokForm = pokForm.split("\n");
        
                for (let q = 0; q < pokForm.length; q++) {
                    num.push(pokForm[q].split(". ",2)[0]);
                }
        
                for (let q = 0; q < pokForm.length; q++) {
                    pokForm[q] = pokForm[q].split(". ",2)[1];
                }
        
                let result = pokForm[parseInt(reply)-1]
        
                if (dataString.includes("|")) {
                    if (dataString.includes("pok")) {
                        let data = dataString.split("|");
                        for (let u = 0; u < data.length; u++) {
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
                        let data = dataString.split(":",1)[0]+":"+result;
                    }
                }
        
                if (num.includes(reply)) {
                    divBase.setAttribute("data-string",data);
                    DMGPokSpecific(pokBase);
                    DMGSetChange(pokBase);
                    DMGCalcPokStats(pokBase);
					DMGSetPossible();
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
	var check1 = base.parentElement.querySelector(":scope *.user");

	let helper1 = "user";
	let helper2 = "target";

	if (check1 == undefined) {
		helper1 = "target";
		helper2 = "user";
	}

	let user = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]."+helper1);
	let userTeam = user.parentElement.getAttribute("name");
	let userID = user.getAttribute("name");

	let target = document.querySelector("#contain > div#tool div#dmg div[name='battle'] span[name*='team'] > div[data-string]."+helper2);
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

	let GravityPath = fieldBase.querySelector(":scope *[name='Gravity'] input");

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
		
function DMGSetWeatherTerrain(){
						
	let weather = [{Name:"Harsh Sunlight",Color:"Orange"},{Name:"Rain",Color:"Slateblue"},{Name:"Sandstorm",Color:"Sandybrown"},{Name:"Snow",Color:"Powderblue"},{Name:"Fog",Color:"Lightblue"},{Name:"Hail",Color:"Powderblue"},{Name:"Extremely Harsh Sunlight",Color:"Darkorange"},{Name:"Heavy Rain",Color:"MidnightBlue"},{Name:"Strong Winds",Color:"Slategray"},{Name:"Shadowy Aura",Color:"Darkslategrey"}];
	let terrain = [{Name:"Electric Terrain",Color:"Yellow"},{Name:"Grassy Terrain",Color:"Greenyellow"},{Name:"Misty Terrain",Color:"Pink"},{Name:"Psychic Terrain",Color:"Fuchsia"}];
	let el1 = document.querySelector("#contain div#tool div#dmg div[name='battle']");
	let el2 = document.querySelector("#contain div#tool div#dmg div[name='battle'] span[name*='team'] div[data-string]")
	let weatherDefault = "Lightskyblue";
	let terrainDefault = "Silver";

	let els1 = document.querySelectorAll("#contain div#tool div#dmg div[name='content'] > div[name='field'] *[name='Weather-Group'] input");
	let els2 = document.querySelectorAll("#contain div#tool div#dmg div[name='content'] > div[name='field'] *[name='Terrain-Group'] input");

	var check1 = true;
	for (let i = 0; i < els1.length; i++) {
		let tar = els1[i];
		let tarName = tar.getAttribute("id");
		tarName = tarName.split("-")[0];

		if (tar.checked) {
			for (let q = 0; q < weather.length; q++) {
				if (weather[q]["Name"] == tarName) {
					if (DMGFindScenario(el2,"Cloud Nine","Ability","All","") == 0 && DMGFindScenario(el2,"Air Lock","Ability","All","") == 0) {
						el1.style.setProperty("--weather",weather[q]["Color"]);
						el1.setAttribute("data-weather",weather[q]["Name"]);
						check1 = false;
						break;
					}
				}
			}
		}
		
	}
	if (check1) {
		el1.style.setProperty("--weather",weatherDefault);
		el1.setAttribute("data-weather","");
	}
	var check2 = true;
	for (let i = 0; i < els2.length; i++) {
		let tar = els2[i];
		let tarName = tar.getAttribute("id");
		tarName = tarName.split("-")[0];

		if (tar.checked) {
			for (let q = 0; q < terrain.length; q++) {
				if (terrain[q]["Name"] == tarName) {
					el1.style.setProperty("--terrain",terrain[q]["Color"]);
					el1.setAttribute("data-terrain",terrain[q]["Name"]);
					check2 = false;
					break;
				}
			}
		}
		
	}
	if (check2){
		el1.style.setProperty("--terrain",terrainDefault);
		el1.setAttribute("data-terrain","");
	}
};