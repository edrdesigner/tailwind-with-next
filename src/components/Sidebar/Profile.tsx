/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/edrdesigner.png"
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Eduardo Reichert
        </span>
        <span className="truncate text-sm text-zinc-500">
          edrdesigner@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost" className="ml-auto">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
