// import { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { useAuthStore } from "../store/useAuthStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";

// const Sidebar = () => {
//   const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

//   const { onlineUsers } = useAuthStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   const filteredUsers = showOnlineOnly
//     ? users.filter((user) => onlineUsers.includes(user._id))
//     : users;

//   if (isUsersLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="size-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//         {/* TODO: Online filter toggle */}
//         <div className="mt-3 hidden lg:flex items-center gap-2">
//           <label className="cursor-pointer flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={showOnlineOnly}
//               onChange={(e) => setShowOnlineOnly(e.target.checked)}
//               className="checkbox checkbox-sm"
//             />
//             <span className="text-sm">Show online only</span>
//           </label>
//           <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
//         </div>
//       </div>

//       <div className="overflow-y-auto w-full py-3">
//         {filteredUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`
//               w-full p-3 flex items-center gap-3
//               hover:bg-base-300 transition-colors
//               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
//             `}
//           >
//             <div className="relative mx-auto lg:mx-0">
//               <img
//                 src={user.profilePic || "/avatar.png"}
//                 alt={user.name}
//                 className="size-12 object-cover rounded-full"
//               />
//               {onlineUsers.includes(user._id) && (
//                 <span
//                   className="absolute bottom-0 right-0 size-3 bg-green-500 
//                   rounded-full ring-2 ring-zinc-900"
//                 />
//               )}
//             </div>

//             {/* User info - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0">
//               <div className="font-medium truncate">{user.fullName}</div>
//               <div className="text-sm text-zinc-400">
//                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//               </div>
//             </div>
//           </button>
//         ))}

//         {filteredUsers.length === 0 && (
//           <div className="text-center text-zinc-500 py-4">No online users</div>
//         )}
//       </div>
//     </aside>
//   );
// };
// export default Sidebar;


import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Sparkles, Wifi } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => { getUsers(); }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside style={{
      height: "100%",
      width: "clamp(72px, 20vw, 288px)",
      background: "linear-gradient(180deg, #faf5ff 0%, #fdf2f8 100%)",
      borderRight: "1.5px solid rgba(139,92,246,0.1)",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.2s",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .sidebar-header {
          padding: 20px 16px 14px;
          border-bottom: 1.5px solid rgba(139,92,246,0.1);
        }

        .sidebar-title {
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 1.05rem;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .online-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          color: #7c3aed;
          background: rgba(124,58,237,0.08);
          border-radius: 999px;
          padding: 3px 10px;
          border: 1px solid rgba(124,58,237,0.15);
          margin-top: 10px;
          cursor: pointer;
          transition: all 0.18s;
          width: fit-content;
        }

        .online-badge:hover {
          background: rgba(124,58,237,0.14);
        }

        .online-badge input {
          accent-color: #7c3aed;
          width: 13px;
          height: 13px;
        }

        .user-btn {
          width: 100%;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 14px;
          margin: 3px 8px;
          width: calc(100% - 16px);
          transition: all 0.18s ease;
          text-align: left;
          position: relative;
        }

        .user-btn:hover {
          background: rgba(124,58,237,0.07);
          transform: translateX(3px);
        }

        .user-btn.active {
          background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(236,72,153,0.08));
          box-shadow: inset 0 0 0 1.5px rgba(124,58,237,0.2);
        }

        .avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .avatar-img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .user-btn:hover .avatar-img {
          transform: scale(1.06);
        }

        .online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 11px;
          height: 11px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 0 6px rgba(34,197,94,0.6);
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 4px rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 10px rgba(34,197,94,0.9); }
        }

        .user-name {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          color: #1f2937;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-status {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 1px;
        }

        .user-status.online {
          color: #22c55e;
          font-weight: 500;
        }

        .empty-state {
          text-align: center;
          padding: 32px 16px;
          color: #c4b5fd;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
        }
      `}</style>

      {/* Header */}
      <div className="sidebar-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Sparkles style={{ width: 18, height: 18, color: "#7c3aed" }} />
          <span className="sidebar-title hidden lg:block">Contacts</span>
        </div>

        <label className="online-badge hidden lg:flex">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
          />
          <Wifi style={{ width: 12, height: 12 }} />
          Online only ({onlineUsers.length - 1})
        </label>
      </div>

      {/* User List */}
      <div style={{ overflowY: "auto", flex: 1, paddingTop: 8, paddingBottom: 8 }}>
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`user-btn ${selectedUser?._id === user._id ? "active" : ""}`}
          >
            <div className="avatar-wrap">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.fullName}
                className="avatar-img"
              />
              {onlineUsers.includes(user._id) && <span className="online-dot" />}
            </div>

            <div className="hidden lg:block" style={{ minWidth: 0, flex: 1 }}>
              <div className="user-name">{user.fullName}</div>
              <div className={`user-status ${onlineUsers.includes(user._id) ? "online" : ""}`}>
                {onlineUsers.includes(user._id) ? "● Active now" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="empty-state">
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🌙</div>
            No online users
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;