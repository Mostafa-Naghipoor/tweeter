/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
    //Escape method to avoid XSS attacks
    const escape = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
  
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
  }
  const loadTweets = function () {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    })
      .done((tweets) => {
        renderTweets(tweets)
      })
      .fail(() => console.log('An error has occurred'))
      .always(() => console.log('Succesful request'));
  }

  const renderTweets = function (tweets) {
    $('#tweets').empty();
  
    for (let tweet of tweets) {
      const newTweet = createTweetElement(tweet);
  
      $('#tweets').prepend(newTweet);
    }
  }
    //tweet creation method
    $('#new-tweet-form').on('submit', function (event) {
        event.preventDefault();
    
        const $tweetText = $(this).children('#tweet-text');
    
        if ($tweetText.val().length > 140) {
          $('.error').html(`<p>There is a limit for written characters (140), Please reduce the text </p>`);
          $('.error').slideDown('slow');
          return;
        } else if ($tweetText.val().length === 0) {
          $('.error').html(`<p>Please write something to tweet :D</p>`);
          $('.error').slideDown('slow');
          return
        }
    
        const formContent = $(this).serialize();
    
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: formContent
        })
          .done(() => loadTweets())
          .fail(() => console.log("Something went wrong"))
          .always(() => console.log("SUCCESS BAYBEE"));
    
        $("#tweet-text").val("");
        $(this).find('.counter').val('140');
    
      });
    
      loadTweets();
    })
