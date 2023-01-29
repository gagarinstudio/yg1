import Header from "@/app/Header";
import Space from "@/components/space";

export default function Home() {
  return (
      <>
          <Header />

          <Space />

          <div className="flex relative z-10">
              <h1 className="text-3xl font-bold underline text-white">
                  Hello, Next.js!
              </h1>
          </div>
      </>

  )
}