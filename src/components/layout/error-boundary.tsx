import React, { Component, ErrorInfo } from "react";
import { ErrorMessage } from "@components/error-message";

interface ErrorBoundaryProps extends React.PropsWithChildren { }

interface ErrorBoundaryState {
  error: Error | null;
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
