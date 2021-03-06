import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    WindiCSS({
      safelist: 'shadow shadow-xl',
    }),
  ],
}

export default config
