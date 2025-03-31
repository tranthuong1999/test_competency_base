// import { useRef, forwardRef } from "react";

// type CustomInputProps = {
//   label: string;
// };

// const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ label }, ref) => (
//   <div>
//     <label>{label}</label>
//     <input ref={ref} type="text" />
//   </div>
// ));

// const Parent = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <>
//       <CustomInput ref={inputRef} label="Name" />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// };

// export default Parent;


import React, { Suspense, lazy } from "react";
import TestUI from "./components/TestUI";

const LazyComponent = lazy(() => import("./components/TestUI"));

const App = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
    </Suspense>
);

export default App;
