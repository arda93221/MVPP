
import React from 'react';
import { View } from '../types';
import { ArrowRight, Brain, Briefcase, GraduationCap, Star, PlayCircle, Sparkles, Crown, CheckCircle2, Cpu, Globe, Lock, HeartPulse, ShieldCheck, Target, Zap } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="brand-gradient rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-brand-200">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" /> Yapay Zeka Destekli Rehber
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
            Geleceğini <span className="text-brand-200 italic">Guidely</span> ile Şekillendir
          </h1>
          <p className="text-brand-100 text-lg md:text-xl mb-10 leading-relaxed max-w-lg opacity-90">
            Kişilik özelliklerini analiz et, sana en uygun mesleği ve üniversiteyi birlikte keşfedelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(View.Tests)}
              className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-50 transition-all shadow-xl shadow-brand-900/20 active:scale-95 text-lg"
            >
              Analize Başla <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-brand-700/50 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-700/70 transition-all border border-white/10 active:scale-95">
              <PlayCircle className="w-5 h-5" /> Nasıl Çalışır?
            </button>
          </div>
        </div>
        
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-400 opacity-20 rounded-full mr-20 mb-[-80px] blur-3xl"></div>
      </section>

      {/* "Guidely'de Ne Var?" Section - Core Content requested by user */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">Guidely'de Neler Var?</h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">Geleceğinizi tasarlarken ihtiyacınız olan her şey tek bir platformda toplandı.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">1. Kişilik Analizi ve Testler</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Kişilerin kendi ilgi alanlarını ve yeteneklerini bilimsel psikometrik testlerle keşfetmesini sağlar. Yapay zeka destekli analizlerle kariyer DNA'nızı çıkarırız.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">2. Sektör ve Meslek Rehberi</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Farklı sektörlerdeki maaş aralıklarını, gelecek trendlerini ve iş dünyasındaki gerçek koşulları uzman görüşleriyle birlikte sunarız.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7 text-brand-primary" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">3. Üniversite Portalı</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Türkiye'deki tüm üniversitelerin memnuniyet puanları, burs imkanları, yurt koşulları ve kulüp faaliyetlerini detaylıca listeler.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PlayCircle className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">4. Deneyim Vlogları</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Akademisyenlerin ders içerikleri ve üst sınıf öğrencilerinin kampüs yaşamı hakkındaki samimi videolarıyla okulları içeriden tanıyın.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-7 h-7 text-yellow-500" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">5. Kaynak Kütüphanesi</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Öğrencilerin puanladığı ve yorumladığı en güncel ders kitapları, soru bankaları ve akademik materyallere ulaşın.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="font-black text-gray-800 mb-3">6. AI Yol Haritası</h3>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Premium üyelerimize özel, belirledikleri hedeflere ulaşmaları için AI tarafından oluşturulan kişiselleştirilmiş adım adım strateji planı.
            </p>
          </div>
        </div>
      </section>

      {/* Live Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-gray-100 border-b-4 border-b-brand-100">
            <div className="flex justify-between items-center mb-8 px-2">
              <h2 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                <PlayCircle className="w-6 h-6 text-brand-primary" /> Canlı Yayınlar
              </h2>
              <span className="text-brand-primary text-sm font-black cursor-pointer hover:underline uppercase tracking-wider">Hepsini Gör</span>
            </div>
            <div className="space-y-5">
              {[
                { 
                  title: "Yapay Zeka ve Mühendislik", 
                  speaker: "Prof. Dr. Ahmet Y.", 
                  time: "Bugün 15:30", 
                  color: "bg-indigo-600",
                  icon: <Cpu className="w-8 h-8 text-white" />
                },
                { 
                  title: "Sağlık Sektöründe Gelecek ve Robotik Tıp", 
                  speaker: "Doç. Dr. Selen G.", 
                  time: "Yarın 11:00", 
                  color: "bg-red-500",
                  icon: <HeartPulse className="w-8 h-8 text-white" />
                }
              ].map((stream, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 hover:bg-brand-50 rounded-[32px] transition-all border border-transparent hover:border-brand-100 group cursor-pointer">
                  <div className={`w-20 h-20 rounded-3xl ${stream.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden`}>
                    {stream.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-lg text-gray-800 mb-1 group-hover:text-brand-primary transition-colors">{stream.title}</h3>
                    <p className="text-sm font-bold text-gray-400">{stream.speaker} • <span className="text-brand-primary">{stream.time}</span></p>
                  </div>
                  <button className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-2xl text-sm font-black hover:bg-brand-primary transition-all active:scale-95 shadow-xl shadow-gray-200">Katıl</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Premium Promo Card */}
        <div className="bg-[#1A1A1A] rounded-[40px] p-10 text-white flex flex-col shadow-2xl shadow-gray-300 border border-white/5 relative overflow-hidden group h-fit lg:sticky lg:top-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[28px] p-5 mb-8 border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-black mb-4 tracking-tight">Guidely Premium</h3>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
            Kariyer yolculuğunu bir üst seviyeye taşıyacak özel araçlara erişim sağla.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Premium Özel Canlı Yayınlar",
              "Birebir Mentorluk Desteği",
              "AI Destekli Kariyer Koçu",
              "Üniversite Başarı Verileri",
              "Detaylı Kişilik Raporu"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-xs font-bold text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500" /> {feature}
              </li>
            ))}
          </ul>

          <button 
            onClick={() => onNavigate(View.Premium)}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-yellow-900/20 active:scale-95"
          >
            Hemen Yükselt
          </button>
          
          <div className="absolute top-[-20px] left-[-20px] w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-[-40px] right-[-40px] w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
