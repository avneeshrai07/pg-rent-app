import { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable, Image } from "react-native";
import "../global.css";

type PG = {
  id: string;
  name: string;
  area: string;
  rent: number;
  sharing: string;
  rating: number;
  tags: string[];
  image: string;
};

const FILTERS = ["All", "Boys", "Girls", "Co-ed", "Under ₹10k"];

const LISTINGS: PG[] = [
  {
    id: "1",
    name: "Sunrise Residency",
    area: "Lajpat Nagar, Delhi",
    rent: 9500,
    sharing: "2-sharing",
    rating: 4.5,
    tags: ["WiFi", "Meals", "AC"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
  },
  {
    id: "2",
    name: "Green Valley PG",
    area: "Saket, Delhi",
    rent: 12000,
    sharing: "1-sharing",
    rating: 4.7,
    tags: ["WiFi", "Laundry"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
  },
  {
    id: "3",
    name: "Comfort Stay",
    area: "Karol Bagh, Delhi",
    rent: 8000,
    sharing: "3-sharing",
    rating: 4.2,
    tags: ["Meals", "Power Backup"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <View className="flex-1 bg-canvas">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Header */}
        <View className="px-5 pt-14 pb-5">
          <Text className="font-mono text-xs tracking-widest uppercase text-wine-700">
            Delhi, India
          </Text>
          <Text className="font-display text-3xl text-espresso-700 mt-1">
            Find your next PG
          </Text>
          <Text className="font-body text-espresso-600 mt-1">
            Verified rooms, no brokerage.
          </Text>
        </View>

        {/* Search bar */}
        <View className="px-5">
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search by area, e.g. Lajpat Nagar"
            placeholderTextColor="#8B7A77"
            className="font-body bg-canvas-paper border border-espresso-100 rounded-xl px-4 py-3 text-espresso-700"
          />
        </View>

        {/* Filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-5 mt-4"
          contentContainerStyle={{ gap: 8 }}
        >
          {FILTERS.map((filter) => {
            const active = filter === activeFilter;
            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full border ${
                  active
                    ? "bg-wine-700 border-wine-700"
                    : "bg-canvas-paper border-espresso-100"
                }`}
              >
                <Text
                  className={`font-body text-sm ${
                    active ? "text-canvas" : "text-espresso-600"
                  }`}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Section label */}
        <View className="px-5 mt-7 mb-3">
          <Text className="font-mono text-xs tracking-widest uppercase text-espresso-400">
            {LISTINGS.length} PGs near you
          </Text>
        </View>

        {/* Listings */}
        <View className="px-5" style={{ gap: 16 }}>
          {LISTINGS.map((pg) => (
            <Pressable
              key={pg.id}
              className="bg-canvas-paper rounded-2xl border border-espresso-100 overflow-hidden"
            >
              <Image source={{ uri: pg.image }} className="w-full h-40" resizeMode="cover" />
              <View className="p-4">
                <View className="flex-row items-start justify-between">
                  <View className="flex-1 pr-3">
                    <Text className="font-display text-lg text-espresso-700">
                      {pg.name}
                    </Text>
                    <Text className="font-body text-sm text-espresso-600 mt-0.5">
                      {pg.area} · {pg.sharing}
                    </Text>
                  </View>
                  <View className="bg-wine-50 px-2 py-1 rounded-lg">
                    <Text className="font-mono text-xs text-wine-700">
                      ★ {pg.rating}
                    </Text>
                  </View>
                </View>

                <View className="flex-row mt-3" style={{ gap: 6 }}>
                  {pg.tags.map((tag) => (
                    <View key={tag} className="bg-espresso-50 px-2.5 py-1 rounded-full">
                      <Text className="font-body text-xs text-espresso-600">{tag}</Text>
                    </View>
                  ))}
                </View>

                <View className="flex-row items-baseline justify-between mt-4 pt-3 border-t border-espresso-100">
                  <Text className="font-mono text-xl text-espresso-700">
                    ₹{pg.rent.toLocaleString("en-IN")}
                    <Text className="font-body text-sm text-espresso-400"> /month</Text>
                  </Text>
                  <Text className="font-body text-sm font-semibold text-wine-700">
                    View details →
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}