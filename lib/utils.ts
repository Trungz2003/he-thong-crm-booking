import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMetricStyle = (value: number, activeColor = "text-blue-600") =>
  value === 0 ? "text-gray-300" : activeColor;

export const getAge = (birthday: string) => {
  const [day, month, year] = birthday.split("/").map(Number);

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const getLifetime = (firstOrder: string) => {
  const [day, month, year] = firstOrder.split("/").map(Number);

  const startDate = new Date(year, month - 1, day);
  const today = new Date();

  let months =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  months = months % 12;

  if (years > 0 && months > 0) {
    return `${years} năm ${months} tháng`;
  }

  if (years > 0) {
    return `${years} năm`;
  }

  return `${months} tháng`;
};

export const getLastOrderText = (lastOrder: string) => {
  const [day, month, year] = lastOrder.split("/").map(Number);

  const orderDate = new Date(year, month - 1, day);
  const today = new Date();

  const diffTime = today.getTime() - orderDate.getTime();

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `${diffDays} ngày trước`;
  }

  const diffMonths = Math.floor(diffDays / 30);

  if (diffMonths < 12) {
    return `${diffMonths} tháng trước`;
  }

  const diffYears = Math.floor(diffMonths / 12);

  return `${diffYears} năm trước`;
};
