export const relationshipLevels: Record<
  number,
  {
    label: string;
    bg: string;
    text: string;
  }
> = {
  6: {
    label: "Tri kỷ",
    bg: "bg-[#7A1E3A]",
    text: "text-white",
  },
  5: {
    label: "Gắn bó",
    bg: "bg-[#FFB26B]",
    text: "text-[#7C2D12]",
  },
  4: {
    label: "Tin cậy",
    bg: "bg-[#C084FC]",
    text: "text-[#581C87]",
  },
  3: {
    label: "Thấu hiểu",
    bg: "bg-[#60A5FA]",
    text: "text-white",
  },
  2: {
    label: "Kết nối",
    bg: "bg-[#B7D7F2] ",
    text: "text-[#1E40AF]",
  },
  1: {
    label: "Nhận diện",
    bg: "bg-[#D9D9D9] ",
    text: "text-[#374151]",
  },
};
