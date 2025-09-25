import { jest, expect, test, beforeEach, describe } from "@jest/globals";
import { readFile } from "node:fs/promises";
import RickAndMortyBRL from "../src/business/integrations/rick-and-morty-brl";
import axios from "axios";
import Character from "../src/entities/Character";
import { type CharacterType } from "../src/entities/Character";

describe("#RickAndMortyBRL", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return a empty array", async () => {
    const mock = JSON.parse(
      await readFile("./test/mocks/characters-empty.json", "utf-8")
    );

    const expected: [] = mock.results;

    jest.spyOn(axios, "get").mockResolvedValue({ data: mock });

    const result = await RickAndMortyBRL.execute();

    expect(expected).toStrictEqual(result);
  });

  test("should return a characters list", async () => {
    const mock = JSON.parse(
      await readFile("./test/mocks/characters.json", "utf-8")
    );

    const expected = mock.results.map(
      (character: CharacterType) => new Character(character)
    );

    jest.spyOn(axios, "get").mockResolvedValue({ data: mock });

    const result = await RickAndMortyBRL.execute();

    expect(expected).toStrictEqual(result);
  });
});
