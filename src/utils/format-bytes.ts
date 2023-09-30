/**
 * Formats a number of bytes as a human-readable string with the appropriate unit.
 * @param {number} bytes - The number of bytes to format.
 * @returns {string} A string with the formatted size and unit (e.g. "10.0 MB").
 */
export function formatBytes(bytes: number): string {
  const SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  let unitIndex = 0
  while (bytes >= 1024 && unitIndex < SIZE_UNITS.length - 1) {
    bytes /= 1024
    unitIndex++
  }
  return `${bytes.toFixed(1)}${SIZE_UNITS[unitIndex]}`
}
