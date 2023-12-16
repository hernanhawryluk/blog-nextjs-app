"use client";

import { useRouter } from "next/navigation";
import Button from "../button";

type PaginationProps = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
  const router = useRouter();

  const buttonStyle =
    "h-[2.8rem] text-sm font-medium bg-rose-700 opacity-70 text-gray-50 dark:bg-rose-700 dark:opacity-80 dark:text-gray-50 rounded-none disabled:opacity-70 disabled:cursor-not-allowed";
  return (
    <div className="flex justify-between">
      <div className="w-[7rem]">
        <Button
          label="Previous"
          disabled={!hasPrev}
          custom={buttonStyle}
          onClick={() => router.push(`?page=${page - 1}`)}
        />
      </div>
      <div className="w-[7rem]">
        <Button
          label="Next"
          disabled={!hasNext}
          custom={buttonStyle}
          onClick={() => router.push(`?page=${page + 1}`)}
        />
      </div>
    </div>
  );
};

export default Pagination;
