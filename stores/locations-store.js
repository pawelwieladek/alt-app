import alt from '../dispatcher/alt';

import locationsActions from '../actions/locations-actions';

class LocationsStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;
    this.successMessage = null;
    this.loading = false;

    this.bindListeners({
      handleUpdateLocations: locationsActions.updateLocations,
      handleFetchLocations: locationsActions.fetchLocations,
      handleLocationsFailed: locationsActions.locationsFailed
    });
  }

  handleUpdateLocations(locations) {
    this.loading = false;
    this.errorMessage = null;
    this.successMessage = 'Locations fetched';
    this.locations = locations;
  }

  handleFetchLocations() {
    this.loading = true;
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(LocationsStore, 'LocationsStore');
