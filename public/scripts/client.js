/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const createTweetElement = function(tweet){
    let tweet = `
        <article class="all-tweets-container">
            <header class="tweet-header">
                <div class="user">
                    <img src="${tweet.user.avatars}" alt="profile-picture">
                    <p>${tweet.user.handle}</p>
                </div>
                <p>${tweet.user.name}</p>
            </header>
            <h2> ${tweet.content.text}</h2>
            <hr>
            <footer>
                <p> ${tweet.created_at}</p>
                <div>
                    <a href=""> <i class="fa-sharp fa-solid fa-flag"></i></a>
                    <a href=""> <i class="fa-solid fa-arrows-rotate"></i></a>
                    <a href=""><i class="fa-sharp fa-solid fa-heart"></i></a>
            
                </div>
            </footer>
        </article>`;
  
  
  
    return tweet;   
  };
  
  const $tweet = createTweetElement(tweet);
  $('#tweets').append($tweet);
  
  const renderTweets = function (tweets) {
    $('#tweets').empty();
  
    for (let tweet of tweets) {
      const newTweet = createTweetElement(tweet);
  
      $('#tweets').prepend(newTweet);
    }
  }
  renderTweets(data);