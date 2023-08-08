"use client";
import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { updateSearchParams } from '../utils';
import { useRouter, useSearchParams  } from 'next/navigation';

import { BRANDS } from '@/constants';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setSelected(value);
    const pathName = updateSearchParams('make', value.toLowerCase());
    router.push(pathName, { scroll: false });
  };

  useEffect(() => {
    if (searchParams.get('make') !== '') {
      const matchedBrand = BRANDS.find(brand => brand.toLowerCase() === searchParams.get('make'))
      if (matchedBrand) {
        setQuery(matchedBrand);
        setSelected(matchedBrand);
      }
    }
    return(() => {
      setQuery('');
      setSelected('');
    })
  }, [searchParams]);

  const filteredBrands =
    query === ''
      ? BRANDS
      : BRANDS.filter((brand) =>
          brand
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="search">
      <Combobox value={selected} onChange={handleChange}>
        <div className="search__container">
          <div className="search__input-container">
            <Combobox.Input
              autoComplete="off"
              id="search"
              className="search__input"
              displayValue={(brand: string) => brand}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button id="search" className="search__button">
              <Image
                src="/assets/magnifying-glass.svg"
                alt="CarHub"
                width={20}
                height={20}
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredBrands.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredBrands.map((brand: string) => (
                  <Combobox.Option
                    key={brand}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }`
                    }
                    value={brand}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {brand}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
export default Search;
