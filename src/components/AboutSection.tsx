import { Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="relative p-5 md:p-6 rounded-xl bg-[#09090b] border border-[#27272a] shadow-lg group hover:border-[#3f3f46] hover:bg-[#121214] transition-all duration-500 cursor-default">
      <Quote size={24} className="text-[#27272a] mb-4 group-hover:text-[#3f3f46] transition-colors duration-500" />
      <div className="space-y-6 text-[#a1a1aa] leading-relaxed text-[12.5px] md:text-sm">
        <div className="group/item">
          <h4 className="text-[#e4e4e7] font-bold flex items-center gap-2 group-hover/item:text-green-400">
            <span className="w-1 h-1 rounded-full bg-green-500"></span>
            서버 성능 개선 및 TPS 6배(3→20) 향상
          </h4>
          <p className="pl-3 mt-1 border-l border-[#27272a] group-hover/item:border-green-900 transition-colors">
            고빈도 반복 이벤트 차단 및 3,000건 이상의 아이템 거래 연산 로직을 최적화했습니다.
          </p>
        </div>

        <div className="group/item">
          <h4 className="text-[#e4e4e7] font-bold flex items-center gap-2 group-hover/item:text-blue-400">
            <span className="w-1 h-1 rounded-full bg-blue-500"></span>
            Event-Driven Middleware S/W 설계
          </h4>
          <p className="pl-3 mt-1 border-l border-[#27272a] group-hover/item:border-blue-900 transition-colors">
            실시간 트레이딩 데이터의 원할한 전송을 위한 미들웨어 소프트웨어를 직접 설계 및 구현했습니다.
          </p>
        </div>

        <div className="group/item">
          <h4 className="text-[#e4e4e7] font-bold flex items-center gap-2 group-hover/item:text-purple-400">
            <span className="w-1 h-1 rounded-full bg-purple-500"></span>
            PLC 통신 최적화(3ms → 0.5ms) 및 반복 업무 자동화(150분 → 10분)
          </h4>
          <p className="pl-3 mt-1 border-l border-[#27272a] group-hover/item:border-purple-900 transition-colors">
            레거시 통신 코드를 개선하고 PLC 팀과 협업해 데이터를 블록 단위로 재설계함으로써 통신 속도를 향상시키고, 반복 업무 자동화로 팀 효율을 높였습니다.
          </p>
        </div>

        <div className="group/item">
          <h4 className="text-[#e4e4e7] font-bold flex items-center gap-2 group-hover/item:text-orange-400">
            <span className="w-1 h-1 rounded-full bg-orange-500"></span>
            Wurst Client 오픈소스 기여 (GitHub 1.4k+)
          </h4>
          <p className="pl-3 mt-1 border-l border-[#27272a] group-hover/item:border-orange-900 transition-colors">
            채팅 이벤트 후킹 기반 Google Translate API 연동 및 멀티스레드 번역 모듈을 구현하고, 하드코딩 명령어 구조를 GUI로 리팩토링하여 PR에 반영했습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
