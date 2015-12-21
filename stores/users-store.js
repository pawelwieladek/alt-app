import alt from '../dispatcher/alt';

import userActions from '../actions/users-actions';

class UsersStore {
  constructor() {
    this.users = [];
    this.errorMessage = null;
    this.successMessage = null;
    this.loading = false;

    this.bindListeners({
      handleUpdateUsers: userActions.updateUsers,
      handleFetchUsers: userActions.fetchUsers,
      handleUsersFailed: userActions.usersFailed
    });
  }
  handleUpdateUsers(users) {
    this.loading = false;
    this.errorMessage = null;
    this.successMessage = 'Users fetched';
    this.users = users;
  }

  handleFetchUsers() {
    this.loading = true;
    this.users = [];
  }

  handleUsersFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(UsersStore, 'UsersStore');
