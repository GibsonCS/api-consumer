import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import Character, { type CharacterType } from '../../entities/Character.ts';

const URL =
	'https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.xml?_gl=1*1e68ccz*_ga*MjE0NDQzNjQwMi4xNzQzNjM2MzY4*_ga_37GXT4VGQK*czE3NTg4NjA0MDkkbzM3JGcxJHQxNzU4ODYwNDI3JGo0MiRsMCRoMA..';
export default class GetRickAndMortyXML {
	async execute() {
		const { data } = await axios.get(URL);

		const {
			results: { element: results = [] },
		} = await parseStringPromise(data, {
			explicitArray: false,
			explicitRoot: false,
		});

		const defaultFormat = Array.isArray(results) ? results : [results];

		return defaultFormat.map(
			(character: CharacterType) => new Character(character),
		);
	}
}
