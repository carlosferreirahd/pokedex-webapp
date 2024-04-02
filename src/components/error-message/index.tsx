import ExclamationTriangleIcon from "@components/ui/icons/exclamation-triangle";
import XCircleIcon from "@components/ui/icons/x-circle";
import cn from "@utils/cn";

interface ErrorMessageProps {
  className?: string;
  errorMessage: string;
  resetState?: () => void;
}

export function ErrorMessage({
  className,
  errorMessage,
  resetState,
}: Readonly<ErrorMessageProps>) {

  return (
    <div className={cn("min-h-screen flex items-center justify-center", className)}>
      <div className="card bg-error text-error-content shadow-2xl w-full max-w-lg">
        <div className="card-body items-center text-center gap-3">
          <h1 className="card-title flex-col">
            <XCircleIcon className="size-16" />
            <span>Error</span>
          </h1>
          <h2>
            Sorry... something unexpected happened
          </h2>
          <div className="alert shadow-2xl my-3" role="alert">
            <ExclamationTriangleIcon className="size-6" aria-label="Warning" />
            <span>
              <span className="font-bold">Error Details:</span>
              {" "}
              {errorMessage}
            </span>
          </div>
          {resetState && (
            <div className="card-actions justify-end">
              <button
                className="btn btn-info btn-wide"
                onClick={resetState}
                type="button"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
