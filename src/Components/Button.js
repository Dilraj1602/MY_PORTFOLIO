function Button({ text, icon, type = "button", onClick }) {
  return (
      <button
          type={type}
          onClick={onClick}
          className="text-[15px] font-[var(--font-medium)] text-white hover:scale-[1.01] transition-all 
          flex items-center justify-evenly hover:cursor-pointer py-[15px] px-[10px] border w-[150px] rounded-xl bg-[var(--first-color)]"
      >
          {text}
          <i className={`${icon} text-white text-xl `}></i>
      </button>
  );
}

export default Button;
