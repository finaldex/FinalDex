var finaldataPokémon = [];
var finaldataPokémonPath = [];
var finaldataPokémonForm = [];
var finaldataPokémonFormItem = [];
var finaldataPokémonAbility = [];
var finaldataPokémonFriendship = [];
var finaldataPokémonBaseStats = [];
var finaldataPokémonCatchRate = [];
var finaldataPokémonCategory = [];
var finaldataPokémonEggGroup = [];
var finaldataPokémonEvolutionMethod = [];
var finaldataPokémonEvolutionSpecie = [];
var finaldataPokémonEvolutionStage = [];
var finaldataPokémonEVYield = [];
var finaldataPokémonExperienceYield = [];
var finaldataPokémonGenderRatio = [];
var finaldataPokémonHatchRate = [];
var finaldataPokémonHeldItem = [];
var finaldataPokémonLevelingRate = [];
var finaldataPokémonPokédexEntry = [];
var finaldataPokémonPokédexID = [];
var finaldataPokémonType = [];
var finaldataGame = [];
var finaldataTypeChart = [];
var finaldataExclusivePokémon = [];
var finaldataExclusiveItem = [];
var finaldataExclusiveFeature = [];
var dexChecker = [1];
var finaldataLocation = [];
var finaldataLocationConnection = [];
var finaldataLocationDescription = [];
var finaldataLocationSlogan = [];
var finaldataLocationNavigation = [];
var finaldataLearnsetMachine = [];
var finaldataLearnsetEvolution = [];
var finaldataLearnsetLevel = [];
var finaldataLearnsetBreed = [];
var finaldataLearnsetTutor = [];
var finaldataItems = [];
var finaldataItemsEffect = [];
var finaldataItemsPrice = [];
var finaldataItemsPriceExtra = [];
var finaldataItemsDescription = [];
var finaldataLocationPokémon = [];
var finaldataLocationPokémonShops = [];
var finaldataLocationItems = [];
var finaldataLocationItemsShops = [];
var finaldataLocationItemsPickup = [];
var finaldataLocationTrainers = [];
var finaldataAbility = [];
var finaldataAbilityDescription = [];
var finaldataAbilityEffect = [];
var finaldataAbilityAffect = [];
var finaldataMove = [];
var finaldataMoveDescription = [];
var finaldataLocationTutor = [];
var finaldataMoveMachine = [];
var finaldataMoveEffect = [];
var finaldataMoveRange = [];
var finaldataMoveOtherMoves = [];
var finaldataMoveAccuracy = [];
var finaldataMovePower = [];
var finaldataMovePP = [];
var finaldataMoveCategory = [];
var finaldataMoveID = [];
var finaldataMoveType = [];
var finaldataMovePriority = [];
var finaldataPokémonOffspring = [];
var finaldataPokémonFormChange = [];
var finaldataLocationPointOfInterest = [];
var drag;
var savedtar;
var saveddrag;
var boxDrag;
var loads = ["Game","Pokémon","Pokémon Learnset","Locations","Location Pokémon","Location Items","Location Trainers","Moves","Abilities","Items","Trainers"];
var baseurl = "https://raw.githubusercontent.com/finaldex/FinalDex/main/data/";
var baseextension = "json";
var baseextra = " Metadata"


var initStart = 1;
var initLength = loads.length;
var initTimeStart;

for(var i = 0; i < loads.length; i++) {
	var url = baseurl+loads[i]+baseextra+"."+baseextension;
	requestLoad(i,url);
}

function requestLoad(i,url) {
	
	var i;
	var url;

	var gameRequest = new XMLHttpRequest();
	gameRequest.open('GET', baseurl+loads[0]+baseextra+"."+baseextension);
	gameRequest.responseType = 'json';
	gameRequest.send();
	gameRequest.onload = function() {
		var Metadata = gameRequest.response;
		if (loads[i] == "Game") {
			for(var q = 0; q < Metadata["Reference"].length; q++) {
				finaldataGame.push(Metadata["Reference"][q]);
			}

			var urlid = location.href.replaceAll("%20"," ").replaceAll(/(?<=^)(.*)(?=Game.html)/g,"").replaceAll("Game.html","").replaceAll("#","");
			GameID = getGameName("",urlid);
			define();
			config();

			for(var q = 0; q < Metadata["Type Chart_" + JSONPath_Typechart].length; q++) {
				finaldataTypeChart.push(Metadata["Type Chart_" + JSONPath_Typechart][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Pokémon"].length; q++) {
				finaldataExclusivePokémon.push(Metadata["Exclusive Pokémon"][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Item"].length; q++) {
				finaldataExclusiveItem.push(Metadata["Exclusive Item"][q]);
			}
			for(var q = 0; q < Metadata["Exclusive Feature"].length; q++) {
				finaldataExclusiveFeature.push(Metadata["Exclusive Feature"][q]);
			}
		}
		
		if (i != 0) {
			var request = new XMLHttpRequest();
			request.open('GET', url);
			request.responseType = 'json';
			request.send();
			request.onload = function() {
				var Metadata = request.response;
					if(loads[i] == "Locations") {
						for(var q = 0; q < Metadata["Reference"].length; q++) {
							if (getApplicable(Metadata["Reference"][q]["Game"])) {
								finaldataLocation.push(Metadata["Reference"][q]);
							}
						}
						for(var q = 0; q < Metadata["Connecting"].length; q++) {
							finaldataLocationConnection.push(Metadata["Connecting"][q]);
						}
						for(var q = 0; q < Metadata["Description"].length; q++) {
							finaldataLocationDescription.push(Metadata["Description"][q]);
						}
						for(var q = 0; q < Metadata["Slogan"].length; q++) {
							finaldataLocationSlogan.push(Metadata["Slogan"][q]);
						}
						for(var q = 0; q < Metadata["Navigation"].length; q++) {
							finaldataLocationNavigation.push(Metadata["Navigation"][q]);
						}
						for(var q = 0; q < Metadata["Move Tutor"].length; q++) {
							finaldataLocationTutor.push(Metadata["Move Tutor"][q]);
						}
						for(var q = 0; q < Metadata["Point of Interest"].length; q++) {
							finaldataLocationPointOfInterest.push(Metadata["Point of Interest"][q]);
						}
					}
					if (loads[i] == "Location Trainers") {
						for(var q = 0; q < Metadata["Trainers"].length; q++) {
							finaldataLocationTrainers.push(Metadata["Trainers"][q]);
						}
					}
					if (loads[i] == "Location Pokémon") {
						for(var q = 0; q < Metadata["Pokémon"].length; q++) {
							finaldataLocationPokémon.push(Metadata["Pokémon"][q]);
						}
						for(var q = 0; q < Metadata["Shop"].length; q++) {
							finaldataLocationPokémonShops.push(Metadata["Shop"][q]);
						}
					}
					if (loads[i] == "Location Items") {
						for(var q = 0; q < Metadata["Shop"].length; q++) {
							finaldataLocationItemsShops.push(Metadata["Shop"][q]);
						}
						for(var q = 0; q < Metadata["Items"].length; q++) {
							finaldataLocationItems.push(Metadata["Items"][q]);
						}
						for(var q = 0; q < Metadata["Pickup"].length; q++) {
							finaldataLocationItemsPickup.push(Metadata["Pickup"][q]);
						}
					}
					if (loads[i] == "Pokémon Learnset") {
						for(var q = 0; q < Metadata["Evolution"].length; q++) {
							finaldataLearnsetEvolution.push(Metadata["Evolution"][q]);
						}
						for(var q = 0; q < Metadata["Level Up"].length; q++) {
							finaldataLearnsetLevel.push(Metadata["Level Up"][q]);
						}
						for(var q = 0; q < Metadata["Machine"].length; q++) {
							finaldataLearnsetMachine.push(Metadata["Machine"][q]);
						}
						for(var q = 0; q < Metadata["Breeding"].length; q++) {
							finaldataLearnsetBreed.push(Metadata["Breeding"][q]);
						}
						for(var q = 0; q < Metadata["Tutor"].length; q++) {
							finaldataLearnsetTutor.push(Metadata["Tutor"][q]);
						}
					}
					if (loads[i] == "Items") {
						for(var q = 0; q < Metadata["Reference"].length; q++) {
							finaldataItems.push(Metadata["Reference"][q]);
						}
						for(var q = 0; q < Metadata["Effect"].length; q++) {
							finaldataItemsEffect.push(Metadata["Effect"][q]);
						}
						for(var q = 0; q < Metadata["Price"].length; q++) {
							finaldataItemsPrice.push(Metadata["Price"][q]);
						}
						for(var q = 0; q < Metadata["Price Extra"].length; q++) {
							finaldataItemsPriceExtra.push(Metadata["Price Extra"][q]);
						}
						for(var q = 0; q < Metadata["Description"].length; q++) {
							finaldataItemsDescription.push(Metadata["Description"][q]);
						}
					}
					if (loads[i] == "Abilities" && Ability.length > 0) {
		
						for(var q = 0; q < Metadata["Reference"].length; q++) {
							finaldataAbility.push(Metadata["Reference"][q]);
						}
						for(var q = 0; q < Metadata["Description"].length; q++) {
							finaldataAbilityDescription.push(Metadata["Description"][q]);
						}
						for(var q = 0; q < Metadata["Effect"].length; q++) {
							finaldataAbilityEffect.push(Metadata["Effect"][q]);
						}
						for(var q = 0; q < Metadata["Affect"].length; q++) {
							finaldataAbilityAffect.push(Metadata["Affect"][q]);
						}
					}
					if (loads[i] == "Moves") {
						for(var q = 0; q < Metadata["Description"].length; q++) {
							finaldataMoveDescription.push(Metadata["Description"][q]);
						}
						for(var q = 0; q < Metadata["Reference"].length; q++) {
							finaldataMove.push(Metadata["Reference"][q]);
						}
						for(var q = 0; q < Metadata["Machine"].length; q++) {
							finaldataMoveMachine.push(Metadata["Machine"][q]);
						}
						for(var q = 0; q < Metadata["Effect"].length; q++) {
							finaldataMoveEffect.push(Metadata["Effect"][q]);
						}
						for(var q = 0; q < Metadata["Range"].length; q++) {
							finaldataMoveRange.push(Metadata["Range"][q]);
						}
						for(var q = 0; q < Metadata["Other Moves"].length; q++) {
							finaldataMoveOtherMoves.push(Metadata["Other Moves"][q]);
						}
						for(var q = 0; q < Metadata["Accuracy"].length; q++) {
							finaldataMoveAccuracy.push(Metadata["Accuracy"][q]);
						}
						for(var q = 0; q < Metadata["Power"].length; q++) {
							finaldataMovePower.push(Metadata["Power"][q]);
						}
						for(var q = 0; q < Metadata["PP"].length; q++) {
							finaldataMovePP.push(Metadata["PP"][q]);
						}
						for(var q = 0; q < Metadata["Category"].length; q++) {
							finaldataMoveCategory.push(Metadata["Category"][q]);
						}
						for(var q = 0; q < Metadata["ID"].length; q++) {
							finaldataMoveID.push(Metadata["ID"][q]);
						}
						for(var q = 0; q < Metadata["Type"].length; q++) {
							finaldataMoveType.push(Metadata["Type"][q]);
						}
						for(var q = 0; q < Metadata["Priority"].length; q++) {
							finaldataMovePriority.push(Metadata["Priority"][q]);
						}
					}
					
					if (loads[i] == "Pokémon") {
						for(var q = 0; q < Metadata["Reference"].length; q++) {
							finaldataPokémon.push(Metadata["Reference"][q]);
							finaldataPokémonPath.push(Metadata["Path"][q]);
							finaldataPokémonForm.push(Metadata["Form"][q]);
							finaldataPokémonFormItem.push(Metadata["Form Item"][q]);
							finaldataPokémonAbility.push(Metadata["Ability"][q]);
							finaldataPokémonFriendship.push(Metadata["Base Friendship"][q]);
							finaldataPokémonBaseStats.push(Metadata["Base Stats"][q]);
							finaldataPokémonCatchRate.push(Metadata["Catch Rate"][q]);
							finaldataPokémonCategory.push(Metadata["Category"][q]);
							finaldataPokémonEggGroup.push(Metadata["Egg Group"][q]);
							finaldataPokémonEvolutionMethod.push(Metadata["Evolution Method"][q]);
							finaldataPokémonEvolutionSpecie.push(Metadata["Evolution Specie"][q]);
							finaldataPokémonEvolutionStage.push(Metadata["Evolution Stage"][q]);
							finaldataPokémonEVYield.push(Metadata["Effort Value Yield"][q]);
							finaldataPokémonExperienceYield.push(Metadata["Experience Yield"][q]);
							finaldataPokémonGenderRatio.push(Metadata["Gender Ratio"][q]);
							finaldataPokémonHatchRate.push(Metadata["Hatch Rate"][q]);
							finaldataPokémonHeldItem.push(Metadata["Held Item"][q]);
							finaldataPokémonLevelingRate.push(Metadata["Leveling Rate"][q]);
							finaldataPokémonPokédexEntry.push(Metadata["Pokédex Entry"][q]);
							finaldataPokémonPokédexID.push(Metadata["Pokédex ID"][q]);
							finaldataPokémonType.push(Metadata["Type"][q]);
							finaldataPokémonOffspring.push(Metadata["Offspring"][q]);
							finaldataPokémonFormChange.push(Metadata["Form Change"][q]);
						}
					}
		
					initialize();
			}
		}

	}




}

function initialize() {

	var initEnd = initStart++;
	var loaddescription = document.getElementById("load-description");
	if(initEnd == 1) {
		initTimeStart = new Date();
	}

	loaddescription.innerHTML = "Building Databases<span>.</span><span>.</span><span>.</span>";
	if(new Date() - initTimeStart >= 5000) {
		loaddescription.innerHTML = "Load taking longer than expected<span>.</span><span>.</span><span>.</span>";
	}
	if(initEnd >= initLength - 1) {
		loaddescription.innerHTML = "Complete!";

		createNav();
		createPokémon();
		createTool();
		createMap();
		createAbility();
		createItem();
		createMove();

		countdown();
		stopwatch();
		typeSwitch("NORMAL");
		RNG();

		window.addEventListener('resize', resize);

		memory("Restore","",[document.querySelector('#resizer')]);
		memory("Restore","",[document.querySelector('#pokémon > aside[name="settings"] > span[name="theme"] input')]);
		
		memory("Restore","game",document.querySelectorAll('#pokémon > aside[name="settings"] > span[name="variant"] input[type="checkbox"]'));

		variantSelector();

		boxMemory("Restore")
		partyMemory("Restore");
		memoryDexSwitch();

		load();
	}
}

function resize() {
	var width = window.innerWidth;
	var height = window.innerHeight;

	var labelS = document.querySelectorAll("#contain > div > section[name='list'] ol label[type='small']");
	var labelM = document.querySelectorAll("#contain > div > section[name='list'] ol label[type='medium']");
	
	if (width < 1000) {
		for (var i = 0; i < labelM.length; i++) {
			labelM[i].setAttribute("type","small");
		}
	}
	else  {
		for (var i = 0; i < labelS.length; i++) {
			labelS[i].setAttribute("type","medium");
		}
	}

}


function mapifyMap(base) {

    var base;
    var img = base.querySelector(":scope img[usemap]");
    var map = base.querySelector(":scope map");

    var mapified = base.querySelector(":scope > *.mapify-holder");
    var areas = map.querySelectorAll(":scope > area");

    if (img != undefined && map != undefined && mapified == undefined) {
		var originalSize = [img.naturalWidth,img.naturalHeight];
		var newSize = [base.getBoundingClientRect().width,base.getBoundingClientRect().height];

		var newwidth = Math.floor(parseFloat(proportionalScale(originalSize,newSize)[0].toFixed(2)) * 10) / 10;
		var newheight = Math.ceil(parseFloat(proportionalScale(originalSize,newSize)[1].toFixed(2)) * 10) / 10;

		var relative = (originalSize[0]+originalSize[1]) / (newwidth+newheight);

		if (relative > 1) {
			img.setAttribute("width",newwidth+"px");
			img.setAttribute("height",newheight+"px");	
			if (!areas.length > 0) {
				createAreas(map,relative)
			}
		}
		else {
			img.setAttribute("width",originalSize[0]+"px");
			img.setAttribute("height",originalSize[1]+"px");
			if (!areas.length > 0) {
				createAreas(map,1)
			}
		}

        $(img).mapify({
            popOver: {
            content: function(zone){ 
                var zones = [];
                if (zone.attr("data-title").includes("<br>")) {
                	zones = zone.attr("data-title").split("<br>");
                }
                else {
                	zones = [zone.attr("data-title")];
                }
				var z2 = [];
				for (var i = 0; i < zones.length; i++) {
					var arr2 = getAreasFromLocation(zones[i]);
					for (var q = 0; q < arr2.length; q++) {
						z2.push(arr2[q]);
					}
				}

				for (var i = 0; i < z2.length; i++) {
					if (getMapPointsTest(z2[i],base).length == 0) {
						zones.push(z2[i]);
					}
				}
                for (var i = 0; i < zones.length; i++) {
					var z = zones[i];
					if (z.includes("_")) {
						z = z.split("_")[0];
					}
                	zones[i] = `<b name="map" onclick="dataRedirect()"><p style="pointer-events:none">`+z+`</p></b>`;
                }
                return zones.join("<br>");
            },
			margin: "15px"
        }
        });



		
		for (var i = 0; i < finaldataLocation.length; i++) {
			if (getApplicable(finaldataLocation[i]["Game"])) {
				var points = getMapPoints(finaldataLocation[i]["Location"],base);
				if (points.length == 0) {
					console.log(finaldataLocation[i]["Location"]+" returned an error.");
				}
			}
		}
    }
    


}

function mapBlink(base,area) {
	var area;
	var base;
  
	var holder = base.querySelector(":scope .mapify-holder");
  
	var points = [];
  
	for (var i = 0; i < area.length; i++) {
		var pts = getMapPoints(area[i],base);
		for (var q = 0; q < pts.length; q++) {
			points.push(pts[q])
		}
	}


	var polys = base.querySelectorAll(':scope polygon[name="active"]');
	for (var i = 0; i < polys.length; i++) {
		polys[i].remove();
	}
  
	var svgbase = base.querySelector(':scope .mapify-svg[name="mark"]');
  
	if (svgbase == null) {
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.classList.add("mapify-svg");
		svg.setAttribute("name","mark");
		holder.appendChild(svg)
	}
  
	svgbase = base.querySelector(':scope .mapify-svg[name="mark"]');
  
	  
  
	for (var i = 0; i < points.length; i++) {
		if (points[i] != "") {
			var polygon =  document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			polygon.setAttribute("fill","none");
			polygon.classList.add("mapify-polygon");
			polygon.setAttribute("points",points[i]);
			polygon.setAttribute("name","active");
			if (svgbase == null) {
				svg.appendChild(polygon)
			}
			else {
				svgbase.appendChild(polygon)
			}
		}
	}
}
  
  

function createAreas(base,relative) {
    var base;

	var img = base.parentElement.querySelector(":scope img[usemap]")


    for (var i = 0; i < MapArea.length; i++) {
		var coord = MapArea[i]["coords"];

		var result = [];

		if (coord.includes(",")) {
			var coords = coord.split(",");
			for (var q = 0; q < coords.length; q++) {
				var c = parseInt(coords[q].replaceAll(" ",""));
				if (q % 2 == 0) {
					result.push(c/relative);
				}
				else {
					result.push(c/relative);
				}
			}
		}
		else {
			var coords = [coord];
			for (var q = 0; q < coords.length; q++) {
				var c = parseInt(coords[q].replaceAll(" ",""));
				if (q % 2 == 0) {
					result.push(c/relative);
				}
				else {
					result.push(c/relative);
				}
			}
		}

		var coords = result.join(",");
	
        var area = document.createElement("area");
        area.setAttribute("shape",MapArea[i]["type"])
        area.setAttribute("title",MapArea[i]["id"])
        area.setAttribute("coords",coords.replaceAll(" ",","))
        base.appendChild(area);
    }

}

function proportionalScale(originalSize, newSize) {
	var ratio = originalSize[0] / originalSize[1];

	var maximizedToWidth = [newSize[0], newSize[0] / ratio];
	var maximizedToHeight = [newSize[1] * ratio, newSize[1]];

	if (maximizedToWidth[1] > newSize[1]) { return maximizedToHeight; }
	else { return maximizedToWidth; }
}



function zoom(base,condition) {

    var base;
    var condition;

    var parent = base.parentElement.parentElement.parentElement;

    var width = $(base.parentElement).width();
    var height = $(base.parentElement).height();
    var relativeX = event.pageX - $(base.parentElement).offset().left;
    var relativeY = event.pageY - $(base.parentElement).offset().top;

    var img = parent.querySelector(":scope img[usemap]")

	var originalSize = [img.naturalWidth,img.naturalHeight];
	var newSize = [img.offsetWidth,img.offsetHeight];

    var relation1 = (originalSize[0]+originalSize[1]) / (newSize[0]+newSize[1]);
	var relation2 = (width+height) / (newSize[0]+newSize[1]);




	if (condition == "pause") {
		if (!event.target.classList.contains("mapify-popOver") && !event.target.parentElement.parentElement.classList.contains("mapify-popOver")) {
			if (base.getAttribute("data-active") == "true") {
				if (base.getAttribute("name") != "pause") {
					base.setAttribute("name","pause");
					$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +') !important'});
					$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'% !important'});
				}
				else {
					base.removeAttribute("name");
					$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +') !important'});
					$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'% !important'});
				}
			}
		}
	}

	if (base.getAttribute("name") != "pause") {

		if (relation1 == 1) {
			base.style.transitionDuration = Math.min(Math.max(0.2, (relation2*0.2)), 0.5) + "s";
			base.setAttribute("data-scale",Math.min(Math.max(1, relation2), 10));	
		}
		else {
			base.style.transitionDuration = Math.min(Math.max(0.2, (relation1*0.2)), 0.5) + "s";
			base.setAttribute("data-scale",Math.min(Math.max(1, relation1), 10));
		}

		if (condition == "out" && event.type != "mouseleave" && event.type != "mouseleave") {
			base.setAttribute("data-active",false);
		}
		
		if (condition == "in" && event.type != "mouseenter" && event.type != "mouseleave") {
			base.setAttribute("data-active",true);
		}

		if (base.getAttribute("data-active") == undefined) {
			base.setAttribute("data-active",false);
		}

		var active = (base.getAttribute("data-active") === 'true');

	




		if (condition == "in" && active) {
			$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +')'});
		}
		else if (condition == "out" && !active) {
			$(base).css({'transform': 'scale(1)'});
		}
		else if (condition == "pan") {
			$(base).css({'transform-origin': (relativeX / width) * 100 + '% ' + (relativeY / height) * 100 +'%'});
		}




		if (condition == "in" && event.type == "mouseenter" && active) {
			$(base).css({'transform': 'scale('+ $(base).attr('data-scale') +')'});
		}

		if (condition == "out" && event.type == "mouseleave") {
			$(base).css({'transform': 'scale(1)'});
		}

	}

}




function divideDifferenceArr(arr,include,exclude) {
	var arr;
	var include;
	var exclude;

	var temp = [];
	var result = [];

	var check1;
	var check2;


	var int = 0;


	var store = JSON.parse(JSON.stringify(arr));



	for(var i = 0; i < arr.length; i++) {
		check2 = true;
		for(var q = 0; q < exclude.length; q++) {
			for(var u = 0; u < exclude[q].length; u++) {
				if (u > 0) {
		
					if (arr[i][exclude[q][0]] == exclude[q][u]) {
						check2 = false;
					}
				}
			}

			arr[i][exclude[q][0]] = check2;

			if (include[include.length - 1] != exclude[q][0]) {
				include.push(exclude[q][0]);
			}
	
		}



	}


	for(var i = 0; i < arr.length; i++) {
		check1 = true;

		temp.push([])
		for(var q = 0; q < include.length; q++) {

			if (i == 0) {
				break;
			}

			if(arr[i - 1][include[q]] != arr[i][include[q]]) {
				check1 = false;
			}

		}

		if (!check1) {
			int = int+1;
		}

		temp[int].push(arr[i]);
	}
	for(var i = 0; i < temp.length; i++) {
		if (temp[i].length != 0) {
			result.push(temp[i])
		}
	}
	var ints = [];
	for(var u = 0; u < exclude.length; u++) {
		for(var i = 0; i < result.length; i++) {
			for(var q = 0; q < result[i].length; q++) {
				for(var y = 0; y < store.length; y++) {
					if (!ints.includes(y)) {
						ints.push(y)
						result[i][q][exclude[u][0]] = store[y][exclude[u][0]];
						break;
					}
				}
			}
		}
	}


	for(var u = 0; u < exclude.length; u++) {
		for(var i = 0; i < store.length; i++) {

		}
	}




	return result;
}



function checkReturnDifferences(arr,include,exclude) {
	var arr;
	var include;

	var one = include[0];
	var two = include[1];
	var three = include[2];
	var exclude = exclude[0];

	var tempArr1 = [];
	for(var q = 0; q < arr.length; q++) {
		tempArr1.push(arr[q][one]+","+arr[q][two]+","+arr[q][three]);
	}
	tempArr1 = [...new Set(tempArr1)];

	var tempArr2 = [];
	for(var q = 0; q < tempArr1.length; q++) {
		tempArr2.push([])
	}

	for(var i = 0; i < arr.length; i++) {
		for(var q = 0; q < tempArr2.length; q++) {
			if(!tempArr2[q].includes(arr[i][exclude]+","+arr[i][one]+","+arr[i][two]+","+arr[i][three]) && tempArr1[q] == arr[i][one]+","+arr[i][two]+","+arr[q][three]) {
				tempArr2[q].push(arr[i][exclude]+","+arr[i][one]+","+arr[i][two]+","+arr[q][three]);
			}
		}
	}

	var result = [];
	for(var i = 0; i < tempArr2.length; i++) {
		result.push([]);
	}

	for(var i = 0; i < tempArr2.length; i++) {
		for(var q = 0; q < tempArr2[i].length; q++) {
			var splitter = tempArr2[i][q].split(",");
			var obj = new Object();
			obj[exclude] = splitter[0];
			obj[one] = splitter[1];
			obj[two] = splitter[2];
			obj[three] = splitter[3];
			result[i].push(obj);
		}
	}

	return result;
	
}

function load() {
	const load = document.querySelector("#load");
	document.body.style.overflowY = "unset";
	document.documentElement.scrollTop = 0;
	load.className += "hide";
}

function getGameName(id,name) {
	var id;
	var name = name;
	var ran;
	var arr = finaldataGame;

	if (name.toLowerCase() == "random") {
		ran = Math.floor(Math.random() * arr.length-2) + 1;
		id = ran;
	}	
	else if (id != "") {
		for(var q = 0; q < arr.length; q++) {
			var x = q + 1;
			if(x == id) {
				return arr[q]["Full Name"];
			}
		}
	}
	else if (name != "") {
		for(var q = 0; q < arr.length; q++) {
			var x = q + 1;
			if(arr[q]["Full Name"] == name) {
				return x;
			}
			else if(arr[q]["Name"] == name) {
				return x;
			}
		}
	}
	if (ran == undefined) {
		id = 1;
	}

	return getGameName("",getGameName(id,""));
}
