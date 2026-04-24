const CV_TRACK_STORAGE_KEY = "cv-download-last-tracked-at";
const CV_TRACK_DEBOUNCE_MS = 1000 * 60 * 30;

export function shouldTrackCvDownload() {
  if (typeof window === "undefined") {
    return false;
  }

  const lastTrackedAt = window.localStorage.getItem(CV_TRACK_STORAGE_KEY);

  if (!lastTrackedAt) {
    return true;
  }

  const lastTrackedTimestamp = Number(lastTrackedAt);

  if (Number.isNaN(lastTrackedTimestamp)) {
    return true;
  }

  return Date.now() - lastTrackedTimestamp > CV_TRACK_DEBOUNCE_MS;
}

export function markCvDownloadTracked() {
  window.localStorage.setItem(CV_TRACK_STORAGE_KEY, String(Date.now()));
}

export async function trackCvDownload() {
  if (!shouldTrackCvDownload()) {
    return { tracked: false };
  }

  markCvDownloadTracked();

  const response = await fetch("/api/cv-download", {
    method: "POST",
    cache: "no-store",
    keepalive: true,
  });

  if (!response.ok) {
    window.localStorage.removeItem(CV_TRACK_STORAGE_KEY);
    throw new Error("Unable to track CV download.");
  }

  return (await response.json()) as { tracked: boolean };
}
