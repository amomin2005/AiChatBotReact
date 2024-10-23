import axios from 'axios';
import { useState } from 'react'
import './App.css'

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");

  async function APICall(){
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyALreEffrbW8UC_b0Q5ntUNjivH3CDF0d0",
      method: "post",
      data : {"contents":[{"parts":[{"text":question}]}]}
    });
    console.log(setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']));
}
  return (
    <>
    <h1> Aario (Ai ChatBot) </h1>
      <textarea id='textside' value={question} onChange={(e) => setquestion(e.target.value)} cols = "30" rows = "10"> Type Question </textarea>
      <h2>  </h2>
      <button onClick={APICall}>Generate</button>
      <p> {answer} </p>
    </>
  );
}

export default App
