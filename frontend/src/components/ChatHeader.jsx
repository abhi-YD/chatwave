// import { X } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useChatStore } from "../store/useChatStore";

// const ChatHeader = () => {
//   const { selectedUser, setSelectedUser } = useChatStore();
//   const { onlineUsers } = useAuthStore();

//   return (
//     <div className="p-2.5 border-b border-base-300">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="avatar">
//             <div className="size-10 rounded-full relative">
//               <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
//             </div>
//           </div>

//           {/* User info */}
//           <div>
//             <h3 className="font-medium">{selectedUser.fullName}</h3>
//             <p className="text-sm text-base-content/70">
//               {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>

//         {/* Close button */}
//         <button onClick={() => setSelectedUser(null)}>
//           <X />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ChatHeader;


import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div style={{
      padding: "12px 16px",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1.5px solid rgba(139,92,246,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .chat-header-avatar-wrap {
          position: relative;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        }

        .chat-header-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid white;
          box-shadow: 0 2px 12px rgba(124,58,237,0.15);
        }

        .chat-header-avatar-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          z-index: -1;
          animation: ring-pulse 2.5s ease-in-out infinite;
        }

        @keyframes ring-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }

        .chat-header-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 11px;
          height: 11px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 8px rgba(34,197,94,0.7);
        }

        .chat-header-name {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: #1f2937;
          line-height: 1.2;
        }

        .chat-header-status {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 1px;
        }

        .chat-header-status.online {
          color: #22c55e;
          font-weight: 500;
        }

        .close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(239,68,68,0.2);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #f87171;
          transition: all 0.18s;
        }

        .close-btn:hover {
          background: #fee2e2;
          border-color: rgba(239,68,68,0.4);
          transform: rotate(90deg) scale(1.08);
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="chat-header-avatar-wrap">
          {isOnline && <div className="chat-header-avatar-ring" />}
          <img
            src={selectedUser.profilePic || "/avatar.png"}
            alt={selectedUser.fullName}
            className="chat-header-avatar"
          />
          {isOnline && <span className="chat-header-dot" />}
        </div>

        <div>
          <div className="chat-header-name">{selectedUser.fullName}</div>
          <div className={`chat-header-status ${isOnline ? "online" : ""}`}>
            {isOnline ? "● Active now" : "Offline"}
          </div>
        </div>
      </div>

      <button className="close-btn" onClick={() => setSelectedUser(null)}>
        <X size={16} />
      </button>
    </div>
  );
};

export default ChatHeader;