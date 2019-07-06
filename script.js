function timelineChanged() {
  var timelinePosition = document.getElementById("timeline").value;

  var timelineHeadlines = [
    "It starts off a kernel..",
    "BOOM! It's starting to expand",
    "Its Growing!",
    "IT'S HUGE",
    "OHH my gosh! Looks Yummy <i class='em em-stuck_out_tongue'></i><i class='em em-popcorn'></i>"
    // one line for each headline
  ];

  var timelineImages = [
    "https://cdn.glitch.com/8b9a9f2f-9e5b-4869-b39a-fa57b8a92108%2Fkernel1.png?1556152390722", // image address 1
    "https://cdn.glitch.com/8b9a9f2f-9e5b-4869-b39a-fa57b8a92108%2Fkernel2.png?1556152391336", // image address 2
    "https://cdn.glitch.com/8b9a9f2f-9e5b-4869-b39a-fa57b8a92108%2Fkernel3.png?1556152391084", // image address 3
    "https://cdn.glitch.com/8b9a9f2f-9e5b-4869-b39a-fa57b8a92108%2Fkernel4.png?1556152391066", // image address 4
    "https://cdn.glitch.com/8b9a9f2f-9e5b-4869-b39a-fa57b8a92108%2Fkernel5.png?1556152391722" // image address 5
    // one line for each image address
  ];

  var timelineText = [
    "awww so cute",
    "hey look it's a baby popcorn",
    "isn't that the same piece, just moved over? (Shh)",
    "hey that looks kinda weird",
    "Cloud or popcorn? <i class='em em-thinking_face'></i>"
    // one line for each image caption
  ];
  
  var steps = [
    "step 1",
    "step 2",
    "step 3",
    "step 4",
    "step 5"
  ];

  if ( timelinePosition == "0" ) {
    setTimelineHeadline( timelineHeadlines[0] );
    setTimelineImage( timelineImages[0] );
    setTimelineText( timelineText[0] );
    setSteps( steps[0] );
  }
  
    if ( timelinePosition == "1" ) {
    setTimelineHeadline( timelineHeadlines[1] );
    setTimelineImage( timelineImages[1] );
    setTimelineText( timelineText[1] );
    setSteps( steps[1] );
  }
  
    if ( timelinePosition == "2" ) {
    setTimelineHeadline( timelineHeadlines[2] );
    setTimelineImage( timelineImages[2] );
    setTimelineText( timelineText[2] );
    setSteps( steps[2] );
  }
  
    if ( timelinePosition == "3" ) {
    setTimelineHeadline( timelineHeadlines[3] );
    setTimelineImage( timelineImages[3] );
    setTimelineText( timelineText[3] );
    setSteps( steps[3] );
  }
  
    if ( timelinePosition == "4" ) {
    setTimelineHeadline( timelineHeadlines[4] );
    setTimelineImage( timelineImages[4] );
    setTimelineText( timelineText[4] );
    setSteps( steps[4] );
  }

}



function setTimelineHeadline( headline ) {
  document.getElementById("headline").innerHTML = headline;
}

function setTimelineImage( image ) {
  document.getElementById("image").src = image;   
}

function setTimelineText( text ) {
  document.getElementById("text").innerHTML = text; 
}

function setSteps ( steptext ) {
  document.getElementById("steptext").innerHTML = steptext;
}