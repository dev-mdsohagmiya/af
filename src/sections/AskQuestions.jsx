import Questions from "../components/Questions";
import "../styles/AskQuestions.css";
export default function AskQuestions() {
  return (
    <section id="ask-q">
      <div>
        <div>
          <div className="d-flex justify-content-center mx-4">
            <h2>
              Frequently <span className="text-primary">asked</span> questions
            </h2>
          </div>
          <div className="d-flex justify-content-center text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
              Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div>
          <Questions />
        </div>
      </div>
    </section>
  );
}
