"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { getCreditConfig, updateCreditConfig } from "@/lib/csr/home";
import {
  CreditConfig,
  StoreTierConfigRequest,
} from "@/interface/credit-config";
import { Customer } from "@/interface/customer";

interface TierConfigModalProps {
  onClose: () => void;
}

export default function TierConfigModal({ onClose }: TierConfigModalProps) {
  const [config, setConfig] = useState<CreditConfig>();

  const getConfig = async () => {
    const data = await getCreditConfig();

    if (data) {
      setConfig(data);
    }
  };

  const handleUpdateConfig = async () => {
    const data: StoreTierConfigRequest = {
      average_bill_weight: config?.averageBillWeight,
      order_count_weight: config?.orderCountWeight,
      lifetime_weight: config?.lifetimeWeight,
      recency_weight: config?.recencyWeight,
      silver_threshold: config?.silverThreshold,
      gold_threshold: config?.goldThreshold,
      platinum_threshold: config?.platinumThreshold,
      diamond_threshold: config?.diamondThreshold,
    };
    const updatedConfig = await updateCreditConfig(data);

    if (updatedConfig) {
      alert("Cấu hình đã được lưu!");
      onClose();
    } else {
      alert("Có lỗi xảy ra khi lưu cấu hình.");
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Cấu hình Công thức TGC Credit
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Formula */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              {" "}
              <strong>Công thức:</strong> Credit (TGC) = [Đơn giá TB × Hệ số] +
              [Số lần đặt × Hệ số] + [Vòng đời × Hệ số] + [Lần đặt gần nhất × Hệ
              số]
            </p>
          </div>

          {/* Hệ số Trong số */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Hệ số Trong số
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Đơn giá trung bình (Hệ số)
                </label>
                <Input
                  type="number"
                  value={config?.averageBillWeight ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      averageBillWeight: val === "" ? "" : parseFloat(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Số lần đặt (Hệ số)
                </label>
                <Input
                  type="number"
                  value={config?.orderCountWeight ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      orderCountWeight: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Vòng đời (Hệ số)
                </label>
                <Input
                  type="number"
                  value={config?.lifetimeWeight ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      lifetimeWeight: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Lần đặt gần nhất (Hệ số)
                </label>
                <Input
                  type="number"
                  value={config?.recencyWeight ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;

                    setConfig({
                      ...config,
                      recencyWeight: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
            </div>
          </div>

          {/* Ngưỡng Diễm TGC */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ngưỡng Diễm TGC</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Bạc (Ngưỡng tối thiểu)
                </label>
                <Input
                  type="number"
                  value={config?.silverThreshold ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      silverThreshold: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Vàng (Ngưỡng tối thiểu)
                </label>
                <Input
                  type="number"
                  value={config?.goldThreshold ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      goldThreshold: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Bạch kim (Ngưỡng tối thiểu)
                </label>
                <Input
                  type="number"
                  value={config?.platinumThreshold ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      platinumThreshold: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                  Kim cương (Ngưỡng tối thiểu)
                </label>
                <Input
                  type="number"
                  value={config?.diamondThreshold ?? ""}
                  onChange={(e) => {
                    if (!config) return;
                    const val = e.target.value;
                    setConfig({
                      ...config,
                      diamondThreshold: val === "" ? "" : parseInt(val),
                    });
                  }}
                  className="mt-1 bg-[#f3f3f5]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t border-border p-4 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="bg-white hover:bg-gray-100 text-black! text-sm font-medium!"
          >
            Hủy
          </Button>
          <Button
            className="bg-black text-primary-foregroun hover:bg-gray-800 text-white! text-sm font-medium!"
            onClick={handleUpdateConfig}
          >
            Lưu cấu hình
          </Button>
        </div>
      </div>
    </div>
  );
}
