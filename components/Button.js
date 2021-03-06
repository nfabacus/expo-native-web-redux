import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { Button as PaperButton } from "react-native-paper";

const Button = ({ mode, contentStyle, labelStyle, children, ...props }) => (
  <View style={styles.buttonWrapper}>
  <PaperButton
    style={ mode === 'outlined' ? { ...styles.button, ...styles.outlinedButton } : styles.button }
    labelStyle={styles.buttonLabel}
    contentStyle={styles.buttonContent}
    mode={mode}
    { ...props }
  >
    {children}
  </PaperButton>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 10,
  },
  outlinedButton: {
    borderWidth: 3
  },
  buttonContent: {
    height: 50
  },
  buttonLabel: {
    fontWeight: Platform.OS === "web" ? "bold" : "bold",
  },
});

export default Button;
