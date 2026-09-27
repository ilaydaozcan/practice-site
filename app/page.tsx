export default function Home() {
  return (
    <section className="flex flex-1 w-full flex-col items-center justify-center bg-[#800020] px-16 py-32 text-center">
      <h1 className="font-sans text-[40px] font-bold text-white">
        Ilayda Ozcan
      </h1>
      <p className="mt-14 font-sans text-[24px] font-light text-white">
        Product Manager at Pointr,{" "}
        <a
          href="https://www.linkedin.com/in/ilaydaozcn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline"
        >
          click here for more information
        </a>
      </p>
    </section>
  );
}
