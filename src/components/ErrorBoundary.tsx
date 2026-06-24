import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center p-8">
          <h2 className="text-2xl font-bold text-red-500">Something went wrong</h2>
          <p className="text-zinc-600">An unexpected error occurred. Please refresh the page and try again.</p>
          <button
            className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-4 py-2 transition-all"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
