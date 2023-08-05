'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { FilterProps } from '@/shared';

export default function Filter({ title, options }: FilterProps) {
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  return (
    <div className="filter">
      <Listbox value={selected} onChange={setSelected}>
        <div className="filter__container">
          <Listbox.Button className="filter__button">
            <span className="block truncate">{selected.name}</span>
            <Image
              src="/assets/chevron-up-down.svg"
              alt="CarHub"
              width={20}
              height={20}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="filter__options">
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `filter__option ${active ? 'filter__option_active' : ''}`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
