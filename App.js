import { NavigationContainer } from '@react-navigation/native';

import Tabs from './router/Tabs.routes';

export default function App() {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}
