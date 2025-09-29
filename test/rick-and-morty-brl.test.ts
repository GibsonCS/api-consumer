import { readFile } from 'node:fs/promises';
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import axios from 'axios';
import GetRickAndMortyBRL from '../src/business/integrations/get-rick-and-morty-brl.ts';
import Character, { type CharacterType } from '../src/entities/Character.ts';

describe('#RickAndMortyBRL', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const rickAndMortyBRL = new GetRickAndMortyBRL();

	test('should return a empty array', async () => {
		const mock = JSON.parse(
			await readFile('./test/mocks/characters-empty.json', 'utf-8'),
		);

		const expected: [] = mock.results;

		jest.spyOn(axios, 'get').mockResolvedValue({ data: mock });

		const result = await rickAndMortyBRL.execute();

		expect(expected).toStrictEqual(result);
	});

	test('should return a characters list', async () => {
		const mock = JSON.parse(
			await readFile('./test/mocks/characters.json', 'utf-8'),
		);

		const expected = mock.results.map(
			(character: CharacterType) => new Character(character),
		);

		jest.spyOn(axios, 'get').mockResolvedValue({ data: mock });

		const result = await rickAndMortyBRL.execute();

		expect(expected).toStrictEqual(result);
	});
});
