/**
 * Utility to compress image files or base64 data URLs to ensure they stay lightweight
 * and fit comfortably inside Firestore document size limits (< 1 MB).
 */
export const compressDataUrl = (
  dataUrl: string,
  maxWidth = 900,
  maxHeight = 900,
  quality = 0.72
): Promise<string> => {
  return new Promise((resolve) => {
    // If not a data URL or small enough, return as is
    if (!dataUrl || !dataUrl.startsWith('data:image/')) {
      resolve(dataUrl);
      return;
    }

    try {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width <= maxWidth && height <= maxHeight && dataUrl.length < 350000) {
          // Already within bounds and reasonably sized (~250KB)
          resolve(dataUrl);
          return;
        }

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(dataUrl);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', quality);
        resolve(compressed);
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    } catch {
      resolve(dataUrl);
    }
  });
};

export const compressFile = (
  file: File,
  maxWidth = 900,
  maxHeight = 900,
  quality = 0.72
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const rawDataUrl = e.target?.result as string;
      try {
        const compressed = await compressDataUrl(rawDataUrl, maxWidth, maxHeight, quality);
        resolve(compressed);
      } catch {
        resolve(rawDataUrl);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
