"use client";

import { useState } from "react";
import { content, Language } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Brain, ChartLine } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<Language>("ko");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- 네비게이션 --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-2xl text-osb-navy">OneStep Bion</div>
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="font-medium hover:text-osb-green transition">
                {item.title}
              </a>
            ))}
            <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
              <button onClick={() => setLang('ko')} className={`${lang === 'ko' ? 'text-osb-navy font-bold' : 'text-gray-400'}`}>KR</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-osb-navy font-bold' : 'text-gray-400'}`}>EN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 히어로 섹션 --- */}
      <section id="about" className="relative pt-48 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:w-2/3">
            <h2 className="text-osb-green font-bold mb-4 uppercase tracking-wider">{t.hero.sub}</h2>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              {t.hero.title1}<br />
              <span className="text-osb-navy">{t.hero.title2}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">{t.hero.desc}</p>
            <Button size="lg" className="bg-osb-navy hover:bg-osb-navy/90 rounded-full px-10 h-14 text-lg">
              {t.hero.btn}
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 transform translate-x-20" />
      </section>

      {/* --- 기술 소개 섹션 --- */}
      <section id="technology" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.tech.title}</h2>
            <p className="text-gray-500">{t.tech.sub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.tech.cards.map((card, idx) => (
              <Card key={idx} className="border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-osb-navy rounded-2xl flex items-center justify-center text-white mb-4">
                    {idx === 0 && <Microscope size={28} />}
                    {idx === 1 && <Brain size={28} />}
                    {idx === 2 && <ChartLine size={28} />}
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">{card.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- 문의하기 섹션 --- */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-osb-navy">{lang === 'ko' ? '문의사항' : 'Contact'}</h2>
          <div className="bg-osb-navy text-white px-12 py-10 rounded-[3rem] inline-block shadow-2xl">
            <p className="text-sm opacity-80 mb-2 font-bold uppercase tracking-widest">Partnership Inquiry</p>
            <p className="text-2xl font-bold italic">Arif Co., Ltd. / OneStep Bion</p>
          </div>
        </div>
      </section>
    </div>
  );
}
