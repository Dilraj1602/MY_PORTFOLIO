function Button({ text, icon, type = "button", onClick, isdarkmode, disabled = false }) {
  return (
      <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`text-[15px] font-[var(--font-medium)] text-white hover:scale-[1.01] transition-all 
          flex items-center justify-evenly hover:cursor-pointer py-[15px] px-[10px] border w-[150px] 
          ${isdarkmode ? "border-[var(--dark-body-color)]" : "border-white"} rounded-xl bg-[var(--first-color)]
          ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "hover:cursor-pointer"}`}
      >
          {text}
          <i className={`${icon} text-white text-xl `}></i>
      </button>
  );
}

export default Button;
