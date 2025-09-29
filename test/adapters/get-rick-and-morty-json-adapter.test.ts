import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import GetRickAndMortyJSONAdapter from '../../src/business/integrations/adapters/get-rick-and-morty-json-adapter.ts';
import GetRickAndMortyJSON from '../../src/business/integrations/get-rick-and-morty-brl.ts';

describe('#GetRickAndMortyJSONAdapter', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Should call a getRickAndMortyJSONAdapter method', async () => {
		const JSONIntegration = jest

			.spyOn(GetRickAndMortyJSON.prototype, 'execute')
			.mockResolvedValue([]);

		await GetRickAndMortyJSONAdapter.execute();

		expect(JSONIntegration).toHaveBeenCalled();
	});
});
