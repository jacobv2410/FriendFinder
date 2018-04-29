
var friends = require("../data/friends.js");
var surveyResults = require("../data/friends.js");

module.exports = function(app) {

  // getting json data from list of friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    }

    console.log(req.body)

    var userInfo = req.body
    var userscores = userInfo.scores

console.log(userscores)

    var tDiff =  0

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i])
      tDiff = 0

      for (var j = 0; j < friends[i].scores[j]; j++) {
        tDiff += Math.abs(parseInt(userscores[j]) - parseInt(friends[i].scores[j]))

        if(tDiff <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name
          bestMatch.photo = friends[i].photo
          bestMatch.friendDifference = tDiff
        }
      } 
    }
   friends.push(userInfo)
   res.json(bestMatch)
  })
}
