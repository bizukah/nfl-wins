// ─────────────────────────────────────────
// DATA
// ─────────────────────────────────────────
const TEAMS = {
    ARI: { name: "Arizona Cardinals", city: "Arizona", c: ["#97233F", "#FFB612"], conf: "NFC", div: "West" },
    ATL: { name: "Atlanta Falcons", city: "Atlanta", c: ["#A71930", "#000000"], conf: "NFC", div: "South" },
    BAL: { name: "Baltimore Ravens", city: "Baltimore", c: ["#241773", "#9E7C0C"], conf: "AFC", div: "North" },
    BUF: { name: "Buffalo Bills", city: "Buffalo", c: ["#00338D", "#C60C30"], conf: "AFC", div: "East" },
    CAR: { name: "Carolina Panthers", city: "Carolina", c: ["#0085CA", "#101820"], conf: "NFC", div: "South" },
    CHI: { name: "Chicago Bears", city: "Chicago", c: ["#0B162A", "#C83803"], conf: "NFC", div: "North" },
    CIN: { name: "Cincinnati Bengals", city: "Cincinnati", c: ["#FB4F14", "#000000"], conf: "AFC", div: "North" },
    CLE: { name: "Cleveland Browns", city: "Cleveland", c: ["#311D00", "#FF3C00"], conf: "AFC", div: "North" },
    DAL: { name: "Dallas Cowboys", city: "Dallas", c: ["#003594", "#869397"], conf: "NFC", div: "East" },
    DEN: { name: "Denver Broncos", city: "Denver", c: ["#FB4F14", "#002244"], conf: "AFC", div: "West" },
    DET: { name: "Detroit Lions", city: "Detroit", c: ["#0076B6", "#B0B7BC"], conf: "NFC", div: "North" },
    GB: { name: "Green Bay Packers", city: "Green Bay", c: ["#203731", "#FFB612"], conf: "NFC", div: "North" },
    HOU: { name: "Houston Texans", city: "Houston", c: ["#03202F", "#A71930"], conf: "AFC", div: "South" },
    IND: { name: "Indianapolis Colts", city: "Indianapolis", c: ["#002C5F", "#A2AAAD"], conf: "AFC", div: "South" },
    JAC: { name: "Jacksonville Jaguars", city: "Jacksonville", c: ["#006778", "#9F792C"], conf: "AFC", div: "South" },
    KC: { name: "Kansas City Chiefs", city: "Kansas City", c: ["#E31837", "#FFB81C"], conf: "AFC", div: "West" },
    LA: { name: "Los Angeles Rams", city: "LA Rams", c: ["#003594", "#FFA300"], conf: "NFC", div: "West" },
    LAC: { name: "Los Angeles Chargers", city: "LA Chargers", c: ["#0080C6", "#FFC20E"], conf: "AFC", div: "West" },
    LV: { name: "Las Vegas Raiders", city: "Las Vegas", c: ["#000000", "#A5ACAF"], conf: "AFC", div: "West" },
    MIA: { name: "Miami Dolphins", city: "Miami", c: ["#008E97", "#FC4C02"], conf: "AFC", div: "East" },
    MIN: { name: "Minnesota Vikings", city: "Minnesota", c: ["#4F2683", "#FFC62F"], conf: "NFC", div: "North" },
    NE: { name: "New England Patriots", city: "New England", c: ["#002244", "#C60C30"], conf: "AFC", div: "East" },
    NO: { name: "New Orleans Saints", city: "New Orleans", c: ["#101820", "#D3BC8D"], conf: "NFC", div: "South" },
    NYG: { name: "New York Giants", city: "NY Giants", c: ["#0B2265", "#A71930"], conf: "NFC", div: "East" },
    NYJ: { name: "New York Jets", city: "NY Jets", c: ["#125740", "#000000"], conf: "AFC", div: "East" },
    PHI: { name: "Philadelphia Eagles", city: "Philadelphia", c: ["#004C54", "#A5ACAF"], conf: "NFC", div: "East" },
    PIT: { name: "Pittsburgh Steelers", city: "Pittsburgh", c: ["#101820", "#FFB612"], conf: "AFC", div: "North" },
    SEA: { name: "Seattle Seahawks", city: "Seattle", c: ["#002244", "#69BE28"], conf: "NFC", div: "West" },
    SF: { name: "San Francisco 49ers", city: "San Francisco", c: ["#AA0000", "#B3995D"], conf: "NFC", div: "West" },
    TB: { name: "Tampa Bay Buccaneers", city: "Tampa Bay", c: ["#D50A0A", "#FF7900"], conf: "NFC", div: "South" },
    TEN: { name: "Tennessee Titans", city: "Tennessee", c: ["#0C2340", "#4B92DB"], conf: "AFC", div: "South" },
    WAS: { name: "Washington Commanders", city: "Washington", c: ["#5A1414", "#FFB612"], conf: "NFC", div: "East" },
};

const SCHEDULES = {
    ARI: [{ w: 1, d: "Sep 13", o: "LAC", h: 0 }, { w: 2, d: "Sep 20", o: "SEA", h: 1 }, { w: 3, d: "Sep 27", o: "SF", h: 0 }, { w: 4, d: "Oct 4", o: "NYG", h: 0 }, { w: 5, d: "Oct 11", o: "DET", h: 1 }, { w: 6, d: "Oct 18", o: "LA", h: 0 }, { w: 7, d: "Oct 25", o: "DEN", h: 0 }, { w: 8, d: "Nov 1", o: "DAL", h: 0 }, { w: 9, d: "Nov 8", o: "SEA", h: 0 }, { w: 10, d: "Nov 15", o: "LA", h: 1 }, { w: 11, d: "Nov 22", o: "KC", h: 0 }, { w: 12, d: "Nov 29", o: "WAS", h: 1 }, { w: 13, d: "Dec 6", o: "PHI", h: 1 }, { w: 14, d: "Dec 13", o: "BYE", h: 0 }, { w: 15, d: "Dec 20", o: "NYJ", h: 1 }, { w: 16, d: "Dec 27", o: "NO", h: 0 }, { w: 17, d: "Jan 3", o: "LV", h: 1 }, { w: 18, d: "Jan 9", o: "SF", h: 1 }],
    ATL: [{ w: 1, d: "Sep 13", o: "PIT", h: 0 }, { w: 2, d: "Sep 20", o: "CAR", h: 1 }, { w: 3, d: "Sep 24", o: "GB", h: 0 }, { w: 4, d: "Oct 5", o: "NO", h: 0 }, { w: 5, d: "Oct 11", o: "BAL", h: 1 }, { w: 6, d: "Oct 18", o: "CHI", h: 1 }, { w: 7, d: "Oct 25", o: "SF", h: 1 }, { w: 8, d: "Nov 1", o: "TB", h: 0 }, { w: 9, d: "Nov 8", o: "CIN", h: 1 }, { w: 10, d: "Nov 15", o: "KC", h: 1 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 29", o: "MIN", h: 0 }, { w: 13, d: "Dec 6", o: "DET", h: 1 }, { w: 14, d: "Dec 13", o: "CLE", h: 0 }, { w: 15, d: "Dec 20", o: "WAS", h: 0 }, { w: 16, d: "TBD", o: "TB", h: 1 }, { w: 17, d: "Jan 3", o: "NO", h: 1 }, { w: 18, d: "Jan 9", o: "CAR", h: 0 }],
    BAL: [{ w: 1, d: "Sep 13", o: "IND", h: 0 }, { w: 2, d: "Sep 20", o: "NO", h: 1 }, { w: 3, d: "Sep 27", o: "DAL", h: 0 }, { w: 4, d: "Oct 4", o: "TEN", h: 1 }, { w: 5, d: "Oct 11", o: "ATL", h: 0 }, { w: 6, d: "Oct 18", o: "CLE", h: 0 }, { w: 7, d: "Oct 25", o: "CIN", h: 1 }, { w: 8, d: "Nov 1", o: "BUF", h: 0 }, { w: 9, d: "Nov 5", o: "JAC", h: 1 }, { w: 10, d: "Nov 16", o: "LAC", h: 1 }, { w: 11, d: "Nov 22", o: "CAR", h: 0 }, { w: 12, d: "Nov 29", o: "HOU", h: 0 }, { w: 13, d: "Dec 6", o: "BYE", h: 0 }, { w: 14, d: "Dec 13", o: "TB", h: 1 }, { w: 15, d: "Dec 20", o: "PIT", h: 0 }, { w: 16, d: "Dec 27", o: "CLE", h: 1 }, { w: 17, d: "Dec 31", o: "CIN", h: 0 }, { w: 18, d: "Jan 9", o: "PIT", h: 1 }],
    BUF: [{ w: 1, d: "Sep 13", o: "HOU", h: 0 }, { w: 2, d: "Sep 17", o: "DET", h: 1 }, { w: 3, d: "Sep 27", o: "LAC", h: 1 }, { w: 4, d: "Oct 4", o: "NE", h: 1 }, { w: 5, d: "Oct 12", o: "LA", h: 0 }, { w: 6, d: "Oct 18", o: "LV", h: 0 }, { w: 7, d: "Oct 25", o: "BYE", h: 0 }, { w: 8, d: "Nov 1", o: "BAL", h: 1 }, { w: 9, d: "Nov 9", o: "MIN", h: 0 }, { w: 10, d: "Nov 15", o: "NYJ", h: 0 }, { w: 11, d: "Nov 22", o: "MIA", h: 1 }, { w: 12, d: "Nov 26", o: "KC", h: 1 }, { w: 13, d: "Dec 6", o: "NE", h: 0 }, { w: 14, d: "Dec 13", o: "GB", h: 0 }, { w: 15, d: "Dec 19", o: "CHI", h: 1 }, { w: 16, d: "Dec 25", o: "DEN", h: 0 }, { w: 17, d: "Jan 3", o: "MIA", h: 0 }, { w: 18, d: "Jan 9", o: "NYJ", h: 1 }],
    CAR: [{ w: 1, d: "Sep 13", o: "CHI", h: 1 }, { w: 2, d: "Sep 20", o: "ATL", h: 0 }, { w: 3, d: "Sep 27", o: "CLE", h: 0 }, { w: 4, d: "Oct 4", o: "DET", h: 1 }, { w: 5, d: "Oct 11", o: "BYE", h: 0 }, { w: 6, d: "Oct 18", o: "PHI", h: 0 }, { w: 7, d: "Oct 25", o: "TB", h: 1 }, { w: 8, d: "Oct 29", o: "GB", h: 0 }, { w: 9, d: "Nov 8", o: "DEN", h: 1 }, { w: 10, d: "Nov 15", o: "NO", h: 0 }, { w: 11, d: "Nov 22", o: "BAL", h: 1 }, { w: 12, d: "Nov 30", o: "TB", h: 0 }, { w: 13, d: "Dec 6", o: "MIN", h: 0 }, { w: 14, d: "Dec 13", o: "NO", h: 1 }, { w: 15, d: "Dec 20", o: "CIN", h: 1 }, { w: 16, d: "TBD", o: "PIT", h: 0 }, { w: 17, d: "Jan 3", o: "SEA", h: 1 }, { w: 18, d: "Jan 9", o: "ATL", h: 1 }],
    CHI: [{ w: 1, d: "Sep 13", o: "CAR", h: 0 }, { w: 2, d: "Sep 20", o: "MIN", h: 1 }, { w: 3, d: "Sep 28", o: "PHI", h: 1 }, { w: 4, d: "Oct 4", o: "NYJ", h: 1 }, { w: 5, d: "Oct 11", o: "GB", h: 0 }, { w: 6, d: "Oct 18", o: "ATL", h: 0 }, { w: 7, d: "Oct 22", o: "NE", h: 1 }, { w: 8, d: "Nov 2", o: "SEA", h: 0 }, { w: 9, d: "Nov 9", o: "TB", h: 1 }, { w: 10, d: "Nov 15", o: "BYE", h: 0 }, { w: 11, d: "Nov 22", o: "NO", h: 1 }, { w: 12, d: "Nov 26", o: "DET", h: 0 }, { w: 13, d: "Dec 6", o: "JAC", h: 1 }, { w: 14, d: "Dec 13", o: "MIA", h: 0 }, { w: 15, d: "Dec 19", o: "BUF", h: 0 }, { w: 16, d: "Dec 25", o: "GB", h: 1 }, { w: 17, d: "Jan 3", o: "DET", h: 1 }, { w: 18, d: "Jan 9", o: "MIN", h: 0 }],
    CIN: [{ w: 1, d: "Sep 13", o: "TB", h: 1 }, { w: 2, d: "Sep 20", o: "HOU", h: 0 }, { w: 3, d: "Sep 27", o: "PIT", h: 0 }, { w: 4, d: "Oct 4", o: "JAC", h: 1 }, { w: 5, d: "Oct 11", o: "MIA", h: 0 }, { w: 6, d: "Oct 18", o: "BYE", h: 0 }, { w: 7, d: "Oct 25", o: "BAL", h: 0 }, { w: 8, d: "Nov 1", o: "TEN", h: 1 }, { w: 9, d: "Nov 8", o: "ATL", h: 0 }, { w: 10, d: "Nov 15", o: "PIT", h: 1 }, { w: 11, d: "Nov 23", o: "WAS", h: 0 }, { w: 12, d: "Nov 29", o: "NO", h: 1 }, { w: 13, d: "Dec 6", o: "CLE", h: 0 }, { w: 14, d: "Dec 13", o: "KC", h: 1 }, { w: 15, d: "Dec 20", o: "CAR", h: 0 }, { w: 16, d: "TBD", o: "IND", h: 0 }, { w: 17, d: "Dec 31", o: "BAL", h: 1 }, { w: 18, d: "Jan 9", o: "CLE", h: 1 }],
    CLE: [{ w: 1, d: "Sep 13", o: "JAC", h: 0 }, { w: 2, d: "Sep 20", o: "TB", h: 0 }, { w: 3, d: "Sep 27", o: "CAR", h: 1 }, { w: 4, d: "Oct 1", o: "PIT", h: 1 }, { w: 5, d: "Oct 11", o: "NYJ", h: 0 }, { w: 6, d: "Oct 18", o: "BAL", h: 1 }, { w: 7, d: "Oct 25", o: "TEN", h: 0 }, { w: 8, d: "Nov 1", o: "PIT", h: 0 }, { w: 9, d: "Nov 8", o: "NO", h: 0 }, { w: 10, d: "Nov 15", o: "HOU", h: 1 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 29", o: "LV", h: 1 }, { w: 13, d: "Dec 6", o: "CIN", h: 1 }, { w: 14, d: "Dec 13", o: "ATL", h: 1 }, { w: 15, d: "Dec 20", o: "NYG", h: 0 }, { w: 16, d: "Dec 27", o: "BAL", h: 0 }, { w: 17, d: "Jan 3", o: "IND", h: 1 }, { w: 18, d: "Jan 9", o: "CIN", h: 0 }],
    DAL: [{ w: 1, d: "Sep 13", o: "NYG", h: 0 }, { w: 2, d: "Sep 20", o: "WAS", h: 1 }, { w: 3, d: "Sep 27", o: "BAL", h: 1 }, { w: 4, d: "Oct 4", o: "HOU", h: 0 }, { w: 5, d: "Oct 8", o: "TB", h: 1 }, { w: 6, d: "Oct 18", o: "GB", h: 0 }, { w: 7, d: "Oct 26", o: "PHI", h: 0 }, { w: 8, d: "Nov 1", o: "ARI", h: 1 }, { w: 9, d: "Nov 8", o: "IND", h: 0 }, { w: 10, d: "Nov 15", o: "SF", h: 1 }, { w: 11, d: "Nov 22", o: "TEN", h: 1 }, { w: 12, d: "Nov 26", o: "PHI", h: 1 }, { w: 13, d: "Dec 7", o: "SEA", h: 0 }, { w: 14, d: "Dec 13", o: "BYE", h: 0 }, { w: 15, d: "Dec 20", o: "LA", h: 0 }, { w: 16, d: "Dec 27", o: "JAC", h: 1 }, { w: 17, d: "Jan 3", o: "NYG", h: 1 }, { w: 18, d: "Jan 9", o: "WAS", h: 0 }],
    DEN: [{ w: 1, d: "Sep 14", o: "KC", h: 0 }, { w: 2, d: "Sep 20", o: "JAC", h: 1 }, { w: 3, d: "Sep 27", o: "LA", h: 1 }, { w: 4, d: "Oct 4", o: "SF", h: 0 }, { w: 5, d: "Oct 11", o: "LAC", h: 0 }, { w: 6, d: "Oct 15", o: "SEA", h: 1 }, { w: 7, d: "Oct 25", o: "ARI", h: 0 }, { w: 8, d: "Nov 1", o: "KC", h: 1 }, { w: 9, d: "Nov 8", o: "CAR", h: 0 }, { w: 10, d: "Nov 15", o: "BYE", h: 0 }, { w: 11, d: "Nov 22", o: "LV", h: 1 }, { w: 12, d: "Nov 27", o: "PIT", h: 0 }, { w: 13, d: "Dec 6", o: "MIA", h: 1 }, { w: 14, d: "Dec 13", o: "NYJ", h: 0 }, { w: 15, d: "Dec 20", o: "LV", h: 0 }, { w: 16, d: "Dec 25", o: "BUF", h: 1 }, { w: 17, d: "Jan 3", o: "NE", h: 0 }, { w: 18, d: "Jan 9", o: "LAC", h: 1 }],
    DET: [{ w: 1, d: "Sep 13", o: "NO", h: 1 }, { w: 2, d: "Sep 17", o: "BUF", h: 0 }, { w: 3, d: "Sep 27", o: "NYJ", h: 1 }, { w: 4, d: "Oct 4", o: "CAR", h: 0 }, { w: 5, d: "Oct 11", o: "ARI", h: 0 }, { w: 6, d: "Oct 18", o: "BYE", h: 0 }, { w: 7, d: "Oct 25", o: "GB", h: 1 }, { w: 8, d: "Nov 1", o: "MIN", h: 1 }, { w: 9, d: "Nov 8", o: "MIA", h: 0 }, { w: 10, d: "Nov 15", o: "NE", h: 1 }, { w: 11, d: "Nov 22", o: "TB", h: 1 }, { w: 12, d: "Nov 26", o: "CHI", h: 1 }, { w: 13, d: "Dec 6", o: "ATL", h: 0 }, { w: 14, d: "Dec 13", o: "TEN", h: 1 }, { w: 15, d: "Dec 20", o: "MIN", h: 0 }, { w: 16, d: "Dec 28", o: "NYG", h: 1 }, { w: 17, d: "Jan 3", o: "CHI", h: 0 }, { w: 18, d: "Jan 9", o: "GB", h: 0 }],
    GB: [{ w: 1, d: "Sep 13", o: "MIN", h: 0 }, { w: 2, d: "Sep 20", o: "NYJ", h: 0 }, { w: 3, d: "Sep 24", o: "ATL", h: 1 }, { w: 4, d: "Oct 4", o: "TB", h: 0 }, { w: 5, d: "Oct 11", o: "CHI", h: 1 }, { w: 6, d: "Oct 18", o: "DAL", h: 1 }, { w: 7, d: "Oct 25", o: "DET", h: 0 }, { w: 8, d: "Oct 29", o: "CAR", h: 1 }, { w: 9, d: "Nov 8", o: "NE", h: 0 }, { w: 10, d: "Nov 15", o: "MIN", h: 1 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 25", o: "LA", h: 0 }, { w: 13, d: "Dec 6", o: "NO", h: 0 }, { w: 14, d: "Dec 13", o: "BUF", h: 1 }, { w: 15, d: "Dec 20", o: "MIA", h: 1 }, { w: 16, d: "Dec 25", o: "CHI", h: 0 }, { w: 17, d: "Jan 4", o: "HOU", h: 1 }, { w: 18, d: "Jan 9", o: "DET", h: 1 }],
    HOU: [{ w: 1, d: "Sep 13", o: "BUF", h: 1 }, { w: 2, d: "Sep 20", o: "CIN", h: 1 }, { w: 3, d: "Sep 27", o: "IND", h: 0 }, { w: 4, d: "Oct 4", o: "DAL", h: 1 }, { w: 5, d: "Oct 11", o: "TEN", h: 0 }, { w: 6, d: "Oct 18", o: "JAC", h: 0 }, { w: 7, d: "Oct 25", o: "NYG", h: 1 }, { w: 8, d: "Nov 1", o: "BYE", h: 0 }, { w: 9, d: "Nov 8", o: "LAC", h: 0 }, { w: 10, d: "Nov 15", o: "CLE", h: 0 }, { w: 11, d: "Nov 19", o: "IND", h: 1 }, { w: 12, d: "Nov 29", o: "BAL", h: 1 }, { w: 13, d: "Dec 6", o: "PIT", h: 0 }, { w: 14, d: "Dec 13", o: "WAS", h: 0 }, { w: 15, d: "Dec 20", o: "JAC", h: 1 }, { w: 16, d: "Dec 24", o: "PHI", h: 0 }, { w: 17, d: "Jan 4", o: "GB", h: 0 }, { w: 18, d: "Jan 9", o: "TEN", h: 1 }],
    IND: [{ w: 1, d: "Sep 13", o: "BAL", h: 1 }, { w: 2, d: "Sep 20", o: "KC", h: 0 }, { w: 3, d: "Sep 27", o: "HOU", h: 1 }, { w: 4, d: "Oct 4", o: "WAS", h: 0 }, { w: 5, d: "Oct 11", o: "PIT", h: 0 }, { w: 6, d: "Oct 18", o: "TEN", h: 1 }, { w: 7, d: "Oct 25", o: "MIN", h: 0 }, { w: 8, d: "Nov 1", o: "JAC", h: 0 }, { w: 9, d: "Nov 8", o: "DAL", h: 1 }, { w: 10, d: "Nov 15", o: "MIA", h: 1 }, { w: 11, d: "Nov 19", o: "HOU", h: 0 }, { w: 12, d: "Nov 29", o: "NYG", h: 1 }, { w: 13, d: "Dec 6", o: "BYE", h: 0 }, { w: 14, d: "Dec 13", o: "PHI", h: 0 }, { w: 15, d: "Dec 20", o: "TEN", h: 0 }, { w: 16, d: "TBD", o: "CIN", h: 1 }, { w: 17, d: "Jan 3", o: "CLE", h: 0 }, { w: 18, d: "Jan 9", o: "JAC", h: 1 }],
    JAC: [{ w: 1, d: "Sep 13", o: "CLE", h: 1 }, { w: 2, d: "Sep 20", o: "DEN", h: 0 }, { w: 3, d: "Sep 27", o: "NE", h: 1 }, { w: 4, d: "Oct 4", o: "CIN", h: 0 }, { w: 5, d: "Oct 11", o: "PHI", h: 0 }, { w: 6, d: "Oct 18", o: "HOU", h: 1 }, { w: 7, d: "Oct 25", o: "BYE", h: 0 }, { w: 8, d: "Nov 1", o: "IND", h: 1 }, { w: 9, d: "Nov 5", o: "BAL", h: 0 }, { w: 10, d: "Nov 15", o: "TEN", h: 0 }, { w: 11, d: "Nov 22", o: "NYG", h: 0 }, { w: 12, d: "Nov 29", o: "TEN", h: 1 }, { w: 13, d: "Dec 6", o: "CHI", h: 0 }, { w: 14, d: "Dec 14", o: "PIT", h: 1 }, { w: 15, d: "Dec 20", o: "HOU", h: 0 }, { w: 16, d: "Dec 27", o: "DAL", h: 0 }, { w: 17, d: "Jan 3", o: "WAS", h: 1 }, { w: 18, d: "Jan 9", o: "IND", h: 0 }],
    KC: [{ w: 1, d: "Sep 14", o: "DEN", h: 1 }, { w: 2, d: "Sep 20", o: "IND", h: 1 }, { w: 3, d: "Sep 27", o: "MIA", h: 0 }, { w: 4, d: "Oct 4", o: "LV", h: 0 }, { w: 5, d: "Oct 11", o: "BYE", h: 0 }, { w: 6, d: "Oct 18", o: "LAC", h: 1 }, { w: 7, d: "Oct 25", o: "SEA", h: 0 }, { w: 8, d: "Nov 1", o: "DEN", h: 0 }, { w: 9, d: "Nov 8", o: "NYJ", h: 1 }, { w: 10, d: "Nov 15", o: "ATL", h: 0 }, { w: 11, d: "Nov 22", o: "ARI", h: 1 }, { w: 12, d: "Nov 26", o: "BUF", h: 0 }, { w: 13, d: "Dec 3", o: "LA", h: 0 }, { w: 14, d: "Dec 13", o: "CIN", h: 0 }, { w: 15, d: "Dec 21", o: "NE", h: 1 }, { w: 16, d: "Dec 27", o: "SF", h: 1 }, { w: 17, d: "Jan 3", o: "LAC", h: 0 }, { w: 18, d: "Jan 9", o: "LV", h: 1 }],
    LA: [{ w: 1, d: "Sep 10", o: "SF", h: 1 }, { w: 2, d: "Sep 21", o: "NYG", h: 1 }, { w: 3, d: "Sep 27", o: "DEN", h: 0 }, { w: 4, d: "Oct 4", o: "PHI", h: 0 }, { w: 5, d: "Oct 12", o: "BUF", h: 1 }, { w: 6, d: "Oct 18", o: "ARI", h: 1 }, { w: 7, d: "Oct 25", o: "LV", h: 0 }, { w: 8, d: "Nov 1", o: "LAC", h: 1 }, { w: 9, d: "Nov 8", o: "WAS", h: 0 }, { w: 10, d: "Nov 15", o: "ARI", h: 0 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 25", o: "GB", h: 1 }, { w: 13, d: "Dec 3", o: "KC", h: 1 }, { w: 14, d: "Dec 13", o: "SF", h: 0 }, { w: 15, d: "Dec 20", o: "DAL", h: 1 }, { w: 16, d: "Dec 25", o: "SEA", h: 0 }, { w: 17, d: "Jan 3", o: "TB", h: 0 }, { w: 18, d: "Jan 9", o: "SEA", h: 1 }],
    LAC: [{ w: 1, d: "Sep 13", o: "ARI", h: 1 }, { w: 2, d: "Sep 20", o: "LV", h: 1 }, { w: 3, d: "Sep 27", o: "BUF", h: 0 }, { w: 4, d: "Oct 4", o: "SEA", h: 0 }, { w: 5, d: "Oct 11", o: "DEN", h: 1 }, { w: 6, d: "Oct 18", o: "KC", h: 0 }, { w: 7, d: "Oct 25", o: "BYE", h: 0 }, { w: 8, d: "Nov 1", o: "LA", h: 0 }, { w: 9, d: "Nov 8", o: "HOU", h: 1 }, { w: 10, d: "Nov 16", o: "BAL", h: 0 }, { w: 11, d: "Nov 22", o: "NYJ", h: 1 }, { w: 12, d: "Nov 29", o: "NE", h: 1 }, { w: 13, d: "Dec 6", o: "TB", h: 0 }, { w: 14, d: "Dec 13", o: "LV", h: 0 }, { w: 15, d: "Dec 17", o: "SF", h: 1 }, { w: 16, d: "Dec 27", o: "MIA", h: 0 }, { w: 17, d: "Jan 3", o: "KC", h: 1 }, { w: 18, d: "Jan 9", o: "DEN", h: 0 }],
    LV: [{ w: 1, d: "Sep 13", o: "MIA", h: 1 }, { w: 2, d: "Sep 20", o: "LAC", h: 0 }, { w: 3, d: "Sep 27", o: "NO", h: 0 }, { w: 4, d: "Oct 4", o: "KC", h: 1 }, { w: 5, d: "Oct 11", o: "NE", h: 0 }, { w: 6, d: "Oct 18", o: "BUF", h: 1 }, { w: 7, d: "Oct 25", o: "LA", h: 1 }, { w: 8, d: "Nov 1", o: "NYJ", h: 0 }, { w: 9, d: "Nov 8", o: "SF", h: 0 }, { w: 10, d: "Nov 15", o: "SEA", h: 1 }, { w: 11, d: "Nov 22", o: "DEN", h: 0 }, { w: 12, d: "Nov 29", o: "CLE", h: 0 }, { w: 13, d: "Dec 6", o: "BYE", h: 0 }, { w: 14, d: "Dec 13", o: "LAC", h: 1 }, { w: 15, d: "Dec 20", o: "DEN", h: 1 }, { w: 16, d: "Dec 27", o: "TEN", h: 1 }, { w: 17, d: "Jan 3", o: "ARI", h: 0 }, { w: 18, d: "Jan 9", o: "KC", h: 0 }],
    MIA: [{ w: 1, d: "Sep 13", o: "LV", h: 0 }, { w: 2, d: "Sep 20", o: "SF", h: 1 }, { w: 3, d: "Sep 27", o: "KC", h: 1 }, { w: 4, d: "Oct 4", o: "MIN", h: 0 }, { w: 5, d: "Oct 11", o: "CIN", h: 1 }, { w: 6, d: "Oct 18", o: "BYE", h: 0 }, { w: 7, d: "Oct 25", o: "NYJ", h: 0 }, { w: 8, d: "Nov 1", o: "NE", h: 1 }, { w: 9, d: "Nov 8", o: "DET", h: 1 }, { w: 10, d: "Nov 15", o: "IND", h: 0 }, { w: 11, d: "Nov 22", o: "BUF", h: 0 }, { w: 12, d: "Nov 29", o: "NYJ", h: 1 }, { w: 13, d: "Dec 6", o: "DEN", h: 0 }, { w: 14, d: "Dec 13", o: "CHI", h: 1 }, { w: 15, d: "Dec 20", o: "GB", h: 0 }, { w: 16, d: "TBD", o: "LAC", h: 1 }, { w: 17, d: "Jan 3", o: "BUF", h: 1 }, { w: 18, d: "Jan 9", o: "NE", h: 0 }],
    MIN: [{ w: 1, d: "Sep 13", o: "GB", h: 1 }, { w: 2, d: "Sep 20", o: "CHI", h: 0 }, { w: 3, d: "Sep 27", o: "TB", h: 0 }, { w: 4, d: "Oct 4", o: "MIA", h: 1 }, { w: 5, d: "Oct 11", o: "NO", h: 0 }, { w: 6, d: "Oct 18", o: "BYE", h: 0 }, { w: 7, d: "Oct 25", o: "IND", h: 1 }, { w: 8, d: "Nov 1", o: "DET", h: 0 }, { w: 9, d: "Nov 9", o: "BUF", h: 1 }, { w: 10, d: "Nov 15", o: "GB", h: 0 }, { w: 11, d: "Nov 22", o: "SF", h: 1 }, { w: 12, d: "Nov 29", o: "ATL", h: 1 }, { w: 13, d: "Dec 6", o: "CAR", h: 1 }, { w: 14, d: "Dec 10", o: "NE", h: 0 }, { w: 15, d: "Dec 20", o: "DET", h: 1 }, { w: 16, d: "TBD", o: "WAS", h: 1 }, { w: 17, d: "Jan 3", o: "NYJ", h: 0 }, { w: 18, d: "Jan 9", o: "CHI", h: 1 }],
    NE: [{ w: 1, d: "Sep 9", o: "SEA", h: 0 }, { w: 2, d: "Sep 20", o: "PIT", h: 1 }, { w: 3, d: "Sep 27", o: "JAC", h: 0 }, { w: 4, d: "Oct 4", o: "BUF", h: 0 }, { w: 5, d: "Oct 11", o: "LV", h: 1 }, { w: 6, d: "Oct 18", o: "NYJ", h: 1 }, { w: 7, d: "Oct 22", o: "CHI", h: 0 }, { w: 8, d: "Nov 1", o: "MIA", h: 0 }, { w: 9, d: "Nov 8", o: "GB", h: 1 }, { w: 10, d: "Nov 15", o: "DET", h: 0 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 29", o: "LAC", h: 0 }, { w: 13, d: "Dec 6", o: "BUF", h: 1 }, { w: 14, d: "Dec 10", o: "MIN", h: 1 }, { w: 15, d: "Dec 21", o: "KC", h: 0 }, { w: 16, d: "Dec 27", o: "NYJ", h: 0 }, { w: 17, d: "Jan 3", o: "DEN", h: 1 }, { w: 18, d: "Jan 9", o: "MIA", h: 1 }],
    NO: [{ w: 1, d: "Sep 13", o: "DET", h: 0 }, { w: 2, d: "Sep 20", o: "BAL", h: 0 }, { w: 3, d: "Sep 27", o: "LV", h: 1 }, { w: 4, d: "Oct 5", o: "ATL", h: 1 }, { w: 5, d: "Oct 11", o: "MIN", h: 1 }, { w: 6, d: "Oct 18", o: "NYG", h: 0 }, { w: 7, d: "Oct 25", o: "PIT", h: 1 }, { w: 8, d: "Nov 1", o: "BYE", h: 0 }, { w: 9, d: "Nov 8", o: "CLE", h: 1 }, { w: 10, d: "Nov 15", o: "CAR", h: 1 }, { w: 11, d: "Nov 22", o: "CHI", h: 0 }, { w: 12, d: "Nov 29", o: "CIN", h: 0 }, { w: 13, d: "Dec 6", o: "GB", h: 1 }, { w: 14, d: "Dec 13", o: "CAR", h: 0 }, { w: 15, d: "Dec 20", o: "TB", h: 0 }, { w: 16, d: "Dec 27", o: "ARI", h: 1 }, { w: 17, d: "Jan 3", o: "ATL", h: 0 }, { w: 18, d: "Jan 9", o: "TB", h: 1 }],
    NYG: [{ w: 1, d: "Sep 13", o: "DAL", h: 1 }, { w: 2, d: "Sep 21", o: "LA", h: 0 }, { w: 3, d: "Sep 27", o: "TEN", h: 1 }, { w: 4, d: "Oct 4", o: "ARI", h: 1 }, { w: 5, d: "Oct 11", o: "WAS", h: 0 }, { w: 6, d: "Oct 18", o: "NO", h: 1 }, { w: 7, d: "Oct 25", o: "HOU", h: 0 }, { w: 8, d: "Nov 1", o: "BYE", h: 0 }, { w: 9, d: "Nov 8", o: "PHI", h: 0 }, { w: 10, d: "Nov 12", o: "WAS", h: 1 }, { w: 11, d: "Nov 22", o: "JAC", h: 1 }, { w: 12, d: "Nov 29", o: "IND", h: 0 }, { w: 13, d: "Dec 6", o: "SF", h: 1 }, { w: 14, d: "Dec 13", o: "SEA", h: 0 }, { w: 15, d: "Dec 20", o: "CLE", h: 1 }, { w: 16, d: "Dec 28", o: "DET", h: 0 }, { w: 17, d: "Jan 3", o: "DAL", h: 0 }, { w: 18, d: "Jan 9", o: "PHI", h: 1 }],
    NYJ: [{ w: 1, d: "Sep 13", o: "TEN", h: 0 }, { w: 2, d: "Sep 20", o: "GB", h: 1 }, { w: 3, d: "Sep 27", o: "DET", h: 0 }, { w: 4, d: "Oct 4", o: "CHI", h: 0 }, { w: 5, d: "Oct 11", o: "CLE", h: 1 }, { w: 6, d: "Oct 18", o: "NE", h: 0 }, { w: 7, d: "Oct 25", o: "MIA", h: 1 }, { w: 8, d: "Nov 1", o: "LV", h: 1 }, { w: 9, d: "Nov 8", o: "KC", h: 0 }, { w: 10, d: "Nov 15", o: "BUF", h: 1 }, { w: 11, d: "Nov 22", o: "LAC", h: 0 }, { w: 12, d: "Nov 29", o: "MIA", h: 0 }, { w: 13, d: "Dec 6", o: "BYE", h: 0 }, { w: 14, d: "Dec 13", o: "DEN", h: 1 }, { w: 15, d: "Dec 20", o: "ARI", h: 0 }, { w: 16, d: "Dec 27", o: "NE", h: 1 }, { w: 17, d: "Jan 3", o: "MIN", h: 1 }, { w: 18, d: "Jan 9", o: "BUF", h: 0 }],
    PHI: [{ w: 1, d: "Sep 13", o: "WAS", h: 1 }, { w: 2, d: "Sep 20", o: "TEN", h: 0 }, { w: 3, d: "Sep 28", o: "CHI", h: 0 }, { w: 4, d: "Oct 4", o: "LA", h: 1 }, { w: 5, d: "Oct 11", o: "JAC", h: 1 }, { w: 6, d: "Oct 18", o: "CAR", h: 1 }, { w: 7, d: "Oct 26", o: "DAL", h: 1 }, { w: 8, d: "Nov 1", o: "WAS", h: 0 }, { w: 9, d: "Nov 8", o: "NYG", h: 1 }, { w: 10, d: "Nov 15", o: "BYE", h: 0 }, { w: 11, d: "Nov 22", o: "PIT", h: 1 }, { w: 12, d: "Nov 26", o: "DAL", h: 0 }, { w: 13, d: "Dec 6", o: "ARI", h: 0 }, { w: 14, d: "Dec 13", o: "IND", h: 1 }, { w: 15, d: "Dec 19", o: "SEA", h: 1 }, { w: 16, d: "Dec 24", o: "HOU", h: 1 }, { w: 17, d: "Jan 3", o: "SF", h: 0 }, { w: 18, d: "Jan 9", o: "NYG", h: 0 }],
    PIT: [{ w: 1, d: "Sep 13", o: "ATL", h: 1 }, { w: 2, d: "Sep 20", o: "NE", h: 0 }, { w: 3, d: "Sep 27", o: "CIN", h: 1 }, { w: 4, d: "Oct 1", o: "CLE", h: 0 }, { w: 5, d: "Oct 11", o: "IND", h: 1 }, { w: 6, d: "Oct 18", o: "TB", h: 0 }, { w: 7, d: "Oct 25", o: "NO", h: 0 }, { w: 8, d: "Nov 1", o: "CLE", h: 1 }, { w: 9, d: "Nov 8", o: "BYE", h: 0 }, { w: 10, d: "Nov 15", o: "CIN", h: 0 }, { w: 11, d: "Nov 22", o: "PHI", h: 0 }, { w: 12, d: "Nov 27", o: "DEN", h: 1 }, { w: 13, d: "Dec 6", o: "HOU", h: 1 }, { w: 14, d: "Dec 14", o: "JAC", h: 0 }, { w: 15, d: "Dec 20", o: "BAL", h: 1 }, { w: 16, d: "TBD", o: "CAR", h: 1 }, { w: 17, d: "Jan 3", o: "TEN", h: 0 }, { w: 18, d: "Jan 9", o: "BAL", h: 0 }],
    SEA: [{ w: 1, d: "Sep 9", o: "NE", h: 1 }, { w: 2, d: "Sep 20", o: "ARI", h: 0 }, { w: 3, d: "Sep 27", o: "WAS", h: 0 }, { w: 4, d: "Oct 4", o: "LAC", h: 1 }, { w: 5, d: "Oct 11", o: "SF", h: 1 }, { w: 6, d: "Oct 15", o: "DEN", h: 0 }, { w: 7, d: "Oct 25", o: "KC", h: 1 }, { w: 8, d: "Nov 2", o: "CHI", h: 1 }, { w: 9, d: "Nov 8", o: "ARI", h: 1 }, { w: 10, d: "Nov 15", o: "LV", h: 0 }, { w: 11, d: "Nov 22", o: "BYE", h: 0 }, { w: 12, d: "Nov 29", o: "SF", h: 0 }, { w: 13, d: "Dec 7", o: "DAL", h: 1 }, { w: 14, d: "Dec 13", o: "NYG", h: 1 }, { w: 15, d: "Dec 19", o: "PHI", h: 0 }, { w: 16, d: "Dec 25", o: "LA", h: 1 }, { w: 17, d: "Jan 3", o: "CAR", h: 0 }, { w: 18, d: "Jan 9", o: "LA", h: 0 }],
    SF: [{ w: 1, d: "Sep 10", o: "LA", h: 0 }, { w: 2, d: "Sep 20", o: "MIA", h: 1 }, { w: 3, d: "Sep 27", o: "ARI", h: 1 }, { w: 4, d: "Oct 4", o: "DEN", h: 1 }, { w: 5, d: "Oct 11", o: "SEA", h: 0 }, { w: 6, d: "Oct 19", o: "WAS", h: 1 }, { w: 7, d: "Oct 25", o: "ATL", h: 0 }, { w: 8, d: "Nov 1", o: "BYE", h: 0 }, { w: 9, d: "Nov 8", o: "LV", h: 1 }, { w: 10, d: "Nov 15", o: "DAL", h: 0 }, { w: 11, d: "Nov 22", o: "MIN", h: 0 }, { w: 12, d: "Nov 29", o: "SEA", h: 1 }, { w: 13, d: "Dec 6", o: "NYG", h: 0 }, { w: 14, d: "Dec 13", o: "LA", h: 1 }, { w: 15, d: "Dec 17", o: "LAC", h: 0 }, { w: 16, d: "Dec 27", o: "KC", h: 0 }, { w: 17, d: "Jan 3", o: "PHI", h: 1 }, { w: 18, d: "Jan 9", o: "ARI", h: 0 }],
    TB: [{ w: 1, d: "Sep 13", o: "CIN", h: 0 }, { w: 2, d: "Sep 20", o: "CLE", h: 1 }, { w: 3, d: "Sep 27", o: "MIN", h: 1 }, { w: 4, d: "Oct 4", o: "GB", h: 1 }, { w: 5, d: "Oct 8", o: "DAL", h: 0 }, { w: 6, d: "Oct 18", o: "PIT", h: 1 }, { w: 7, d: "Oct 25", o: "CAR", h: 0 }, { w: 8, d: "Nov 1", o: "ATL", h: 1 }, { w: 9, d: "Nov 8", o: "CHI", h: 0 }, { w: 10, d: "Nov 15", o: "BYE", h: 0 }, { w: 11, d: "Nov 22", o: "DET", h: 0 }, { w: 12, d: "Nov 30", o: "CAR", h: 1 }, { w: 13, d: "Dec 6", o: "LAC", h: 1 }, { w: 14, d: "Dec 13", o: "BAL", h: 0 }, { w: 15, d: "Dec 20", o: "NO", h: 1 }, { w: 16, d: "TBD", o: "ATL", h: 0 }, { w: 17, d: "Jan 3", o: "LA", h: 1 }, { w: 18, d: "Jan 9", o: "NO", h: 0 }],
    TEN: [{ w: 1, d: "Sep 13", o: "NYJ", h: 1 }, { w: 2, d: "Sep 20", o: "PHI", h: 1 }, { w: 3, d: "Sep 27", o: "NYG", h: 0 }, { w: 4, d: "Oct 4", o: "BAL", h: 0 }, { w: 5, d: "Oct 11", o: "HOU", h: 1 }, { w: 6, d: "Oct 18", o: "IND", h: 0 }, { w: 7, d: "Oct 25", o: "CLE", h: 1 }, { w: 8, d: "Nov 1", o: "CIN", h: 0 }, { w: 9, d: "Nov 8", o: "BYE", h: 0 }, { w: 10, d: "Nov 15", o: "JAC", h: 1 }, { w: 11, d: "Nov 22", o: "DAL", h: 0 }, { w: 12, d: "Nov 29", o: "JAC", h: 0 }, { w: 13, d: "Dec 6", o: "WAS", h: 1 }, { w: 14, d: "Dec 13", o: "DET", h: 0 }, { w: 15, d: "Dec 20", o: "IND", h: 1 }, { w: 16, d: "Dec 27", o: "LV", h: 0 }, { w: 17, d: "Jan 3", o: "PIT", h: 1 }, { w: 18, d: "Jan 9", o: "HOU", h: 0 }],
    WAS: [{ w: 1, d: "Sep 13", o: "PHI", h: 0 }, { w: 2, d: "Sep 20", o: "DAL", h: 0 }, { w: 3, d: "Sep 27", o: "SEA", h: 1 }, { w: 4, d: "Oct 4", o: "IND", h: 1 }, { w: 5, d: "Oct 11", o: "NYG", h: 0 }, { w: 6, d: "Oct 19", o: "SF", h: 0 }, { w: 7, d: "Oct 25", o: "BYE", h: 0 }, { w: 8, d: "Nov 1", o: "PHI", h: 1 }, { w: 9, d: "Nov 8", o: "LA", h: 1 }, { w: 10, d: "Nov 12", o: "NYG", h: 0 }, { w: 11, d: "Nov 23", o: "CIN", h: 1 }, { w: 12, d: "Nov 29", o: "ARI", h: 0 }, { w: 13, d: "Dec 6", o: "TEN", h: 0 }, { w: 14, d: "Dec 13", o: "HOU", h: 1 }, { w: 15, d: "Dec 20", o: "ATL", h: 1 }, { w: 16, d: "Dec 27", o: "MIN", h: 0 }, { w: 17, d: "Jan 3", o: "JAC", h: 0 }, { w: 18, d: "Jan 9", o: "DAL", h: 1 }],
};

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let currentTeam = null;
let picks = {}; // { "w1": "W"|"L", ... }

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────
function badgeStyle(abbr, size = 40) {
    const t = TEAMS[abbr];
    if (!t) return '';
    return `background: linear-gradient(135deg, ${t.c[0]} 55%, ${t.c[1]} 100%); width:${size}px; height:${size}px; border-radius:${Math.round(size * 0.175)}px; font-size:${Math.round(size * 0.27)}px;`;
}

function grouped() {
    const g = {};
    for (const [abbr, t] of Object.entries(TEAMS)) {
        const k = `${t.conf} · ${t.div}`;
        if (!g[k]) g[k] = [];
        g[k].push(abbr);
    }
    return g;
}

// ─────────────────────────────────────────
// RENDER TEAM PICKER
// ─────────────────────────────────────────
function renderTeams() {
    const q = document.getElementById('search').value.toLowerCase();
    const list = document.getElementById('team-list');
    list.innerHTML = '';

    if (q) {
        const matches = Object.entries(TEAMS).filter(([a, t]) =>
            t.name.toLowerCase().includes(q) || a.toLowerCase().includes(q)
        );
        const grid = document.createElement('div');
        grid.className = 'team-grid';
        matches.forEach(([abbr, t]) => grid.appendChild(makeCard(abbr, t)));
        list.appendChild(grid);
        return;
    }

    const g = grouped();
    Object.entries(g).sort().forEach(([label, abbrs]) => {
        const sec = document.createElement('div');
        sec.className = 'conf-group';
        sec.innerHTML = `<div class="conf-label">${label}</div>`;
        const grid = document.createElement('div');
        grid.className = 'team-grid';
        abbrs.forEach(abbr => grid.appendChild(makeCard(abbr, TEAMS[abbr])));
        sec.appendChild(grid);
        list.appendChild(sec);
    });
}

function makeCard(abbr, t) {
    const div = document.createElement('div');
    div.className = 'team-card';
    div.innerHTML = `
    <div class="badge" style="${badgeStyle(abbr, 40)}">${abbr}</div>
    <div class="team-card-info">
      <div class="team-card-city">${t.city}</div>
      <div class="team-card-div">${t.conf} · ${t.div}</div>
    </div>`;
    div.onclick = () => selectTeam(abbr);
    return div;
}

// ─────────────────────────────────────────
// SELECT TEAM → show schedule screen
// ─────────────────────────────────────────
function selectTeam(abbr) {
    currentTeam = abbr;
    picks = {};
    const t = TEAMS[abbr];

    document.getElementById('picker').style.display = 'none';
    document.getElementById('schedule').style.display = 'block';
    window.scrollTo(0, 0);

    // Header badge + title
    const badgeEl = document.getElementById('sched-badge');
    badgeEl.style.cssText = badgeStyle(abbr, 50);
    badgeEl.textContent = abbr;

    document.getElementById('sched-title').textContent = t.name.toUpperCase();
    document.getElementById('sched-sub').textContent = `${t.conf} · ${t.div} DIVISION`;

    // Card header
    const cardBadge = document.getElementById('card-badge');
    cardBadge.style.cssText = badgeStyle(abbr, 50);
    cardBadge.textContent = abbr;
    document.getElementById('card-name').textContent = t.name.toUpperCase();

    // Export button color
    document.getElementById('export-btn').style.background = t.c[1] || '#e94560';

    // Card header gradient
    document.getElementById('card-head').style.background =
        `linear-gradient(135deg, ${t.c[0]}cc, ${t.c[1]}66)`;

    renderRows();
    updateStats();
}

function goBack() {
    document.getElementById('schedule').style.display = 'none';
    document.getElementById('picker').style.display = 'block';
    currentTeam = null;
    picks = {};
    window.scrollTo(0, 0);
}

// ─────────────────────────────────────────
// RENDER GAME ROWS
// ─────────────────────────────────────────
function renderRows() {
    const container = document.getElementById('game-rows');
    container.innerHTML = '';
    const games = SCHEDULES[currentTeam] || [];

    games.forEach(g => {
        const isBye = g.o === 'BYE';
        const pick = picks[`w${g.w}`];
        const row = document.createElement('div');

        let rowClass = 'game-row';
        if (isBye) rowClass += ' bye-row';
        else if (pick === 'W') rowClass += ' win-row';
        else if (pick === 'L') rowClass += ' loss-row';
        row.className = rowClass;

        if (isBye) {
            row.innerHTML = `
        <div class="col-week">WK ${g.w}</div>
        <div class="col-date">${g.d}</div>
        <div class="bye-label">— BYE WEEK —</div>`;
        } else {
            const opp = TEAMS[g.o] || {};
            const wBtn = `<button class="pick-btn${pick === 'W' ? ' active-w' : ''}" onclick="doPick('w${g.w}','W')">W</button>`;
            const lBtn = `<button class="pick-btn${pick === 'L' ? ' active-l' : ''}" onclick="doPick('w${g.w}','L')">L</button>`;
            row.innerHTML = `
        <div class="col-week">WK ${g.w}</div>
        <div class="col-date">${g.d}</div>
        <div class="ha-pill ${g.h ? 'ha-home' : 'ha-away'}">${g.h ? 'HOME' : 'AWAY'}</div>
        <div class="opp-wrap">
          <div class="opp-badge" style="${badgeStyle(g.o, 30)}">${g.o}</div>
          <div class="opp-name">${opp.name || g.o}</div>
        </div>
        <div class="pick-btns">${wBtn}${lBtn}</div>`;
        }
        container.appendChild(row);
    });
}

function doPick(key, val) {
    // Toggle: clicking same pick again clears it
    picks[key] = picks[key] === val ? undefined : val;
    renderRows();
    updateStats();
}

function updateStats() {
    const games = (SCHEDULES[currentTeam] || []).filter(g => g.o !== 'BYE');
    const w = Object.values(picks).filter(v => v === 'W').length;
    const l = Object.values(picks).filter(v => v === 'L').length;
    const u = games.length - w - l;
    document.getElementById('stat-w').textContent = w;
    document.getElementById('stat-l').textContent = l;
    document.getElementById('stat-u').textContent = u;
    document.getElementById('rec-w').textContent = `${w}W`;
    document.getElementById('rec-l').textContent = `${l}L`;
}

// ─────────────────────────────────────────
// EXPORT — pure Canvas API, no libraries
// ─────────────────────────────────────────
function exportImage() {
    const abbr = currentTeam;
    const t = TEAMS[abbr];
    const games = SCHEDULES[abbr] || [];
    const [p1, p2] = t.c;

    const W = 700;
    const ROW = 44;
    const HEAD = 90;
    const FOOT = 36;
    const PAD = 28;
    const DPR = 2;
    const H = HEAD + games.length * ROW + FOOT;

    const cv = document.createElement('canvas');
    cv.width = W * DPR;
    cv.height = H * DPR;
    const cx = cv.getContext('2d');
    cx.scale(DPR, DPR);

    // bg
    cx.fillStyle = '#0a0a14';
    cx.fillRect(0, 0, W, H);

    // header gradient
    const hg = cx.createLinearGradient(0, 0, W, HEAD);
    hg.addColorStop(0, p1 + 'cc');
    hg.addColorStop(1, p2 + '66');
    cx.fillStyle = hg;
    cx.fillRect(0, 0, W, HEAD);

    // team badge
    const bs = 52, bx = PAD, by = (HEAD - bs) / 2;
    const bg = cx.createLinearGradient(bx, by, bx + bs, by + bs);
    bg.addColorStop(0, p1); bg.addColorStop(1, p2);
    cx.fillStyle = bg;
    rr(cx, bx, by, bs, bs, 8); cx.fill();
    cx.fillStyle = '#fff';
    cx.font = `bold ${Math.floor(bs * .28)}px Oswald,sans-serif`;
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillText(abbr, bx + bs / 2, by + bs / 2);

    // team name
    cx.textAlign = 'left';
    cx.fillStyle = '#ffffff';
    cx.font = 'bold 21px Oswald,sans-serif';
    cx.fillText(t.name.toUpperCase(), bx + bs + 16, by + 15);
    cx.fillStyle = 'rgba(255,255,255,.4)';
    cx.font = '500 10px DM Sans,sans-serif';
    cx.fillText('2026 SEASON PREDICTIONS', bx + bs + 16, by + 34);

    // record
    const wins = Object.values(picks).filter(v => v === 'W').length;
    const losses = Object.values(picks).filter(v => v === 'L').length;
    cx.textAlign = 'right';
    cx.font = 'bold 26px Oswald,sans-serif';
    cx.fillStyle = '#22c55e'; cx.fillText(`${wins}W`, W - PAD - 34, HEAD / 2 + 6);
    cx.fillStyle = '#444'; cx.font = 'bold 18px Oswald,sans-serif';
    cx.fillText('–', W - PAD - 12, HEAD / 2 + 4);
    cx.fillStyle = '#e94560'; cx.font = 'bold 26px Oswald,sans-serif';
    cx.fillText(`${losses}L`, W - PAD, HEAD / 2 + 6);

    // rows
    games.forEach((g, i) => {
        const y = HEAD + i * ROW;
        const isBye = g.o === 'BYE';
        const pick = picks[`w${g.w}`];
        const mid = y + ROW / 2;

        if (!isBye) {
            if (pick === 'W') { cx.fillStyle = 'rgba(34,197,94,.07)'; cx.fillRect(0, y, W, ROW); }
            if (pick === 'L') { cx.fillStyle = 'rgba(233,69,96,.07)'; cx.fillRect(0, y, W, ROW); }
        } else {
            cx.fillStyle = 'rgba(255,255,255,.015)'; cx.fillRect(0, y, W, ROW);
        }
        cx.strokeStyle = '#0f0f1e'; cx.lineWidth = 1;
        cx.beginPath(); cx.moveTo(0, y + ROW); cx.lineTo(W, y + ROW); cx.stroke();

        cx.textBaseline = 'middle';
        cx.fillStyle = isBye ? '#2a2a3a' : '#3a3a55';
        cx.font = '600 10px DM Sans,sans-serif'; cx.textAlign = 'left';
        cx.fillText(`WK ${g.w}`, PAD, mid);

        cx.fillStyle = isBye ? '#2a2a3a' : '#444'; cx.font = '400 11px DM Sans,sans-serif';
        cx.fillText(g.d, PAD + 50, mid);

        if (isBye) {
            cx.fillStyle = '#2a2a3a'; cx.font = '500 12px Oswald,sans-serif';
            cx.fillText('— BYE WEEK —', PAD + 120, mid);
            return;
        }

        // home/away
        cx.fillStyle = g.h ? 'rgba(74,222,128,.12)' : 'rgba(249,115,22,.12)';
        rr(cx, PAD + 112, mid - 9, 38, 18, 4); cx.fill();
        cx.fillStyle = g.h ? '#4ade80' : '#f97316';
        cx.font = 'bold 8px DM Sans,sans-serif'; cx.textAlign = 'center';
        cx.fillText(g.h ? 'HOME' : 'AWAY', PAD + 112 + 19, mid);

        // opp badge
        const oc = (TEAMS[g.o] || {}).c || ['#333', '#666'];
        const os = 30, ox = PAD + 160, oy = mid - os / 2;
        const og = cx.createLinearGradient(ox, oy, ox + os, oy + os);
        og.addColorStop(0, oc[0]); og.addColorStop(1, oc[1]);
        cx.fillStyle = og; rr(cx, ox, oy, os, os, 5); cx.fill();
        cx.fillStyle = '#fff'; cx.font = `bold ${Math.floor(os * .27)}px Oswald,sans-serif`;
        cx.textAlign = 'center'; cx.fillText(g.o, ox + os / 2, mid);

        // opp name
        cx.textAlign = 'left'; cx.fillStyle = '#bbb';
        cx.font = '600 13px Oswald,sans-serif';
        cx.fillText((TEAMS[g.o] || {}).name || g.o, ox + os + 10, mid);

        // pick pill
        const pw = 42, ph = 26, px2 = W - PAD - pw, py2 = mid - ph / 2;
        if (pick) {
            cx.fillStyle = pick === 'W' ? '#22c55e' : '#e94560';
            cx.shadowColor = pick === 'W' ? 'rgba(34,197,94,.5)' : 'rgba(233,69,96,.5)';
            cx.shadowBlur = 10;
            rr(cx, px2, py2, pw, ph, 6); cx.fill();
            cx.shadowBlur = 0;
            cx.fillStyle = '#fff'; cx.font = 'bold 13px Oswald,sans-serif';
            cx.textAlign = 'center'; cx.fillText(pick, px2 + pw / 2, mid);
        } else {
            cx.fillStyle = '#13131f'; rr(cx, px2, py2, pw, ph, 6); cx.fill();
            cx.fillStyle = '#2a2a3a'; cx.font = 'bold 14px Oswald,sans-serif';
            cx.textAlign = 'center'; cx.fillText('?', px2 + pw / 2, mid);
        }
    });

    // footer
    const fy = HEAD + games.length * ROW;
    cx.fillStyle = '#0a0a14'; cx.fillRect(0, fy, W, FOOT);
    cx.strokeStyle = '#0f0f1e'; cx.lineWidth = 1;
    cx.beginPath(); cx.moveTo(0, fy); cx.lineTo(W, fy); cx.stroke();
    cx.fillStyle = '#1e1e2e'; cx.font = '500 9px DM Sans,sans-serif';
    cx.textAlign = 'right'; cx.textBaseline = 'middle';
    cx.fillText('NFL SEASON PREDICTOR 2026', W - PAD, fy + FOOT / 2);

    // download
    const a = document.createElement('a');
    a.download = `${abbr}_2026_predictions.png`;
    a.href = cv.toDataURL('image/png');
    a.click();
}

// rounded rect helper (polyfill for older browsers)
function rr(cx, x, y, w, h, r) {
    cx.beginPath();
    cx.moveTo(x + r, y);
    cx.lineTo(x + w - r, y);
    cx.quadraticCurveTo(x + w, y, x + w, y + r);
    cx.lineTo(x + w, y + h - r);
    cx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    cx.lineTo(x + r, y + h);
    cx.quadraticCurveTo(x, y + h, x, y + h - r);
    cx.lineTo(x, y + r);
    cx.quadraticCurveTo(x, y, x + r, y);
    cx.closePath();
}

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
renderTeams();