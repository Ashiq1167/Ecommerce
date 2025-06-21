import React, { useEffect, useState } from "react";

const ChristmasSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 195);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0e111e] flex items-center justify-center overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-[#1b1f3a] via-transparent to-transparent blur-3xl opacity-40 z-0 rounded-b-[40%]" />
      <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#1b1f3a] via-transparent to-transparent blur-3xl opacity-40 z-0 rounded-t-[40%]" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-[95%] md:w-[90%] max-w-5xl px-8 py-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl text-center animate-fadeIn">
        <div className="overflow-hidden mb-10">
          <div className="whitespace-nowrap text-5xl md:text-6xl font-extrabold tracking-widest text-white animate-titleScroll">
            🎄CHRISTMAS <span className="text-red-700">SALE</span>🎄CHRISTMAS <span className="text-red-700">SALE</span>🎄CHRISTMAS <span className="text-red-700">SALE</span>🎄
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HRS", value: timeLeft.hours },
            { label: "MIN", value: timeLeft.minutes },
            { label: "SEC", value: timeLeft.seconds },
          ].map((unit, index) => (
            <div
              key={unit.label}
              className="border border-white/30 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 min-w-[70px] text-center animate-zoomIn"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="text-3xl font-bold">{unit.value}</div>
              <div className="text-xs mt-1 text-gray-300">{unit.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 animate-fadeIn delay-1000">
          <div className="border border-red-700 text-red-700 font-semibold py-3 px-6 rounded-xl bg-white/10 backdrop-blur-md w-full md:w-auto text-center transition duration-300 hover:bg-red-700 hover:text-white hover:shadow-xl">
            USE COUPON <span className="font-bold">2025🔖</span>
          </div>
          <div className="border border-red-700 text-red-700 font-semibold py-3 px-6 rounded-xl bg-white/10 backdrop-blur-md w-full md:w-auto text-center transition duration-300 hover:bg-red-700 hover:text-white hover:shadow-xl">
            VIEW ALL SALES🎁
          </div>
        </div>
      </div>

      <style>{`
        @keyframes snow {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-snow {
          animation: snow linear infinite;
        }

        @keyframes titleScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-titleScroll {
          animation: titleScroll 20s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomIn {
          animation: zoomIn 0.8s ease-out forwards;
        }

        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default ChristmasSale;
