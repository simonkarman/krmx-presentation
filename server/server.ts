import { createServer } from '@krmx/server';

const server = createServer();

server.on('join', (username) => {
  console.info('welcome', username);
})

server.on('message', (username, message) => {
  console.info(username, 'has sent', message);
  if (message.type === 'custom/my-message') {
    server.broadcast(message, username);
  }
});

server.listen(8082);
