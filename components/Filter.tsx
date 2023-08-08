'use client';
import { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { updateSearchParams } from '@/utils';
import { FilterProps, Option } from '@/types';

export default function Filter({ title, options }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (value: Option) => {
    setSelected(value);
    const pathName = updateSearchParams(title, value.id.toLowerCase());
    router.push(pathName, { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get(title) !== '') {
      const matchedOption = options.find(option => option.name.toLowerCase() === searchParams.get(title))
      if (matchedOption) {
        setSelected(matchedOption);
      }
    }
    return(() => {
      setSelected(options[0]);
    })
  }, [searchParams, title, setSelected, options]);

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
