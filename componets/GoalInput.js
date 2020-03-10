import React from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";
import { useState } from "react";
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInput(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.add(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="course goal"
          onChangeText={goalInput}
          value={enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          {/*<Button title="Add" onPress={props.add.bind(this.enteredGoal)} />*/}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 10,
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    marginBottom: 10
  },
  button: {
    width: "40%"
  }
});
export default GoalInput;
