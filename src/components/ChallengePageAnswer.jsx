import React from 'react'

export default function ChallengePageAnswer() {
    return (
        <div className="challenge-page-answer-constainer">
            <form >
                <label htmlFor="answer">
                    <input type="text" placeholder="Your answer here..." />
                </label>
                <button type="submit">Submit answer</button>
            </form>
        </div>
    )
}
