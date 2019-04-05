// 'use strict';

// process.env.SECRET = 'test';

// const jwt = require('jsonwebtoken');

// const Roles = require('../../../src/auth/roles-model.js');
// const roleRouter = require('../../../src/auth/role-router.js')
// const server = require('../../../src/app.js').server;
// const supergoose = require('../../supergoose.js');

// const mockRequest = supergoose.server(server);

// let users = {
//   admin: {username: 'admin', password: 'password', role: 'admin'},
//   editor: {username: 'editor', password: 'password', role: 'editor'},
//   user: {username: 'user', password: 'password', role: 'user'},
// };

// beforeAll(async () => {
//   await supergoose.startDB();
//   Object.keys(users).forEach( userType => {
//     return mockRequest.post('/signup')
//       .send(users[userType])
//       .then(results => {
//         console.log(users[usertype])
//         var token = jwt.verify(results.text, process.env.SECRET);
//         id = token.id;
//         encodedToken = results.text;
//         user[token] = encodedToken;
//         console.log('users',users);

//       });
//     });


// afterAll(supergoose.stopDB);

// describe('Auth Router', () => {
  
//   Object.keys(users).forEach( userType => {
    
//     describe(`${userType} users`, () => {
      
//       let encodedToken;
//       let id;
      
//       it('as a user can only read', () => {
//         return mockRequest.post('/signin')
//           .send(user[user])
//           .then(results => {
//             var token = jwt.verify(results.text, process.env.SECRET);
//             id = token.id;
//             encodedToken = results.text;
//             console.log(results);
//             console.log(results.text);
//             expect(token.id).toBeDefined();
//             expect(token.capabilities).toBeDefined();
//           });
//       });

//     });
    
//   });

// });
// })
