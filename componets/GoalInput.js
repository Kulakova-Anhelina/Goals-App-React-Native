import React from "react";
import { TextInput, View, StyleSheet, Button} from "react-native";
import { useState } from "react";
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    function goalInput(enteredText) {
        setEnteredGoal(enteredText);
      }
    
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        placeholder="course goal"
        onChangeText={goalInput}
        value={enteredGoal}
        style={styles.input}
      />
      <Button title="Add" onPress={()=>props.add(enteredGoal)} />
   {/*     <Button title="Add" onPress={props.add.bind(this.enteredGoal)} />*/}
    </View>
  );
};
const styles = StyleSheet.create({
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
export default GoalInput;
