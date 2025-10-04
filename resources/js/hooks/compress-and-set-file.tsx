import imageCompression from "browser-image-compression";

export const useFileCompression = (
  setData: (field: string, value: File[]) => void,
  setPreviewUrl: (urls: (string | null)[]) => void,
) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };

  const compressAndSetFile = async (files: File[], field: string) => {
    const compressedFile: File[] = [];
    const previews: (string | null)[] = [];

    for (const [index, file] of files.entries()) {
      let finalFile = file;

      if (file.type.startsWith("image/")) {
        finalFile = await imageCompression(file, options);


        previews[index] = URL.createObjectURL(finalFile);
      } else {
        previews[index] = null;
      }

      compressedFile.push(finalFile);
    }

    setData(field, compressedFile);
    setPreviewUrl(previews);
  };

  return { compressAndSetFile };
};
