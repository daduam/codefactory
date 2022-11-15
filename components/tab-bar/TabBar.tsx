import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import { ProfileIcon } from "../icon";
import { ParagraphMediumText } from "../text";

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const tintColor = isFocused ? Colors.light.primary : Colors.light.gray;

        let tabBarIcon = null;

        if (route.name === "Profile") {
          tabBarIcon = <ProfileIcon color={tintColor} />;
        }

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}
          >
            <View style={styles.tabBarIcon}>{tabBarIcon}</View>

            <ParagraphMediumText style={{ color: tintColor }}>
              {label}
            </ParagraphMediumText>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.white,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    borderColor: Colors.light.gray,
    borderTopWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,
    marginHorizontal: -0.5,
    paddingTop: 10,
    paddingBottom: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabBarButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 54,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: "center",
  },
});
