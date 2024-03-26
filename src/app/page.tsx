import Image from "next/image";

export default function Home() {
  return (
    <main className="grid place-items-center h-dvh px-7">
      <div className="max-w-80 bg-white rounded-[20px] p-4 drop-shadow-[0_25px_25px_rgba(0,0,0,0.0476518)]">
        <div className="relative w-full aspect-square rounded-[10px] overflow-hidden">
          <Image src="/images/qr-code.png" alt="qr-code" fill />
        </div>
        <div className="py-6">
          <h1 className="text-[22px] font-bold text-center mb-4 leading-tight text-darkBlue">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[15px] text-grayishBlue text-center px-4 leading-tight">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
