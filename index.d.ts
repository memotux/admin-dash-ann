declare module '#app' {
  interface PageMeta {
    title: string
    description?: string
  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }
