import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppRoot from '../screens';

const { store } = configureStore();

export default class StoreProvider extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Remote debugger is in a background tab',
      // Filter 3rd party promise rejection: https://github.com/infinitered/reactotron/issues/255
      'Possible Unhandled Promise Rejection',
    ];
  }

  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    );
  }
}
