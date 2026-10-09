import { Component } from "react";

/**
 * Minimal error boundary. Renders `fallback` (default: nothing) if its subtree
 * throws, so a failing decorative widget (e.g. WebGL Ballpit) can't take down
 * the whole page.
 */
export default class SafeBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.warn("SafeBoundary caught:", error?.message || error);
  }

  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
