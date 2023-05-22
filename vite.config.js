export default {
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'canvas-ts',
      formats: ['es'],
      fileName: () => 'canvas-ts.js',
    }
  },
}
