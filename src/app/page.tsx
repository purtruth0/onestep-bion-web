"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Brain, ChartLine, Globe } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  const content = {
    ko: {
      nav: ["회사소개", "기술소개", "특허 및 인증", "문의사항"],
      hero: {
        title: "AI와 타임랩스로 완성하는",
        highlight: "프리미엄 배아 선별",
        desc: "원스텝바이온은 독자적인 광학 기술과 AI 알고리즘을 통해 수정란 선별의 정확도를 극대화하여 임신 성공률의 새로운 기준을 제시합니다.",
        btn: "기술력 확인하기"
      }
    },
    en: {
      nav: ["About", "Technology", "Patents", "Contact"],
      hero: {
        title: "Premium Embryo Selection",
        highlight: "via AI & Time-lapse",
        desc: "OneStep Bion sets a new standard for pregnancy success rates by maximizing selection accuracy through proprietary optical technology and AI.",
        btn: "View Technology"
      }
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src="/logo.png" alt="OneStep Bion" className="h-12 w-auto" />
          <div className="hidden md:flex items-center gap-8 font-medium">
            {t.nav.map((menu, i) => (
              <a key={i} href={`#section-${i}`} className="hover:text-osb-green transition">{menu}</a>
            ))}
            <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-200 text-sm">
              <button onClick={() => setLang("ko")} className={`${lang === "ko" ? "text-osb-navy font-bold" : "text-gray-400"}`}>KR</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang("en")} className={`${lang === "en" ? "text-osb-navy font-bold" : "text-gray-400"}`}>EN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <h2 className="text-osb-green font-bold mb-4 uppercase tracking-wider">One Step Closer to a Happy Tomorrow</h2>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              {t.hero.title}<br />
              <span className="text-osb-navy">{t.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">{t.hero.desc}</p>
            <Button asChild className="bg-osb-navy hover:bg-osb-navy/90 rounded-full px-8 py-6 text-lg font-bold transition-all hover:scale-105">
              <a href="#technology">{t.hero.btn}</a>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 transform translate-x-20" />
      </section>

      {/* --- Technology Section --- */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Technology</h2>
            <p className="text-gray-500">{lang === "ko" ? "객관적이고 과학적인 데이터 기반 선별 솔루션 'Embrium'" : "Objective and scientific data-driven selection solution 'Embrium'"}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Microscope />, title: lang === "ko" ? "차별화된 광학 기술" : "Advanced Optical Tech", desc: lang === "ko" ? "In-situ 모니터링으로 배아 스트레스 및 오염 위험 최소화" : "In-situ monitoring minimizing embryo stress and contamination risk" },
              { icon: <Brain />, title: "Cell Stage Net (AI)", desc: lang === "ko" ? "YOLO 기반의 커스텀 모델을 통해 95.8% 정확도 달성" : "95.8% accuracy via custom YOLO-based models" },
              { icon: <ChartLine />, title: lang === "ko" ? "정량화된 데이터" : "Quantified Data", desc: lang === "ko" ? "배아 발달 타이밍 정량화로 일관된 고품질 선별 지원" : "Supports consistent high-quality selection via quantification" }
            ].map((item, i) => (
              <Card key={i} className="p-8 border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
                <div className="w-14 h-14 gradient-osb rounded-2xl flex items-center justify-center text-white mb-6 transition-transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Market Section (Dark) --- */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Market Expansion</h2>
              <p className="text-gray-400">{lang === "ko" ? "축산 농가부터 글로벌 난임 센터까지" : "From livestock farms to global IVF centers"}</p>
            </div>
            <div className="text-right">
              <span className="block text-4xl font-bold text-osb-green">18.9{lang === "ko" ? "조원" : "T KRW"}</span>
              <span className="text-sm text-gray-500">Global Market Value</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
              <span className="text-osb-green font-bold mb-2 block text-sm">Step 1. Livestock</span>
              <h3 className="text-2xl font-bold mb-4">{lang === "ko" ? "한우 수정란 시장 진입" : "Livestock Market Entry"}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• {lang === "ko" ? "수태율 20% 향상" : "20% increase in conception rate"}</li>
                <li>• {lang === "ko" ? "수정란 품질 리포트 제공" : "Embryo quality reporting"}</li>
              </ul>
            </div>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition">
              <span className="text-osb-green font-bold mb-2 block text-sm">Step 2. Human IVF</span>
              <h3 className="text-2xl font-bold mb-4">{lang === "ko" ? "글로벌 난임 센터 확장" : "Global IVF Centers"}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>• {lang === "ko" ? "5조원 글로벌 시장 공략" : "5T KRW Global market target"}</li>
                <li>• {lang === "ko" ? "전문 기관 임상 협력" : "Clinical cooperation with specialized institutes"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-osb-navy">{lang === "ko" ? "문의사항" : "Contact"}</h2>
        <div className="bg-osb-navy text-white px-12 py-10 rounded-[3rem] inline-block shadow-2xl transition-transform hover:scale-105">
          <p className="text-xs opacity-70 mb-2 font-bold uppercase tracking-widest">Partnership Inquiry</p>
          <p className="text-2xl font-bold italic">Arif Co., Ltd. / OneStep Bion</p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
          <p>© 2025 OneStep Bion. All rights reserved.</p>
          <p className="text-right font-medium"><strong>(주)원스텝바이온</strong> | CEO 김기현</p>
        </div>
      </footer>
    </div>
  );
}
