const database = {
    venues: [{
        id: 1,
        name: "The Mahogany Lounge",
        address: "123 Melody Street, Harmony City, USA",
        squareFootage: 1500,
        maxCapacity: 150

    }, {
        id: 2,
        name: "The Starlight Cellar",
        address: "456 Underground Avenue, Grooveville, USA",
        squareFootage: 800,
        maxCapacity: 80

    }, {
        id: 3,
        name: "The Electric Attic",
        address: "789 Amp Lane, Rocktown, USA",
        squareFootage: 1200,
        maxCapacity: 100

    }, {
        id: 4,
        name: "The Cabana Collective",
        address: "101 Ocean Breeze Drive, Tropic Isle, USA",
        squareFootage: 2100,
        maxCapacity: 200

    }, {
        id: 5,
        name: "The Neon Nook",
        address: "789 Electric Avenue, Retro City, USA",
        squareFootage: 1000,
        maxCapacity: 100

    }],
    bands: [{
        id: 1,
        name: "Ctrl+Alt+Groove",
        numberOfMembers: 3,
        genre: "New-Jack Swing",
        established: "2000",
        hitSong: "Shortcut To My Heart"
    }, {
        id: 2,
        name: "Boy Bandwidth 4.0",
        numberOfMembers: 4,
        genre: "Upgraded Boy Band",
        established: "2001",
        hitSong: "USB In Love"

    }, {
        id: 3,
        name: "Rhythm & Rhinestones",
        numberOfMembers: 2,
        genre: "Glittering R&B/Country",
        established: "1990",
        hitSong: "You're a Gem"

    }, {
        id: 4,
        name: "The Hip-Hop Floppies",
        numberOfMembers: 3,
        genre: "Retro Hip-Hop Fusion",
        established: "1994",
        hitSong: "Save My Love (On a 3.5-Inch Disk)"

    }, {
        id: 5,
        name: "Soulful Saddle",
        numberOfMembers: 4,
        genre: "Country/Neo-Soul",
        established: "1995",
        hitSong: "Midnight Trail"

    }, {
        id: 6,
        name: "Beggars Clan",
        numberOfMembers: 10,
        genre: "Funk/Rock/Reggae",
        established: "2013",
        hitSong: "Beautiful World"

    }, {
        id: 7,
        name: "RedLine Band",
        numberOfMembers: 7,
        genre: "Neo-Soul/Funk",
        established: "2017",
        hitSong: "Moments Of Truth"

    },

],
    bookings: [{
        id: 1, venueId: 2, bandId: 3, timestamp: 1654321000
    }, {
        id: 2, venueId: 3, bandId: 1, timestamp: 1654322000
    }, {
        id: 3, venueId: 1, bandId: 2, timestamp: 1654323000
    }, {
        id: 4, venueId: 1, bandId: 6, timestamp: 1654324000
    }, {
        id: 5, venueId: 3, bandId: 7, timestamp: 1654325000
    }, {
        id: 6, venueId: 2, bandId: 5, timestamp: 1654326000
    }, {
        id: 7, venueId: 4, bandId: 4, timestamp: 1654327000
    }, {
        id: 8, venueId: 4, bandId: 7, timestamp: 1654328000
    }, {
        id: 9, venueId: 5, bandId: 1, timestamp: 1654329000
    }, {
        id: 10, venueId: 5, bandId: 6, timestamp: 1654330000
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

