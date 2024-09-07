// "use client";
// import { getAuthToken, removeToken } from "@/lib/token";
// import { useEffect } from "react";

// function AppHOC(WrappedComponent: any) {
//   const AuthenticatedComponent = (props: any) => {
//     console.log(props);
//     useEffect(() => {
//       const eventNotUserData = () => {
//         removeToken();
//         window.location.href = "/login";
//       };
//       const userData = getAuthToken();
//       if (!userData) {
//         eventNotUserData();
//       }
//     }, []);
//     return <WrappedComponent {...props} />;
//   };
//   return AuthenticatedComponent;
// }

// export default AppHOC;
