import { unstable_cache } from "next/cache";

const CV_DOWNLOADS_COLLECTION = "cv_downloads";
const CV_DOWNLOADS_REVALIDATE_SECONDS = 300;

function getPocketBaseUrl() {
  return process.env.POCKETBASE_URL?.replace(/\/$/, "") ?? "";
}

async function pocketBaseFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const baseUrl = getPocketBaseUrl();

  if (!baseUrl) {
    throw new Error("POCKETBASE_URL is not configured.");
  }

  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...(init?.method && init.method !== "GET"
      ? {}
      : { next: { revalidate: CV_DOWNLOADS_REVALIDATE_SECONDS, tags: ["cv-download-count"] } }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PocketBase request failed: ${response.status} ${errorText}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

interface PocketBaseListResponse {
  totalItems: number;
}

async function fetchCvDownloadCount() {
  const result = await pocketBaseFetch<PocketBaseListResponse>(
    `/api/collections/${CV_DOWNLOADS_COLLECTION}/records?page=1&perPage=1`,
  );

  return result.totalItems;
}

export const getCvDownloadCount = unstable_cache(fetchCvDownloadCount, ["cv-download-count"], {
  revalidate: CV_DOWNLOADS_REVALIDATE_SECONDS,
  tags: ["cv-download-count"],
});

export async function createCvDownloadRecord() {
  await pocketBaseFetch(`/api/collections/${CV_DOWNLOADS_COLLECTION}/records`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({}),
  });
}
