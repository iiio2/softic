import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   port: 8888,
  // },
  plugins: [react()],
});
