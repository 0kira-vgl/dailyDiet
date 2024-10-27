import { Text } from "react-native";

type LabelProps = {
  title: string;
};

export function Label({ title }: LabelProps) {
  return <Text className="text-lg font-bold text-[#333638] mb-1">{title}</Text>;
}
