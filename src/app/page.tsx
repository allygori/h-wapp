import InputBase from "@/components/inputs/input-base/input-base";
import IconFilter from "@/components/svgs/filter";

export default function Home() {
  const handleSave = (content: unknown) => {
    console.log("Home::handleSace content", content);
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <p>Default</p>
      <InputBase className="mb-4" />
      <p>Placeholder</p>
      <InputBase placeholder="Placeholder text" className="mb-4" />
      <p>Disabled</p>
      <InputBase disabled={true} className="mb-4" />
      <p>With Icon</p>
      <InputBase icon={<IconFilter className="h-4 w-4" />} className="mb-4" />
      <p>With Icon Disabled</p>
      <InputBase
        icon={<IconFilter className="h-4 w-4" />}
        disabled={true}
        className="mb-4"
      />
    </main>
  );
}
