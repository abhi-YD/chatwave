// import { useChatStore } from "../store/useChatStore";
// import { useEffect, useRef } from "react";

// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const {
//     messages,
//     getMessages,
//     isMessagesLoading,
//     selectedUser,
//     subscribeToMessages,
//     unsubscribeFromMessages,
//   } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     getMessages(selectedUser._id);

//     subscribeToMessages();

//     return () => unsubscribeFromMessages();
//   }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

//   useEffect(() => {
//     if (messageEndRef.current && messages) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   if (isMessagesLoading) {
//     return (
//       <div className="flex-1 flex flex-col overflow-auto">
//         <ChatHeader />
//         <MessageSkeleton />
//         <MessageInput />
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 flex flex-col overflow-auto">
//       <ChatHeader />

//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {messages.map((message) => (
//           <div
//             key={message._id}
//             className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
//             ref={messageEndRef}
//           >
//             <div className=" chat-image avatar">
//               <div className="size-10 rounded-full border">
//                 <img
//                   src={
//                     message.senderId === authUser._id
//                       ? authUser.profilePic || "/avatar.png"
//                       : selectedUser.profilePic || "/avatar.png"
//                   }
//                   alt="profile pic"
//                 />
//               </div>
//             </div>
//             <div className="chat-header mb-1">
//               <time className="text-xs opacity-50 ml-1">
//                 {formatMessageTime(message.createdAt)}
//               </time>
//             </div>
//             <div className="chat-bubble flex flex-col">
//               {message.image && (
//                 <img
//                   src={message.image}
//                   alt="Attachment"
//                   className="sm:max-w-[200px] rounded-md mb-2"
//                 />
//               )}
//               {message.text && <p>{message.text}</p>}
//             </div>
//           </div>
//         ))}
//       </div>

//       <MessageInput />
//     </div>
//   );
// };
// export default ChatContainer;


import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages, getMessages, isMessagesLoading,
    selectedUser, subscribeToMessages, unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", background: "linear-gradient(160deg, #faf5ff 0%, #fdf2f8 50%, #fff7ed 100%)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .chat-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-scroll::-webkit-scrollbar { width: 5px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.2); border-radius: 99px; }

        .msg-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          animation: msgIn 0.22s ease;
        }

        @keyframes msgIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .msg-row.sent { flex-direction: row-reverse; }

        .msg-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .msg-content { max-width: 65%; display: flex; flex-direction: column; gap: 3px; }
        .msg-row.sent .msg-content { align-items: flex-end; }

        .msg-time {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          color: #9ca3af;
          padding: 0 6px;
        }

        .msg-bubble {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          line-height: 1.5;
          padding: 10px 15px;
          border-radius: 18px;
          word-break: break-word;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: transform 0.15s;
          position: relative;
        }

        .msg-bubble:hover { transform: scale(1.015); }

        .msg-bubble.received {
          background: white;
          color: #1f2937;
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 14px rgba(124,58,237,0.08);
        }

        .msg-bubble.sent {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: white;
          border-bottom-right-radius: 4px;
          box-shadow: 0 4px 16px rgba(124,58,237,0.35);
        }

        .msg-bubble img {
          max-width: 220px;
          border-radius: 12px;
          display: block;
        }

        .date-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 8px 0;
        }

        .date-divider span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          color: #a78bfa;
          font-weight: 500;
          white-space: nowrap;
          background: rgba(167,139,250,0.1);
          border-radius: 99px;
          padding: 3px 12px;
          border: 1px solid rgba(167,139,250,0.2);
        }

        .date-divider::before, .date-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(167,139,250,0.2);
        }
      `}</style>

      <ChatHeader />

      <div className="chat-scroll">
        {messages.map((message, i) => {
          const isSent = message.senderId === authUser._id;
          return (
            <div key={message._id}>
              <div className={`msg-row ${isSent ? "sent" : ""}`} ref={i === messages.length - 1 ? messageEndRef : null}>
                <img
                  className="msg-avatar"
                  src={isSent ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"}
                  alt="avatar"
                />
                <div className="msg-content">
                  <span className="msg-time">{formatMessageTime(message.createdAt)}</span>
                  <div className={`msg-bubble ${isSent ? "sent" : "received"}`}>
                    {message.image && (
                      <img src={message.image} alt="Attachment" style={{ marginBottom: message.text ? "8px" : 0 }} />
                    )}
                    {message.text && <p style={{ margin: 0 }}>{message.text}</p>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;