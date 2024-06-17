import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import React from "react";
import { categories } from "../constants/data";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Animated, { FadeInRight } from "react-native-reanimated";

const Categories = ({ activeCategory, handleChangeCategory }) => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.flatListContainer}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <CategoryItem
          title={item}
          index={index}
          isActive={activeCategory == item}
          handleChangeCategory={handleChangeCategory}
        />
      )}
    ></FlatList>
  );
};

const CategoryItem = ({ title, index, isActive, handleChangeCategory }) => {
  let textColor = isActive ? theme.colors.white : theme.colors.neutral(0.8);
  let backgroundColor = !isActive
    ? theme.colors.white
    : theme.colors.neutral(0.8);
  return (
    <Animated.View entering={FadeInRight.delay(index*200).duration(1000)}>
      <Pressable
        onPress={() => handleChangeCategory(isActive ? null : title)}
        style={[styles.category, { backgroundColor }]}
      >
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: wp(4),
    gap: 8,
  },
  category: {
    padding: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.grayBG,
    borderRadius: theme.radius.lg,
    borderCurve: "continuous",
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: theme.fontWeights.medium,
  },
});
export default Categories;
