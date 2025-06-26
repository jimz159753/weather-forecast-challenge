import { getCoordinates } from './getCoordinates';

describe('getCoordinates', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns coordinates when address is found', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        result: {
          addressMatches: [
            { coordinates: { x: 123.45, y: 67.89 } }
          ]
        }
      })
    });

    const coords = await getCoordinates('test address');
    expect(coords).toEqual({ lat: 67.89, lon: 123.45 });
  });

  it('throws an error when address is not found', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ result: { addressMatches: [] } })
    });

    await expect(getCoordinates('bad address')).rejects.toThrow('Unable to geocode address.');
  });
}); 