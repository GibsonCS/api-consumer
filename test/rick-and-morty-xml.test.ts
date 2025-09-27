import { readFile } from 'node:fs/promises';
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import GetRickAndMortyXML from '../src/business/integrations/get-rick-and-morty-xml.ts';
import Character, { type CharacterType } from '../src/entities/Character.ts';

describe('#GetRickAndMortyXML', () => {
	const getRickAndMortyXML = new GetRickAndMortyXML();

	beforeEach(() => {
		jest.clearAllMocks;
	});

	test('should return an empty array', async () => {
		const mock = await readFile('./test/mocks/characters-empty.xml', 'utf8');

		const expected: [] = [];

		jest.spyOn(axios, 'get').mockResolvedValue({ data: mock });

		const result = await getRickAndMortyXML.execute();

		expect(result).toStrictEqual(expected);
	});

	test('should return a character list', async () => {
		const mock = await readFile('./test/mocks/characters.xml', 'utf8');

		const {
			results: { element: results = [] },
		} = await parseStringPromise(mock, {
			explicitRoot: false,
			explicitArray: false,
		});

		const expected = [results].map(
			(character: CharacterType) => new Character(character),
		);

		jest.spyOn(axios, 'get').mockResolvedValue({ data: mock });

		const result = await getRickAndMortyXML.execute();

		expect(result).toStrictEqual(expected);
	});
});
