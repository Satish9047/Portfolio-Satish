"use client";

import { type MouseEvent } from "react";
import { MdDownload } from "react-icons/md";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  initialDownloadCount: number;
}

export function DownloadButton({ initialDownloadCount }: DownloadButtonProps) {
  const startDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv/my-cv.pdf";
    anchor.download = "my-cv.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    startDownload();
  };

  return (
    <div className="flex items-center gap-4">
      <a
        href="/cv/my-cv.pdf"
        download
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[var(--background)] hover:bg-swiss-red hover:border-swiss-red transition-colors duration-200"
        )}
      >
        <MdDownload className="text-sm" />
        <span>Download CV</span>
      </a>
    </div>
  );
}
