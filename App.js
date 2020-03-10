import React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./componets/GoalInput";
import GoalItem from "./componets/Goaltem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandller = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);

    
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAddtion = () =>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="add new goal" onPress={() =>setIsAddMode(true)}></Button>
      <GoalInput 
      visible ={isAddMode}
      add={addGoalHandller} 
      onCancel = {cancelGoalAddtion}
      />

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
