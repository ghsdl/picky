export const FETCH_PLATFORMS = 'FETCH_PLATFORMS';
export const SAVE_PLATFORMS = 'SAVE_PLATFORMS';

export const fetchPlatforms = () => ({
  type: FETCH_PLATFORMS,
});

export const savePlatforms = (platforms) => ({
  type: SAVE_PLATFORMS,
  platforms,
});
