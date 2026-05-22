import React from "react";

type AddNotesProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddNotes({ isOpen, onClose }: AddNotesProps) {
  const [noteSource, setNoteSource] = React.useState("");
  const [personality, setPersonality] = React.useState("");
  const [interests, setInterests] = React.useState("");
  const [delighters, setDelighters] = React.useState("");
  const [concerns, setConcerns] = React.useState("");
  const [remember, setRemember] = React.useState("");

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      id="radix-:r4b:"
      aria-describedby="radix-:r4d:"
      aria-labelledby="radix-:r4c:"
      data-state="open"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-0 w-full max-w-2xl z-50 max-h-[85vh] overflow-hidden flex flex-col"
      tabIndex={-1}
      style={{ pointerEvents: "auto" }}
    >
      <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-between">
        <div>
          <h2
            id="radix-:r4c:"
            className="text-base font-semibold text-gray-900"
          >
            Thêm ghi nhận mới
          </h2>

          <p className="text-xs text-gray-600 mt-0.5">
            Ghi lại những insights về khách hàng sau lần tương tác này
          </p>
        </div>

        <button
          className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-white/50 transition-colors"
          type="button"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x w-4 h-4"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto flex-1 p-4">
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <label
              data-slot="label"
              className="items-center gap-2 select-none text-sm font-semibold text-blue-900 block mb-2"
              htmlFor="source"
            >
              Bạn tổng hợp được từ
            </label>

            <select
              id="source"
              value={noteSource}
              onChange={(e) => setNoteSource(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-blue-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            >
              <option value="">-- Chọn nguồn thông tin --</option>
              <option value="khi khách đặt chỗ">📅 Khi khách đặt chỗ</option>

              <option value="khi hỏi trải nghiệm">
                ⭐ Khi hỏi trải nghiệm
              </option>

              <option value="khi hỏi thăm định kì">
                ⏰ Khi hỏi thăm định kì
              </option>

              <option value="quan sát đời sống">👁️ Quan sát đời sống</option>
            </select>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user w-4 h-4 text-purple-600"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <label
                  className="text-sm font-semibold text-gray-900 block mb-1.5"
                  htmlFor="personality"
                >
                  Bạn thấy khách hàng là người như nào?
                </label>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-white border border-gray-200 rounded focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
                    <input
                      type="text"
                      id="personality"
                      placeholder="VD: thân thiện, marketer, quyết đoán... (Enter để tạo tag)"
                      maxLength={50}
                      className="flex-1 min-w-[100px] outline-none bg-transparent text-xs placeholder:text-gray-400"
                      value={personality}
                      onChange={(e) => setPersonality(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-4 h-4 text-blue-600"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <label
                  className="text-sm font-semibold text-gray-900 block mb-1.5"
                  htmlFor="interests"
                >
                  Chủ đề yêu thích của khách là về gì?
                </label>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-white border border-gray-200 rounded focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
                    <input
                      type="text"
                      id="interests"
                      placeholder="VD: nuôi cún, du lịch, cafe... (Enter để tạo tag)"
                      maxLength={50}
                      className="flex-1 min-w-[100px] outline-none bg-transparent text-xs placeholder:text-gray-400"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart w-4 h-4 text-green-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <label
                  className="text-sm font-semibold text-gray-900 block mb-1.5"
                  htmlFor="delighters"
                >
                  Điều gì làm khách thấy thoải mái, hài lòng, tích cực?
                </label>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-white border border-gray-200 rounded focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
                    <input
                      type="text"
                      id="delighters"
                      placeholder="VD: phục vụ nhanh, không gian yên tĩnh..."
                      maxLength={50}
                      className="flex-1 min-w-[100px] outline-none bg-transparent text-xs placeholder:text-gray-400"
                      value={delighters}
                      onChange={(e) => setDelighters(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-alert w-4 h-4 text-orange-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <label
                  className="text-sm font-semibold text-gray-900 block mb-1.5"
                  htmlFor="concerns"
                >
                  Điều gì làm khách chưa hài lòng hay khó chịu?
                </label>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-white border border-gray-200 rounded focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
                    <input
                      type="text"
                      id="concerns"
                      placeholder="VD: chờ lâu, bàn gần bếp..."
                      maxLength={50}
                      className="flex-1 min-w-[100px] outline-none bg-transparent text-xs placeholder:text-gray-400"
                      value={concerns}
                      onChange={(e) => setConcerns(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb w-4 h-4 text-yellow-600"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <label
                  className="text-sm font-semibold text-gray-900 block mb-1.5"
                  htmlFor="remember"
                >
                  Nếu gặp lại khách, điều gì phải nhớ đầu tiên?
                </label>

                <div className="w-full">
                  <div className="flex flex-wrap gap-1.5 p-2 min-h-[42px] bg-white border border-gray-200 rounded focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-100 transition-all">
                    <input
                      type="text"
                      id="remember"
                      placeholder="VD: luôn đặt VIP room, ghét ồn..."
                      maxLength={50}
                      className="flex-1 min-w-[100px] outline-none bg-transparent text-xs placeholder:text-gray-400"
                      value={remember}
                      onChange={(e) => setRemember(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex justify-end gap-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
          type="button"
          onClick={onClose}
        >
          Hủy
        </button>

        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3"
          type="button"
        >
          Lưu ghi nhận
        </button>
      </div>
    </div>
  );
}
