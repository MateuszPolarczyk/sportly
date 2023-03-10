import { Category, Feature, Facility, Booking } from "../types";

const Categories: Category[] = [
    {
        id: "aa",
        title: "Piłka Nożna",
        icon: require("../assets/images/football.png")
    },
    {
        id: "bb",
        title: "Siatkówka",
        icon: require("../assets/images/volleyball.png")
    },
    {
        id: "cc",
        title: "Koszykówka",
        icon: require("../assets/images/basketball.png")
    },
    {
        id: "dd",
        title: "Piłka Ręczna",
        icon: require("../assets/images/handball.png")
    },
    {
        id: "ee",
        title: "Ping Pong",
        icon: require("../assets/images/pingpong.png")
    },
    {
        id: "ff",
        title: "Badminton",
        icon: require("../assets/images/badminton.png")
    },
    {
        id: "gg",
        title: "Tenis",
        icon: require("../assets/images/tenis.png")
    },
    {
        id: "hh",
        title: "Yoga",
        icon: require("../assets/images/yoga.png")
    },
    {
        id: "ii",
        title: "Karate",
        icon: require("../assets/images/karate.png")
    }
]

const Features: Feature[] = [
    {
        id: "aa",
        title: "WIFI",
        icon: require("../assets/images/wifi.png")
    },
    {
        id: "bb",
        title: "Prysznic",
        icon: require("../assets/images/shower.png")
    },
    {
        id: "cc",
        title: "Szatnia",
        icon: require("../assets/images/changingroom.png")
    },
    {
        id: "dd",
        title: "Parking",
        icon: require("../assets/images/parking.png")
    }
]

const Facilities: Facility[] = [
    {
        id: "aaa",
        title: "Hala Sportowa Ostrzeszów",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin fermentum sagittis. Quisque dui odio, placerat quis tincidunt sed, porttitor id mi. Duis suscipit nulla purus, quis egestas turpis congue ut. Duis.",
        open_hours: {
            open_hour: "8:00",
            close_hour: "22:00"
        },
        contact: {
            telephone: "+48 123 456 789",
            email: "hala@kontakt.pl"
        },
        location: {
            lat: 51.417883,
            long: 17.931697,
            address: "Ostrzeszów, ul. Testowa 44"
        },
        rating: 3.9,
        photos: ["https://picsum.photos/202", "https://picsum.photos/201", "https://picsum.photos/202"],
        categories: ["aa", "bb", "cc", "dd", "ee"],
        price_per_hour: 70.00,
        features: ["aa", "bb", "cc", "dd"],
        featured: true
    },
    {
        id: "bbb",
        title: "Hala Sportowa ABC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin fermentum sagittis. Quisque dui odio, placerat quis tincidunt sed, porttitor id mi. Duis suscipit nulla purus, quis egestas turpis congue ut. Duis.",
        open_hours: {
            open_hour: "8:00",
            close_hour: "22:00"
        },
        contact: {
            telephone: "+48 123 456 789",
            email: "hala@kontakt.pl"
        },
        location: {
            lat: 51.370101,
            long: 17.902333,
            address: "Warszawa, ul. Testowa 21"
        },
        rating: 5.0,
        photos: ["https://picsum.photos/502", "https://picsum.photos/501", "https://picsum.photos/500"],
        categories: ["aa", "bb", "cc", "dd", "ee"],
        price_per_hour: 70.00,
        features: ["aa", "cc"],
        featured: true
    },
    {
        id: "ccc",
        title: "Hala Sportowa XYZ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin fermentum sagittis. Quisque dui odio, placerat quis tincidunt sed, porttitor id mi. Duis suscipit nulla purus, quis egestas turpis congue ut. Duis placerat accumsan imperdiet. Etiam vel velit eleifend, vestibulum sapien sit amet, convallis mauris. Nulla facilisi. Sed dignissim libero in ipsum luctus.",
        open_hours: {
            open_hour: "8:00",
            close_hour: "22:00"
        },
        contact: {
            telephone: "+48 123 456 789",
            email: "hala@kontakt.pl"
        },
        location: {
            lat: 51.3052109,
            long: 17.713698,
            address: "Syców, ul. Złota 44"
        },
        rating: 4.1,
        photos: ["https://picsum.photos/402", "https://picsum.photos/401", "https://picsum.photos/400"],
        categories: ["aa", "bb", "cc", "dd", "ee"],
        price_per_hour: 100.00,
        features: ["aa", "cc", "dd"],
        featured: false
    },
    {
        id: "ddd",
        title: "Orlik XYZ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin fermentum sagittis. Quisque dui odio, placerat quis tincidunt sed, porttitor id mi. Duis suscipit nulla purus, quis egestas turpis congue ut. Duis placerat accumsan imperdiet. Etiam vel velit eleifend, vestibulum sapien sit amet, convallis mauris. Nulla facilisi. Sed dignissim libero in ipsum luctus.",
        open_hours: {
            open_hour: "8:00",
            close_hour: "22:00"
        },
        contact: {
            telephone: "+48 123 456 789",
            email: "orlik@kontakt.pl"
        },
        location: {
            lat: 51.376674,
            long: 17.833183,
            address: "Kobyla Góra, ul. Testowa 44"
        },
        rating: 4.9,
        photos: ["https://picsum.photos/602", "https://picsum.photos/601", "https://picsum.photos/600"],
        categories: ["aa", "bb", "cc", "dd", "ee"],
        price_per_hour: 200.00,
        features: ["aa", "cc", "dd"],
        featured: false
    },
];

const Bookings: Booking[] = [
    {
        id: "xx-bb-11",
        date: "13.04.2022",
        facility_id: "bbb",
        start_hour: "18:00",
        end_hour: "20:00",
        cost: 130
    },
    {
        id: "xx-cc-11",
        date: "13.03.2022",
        facility_id: "aaa",
        start_hour: "17:30",
        end_hour: "20:00",
        cost: 150
    }
]

export { Categories, Features, Facilities, Bookings };