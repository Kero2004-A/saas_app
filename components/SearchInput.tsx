'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // 1. Initialize state with current URL value
    const initialTopic = searchParams.get('topic') || '';
    const [searchQuery, setSearchQuery] = useState(initialTopic);

    useEffect(() => {
        // 2. Prevent unnecessary navigation if state matches URL
        if (searchQuery === initialTopic) return;

        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';

            if (searchQuery) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
            } else if (pathname === '/companions') {
                newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["topic"],
                });
            }

            if (newUrl) {
                router.push(newUrl, { scroll: false });
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    // 3. Keep dependencies clean to avoid infinite triggers
    }, [searchQuery, pathname, router, initialTopic, searchParams]);

    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15} />
            <input
                placeholder="Search companions..."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;