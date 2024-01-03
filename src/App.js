import { React } from "react";
import { Button } from "./components/Button/Button";
import { Footer } from "./components/Footer/Footer";
import { TopNavigation } from "./components/TopNavigation/TopNavigation";
import "./style.css";

function App() {
  return (
    <div className="index">
      <div className="div-2">
        <TopNavigation
          className="top-navigation-instance"
          logo="https://rb.gy/yc1ega"
        />
        <div className="hero-section">
          <div className="frame-9">
            <p className="we-crush-your">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.s.
            </p>
            <Button className="button-instance" />
          </div>
        </div>
        <div className="frame-10">
          <img
            className="image"
            alt="Image"
            src="https://i.ibb.co/QXVfhmr/image-2.png"
          />
          <div className="frame-11">
            <div className="div-wrapper">
              <p className="text-wrapper-6">Web &amp; Mobile App Development</p>
            </div>
            <p className="text-wrapper-7">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <Button className="button-instance" text="LEARN MORE" />
          </div>
        </div>
        <div className="frame-12">
          <div className="frame-11">
            <div className="div-wrapper">
              <div className="text-wrapper-6">Digital Strategy Consulting</div>
            </div>
            <p className="text-wrapper-7">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <Button className="button-instance" text="LEARN MORE" />
          </div>
          <img
            className="image-2"
            alt="Image"
            src="https://i.ibb.co/6bzGWwg/image-1.png"
          />
        </div>
        <Footer className="footer-instance" logo="https://rb.gy/yc1ega" />
      </div>
    </div>
  );
}

export default App;
