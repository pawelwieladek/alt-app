import alt from '../dispatcher/alt';

import LocationSource from '../sources/locations';

class LocationsActions {
  updateLocations(locations) {
    return locations;
  }

  fetchLocations() {
    return (dispatch) => {
      dispatch();
      LocationSource.fetch()
        .then((locations) => {
          this.updateLocations(locations);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
      }
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(LocationsActions);
