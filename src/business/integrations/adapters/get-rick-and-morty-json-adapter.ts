import GetRickAndMortyBRL from '../get-rick-and-morty-brl.ts';
export default class GetRickAndMortyJSONAdapter {
	static async execute() {
		const getRickAndMortyBRL = new GetRickAndMortyBRL();

		return await getRickAndMortyBRL.execute();
	}
}
