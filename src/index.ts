/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { setEnvironmentData } from "worker_threads";
import { Console } from "console";
import {People} from "./people";

dotenv.config();

/**
 * App Variables
 */

 if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

function calculaIMC (people: People){

	var imc = people.getPeso() / (Math.pow(people.getAltura(), 2));
	return imc;
}

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	
	let peopleUbuntu:{people: People}[] = [
		{"people": new People("Ubuntu1 Silva",32,96.50,1.79, false)},
		{"people": new People("Ubuntu2 Moraes",32,96.50,1.79, true)},
		{"people": new People("Ubuntu3 Silva",32,96.50,1.79, true)},
		{"people": new People("Ubuntu4 Moraes",32,96.50,1.79, true)},
		{"people": new People("Ubuntu5 Silva",32,96.50,1.79, true)},
		{"people": new People("Ubuntu6 Moraes",32,96.50,1.79, true)},
		{"people": new People("Ubuntu7 Silva",5,96.50,1.79, false)}
	]

	//R01
	var filtroSumarizarIdades = peopleUbuntu.filter(idades => (idades.people.getIdade()));
	var idades = 0;
	for(var idade of filtroSumarizarIdades){		
		idades = idades > 0 ? idade.people.getIdade() + idades : idade.people.getIdade();
 	}
	console.log("Sumarizando Idades: " + idades);

	//R02
	var filtroAgruparNomes = peopleUbuntu.filter(nomes => (nomes.people.getNome()));
	var nomes = "";
	for(var nome of filtroAgruparNomes){		
		nomes = nomes.length > 0 ? nome.people.getNome() + ", " + nomes : nome.people.getNome();
 	}
	console.log("Agrupamento de nomes: " + nomes);

	//R03
	var filtroCalculaIMC = peopleUbuntu.filter(imc => (imc.people.getPeso() > 0));
	var imcs = 0;
	var totalImc = 0;
	for(var imc of filtroCalculaIMC){
		imcs = imcs + calculaIMC(imc.people);
		totalImc = filtroCalculaIMC.length;
	}
	console.log("Média de IMC: " + imcs/totalImc);

	//R04
	var filtroEhDev = peopleUbuntu.filter(nomes => (nomes.people.getEhDev()));
	console.log("Sao DEV: " + filtroEhDev.length);

	//R05
	var filtroSobreNome = peopleUbuntu.filter(sobrenomeSilva => (sobrenomeSilva.people.getNome().indexOf("Silva") != -1));
	var sobrenomeSilva = "";
	for(var nome of filtroSobreNome){
		
		console.log(nome.people.getNome());
	}

	
});
