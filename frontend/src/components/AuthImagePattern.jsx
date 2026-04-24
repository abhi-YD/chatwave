// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

const AuthImagePattern = ({ title, subtitle }) => {
  const emojis = ["💬", "⚡", "🎉", "🌊", "✨", "🚀", "💜", "🎨", "🔥"];

  return (
    <div className="hidden lg:flex items-center justify-center relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 40%, #ec4899 80%, #f97316 100%)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

        .auth-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.3;
        }

        .auth-orb-1 {
          width: 350px; height: 350px;
          background: #f9a8d4;
          top: -80px; right: -80px;
          animation: orbFloat1 9s ease-in-out infinite;
        }

        .auth-orb-2 {
          width: 250px; height: 250px;
          background: #fbbf24;
          bottom: -60px; left: -60px;
          animation: orbFloat2 11s ease-in-out infinite;
        }

        .auth-orb-3 {
          width: 180px; height: 180px;
          background: #60a5fa;
          top: 50%; left: 10%;
          animation: orbFloat1 7s ease-in-out infinite reverse;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-15px, 25px) scale(1.05); }
        }

        .emoji-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .emoji-tile {
          aspect-ratio: 1;
          border-radius: 20px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          transition: transform 0.3s, background 0.3s;
          animation: tileFloat 4s ease-in-out infinite;
          cursor: default;
        }

        .emoji-tile:hover {
          background: rgba(255,255,255,0.22);
          transform: scale(1.1) rotate(-5deg) !important;
        }

        .emoji-tile:nth-child(1) { animation-delay: 0s; }
        .emoji-tile:nth-child(2) { animation-delay: 0.3s; }
        .emoji-tile:nth-child(3) { animation-delay: 0.6s; }
        .emoji-tile:nth-child(4) { animation-delay: 0.9s; }
        .emoji-tile:nth-child(5) { animation-delay: 1.2s; }
        .emoji-tile:nth-child(6) { animation-delay: 1.5s; }
        .emoji-tile:nth-child(7) { animation-delay: 1.8s; }
        .emoji-tile:nth-child(8) { animation-delay: 2.1s; }
        .emoji-tile:nth-child(9) { animation-delay: 2.4s; }

        @keyframes tileFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .auth-panel-title {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.8rem;
          color: white;
          margin: 0 0 12px;
          line-height: 1.2;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }

        .auth-panel-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
          margin: 0;
        }

        .auth-panel-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 6px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 28px;
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* Background orbs */}
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />
      <div className="auth-orb auth-orb-3" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 380, textAlign: "center", padding: "0 24px" }}>
        <div className="auth-panel-badge">
          ⚡ Real-time messaging
        </div>

        <div className="emoji-grid">
          {emojis.map((emoji, i) => (
            <div key={i} className="emoji-tile">{emoji}</div>
          ))}
        </div>

        <h2 className="auth-panel-title">{title}</h2>
        <p className="auth-panel-sub">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;