const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

export { DialogFooter };
