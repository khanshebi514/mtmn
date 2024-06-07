import { FaArrowDown } from "react-icons/fa";
export default function TextArea() {
  return (
    <section className="w-[500px] h-[200px] flex flex-col gap-4">
      <div> 
        <p className="font-sm text-yellow-500"><span>_______</span>A hicking Guide</p>
      </div>

      <div>
        <h1 className="font-bold text-3xl">Be Prepared For The Mountain And Beyound</h1>
      </div>
      <p className="text-sm flex items-center gap-2">Scroll Down <span>{<FaArrowDown/>}</span></p>
    </section>
  )
}
