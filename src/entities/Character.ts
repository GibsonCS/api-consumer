export type CharacterType = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
};

export default class Character {
  private id;
  private name;
  private status;
  private species;
  private type;
  private gender;
  private origin;
  private location;

  constructor(character: CharacterType) {
    this.id = character.id;
    this.name = character.name;
    this.status = character.status;
    this.species = character.species;
    this.type = character.type;
    this.gender = character.gender;
    this.origin = character.origin.name;
    this.location = character.location.name;
  }
}
