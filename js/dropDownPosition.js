


// define an object
var sportPositions = {
    'Badminton': ['','Singles', 'Doubles Forecourt', 'Doubles Backcourt'],
    'Baseball/softball': ['','Pitcher', 'Catcher', 'First baseman', 'Second baseman','Third baseman','Shortstop','Left fielder','Center fielder','Right fielder'],
    'Basketball': ['','Point Guard', ,'Shooting Guard','Small Forward', 'Power Forward','Center'],
    'Bowling': ['N/A'],
    'Cheerleading': ['','Flyer', 'Base', 'Spotter','Tumbler','Backspot','Front spot'],
    'Cross Country': ['','Varsity Runner', 'Jr Varsity Runner'],
    'Dance Team': ['','Choreographer', 'Section Leader'],
    'Field Hockey': ['','Goalkeeper','Defenders','Center-Back','Fullbacks','Midfielders','Center Midfielder','Wingers','Forwards','Strikers','Center Forward'],
    'Football': ['','Quarterback', 'Running Back', 'Wide Receiver' ,'Tight End','Offensive Lineman','Defensive Lineman','Linebacker','Cornerback', 'Safety','Kicker/Punter'],
    'Golf': ['N/A'],
    'Gymnastics': ['','All-Around Gymnast', 'Artistic Gymnast', 'Apparatus Specialist', 'Floor Exercise Specialist' ,'Balance Beam Specialist','Uneven Bars Specialist', 'Vault Specialist', 'Rhythmic Gymnast', 'Trampoline Gymnast', 'Acrobatic Gymnast'],
    'Hockey': ['','Goaltender (Goalie)','Defensemen (Defenders)','Offensive Defenseman', 'Forwards', 'Center', 'Wingers' ],
    'Lacross': ['','Attack', 'Midfield', 'Defense',  'Goalie'],
    'Skiing': ['N/A'],
    'Soccer': ['','Goalkeeper (GK)', 'Centerback','Fullback','Midfielder', 'Forwards'],
    'Tennis': ['','Singles','Doubles'],
    'Swimming': ['','Freestyle', 'Backstroke','Breaststroke', 'Butterfly', 'Individual Medley (IM)','Relay Events','Distance Specialists'],
    'Track': ['','Sprints' ,'Long-Distance', 'Hurdles', 'Relays', 'Jumps', 'Throws', 'Race Walk' ,'Multi-Events'],
    'Volleyball': ['','Setter' ,'Outside Hitter',  'Middle Blocker',  'Libero' ,'Defensive Specialist', 'Utility Player' ],
    'Weight Lifting': ['N/A'],
    'Wrestling': ['N/A']
   
};

document.getElementById('sport').addEventListener('change', function() {
    var positionDropdown = document.getElementById('position');
    
    // empty the current choose
    positionDropdown.innerHTML = '';

    // get the position
    var positions = sportPositions[this.value] || [];

    // add the position to the array
    positions.forEach(function(position) {
        var option = document.createElement('option');
        option.value = position;
        option.textContent = position;
        positionDropdown.appendChild(option);
    });
});
