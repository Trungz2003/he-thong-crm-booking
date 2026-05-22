"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  ThumbsUp,
  RotateCcw,
  Star,
  UserPlus,
  PhoneCall,
  Trash2,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  MessageSquare,
  Lightbulb,
  Gift,
  FileText,
} from "lucide-react";
import { relationshipLevels } from "@/hooks/relationshipLevels";
import { cn, getMetricStyle } from "@/lib/utils";
import { tierConfig } from "@/hooks/tierConfig";
import MetricWithTooltip from "./ui/metric-with-tooltip";
import { Customer, CustomerResponse } from "@/interface/customer";
import axios from "axios";
import { getCustomers } from "@/lib/csr/home";

export type ReviewItem = {
  name: string;
  lastTime: string;
  total: number;
};

export type Reviews = Record<string, ReviewItem>;

export type OutcomeItem = {
  name: string;
  lastTime?: string;
  total: number;
};

export type Outcomes = Record<string, OutcomeItem>;

interface CustomerTableProps {
  onOpenConfig?: () => void;
  onOpenDetail?: (customer: Customer) => void;
}

export default function CustomerTable({
  onOpenConfig,
  onOpenDetail,
}: CustomerTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("all");
  const [filterBy, setFilterBy] = useState("all");
  const [filterTier, setFilterTier] = useState("all");
  const [customers, setCustomers] = useState<Customer[] | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customersData = await getCustomers();
      setCustomers(customersData);
    };
    fetchCustomers();
  }, []);

  const filteredCustomers = customers
    ?.filter((customer) => {
      // Search
      const matchesSearch =
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm);

      // Tier
      const matchesTier = filterTier === "all" || customer.tier === filterTier;

      // Mối quan hệ / interaction stage
      const matchesInteraction =
        filterBy === "all" || customer.interactionStage === Number(filterBy);

      // Điểm chạm / interaction count
      const matchesTouchPoint =
        sortBy === "all" || customer.interactionStage === Number(sortBy);

      return (
        matchesSearch && matchesTier && matchesInteraction && matchesTouchPoint
      );
    })
    ?.sort((a, b) => {
      // Ưu tiên tier cao hơn
      const tierOrder: Record<string, number> = {
        silver: 1,
        gold: 2,
        platinum: 3,
        diamond: 4,
      };

      return (tierOrder[b.tier] || 0) - (tierOrder[a.tier] || 0);
    });

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Chăm sóc khách hàng
          </h1>
          <p className="text-gray-600 mt-1">
            TGC System - Quản lý khách hàng thông minh
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-16 z-30 bg-card border-b border-border px-6 pt-2 pb-6 space-y-4">
        <div className="md:flex justify-between items-center gap-4">
          <div className="max-w-2xl flex flex-1 relative">
            <Input
              placeholder="Tìm kiếm theo tên hoặc số điện thoại..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full min-w-0 border px-3 text-base bg-gray-100 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 py-2.5 rounded-lg border-gray-300"
            />
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
              className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              data-fg-d3bl13="0.8:2020.47:/src/app/App.tsx:552:15:17145:95:e:Search::::::B9rK"
              data-fgid-d3bl13=":r8:"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <div className="flex md:justify-end gap-x-2 items-center md:mt-0 mt-3">
            <Button
              className="gap-2 flex justify-center items-center hover:bg-gray-200 hover:text-black"
              variant="outline"
              onClick={onOpenConfig}
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
                className="lucide lucide-settings w-4 h-4"
                data-fg-giq3="2018.79:2018.6556:/src/app/components/TierConfigModal.tsx:41:11:1151:32:e:Settings::::::D4nh"
                data-fgid-giq3=":ri:"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Cấu hình Tier
            </Button>
            <Button
              className="gap-2 flex justify-center items-center hover:bg-gray-200 hover:text-black"
              variant="outline"
              onClick={onOpenConfig}
            >
              Thêm khách hàng
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-start">
          <Select value={filterTier} onValueChange={setFilterTier}>
            <SelectTrigger className="sm:w-45 w-full h-11.5! cursor-pointer">
              <SelectValue placeholder="Tất cả Tier" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Tất cả Rank</SelectItem>
              <SelectItem value="silver">Bạc</SelectItem>
              <SelectItem value="gold">Vàng</SelectItem>
              <SelectItem value="platinum">Bạch kim</SelectItem>
              <SelectItem value="diamond">Kim cương</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterBy} onValueChange={setFilterBy}>
            <SelectTrigger className="sm:w-45 w-full h-11.5! cursor-pointer">
              <SelectValue placeholder="Tất cả Tương tác" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Tất cả Tương tác</SelectItem>
              <SelectItem value="1">Tiếp nhận</SelectItem>
              <SelectItem value="2">Làm việc</SelectItem>
              <SelectItem value="3">Có kết quả</SelectItem>
              <SelectItem value="4">Tín nhiệm</SelectItem>
              <SelectItem value="5">Ổn định</SelectItem>
              <SelectItem value="6">Bền vững</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="sm:w-45 w-full h-11.5! cursor-pointer">
              <SelectValue placeholder="Tất cả Điểm chạm" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Tất cả Điểm chạm</SelectItem>
              <SelectItem value="1">Chạm 1</SelectItem>
              <SelectItem value="2">Chạm 2</SelectItem>
              <SelectItem value="3">Chạm 3</SelectItem>
              <SelectItem value="4">Chạm 4</SelectItem>
              <SelectItem value="5">Chạm 5</SelectItem>
              <SelectItem value="6">Chạm 6</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-hidden!">
        <div className="inline-block w-full p-6">
          <div className="bg-white rounded-lg shadow-sm ">
            <div
              className="p-4 border-b border-gray-200"
              data-fg-d3bl21="0.8:2020.47:/src/app/App.tsx:579:11:18223:433:e:div:e"
              data-fgid-d3bl21=":r1g:"
            >
              <div
                className="flex items-center justify-between"
                data-fg-d3bl22="0.8:2020.47:/src/app/App.tsx:580:13:18282:357:e:div:ete"
                data-fgid-d3bl22=":r1h:"
              >
                <h2
                  className="text-lg font-semibold text-gray-900"
                  data-fg-d3bl23="0.8:2020.47:/src/app/App.tsx:581:15:18348:138:e:h2:txt"
                  data-fgid-d3bl23=":r1i:"
                >
                  Danh sách Khách hàng ({filteredCustomers?.length})
                </h2>
                <div
                  className="text-sm text-gray-600"
                  data-fg-d3bl27="0.8:2020.47:/src/app/App.tsx:584:15:18501:119:e:div:tx"
                  data-fgid-d3bl27=":r1j:"
                >
                  Tổng số khách hàng: {customers?.length || 0}
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg w-full  overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase">
                      STT
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-40">
                      KHÁCH HÀNG
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-25">
                      TIER
                    </th>
                    <th className="px-3 py-2 text-xs font-bold text-gray-700 uppercase min-w-30 text-center">
                      MỐI QUAN HỆ
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-80">
                      PROCESS - CSKH
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-90">
                      OUTCOME - KHÁCH HÀNG
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-18">
                      CREDIT
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-25">
                      AOV
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-22">
                      TẦN SUẤT
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase min-w-27.25">
                      LẦN ĐẶT CUỐI
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase  w-16"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers?.map((customer, index) => {
                    const relation =
                      relationshipLevels[customer.interactionStage];
                    const tier = tierConfig[customer.tier];
                    const Icon = tier.icon;

                    return (
                      <tr
                        key={customer.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-3 py-2 text-sm font-medium">
                          {index + 1}
                        </td>
                        <td className="px-3 py-2">
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {customer.phone}
                            </p>
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex flex-col items-center gap-1">
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
                        </td>
                        <td className="px-3 py-2 align-middle text-center">
                          <div className="flex justify-center">
                            <div
                              className={cn(
                                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-white shadow-md",
                                relation.bg,
                                relation.text,
                              )}
                            >
                              <span className="font-bold text-sm">
                                {customer.interactionStage}
                              </span>

                              <span className="text-xs font-semibold">
                                {relation.label}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <MetricWithTooltip
                              icon={CheckCircle}
                              total={customer.process.confirmationCount ?? 0}
                              label="Xác nhận booking"
                              lastAt={customer.process.lastConfirmation}
                              metricStyle={getMetricStyle(
                                customer.process.confirmationCount ?? 0,
                              )}
                            />

                            <MetricWithTooltip
                              icon={MessageSquare}
                              total={customer.process.personalizationCount ?? 0}
                              label="Cá nhân hóa nội dung"
                              lastAt={customer.process.lastPersonalization}
                              metricStyle={getMetricStyle(
                                customer.process.personalizationCount ?? 0,
                              )}
                            />

                            <MetricWithTooltip
                              icon={Lightbulb}
                              total={customer.process.experienceCheckCount ?? 0}
                              label="Hỏi trải nghiệm"
                              lastAt={customer.process.lastExperienceCheck}
                              metricStyle={getMetricStyle(
                                customer.process.experienceCheckCount ?? 0,
                              )}
                            />

                            <MetricWithTooltip
                              icon={Gift}
                              total={customer.process.nurturingCount ?? 0}
                              label="Nuôi dưỡng sau booking"
                              lastAt={customer.process.lastNurturing}
                              metricStyle={getMetricStyle(
                                customer.process.nurturingCount ?? 0,
                              )}
                            />

                            <MetricWithTooltip
                              icon={FileText}
                              total={customer.process.insightUpdateCount ?? 0}
                              label="Ghi nhận insight mới"
                              lastAt={customer.process.lastInsightUpdate}
                              metricStyle={getMetricStyle(
                                customer.process.insightUpdateCount ?? 0,
                              )}
                            />
                          </div>
                        </td>

                        <td className="px-3 py-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <MetricWithTooltip
                              icon={PhoneCall}
                              total={customer.outcome.chatResponseCount ?? 0}
                              label="Có phản hồi chat"
                              lastAt={customer.outcome.lastChatResponse}
                              metricStyle={getMetricStyle(
                                customer.outcome.chatResponseCount ?? 0,
                                "text-green-600",
                              )}
                            />

                            <MetricWithTooltip
                              icon={RotateCcw}
                              total={customer.outcome.rebookingCount ?? 0}
                              label="Đã booking lại"
                              lastAt={customer.outcome.lastRebooking}
                              metricStyle={getMetricStyle(
                                customer.outcome.rebookingCount ?? 0,
                                "text-green-600",
                              )}
                            />

                            <MetricWithTooltip
                              icon={ThumbsUp}
                              total={
                                customer.outcome.positiveFeedbackCount ?? 0
                              }
                              label="Feedback tốt"
                              lastAt={customer.outcome.lastPositiveFeedback}
                              metricStyle={getMetricStyle(
                                customer.outcome.positiveFeedbackCount ?? 0,
                                "text-green-600",
                              )}
                            />

                            <MetricWithTooltip
                              icon={MessageSquare}
                              total={
                                customer.outcome.proactiveContactCount ?? 0
                              }
                              label="Chủ động liên hệ"
                              lastAt={customer.outcome.lastProactiveContact}
                              metricStyle={getMetricStyle(
                                customer.outcome.proactiveContactCount ?? 0,
                                "text-green-600",
                              )}
                            />

                            <MetricWithTooltip
                              icon={Star}
                              total={customer.outcome.returnUsageCount ?? 0}
                              label="Quay lại sử dụng"
                              lastAt={customer.outcome.lastReturnUsage}
                              metricStyle={getMetricStyle(
                                customer.outcome.returnUsageCount ?? 0,
                                "text-green-600",
                              )}
                            />

                            <MetricWithTooltip
                              icon={UserPlus}
                              total={customer.outcome.referralCount ?? 0}
                              label="Giới thiệu bạn bè"
                              lastAt={customer.outcome.lastReferral}
                              metricStyle={getMetricStyle(
                                customer.outcome.referralCount ?? 0,
                                "text-green-600",
                              )}
                            />
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-bold text-green-600 text-sm">
                            {customer.credit}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-xs">
                          {customer.averageBill?.toLocaleString("vi-VN")}đ
                        </td>

                        <td className="px-3 py-2 text-center text-xs text-gray-700">
                          {customer.lastOrder}
                        </td>

                        <td className="px-3 py-2 text-center text-xs text-gray-600">
                          {customer.firstOrder}
                        </td>
                        <td className="px-3 py-2 align-middle text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => onOpenDetail?.(customer)}
                              className="gap-1 text-xs"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => onOpenDetail?.(customer)}
                              className="gap-1 text-xs"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => onOpenDetail?.(customer)}
                              className="gap-1 text-xs"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
