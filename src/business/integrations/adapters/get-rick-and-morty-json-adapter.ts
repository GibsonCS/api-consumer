import GetRickAndMortyBRL from '../rick-and-morty-brl';
export default class GetRickAndMortyJSONAdapter {
	static async execute() {
		const getRickAndMortyBRL = new GetRickAndMortyBRL();

		return await getRickAndMortyBRL.execute();
	}
}
