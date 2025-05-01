import {Spinner} from "@heroui/spinner";

export const LoadingSkeleton = () => {
    return (
        <div className="flex flex-row justify-center content-center h-full bg-black/50">
             <Spinner size="lg" label="Loading..." color="primary" labelColor="primary" variant="gradient" />
        </div>
    )
}