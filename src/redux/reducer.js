import * as actions from './actionTypes';


export default function reducer(state = {}, action) {
    if(action.type === actions.SET_CHALLENGE) {
        return (action)
    } else if(action.type === actions.CHANGE_CHALLENGE) {
            return (action)

    } else {
        return state;
    }

}