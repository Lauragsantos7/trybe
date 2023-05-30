// ./src/index.ts

import { ReadOnlyConnector, ReadOnlyRedisConnector } from "./Connectors";;

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379,
});

// O resto do index.ts continua igualzinho 😎


const main = async (connector: ReadOnlyConnector) => {
  const count = await connector.getCount(token);
  try {
    console.log(count);
  } catch (err) {
    console.error(err);
  }
}

main(conn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/