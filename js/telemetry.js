uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

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
                msgid: uuidv4()
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
        "mid": uuidv4(),
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": "visitor-1",
        "stallId": "STA3",
        "ideaId": "IDE22",
        "edata": {
        }
    }
    sendTelemetry(data);
}
generateAssess = (ts, maxscore, currentScore, userId) => {
    var data = {
        "eid": "DC_ASSESS",
        "mid": uuidv4(),
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": userId ? userId : 'anonymous',
        "stallId": "STA3",
        "ideaId": "IDE22",
        "edata": {
            "duration": ts,
            "maxScore": maxscore,
            "score": currentScore
        }
    }
    sendTelemetry(data);
}
generateEarn = (ts, currentScore, badge, userId) => {
    var data = {
        "eid": "DC_EARN",
        "mid": uuidv4(),
        "ets": (new Date()).getTime(),
        "did": "8ceeb01fd99a6c2723d67aaa649190ba",
        "profileId": userId ? userId : 'anonymous',
        "stallId": "STA3",
        "ideaId": "IDE22",
        "edata": {
            "type": "HangmanBadge",
            "points": currentScore,
            "badges": [badge]
        }
    }
    sendTelemetry(data);
}
