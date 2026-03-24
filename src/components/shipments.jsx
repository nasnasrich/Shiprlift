const shipments = [
  {
    trackingCode: "SHIP123456",
    receiver: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+123456789"
    },
    status: "In Transit", // "On Hold", "Delivered"
    location: {
      lat: 6.5244,
      lng: 3.3792
    },
    history: [
      "Shipment created",
      "Left warehouse",
      "In transit"
    ]
  },
  {
    trackingCode: "SHIP987654",
    receiver: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+987654321"
    },
    status: "On Hold",
    location: {
      lat: 51.5074,
      lng: -0.1278
    },
    history: [
      "Shipment created",
      "Delayed - customs hold"
    ]
  }
];

export default shipments;