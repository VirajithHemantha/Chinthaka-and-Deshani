import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

const SHARE_FAVICON_PATH = '/2026.07.16-20260612T100209Z-3-001/my/RWP01402.jpg';
const SHARE_IMAGE_PATH = '/og-image.jpg';
const SHARE_IMAGE_SOURCE = path.join(
  __dirname,
  'public/2026.07.16-20260612T100209Z-3-001/my/RWP00717.jpg',
);
const SHARE_IMAGE_OUTPUT = path.join(__dirname, 'public/og-image.jpg');
const DEFAULT_SITE_URL = 'https://gimhan-teneeshiya-weddinginvitation.vercel.app';

function getSiteUrl(env: Record<string, string>): string {
  const configured = env.VITE_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return DEFAULT_SITE_URL;
}

async function ensureOgImage(): Promise<void> {
  const sharp = (await import('sharp')).default;
  await sharp(SHARE_IMAGE_SOURCE)
    .jpeg({quality: 85, progressive: true})
    .toFile(SHARE_IMAGE_OUTPUT);
}

function ogImagePlugin(): Plugin {
  return {
    name: 'og-image',
    async buildStart() {
      await ensureOgImage();
    },
    configureServer() {
      void ensureOgImage();
    },
  };
}

function siteMetaPlugin(siteUrl: string): Plugin {
  const shareImageUrl = `${siteUrl}${SHARE_IMAGE_PATH}`;

  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return html
        .replaceAll('%SITE_URL%', siteUrl)
        .replaceAll('%SHARE_IMAGE_URL%', shareImageUrl)
        .replaceAll('%SHARE_IMAGE_PATH%', SHARE_IMAGE_PATH)
        .replaceAll('%SHARE_FAVICON_PATH%', SHARE_FAVICON_PATH);
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = getSiteUrl(env);

  return {
    plugins: [ogImagePlugin(), react(), tailwindcss(), siteMetaPlugin(siteUrl)],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
