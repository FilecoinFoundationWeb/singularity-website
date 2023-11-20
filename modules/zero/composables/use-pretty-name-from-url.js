// ////////////////////////////////////////////////////////////////////// Export
// -----------------------------------------------------------------------------
export const usePrettyNameFromUrl = (url) => {
  return url ? url.split('/').pop().replaceAll('-', ' ').replace(/\.[^/.]+$/, '') : ''
}
