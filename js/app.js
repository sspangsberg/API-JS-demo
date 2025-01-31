

/**
 * Sends a request to the API and displays response in the browser
 */
async function runQueryNewJoke() {

  const apiURL = "https://api.chucknorris.io/jokes/random";

  const res = await fetch(apiURL);
  const joke = await res.json();

  const content = document.getElementById('content');
  content.innerText = `"${joke.value}"`;
};



/**
 * Sends a request to the LLM API and displays response in the browser
 */
async function runLLMPrompt() {

  const query = document.getElementById('query').value;
  const apiURL = "http://ai.easv.dk:5000/v1/chat/completions";
  const data = {
    method: "POST",
    headers: { Authorization: 'Bearer {none}' },
    body: JSON.stringify(
      {
        "messages": [
          { "role": "user", "content": query }
        ],
        "temperature": 0.7
      }
    ),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  const response = await fetch(apiURL, data);
  const json = await response.json();
  result = json.choices[0].message.content;

  const content = document.getElementById('content');
  content.innerText = result;
}

/**
 * Event handler
 */
function handleClick(event) {
  event.preventDefault();

  //runQueryNewJoke();
  runLLMPrompt();
}

// attach event handler to submit button
form.addEventListener("submit", handleClick);
