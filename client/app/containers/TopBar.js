import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopBar from '../components/TopBar';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {}; //bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
