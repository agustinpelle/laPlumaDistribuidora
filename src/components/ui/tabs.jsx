import * as React from "react";
import { cn } from "../../lib/utils.js";

const Tabs = ({ className, children, onValueChange, value, ...props }) => (
  <div className={cn("flex flex-col", className)} {...props} data-value={value}>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child;
      // Pass value and onValueChange to children
      return React.cloneElement(child, { value, onValueChange });
    })}
  </div>
);

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, value: triggerValue, onValueChange, ...props }, ref) => {
  const handleClick = () => {
    if (onValueChange && triggerValue !== undefined) {
      onValueChange(triggerValue);
    }
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow",
        className
      )}
      onClick={handleClick}
      {...props}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-2", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
