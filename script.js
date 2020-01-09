var box = document.body;
var vragen = [["Wat is de hoofdstad van Frankrijk?", "Parijs"], ["Hoeveel poten heeft een spin?", 8], ["Wat is het grootste meer van Nederland?", "IJsselmeer"], ["Noem een duits automerk", ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"]], ["Noem een waddeneiland", ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"]]];
var score = 0;
var cijfer = 0;

function start() {
	for (i in vragen) {
		var vraag = vragen[i];
		var elements = {};
		elements["div"] = document.createElement('div');
		elements["p"] = document.createElement('p');
		elements["p"].innerText = vraag[0];
		elements["p"].style = "margin-bottom: 6px;";
		elements["div"].appendChild(elements["p"]);
		elements["input"] = document.createElement('input');
		if (!isNaN(vraag[1])) {
			elements["input"].type = "number";
		} else {
			elements["input"].type = "text";
		}
		elements["div"].appendChild(elements["input"])
		elements["div"].style = "margin-bottom: 25px;";
		box.appendChild(elements["div"]);
	}
	
	var btn = document.createElement('button');
	btn.style= "margin-top: 15px;";
	btn.innerText = "Check antwoorden!";
	box.appendChild(btn);
	
	var punten = document.createElement('h3');
	punten.style = "margin-top: 20px;";
	box.appendChild(punten);
	
	btn.addEventListener("click", function() {
		score = 0;
		maxscore = 0;
		var boxes = document.querySelectorAll('div');
		for (i in boxes) {
			if (!isNaN(i)) {
				maxscore++;
				var antwoord = boxes[i].querySelector('input').value.toString();
				if (!Array.isArray(vragen[i][1])) {
					if (vragen[i][1].toString() == antwoord) {
						boxes[i].querySelector('input').style.background = "#1efa51";
						score++;
					} else {
						boxes[i].querySelector('input').style.background = "#fc3730";
					}
				} else {
					if (vragen[i][1].includes(antwoord)) {
						boxes[i].querySelector('input').style.background = "#1efa51";
						score++;
					} else {
						boxes[i].querySelector('input').style.background = "#fc3730";
					}
				}
			}
		}
		cijfer = 1 + (Math.round((score/maxscore*9*10))/10);
		punten.innerText = "Jouw cijfer is is een "+cijfer.toString();
	});
}

start();