// // Задача 1----------------------------------------------------------------

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

// // Задача 2---------------------------------------------------------------

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

// Задание 3--------------------------------------------------------

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;
    const time = delay;
    const id = transaction.id;

    setTimeout(() => {
      if (canProcess) {
        resolve({ id, time });
      } else {
        reject({ id, time });
      }
    }, time);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = ({ id, time }) => {
  console.warn(`Error processing transaction ${id}. Please try again after ${time} ms.`);
};
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
