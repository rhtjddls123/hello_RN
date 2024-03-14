import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((curCourseGoals) => [
      ...curCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const onDeleteItem = (id: string) => {
    setCourseGoals((courseGoals) => courseGoals.filter((p) => p.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={onDeleteItem}
              id={itemData.item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
