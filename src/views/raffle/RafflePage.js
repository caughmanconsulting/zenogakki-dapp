import { useNavigate } from "react-router-dom";
import throne from "../../images/throne.png";
import arrow from "../../images/arrow.png";
import swordsAudio from "../../sounds/swords.mp3";

function RafflePage() {
  const navigate = useNavigate();
  const swordsSound = new Audio(swordsAudio);

  function toDashboard() {
    var arrow = document.getElementById("arrow");
    arrow.classList.add("flash");
    swordsSound.play();
    setTimeout(() => {
      navigate("/raffle/dashboard");
    }, 2000);
  }

  return (
    <main>
      <div className="relative lg:block h-screen w-full overflow-hidden">
        <div
          className="overflow-hidden bg-black aspect-[4250/2490] min-h-screen min-w-[100vw] absolute transform -translate-x-1/2 -translate-y-1/2"
          id="mouse-parallax-container"
          style={{
            overflow: "hidden",
            position: "relative",
            top: "50%",
            left: "50%",
          }}
        >
          <div style={{ willChange: "transform" }}>
            <img height="100%" className="absolute throne-ratio" src={throne} />
            <img
              height="100%"
              className="absolute"
              id="arrow"
              src={arrow}
              onClick={toDashboard}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default RafflePage;
