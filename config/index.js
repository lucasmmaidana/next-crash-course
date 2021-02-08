const dev = process.env.NODE_ENV !== "production"

export const server = dev
  ? "http://localhost:3000"
  : "https://next-crash-course-qb84q0a18.vercel.app"
