import "@/styles/PersonalInfo.scss";
import { IoMdContact } from "react-icons/io";
import PersonalInfoItem from "./PersonalInfoItem";
import { IoPersonSharp } from "react-icons/io5";
import { FaCalendar, FaGithub } from "react-icons/fa";
import { MdPhoneForwarded, MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";

const PersonalInfo = () => {
  return (
    <div className="PersonalInfo">
      <div className="title" data-aos="fade-down" data-aos-offset="200">
        <IoMdContact size={"4vw"} />
        <h1>Personal Info.</h1>
      </div>
      <div className="content">
        <div className="verticalContent">
          <PersonalInfoItem
            data_aos="fade-down-right"
            icon={<IoPersonSharp size={"4vw"} />}
            title="이름"
            body="노현진"
          />
          <PersonalInfoItem
            data_aos="fade-right"
            icon={<MdPhoneForwarded size={"4vw"} />}
            title="연락처"
            body="010-7141-9831"
          />
          <PersonalInfoItem
            data_aos="fade-up-right"
            icon={<FaGithub size={"4vw"} />}
            title="GitHub"
            body="https://github.com/HyunJinNo"
            isLink={true}
          />
        </div>
        <div className="verticalContent">
          <PersonalInfoItem
            data_aos="fade-down-left"
            icon={<FaCalendar size={"4vw"} />}
            title="생년월일"
            body="1998.03.01"
          />
          <PersonalInfoItem
            data_aos="fade-left"
            icon={<MdEmail size={"4vw"} />}
            title="이메일"
            body="nhj9831@naver.com / n9831n@gmail.com"
          />
          <PersonalInfoItem
            data_aos="fade-up-left"
            icon={<FaGraduationCap size={"4vw"} />}
            title="학력"
            body="중앙대학교 18학번 소프트웨어학부"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
