import { MyContext } from "../contexts/AuthProvider";
const { useContext } = require("react")

const useAuth = () => {
    return useContext(MyContext);
}

export default useAuth;