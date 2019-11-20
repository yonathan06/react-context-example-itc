import { createContext } from "react";

export const MyContext = createContext({
  loadingAddUser: false,
  onSubmit: () => {}
}); 