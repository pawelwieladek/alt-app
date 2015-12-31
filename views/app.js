import React, { Component, PropTypes } from 'react';
import Container from 'alt-container';

import locationsActions from '../actions/locations-actions';
import userActions from '../actions/users-actions';

import locationsStore from '../stores/locations-store';
import usersStore from '../stores/users-store';

export default class AppContainer extends Component {
  componentDidMount() {
    locationsActions.fetchLocations();
    userActions.fetchUsers();
  }

  render() {
    return (
      <Container stores={{ locationsStore, usersStore }}>
        <AppView />
      </Container>
    );
  }
}

class AppView extends Component {
  get loaded() {
    return !this.props.usersStore.loading && !this.props.locationsStore.loading;
  }

  render() {
    return (
      <LoaderView loaded={this.loaded}>
        <ListView items={this.props.usersStore.users} />
        <ListView items={this.props.locationsStore.locations} />
      </LoaderView>
    )
  }
}

class LoaderView extends Component {
  static propTypes = {
    loaded: PropTypes.bool.isRequired
  }

  render() {
    return this.props.loaded
      ? <div>{this.props.children}</div>
      : <span>Loading...</span>;
  }
}

class ListView extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }))
  }

  static defaultProps = {
    items: []
  }

  render() {
    let items = this.props.items.map(item => <ItemView key={item.id} {...item} />);
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

class ItemView extends Component {
  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}
