import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [access, setAccess] = useState(() => localStorage.getItem("access") || null);
    const [refresh, setRefresh] = useState(() => localStorage.getItem("refresh") || null);

    useEffect(() => {
        if (access) localStorage.setItem("access", access);
        else localStorage.removeItem("access");
        if (refresh) localStorage.setItem("refresh", refresh);
        else localStorage.removeItem("refresh");
    }, [access, refresh]);

    const login = ({ access, refresh, user }) => {
        setAccess(access);
        setRefresh(refresh);
        setUser(user || null);
    };

    const logout = () => {
        setAccess(null);
        setRefresh(null);
        setUser(null);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    };

    return (
        <AuthContext.Provider value={{ user, access, refresh, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// useAuth hook moved to a separate file (useAuth.js)
