$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("org/williamhill/automation/tests/placeABet.feature");
formatter.feature({
  "id": "placing-a-bet-in-euro-2016-international-football-event",
  "tags": [
    {
      "name": "@placeBet",
      "line": 1
    }
  ],
  "description": "",
  "name": "Placing a bet in Euro 2016 international football event",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "placing-a-bet-in-euro-2016-international-football-event;place-bet-on-euro-2016-international-football-event",
  "description": "",
  "name": "Place bet on Euro 2016 international football event",
  "keyword": "Scenario Outline",
  "line": 8,
  "type": "scenario_outline"
});
formatter.step({
  "name": "User selects \"\u003csports\u003e\" from betting home page",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "selects the match \"\u003cmatchName\u003e\" to place bet in \"\u003ccompetitionName\u003e\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "places a bet \"\u003cbetAmount\u003e\" on \"\u003cfavouriteTeam\u003e\" to win from Betslip",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Verify that odds and betAmount and returns offered are displayed in bet reciept",
  "keyword": "Then ",
  "line": 12
});
formatter.examples({
  "id": "placing-a-bet-in-euro-2016-international-football-event;place-bet-on-euro-2016-international-football-event;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 14,
  "rows": [
    {
      "id": "placing-a-bet-in-euro-2016-international-football-event;place-bet-on-euro-2016-international-football-event;;1",
      "cells": [
        "sports",
        "matchName",
        "favouriteTeam",
        "betAmount",
        "competitionName"
      ],
      "line": 15
    },
    {
      "id": "placing-a-bet-in-euro-2016-international-football-event;place-bet-on-euro-2016-international-football-event;;2",
      "cells": [
        "Football",
        "Slovakia vs England",
        "Slovakia",
        "0.03",
        "Euro 2016"
      ],
      "line": 16
    }
  ]
});
formatter.before({
  "duration": 646734153,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "User should be on WilliamHill home page",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.step({
  "name": "User logged into WilliamHill",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "User navigated to WilliamHill Betting Page",
  "keyword": "And ",
  "line": 6
});
formatter.match({
  "location": "PlaceABetTestSteps.userLoggedIntoWilliamHill()"
});
formatter.result({
  "duration": 31989157202,
  "status": "passed"
});
formatter.match({
  "location": "PlaceABetTestSteps.user_navigated_to_WilliamHill_Page()"
});
formatter.result({
  "duration": 1182694731,
  "status": "passed"
});
formatter.scenario({
  "id": "placing-a-bet-in-euro-2016-international-football-event;place-bet-on-euro-2016-international-football-event;;2",
  "tags": [
    {
      "name": "@placeBet",
      "line": 1
    }
  ],
  "description": "",
  "name": "Place bet on Euro 2016 international football event",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "User selects \"Football\" from betting home page",
  "keyword": "When ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "selects the match \"Slovakia vs England\" to place bet in \"Euro 2016\"",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1,
    4
  ]
});
formatter.step({
  "name": "places a bet \"0.03\" on \"Slovakia\" to win from Betslip",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify that odds and betAmount and returns offered are displayed in bet reciept",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "Football",
      "offset": 14
    }
  ],
  "location": "PlaceABetTestSteps.user_selects_match(String)"
});
formatter.result({
  "duration": 12116307866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slovakia vs England",
      "offset": 19
    },
    {
      "val": "Euro 2016",
      "offset": 57
    }
  ],
  "location": "PlaceABetTestSteps.selectsTheMatchToPlaceToBet(String,String)"
});
formatter.result({
  "duration": 24659411964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.03",
      "offset": 14
    },
    {
      "val": "Slovakia",
      "offset": 24
    }
  ],
  "location": "PlaceABetTestSteps.user_places_a_bet_on_to_win(String,String)"
});
formatter.result({
  "duration": 2745948576,
  "status": "passed"
});
formatter.match({
  "location": "PlaceABetTestSteps.verify_the_odds_and_returns_offered()"
});
formatter.result({
  "duration": 12233304375,
  "status": "passed"
});
});