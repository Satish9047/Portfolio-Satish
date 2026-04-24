import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { createCvDownloadRecord } from "@/lib/pocketbase";

const CV_DOWNLOAD_COOKIE = "cv_download_tracked";
const CV_DOWNLOAD_COOKIE_MAX_AGE = 60 * 30;

export async function POST() {
  try {
    const cookieStore = cookies();
    const hasRecentDownload = cookieStore.get(CV_DOWNLOAD_COOKIE)?.value === "1";

    if (hasRecentDownload) {
      return NextResponse.json({ tracked: false });
    }

    await createCvDownloadRecord();
    revalidateTag("cv-download-count");

    const response = NextResponse.json({ tracked: true });
    response.cookies.set(CV_DOWNLOAD_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: CV_DOWNLOAD_COOKIE_MAX_AGE,
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        tracked: false,
        message: "Unable to track download right now.",
      },
      { status: 500 },
    );
  }
}
