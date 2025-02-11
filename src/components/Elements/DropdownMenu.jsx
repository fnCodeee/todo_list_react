import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export const DropdownMenu = (props) => {
  const {task, handleDelete, toggleEdit} = props;

  return (
    <div className="top-24 w-full text-right z-30">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:outline-white data-[focus]:outline-1 data-[focus]:bg-gray-700">
          Options
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems
           transition
           anchor="bottom end"
           className="z-40 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-slate-200 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button 
              onClick={() => toggleEdit(task.id, task.isEdited)}
              className="group flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <PencilIcon className="size-4 fill-white/30" /> */}
              Rename
              <kbd className="ml-auto hidden font-sans text-xs text-slate-300 group-data-[focus]:inline">⌘R</kbd>
            </button>
          </MenuItem>
          <MenuItem className="border-t border-slate-500">
            <button
              onClick={() => handleDelete(task.id)} 
              className="group flex w-full items-center gap-2 py-1.5 px-3 data-[focus]:bg-white/10">
              {/* <TrashIcon className="size-4 fill-white/30" /> */}
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-slate-300 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

    </div>
  )
}
