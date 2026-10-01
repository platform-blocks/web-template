import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Column, PlocksProvider, Text, Title } from '@plocks/ui';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PlocksProvider>
          <StatusBar style="auto" />
          <Column style={{ flex: 1 }} justify="center" align="center" p="lg" gap="lg">
            <Card variant="elevated" p="lg" style={{ maxWidth: 480, width: '100%' }}>
              <Column gap="md">
                <Title order={1}>plocks on the web 🌐</Title>
                <Text c="secondary">
                  A React Native Web single-page app. Edit App.tsx to start building — every
                  plocks component renders here with the same API it has on iOS and
                  Android, so your code stays portable if you ever go native.
                </Text>
                <Button
                  title="Read the docs"
                  variant="filled"
                  onPress={() => {
                    window.open('https://plocks.dev/getting-started', '_blank');
                  }}
                />
              </Column>
            </Card>
          </Column>
        </PlocksProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
