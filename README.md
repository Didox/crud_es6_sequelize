### CRUD DE CLIENTES

##### Campos do Cliente:

	Nome
	CPF
	Telefone
	Email


##### Dependências:

	dotenv: "^10.0.0",
	express: "^4.17.1",
	pg: "^8.6.0",
	pg-hstore: "^2.3.3",
	sequelize: "^6.6.2"

##### Dependências de Desenvolvimento:

	nodemon: "^2.0.7",
	sequelize-cli: "^6.2.0",
	sucrase: "^3.18.1"


#### Comandos para Clone do Repositório 

```github
git clone <url>
yarn
yarn sequelize db:create
yarn sequelize db:migrate
yarn dev
```

#### Modo produção
```github
yarn run build
yarn start
```

#### Gerar migração
```github
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```


#### Observação

**Criar arquivo .env na raiz do repositório e incluir as variáveis de ambiente para conexão com o banco postgres ou o branco de sua escolha.**
