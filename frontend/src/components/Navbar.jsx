// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header
//       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">ChatWave</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User, Zap } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed w-full top-0 z-40" style={{
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(20px)",
      borderBottom: "1.5px solid rgba(139,92,246,0.13)",
      boxShadow: "0 2px 24px 0 rgba(139,92,246,0.08)"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

        .nav-logo-text {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.35rem;
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 60%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-logo-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(124,58,237,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .nav-logo-icon:hover {
          transform: rotate(-8deg) scale(1.08);
          box-shadow: 0 6px 20px rgba(124,58,237,0.45);
        }

        .nav-btn {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.18s ease;
          text-decoration: none;
          background: transparent;
          color: #4b5563;
        }

        .nav-btn:hover {
          background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(236,72,153,0.08));
          border-color: rgba(124,58,237,0.2);
          color: #7c3aed;
          transform: translateY(-1px);
        }

        .nav-btn-logout {
          color: #ef4444;
        }

        .nav-btn-logout:hover {
          background: rgba(239,68,68,0.07);
          border-color: rgba(239,68,68,0.2);
          color: #ef4444;
          transform: translateY(-1px);
        }

        .nav-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          background: linear-gradient(135deg, rgba(124,58,237,0.06), rgba(236,72,153,0.06));
          border-radius: 999px;
          padding: 4px;
          border: 1.5px solid rgba(124,58,237,0.1);
        }
      `}</style>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <div className="nav-logo-icon">
            <Zap className="w-5 h-5" style={{ color: "white" }} fill="white" />
          </div>
          <span className="nav-logo-text">ChatWave</span>
        </Link>

        {/* Nav Actions */}
        <div className="nav-pill">
          <Link to="/settings" className="nav-btn">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link to="/profile" className="nav-btn">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button className="nav-btn nav-btn-logout" onClick={logout}>
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;