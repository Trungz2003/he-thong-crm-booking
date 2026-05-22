import { CustomerResponse } from "@/interface/customer";
import apiClient from "../apiClient";
import { AxiosResponse } from "axios";
import {
  CreditConfigResponse,
  StoreTierConfigRequest,
} from "@/interface/credit-config";

export async function getCustomers() {
  const api = apiClient();

  try {
    const res: AxiosResponse<CustomerResponse> =
      await api.get("api/v1/customers");

    return res.data.data;
  } catch (error) {
    return null;
  }
}

export async function getCreditConfig() {
  const api = apiClient();

  try {
    const res: AxiosResponse<CreditConfigResponse> = await api.get(
      "api/v1/tgc-credit-config",
    );

    return res.data.data;
  } catch (error) {
    return null;
  }
}

export async function updateCreditConfig(data: StoreTierConfigRequest) {
  const api = apiClient();

  try {
    const res: AxiosResponse<CreditConfigResponse> = await api.put(
      "api/v1/tgc-credit-config",
      data,
    );

    return res.data.data;
  } catch (error) {
    return null;
  }
}
