import GetRickAndMortyXML from '../get-rick-and-morty-xml.ts';
export default class GetRickAndMortyXMLAdapter {
	static async execute() {
		const getRickAndMortyXML = new GetRickAndMortyXML();
		return await getRickAndMortyXML.execute();
	}
}
