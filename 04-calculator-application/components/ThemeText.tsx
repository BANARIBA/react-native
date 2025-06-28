import { globalStyles } from "@/styles/global-styles";
import { Text, type TextProps } from "react-native";

interface ThemeTextProps extends TextProps {
  variant?: 'h1' | 'h2'; 
}

export const ThemeText = ({children, variant, ...restProps}: ThemeTextProps) => {
  return (
    <Text
      {...restProps}
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[{color: 'white', fontFamily: 'SpaceMono'}, variant === 'h1' && globalStyles.mainResult,  variant === 'h2' && globalStyles.subResult]}
    >
      {children}
    </Text>
  )
}
