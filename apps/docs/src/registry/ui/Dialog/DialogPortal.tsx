import { DialogPortalProps, Portal } from "@radix-ui/react-dialog";

const DialogPortal = ({ className, ...props }: DialogPortalProps) => (
  <Portal className={className} {...props} />
);
DialogPortal.displayName = Portal.displayName;

export { DialogPortal };
