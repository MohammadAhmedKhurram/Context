import { useAppContext } from "@/context/index";


export default function Home() {
  const hello = useAppContext();
  return (
    <div>
        {hello}
    </div>
  );
}
