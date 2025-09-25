import axios from "axios";
import Character, { type CharacterType } from "../../entities/Character";

const URL =
  "https://gist.githubusercontent.com/ErickWendel/927970b8fa7117182413be100417607d/raw/d78adae11f5bdbff086827bf45f1bc649c339766/rick-and-morty-characters.json?_gl=1*dck2n3*_ga*MjE0NDQzNjQwMi4xNzQzNjM2MzY4*_ga_37GXT4VGQK*czE3NTg1NzQzODUkbzM2JGcxJHQxNzU4NTc1NDU3JGo0MCRsMCRoMA..";

export default class RickAndMortyBRL {
  static async execute() {
    const {
      data: { results: results = [] },
    } = await axios.get(URL);

    return results.map((character: CharacterType) => new Character(character));
  }
}
