var expect = require('chai').expect;
var game = require('../GameDetector.js');
var detector = new game();

describe('Testing', function() {
  describe('Check setup', function() {
    it('Should pass base case if setup is correct', function(done) {

      expect(
      	[  "I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,fortnite}"]
 				)
      .to.deep.equal(detector.detect(
      {
		"Fortnite": ["Fortnite", "Fort Nite"],
		"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
	  }, 
	  [
	  	"I liked the last Destiny game, now I play fortnite"
	  ]
	  ));
      done();
    });
  });
  describe('Check given Test Case', function() {
    it('Should pass given test case', function(done) {

      expect(
      	[  "I liked TAG{Destiny2,the last Destiny game}, now I play TAG{Fortnite,Fortnite}",
				"Lol, no comment about that",
 				"I'm still playing TAG{WorldOfWarcraft,world of warcraft} since ww2"]
 				)
      .to.deep.equal(detector.detect(
      {
		"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
		"Fortnite": ["Fortnite", "Fort Nite"],
		"Destiny": ["Destiny", "original Destiny game"],
		"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
		"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
	  }, 
	  [
	  	"I liked the last Destiny game, now I play Fortnite",
		"Lol, no comment about that",
		"I'm still playing world of warcraft since ww2"
	  ]
	  ));
      done();
    });
  });


  describe('Custom Test Cases', function() {
    it('Should pass Custome Test Case #1', function(done) {

      expect(
      	[
      	"I liked the TAG{Modern Warfare 3,last modern warfare}, but now I play TAG{CallOfDutyWW2,COD ww2}",
		"The TAG{CallOfDutyWW2,new COD} isnt all that good compared to TAG{Modern Warfare 2,mw2}",
		"true TAG{Modern Warfare 2,cod mw2} and TAG{Modern Warfare 3,mw3} were one of the all time bests",
		"I agree but now its all about TAG{Fortnite,fortnite} and TAG{PlayerUnknown's Battlegrounds,pubg}"
      	]
 				)
      .to.deep.equal(detector.detect(
      {
		"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD", "new cod"],
		"Fortnite": ["Fortnite", "Fort Nite"],
		"Destiny": ["Destiny", "original Destiny game"],
		"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
		"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
		"PlayerUnknown's Battlegrounds" : ["pubg"],
		"Modern Warfare 2" : ["MW2", "Best COD ever", "cod mw2"],
		"Modern Warfare 3" : ["MW3", "last modern warfare", "cod mw3"],
		"Gears Of War" : ["GOW", "GOW2", "GOW3", "GOW4", "Gears Of war", "judgment", "Gears Of war 1", "Gears Of war 2", "Gears Of war 3", "Gears Of war 4"],
		"Grand Theft Auto" : ["GTA", "Grand Theft Auto V", "Grand Theft Auto" ]
	  }, 
	  [
	  	"I liked the last modern warfare, but now I play COD ww2",
		"The new COD isnt all that good compared to mw2",
		"true cod mw2 and mw3 were one of the all time bests",
		"I agree but now its all about fortnite and pubg"
	  ]
	  ));
      done();
    });
    it('Should pass Custome Test Case #2', function(done) {

      expect(
			[ 
			"Have you ever played the TAG{Gears Of War,Gears of War} series",
  			"Have I? TAG{Gears Of War,GOW} is my favorite game series. I love playing TAG{Gears Of War,GOW2} and TAG{Gears Of War,GOW4}",
  			"Nice. Im a huge TAG{Grand Theft Auto,GTA} fan though. I always played TAG{Grand Theft Auto,Grand Theft Auto} growing up" 
  			]
 			)
      .to.deep.equal(detector.detect(
      {
		"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD", "new cod"],
		"Fortnite": ["Fortnite", "Fort Nite"],
		"Destiny": ["Destiny", "original Destiny game"],
		"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
		"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
		"PlayerUnknown's Battlegrounds" : ["pubg"],
		"Modern Warfare 2" : ["MW2", "Best COD ever", "cod mw2"],
		"Modern Warfare 3" : ["MW3", "last modern warfare", "cod mw3"],
		"Gears Of War" : ["GOW", "GOW2", "GOW3", "GOW4", "Gears Of war", "judgment", "Gears Of war 1", "Gears Of war 2", "Gears Of war 3", "Gears Of war 4"],
		"Grand Theft Auto" : ["GTA", "Grand Theft Auto V", "Grand Theft Auto" ]
	  }, 
	  [
	  	"Have you ever played the Gears of War series",
		"Have I? GOW is my favorite game series. I love playing GOW2 and GOW4",
		"Nice. Im a huge GTA fan though. I always played Grand Theft Auto growing up"
	  ]
	  ));
      done();
    });
    it('Should pass Custome Test Case #3', function(done) {

      expect(
      	[  
      		"I play TAG{Fortnite,fort nite} here and there on pc, but I mainly play TAG{PlayerUnknown's Battlegrounds,pubg} now",
  			"Nice. Im more of a console player. So usually end up playing games like TAG{Grand Theft Auto,gta} , TAG{Gears Of War,gow} , TAG{Destiny,destiny} , TAG{CallOfDutyWW2,COD ww2}",
  			"Ohh thats cool. I play TAG{PlayerUnknown's Battlegrounds,pubg} on console and TAG{Fortnite,fortnite} on mobile once in a while too we should play together someday"
 		]
 				)
      .to.deep.equal(detector.detect(
      {
		"CallOfDutyWW2": ["Call of duty world war two", "COD WW2", "COD WWII","WW2COD"],
		"Fortnite": ["Fortnite", "Fort Nite"],
		"Destiny": ["Destiny", "original Destiny game"],
		"Destiny2": ["Destiny 2", "the last Destiny game", "Destiny II"],
		"WorldOfWarcraft": ["WoW the game", "world of warcraft"],
		"PlayerUnknown's Battlegrounds" : ["pubg"],
		"Modren Warefare 2" : ["MW2", "Best COD ever", "cod mw2"],
		"Modren Warefare 3" : ["MW3", "last Modren warfare", "cod mw3"],
		"Gears Of War" : ["GOW", "GOW2", "GOW3", "GOW4", "Gears Of war", "judgment", "Gears Of war 1", "Gears Of war 2", "Gears Of war 3", "Gears Of war 4"],
		"Grand Theft Auto" : ["GTA", "Grand Theft Auto V", "Grand Theft Auto" ]
	  }, 
	  [
	  	"I play fort nite here and there on pc, but I mainly play pubg now",
		"Nice. Im more of a console player. So usually end up playing games like gta , gow , destiny , COD ww2",
		"Ohh thats cool. I play pubg on console and fortnite on mobile once in a while too we should play together someday"
	  ]
	  ));
      done();
    });
  });


});



