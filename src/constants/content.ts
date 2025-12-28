export type Language = 'ko' | 'en';

export const content = {
  ko: {
    nav: [
      { id: "about", title: "회사소개" },
      { id: "technology", title: "기술소개" },
      { id: "patent", title: "특허 및 인증" },
      { id: "contact", title: "문의사항" },
    ],
    hero: {
      sub: "One Step Closer to a Happy Tomorrow",
      title1: "AI와 타임랩스로 완성하는",
      title2: "프리미엄 배아 선별",
      desc: "원스텝바이온은 독자적인 광학 기술과 AI 알고리즘을 통해 수정란 선별의 정확도를 극대화하여 임신 성공률의 새로운 기준을 제시합니다.",
      btn: "기술력 확인하기"
    },
    tech: {
      title: "Core Technology",
      sub: "객관적이고 과학적인 데이터 기반 선별 솔루션 'Embrium'",
      cards: [
        { title: "차별화된 광학 기술", desc: "In-situ 모니터링으로 배아 스트레스 및 오염 위험 최소화" },
        { title: "Cell Stage Net (AI)", desc: "YOLO 기반의 커스텀 모델을 통해 95.8%의 높은 분류 정확도 달성" },
        { title: "정량화된 데이터", desc: "배아 발달 타이밍 정량화로 일관된 고품질 선별 지원" }
      ]
    },
    patent: {
      title: "특허 및 인증",
      p1: { count: "56건", title: "특허 등록", desc: "광학계 개발 및 영상 처리 관련 특허" },
      p2: { count: "6건", title: "기술 이전", desc: "주요 연구 기관 대상 기술 이전 성과" }
    }
  },
  en: {
    nav: [
      { id: "about", title: "About" },
      { id: "technology", title: "Technology" },
      { id: "patent", title: "Patents" },
      { id: "contact", title: "Contact" },
    ],
    hero: {
      sub: "One Step Closer to a Happy Tomorrow",
      title1: "Premium Embryo Selection",
      title2: "via AI & Time-lapse",
      desc: "OneStep Bion sets a new standard for pregnancy success rates by maximizing selection accuracy through proprietary optical technology and AI.",
      btn: "View Technology"
    },
    tech: {
      title: "Core Technology",
      sub: "Objective and scientific data-driven selection solution 'Embrium'",
      cards: [
        { title: "Advanced Optical Tech", desc: "In-situ monitoring minimizing embryo stress and contamination risk" },
        { title: "Cell Stage Net (AI)", desc: "95.8% accuracy in embryo development stage classification via YOLO models" },
        { title: "Quantified Data", desc: "Supports consistent high-quality selection by quantifying embryo timing" }
      ]
    },
    patent: {
      title: "Patents & Certifications",
      p1: { count: "56", title: "Patents Granted", desc: "Patents for optical systems and image processing" },
      p2: { count: "6", title: "Tech Transfer", desc: "Technology transfer achievements to major research institutes" }
    }
  }
};