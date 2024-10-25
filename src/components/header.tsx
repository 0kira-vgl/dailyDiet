import { Image, Pressable, View } from "react-native";
import LogoImg from "../assets/logo/logo.png";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("home");
  }

  return (
    <View className="w-full flex-row items-center justify-center">
      {showBackButton && (
        <Pressable className="flex-1" onPress={handleGoHome}>
          <ChevronLeft size={40} color="#fff" />
        </Pressable>
      )}

      <Image source={LogoImg} className="w-11 h-14" />
    </View>
  );
}
