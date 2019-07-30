import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = (state) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    }
}

const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(msp, mdp)(SessionForm)