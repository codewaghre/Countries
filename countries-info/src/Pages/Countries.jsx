import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postAPI"
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Countries() {

  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");
  // console.log(countries);
  

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData()
      return setCountries(response.data)
    })
  }, [])

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if(isPending ) return <Loader/>
  return (
    <section className="country-section">

      <SearchFilter className="search-Filter"
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries} setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {
          filterCountries.map((currCountry, index) => {
            return <CountryCard country={ currCountry} key={index}  />
          })
        }

      </ul>
    </section>
  )
}

export default Countries
