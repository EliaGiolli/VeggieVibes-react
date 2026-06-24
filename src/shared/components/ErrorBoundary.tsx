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
        <div
          role="alert"
          className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center p-8"
        >
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
            <span className="text-red-500 text-2xl font-bold" aria-hidden="true">!</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-900">Something went wrong</h2>
          <p className="text-stone-500 max-w-sm leading-relaxed">
            An unexpected error occurred. Please refresh the page and try again.
          </p>
          <button
            className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl px-6 py-2.5 transition-all font-semibold text-sm active:scale-[0.97]"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
