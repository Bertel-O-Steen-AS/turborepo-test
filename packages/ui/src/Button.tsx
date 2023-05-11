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
  return <button type="button">{label}</button>;
};
