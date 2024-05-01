import { getBookings, getBands, getVenues } from "./database.js"

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()


// Function to find the venue for a booking
const findVenue = (booking, allVenues) => {
    let bookedVenue = ""

    for (const venue of allVenues) {
        if (venue.id === booking.productId) {
            bookedVenue = venue
        }
    }

    return bookedVenue
}

// Function to find the band for a booking
const findBand = (booking, allBands) => {
    let bookedBand = ""

    for (const band of allBands) {
        if (band.id === booking.employeeId) {
            bookedBand = band
        }
    }

    return bookedBand
}

export const Bookings = () => {
    let html = ""
    html = "<ul class='bookingList'>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li>${venue.name} was sold by ${band.name} on ${new Date(booking.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}