export const Todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Pick up fruits, vegetables, milk, and bread.",
    timestamp: "2025-01-15T08:00:00Z",
  },
  {
    id: 2,
    title: "Finish project report",
    description: "Complete the final draft of the quarterly report.",
    timestamp: "2025-01-15T09:30:00Z",
  },
  {
    id: 3,
    title: "Call the dentist",
    description: "Schedule a check-up appointment for next week.",
    timestamp: "2025-01-15T10:15:00Z",
  },
  {
    id: 4,
    title: "Clean the house",
    description:
      "Vacuum the living room, clean the bathroom, and mop the floors.",
    timestamp: "2025-01-15T11:00:00Z",
  },
  {
    id: 5,
    title: "Pick up laundry",
    description: "Pick up dry cleaning from the local laundry service.",
    timestamp: "2025-01-15T12:00:00Z",
  },
  {
    id: 6,
    title: "Reply to emails",
    description: "Respond to work-related emails and personal messages.",
    timestamp: "2025-01-15T13:00:00Z",
  },
  {
    id: 7,
    title: "Go for a walk",
    description: "Take a 30-minute walk in the park to get some fresh air.",
    timestamp: "2025-01-15T14:00:00Z",
  },
  {
    id: 8,
    title: "Buy birthday gift",
    description: "Find and buy a birthday gift for Sarah.",
    timestamp: "2025-01-15T15:00:00Z",
  },
  {
    id: 9,
    title: "Plan weekend trip",
    description: "Research places to visit for a weekend getaway.",
    timestamp: "2025-01-15T16:00:00Z",
  },
  {
    id: 10,
    title: "Exercise",
    description: "Do a 30-minute workout at the gym.",
    timestamp: "2025-01-15T17:00:00Z",
  },
];

export const libs = [
  {
    id: 1,
    title: "zod",
    link: "https://www.npmjs.com/package/zod",
    features: [
      "Zod ensures that the array contains only strings and no other types (e.g., numbers, booleans).",
      "Zod guarantees type safety by confirming that the array is of type 'string[]' and not some other type.",
      "Zod provides specific error messages when the validation fails.",
      "Zod makes the validation process very straightforward without needing to manually check each item in the array.",
    ],
  },
  {
    id: 2,
    title: "react-hook-form",
    link: "https://www.npmjs.com/package/react-hook-form",
    features: [
      "React Hook Form simplifies form handling by managing form state and validation with minimal re-renders.",
      "It provides an easy way to integrate with validation libraries (like Zod, Yup) for schema-based validation.",
      "React Hook Form reduces boilerplate code, making form handling more efficient and less error-prone.",
      "It provides better performance by reducing unnecessary re-renders of form components, improving speed and responsiveness.",
      "React Hook Form makes it easier to manage complex form behaviors, such as conditional fields, dynamic form controls, and form submission handling.",
    ],
  },
  {
    id: 3,
    title: "tanstack-query",
    link: "https://www.npmjs.com/package/@tanstack/react-query",
    features: [
      "TanStack Query simplifies data fetching and caching, making it easier to manage remote data in React applications.",
      "It automatically handles background data fetching, updates, and synchronization between the client and server.",
      "TanStack Query reduces the need for writing manual state management logic by abstracting the fetching, caching, and synchronization logic.",
      "It provides built-in support for pagination, infinite scrolling, optimistic updates, and query retries.",
      "TanStack Query offers powerful caching and automatic re-fetching capabilities to keep your UI in sync with the server data.",
      "It helps improve performance by reducing unnecessary network requests and optimizing data fetching patterns.",
    ],
  },
  {
    id: 4,
    title: "zod resolver",
    link: "https://www.npmjs.com/package/@hookform/resolvers",
    features: [
      "Zod resolver allows you to use Zod schemas for validation in React Hook Form, enabling simple and declarative form validation.",
      "It automatically integrates Zod validation rules into your form, making it easier to manage and maintain form logic.",
      "Zod resolver performs synchronous or asynchronous validation directly in your form components, providing an effective way to handle validation errors.",
      "With Zod resolver, form errors are automatically tracked and passed to React Hook Form, ensuring the UI stays in sync with validation results.",
      "Zod provides type-safe validation, meaning your form inputs are validated and type-checked simultaneously, reducing runtime errors and improving the developer experience.",
    ],
  },
  {
    id: 5,
    title: "tailwind-merge",
    link: "https://www.npmjs.com/package/tailwind-merge",
    features: [
      "Tailwind-merge helps to safely merge Tailwind CSS class names, resolving conflicts between classes.",
      "It removes duplicate classes (e.g., 'bg-blue-500 bg-blue-500'), ensuring a clean and optimized class list.",
      "Tailwind-merge allows you to combine conditional classes without worrying about overriding styles or conflicts.",
      "It supports both static and dynamic class merging, making it easier to handle complex class management in React or other frameworks.",
      "Tailwind-merge works seamlessly with tools like Next.js, React, and other CSS-in-JS solutions, improving the development experience.",
    ],
  },
  {
    id: 6,
    title: "clsx",
    link: "https://www.npmjs.com/package/clsx",
    features: [
      "clsx is a tiny utility for conditionally joining class names in JavaScript or React applications.",
      "It helps you easily toggle or combine multiple class names based on conditions, such as props or states.",
      "clsx is extremely lightweight, making it perfect for performance-sensitive applications.",
      "It reduces the need for verbose logic like ternary operators or template literals for className management.",
      "clsx works seamlessly with Tailwind CSS or any other class-based styling approach in React and other frameworks.",
    ],
  },
];
