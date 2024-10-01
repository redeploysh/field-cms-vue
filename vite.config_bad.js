/*
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/Fields.vue'),
      name: 'FieldCmsVue',
      // the proper extensions will be added
      fileName: (format) => `Fields.${format}.mjs`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
*/

// const parseComponentArg = () => {
//   const arg =
//     process.env.COMPONENT_ARG ||
//     "components/Fields.vue:Fields";
//     //"default/path/to/your/component.vue:MyComponent"; // Default argument format
//   const [path, name] = arg.split(":");
//   return { path, name };
// };

// const { path: componentPath, name: componentName } = parseComponentArg();

// export default defineConfig({
//   plugins: [vue({
//     isProduction: true,
//   })],
//   build: {
//     lib: {
//       entry: componentPath, // Specify the path to your Vue component
//       name: componentName, // Specify the name of your component library
//       formats: ['umd']
//     },
//     rollupOptions: {
//       external: ["vue", "lodash", "moment"], // Specify which modules are external
//       output: {
//         dir: componentPath.replace(/\/[^\/]+$/, ""), // Output directory (same directory as the source)
//         entryFileNames: `${componentName}.js`, // Output file name
//         globals: {
//           vue: "Vue"
//         },
//       },
//     },
//   }
// });

// -------

/*
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()], 
    // Add any other configuration options here
});
*/


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from "vite-plugin-dts"
import { resolve } from "node:path"

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'FieldCmsVue',
      fileName: 'field-cms-vue'
    },
    rollupOptions: {
      external: ['vue'],  // Don't bundle Vue itself
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});