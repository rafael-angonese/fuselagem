const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={"flex flex-col space-y-1.5 text-center sm:text-left"}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

export { DialogHeader };
