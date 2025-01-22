import { useAppContext } from "@/context";


export default function Home() {
  const hello = useAppContext();
  return (
    <div>
        {hello}
    </div>
  );
}
