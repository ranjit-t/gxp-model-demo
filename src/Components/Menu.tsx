export default function Menu({ setisMenuOpen, isMenuOpen }: any) {
  return (
    <div
      className={`h-full shadow-md bg-[#95B1A9] relative transition-width ease-in-out duration-100 ${
        isMenuOpen ? "w-[336px]" : "w-[48px]"
      }`}
    >
      <button
        className="text-white text-[30px] text-center w-full h-[60px] bg-[#57756D] absolute bottom-0"
        onClick={() => {
          setisMenuOpen((prev: boolean) => !prev);
        }}
      >
        {isMenuOpen ? "<" : ">"}
      </button>
    </div>
  );
}
