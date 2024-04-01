import React, { Component, ErrorInfo } from "react";
import XCircleIcon from "@components/ui/icons/x-circle";
import ExclamationTriangleIcon from "@components/ui/icons/exclamation-triangle";

interface ErrorBoundaryProps extends React.PropsWithChildren { }

interface ErrorBoundaryState {
  error: Error | null;
}

interface ErrorBoundaryMessageProps {
  errorMessage: string;
  resetState: () => void;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  public state: ErrorBoundaryState = {
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      return (
        <div className="container py-4">
          <ErrorMessage
            errorMessage={this.state.error.message}
            resetState={() => this.setState({ error: null })}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorMessage = ({
  errorMessage,
  resetState,
}: Readonly<ErrorBoundaryMessageProps>) => (
  <div className="min-h-screen flex items-center justify-center">
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
        <div className="card-actions justify-end">
          <button
            className="btn btn-info btn-wide"
            onClick={resetState}
            type="button"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
);
