/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';




$(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');
  $.ajax({
    method: "GET",
    url: "https://www.reddit.com/.json",
    dataType: "json",
    success: onSuccess,
  })


})


/* FUNCTION DEFINITION HERE */
function onSuccess(resp) {
  console.log("API connected")

  resp.data.children.forEach(function(element, index){
    var thumbnailPic = element.data.thumbnail;
    var postTitle = element.data.title;
    var postlink = element.data.permalink;
    var homepageUrl = "https://www.reddit.com/";
    var timePostedAgo = element.data.created_utc;
    var userName = element.data.author;
    var redditCategory = element.data.subreddit_name_prefixed;
    var hoursAgoNum = calculateTimestamp(timePostedAgo);

    $("#main").append(`<div class="row postContainers"><a class="col-md-2" href="${homepageUrl}${postlink}"><img src="${thumbnailPic}"></a>
    <h5 class="col-md-10"><a href="${homepageUrl}${postlink}">${postTitle}</a></h5><p><span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>Submited ${hoursAgoNum} hours ago by <a href="${homepageUrl}user/${userName}">${userName}</a> to <a href="${homepageUrl}${redditCategory}">${redditCategory}</a></div><br>`);
  })
};
/* TIP: don't forget scope! */
function calculateTimestamp(createdTime){
    var actualTime = Date.now();
    var timeDifferenceUtc = actualTime - (createdTime * 1000);
    var postedAgo = Math.round(timeDifferenceUtc/1000/60/60);

    return postedAgo;
};
