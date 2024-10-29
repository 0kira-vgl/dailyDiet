import { Pressable, PressableProps, Text } from "react-native";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary";
};

export function Button({
  title,
  className,
  variant = "primary",
  ...rest
}: ButtonProps & { className?: string }) {
  const button = tv({
    base: "font-medium w-full justify-center rounded-md items-center gap-2 flex-row h-16 bg-gray-800 active:opacity-80",
    variants: {
      color: {
        primary: "bg-blue-500 text-zinc-50",
        secondary: "bg-transparent text-gray-800",
      },
      text: {
        primary: "text-zinc-50 text-lg font-bold",
        secondary: "text-gray-800 text-lg font-bold",
      },
    },

    // defaultVariants: {
    //   color: "primary",
    // },
  });

  return (
    <Pressable
      {...rest}
      className={twMerge(button({ color: variant }), className)}
    >
      <Text className={twMerge(button({ text: variant }), className)}>
        {title}
      </Text>
    </Pressable>
  );
}
