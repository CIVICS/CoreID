import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeftNav from '../components/LeftNav';

function mapStateToProps(state) {
    return {
        list: state.items.list.group(item => {
            return item.status;
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {}; //bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
