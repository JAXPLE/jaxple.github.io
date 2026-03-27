import { Quote } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="relative p-5 md:p-6 rounded-xl bg-[#09090b] border border-[#27272a] shadow-lg group hover:border-[#3f3f46] hover:bg-[#121214] transition-all duration-500 cursor-default">
      <Quote size={24} className="text-[#27272a] mb-4 group-hover:text-[#3f3f46] transition-colors duration-500" />
      <div className="space-y-5 text-[#a1a1aa] leading-relaxed text-[13px] md:text-sm font-medium">
        <p>
          <strong className="text-[#e4e4e7] font-semibold text-base tracking-tight">"팀과 함께 성장하며, 시스템을 견고하게 다지는 엔지니어입니다."</strong>
        </p>

        <p>
          2023년 첫 회사에 합류했을 당시, 낯선 MFC(C++) 환경이었지만 적극적인 학습을 통해 2개월 만에 인정받아 <span className="text-[#d4d4d8] font-bold">6개국 13개 글로벌 고객사</span> 대응 업무에 투입되었습니다. 이후 동료들과 협력하여 기존 통신 구조를 개선, <span className="text-[#d4d4d8] font-bold">송·수신부 처리 속도를 약 6배(3ms → 0.5ms) 향상</span>시켰습니다. 팀의 인프라 환경에도 기여하고자 자체 SVN 서버를 구축해 형상 관리를 도입하고, 반복되는 업무를 자동화하여 <span className="text-[#d4d4d8] font-bold">문서화 소요 시간을 2시간 30분에서 10분 미만으로 단축</span>하는 성과를 냈습니다.
        </p>

        <p>
          2025년에는 프리랜서로서 사용자 40명 이상 규모의 트레이딩 뷰 시그널을 텔레그램 Ticker로 송신하는 서비스 기반 코드를 구축했습니다. 실시간 트레이딩 데이터 전송 시 발생할 수 있는 동시성 문제를 해결하기 위해, <span className="text-[#d4d4d8] font-bold">Event-Driven 구조를 채택하고 미들웨어 S/W를 직접 설계</span>하며 아키텍처 역량을 높였습니다.
        </p>

        <p>
          또한 2022년 말부터 현재까지 3년간 사용자 20명 이상 규모의 <span className="text-[#d4d4d8] font-bold">Java 기반 게임 사설 서버를 장기 운영</span>하고 있습니다. 특히 3,000개 이상의 아이템 거래 연산 최적화와 매크로 방어 체계 구축을 통해 <span className="text-[#d4d4d8] font-bold">기존 3 TPS에서 최대 20 TPS로 서버를 안정화</span>하는 등, 실시간 장애 이슈에 기민하게 대응하며 서버 엔지니어로서 단단한 실무적 내실을 튼튼히 다져왔습니다.
        </p>

        <p className="pt-2 text-[#d4d4d8] border-t border-[#27272a] mt-4 font-semibold">
          이러한 문제 해결과 환경 개선의 경험들은 결국 '팀'과 함께였기에 이룰 수 있었습니다. 입사 후에도 멈추지 않고 배우며, 항상 팀의 관점에서 헌신할 수 있는 역할을 앞장서 찾아내는 <span className="text-white">'팀 플레이어'</span>가 되겠습니다.
        </p>
      </div>
    </div>
  );
};
