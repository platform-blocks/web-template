# web-template

Web-only starter for [Platform Blocks](https://platform-blocks.com) — a React Native Web single-page app built with Expo. Every component renders with the same API it has on iOS and Android, so your code stays portable if you ever go native.

## Use this template

Click **Use this template** on GitHub to create your own repository from it, or scaffold directly:

```bash
npx create-expo-app@latest my-app --template https://github.com/platform-blocks/web-template
```

## Get started

```bash
npm install
npm run web
```

Build for production:

```bash
npx expo export --platform web
```

The SPA lands in `dist/`, ready for any static host.

## What's inside

- [`@platform-blocks/ui`](https://www.npmjs.com/package/@platform-blocks/ui) with all required peer dependencies installed
- `PlatformBlocksProvider` wired up in [`App.tsx`](./App.tsx) — theming, dark mode (follows the OS setting), overlays all work out of the box
- TypeScript in strict mode

## Learn more

- [Getting started](https://platform-blocks.com/getting-started) — installation, provider, first component
- [Components](https://platform-blocks.com/components) — every component with live demos
- [universal-template](https://github.com/platform-blocks/universal-template) — native apps **plus** a statically rendered website from one codebase

## License

MIT
