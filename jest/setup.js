import "react-native-gesture-handler/jestSetup";

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

// Use this instead with React Native >= 0.64
// jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  global.__reanimatedWorkletInit = jest.fn();

  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
