type Project = {
  title: string;
  description: string;
  period: string;
  features: string[];
  github: string;
  url: string;
  role: string[];
  skills: {
    frontend: string[];
    backend: string[];
    deployment: string[];
  };
};

const projects: Project[] = [
  {
    title: "Friendly Keyboard",
    description: "사용자의 언어 습관 교정을 목적으로 둔 안드로이드 키보드 App",
    period: "2023.03.03 ~ 2023.06.02",
    features: [],
    github:
      "https://github.com/orgs/CAU-CAPSTONE-2-Friendly-Keyboard/repositories",
    url: "",
    role: [
      "로그인, 회원가입 기능 구현",
      "날짜 별 혐오 표현 사용 횟수를 차트로 보여주는 기능 구현",
      "키보드 높이, 색상, 폰트 크기 등을 수정할 수 있는 설정 화면 구현",
      "비속어 및 혐오 표현 사용 횟수를 데이터베이스에 기록",
      "비속어 및 혐오 표현 존재 여부를 판별하는 AI 모델 연동",
    ],
    skills: {
      frontend: ["Android", "Kotlin"],
      backend: ["Python", "Flask", "MariaDB"],
      deployment: ["Raspberry Pi"],
    },
  },
  {
    title: "Real-Time Braille Scanner",
    description:
      "한글과 점자 간의 번역을 실시간으로 수행하여 사용자로 하여금 한글과 점자를 비교하여 학습할 수 있게 돕는 안드로이드 App",
    period: "2022.09.02 ~ 2022.12.15",
    features: [],
    github: "https://github.com/CAU-Capstone-Real-Time-Braille-Scanner",
    url: "",
    role: [
      "Retrofit2 + Flask 를 사용하여 점자 이미지 분석 AI 모델 연동",
      "점자를 한글로 번역하는 카메라 화면 UI 구현",
      "AWS EC2를 통한 서버 배포",
    ],
    skills: {
      frontend: ["Android", "Kotlin"],
      backend: ["Python, Flask"],
      deployment: ["AWS EC2"],
    },
  },
];

export default projects;
