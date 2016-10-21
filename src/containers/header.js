import {connect} from 'react-redux';

import Header from '../components/header';
import { addItem } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (text) => {
            if (text.trim()) {
                dispatch(addItem({text, id: new Date().getTime()}))
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Header)