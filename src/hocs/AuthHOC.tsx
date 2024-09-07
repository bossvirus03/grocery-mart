// "use client";
// import { getAuthToken } from "@/lib/token";
// import { useEffect } from "react";

// function AuthHOC(WrappedComponent: any) {
//   return function AuthenticatedComponent(props: any) {
//     // const router = useRouter();
//     useEffect(() => {
//       const userData = getAuthToken(true);
//       if (userData) {
//         window.location.href = "/";
//         // router.push("/");
//       }
//     }, []);
//     return <WrappedComponent {...props} />;
//   };
// }

// export default AuthHOC;
