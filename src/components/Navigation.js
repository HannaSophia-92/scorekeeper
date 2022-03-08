import "./Navigation.css";

export default function Navigation({ children, onClick, isActive }) {
  return (
    <nav>
      <button
        className={
          isActive
            ? "Button__navigation Button__navigation--active"
            : "Button__navigation"
        }
        onClick={onClick}
      >
        {children}
      </button>
    </nav>
  );
}
