import React from "react";

const IntroDialog = ({ onClose }: { onClose: any }) => {
  return (
    <div className="intro_dialog">
      <h1>Hello People of Trellis</h1>
      <p className="intro_body">
        I am very interested in the work you are doing. This is a demo of what I
        believe your company is working on. It uses the ChatGPT API to translate
        text into different difficulty levels. I have many ideas for how I see
        AI improving my learning and I would love to contribute to your company!
      </p>
      <p className="intro_body">
        The abstract of this example has two levels of difficulty buttons above
        it. Click "For a 3rd grader" and the text will be translated into a 3rd
        grade level. Click "For a 5th grader" and the text will be translated
        into a 5th grade level. Click "Original" to see the original text.
      </p>
      <button
        className="intro_button"
        onClick={() => {
          onClose();
          localStorage.setItem("beenBefore", "true");
        }}
      >
        Try It
      </button>
    </div>
  );
};

export default IntroDialog;
