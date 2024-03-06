import ImgWrapper from "@/app/_components/img-wrapper";
import CustomImg from "@/app/_components/custom-img";

export default function Home() {
  return (
    <main>
      <ImgWrapper className={`flex justify-center items-center overflow-hidden`}>
        <CustomImg
          width={350}
          height={350}
          className={`lg:w-[40%] sm:w-[60%] absolute top-[25%]`}
          delay={0.5}
          src={"/debut/pitbul.png"}
        />
        <CustomImg
          width={350}
          height={350}
          className={`absolute top-[44%] sm:right-[10%] object-cover lg:w-1/2`}
          delay={1}
          src={`debut/outNow.png`}
        />
        <CustomImg
          height={350}
          width={350}
          delay={1.5}
          src={`/debut/debut.png`}
          className={`absolute top-[33%]  object-cover sm:w-1/2`}
        />
      </ImgWrapper>
    </main>
  )
}
