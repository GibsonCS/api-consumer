import GetRickAndMortyJSONAdapter from './business/integrations/adapters/get-rick-and-morty-json-adapter.ts';
import GetRickAndMortyXMLAdapter from './business/integrations/adapters/get-rick-and-morty-xml-adapter.ts';

const data = [GetRickAndMortyJSONAdapter, GetRickAndMortyXMLAdapter].map(
	(adapter) => adapter.execute(),
);

const allPromises = await Promise.allSettled(data);

const success = allPromises
	.filter(({ status }) => status === 'fulfilled')
	.map(({ value }: any) => value)
	.reduce((prev, next) => prev.concat(next), []);

console.table(success);
