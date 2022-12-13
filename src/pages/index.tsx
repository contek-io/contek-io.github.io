import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import icon from "../assets/images/icon-with-name.png";
import linkedin from "../assets/images/linkedin.png";
import bg from "../assets/images/bg.mp4";
import buttonBg from "../assets/images/button-bg.png";

const Button = ({ title, onClick }: { title: string; onClick?: () => void }) => {
  return (
    <button
      className="py-[14px] px-auto rounded whitespace-nowrap w-[260px] relative"
      onClick={onClick}
    >
      <img src={buttonBg} alt=" " className="w-full absolute top-[1px] bottom-[1px]"></img>
      {title}
    </button>
  );
};
const IndexPage: React.FC<PageProps> = () => {
  return (
    //Head
    <>
      <header className="w-full fixed top-0 z-20 flex justify-between items-center h-[64px] px-8 md:px-12 border-b-[#434343] border-b bg-black">
        <img alt="contek logo" src={icon} className="h-[28px]"></img>
        <img
          alt="in"
          src={linkedin}
          className="h-[28px] cursor-pointer"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/contek?trk=ppro_cprof",
              "_blank"
            );
          }}
        ></img>
      </header>
      <main className="relative w-screen min-h-screen">
        <video
          className="fixed top-0 bottom-0 left-0 right-0 z-10 object-cover w-screen h-screen"
          controls={false}
          autoPlay
          loop
          muted
          src={bg}
        ></video>
        <div className="relative z-10 w-screen h-full px-[20px] sm:px-[100px] md:px-[160px] pt-[64px] pb-[10px]">
          <div
            className="pt-20 md:pt-30 xl:pt-40 text-3xl xl:text-4xl 2xl:text-5xl lg:flex-nowrap lg:whitespace-nowrap"
            style={{ fontFamily: "PressStart2P",lineHeight:"1.5" }}
          >
            Discovering Patterns <span className="md:ml-[-10px]">in</span>
          </div>
          <div
            className="text-3xl xl:text-4xl 2xl:text-5xl lg:flex-nowrap lg:whitespace-nowrap gradient-title pt-2 w-fit relative"
            style={{ fontFamily: "PressStart2P",lineHeight:"1.5" }}
          >
            Crypto Markets
            <span className="animate-cursor absolute 2xl:bottom-[6px] xl:bottom-[4px] bottom-[4px]">_</span>
          </div>
          <div className=" text-2xl pt-16 leading-loose" style={{lineHeight:"2"}}>
            Contrarian Technology is a proprietary trading firm. We run quant
            strategies 24/7 across major crypto markets without manual
            intervention.
          </div>
          <div
            className="flex pt-20 sm:pt-52 gap-5 pb-20 flex-wrap text-[13px] leading-[20px]"
            style={{ fontFamily: "PressStart2P" }}
          >
            {/* <Button
              title="CAREERS"
              onClick={() => {
                window.open(
                  "https://www.zhipin.com/gongsir/9ab2e1f8dfed1df51nBy2ty4Flo~.html?ka=company-jobs",
                  "_blank"
                );
              }}
            /> */}
            <a href="mailto:contact@contek.io">
            <Button
              title="CONTACT US"
            />
            </a>
          </div>
        </div>
      </main>
      <footer
        className="w-full fixed bottom-0 h-[8px] z-20"
        style={{
          background: "linear-gradient(90deg, #01FF67 -0.06%, #01ACA2 100%)",
        }}
      />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
