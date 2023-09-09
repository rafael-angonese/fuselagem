import ActiveLink from "@/components/Sidebar/ActiveLink";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64">
      <div className="fixed h-[80vh] w-64 overflow-y-auto">
        <ul className="flex flex-col gap-4 list-disc list-inside">
          <ActiveLink href={"/docs/components/accordion"}>Accordion</ActiveLink>
          <ActiveLink href={"/docs/components/alert-dialog"}>
            Alert Dialog
          </ActiveLink>
          <ActiveLink href={"/docs/components/avatar"}>Avatar</ActiveLink>
          <ActiveLink href={"/docs/components/badge"}>Badge</ActiveLink>
          <ActiveLink href={"/docs/components/button"}>Button</ActiveLink>
          <ActiveLink href={"/docs/components/checkbox"}>Checkbox</ActiveLink>
          <ActiveLink href={"/docs/components/collapse"}>Collapse</ActiveLink>
          <ActiveLink href={"/docs/components/command"}>Command</ActiveLink>
          <ActiveLink href={"/docs/components/context-menu"}>
            Context Menu
          </ActiveLink>
          <ActiveLink href={"/docs/components/dialog"}>Dialog</ActiveLink>
          <ActiveLink href={"/docs/components/divider"}>Divider</ActiveLink>
          <ActiveLink href={"/docs/components/dropdown-menu"}>
            Dropdown Menu
          </ActiveLink>
          <ActiveLink href={"/docs/components/grid"}>Grid</ActiveLink>
          <ActiveLink href={"/docs/components/hover-card"}>
            Hover Card
          </ActiveLink>
          <ActiveLink href={"/docs/components/input"}>Input</ActiveLink>
          <ActiveLink href={"/docs/components/label"}>Label</ActiveLink>
          <ActiveLink href={"/docs/components/linear-progress"}>
            Linear Progress
          </ActiveLink>
          <ActiveLink href={"/docs/components/menubar"}>Menubar</ActiveLink>
          <ActiveLink href={"/docs/components/pagination"}>
            Pagination
          </ActiveLink>
          <ActiveLink href={"/docs/components/popover"}>Popover</ActiveLink>
          <ActiveLink href={"/docs/components/radio"}>Radio</ActiveLink>
          <ActiveLink href={"/docs/components/skeleton"}>Skeleton</ActiveLink>
          <ActiveLink href={"/docs/components/slider"}>Slider</ActiveLink>
          <ActiveLink href={"/docs/components/switch"}>Switch</ActiveLink>
          <ActiveLink href={"/docs/components/table"}>Table</ActiveLink>
          <ActiveLink href={"/docs/components/tabs"}>Tabs</ActiveLink>
          <ActiveLink href={"/docs/components/text"}>Text</ActiveLink>
          <ActiveLink href={"/docs/components/textarea"}>Textarea</ActiveLink>
          <ActiveLink href={"/docs/components/tooltip"}>Tooltip</ActiveLink>

          {/* <ActiveLink href={"/docs/components/select"}>Select</ActiveLink> */}
          {/* <ActiveLink href={"/docs/components/modal"}>Modal</ActiveLink> */}
          {/* <ActiveLink href={"/docs/components/input-date"}>
            Input Date
          </ActiveLink> */}
          {/* <ActiveLink href={"/docs/components/loading"}>Loading</ActiveLink> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
