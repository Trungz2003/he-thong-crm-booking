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

export async function deleteUser(id: number) {
  const api = apiClient();

  try {
    // Bỏ hẳn khai báo kiểu thủ công nếu không cần thiết, Axios sẽ tự hiểu
    const res = await api.delete(`api/v1/customers/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
}
