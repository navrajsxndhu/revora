import * as React from "react"

const Select = ({ children, value, onValueChange }: any) => {
  return (
    <div className="relative inline-block w-full">
      <select 
        value={value} 
        onChange={(e) => onValueChange(e.target.value)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {children}
      </select>
    </div>
  )
}

const SelectTrigger = ({ children, className }: any) => <>{children}</>;
const SelectValue = ({ placeholder }: any) => <option value="" disabled>{placeholder}</option>;
const SelectContent = ({ children }: any) => <>{children}</>;
const SelectItem = ({ value, children }: any) => <option value={value}>{children}</option>;

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }
