export const HamburgerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-14 items-center justify-center rounded border border-white/10 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          stroke="rgba(255, 255, 255, 0.5)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M4 7h22M4 15h22M4 23h22"
        />
      </svg>
    </button>
  )
}