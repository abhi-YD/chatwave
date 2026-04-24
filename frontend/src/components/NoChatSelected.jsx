// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;



const NoChatSelected = () => {
  return (
    <div style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

        .no-chat-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.35;
          animation: drift 8s ease-in-out infinite;
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -15px) scale(1.05); }
          66% { transform: translate(-10px, 20px) scale(0.97); }
        }

        .no-chat-card {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 48px 40px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          border: 1.5px solid rgba(139,92,246,0.12);
          box-shadow: 0 8px 40px rgba(124,58,237,0.08);
          max-width: 380px;
          animation: cardIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .emoji-stack {
          display: flex;
          justify-content: center;
          gap: -8px;
          margin-bottom: 20px;
        }

        .emoji-bubble {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 8px 24px rgba(124,58,237,0.3);
          animation: float 3s ease-in-out infinite;
        }

        .emoji-bubble:nth-child(2) { animation-delay: 0.4s; }
        .emoji-bubble:nth-child(3) { animation-delay: 0.8s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .no-chat-title {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.6rem;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 60%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        .no-chat-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: #9ca3af;
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .no-chat-arrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #a78bfa;
          background: rgba(124,58,237,0.07);
          border: 1.5px dashed rgba(124,58,237,0.25);
          border-radius: 999px;
          padding: 8px 20px;
          animation: blink-border 2s ease-in-out infinite;
        }

        @keyframes blink-border {
          0%, 100% { border-color: rgba(124,58,237,0.25); }
          50% { border-color: rgba(124,58,237,0.55); }
        }

        .dot-row {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 20px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: dot-bounce 1.4s ease-in-out infinite;
        }

        .dot:nth-child(1) { background: #7c3aed; animation-delay: 0s; }
        .dot:nth-child(2) { background: #ec4899; animation-delay: 0.2s; }
        .dot:nth-child(3) { background: #f97316; animation-delay: 0.4s; }

        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>

      {/* Background Orbs */}
      <div className="no-chat-orb" style={{ width: 300, height: 300, background: "#c4b5fd", top: "10%", left: "5%" }} />
      <div className="no-chat-orb" style={{ width: 200, height: 200, background: "#fbcfe8", bottom: "15%", right: "8%", animationDelay: "3s" }} />
      <div className="no-chat-orb" style={{ width: 150, height: 150, background: "#fed7aa", top: "60%", left: "15%", animationDelay: "5s" }} />

      <div className="no-chat-card">
        {/* Floating Emoji Bubbles */}
        <div className="emoji-stack">
          <div className="emoji-bubble">💬</div>
        </div>

        <h2 className="no-chat-title">Welcome to ChatWave!</h2>
        <p className="no-chat-sub">
          Pick a friend from the sidebar<br />and start the conversation 🎉
        </p>

        <div className="no-chat-arrow">
          👈 Choose someone to chat with
        </div>

        <div className="dot-row">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;