import "@/styles/AboutMe.scss";
import { FaSmile } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="title" data-aos="fade-right" data-aos-offset="200">
        <FaSmile size={"3vw"} />
        <h1>About Me</h1>
      </div>
      <div className="content">
        <div
          className="cardViewContent"
          data-aos="fade-down"
          data-aos-offset="200"
        >
          <h2>Introduction</h2>
          <div className="cardView">
            안녕하세요. 사람들에게 도움이 되는 앱을 제공하고 싶은 개발자,
            노현진입니다. 2020년 당시 누군가 코로나19 확진자 동선 앱을
            개발하였다는 뉴스를 접한 후 저도 사람들에게 도움이 되는 앱을
            제공하는 개발자가 되고 싶다는 생각이 들었습니다. 개발자로서 필요한
            지식을 쌓기 위해 자료구조, Design Pattern, 알고리즘 등을 공부하였고,
            또한 Kotlin, Java, Python, C 등 다양한 프로그래밍 언어를
            공부하였습니다. 비록 소수라 할지라도, 누군가에게는 큰 도움이 되는
            서비스를 개발하고 싶습니다.
          </div>
        </div>
        <div
          className="cardViewContent"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h2>Keywords</h2>
          <div className="cardView">
            다양성 존중
            <br />
            합리적 사고
            <br />
            실용성 중시
            <br />
            책임감
            <br />
            적극적
            <br />
            목표 지향적
            <br />
            자기 성찰적
            <br />
            성실함
            <br />
            자기주도적
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
