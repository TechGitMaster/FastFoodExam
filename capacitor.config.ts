import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fastfood',
  appName: 'fastfood',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
