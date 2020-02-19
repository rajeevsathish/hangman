sendTelemetry = (data) => {
    fetch('https://devcon.sunbirded.org/content/data/v1/telemetry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 'api.sunbird.telemetry',
            ver: '3.0',
            params: {
                msgid: "gsyhbvtfd99a6c2723d67aaa649190ba"
            },
            ets: (new Date()).getTime(),
            events: [data]
        })
    }).then(res => {
        console.log('Response', res);
    }).catch(err => {
        console.log('Error', err);
    });
}
generateVisit = () => {
    var data = {
        "eid": "DC_VISIT",
        "mid": "gsyhbvtfd99a6c2723d67aaa649190ba",
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": "visitor-1",
        "stallId": "GAMES",
        "ideaId": "Hangman",
        "edata": {
        }
    }
    sendTelemetry(data);
}
generateAssess = (ts, maxscore, currentScore) => {
    var data = {
        "eid": "DC_ASSESS",
        "mid": "gsyhbvtfd99a6c2723d67aaa649190ba",
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": "visitor-1",
        "stallId": "GAMES",
        "ideaId": "Hangman",
        "sid": "Session20",
        "contentId": "do_53487589875983478",
        "contentType": "AssessmentItem",
        "contentName": "Assessment1",
        "edata": {
            "duration": ts,
            "maxScore": maxscore,
            "score": currentScore
        }
    }
    sendTelemetry(data);
}
generateEarn = (ts, currentScore, badge) => {
    var data = {
        "eid": "DC_EARN",
        "mid": "gsyhbvtfd99a6c2723d67aaa649190ba",
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": "visitor-1",
        "studentId": "student-1",
        "stallId": "GAMES",
        "ideaId": "Session20",
        "edata": {
            "type": "HangmanBadge",
            "points": currentScore,
            "badges": [badge]
        }
    }
    sendTelemetry(data);
}