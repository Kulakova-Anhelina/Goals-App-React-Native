import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./componets/GoalInput";
import GoalItem from "./componets/Goaltem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandller = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput add={addGoalHandller} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
            title={itemData.item.value}
            
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%"
  }
});
