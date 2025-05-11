import * as React from "react";
import { cn } from "../../lib/utils.js";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { X } from "lucide-react";

const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-full m-0 list-none z-[1000] outline-none",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

const Toast = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(
      "bg-white rounded-md border border-gray-200 p-4 shadow-md grid grid-cols-[auto_max-content] gap-4",
      className
    )}
    {...props}
  />
));
Toast.displayName = "Toast";

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold text-gray-900", className)}
    {...props}
  />
));
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm text-gray-700 opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = "ToastAction";

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute top-2 right-2 rounded-md p-1 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      className
    )}
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = "ToastClose";

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
};
