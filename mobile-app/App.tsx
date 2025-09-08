import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

export default function App() {
  const ctx = require.context('./app', true, /\.(js|jsx|ts|tsx)$/);
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);