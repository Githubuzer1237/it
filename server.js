


// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// let prices = {
//   WebCourse: '1.400.000 сум',
//   Grafic: '1.300.000 сум',
//   ScratchSection: '1.200.000 сум',
// };

// wss.on('connection', ws => {
//   ws.send(JSON.stringify(prices));

//   ws.on('message', message => {
//     const updatedPrice = JSON.parse(message);
//     prices = { ...prices, ...updatedPrice };
//     wss.clients.forEach(client => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(JSON.stringify(prices));
//       }
//     });
//   });
// });





import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let prices = {
  WebCourse: '1.400.000 сум',
  Grafic: '1.300.000 сум',
  ScratchSection: '1.200.000 сум',
};

wss.on('connection', ws => {
  ws.send(JSON.stringify(prices)); // Отправляем начальные данные при подключении

  ws.on('message', message => {
    const updatedPrice = JSON.parse(message); // Получаем обновленную цену
    prices = { ...prices, ...updatedPrice }; // Обновляем цены
    console.log('Обновленные цены на сервере:', prices); // Логируем обновления

    // Отправляем обновленные данные всем подключенным клиентам
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(prices));
      }
    });
  });
});
