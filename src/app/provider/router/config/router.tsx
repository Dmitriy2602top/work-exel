import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { PageOne, PageTwo } from "~/pages";
import { Loader } from "~/shared/ui";
import App from "../../../App";


export const router = createBrowserRouter([
    {
        path: '/', element: <PageOne />,
        children: [
            { path: 'two', element: <Suspense fallback={<Loader />}> <PageTwo /></Suspense> }
        ]
    }
])