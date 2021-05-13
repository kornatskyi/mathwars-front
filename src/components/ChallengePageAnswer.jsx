import React from 'react'

export default function ChallengePageAnswer() {
    return (
        <div className="challenge-page-answer-constainer">
            <form >
                <label htmlFor="answer">
                    <input id="answer" autoComplete="off" className="form-control" type="text" placeholder="Your answer here..." />
                </label>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}
