import { NavigationContainer } from '@react-navigation/native';

import Tabs from './router/AlarmStack.routes';

export default function App() {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}
