import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import GetRickAndMortyXMLAdapter from '../../src/business/integrations/adapters/get-rick-and-morty-xml-adapter';
import GetRickAndMortyXML from '../../src/business/integrations/get-rick-and-morty-xml';

describe('#GetRickAndMortyXMLAdapter', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Should call a getRickAndMortyXMLAdapter method', async () => {
		const xmlIntegration = jest

			.spyOn(GetRickAndMortyXML.prototype, 'execute')
			.mockResolvedValue([]);

		await GetRickAndMortyXMLAdapter.execute();

		expect(xmlIntegration).toHaveBeenCalled();
	});
});
