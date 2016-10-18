import {connect} from 'react-redux';

import TextInput from 'components/textInput';
import { addItem } from 'actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (text) => {
            dispatch(addItem({text, id: new Date().getTime()}))
        }
    }
}

export default connect(null, mapDispatchToProps)(TextInput)