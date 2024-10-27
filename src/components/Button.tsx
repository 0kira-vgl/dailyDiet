import { Pressable, Text, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { tv } from "tailwind-variants";

type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary";
  icon?: keyof typeof MaterialIcons.glyphMap; // garante que o nome do ícone seja válido
  color?: string;
};

const button = tv({
  base: "w-full h-16 rounded-md justify-center items-center flex-row gap-2",
  variants: {
    color: {
      primary: "bg-gray-800",
      secondary: "bg-transparent border border-gray-800",
    },
    text: {
      primary: "text-zinc-50 text-lg font-bold",
      secondary: "text-gray-800 text-lg font-bold",
    },
  },
  defaultVariants: {
    color: "primary", // define "primary" como o valor padrão
    text: "primary", // define "primary" como o valor padrão para o texto
  },
});

export function Button({
  title,
  icon,
  variant = "primary",
  color,
  ...rest
}: ButtonProps) {
  return (
    <Pressable {...rest} className={button({ color: variant })}>
      <MaterialIcons name={icon} size={24} color={color || "#fff"} />
      <Text className={button({ text: variant })}>{title}</Text>
    </Pressable>
  );
}
