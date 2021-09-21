// Задача 1----------------------------------------------------------------

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(` ${ms}`);
      },

      ms,
    );
  });
};

const logger1 = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger1); // Resolved after 2000ms
delay(1000).then(logger1); // Resolved after 1000ms
delay(1500).then(logger1); // Resolved after 1500ms

// Задача 2---------------------------------------------------------------

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return Promise.resolve(
    allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user)),
  );
};

const logger2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);

// Задача 3---------------------------------------------------------------------
