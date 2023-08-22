import React, { useState } from "react";
import "../styles/Questions.css";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

function ToggleTabs() {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    {
      id: 1,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: 2,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: 3,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },

    {
      id: 4,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    {
      id: 5,
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
    },
    // Add more questions and answers as needed
  ];

  const toggleTab = (tabId) => {
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-10  mx-auto">
          {tabs.map((tab) => (
            <div key={tab.id} className="mb-3">
              <button
                className={`ques-btn ${
                  activeTab === tab.id ? "bg-and-text-color" : ""
                }`}
                onClick={() => toggleTab(tab.id)}
                aria-expanded={activeTab === tab.id}
              >
                <div className="question-dev">
                  <div className="d-flex align-items-center id">
                    <div className="ms-3"> 0{tab.id}</div>
                    <div className="ques"> {tab.question}</div>
                  </div>

                  <div className="d-flex justify-content-end align-items-center">
                    <div className="arrow">
                      <span>
                        {activeTab === tab.id ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
              {activeTab === tab.id && (
                <div className="mt-2 answer">
                  <p>{tab.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToggleTabs;
