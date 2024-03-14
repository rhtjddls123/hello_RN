import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type Props = {
  addGoalHandler: (enteredGoalText: string) => void;
};
const GoalInput = ({ addGoalHandler }: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandlerChild = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your corse goal!"
        value={enteredGoalText}
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandlerChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
