import React from "react";
import Card from "../../components/common/Card";

const withFunctions = (Component) => (props) => {
    const toggleLocalStorageItem = () => {
        const local = localStorage.getItem("auth");
        if (local === "token") {
            return true;
        } else {
            return false;
        }
    };
    const isAuth = toggleLocalStorageItem();

    console.log(isAuth);

    const onLogIn = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <Card>
            <Component
                {...props}
                isAuth={isAuth}
                onLogIn={onLogIn}
                onLogOut={onLogOut}
            />
        </Card>
    );
};

export default withFunctions;
