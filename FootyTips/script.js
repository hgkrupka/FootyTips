
var tippingLadder = [{
    "name": "Hetty Krupka",
    "recentScore": 5,
    "totalScore": 11

},
{
    "name": "Luke Teakle",
    "recentScore": 5,
    "totalScore": 15
}];

var standings = [{
    "team": "PAFC",
    "wins": 1,
    "losses": 5,
    "points": 4,

},
{
    "team": "Sydney",
    "wins": 2,
    "losses": 4,
    "points": 8,
}];

function loadLadder() {
    let text = "<tr><th>Name</th><th>This Week's Points</th><th>Total Points</th></tr>";

    tippingLadder.sort(
        function (a, b) { return b.totalScore - a.totalScore });

    for (let i = 0; i < tippingLadder.length; i++) {
        text = text +
            "<tr>" +
            "<td>" + tippingLadder[i].name + "</td>" +
            "<td>" + tippingLadder[i].recentScore + "</td>" +
            "<td>" + tippingLadder[i].totalScore + "</td>" +
            "</tr>";
    }

    document.getElementById("tippingLadderTable").innerHTML = text;
}

async function loadAFLLadder() {
    fetch("https://api.squiggle.com.au/?q=standings").then(
        res => {
            res.json().then(
                data => {
                    console.log(data.standings);
                    if (data.standings.length > 0) {

                        var temp = "<tr>" +
                            "<th>Position</th>" +
                            "<th>Team</th>" +
                            "<th>Wins</th>" +
                            "<th>Losses</th>" +
                            "<th>Points</th>" +
                            "</tr>";

                        var i = 0;

                        data.standings.forEach((itemData) => {
                            i++;
                            temp += "<tr>";
                            temp += "<td>" + i + "</td>";

                            if (itemData.played == 5) {
                                temp += "<td>" + itemData.name + "* </td>";
                            }
                            else {
                                temp += "<td>" + itemData.name + "</td>";
                            }


                            temp += "<td>" + itemData.wins + "</td>";
                            temp += "<td>" + itemData.losses + "</td>";
                            temp += "<td>" + itemData.pts + "</td></tr>";
                        });
                        document.getElementById('tippingLadderTable').innerHTML = temp;
                        //console.log(temp);
                    }
                }
            )
        }
    )
}

async function loadGames() {
    fetch("https://api.squiggle.com.au/?q=games&year=2022&round=6").then(
        res => {
            res.json().then(
                data => {
                    console.log(data.standings);
                    if (data.games.length > 0) {

                        var temp = "<tr>" +
                            "<th>Teams</th>" +
                            "<th>My Tip</th>" +
                            "</tr>";

                        var i = 0;

                        data.games.forEach((itemData) => {
                            i++;
                            temp += "<tr>";
                            temp += "<td>" + itemData.hteam + " vs. " + itemData.ateam + "</td>";
                            temp += "<td>" + itemData.hteam  + " vs. " + itemData.ateam + "</td>";
                            //temp += "<td>" + itemData.pts + "</td></tr>";
                        });
                        document.getElementById('roundXGames').innerHTML = temp;
                        //console.log(temp);
                    }
                }
            )
        }
    )
}





