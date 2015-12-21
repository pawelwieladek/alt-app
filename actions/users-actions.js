import alt from '../dispatcher/alt';

import UsersSource from '../sources/users';

class UsersActions {
  updateUsers(users) {
    return users;
  }

  fetchUsers() {
    return (dispatch) => {
      dispatch();
      UsersSource.fetch()
        .then((users) => {
          this.updateUsers(users);
        })
        .catch((errorMessage) => {
          this.usersFailed(errorMessage);
        });
      }
  }

  usersFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(UsersActions);
