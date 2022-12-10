import Page from "../components/Page";

export default function LoginV2() {
  return (
    <body className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Page />
        <div className="bg-[#575A89B2] h-20 w-[250px] rounded-md hover:bg-slate-600 shadow-black shadow-sm text-center flex flex-col justify-center items-center mt-16">
          <button class="text-2xl">LOGIN</button>
        </div>
      </div>
    </body>
  );
}
