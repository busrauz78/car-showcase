'use client';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { FilterProps, Option, updateSearchParams } from '@/shared';
import { useRouter } from 'next/navigation';

export default function Filter({ title, options }: FilterProps) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (value: Option) => {
    setSelected(value);
    const pathName = updateSearchParams(title, value.id);
    router.push(pathName, { scroll: false });
  };

  return (
    <div className="filter">
      <Listbox  value={selected} onChange={handleUpdateParams}>
        <div className="filter__container">
          <Listbox.Button id={title} className="filter__button">
            <span
              className={`block truncate ${
                selected.id === '' ? ' filter__placeholder' : ''
              }`}
            >
              {selected.name}
            </span>
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
                    `filter__option ${active ? 'filter__option-active' : ''}`
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
