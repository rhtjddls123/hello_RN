import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
  onDeleteItem: (text: string) => void;
  id: string;
};

const GoalItem = ({ text, onDeleteItem, id }: Props) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
