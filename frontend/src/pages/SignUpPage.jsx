// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
// import { Link } from "react-router-dom";

// import AuthImagePattern from "../components/AuthImagePattern";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = validateForm();

//     if (success === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* LOGO */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
//               group-hover:bg-primary/20 transition-colors"
//               >
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">Get started with your free account</p>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="text"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="John Doe"
//                   value={formData.fullName}
//                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="size-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="size-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="size-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Already have an account?{" "}
//               <Link to="/login" className="link link-primary">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}

//       <AuthImagePattern
//         title="Join our community"
//         subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//       />
//     </div>
//   );
// };
// export default SignUpPage;


import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, User, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() === true) signup(formData);
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

        .signup-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 48px 24px;
          background: linear-gradient(160deg, #faf5ff 0%, #fdf2f8 60%, #fff7ed 100%);
        }

        .signup-card { width: 100%; max-width: 420px; }

        .signup-logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          text-align: center;
        }

        .signup-logo-icon {
          width: 60px;
          height: 60px;
          border-radius: 20px;
          background: linear-gradient(135deg, #ec4899, #f97316);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(236,72,153,0.35);
          animation: iconBob 3s ease-in-out infinite;
        }

        @keyframes iconBob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(5deg); }
        }

        .signup-title {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 1.9rem;
          background: linear-gradient(135deg, #ec4899, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1.1;
        }

        .signup-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: #9ca3af;
          margin: 0;
        }

        .form-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #6b7280;
          display: block;
          margin-bottom: 7px;
        }

        .form-group { margin-bottom: 18px; }

        .input-wrap { position: relative; }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #f9a8d4;
          pointer-events: none;
        }

        .form-input {
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.93rem;
          padding: 13px 14px 13px 42px;
          border-radius: 14px;
          border: 1.5px solid rgba(236,72,153,0.15);
          background: white;
          outline: none;
          color: #1f2937;
          transition: border-color 0.18s, box-shadow 0.18s;
          box-shadow: 0 2px 8px rgba(236,72,153,0.05);
          box-sizing: border-box;
        }

        .form-input::placeholder { color: #fbb6ce; }

        .form-input:focus {
          border-color: rgba(236,72,153,0.4);
          box-shadow: 0 0 0 4px rgba(236,72,153,0.08);
        }

        .eye-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #f9a8d4;
          padding: 0;
          display: flex;
          transition: color 0.15s;
        }

        .eye-btn:hover { color: #ec4899; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #ec4899, #f97316);
          color: white;
          font-family: 'Nunito', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 6px 20px rgba(236,72,153,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(236,72,153,0.45);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .signup-footer {
          text-align: center;
          margin-top: 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #9ca3af;
        }

        .signup-link {
          color: #ec4899;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.15s;
        }

        .signup-link:hover { color: #7c3aed; }

        .strength-bar {
          height: 4px;
          border-radius: 99px;
          margin-top: 8px;
          background: rgba(236,72,153,0.1);
          overflow: hidden;
        }

        .strength-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 0.3s, background 0.3s;
        }
      `}</style>

      {/* Left — Form */}
      <div className="signup-left">
        <div className="signup-card">
          <div className="signup-logo-wrap">
            <div className="signup-logo-icon">
              <Zap size={28} color="white" fill="white" />
            </div>
            <h1 className="signup-title">Join ChatWave! 🎉</h1>
            <p className="signup-sub">Create your free account today</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-wrap">
                <User size={17} className="input-icon" />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-wrap">
                <Mail size={17} className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrap">
                <Lock size={17} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Min. 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
              {/* Password strength bar */}
              {formData.password && (
                <div className="strength-bar">
                  <div className="strength-fill" style={{
                    width: formData.password.length >= 10 ? "100%" : formData.password.length >= 6 ? "60%" : "25%",
                    background: formData.password.length >= 10 ? "linear-gradient(90deg,#22c55e,#16a34a)" : formData.password.length >= 6 ? "linear-gradient(90deg,#f97316,#fbbf24)" : "#ef4444"
                  }} />
                </div>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={isSigningUp}>
              {isSigningUp ? (
                <><Loader2 size={18} className="animate-spin" /> Creating account...</>
              ) : (
                "Create Account 🚀"
              )}
            </button>
          </form>

          <div className="signup-footer">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">Sign in →</Link>
          </div>
        </div>
      </div>

      {/* Right — Pattern */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;