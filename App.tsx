import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Column, PlatformBlocksProvider, Text, Title } from '@platform-blocks/ui';

export default function App() {
  return (
    <SafeAreaProvider>
      <PlatformBlocksProvider>
        <StatusBar style="auto" />
        <Column style={{ flex: 1 }} justify="center" align="center" p="lg" gap="lg">
          <Card variant="elevated" p="lg" style={{ maxWidth: 480, width: '100%' }}>
            <Column gap="md">
              <Title order={1}>Platform Blocks on the web 🌐</Title>
              <Text colorVariant="secondary">
                A React Native Web single-page app. Edit App.tsx to start building — every
                Platform Blocks component renders here with the same API it has on iOS and
                Android, so your code stays portable if you ever go native.
              </Text>
              <Button
                title="Read the docs"
                variant="filled"
                onPress={() => {
                  window.open('https://platform-blocks.com/getting-started', '_blank');
                }}
              />
            </Column>
          </Card>
        </Column>
      </PlatformBlocksProvider>
    </SafeAreaProvider>
  );
}
