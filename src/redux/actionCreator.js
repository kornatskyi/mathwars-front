import * as actions from './actionTypes'


export function addChallenge(challenge) {
    return {
        type: actions.SET_CHALLENGE,
        payload: {
            challenge: challenge
        }
    }
}

export function changeChallenge(newChallenge) {
    return {
        type: actions.CHANGE_CHALLENGE,
        payload: {
            challenge: newChallenge
        }
    }
}
