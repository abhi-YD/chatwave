// import { useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { Image, Send, X } from "lucide-react";
// import toast from "react-hot-toast";

// const MessageInput = () => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const { sendMessage } = useChatStore();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.startsWith("image/")) {
//       toast.error("Please select an image file");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() && !imagePreview) return;

//     try {
//       await sendMessage({
//         text: text.trim(),
//         image: imagePreview,
//       });

//       // Clear form
//       setText("");
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };

//   return (
//     <div className="p-4 w-full">
//       {imagePreview && (
//         <div className="mb-3 flex items-center gap-2">
//           <div className="relative">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
//             />
//             <button
//               onClick={removeImage}
//               className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
//               flex items-center justify-center"
//               type="button"
//             >
//               <X className="size-3" />
//             </button>
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSendMessage} className="flex items-center gap-2">
//         <div className="flex-1 flex gap-2">
//           <input
//             type="text"
//             className="w-full input input-bordered rounded-lg input-sm sm:input-md"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//           />

//           <button
//             type="button"
//             className={`hidden sm:flex btn btn-circle
//                      ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image size={20} />
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-sm btn-circle"
//           disabled={!text.trim() && !imagePreview}
//         >
//           <Send size={22} />
//         </button>
//       </form>
//     </div>
//   );
// };
// export default MessageInput;


import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { ImagePlus, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    try {
      await sendMessage({ text: text.trim(), image: imagePreview });
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const canSend = text.trim() || imagePreview;

  return (
    <div style={{
      padding: "14px 16px",
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(12px)",
      borderTop: "1.5px solid rgba(139,92,246,0.1)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');

        .input-wrap {
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }

        .msg-input-field {
          flex: 1;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1.5px solid rgba(124,58,237,0.18);
          background: white;
          outline: none;
          color: #1f2937;
          transition: border-color 0.18s, box-shadow 0.18s;
          box-shadow: 0 2px 10px rgba(124,58,237,0.06);
          resize: none;
          line-height: 1.4;
        }

        .msg-input-field::placeholder { color: #c4b5fd; }

        .msg-input-field:focus {
          border-color: rgba(124,58,237,0.45);
          box-shadow: 0 0 0 4px rgba(124,58,237,0.08), 0 2px 10px rgba(124,58,237,0.1);
        }

        .attach-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(124,58,237,0.2);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
          color: #a78bfa;
          flex-shrink: 0;
        }

        .attach-btn:hover {
          background: rgba(124,58,237,0.07);
          border-color: rgba(124,58,237,0.4);
          color: #7c3aed;
          transform: scale(1.06);
        }

        .attach-btn.has-image {
          background: rgba(124,58,237,0.1);
          border-color: rgba(124,58,237,0.4);
          color: #7c3aed;
        }

        .send-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(124,58,237,0.35);
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 6px 20px rgba(124,58,237,0.5);
        }

        .send-btn:disabled {
          background: linear-gradient(135deg, #ddd6fe, #fbcfe8);
          box-shadow: none;
          cursor: not-allowed;
        }

        .img-preview-wrap {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: rgba(124,58,237,0.05);
          border-radius: 14px;
          border: 1.5px dashed rgba(124,58,237,0.2);
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .img-preview-wrap img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 10px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .img-remove-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 1.5px solid rgba(239,68,68,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ef4444;
          transition: all 0.15s;
          padding: 0;
        }

        .img-remove-btn:hover {
          background: #fee2e2;
          transform: scale(1.1);
        }

        .img-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: #a78bfa;
        }
      `}</style>

      {/* Image Preview */}
      {imagePreview && (
        <div className="img-preview-wrap">
          <img src={imagePreview} alt="Preview" />
          <div>
            <div className="img-label">📎 Image attached</div>
          </div>
          <button className="img-remove-btn" onClick={removeImage} type="button">
            <X size={13} />
          </button>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="input-wrap">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        <button
          type="button"
          className={`attach-btn ${imagePreview ? "has-image" : ""}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <ImagePlus size={20} />
        </button>

        <input
          type="text"
          className="msg-input-field"
          placeholder="Type something fun... ✨"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit" className="send-btn" disabled={!canSend}>
          <Send size={19} style={{ transform: "translateX(1px)" }} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;