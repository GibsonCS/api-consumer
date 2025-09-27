# API Consumer

Este projeto demonstra como consumir dados de múltiplas APIs que retornam informações em formatos diferentes (XML e JSON), padronizando-os para uso em sistemas que trabalham exclusivamente com JSON. Utilizando o padrão de projeto Adapter, o sistema é capaz de integrar dados de diferentes fontes e formatos, tornando o processo de consumo flexível e escalável.

## Motivação

Imagine que você precisa consumir dados de duas APIs: uma retorna informações em XML e outra em JSON. Seu sistema, porém, trabalha apenas com dados em JSON. Este projeto exemplifica como resolver esse desafio, implementando Adapters para transformar e padronizar os dados recebidos, facilitando a integração e o reuso de código.

## Principais conceitos

- **Adapter Pattern**: Permite que interfaces incompatíveis trabalhem juntas, convertendo dados de diferentes formatos para um padrão único (JSON).
- **Integração de APIs**: Consome dados de APIs externas, demonstrando como lidar com diferentes protocolos e formatos de resposta.
- **Testes automatizados**: Inclui testes para garantir o funcionamento correto dos Adapters e integrações.

## Estrutura do Projeto

- `src/business/integrations/`: Implementações das integrações com as APIs externas.
- `src/business/integrations/adapters/`: Adapters responsáveis por converter dados XML e JSON para o formato padrão.
- `src/entities/`: Definição das entidades utilizadas no sistema.
- `test/`: Testes automatizados para validação das integrações e adapters.

## Como clonar e executar o projeto

### Pré-requisitos

- Node.js (versão 22 ou superior)
- npm

### Passos

1. **Clone o repositório:**

   ```powershell
   git clone https://github.com/GibsonCS/api-consumer.git
   cd api-consumer
   ```

2. **Instale as dependências:**

   ```powershell
   npm install
   ```

3. **Execute os testes:**

   ```powershell
   npm test
   ```

4. **Execute o projeto:**
   ```powershell
   npm start
   ```

## Dependências principais

- [axios](https://github.com/axios/axios): Cliente HTTP para requisições às APIs.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js): Conversão de XML para JSON.
- [@types/xml2js](https://www.npmjs.com/package/@types/xml2js): Tipagens para uso do xml2js com TypeScript.
- [jest](https://jestjs.io/): Testes automatizados.
- [ts-jest](https://github.com/kulshekhar/ts-jest): Integração do Jest com TypeScript.
- [typescript](https://www.typescriptlang.org/): Tipagem estática para JavaScript.

## Documentação do padrão Adapter

- [Adapter Pattern - Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/adapter)

## Exemplos de uso

### Executando testes de cobertura

```powershell
npm run test:cov
```

## Licença

Este projeto está sob a licença MIT.

---

Sinta-se à vontade para contribuir ou adaptar este exemplo para suas necessidades!
