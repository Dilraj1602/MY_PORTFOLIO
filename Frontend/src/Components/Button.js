function Button({ text, icon, type = "button", onClick,isdarkmode }) {
  return (
      <button
          type={type}
          onClick={onClick}
          className={`w-[95%] max-w-[150px] text-[15px] font-[var(--font-medium)] text-white hover:scale-[1.01] transition-all 
          flex items-center justify-evenly hover:cursor-pointer py-[15px] px-[10px] border ${isdarkmode ? "border-[var(--dark-body-color)]" : "border-white"}  rounded-xl bg-[var(--first-color)]`}
      >
          {text}
          <i className={`${icon} text-white text-xl `}></i>
      </button>
  );
}

export default Button;
