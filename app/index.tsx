import { ScrollView, View } from "react-native";
import Header from "./components/layout/header";
import BannerPagerView from "./components/banners/banner-pager-view";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-100"
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header />

        <BannerPagerView />
      </View>
    </ScrollView>
  );
}
