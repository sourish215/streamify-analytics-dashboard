const mockData = {
  totalUsers: 12500,
  activeUsers: 8700,
  totalStreams: 1250000,
  revenue: 325000,
  topArtist: "Taylor Swift",

  userGrowthData: [
    { month: "Jan", totalUsers: 8000, activeUsers: 5500 },
    { month: "Feb", totalUsers: 8500, activeUsers: 6000 },
    { month: "Mar", totalUsers: 9000, activeUsers: 6300 },
    { month: "Apr", totalUsers: 9300, activeUsers: 6500 },
    { month: "May", totalUsers: 9800, activeUsers: 6800 },
    { month: "Jun", totalUsers: 10200, activeUsers: 7100 },
    { month: "Jul", totalUsers: 10700, activeUsers: 7400 },
    { month: "Aug", totalUsers: 11000, activeUsers: 7700 },
    { month: "Sep", totalUsers: 11300, activeUsers: 7900 },
    { month: "Oct", totalUsers: 11700, activeUsers: 8200 },
    { month: "Nov", totalUsers: 12000, activeUsers: 8500 },
    { month: "Dec", totalUsers: 12500, activeUsers: 8700 },
  ],

  revenueData: [
    { name: "Subscriptions", value: 275000 },
    { name: "Advertisements", value: 40000 },
    { name: "One-time Purchases", value: 10000 },
  ],

  topSongs: [
    { name: "Cruel Summer", artist: "Taylor Swift", streams: 120000 },
    { name: "Flowers", artist: "Miley Cyrus", streams: 110000 },
    { name: "Blinding Lights", artist: "The Weeknd", streams: 95000 },
    { name: "Bad Guy", artist: "Billie Eilish", streams: 88000 },
    { name: "Shape of You", artist: "Ed Sheeran", streams: 85000 },
  ],

  recentStreams: [
    {
      songName: "Cruel Summer",
      artist: "Taylor Swift",
      dateStreamed: "2025-02-14",
      streamCount: 1200,
      userId: "U12345",
    },
    {
      songName: "Flowers",
      artist: "Miley Cyrus",
      dateStreamed: "2025-02-14",
      streamCount: 1100,
      userId: "U67890",
    },
    {
      songName: "Blinding Lights",
      artist: "The Weeknd",
      dateStreamed: "2025-02-13",
      streamCount: 950,
      userId: "U12346",
    },
    {
      songName: "Bad Guy",
      artist: "Billie Eilish",
      dateStreamed: "2025-02-13",
      streamCount: 880,
      userId: "U12347",
    },
    {
      songName: "Shape of You",
      artist: "Ed Sheeran",
      dateStreamed: "2025-02-12",
      streamCount: 850,
      userId: "U12348",
    },
    {
      songName: "Dance Monkey",
      artist: "Tones and I",
      dateStreamed: "2025-02-12",
      streamCount: 820,
      userId: "U12349",
    },
    {
      songName: "Someone You Loved",
      artist: "Lewis Capaldi",
      dateStreamed: "2025-02-11",
      streamCount: 790,
      userId: "U12350",
    },
    {
      songName: "Believer",
      artist: "Imagine Dragons",
      dateStreamed: "2025-02-11",
      streamCount: 760,
      userId: "U12351",
    },
    {
      songName: "Old Town Road",
      artist: "Lil Nas X",
      dateStreamed: "2025-02-10",
      streamCount: 740,
      userId: "U12352",
    },
    {
      songName: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      dateStreamed: "2025-02-10",
      streamCount: 720,
      userId: "U12353",
    },
  ],
};

export default mockData;
