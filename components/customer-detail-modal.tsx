"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddNotes from "./add_notes";
import { useState } from "react";
import ViewNotesModal from "./show_notes";
import { Customer } from "@/interface/customer";
import { cn, getAge, getLastOrderText, getLifetime } from "@/lib/utils";
import { tierConfig } from "@/hooks/tierConfig";

interface CustomerDetailDrawerProps {
  isOpen: boolean;
  customer: Customer;
  onClose: () => void;
}

export default function CustomerDetailDrawer({
  isOpen,
  customer,
  onClose,
}: CustomerDetailDrawerProps) {
  if (!customer) return null;

  const [isOpenAddNotes, setIsOpenAddNotes] = useState(false);
  const [isOpenViewNotes, setIsOpenViewNotes] = useState(false);
  const tier = tierConfig[customer.tier];
  const Icon = tier.icon;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-screen w-full lg:max-w-1/2 bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-linear-to-r from-slate-700 to-slate-800 border-b border-slate-600 z-10 px-5 py-3 flex justify-between text-white">
          <h2 className="text-xl font-bold">Hộ số khách hàng #{customer.id}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-foreground transition p-1 hover:bg-gray-100 rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Section 1: Basic Info & Credit */}
          <div className="border border-gray-300 rounded-lg bg-gray-50">
            <div>
              {/* Header */}
              <div className="bg-slate-100 border-b border-gray-300 px-3 py-1.5">
                <h1 className="text-sm font-semibold text-gray-700">
                  THÔNG TIN CỎ BẢN & SỨC CHỈ TIÊU
                </h1>
              </div>

              {/* Main Card */}
              <div className="p-3 grid grid-cols-2 gap-4">
                {/* Left Column - Profile */}
                <div className="space-y-1 ">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2 ml-2">
                      <h2 className="text-sm font-semibold text-gray-900">
                        {customer.name}
                      </h2>
                      <p className="text-gray-500 text-xs mb-2">
                        {customer.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="xl:flex items-center gap-x-15 block">
                        <div className="flex items-center gap-2">
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
                            className="lucide lucide-user w-3.5 h-3.5 text-gray-500"
                            data-fg-izr40="2018.73:2018.33227:/src/app/components/CustomerProfile360.tsx:258:23:7733:46:e:User::::::wpV"
                            data-fgid-izr40=":r30q:"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <span>
                            {getAge(customer.birthday)} tuổi, {customer.gender}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
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
                            className="lucide lucide-cake w-3.5 h-3.5 text-pink-500"
                            data-fg-izr46="2018.73:2018.33227:/src/app/components/CustomerProfile360.tsx:263:21:8010:46:e:Cake::::::Co1K"
                            data-fgid-izr46=":r30t:"
                          >
                            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"></path>
                            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"></path>
                            <path d="M2 21h20"></path>
                            <path d="M7 8v3"></path>
                            <path d="M12 8v3"></path>
                            <path d="M17 8v3"></path>
                            <path d="M7 4h.01"></path>
                            <path d="M12 4h.01"></path>
                            <path d="M17 4h.01"></path>
                          </svg>
                          <span>{customer.birthday}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
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
                          className="lucide lucide-briefcase w-3.5 h-3.5 text-blue-600"
                          data-fg-izr51="2018.73:2018.33227:/src/app/components/CustomerProfile360.tsx:268:23:8302:51:e:Briefcase::::::uh8"
                          data-fgid-izr51=":r310:"
                        >
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                          <rect
                            width="20"
                            height="14"
                            x="2"
                            y="6"
                            rx="2"
                          ></rect>
                        </svg>
                        <span>{customer.occupation}</span>
                      </div>
                      <div className="flex items-center gap-2">
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
                          className="lucide lucide-building2 lucide-building-2 w-3.5 h-3.5 text-gray-600"
                          data-fg-izr56="2018.73:2018.33227:/src/app/components/CustomerProfile360.tsx:274:23:8623:51:e:Building2::::::DOEu"
                          data-fgid-izr56=":r313:"
                        >
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                          <path d="M10 6h4"></path>
                          <path d="M10 10h4"></path>
                          <path d="M10 14h4"></path>
                          <path d="M10 18h4"></path>
                        </svg>
                        <span>{customer.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
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
                          className="lucide lucide-map-pin w-3.5 h-3.5 text-red-600"
                          data-fg-izr61="2018.73:2018.33227:/src/app/components/CustomerProfile360.tsx:280:23:8938:47:e:MapPin::::::BveZ"
                          data-fgid-izr61=":r316:"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{customer.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Stats & Badge */}
                <div className="space-y-1.5">
                  {/* Stats Labels & Values */}
                  <div>
                    <div className="flex-1">
                      <div className="space-y-2 w-full border-b border-gray-200 pb-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-600">Hạng khách hàng</span>
                          <div className="flex flex-col items-center pt-1">
                            <div
                              className={cn(
                                "inline-flex items-center justify-center w-16 h-16 rounded-full border-[3px] font-semibold",
                                tier.className,
                              )}
                            >
                              <Icon
                                className={cn("w-8 h-8", tier.iconClassName)}
                              />
                            </div>

                            <span className="text-sm font-semibold">
                              {tier.label}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Diễm Credit</span>
                          <span className="font-semibold text-green-600">
                            {customer.credit} TGC
                          </span>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Bill TB</span>
                          <span className="font-semibold text-gray-900">
                            {customer.averageBill.toLocaleString("vi-VN")} đ
                          </span>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Tần suất</span>
                          <span className="font-semibold text-gray-900">
                            {customer.frequency} lần/tháng
                          </span>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Vòng đời</span>
                          <span className="font-semibold text-gray-900">
                            {getLifetime(customer.firstOrder)}
                          </span>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Tổng đơn</span>
                          <span className="font-semibold text-gray-900">
                            {customer.orderCount} booking
                          </span>
                        </div>

                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Lần đặt cuối</span>
                          <span className="font-semibold text-orange-600">
                            {getLastOrderText(customer.lastOrder)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex px-10 justify-between items-center mt-3">
                      <div className="text-center">
                        <div className="text-xs text-gray-600">Hủy</div>
                        <div className="text-sm font-semibold text-red-600 mt-1">
                          {customer.cancelRate}%
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-xs text-gray-600">Quay lại</div>
                        <div className="text-sm font-semibold text-green-600 mt-1">
                          {customer.returnRate}%
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-xs text-gray-600">Giới thiệu</div>
                        <div className="text-sm font-semibold text-green-600 mt-1">
                          {customer.referralCount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Engagement Stats */}
          <div className="border border-gray-300 rounded-lg bg-gray-50">
            <div className="bg-blue-50 border-b border-blue-200 px-3 py-1.5">
              <h3 className="text-xs font-bold text-blue-800 uppercase tracking-wide">
                Thông tin hệ thống phân tích
              </h3>
            </div>
            <div className="p-3 grid grid-cols-3 gap-3">
              {/* Hành vi đặt chỗ */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-700 mb-1">
                  Hành vi đặt chỗ
                </div>

                <div className="space-y-1">
                  <div>
                    <div className="text-[10px] text-gray-500">Khung giờ</div>

                    <div className="flex flex-wrap gap-1">
                      {customer.timePreference && (
                        <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded border border-blue-200">
                          {customer.timePreference}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Loại hình</div>

                    <div className="flex flex-wrap gap-1">
                      {customer.venueTypes?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] rounded border border-indigo-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Số người</div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.groupSize}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Thiết bị</div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.device}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Đặt trước</div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.advanceBooking}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sở thích */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-700 mb-1">
                  Sở thích & Tâm lý
                </div>

                <div className="space-y-1">
                  <div>
                    <div className="text-[10px] text-gray-500">Mục đích</div>

                    <div className="flex flex-wrap gap-1">
                      {customer.bookingPurpose?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded border border-purple-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">
                      Phong cách yêu thích
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {customer.preferredVibe?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-pink-100 text-pink-700 text-[10px] rounded border border-pink-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">
                      Món ăn yêu thích
                    </div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.favoriteFoods?.join(", ")}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">
                      Điểm bán yêu thích
                    </div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.favoriteRestaurant}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Yêu cầu</div>

                    <div className="flex flex-wrap gap-1">
                      {customer.requirements?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] rounded border border-amber-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phân nhóm */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-gray-700 mb-1">
                  Phân nhóm tự động
                </div>

                <div className="space-y-1.5">
                  <div className="px-2 py-1.5 bg-purple-100 text-purple-700 border border-purple-300 rounded-lg">
                    <div className="text-xs font-bold">
                      {customer.behaviorGroup}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500">Đặt cho</div>

                    <div className="text-xs font-semibold text-gray-800">
                      {customer.bookingFor}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500 mb-1">
                      Must-have
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {customer.mustHaves?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] rounded border border-rose-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500 mb-1">
                      Pain points
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {customer.concerns?.map((item, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] rounded border border-orange-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Metrics Grid
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Hồ sơ hiểu khách hàng
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Timeline ghi nhận insights qua từng lần tương tác
                </p>
              </div>
              <button
                data-slot="button"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 gap-2"
                onClick={() => setIsOpenAddNotes(true)}
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
                  className="lucide lucide-plus w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Thêm ghi nhận mới
              </button>
            </div>
            <div className="relative">
              <div className="relative mb-8">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-blue-200 via-purple-200 to-red-200"></div>
                <div className="flex gap-8 overflow-x-auto pb-3 pt-1">
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-30"
                      title="Nhận diện"
                      style={{
                        backgroundColor: "rgb(217, 217, 217)",
                        color: "rgb(55, 65, 81)",
                      }}
                    >
                      1
                    </div>

                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-40"
                        style={{
                          color: "rgb(217, 217, 217)",
                        }}
                      >
                        Nhận diện
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-30"
                      title="Kết nối"
                      style={{
                        backgroundColor: "rgb(183, 215, 242)",
                        color: "rgb(30, 64, 175)",
                      }}
                    >
                      2
                    </div>
                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-40"
                        style={{
                          color: "rgb(183, 215, 242)",
                        }}
                      >
                        Kết nối
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-30"
                      title="Thấu hiểu"
                      style={{
                        backgroundColor: "rgb(77, 163, 255)",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      3
                    </div>
                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-40"
                        style={{
                          color: "rgb(77, 163, 255)",
                        }}
                      >
                        Thấu hiểu
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-100"
                      title="Tin cậy"
                      style={{
                        backgroundColor: "rgb(198, 164, 255)",
                        color: "rgb(88, 28, 135)",
                      }}
                    >
                      4
                    </div>
                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-100"
                        style={{
                          color: "rgb(198, 164, 255)",
                        }}
                      >
                        Tin cậy
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        1 ghi nhận
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-100"
                      title="Gắn bó"
                      style={{
                        backgroundColor: "rgb(255, 178, 107)",
                        color: "rgb(124, 45, 18)",
                      }}
                    >
                      5
                    </div>
                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-100"
                        style={{
                          color: "rgb(255, 178, 107)",
                        }}
                      >
                        Gắn bó
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">
                        2 ghi nhận
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white font-bold text-sm transition-all duration-200 opacity-30"
                      title="Tri kỷ"
                      style={{
                        backgroundColor: "rgb(122, 30, 58)",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      6
                    </div>
                    <div className="mt-2 text-center w-full">
                      <div
                        className="text-xs font-semibold whitespace-nowrap opacity-40"
                        style={{
                          color: "rgb(122, 30, 58)",
                        }}
                      >
                        Tri kỷ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200"></div>
                <div className="flex gap-8 overflow-x-auto pb-3 pt-1">
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center"></div>
                  </div>
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center"></div>
                  </div>
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center"></div>
                  </div>
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center">
                      <div className="flex flex-col items-center">
                        <button
                          className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-3 border-white cursor-pointer"
                          onClick={() => setIsOpenViewNotes(true)}
                        >
                          TH
                        </button>
                        <div className="mt-2 text-center">
                          <div className="text-[10px] font-medium text-gray-900">
                            21/03/2026 11:00
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5 max-w-[80px] truncate">
                            Thu Hà - CSKH
                          </div>
                        </div>
                        <div className="mt-1.5 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-medium rounded-full">
                          #2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center">
                      {/* <div className="flex flex-col items-center">
                        <button className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-3 border-white">
                          HG
                        </button>
                        <div className="mt-2 text-center">
                          <div className="text-[10px] font-medium text-gray-900">
                            29/03/2026 09:15
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5 max-w-[80px] truncate">
                            Hương Giang - CSKH
                          </div>
                        </div>
                        <div className="mt-1.5 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-medium rounded-full">
                          #1
                        </div>
                      </div> */}
          {/* <div className="flex flex-col items-center">
                        <button className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-3 border-white">
                          TH
                        </button>
                        <div className="mt-2 text-center">
                          <div className="text-[10px] font-medium text-gray-900">
                            21/03/2026 11:00
                          </div>
                          <div className="text-[10px] text-gray-500 mt-0.5 max-w-[80px] truncate">
                            Thu Hà - CSKH
                          </div>
                        </div>
                        <div className="mt-1.5 px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-medium rounded-full">
                          #2
                        </div>
                      </div> 
                    </div>
                  </div>
                  <div
                    style={{
                      minWidth: "80px",
                      flexShrink: 0,
                    }}
                  >
                    <div className="flex flex-col gap-3 items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Section 4: Timeline */}
          <div className="border border-gray-300 rounded-lg bg-gray-50">
            <div className="bg-green-50 border-b border-green-200 px-3 py-1.5">
              <h3 className="text-xs font-bold text-green-800 uppercase tracking-wide">
                Lịch sử booking &amp; Chu kỳ quan hệ
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700 w-8"></th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Ngày
                    </th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Điểm bán
                    </th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Loại
                    </th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Người
                    </th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Giá trị
                    </th>
                    <th className="px-2 py-1.5 text-left font-semibold text-gray-700">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[...(customer.recentBookings || [])]
                    .sort((a, b) => {
                      const da = new Date(
                        a.date.split("/").reverse().join("-"),
                      );
                      const db = new Date(
                        b.date.split("/").reverse().join("-"),
                      );
                      return db.getTime() - da.getTime();
                    })
                    .map((b) => (
                      <tr
                        key={b.id}
                        className="hover:bg-gray-100 cursor-pointer"
                      >
                        <td className="px-2 py-1.5">
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
                            className="lucide lucide-chevron-right w-4 h-4 text-gray-600"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </td>

                        <td className="px-2 py-1.5 text-gray-700">{b.date}</td>

                        <td className="px-2 py-1.5 text-gray-900 font-medium">
                          {b.venue}
                        </td>

                        <td className="px-2 py-1.5 text-gray-700">{b.type}</td>

                        <td className="px-2 py-1.5 text-gray-700">
                          {b.guests}
                        </td>

                        <td className="px-2 py-1.5 text-green-600 font-semibold">
                          {b.amount?.toLocaleString("vi-VN")} ₫
                        </td>

                        <td className="px-2 py-1.5 text-gray-600 text-[11px] italic">
                          {b.notes || "—"}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddNotes
        isOpen={isOpenAddNotes}
        onClose={() => setIsOpenAddNotes(false)}
      />

      <ViewNotesModal
        isOpen={isOpenViewNotes}
        onClose={() => setIsOpenViewNotes(false)}
      />
    </>
  );
}
