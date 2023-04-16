import { useState } from "react";
import "./App.css";
import { authors, text, transOptions } from "./authors";
import IntroDialog from "./IntroDialog";

function App() {
  const [displayText, setDisplayText] = useState(text);
  const beenBefore = localStorage.getItem("beenBefore") ? false : true;
  const [showIntro, setShowIntro] = useState<boolean>(beenBefore);
  const [fetching, setFetching] = useState<boolean>(false);

  const translate = async (prompt: string) => {
    setFetching(true);
    await fetch("https://gpt-back-qpme.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Something went wrong.");
        const newText = await res.json();
        setDisplayText(
          newText?.message?.choices[0]?.text ?? "Something went wrong."
        );
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        console.log(err);
      });
  };

  return (
    <div className="page">
      {showIntro && <IntroDialog onClose={() => setShowIntro(false)} />}
      <hr className="top-hr" />
      <div className="title">
        <h1>Attention Is All You Need</h1>
      </div>
      <hr className="bottom-hr" />
      <div className="authors">
        {authors.map((author) => (
          <div className="author">
            <h4>{author.name}</h4>
            <h5>{author.affiliation}</h5>
            <h5 className="email">{author.email}</h5>
          </div>
        ))}
      </div>
      <div className="abstract_container">
        <h3 style={{ alignSelf: "center" }}>Abstract</h3>
        <p className="abstract">
          <div style={{ display: "flex", gap: "5px" }}>
            {transOptions.map((option) => (
              <div
                className="button"
                onClick={() => {
                  translate(option.prompt + text);
                }}
              >
                {fetching ? "Translating..." : option.title}
              </div>
            ))}

            {text !== displayText && (
              <div
                className="button"
                onClick={() => {
                  setDisplayText(text);
                }}
              >
                {fetching ? "Translating..." : "Original"}
              </div>
            )}
          </div>
          {displayText}
        </p>
      </div>
      <div className="disclaimer">
        Disclaimer: This is a demo document. It is a proof of concept and not
        intended to be a resource.
      </div>
    </div>
  );
}

export default App;
