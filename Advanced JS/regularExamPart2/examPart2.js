class FlightBookingSystem {
  constructor(agencyName) {
    this.agencyName = agencyName;
    this.flightsList = [];
    this.bookingsList = [];
    this.bookingsCount = 0;
  }

  addFlight(flightNumber, destination, departureTime, price) {
    for (const flight of this.flightsList) {
      if (flight.flightNumber === flightNumber) {
        return `Flight ${flightNumber} to ${destination} is already available.`;
      }
    }

    this.flightsList.push({
      flightNumber,
      destination,
      departureTime,
      price,
    });

    return `Flight ${flightNumber} to ${destination} has been added to the system.`;
  }

  bookFlight(passengerName, flightNumber) {
    const selectedFlight = this.flightsList.find(
      (f) => f.flightNumber === flightNumber
    );
    if (!selectedFlight) {
      return `Flight ${flightNumber} is not available for booking.`;
    }

    this.bookingsList.push({ passengerName, flightNumber });
    this.bookingsCount++;
    return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
  }

  cancelBooking(passengerName, flightNumber) {
    const bookingIndex = this.bookingsList.findIndex(
      (booking) =>
        booking.passengerName === passengerName &&
        booking.flightNumber === flightNumber
    );

    if (bookingIndex === -1) {
      return `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`;
    }

    this.bookingsList.splice(bookingIndex, 1);
    this.bookingsCount--;

    return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
  }

  showBookings(criteria) {
    if (this.bookingsList.length === 0) {
      return "No bookings have been made yet.";
    }

    if (criteria === "all") {
      const allBookingList = this.bookingsList.map(
        (booking) =>
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
      );
      return [`All bookings(${this.bookingsCount}):`, ...allBookingList].join(
        "\n"
      );
    } else if (criteria === "cheap") {
      const cheapBookings = this.bookingsList.filter((booking) => {
        const flight = this.flightsList.find(
          (f) => f.flightNumber === booking.flightNumber
        );
        return flight.price <= 100;
      });

      if (cheapBookings.length === 0) {
        return "No cheap bookings found.";
      }

      const cheapBookingList = cheapBookings.map(
        (booking) =>
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
      );
      return ["Cheap bookings:", ...cheapBookingList].join("\n");
    } else if (criteria === "expensive") {
      const expensiveBookings = this.bookingsList.filter((booking) => {
        const flight = this.flightsList.find(
          (f) => f.flightNumber === booking.flightNumber
        );
        return flight.price > 100;
      });

      if (expensiveBookings.length === 0) {
        return "No expensive bookings found.";
      }

      const expensiveBookingList = expensiveBookings.map(
        (booking) =>
          `${booking.passengerName} booked for flight ${booking.flightNumber}.`
      );
      return ["Expensive bookings:", ...expensiveBookingList].join("\n");
    } else {
      return "Invalid booking criteria.";
    }
  }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
