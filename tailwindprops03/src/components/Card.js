
import React from 'react'

const Card = ({userName="name should"}) => {

  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYAV-EB9PuN64Q3Hk0N2pwnKzRYB8v_bKaNar99fb9fm12Io0f" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, {userName}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card