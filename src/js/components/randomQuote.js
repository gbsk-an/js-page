(function() {
  const quotes = [
    {
      quote:
        "One time, we will all look back and we will say: Once, I was a human. It was such a strange experience. We didn't even know who we where, and even if we where surrounded by death we never gave up life.",
      author: "Unknown"
    },
    {
      quote:
        "If we have no peace, it is because we have forgotten that we belong to each other.",
      author: "Mother Teresa"
    },
    {
      quote:
        "Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.",
      author: "Ralph Ellison, Invisible Man"
    },
    {
      quote: "The idea that humans are yet intelligent enough to serve as stewards of the Earth is among the most hubristic ever.",
      author: "James E. Lovelock"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    document.querySelector(".quotes").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
