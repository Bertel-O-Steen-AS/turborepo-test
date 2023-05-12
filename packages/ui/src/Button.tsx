interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
}: Props) => {
  return (
    <>
      <h1 className="bg-orange-200 font-bold p-12"> + React + Tailwind</h1>

      <button className="bg-green-500 text-orange-600">{label} dasdsa</button>
    </>
  );
};
