declare module '#app' {
  interface PageMeta {
    title: string
    description?: string
  }
}

export type Optional<T, K extends keyof T> = Omit<T, K> & { [P in keyof T]?: T[P] | undefined; }
