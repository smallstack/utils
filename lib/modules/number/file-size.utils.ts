/** converts bits and bytes into a human readable format. Up until TB it will always show less than 1000 as value */
export function humanFileSize(value: number): string {
  if (value === 0) {
    return "0 B";
  }
  const i = Math.floor(Math.log(value) / Math.log(1024));
  return `${(value / Math.pow(1024, i)).toFixed(0)} ${
    ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][i]
  }`;
}
