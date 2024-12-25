"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex h-[50vh] w-full items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Something went wrong</h2>
              <p className="mt-2 text-muted-foreground">
                Please try refreshing the page
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
