import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { Pagination, PaginationProps } from "../card";
import { HeadingH4Text, ParagraphMediumText } from "../text";

type OnboardingContentProps = {
  text: string;
  title: string;
  image: ImageSourcePropType;
} & PaginationProps;

export const OnboardingContent = ({
  text,
  title,
  image,
  current,
}: OnboardingContentProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode="contain" style={styles.image} />

      <View style={styles.body}>
        <HeadingH4Text style={styles.bodyTitle}>{title}</HeadingH4Text>

        <ParagraphMediumText style={styles.bodyText}>
          {text}
        </ParagraphMediumText>
      </View>

      <Pagination current={current} style={styles.pagination} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 375,
    height: 264,
  },
  body: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  bodyTitle: {
    height: 72,
    justifyContent: "flex-end",
    textAlign: "center",
    textAlignVertical: "bottom",
    color: Colors.light.dark,
  },
  bodyText: {
    height: 64,
    textAlign: "center",
    textAlignVertical: "top",
    color: Colors.light.darkGray,
    marginTop: 8,
  },
  pagination: {
    marginTop: 16,
  },
});
