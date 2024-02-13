import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Error Page | Robuild: Teach Your Kids to Think like Engineers",
    description: "This is Error Page for Robuild",
    // other metadata
};

const ErrorPage = () => {
    return (
        <NotFound />
    );
};

export default ErrorPage;
