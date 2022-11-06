import React, { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, SmallButton } from "../../components/button";
import { Pagination } from "../../components/card";
import { OnboardingContent } from "../../components/onboarding";
import Colors from "../../constants/Colors";
import { onboardUser } from "../../features/user/user-slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import onboardingSlides from "./data";

export const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const _renderItem = ({
    item,
  }: ListRenderItemInfo<typeof onboardingSlides[number]>) => (
    <OnboardingContent
      image={item.image}
      title={item.title}
      text={item.text}
      style={{ width: width }}
    />
  );

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index as number);
    }
  ).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const isLastSlide = () => currentIndex === onboardingSlides.length - 1;

  const handleNextButtonPress = () => {
    if (isLastSlide()) {
      dispatch(onboardUser());
    } else {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleSkipButtonPress = () => dispatch(onboardUser());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipButton}>
        <SmallButton
          text="Skip"
          align="right"
          onPress={handleSkipButtonPress}
        />
      </View>

      <View>
        <FlatList
          ref={slidesRef}
          data={onboardingSlides}
          renderItem={_renderItem}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          scrollEventThrottle={32}
          onScroll={onScroll}
        />

        <Pagination
          data={onboardingSlides}
          scrollX={scrollX}
          style={styles.pagination}
        />
      </View>

      <View style={styles.nextButton}>
        <Button
          text={isLastSlide() ? "Let's Start" : "Next"}
          level="primary"
          onPress={handleNextButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.light.white,
  },
  skipButton: {
    alignItems: "flex-end",
    padding: 16,
  },
  nextButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  pagination: {
    marginTop: 16,
    alignSelf: "center",
  },
});
