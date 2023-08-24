import { createServer } from '@krmx/server';

const server = createServer();

let numberOfRolledDice = 0;

server.on('join', (username) => {
  console.info('joined', username);
});

server.on('message', (username, message) => {
  console.info(username, 'sent', message);
  if (message.type === 'my-game/roll') {
    numberOfRolledDice++;
    server.broadcast({ type: 'rolled', payload: { numberOfRolledDice }});
  }
})

server.listen(8082);
