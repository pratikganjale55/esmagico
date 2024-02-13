import React, { useState } from "react";
import "./Faq.css";
let arr = [1, 2, 3, 4, 5];
const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [ith, setI] = useState("");
  const toggleAnswer = (i) => {
    setI(i);
    setExpanded(!expanded);
  };
  return (
    <>
      <div className="faq-container">
        <div className="faq-title">
          <i class="bi bi-question-circle"></i>
          <h2>FAQ'S</h2>
        </div>
        {arr?.map((ele, i) => {
          return (
            <div className="faq-question">
              <div className="faq-drop">
                <div className="question" onClick={() => toggleAnswer(i)}>
                  <span>{i + 1} .</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci quaerat sed id fuga accusantium velit labore harum
                  excepturi delectus ame
                </div>
                <div className="toggle-icon">
                  {expanded ? (
                    <i class="bi bi-dash"></i>
                  ) : (
                    <i class="bi bi-plus"></i>
                  )}
                </div>
              </div>
              {ith == i && (
                <div className="expanded-div">
                  {expanded && <div>description feedback</div>}
                </div>
              )}
            </div>
          );
        })}
        <div className="any-thing">
          <div>
            <p style={{fontWeight : "bold"}}>Anything not clear? contact us</p>
            <p>
              You can see our detailed F&Q sessions if you have more quiries.
              Also we are always a single call away for all your special asks...
              add
            </p>
          </div>
          <div className="apply-btn ">CONTACT US</div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
