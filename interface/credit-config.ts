export interface CreditConfigResponse {
  data: CreditConfig;
}

export interface CreditConfig {
  id: number;

  averageBillWeight: number | string;
  orderCountWeight: number | string;
  lifetimeWeight: number | string;
  recencyWeight: number | string;

  silverThreshold: number | string;
  goldThreshold: number | string;
  platinumThreshold: number | string;
  diamondThreshold: number | string;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface StoreTierConfigRequest {
  average_bill_weight?: number | string;
  order_count_weight?: number | string;
  lifetime_weight?: number | string;
  recency_weight?: number | string;
  silver_threshold?: number | string;
  gold_threshold?: number | string;
  platinum_threshold?: number | string;
  diamond_threshold?: number | string;
}
