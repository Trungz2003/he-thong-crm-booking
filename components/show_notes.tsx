import React from "react";

type ViewNotesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ViewNotesModal({
  isOpen,
  onClose,
}: ViewNotesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div
        role="dialog"
        id="radix-:r48:"
        aria-describedby="radix-:r4a:"
        aria-labelledby="radix-:r49:"
        data-state="open"
        className="bg-white rounded-xl shadow-2xl p-0 w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col"
        tabIndex={-1}
        style={{ pointerEvents: "auto" }}
      >
        <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-between">
          <div>
            <h2
              id="radix-:r49:"
              className="text-base font-semibold text-gray-900"
            >
              Ghi nhận ngày 28/03/2026 16:00
            </h2>

            <p className="text-xs text-gray-600 mt-0.5">
              Bởi Lan Phương - CSKH
              <span className="ml-2 inline-flex items-center gap-1 text-blue-600">
                •
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
                  className="lucide lucide-clock w-3.5 h-3.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>khi hỏi thăm định kì</span>
              </span>
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
            {/* Personality */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
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
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Bạn thấy khách hàng là người như nào?
                  </label>

                  <div className="bg-gray-50 rounded p-2.5 min-h-[42px]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
                        quen thuộc
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
                        trung thành
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
                        khó tính nhưng công bằng
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
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
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Chủ đề yêu thích của khách là về gì?
                  </label>

                  <div className="bg-gray-50 rounded p-2.5 min-h-[42px]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                        fine dining
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                        wine collection
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                        cigar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Delighters */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Điều gì làm khách thấy thoải mái, hài lòng, tích cực?
                  </label>

                  <div className="bg-gray-50 rounded p-2.5 min-h-[42px]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
                        consistency
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
                        quality không đổi
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200">
                        được nhận diện
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concerns */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
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
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Điều gì làm khách chưa hài lòng hay khó chịu?
                  </label>

                  <div className="bg-gray-50 rounded p-2.5 min-h-[42px]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                        một lần món hơi mặn
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                        đã phản hồi và điều chỉnh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remember */}
            <div className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
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
                  <label className="text-sm font-semibold text-gray-900 block mb-1.5">
                    Nếu gặp lại khách, điều gì phải nhớ đầu tiên?
                  </label>

                  <div className="bg-gray-50 rounded p-2.5 min-h-[42px]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200">
                        luôn đặt trước
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200">
                        thích bàn quen thuộc
                      </span>

                      <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200">
                        staff quen biết
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground h-8 rounded-md gap-1.5 px-3"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
