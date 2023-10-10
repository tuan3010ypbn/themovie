import React, {useContext} from 'react'

const AuthContext = React.createContext(null);

export function AuthProvider({children, value}) {
  console.log(1213, children, value);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}