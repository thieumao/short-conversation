import React from 'react';

const QUESTION_DATA = [
    {
        audio: "https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3",
        tapescript: <span>W: Have you caught anything so far?
        <br/>M: No, I’ve been sitting here for an hour, but nothing’s biting. I was just going to  move to another spot to see if my luck would change.
        <br/>W: Perhaps it’s the type of bait you’re using. What are you using?
        <br/>M: I’m just using a plain old worm</span>,
        questions: [
            {
                question: <span>What does the woman suggest may be the reason for the man’s problem?</span>,
                answers: [
                  <span>He is sitting in the wrong place</span>,
                  <span>He is using the wrong bait</span>,
                  <span>He has been waiting too long</span>,
                  <span>He is not thinking properly</span>
                ],
                correct: 1
            },
            {
                question: <span>How long has the man been here?</span>,
                answers: [
                  <span>15 minutes</span>,
                  <span>30 minutes</span>,
                  <span>60 minutes</span>,
                  <span>120 minutes</span>
                ],
                correct: 2
            },
            {
                question: <span>What is the man doing?</span>,
                answers: [
                  <span>Arguing about the seat</span>,
                  <span>Searching for the right spot</span>,
                  <span>Trying to catch fish</span>,
                  <span>Moving to a different house</span>
                ],
                correct: 2
            }
        ]
    },
];

export default QUESTION_DATA;
