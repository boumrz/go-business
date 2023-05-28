export const exportPDF = (fileName: string, blob: Blob, fileType?: string) => {
  const url = window.URL || window.webkitURL;
  const hiddenElement = document.createElement("a");
  hiddenElement.href = url.createObjectURL(blob);
  hiddenElement.target = "_blank";
  if (fileType === "application/pdf") {
    window.open(hiddenElement.href, hiddenElement.target);
    hiddenElement.remove();
    return;
  }
  hiddenElement.download = `${fileName}`;
  hiddenElement.click();
  hiddenElement.remove();
};
