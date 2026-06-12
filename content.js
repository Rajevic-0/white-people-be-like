const PREFIX = "White people be like ";

function agregarPrefijoATweets() {
  const tweets = document.querySelectorAll('[data-testid="tweetText"]');

  tweets.forEach((tweet) => {
    if (!tweet.classList.contains("tweet-modificado")) {
      tweet.classList.add("tweet-modificado");
      
      tweet.innerText = PREFIX + tweet.innerText;
    }
  });
}

const observer = new MutationObserver(() => {
  agregarPrefijoATweets();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

agregarPrefijoATweets();
