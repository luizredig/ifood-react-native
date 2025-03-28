import { Image, Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";

const BannerPagerView = () => {
  return (
    <View className="w-full h-36 rounded-2xl mt-5 mb-4 px-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 rounded-2xl"
          key={1}
          onPress={() => {}}
        >
          <Image
            className="w-full h-36 rounded-2xl"
            source={require("../../../assets/images/banners/banner1.png")}
          />
        </Pressable>

        <Pressable
          className="w-full h-36 rounded-2xl"
          key={2}
          onPress={() => {}}
        >
          <Image
            className="w-full h-36 rounded-2xl"
            source={require("../../../assets/images/banners/banner2.png")}
          />
        </Pressable>
      </PagerView>
    </View>
  );
};

export default BannerPagerView;
