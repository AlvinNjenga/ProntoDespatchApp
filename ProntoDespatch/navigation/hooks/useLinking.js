import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

// This is fine to leave as is. The link I'd potentially want to create would be
// on his website, if you click "Request quote in app", maybe.
// But then they'd be either downloading the app or on their phone already...

export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        },
      },
    },
  });
}
