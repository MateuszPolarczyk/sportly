import { ImageSourcePropType } from "react-native"

type Category = {
    id: string;
    icon: ImageSourcePropType;
    title: string;
}

type Feature = {
    id: string;
    title: string;
    icon: ImageSourcePropType;
}

type Facility = {
    id: string;
    title: string;
    description: string;
    open_hours: { open: string, close: string };
    contact: { telephone: string, email: string };
    location: { address: string, lat: number, long: number };
    rating: number;
    photos: string[];
    categories: string[];
    price_per_hour: number;
    features: string[];
    featured: boolean;
}

export { Category, Feature, Facility };