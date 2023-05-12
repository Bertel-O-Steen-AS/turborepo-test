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
      {primary && (
        <>
          <p className="text-testColorRed text-9xl">This is awesome</p>
          <span className="relative inline-block">
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-red-400 ring-2 ring-white" />
          </span>
        </>
      )}
      <button
        type="button"
        className={`rounded-sm bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {label}
      </button>
    </>
  );
};
