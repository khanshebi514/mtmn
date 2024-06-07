import Link from "next/link";

export default function ScrollArea() {
    let scrollClass = 'hover:text-yellow-500 border-r border-black px-2 hover:border-yellow-500'
  return (
    <section>
        <div className="flex flex-col gap-3 justify-center items-end">
            <Link className={scrollClass} href='/'>Start</Link>
            <Link className={scrollClass} href='/'>0</Link>
            <Link className={scrollClass} href='/'>1</Link>
            <Link className={scrollClass} href='/'>2</Link>
        </div>
    </section>
  )
}
