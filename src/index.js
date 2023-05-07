import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main-container')
);





// const API_KEY = "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";

// async function fetchData() {
//   const response = await fetch("https://api.openai.com/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: "now append Uday behind this word",
//         },
//       ],
//       temperature: 1,
//       max_tokens: 100,
//     }),
//   });
//   const data = await response.json();
//   console.log(data["choices"][0]["message"]["content"]);
// }
// fetchData();
