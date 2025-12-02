import { useMemo, useState } from "react";

export function useFilters(data = []) {
    const [nameFilter, setNameFilter] = useState('')
    const [genderFilter, setGenderFilter] = useState('')

    const filteredData = useMemo(() => {
        const name = nameFilter.toLowerCase().trim();
        return data.filter((item) => {
            const matchesName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
            const matchesGender = genderFilter ? item.gender === genderFilter : true;
            return matchesName && matchesGender
        })
    }, [data, nameFilter, genderFilter])

    return { filteredData, nameFilter, genderFilter, setNameFilter, setGenderFilter };
}