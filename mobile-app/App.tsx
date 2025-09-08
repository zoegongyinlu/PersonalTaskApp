import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Patch DOM methods to handle React 19 compatibility issues
if (typeof window !== 'undefined' && typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    if (child.parentNode !== this) {
      console.warn('React DOM: Attempted to remove child from different parent, ignoring');
      return child;
    }
    return originalRemoveChild.apply(this, arguments);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      console.warn('React DOM: Attempted to insert before reference node from different parent, ignoring');
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments);
  };
}

export default function App() {
  const ctx = require.context('./app', true, /\.(js|jsx|ts|tsx)$/);
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
