const data = [
  { id: 0, name: 'Pawel' },
  { id: 1, name: 'Kuba' },
  { id: 2, name: 'Rafal' }
];

const UsersSource = {
  fetch() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 1000);
    });
  }
};

export default UsersSource;
