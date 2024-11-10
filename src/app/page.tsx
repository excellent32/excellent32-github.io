import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-[300px]">
      <div className="flex item-center justify-around">
        <Link href="/apple" className="cursor-pointer">Apple</Link>
        <Link href="/google" className="cursor-pointer">Google</Link>
      </div>
    </div>
  );
}
