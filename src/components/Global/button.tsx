interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

export function Button({ onClick, children }:ButtonProps) {
    return (
        <button 
            className="font-hero text-xl uppercase text-white rounded bg-secondary-600 hover:bg-secondary-600 hover:scale-110 transition-all duration-500 py-2 px-4" 
            onClick={onClick}
            type="button"
            >
        {children}
      </button>
    )
}