//   First Task
//   Write a delay(ms) function that returns a promise that
//   transition to the "resolved" state after ms milliseconds

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
const logger1 = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms

//   Second Task
//   Rewrite the toggleUserState() without callback function,
//   and a took only two parameters allUsers and userName and returned a promise.

// **Previous function with callback**

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};
const logger2 = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger2);
toggleUserState(users, "Lux").then(logger2);
