import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { clickCounter } from '~/modules/home/actions.js';
import { dataSelector } from '~/modules/home/selectors.js';

export default connect(
  state => ({
    data: dataSelector(state),
  }),
  dispatch => ({
    clickCounter: bindActionCreators(clickCounter, dispatch),
  })
)(Home);
