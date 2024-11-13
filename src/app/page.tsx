import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-[300px]">
      <div className="flex item-center justify-around pt-10">
        <Link href="/apple" className="bg-purple-300 p-2 rounded-xl cursor-pointer">Apple</Link>
        <Link href="/google" className="bg-purple-300 p-2 rounded-xl cursor-pointer">Google</Link>
      </div>
    </div>
  );
}
