// Shim to fix @radix-ui/react-popper compatibility with @floating-ui/react-dom
// Re-export autoUpdate from @floating-ui/dom since it's not exported by @floating-ui/react-dom v2.x

export { autoUpdate } from '@floating-ui/dom';
