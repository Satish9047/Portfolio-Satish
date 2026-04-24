"use client";

import { useState, type MouseEvent } from "react";
import { MdDownload } from "react-icons/md";
// import { trackCvDownload } from "@/features/cv/cv.service";
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
    <div className="space-y-2 flex justify-between items-center">
      <a
        href="/cv/my-cv.pdf"
        download
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-foreground)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
        )}
      >
        <MdDownload className="text-lg" />
        <span>Download CV</span>
      </a>
      {/*<p className="text-sm text-muted">Downloaded {downloadCount} times</p>*/}
    </div>
  );
}
