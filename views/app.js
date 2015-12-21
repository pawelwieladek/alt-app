import React, { Component } from 'react';
import AltContainer from 'alt-container';

import locationsActions from '../actions/locations-actions';
import userActions from '../actions/users-actions';
import locationsStore from '../stores/locations-store';
import usersStore from '../stores/users-store';

const View = React.createClass({
  isLoading() {
    return this.props.usersStore.loading || this.props.locationsStore.loading;
  },
  renderUsers() {
    return (
      <ul>
        {this.props.usersStore.users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          );
        })}
      </ul>
    );
  },
  renderLocations() {
    return (
      <ul>
        {this.props.locationsStore.locations.map((location) => {
          return (
            <li key={location.id}>{location.name}</li>
          );
        })}
      </ul>
    );
  },
  renderContent() {
    return (
      <div>
        {this.renderUsers()}
        {this.renderLocations()}
      </div>
    )
  },
  renderLoading() {
    return (
      <span>Loading</span>
    );
  },
  render() {
    console.log(this.props);
    return this.isLoading() ? this.renderLoading() : this.renderContent();
  }
});

const App = React.createClass({
  componentDidMount() {
    locationsActions.fetchLocations();
    userActions.fetchUsers();
  },
  render() {
    return (
      <AltContainer stores={{ locationsStore, usersStore }}>
        <View />
      </AltContainer>
    );
  }
});

export default App;
